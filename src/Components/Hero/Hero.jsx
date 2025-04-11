import React from "react";
import Image1 from "../../assets/s1.jpg"
import Image2 from "../../assets/s2.webp"
import Image3 from "../../assets/s3.jpg"
import Image4 from "../../assets/s4.avif"
import Slider from "react-slick";

const ImageList = [
    {
        id: 1,
        img: Image1,
        title: "30% off on all Women's Wear",
        discription: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting."
    },
    {
        id: 2,
        img: Image2,
        title: "30% off on all Women's Wear",
        discription: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting."
    },
    {
        id: 3,
        img: Image3,
        title: "30% off on all Women's Wear",
        discription: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting."
    },
    {
        id: 4,
        img: Image4,
        title: "30% off on all Women's Wear",
        discription: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting."
    }
]

const Hero = ({ handleOrderPopup}) => {
    var settings = {
        dots: false,
        arrows: false,
        infinite: true,
        speed: 800,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        cssEase: "ease-in-out",
        pauseOnHover: false,
        pauseOnFocus: true,

    };
    return (
        <div className="relative overflow-hidden min-h-[550px]
        sm:min-h-[650px] bg-gray-100 flex justify-center items-center 
        dark:bg-gray-300 dark:text-white duration-200">
            <div className="h-[700px] w-[700px] bg-amber-200
            absolute -top-1/2 right-0 rounded-3xl rotate-45 -z[8]">

            </div>
            {/* {hero section} */}
            <div className="container pb-8 sm:pb-0">
                <Slider {...settings}>
                    {ImageList.map((data) => (
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2">
                                {/* {text content section} */}
                                <div className="flex flex-col justify-center
                        gap-9 pt-12 sm:pt-0 text-center sm:text-left
                        order-2 sm:order-1 relative z-10">
                                    <h1
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className="text-5xl sm:text-6xl lg:text-7xl font-bold text-black">{data.title}</h1>
                                    <p
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                        className="text-sm text-black">{data.description}</p>
                                    <div
                                        data-aos="zoom-out"
                                        data-aos-duration="500"
                                        data-aos-once="true"
                                    >
                                        <button onClick={handleOrderPopup} className="bg-gradient-to-r
                                from-yellow-500 to-yellow-600 hover:scale-100
                                duration-200 text-white py-2 px-4 rounded-full">Order Now</button>
                                    </div>
                                </div>
                                {/* {image section} */}
                                <div className="order-1 sm:order-2">
                                    <div
                                        data-aos="zoom-in"
                                        data-aos-once="true"
                                        className="relative z-10">
                                        <img src={data.img} alt=""
                                            className="w-[300px] h-[300px] sm:h-[450px]
                                sm:w-[450px] sm:scale-125 object-contain mx-auto "/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}


                </Slider>

            </div>
        </div>
    );
};
export default Hero;