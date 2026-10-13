import { useState } from 'react'
import { photos, commonsPage } from '../data/photos'

const YEAR = new Date().getFullYear()

export default function Footer() {
  const [showCredits, setShowCredits] = useState(false)
  const list = Object.values(photos)

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__top">
          <div>
            <p className="footer__brand">Raja Ampat</p>
            <p className="footer__tag">Satu laut, empat raja, sejuta cerita.</p>
          </div>
          <a href="#top" className="btn btn--ghost">Kembali ke atas ↑</a>
        </div>

        <div className="footer__credits">
          <button className="link-btn link-btn--light" onClick={() => setShowCredits((v) => !v)} aria-expanded={showCredits}>
            {showCredits ? 'Sembunyikan' : 'Lihat'} kredit foto ({list.length + 1})
          </button>
          {showCredits && (
            <ul className="credits">
              {list.map((p) => (
                <li key={p.file}>
                  <a href={commonsPage(p)} target="_blank" rel="noreferrer">{p.title}</a>
                  {' '}— {p.author}, {p.license}
                </li>
              ))}
              <li>Pasir Timbul — foto dari proyek asli (R4)</li>
            </ul>
          )}
          <p className="footer__note">
            Foto dari Wikimedia Commons dengan lisensi Creative Commons; klik judul untuk melihat
            sumber dan lisensi lengkapnya. Informasi tarif & jadwal dapat berubah—selalu cek
            sumber resmi sebelum berangkat.
          </p>
        </div>

        <p className="footer__copy">
          © {YEAR} · Proyek Raja Ampat · Artikel Pasir Timbul oleh Kevin Aprilio
        </p>
      </div>
    </footer>
  )
}
