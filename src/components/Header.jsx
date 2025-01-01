import React from 'react'
import { Fragment } from 'react'
import { RiCloseLine } from 'react-icons/ri'
import { HiOutlineMenu } from 'react-icons/hi'
import { Link } from 'react-router-dom'
import category from '../assets/Category.svg'
import search from '../assets/Search Icon.svg'
import logo from '../assets/logo.svg'
import profile from '../assets/Profile.png'
import Cart from '../assets/cart.svg'
import { Menu, Transition } from '@headlessui/react'
import product1 from '../assets/Product 1.png'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


function Header({ mobileMenuOpen, setMobileMenuOpen }) {
    return (
        <div >
            <header>
                <nav className="fixed top-0 z-[100] w-screen bg-[#1A1A23]  px-4 lg:px-6 py-2.5 h-[100px] md:h-[192px] pb-4 md:pb-8 border-b-[6px] border-[#C4963D]">
                    <div className="flex h-full flex-wrap justify-between items-center md:items-end mx-auto max-w-screen-xl">
                        <div className=' lg:flex hidden items-end'>
                            <div> <div className='flex justify-center items-center'>
                                <img src={category} alt="" />
                            </div>
                                <div className='flex justify-center items-center'>
                                    <p className='font-normal text-[20px] text-white leading-10'>Shop by Category</p>
                                </div>
                            </div>
                            <div className='ml-2 items-end'>
                                <img src={search} alt="" />
                            </div>
                        </div>

                        <Link to='/'>
                            <img className='w-[80px] md:w-auto' src={logo} alt="" />
                        </Link>
                        {mobileMenuOpen ? (<RiCloseLine onClick={() => setMobileMenuOpen(false)} className='w-6 h-6 md:hidden text-white mr-2' />) : (<HiOutlineMenu onClick={() => setMobileMenuOpen(true)} className='w-6 h-6 md:hidden text-white mr-2' />)}

                        <div className='lg:flex hidden flex-row justify-center items-end gap-4'>



                            <div className='mx-4'>
                                <div>
                                    <img src={profile} alt="" />
                                </div>
                                <p className='font-normal text-[20px] text-white'>Profile</p>
                            </div>

                            <div className='mx-4'>
                                <Menu as="div" className=" ml-3">
                                    <div>
                                        <Menu.Button className="mx-4">

                                            <div>
                                                <img src={Cart} alt="" />
                                            </div>
                                            <p className='font-normal text-[20px] text-white'>Cart</p>



                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="absolute px-4 right-0 z-10 w-[612px] mt-[34px] bg-[#1A1A23] py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/profile'
                                                        className={classNames(active ? 'bg-[#20202b]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        <div className='flex my-4'>
                                                            <div>
                                                                <img src={product1} alt="" />
                                                            </div>
                                                            <div className='flex flex-col py-2 px-4 w-full'>
                                                                <div className='flex-1'>
                                                                    <p className='text-white text-[18px] leading-6 font-[300]'>Rolex</p>
                                                                    <p className='text-[#566D80] text-[13px] leading-6 font-[300]'>Watches</p>
                                                                </div>
                                                                <div className='flex justify-between items-center'>
                                                                    <p className='text-white text-[16px] leading-6 font-[300]'>₹1.50,000</p>
                                                                    <div className='flex items-center gap-4'>
                                                                        <div className='text-gray-600 text-[29px] leading-6 font-[400]'>-</div>
                                                                        <p className='text-white text-[16px] leading-6 font-[400]'>1</p>
                                                                        <div className='text-white text-[20px] leading-6 font-[400]'>+</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/profile'
                                                        className={classNames(active ? 'bg-[#20202b]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        <div className='flex my-4'>
                                                            <div>
                                                                <img src={product1} alt="" />
                                                            </div>
                                                            <div className='flex flex-col py-2 px-4 w-full'>
                                                                <div className='flex-1'>
                                                                    <p className='text-white text-[18px] leading-6 font-[300]'>Rolex</p>
                                                                    <p className='text-[#566D80] text-[13px] leading-6 font-[300]'>Watches</p>
                                                                </div>
                                                                <div className='flex justify-between items-center'>
                                                                    <p className='text-white text-[16px] leading-6 font-[300]'>₹1.50,000</p>
                                                                    <div className='flex items-center gap-4'>
                                                                        <div className='text-gray-600 text-[29px] leading-6 font-[400]'>-</div>
                                                                        <p className='text-white text-[16px] leading-6 font-[400]'>1</p>
                                                                        <div className='text-white text-[20px] leading-6 font-[400]'>+</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({ active }) => (
                                                    <Link
                                                        to='/profile'
                                                        className={classNames(active ? 'bg-[#20202b]' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        <div className='flex my-4'>
                                                            <div>
                                                                <img src={product1} alt="" />
                                                            </div>
                                                            <div className='flex flex-col py-2 px-4 w-full'>
                                                                <div className='flex-1'>
                                                                    <p className='text-white text-[18px] leading-6 font-[300]'>Rolex</p>
                                                                    <p className='text-[#566D80] text-[13px] leading-6 font-[300]'>Watches</p>
                                                                </div>
                                                                <div className='flex justify-between items-center'>
                                                                    <p className='text-white text-[16px] leading-6 font-[300]'>₹1.50,000</p>
                                                                    <div className='flex items-center gap-4'>
                                                                        <div className='text-gray-600 text-[29px] leading-6 font-[400]'>-</div>
                                                                        <p className='text-white text-[16px] leading-6 font-[400]'>1</p>
                                                                        <div className='text-white text-[20px] leading-6 font-[400]'>+</div>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                        </div>
                                                    </Link>
                                                )}
                                            </Menu.Item>

                                            <Menu.Item>
                                                {({ active }) => (
                                                    <div
                                                        to='/profile'
                                                        className={classNames(active ? '' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                    >
                                                        <div className='flex flex-col my-4 border-t-2 border-[#D39F3A] py-6'>
                                                            <div  className='flex justify-between'>
                                                                <div>
                                                                    <p className='text-white text-[24px] leading-7 font-[400]'>Subtotal</p>
                                                                </div>
                                                                <div className='justify-center'>
                                                                    <p className='text-white text-[24px] leading-7 font-[700]'>₹30,00,00</p>
                                                                    <Link to='/cart' className='text-white text-[20px] leading-7 font-[400] text-center py-4 border-b border-[#D39F3A]'>View Bag</Link>
                                                                </div>

                                                            </div>
                                                            <div className='justify-end flex my-12'>
                                                            <button type="button" class="focus:outline-none text-white bg-[#D39F3A] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-normal rounded-lg text-[24px] px-12 py-5 mb-2 dark:focus:ring-yellow-900">Checkout</button>

                                                            </div>

                                                        </div>
                                                    </div>
                                                )}
                                            </Menu.Item>
                                        </Menu.Items>
                                    </Transition>
                                </Menu>

                            </div>

                            <div className='mx-4'>
                                <div>
                                    <p className='font-normal text-[20px] text-[#D39F3A] leading-10'>55,560</p>
                                </div>
                                <p className='font-normal text-[20px] text-white'>Wallet</p>
                            </div>
                        </div>

                    </div>
                </nav>
            </header>
        </div>
    )
}

export default Header
