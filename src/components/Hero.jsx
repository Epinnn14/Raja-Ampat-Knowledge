import Photo from './Photo'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__media">
        <Photo id="wayag" width={1920} eager className="hero__img" alt="Gugusan pulau karst Wayag, Raja Ampat" />
        <div className="hero__shade" />
      </div>
      <div className="container hero__content">
        <p className="eyebrow eyebrow--light">Papua Barat Daya · Indonesia</p>
        <h1 className="hero__title">
          Raja Ampat
          <em>surga terakhir di ujung timur</em>
        </h1>
        <p className="hero__lead">
          Ratusan pulau karst, laut sebening kaca, dan terumbu karang terkaya di planet ini—dijaga
          oleh masyarakat yang hidup bersama laut sejak ribuan tahun lalu.
        </p>
        <div className="hero__actions">
          <a href="#galeri" className="btn btn--primary">Lihat galeri</a>
          <a href="#legenda" className="btn btn--ghost">Baca legendanya</a>
        </div>
      </div>
      <a href="#tentang" className="hero__scroll" aria-label="Gulir ke bawah">
        <span />
      </a>
    </section>
  )
}
