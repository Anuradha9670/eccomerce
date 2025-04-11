import React from 'react'
import Logo from "../../assets/slogo1.webp";
import { IoMdSearch } from "react-icons/io";
import { FaCartShopping } from 'react-icons/fa6';
import { FaCaretDown } from 'react-icons/fa6';
const Menu =[
    {
        id: 1,
        name: "Home",
        link: "/#",
    },
    {
        id: 2,
        name: "Top Rated",
        link: "/#services"
    },
    {
        id: 3,
        name: "Kids Wear",
        link: "/#",
    },
    {
        id: 3,
        name: "Mens Wear",
        link:"/#"
    },
    {
        id: 3,
        name: "Electronic",
        link:"/#"
    }
]

const DropdownLinks = [
    {
        id:1,
        name: "Trending Product",
        link: "/#",
    },
    {
        id: 2,
        name:"Best Selling",
        link:"/#",
    },
    {
        id: 3,
        name: "Top Rated",
        link:"/#",
    },
];

const Navbar = ({handleOrderPopup}) => {
    return (
        <div className='shadow-md bg-white dark:bg-gray-800 dark:text-white duration-200
        relative z-40'>
            {/* {upper Navbar} */}
            <div className='bg-grey-200 py-3 '>
                <div className='container flex
                justify-between items-center'>
                    <div>
                        <a href="#" className='font-bold text-2xl sm:text-3xl flex gap-3'>
                            <img src={Logo} alt="Logo"
                                className='w-15' />
                            Shopsy

                        </a>
                    </div>
                    {/* {search bar} */}
                    <div className='flex justify-between items-center gap-8'>
                        <div className=' relative group hidden sm:block'>
                            <input type="text" placeholder="search"
                                className="w-[200px] sm:w-[200px] group-hover:w-[300px]
                            transition-all duration-300 rounded-full border
                            border-grey-300 px-2 py-1
                            focus:outline-none focus:border-1
                            focus:border-orange-400"/>
                            <IoMdSearch className='text-white-500 group-hover:text-primary
                            absolute top-1/2 -translate-y-1/2 right-3'/>
                        </div>
                    </div>
                    {/* {order button} */}
                    <button onClick={() => handleOrderPopup()}
                        className='bg-amber-600 from-primary
                        to-secondary transition-all duration-200
                        text-white py-1 px-4 rounded-full flex items-center gap-3 group '>
                        <span className='group-hover:block  
                        transition-all duration-200'>Order</span>
                        <FaCartShopping className='text-xl text-white 
                        drop-shadow-sm cursor-pointer'/>
                    </button>

                </div>
            </div >
            {/* {lower Navbar} */}
            < div  className='flex justify-center dark:bg-amber-50'>
                <ul className='sm:flex hidden items-center gap-4'>
                    {
                        Menu.map((data) =>(
                            <li key={data.id}>
                            <a href={data.link}
                            className='inline-block px-4 dark:text-black
                            hover:text-red-900 duration-200'
                            >{data.name}</a>

                        </li>

                        ))
                    }
                    {/* {Simple Dropdown and Links} */}
                    <li className='group relative cursor-pointer text-black  hover:text-red-900'>
                        <a href="#" className='flex items-center gap-[2px] py-2'>
                            Trending
                            <span>
                                <FaCaretDown className='transition-all duration-200
                                group-hover:rotate-180 text-black'/>
                            </span>
                        </a>
                        <div className='absolute z-[9999] hidden group-hover:block
                        w-[150px] rounded-md bg-white p-2 text-black'>
                            <ul>
                                {DropdownLinks.map((data) =>(
                                    <li key={data.id}>
                                        <a href={data.link}
                                        className='inline-block w-full rounded-md p-2
                                        hover:bg-amber-600'>
                                            {data.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </li>
                </ul>

            </div >
        </div >
    );
};

export default Navbar;