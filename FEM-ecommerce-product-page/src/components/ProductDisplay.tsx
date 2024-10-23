import product1 from '../assets/image-product-1.jpg'
import iconNext from '../assets/icon-next.svg'
import iconPrevious from '../assets/icon-previous.svg'

function ProductDisplay() {
  return (
    <div style={{ backgroundImage: `url(${product1})` }} className="flex bg-cover bg-center bg-no-repeat min-h-80 px-4 items-center">
      <div className="flex justify-between  flex-1">
        <button className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>
            <img src={iconPrevious} alt='icon to go to the previous item'/>
        </button>
        <button className='bg-white rounded-full h-10 w-10 flex justify-center items-center'>
            <img src={iconNext} alt='icon to go to the next item'/>
        </button>
      </div>
    </div>
  )
}

export default ProductDisplay
