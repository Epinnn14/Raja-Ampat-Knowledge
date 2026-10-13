import { marineLife } from '../data/content'
import Photo from './Photo'

export default function Underwater() {
  return (
    <section className="section underwater" id="bawah-laut">
      <div className="underwater__bubbles" aria-hidden="true">
        {Array.from({ length: 14 }).map((_, i) => (
          <span key={i} style={{ '--i': i }} />
        ))}
      </div>
      <div className="container underwater__grid">
        <div className="underwater__intro reveal">
          <p className="eyebrow eyebrow--light">Dunia bawah laut</p>
          <h2 className="section-title">Akuarium raksasa yang hidup</h2>
          <p>
            Lebih dari 550 jenis karang keras dan ribuan spesies ikan hidup di perairan Raja
            Ampat. Ada puluhan titik selam, dari dinding karang dan gua hingga dermaga kampung
            yang bisa dinikmati cukup dengan snorkel.
          </p>
          <div className="underwater__photos">
            <Photo id="manta" />
            <Photo id="anemone" />
            <Photo id="diver" />
          </div>
        </div>
        <ul className="species reveal">
          {marineLife.map((m, i) => (
            <li key={m.name} className="species__item">
              <span className="species__num">{String(i + 1).padStart(2, '0')}</span>
              <div>
                <h3>{m.name}</h3>
                <p>{m.detail}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
