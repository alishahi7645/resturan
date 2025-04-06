import React from 'react'
import appstoreimg from '../../assets/images/app_store.png'
import playstoremg from '../../assets/images/play_store.png'
import gif from '../../assets/images/mobile_bike.gif'

function AppStore() {
  return (
    <div className='bg-gray-100 py-14'>
      <div className="container">
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
            <div className="space-y-6 max-w-xl mx-auto">
                <h1 className="text-2xl text-center sm:text-4xl text-gray-500">اپلیکیشن اژدر برای ANDROID , IOS</h1>
                <div className="flex flex-wrap justify-center sm:justify-start items-center">
                    <img src={appstoreimg} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt="" />
                    <img src={playstoremg} className='max-w-[150px] sm:max-w-[120px] md:max-w-[200px]' alt="" />
                </div>
            </div>
            <div className="">
                <img src={gif} alt="" className='w-full sm:max-w-[60%] block rounded-md mx-auto mix-blend-multiply' />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AppStore
