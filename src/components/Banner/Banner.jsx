import React from "react";
import img from "../../assets/images/image-4.png";
import banner from "../../assets/images/banner.png";
import { IoFastFood } from "react-icons/io5";
import { GrSecure } from "react-icons/gr";
import { GiFoodTruck } from "react-icons/gi";

function Banner() {
  return (
    <div className="min-h-[550px]">
      <div className="min-h-[550px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0">
        <div className="container">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="">
              <img
                src={img}
                className="max-w-[430px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]"
                alt=""
              />
            </div>
            <div className="flex flex-col justify-center gap-6 sm:pt-0">
              <h1 className="font-bold text-4xl text-center">چرا رستوران اژدر</h1>
              <p className="">
                ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.ورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.ورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.ورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ورم
                ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
                استفاده از طراحان گرافیک است.ورم ایپسوم متن ساختگی با تولید
                سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.ورم
                ایپسوم متن ساختگی با تولید
              </p>
              <div className="flex justify-center gap-6">
                <div>
                  <GrSecure className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-violet-500" />
                </div>
                <div>
                  <IoFastFood className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-orange-500" />
                </div>
                <div className="text-4xl h-20 w-20 shadow-sm p-5 rounded-full bg-green-500">
                  <GiFoodTruck />
                </div>
              </div>
              <div className="flex justify-center">
                <button
                  className="bg-gradient-to-r from-yellow-400 to-yellow-500
                            text-white py-1 px-4 rounded-full flex items-center gap-3
                        "
                >
                  ثبت سفارش
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
