import React from 'react'
import Slider from "react-slick";


const testimonialData = [
  {
    id: 1,
    name: "Victor",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting",
    img: "https://wallpaperbat.com/img/825807-sachin-tendulkar-wallpaper.jpg",
  },
  {
    id: 2,
    name: "Victor",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting",
    img: "https://wallpaperbat.com/img/825807-sachin-tendulkar-wallpaper.jpg",
  },
  {
    id: 3,
    name: "Victor",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting",
    img: "https://wallpaperbat.com/img/825807-sachin-tendulkar-wallpaper.jpg",
  },
  {
    id: 4,
    name: "Victor",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting",
    img: "https://wallpaperbat.com/img/825807-sachin-tendulkar-wallpaper.jpg",
  },
  {
    id: 5,
    name: "Victor",
    text: "Lorem ipsum is a dummy or placeholder text commonly used in graphic design, publishing, and web development. Its purpose is to permit a page layout to be designed, independently of the copy that will subsequently populate it, or to demonstrate various fonts of a typeface without meaningful text that could be distracting",
    img: "https://wallpaperbat.com/img/825807-sachin-tendulkar-wallpaper.jpg",
  },
];

const Testimonials = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToshow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },

      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,

        },

      },
    ]
  };



  return (
    <div className='py-10 mb-10'>
      <div className='container mx-auto'>
        {/* {header section} */}
        <div className='text-center mb-10 max-w-[900px] 
         mx-auto '>
          <p data-aos="fade-up" className='text-sm text-amber-400 text-center'>What our customers are saying</p>
          <h1 data-aos="fade-up" className='text-3xl font-bold text-center text-black'>Testimonials</h1>
          <p data-aos="fade-up" className='text-xs text-gray-400 text-center'>Lorem ipsum dolor sit amet consecteture,
            adipisicing elit.Sit asperiores modi
          </p>
        </div>
        {/* {Testimonials cards} */}
        <div data-aos="zoom-in ">
          <Slider {...settings}>
            {testimonialData.map((data) => (
              <div className='my-6'>
                <div key={data.id} className='flex flex-col gap-4
              shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-amber-50
              bg-primary/10 relative'>
                  <div mb-4>
                    <img src={data.img} alt=""
                      className='rounded-full w-20 h-20' />
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <div className='space-y-3'>
                      <p className='text-xs text-gray-500'>{data.text}</p>
                      <h1 className='text-xl font-bold text-black/80 dark:text-light'>{data.name}</h1>
                    </div>
                  </div>
                  <p className='text-black/20 text-9xl font-serif
                      absolute top-0 right-0'></p>
                </div>

              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Testimonials