import React from 'react'
import Img1 from "../../assets/m-red1.jpg";
import Img2 from "../../assets/t2.png";
import Img3 from "../../assets/m-r3.webp";
import Img4 from "../../assets/m-r2.png";
import { FaStar } from "react-icons/fa";


const ProductsData = [
    {
        id: 1,
        img: Img1,
        title: "Casual Wear",
        description: "lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

    },
    {
        id: 2,
        img: Img2,
        title: "Printed Shirt",
        description: "lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

    },
    {
        id: 3,
        img: Img3,
        title: "Men Shirt",
        description: "lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

    },
    {
        id: 4,
        img: Img4,
        title: "Casual Wear",
        description: "lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

    },
    {
        id: 5,
        img: Img2,
        title: "Printed Shirt",
        description: "lorem ipsum dolor sit amet,consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore "

    },
]

const TopProducts = ({ handleOrderPopup }) => {
    return (
        <div>
            <div className='justify-evenly '>
                {/* {Header section} */}
                <div className='text-left mb-34  '>
                    <p data-aos="fade-up" className='text-sm text-amber-500 text-center'>Top Rated Products for you </p>
                    <h1 data-aos="fade-up" className='text-3xl font-bold text-center text-black'> Best Products</h1>
                    <p data-aos="fade-up" className='text-xs text-gray-500 text-center'>Lorem ipsum dolor sit amet consecteture,
                        adipisicing elit.Sit asperiores modi
                    </p>
                </div>
                {/* Body section*/}
                <div className='  grid grid-cols-1 sm:grid-cols-2
                md:grid-cols-5 gap-5 md:gap-5 place-items-center '>
                    {
                        ProductsData.map((data) => (
                            <div
                                data-aos="zoom-in"
                                className='rounded-2xl bg-white dark:bg-amber-50
                            hover:bg-black/80 dark:hover:bg-pink-300 hover:text-white
                             relative shadow-xl duration-300 group max-w-[300px] mb-20'>
                                {/* {image section} */}
                                <div className='h-[100px]'>
                                    <img src={data.img} alt=""
                                        className='max-w-[140px] block mx-auto transform -translate-y-20
                                    group-hover:scale-150 duration-300 drop-shadow-md'/>
                                </div>
                                {/* {star rating} */}
                                <div className='  w-full flex items-center justify-center gap-1'>
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                    <FaStar className='text-yellow-500' />
                                </div>
                                <h1 className='text-xl font-bold text-center text-black'>{data.title}</h1>
                                <p className='text-gray-500 group-hover:text-white duration-300
                                text-sm line-clamp-2 text-center'> {data.description}</p>
                                <div className='flex justify-center'>
                                    <button className='bg-amber-400 hover:scale-105
                                      duration-300 text-white py-1 px-4 rounded-full
                                      mt-4 my-4 group-hover:bg-white group-hover:text-amber-400 '
                                        onClick={handleOrderPopup}
                                    >
                                        Order Now

                                    </button>
                                </div>
                            </div>

                        ))
                    }
                </div>
            </div>
        </div >
    )
}

export default TopProducts;