import React, { useState } from 'react'
import { Link } from "react-router-dom"
import { FaHeart } from "react-icons/fa";

const Cards = ({ item }) => {
  const [isHeartFilled, setIsHeartFilled] = useState(false);

  const handleHeart = () => {
    setIsHeartFilled(!isHeartFilled);
  }

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className={`rating gap-1 absolute right-2 top-2 p-4 heartStar bg-green ${isHeartFilled ? "text-rose-500" : "text-white"}`}
          onClick={handleHeart}
        >
          <FaHeart className='h-5 w-5 cursor-pointer'/>
        </div>
        <Link to={`/menu/${item._id}`}><figure><img src={item.image} alt={item.name} className='hover:scale-110 transition-all duration-200 md:h-72' /></figure></Link>
        <div className="card-body">
          <h2 className="card-title">{item.name}</h2>
          <p>{item.recipe}</p>
          <div className="card-actions justify-between items-center mt-2">
            <h5 className='font-semibold'><span className='text-sm text-red'>$ {item.price}</span></h5>
            <button className="btn bg-green text-white">Buy Now</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Cards