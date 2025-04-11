import React from 'react';
import footerLogo from "../../assets/logo.jpg";
import Banner from "../../assets/footer.png";
import {
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaLocationArrow,
    FaMobileAlt,
} from "react-icons/fa";


const BannerImg = {
    backgroundImage: `url(${Banner})`,
    backgroundPosition: "bottom",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
};

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#about",
    },
    {
        title: "Contact",
        link: "/#contact",
    },
    {
        title: "Blog",
        link: "/#blog",
    },
]

const Footer = () => {
    return (
        <div style={BannerImg} className='text-black'>
            <div className='container mx-auto'>
                <div data-aos="zoom-in" className='grid md:grid-cols-3 pb-44 pt-5'>
                    {/* {company details} */}
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left
                    text-justify mb-3 flex items-center gap-3'>
                            <img src={footerLogo} alt="" className='max-w-[50px]' />
                            Shopsy</h1>
                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Expedita, ab?
                        </p>
                    </div>
                    {/* {Footer Links} */}
                    <div className='grid grid-cols-2 sm:grid-cols-3
                col-span-2 md:pl-10 '>
                        <div>
                            <div className='py-8 px-4 text-black'>
                                <h1 className='sm:text-3xl text-xl font-bold
                                  sm:text-left text-justify mb-3'>Important Links</h1>
                                <ul className='flex flex-col gap-3 '>
                                    {FooterLinks.map((link) => (
                                        <li className='cursor-pointer hover:text-blue-700 hover:translate-x-l 
                                duration-300 text-black'
                                            key={link.title}>
                                            <span>{link.title}</span>
                                        </li>

                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className='py-8 px-6 text-black'>
                            <h1 className='sm:text-3xl text-xl font-bold
                                  sm:text-left text-justify mb-3'> Links</h1>
                            <ul className='flex flex-col'>
                                {FooterLinks.map((link) => (
                                    <li className='cursor-pointer hover:text-blue-700 hover:translate-x-l 
                                duration-300 text-black'
                                        key={link.title}>
                                        <span>{link.title}</span>
                                    </li>

                                ))}
                            </ul>
                        </div>
                        {/* social links */}
                        <div>
                            <div className='flex items-center gap-3
                            mt-6'>
                                <a href="#">
                                    <FaInstagram className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaFacebook className="text-3xl" />
                                </a>
                                <a href="#">
                                    <FaLinkedin className="text-3xl" />
                                </a>
                            </div>
                            <div className='mt-6'>
                                <div className='flex items-center gap-3'>
                                    <FaLocationArrow />
                                    <p>Noida, Uttar Pradesh</p>
                                </div>
                                <div className='flex items-center gap-3 mt-3'>
                                    <FaMobileAlt />
                                    <p>+123456789</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Footer;