import React, { useEffect, useState } from 'react';

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0); // Track the current slide

  useEffect(() => {
    const slider = document.querySelector('#slider');
    const slides = document.querySelectorAll('#slider > div');
    const totalSlides = slides.length;

    const moveSlide = () => {
      const max = slider.scrollWidth - slider.clientWidth;
      const left = slider.clientWidth;

      if (max === Math.floor(slider.scrollLeft)) {
        slider.scrollTo({ left: 0, behavior: 'smooth' });
        setCurrentSlide(0); // Reset the active slide when it loops back
      } else {
        // alert(slider.scrollLeft)
        slider.scrollBy({ left, behavior: 'smooth' });
        setCurrentSlide((prev) => (prev + 1) % totalSlides); // Update active slide index
      }
    };

    // Use setInterval to move the slide every 2 seconds
    const intervalId = setInterval(moveSlide, 3500);

    // Cleanup the interval on unmount
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  const handleDotClick = (index) => {
    const slider = document.querySelector('#slider');
    const slideWidth = slider.clientWidth;
    slider.scrollTo({ left: slideWidth * index, behavior: 'smooth' });
    setCurrentSlide(index); // Update the active slide when a dot is clicked
  };

  return (
    <div className="relative ">
      <div className="h-screen w-full overflow-hidden flex flex-nowrap text-center" id="slider">

        <div className="bg-custom-image text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">

          <h2 className="text-4xl  text-[90px] leading-[92px] font-bold text-center">WATCHES</h2>
          <h2 className="text-4xl  text-[90px] leading-[92px] font-bold text-center">COLLECTIONS</h2>
          <p className="max-w-md text-[15px] leading-[23px] font-[300]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          <button type="button" class="text-white border border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Learn more</button>
        </div>



        <div className="bg-custom-image2 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
          <h2 className="text-4xl  text-[90px] leading-[92px] font-bold text-center">CIGARS</h2>
          <h2 className="text-4xl  text-[90px] leading-[92px] font-bold text-center">COLLECTIONS</h2>
          <p className="max-w-md text-[15px] leading-[23px] font-[300]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          <button type="button" class="text-white border border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Learn more</button>
        </div>



        <div className="bg-custom-image3 text-white space-y-4 flex-none w-full flex flex-col items-center justify-center">
        <h2 className="text-4xl  text-[90px] leading-[92px] font-bold text-center">CIGARS</h2>
          <h2 className="text-4xl  text-[90px] leading-[92px] font-bold text-center">COLLECTIONS</h2>
          <p className="max-w-md text-[15px] leading-[23px] font-[300]">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's </p>
          <button type="button" class="text-white border border-white font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Learn more</button>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: 3 }).map((_, index) => (
          <button
            key={index}
            className={`px-16 w-4 h-2 rounded-full bg-[#D39F3A] ${currentSlide === index ? 'border border-yellow-400  focus:outline-none  font-medium rounded-lg text-sm text-center  ' : 'bg-custom-transparent border border-white'}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
      </div>

      {/* Dots Navigation */}
      
    </div>
  );
};

export default Slider;
