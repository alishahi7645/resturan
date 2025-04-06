import React from "react";
import img from "../../assets/images/cheese.png";
import img2 from "../../assets/images/image-2.png";
import img3 from "../../assets/images/image-3.png";


const serviceData = [
  {
    id: 1,
    img: img,
    name: "چیزبرگر",
    desc: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 2,
    img: img2,
    name: "مرغ و برنج",
    desc: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
  {
    id: 3,
    img: img3,
    name: "مرغ",
    desc: "ورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.",
  },
];

function Services() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="text-center mb-20 max-w-[400px] mx-auto">
          <h1 className="text-3xl font-bold">خدمات ما</h1>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-5 place-items-center">
          {serviceData.map((item) => (
            <div className="rounded-2xl bg-white hover:bg-yellow-500 hover:text-white relative shadow-xl duration-high group max-w-[300px]">
              <div className="h-[120px]">
                <img
                  className="max-w-[200px] block mx-auto transform -translate-y-14 group-hover:scale-105 group-hover:rotate-6 duration-300 "
                  src={item.img}
                  alt=""
                />
              </div>
              <div className="p-4 text-center">
                
                <h1 className="text-xl font-bold">{item.name}</h1>
                <p className="text-gray-500 hover:text-white text-sm line-clamp-2">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Services;
