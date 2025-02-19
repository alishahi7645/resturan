import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import Logo from '../../assets/images/food-logo.png'

function Navbar() {
  return (
    <div className='shadow-md bg-white duration-200 '>
      <div className='container py-3 sm:py-0'>
        <div className='flex justify-between items-center gap-4'>
            <div className='flex justify-between items-center gap-4'>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-white py-1 px-4 rounded-full flex items-center gap-3">سفارش <FaShoppingCart /></button>
                <ul className="hidden sm:flex items-center gap-4">
                  <li>
                    <a href="#" className='hover:text-yellow-500 inline-block py-4 px-4'>خدمات</a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-yellow-500 inline-block py-4 px-4'>درباره</a>
                  </li>
                  <li>
                    <a href="#" className='hover:text-yellow-500 inline-block py-4 px-4'>بلاگ</a>
                  </li>
                </ul>
            </div>
            <div>
              <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-2'>اژدر <img src={Logo} className='w-10'/></a>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
