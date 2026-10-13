import { useState } from 'react'
import { legendChapters } from '../data/content'
import Photo from './Photo'

function Eggs({ active }) {
  // 7 telur: 4 raja, 1 putri, 1 batu, 1 roh
  const kinds = ['raja', 'raja', 'raja', 'raja', 'putri', 'batu', 'roh']
  return (
    <div className={`eggs eggs--step-${active}`} aria-hidden="true">
      {kinds.map((k, i) => (
        <span key={i} className={`egg egg--${k}`} style={{ '--i': i }}>
          <i>{k === 'raja' ? '♛' : k === 'putri' ? '✿' : k === 'batu' ? '◆' : '✦'}</i>
        </span>
      ))}
    </div>
  )
}

export default function Legend() {
  const [active, setActive] = useState(0)
  const chapter = legendChapters[active]

  return (
    <section className="section legend" id="legenda">
      <div className="legend__bg">
        <Photo id="kabui" width={1280} alt="" />
      </div>
      <div className="container legend__inner">
        <header className="section-head reveal">
          <p className="eyebrow eyebrow--light">Cerita rakyat suku Ma'ya</p>
          <h2 className="section-title">Legenda Tujuh Telur & Empat Raja</h2>
          <p className="section-lead">
            Nama "Raja Ampat" berarti <em>empat raja</em>. Begini kisahnya diceritakan turun-temurun.
          </p>
        </header>

        <div className="legend__card reveal">
          <Eggs active={active} />
          <div className="legend__tabs" role="tablist" aria-label="Bab legenda">
            {legendChapters.map((c, i) => (
              <button
                key={c.title}
                role="tab"
                aria-selected={i === active}
                className={i === active ? 'is-active' : ''}
                onClick={() => setActive(i)}
              >
                <span>{i + 1}</span>
                {c.title}
              </button>
            ))}
          </div>
          <div className="legend__text" key={active}>
            <h3>{chapter.title}</h3>
            <p>{chapter.text}</p>
          </div>
          <div className="legend__nav">
            <button onClick={() => setActive((a) => Math.max(0, a - 1))} disabled={active === 0}>
              ← Sebelumnya
            </button>
            <button
              onClick={() => setActive((a) => Math.min(legendChapters.length - 1, a + 1))}
              disabled={active === legendChapters.length - 1}
            >
              Lanjut →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
