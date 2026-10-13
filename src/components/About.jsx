import { stats } from '../data/content'
import Photo from './Photo'

export default function About() {
  return (
    <section className="section about" id="tentang">
      <div className="container about__grid">
        <div className="about__text reveal">
          <p className="eyebrow">Mengenal Raja Ampat</p>
          <h2 className="section-title">Jantung Segitiga Terumbu Karang dunia</h2>
          <p>
            Raja Ampat adalah gugusan kepulauan di barat Semenanjung Kepala Burung, Papua. Secara
            administratif ia menjadi Kabupaten Raja Ampat di Provinsi Papua Barat Daya, dengan ibu
            kota Waisai di Pulau Waigeo.
          </p>
          <p>
            Arus laut Pasifik dan Hindia bertemu di sini, membawa nutrisi yang menghidupi taman
            karang paling beragam di bumi. Para ilmuwan menyebutnya pusat dari{' '}
            <strong>Coral Triangle</strong>. Di daratan, hutan hujan menjadi panggung tarian
            burung cenderawasih.
          </p>
          <p>
            Keistimewaan ini diakui dunia: Raja Ampat ditetapkan sebagai{' '}
            <strong>UNESCO Global Geopark</strong> pada 2023 karena batuan dan lanskap karstnya
            yang merekam ratusan juta tahun sejarah bumi.
          </p>
        </div>
        <div className="about__photos reveal">
          <Photo id="piaynemoKarst" className="about__photo about__photo--tall" />
          <Photo id="softCoral" className="about__photo about__photo--small" />
        </div>
      </div>

      <div className="container">
        <ul className="stats reveal">
          {stats.map((s) => (
            <li key={s.label} className="stat">
              <span className="stat__value">{s.value}</span>
              <span className="stat__label">{s.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
