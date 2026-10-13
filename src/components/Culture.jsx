import { cultureItems } from '../data/content'
import Photo from './Photo'

export default function Culture() {
  return (
    <section className="section culture" id="budaya">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Budaya & kehidupan</p>
          <h2 className="section-title">Orang laut yang menjaga lautnya</h2>
          <p className="section-lead">
            Keindahan Raja Ampat bertahan bukan karena kebetulan. Ada adat, iman, dan kearifan
            warga kampung yang menjaganya dari generasi ke generasi.
          </p>
        </header>

        <div className="culture__list">
          {cultureItems.map((c, i) => (
            <article key={c.title} className={`culture-item reveal ${i % 2 ? 'culture-item--flip' : ''}`}>
              <div className="culture-item__media">
                <Photo id={c.photo} />
              </div>
              <div className="culture-item__body">
                <span className="culture-item__num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{c.title}</h3>
                <p>{c.text}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
