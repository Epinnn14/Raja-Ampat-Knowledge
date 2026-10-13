import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Destinations from './components/Destinations'
import Underwater from './components/Underwater'
import Legend from './components/Legend'
import Culture from './components/Culture'
import Gallery from './components/Gallery'
import Travel from './components/Travel'
import Footer from './components/Footer'
import useReveal from './hooks/useReveal'

export default function App() {
  useReveal()

  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Destinations />
        <Underwater />
        <Legend />
        <Culture />
        <Gallery />
        <Travel />
      </main>
      <Footer />
    </>
  )
}
