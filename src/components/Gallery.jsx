import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { photos, galleryOrder, galleryFilters, wm, commonsPage } from '../data/photos'
import Photo from './Photo'

export default function Gallery() {
  const [filter, setFilter] = useState('semua')
  const [current, setCurrent] = useState(null) // index dalam daftar terfilter
  const touchX = useRef(null)

  const items = useMemo(
    () =>
      galleryOrder
        .map((id) => ({ id, ...photos[id] }))
        .filter((p) => filter === 'semua' || p.category === filter),
    [filter],
  )

  const close = useCallback(() => setCurrent(null), [])
  const step = useCallback(
    (dir) => setCurrent((c) => (c === null ? c : (c + dir + items.length) % items.length)),
    [items.length],
  )

  useEffect(() => {
    if (current === null) return
    const onKey = (e) => {
      if (e.key === 'Escape') close()
      if (e.key === 'ArrowRight') step(1)
      if (e.key === 'ArrowLeft') step(-1)
    }
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [current, close, step])

  const active = current !== null ? items[current] : null

  return (
    <section className="section gallery" id="galeri">
      <div className="container">
        <header className="section-head section-head--center reveal">
          <p className="eyebrow">Galeri keindahan alam</p>
          <h2 className="section-title">Raja Ampat dalam bingkai</h2>
          <p className="section-lead">
            Klik foto untuk melihat lebih besar. Gunakan tombol panah di keyboard atau geser di
            layar sentuh untuk berpindah foto.
          </p>
        </header>

        <div className="filters reveal" role="tablist" aria-label="Filter galeri">
          {galleryFilters.map((f) => {
            const count =
              f.id === 'semua'
                ? galleryOrder.length
                : galleryOrder.filter((id) => photos[id].category === f.id).length
            return (
              <button
                key={f.id}
                role="tab"
                aria-selected={filter === f.id}
                className={filter === f.id ? 'is-active' : ''}
                onClick={() => setFilter(f.id)}
              >
                {f.label}
                <span>{count}</span>
              </button>
            )
          })}
        </div>

        <ul className="masonry">
          {items.map((p, i) => (
            <li key={p.id} className={`masonry__item masonry__item--${p.ratio}`}>
              <button onClick={() => setCurrent(i)} aria-label={`Perbesar foto: ${p.title}`}>
                <Photo id={p.id} width={p.ratio === 'pano' ? 1280 : 960} />
                <span className="masonry__caption">
                  <strong>{p.title}</strong>
                  <small>{p.place}</small>
                </span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      {active && (
        <div
          className="lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={active.title}
          onClick={close}
          onTouchStart={(e) => (touchX.current = e.touches[0].clientX)}
          onTouchEnd={(e) => {
            if (touchX.current === null) return
            const dx = e.changedTouches[0].clientX - touchX.current
            if (Math.abs(dx) > 50) step(dx < 0 ? 1 : -1)
            touchX.current = null
          }}
        >
          <button className="lightbox__close" onClick={close} aria-label="Tutup">×</button>
          <button
            className="lightbox__arrow lightbox__arrow--prev"
            onClick={(e) => { e.stopPropagation(); step(-1) }}
            aria-label="Foto sebelumnya"
          >
            ‹
          </button>
          <figure className="lightbox__figure" onClick={(e) => e.stopPropagation()}>
            <img key={active.id} src={wm(active, 1280)} alt={active.title} />
            <figcaption>
              <div>
                <strong>{active.title}</strong>
                <span>{active.place}</span>
              </div>
              <small>
                {current + 1} / {items.length} · Foto: {active.author} ·{' '}
                <a href={commonsPage(active)} target="_blank" rel="noreferrer">
                  {active.license}
                </a>
              </small>
            </figcaption>
          </figure>
          <button
            className="lightbox__arrow lightbox__arrow--next"
            onClick={(e) => { e.stopPropagation(); step(1) }}
            aria-label="Foto berikutnya"
          >
            ›
          </button>
        </div>
      )}
    </section>
  )
}
