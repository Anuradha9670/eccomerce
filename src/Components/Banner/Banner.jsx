import React from "react";
import BannerImg from "../../assets/s1.jpg";
import { GrSecure } from "react-icons/gr";
import { IoFastFood } from "react-icons/io5";
import { GiFoodTruck } from "react-icons/gi";

const banner = () => {
  return (
    <div className="min-h-[550px] flex
    justify-center items-cnter py-12 sm:py-0">
      <div className="container">
        <div className="grid grid-cols-1 sm:grid-cols-2
            gap-6 items-center">
          <div data-aos="zoom-in">
            <img src={BannerImg} alt="" className="max-w-[400px] h-[350px]
                    w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] obect-cover"/>
          </div>
          {/* {text details section} */}
          <div className="flez flez-col justify-center
                gap-6 sm:pt-0">
            <h1 data-aos="fade-up"  className="text-3xl sm:text-4xl font-bold pb-5 text-black">Winter Sale upto 50% off</h1>
            <p  data-aos="fade-up" className="text-sm text-gray-500 tracking-wide leading-5 pb-5 "> Lorem ipsum, dolor sit amet consectetur adipisicing
              elit. Deleniti blanditiis qui quas magnam, eius officia hic. Nostrum voluptas suscipit enim!</p>
            <div className="flex flex-col gap-4 text-black">
              <div data-aos="fade-up" className="flex items-center gap-4 text-black">
                <GrSecure className="text-4xl h-12 w-12 shadow-sm 
                        p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                <p>Quality Product</p>
              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <IoFastFood className="text-4xl h-12 w-12
                shadow-sm p-4 rounded-full bg-orange-100
                dark:bg-amber-400"/>
                <p>Fast Delivery</p>

              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12
                shadow-sm p-4 rounded-full bg-green-100
                dark:bg-green-400"/>
                <p>Easy Payment method</p>

              </div>
              <div data-aos="fade-up" className="flex items-center gap-4">
                <GiFoodTruck className="text-4xl h-12 w-12
                shadow-sm p-4 rounded-full bg-orange-100
                dark:bg-amber-400"/>
                <p>Get Offers</p>

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default banner