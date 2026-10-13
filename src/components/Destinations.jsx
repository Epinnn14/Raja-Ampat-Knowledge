import { useEffect, useState } from 'react'
import { destinations, pasirTimbulArticle } from '../data/content'
import Photo from './Photo'

export default function Destinations() {
  const [articleOpen, setArticleOpen] = useState(false)
  const pasir = destinations.find((d) => d.article)

  useEffect(() => {
    if (!articleOpen) return
    const onKey = (e) => e.key === 'Escape' && setArticleOpen(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onKey)
    }
  }, [articleOpen])

  return (
    <section className="section destinations" id="destinasi">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Destinasi</p>
          <h2 className="section-title">Tempat yang wajib kamu datangi</h2>
          <p className="section-lead">
            Dari puncak karst Wayag sampai pulau pasir yang hanya muncul saat surut—setiap sudut
            Raja Ampat punya ceritanya sendiri.
          </p>
        </header>

        <div className="dest-grid">
          {destinations.map((d, i) => (
            <article key={d.id} className={`dest-card reveal ${i === 0 ? 'dest-card--feature' : ''} ${d.article ? 'dest-card--feature dest-card--full' : ''}`}>
              <div className="dest-card__media">
                <Photo id={d.photo} src={d.image} width={i === 0 || d.article ? 1280 : 960} alt={d.name} />
                <span className="dest-card__tag">{d.tag}</span>
              </div>
              <div className="dest-card__body">
                <h3>{d.name}</h3>
                <p className="dest-card__area">{d.area}</p>
                <p>{d.summary}</p>
                <ul className="chips">
                  {d.highlights.map((h) => (
                    <li key={h}>{h}</li>
                  ))}
                </ul>
                {d.article && (
                  <button className="link-btn" onClick={() => setArticleOpen(true)}>
                    Baca panduan lengkap Pasir Timbul →
                  </button>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>

      {articleOpen && (
        <div className="modal" role="dialog" aria-modal="true" aria-labelledby="pt-title" onClick={() => setArticleOpen(false)}>
          <article className="modal__panel" onClick={(e) => e.stopPropagation()}>
            <button className="modal__close" onClick={() => setArticleOpen(false)} aria-label="Tutup">×</button>
            <img src={pasir.image} alt="Pasir Timbul Raja Ampat" className="modal__img" />
            <div className="modal__body">
              <p className="eyebrow">Panduan destinasi</p>
              <h3 id="pt-title">Pasir Timbul Raja Ampat</h3>
              <p className="modal__byline">Pasir di tengah laut · oleh {pasirTimbulArticle.author}</p>
              {pasirTimbulArticle.sections.map((s) => (
                <section key={s.h}>
                  <h4>{s.h}</h4>
                  <p>{s.p}</p>
                </section>
              ))}
            </div>
          </article>
        </div>
      )}
    </section>
  )
}
