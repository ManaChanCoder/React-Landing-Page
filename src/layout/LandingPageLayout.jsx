import './LandingPageLayout.css'
import Navbar from '../components/Navbar'
import Banner from '../components/Banner'

const LandingPageLayout = () => {

  return (
    <>
      <div className='main-container'>
        <div className='navbar-container'>
          <Navbar />
        </div>

        <div className='banner-container'>
          <Banner />
        </div>
      </div>

    </>
  )
}

export default LandingPageLayout
