import './Banner.css'
import FoodOnPlate from '../assets/image/food-on-plate.png'

const Banner = () => {
  return (
    <>
      <div className='banner-content'>
        <div className='left'>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore, placeat!</p>
          <h1>Restaurant</h1>

          <div className='button-container'>
            <button>order now</button>
            <button>history</button>
          </div>
        </div>

        <div className='right'>
          <img src={FoodOnPlate} alt="" />
        </div>
      </div>
    </>
  )
}

export default Banner
