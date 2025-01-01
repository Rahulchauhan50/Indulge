import React from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import arrow from "../assets/arrow.svg";


function Product_slide() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (<>
    <div className='h-[150px] bg-[#C4963D] justify-center flex items-center flex-col'>
          <p className='text-[32px] font-bold text-white leading-10 '>Discover our exclusive </p>
          <p className='text-[32px] font-bold text-white leading-10 '>products</p>
    
        </div>
    
        <div className='relative w-full bg-black'>
            <div className='w-[80vw] max-w-screen-xl m-auto '>
                <div className='pt-12'>
                    <Slider {...settings}>
                        {[1, 2, 3, 4, 5].map(() => (
                            <div className='bg-red-500 m-3 bg-product w-[399px] h-[490px] rounded-3xl pl-8 pr-2 pt-14'>
                                <p className='text-bold text-white text-[56px] leading-[56px]'>BOOK & FLY</p>
                                <p className='text-bold text-white text-[128px] leading-[128px]'>20%</p>
                                <p className='text-bold text-white text-[20px] leading-[38px]'>reedem offer</p>
                                <button type="button" class="focus:outline-none text-white bg-[#D39F3A] hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-normal rounded-lg text-[16px] px-6 py-2 mb-2">BOOK NOW</button>
                                <div className='flex justify-end'>
                                    <img src={arrow} ></img>
                                </div>

                            </div>
                        ))}
                    </Slider>


                </div>
            </div>
        </div>
        </>
    )
}

export default Product_slide
