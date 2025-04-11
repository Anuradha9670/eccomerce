import React from 'react';
import Img1 from "../../assets/w1.jpg";
import Img2 from "../../assets/w2.webp";
import Img3 from "../../assets/w3.jpg";
import Img4 from "../../assets/w4.jpg";
import Img5 from "../../assets/w5.webp";
import { FaStar } from "react-icons/fa6";



const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "red",
    aosDelay: "200",
  },
  {
    id: 3,
    img: Img3,
    title: "Googles",
    rating: 4.7,
    color: "brown",
    aosDelay: "400",
  },
  {
    id: 4,
    img: Img4,
    title: "Printed T-Shirt",
    rating: 4.4,
    color: "yellow",
    aosDelay: "600",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.5,
    color: "pink",
    aosDelay: "800",
  },
]
const Products = () => {
  return (
    <div className='mt-14 mb-12 justify-evenly bg-white'>
      <div className='container justify-center mx-auto'>
        {/* {Header section} */}
        <div className='text-center mb-10 max-w-[700px] 
         mx-auto'>
          <p data-aos="fade-up" className='text-sm text-amber-400 text-center'>Top Selling Products for you </p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-center text-black'>Products</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 text-center'>Lorem ipsum dolor sit amet consecteture,
            adipisicing elit.Sit asperiores modi
          </p>
        </div>
        {/* {Body section} */}
        <div>
          <div className='grid grid-cols-1 sm:grid-cols-3
           md:grid-cols-4 lg:grid-cols-5 place-items-center
           gap-5'>
            {/* card section */}
            {
              ProductsData.map((data) => (
                <div 
                data-aos="fade-up"
                data-aos-delay={data.aosDelay}
                key={data.id} className='space-y-3'>
                  <img src={data.img} alt=""
                    className='h-[200px] w-[150px]
                    obect-cover rounded-md' />
                  <div>
                    <h3 className='font-semobold text-black'>{data.title}</h3>
                    <p className='text-sm text-gray-600'>
                      {data.color}
                    </p>
                    <div className='flex items-center gap-1'>
                      <FaStar className='text-yellow-400'/>
                      <span>{data.rating}</span>
                    </div>
                  </div>
                </div>

              ))}
          </div>
          {/* {view all button} */}
          <div className='flex justify-center'>
            <button className='text-center mt-10 cursor-pointer
            bg-amber-400 text-white py-1 px-5 rounded-md'>View All Button</button>
          </div>
        </div>
      </div>
    </div >
  );
};

export default Products;