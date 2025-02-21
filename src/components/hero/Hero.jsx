import React, { useState } from 'react'
import image1 from '../../assets/images/hero-1.png'
import image2 from '../../assets/images/hero-2.png'
import image3 from '../../assets/images/hero-3.png'
import '../../index.css'

const imageList = [
  {
    id : 1,
    img: image1
  },
  {
    id : 2,
    img: image2
  },
  {
    id : 3,
    img: image3
  }
]
function Hero() {
  const [imageId , setImageId] = useState(image1)
  return (
    <div className='bgImage min-h-[550px] sm:min-h-[600px] bg-gray-100 flex justify-center items-center duration-200'>
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2">
          {/* text-section */}
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              به اژدر {""}
              <span className="text-yellow-500">خوش آمدید</span>
            </h1>
            <p className="text-sm">ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است </p>
            <div className="">
            <button className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-2 px-4 rounded-full">ثبت سفارش</button>
            </div>
          </div>
          {/* image section */}
          <div className="min-h-[450px] sm:min-h-[500px] flex justify-center items-center relative order-1 sm:order-2">
            <div className="h-[300px] sm:h-[450px] overflow-hidden flex justify-center items-center">
              <img src={imageId} className='w-[250px] sm:w-[400px] sm:scale-125 mx-auto spin' alt="" />
            </div>
            <div className="flex lg:flex-col lg:top-1/2 lg:-translate-y-1/2 lg:py-2 justify-center gap-4 absolute bottom-[0px] lg:right-0 bg-white/35 rounded-full">
              {
                imageList.map((item) => (
                  <img className='max-w-[70px] h-[70px] object-contain inline-block hover:scale-105' src={item.img} onClick={() =>{
                    setImageId(
                      item.id === 1 ? image1 : item.id === 2 ? image2 : image3
                    )
                  }} alt="" />
                ))
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero
