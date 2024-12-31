import React from 'react'
import logo from '../assets/logo.svg'
import x from '../assets/x.svg'
import { Dropdown } from "flowbite-react";


function Footer() {
    return (
        <div className='bg-black flex flex-col justify-center py-2'>
            <div className='border-t border-b border-[#C4963D] w-full justify-center flex py-4'>
                <p className='font-normal text-[27px] text-white leading-10'>Back to top</p>
            </div>
            <footer className="relative max-w-[1296px] w-[80vw] mx-auto justify-center  pt-8 pb-6">

                <div>
                    <div className='flex justify-center'>
                        <img src={logo} alt="" />
                    </div>

                    <div className='flex justify-center my-4'>
                        <div className='border-t border-b border-[#C4963D] w-[680px] justify-center flex py-4'>
                            <select className='bg-black font-normal mx-4 text-[27px] text-white leading-10 p-2 border-white border rounded-md ' name="cars" id="cars">
                                <option value="volvo">English</option>
                                <option value="saab">French</option>
                                <option value="mercedes">Arabic</option>
                                <option value="audi">Russian</option>
                            </select>

                            <select className='bg-black mx-4 font-normal text-[27px] text-white leading-10 p-2 border-white border rounded-md ' name="cars" id="cars">
                                <option value="volvo">India</option>
                                <option value="saab">French</option>
                                <option value="mercedes">Arabic</option>
                                <option value="audi">Russian</option>
                            </select>
                        </div>

                    </div>
                    <div className='flex  flex-col justify-center my-4'>
                        <div className='flex justify-center'>
                            <img src={x} alt="" />
                            <img src={x} alt="" />
                            <img src={x} alt="" />

                        </div>
                        <div className='flex justify-center'>
                            <p className='font-[300] text-[24px] text-white leading-10'>Indulge @2025 Copyrights</p>
                        </div>

                    </div>

                </div>

            </footer>

        </div>
    )
}

export default Footer
