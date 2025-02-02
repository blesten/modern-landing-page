import Information from './components/Information'
import Additional from './components/Additional'
import Navbar from './components/navbar/Navbar'
import Footer from './components/Footer'
import Report from './components/Report'
import Hero from './components/hero/Hero'
import Map from './components/Map'

const App = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Information />
      <Report />
      <Map />
      <Additional />
      <Footer />
    </>
  )
}

export default App