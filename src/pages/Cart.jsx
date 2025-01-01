import React from 'react'
import Slider from '../components/Slider'
import Product_slide from '../components/Product_slide'
import Product1 from '../assets/Watch1.png'
import ar from '../assets/Arrowright.svg'
import al from '../assets/Arrowleft.svg'


function Cart() {
  return (
    <div className='mt-[162px] '>
      <Slider />
      <div className='h-[277px] bg-[#C4963D]  flex items-center justify-center flex-col'>
        <p className='text-[32px] font-bold text-white leading-10 '>Shop by Category </p>

      </div>
      <div className='bg-black'>
        <div className='flex justify-center items-center py-12'>
          <img src={al} alt="" />
          <button type="button" class="mx-4 focus:outline-none text-white bg-[#D39F3A] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-normal rounded-3xl text-[16px] px-6 py-2 mb-2 ">Watches</button>
          <img src={ar} alt="" />
        </div>

        <div className='flex mx-auto justify-center'>
          {[1,2,3,4].map(()=>(
            <div className='w-[280px] h-[456px] bg-[#1A1A23] rounded-3xl mx-6'>
              <div className='rounded-tr-3xl rounded-tl-3xl bg-product1 h-[330px]'>
                {/* <img src={Product1}></img> */}
              </div>
              <div className='p-4 py-6'>
                <p className='text-white text-bold text-[32px] leading-8'>Rolex</p>
                <p className='text-white text-[400] text-[15px] leading-6 my-1'>1982 pre-owned GMT Master 40mm</p>
                <p className='text-white text-[300] text-[24px] leading-6'>₹30,00,00</p>
              </div>
              
            </div>
          ))}
        </div>
        <div className='flex mx-auto justify-center mt-16'>
          {[1,2,3,4].map(()=>(
            <div className='w-[280px] h-[456px] bg-[#1A1A23] rounded-3xl mx-6'>
              <div className='rounded-tr-3xl rounded-tl-3xl bg-product1 h-[330px]'>
                {/* <img src={Product1}></img> */}
              </div>
              <div className='p-4 py-6'>
                <p className='text-white text-bold text-[32px] leading-8'>Rolex</p>
                <p className='text-white text-[400] text-[15px] leading-6 my-1'>1982 pre-owned GMT Master 40mm</p>
                <p className='text-white text-[300] text-[24px] leading-6'>₹30,00,00</p>
              </div>
              
            </div>
          ))}
        </div>

        <div className='flex justify-center items-center py-12 mt-12'>
          {/* <img src={al} alt="" /> */}
          <button type="button" class="mx-4 focus:outline-none text-white bg-[#D39F3A] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-normal rounded-3xl text-[16px] px-12 py-2 mb-2 ">More Products</button>
          {/* <img src={ar} alt="" /> */}
        </div>
      </div>

      

      <Product_slide />
    </div>
  )
}

export default Cart
