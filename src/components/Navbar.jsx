import { useEffect, useState } from 'react'

const links = [
  { href: '#tentang', label: 'Tentang' },
  { href: '#destinasi', label: 'Destinasi' },
  { href: '#bawah-laut', label: 'Bawah Laut' },
  { href: '#legenda', label: 'Legenda' },
  { href: '#budaya', label: 'Budaya' },
  { href: '#galeri', label: 'Galeri' },
  { href: '#panduan', label: 'Panduan' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
  }, [open])

  return (
    <header className={`nav ${scrolled ? 'nav--solid' : ''} ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__brand" onClick={() => setOpen(false)}>
          <svg viewBox="0 0 32 32" aria-hidden="true">
            <path d="M3 23c3-5 5-11 8-11s3 5 5 5 3-7 6-7 3 8 3 13z" fill="currentColor" opacity=".9" />
            <path d="M1 25c4-2 7 2 11 0s7 2 11 0 8 0 8 0v4H1z" fill="currentColor" opacity=".5" />
          </svg>
          Raja Ampat
        </a>
        <nav className="nav__links" aria-label="Navigasi utama">
          {links.map((l) => (
            <a key={l.href} href={l.href} onClick={() => setOpen(false)}>
              {l.label}
            </a>
          ))}
        </nav>
        <button
          className="nav__toggle"
          aria-label={open ? 'Tutup menu' : 'Buka menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
