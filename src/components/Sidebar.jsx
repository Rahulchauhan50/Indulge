import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { AiFillHome } from "react-icons/ai";
import { BsFillInfoCircleFill, BsFillGrid1X2Fill, BsTelephoneFill, BsBookmarkFill } from "react-icons/bs";
import logo from '../assets/logo.svg'




const NavLinks = ({ setMobileMenuOpenfn }) => {

  const links = [
    { name: 'Home', to: '/', icon: AiFillHome },
    { name: 'About Us', to: '/about-us', icon: BsFillInfoCircleFill },
    { name: 'Category', to: '/Category', icon: BsFillGrid1X2Fill },
    { name: 'Certifications', to: '/Certifications', icon: BsBookmarkFill },
    { name: 'Contact Us', to: '/Contact-Us', icon: BsTelephoneFill },
  ];



  const location = useLocation()

  return <div className='mt-2' >
    {links.map((item,i) => (
      <>
        <Link
          onClick={() => setMobileMenuOpenfn(false)}
          key={i}
          to={item.to}
          className={`flex flex-row justify-start items-center my-8 text-sm font-medium ${location.pathname === item.to ? "text-[#1884C7]" : "text-white"}  hover:text-cyan-400`} >
          <item.icon className='w-6 h-6 mr-4' />
          {item.name}
        </Link>

      </>
    ))}
  </div>
}

export default function Sidebar({ mobileMenuOpen, setMobileMenuOpenfn }) {


  return (
    <>

      <div className={`fixed z-[101] top-0 h-full w-2/3 bg-gradient-to-tl from-[#1a1a238f] to-[#1A1A23]  backdrop-blur-lg  p-6 transition-all duration-500 md:hidden ${mobileMenuOpen ? 'left-0' : '-left-full'}`}>
        <Link onClick={() => setMobileMenuOpenfn(false)} to='/'>
          <img alt='background-image' className='sm:h-20 h-[40px]' src={logo}></img>
        </Link>
        <NavLinks setMobileMenuOpenfn={setMobileMenuOpenfn} />
      </div>
    </>
  )
}