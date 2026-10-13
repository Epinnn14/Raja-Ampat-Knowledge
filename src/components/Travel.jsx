import { travelInfo, ecoTips } from '../data/content'

const icons = {
  plane: (
    <path d="M2 16l20-8-8 20-3-9-9-3z" />
  ),
  sun: (
    <>
      <circle cx="16" cy="16" r="6" />
      <path d="M16 2v4M16 26v4M2 16h4M26 16h4M6 6l3 3M23 23l3 3M6 26l3-3M23 9l3-3" />
    </>
  ),
  ticket: (
    <path d="M3 9h26v4a3 3 0 000 6v4H3v-4a3 3 0 000-6zM12 9v14" />
  ),
  wallet: (
    <>
      <rect x="3" y="8" width="26" height="18" rx="3" />
      <path d="M21 17h8M7 8l14-5 2 5" />
    </>
  ),
}

export default function Travel() {
  return (
    <section className="section travel" id="panduan">
      <div className="container">
        <header className="section-head reveal">
          <p className="eyebrow">Panduan perjalanan</p>
          <h2 className="section-title">Merencanakan perjalanan ke Raja Ampat</h2>
          <p className="section-lead">
            Jauh memang, tapi setiap jam perjalanan terbayar lunas. Ini hal-hal praktis yang
            perlu kamu siapkan.
          </p>
        </header>

        <div className="travel__grid">
          {travelInfo.map((t) => (
            <article key={t.title} className="travel-card reveal">
              <svg viewBox="0 0 32 32" className="travel-card__icon" aria-hidden="true">
                {icons[t.icon]}
              </svg>
              <h3>{t.title}</h3>
              <ul>
                {t.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>

        <aside className="eco reveal">
          <div className="eco__head">
            <p className="eyebrow eyebrow--light">Jadilah tamu yang baik</p>
            <h3>Tinggalkan hanya jejak kaki, bawa pulang hanya kenangan</h3>
          </div>
          <ol className="eco__list">
            {ecoTips.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ol>
        </aside>
      </div>
    </section>
  )
}
