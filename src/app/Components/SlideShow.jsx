import React, { Component } from 'react'; 
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel'; 
import "./Slide.css";
import imgs from "../assets/school.png";
import Image from "next/image";
import hehe from '../assets/blobfour.jpg'

const SlideShow = () => {
  return (
    <div className=' mt-10'>
      <Carousel
          autoPlay
          showStatus={false}
          showIndicators={true}
          infiniteLoop
          interval={2000}
      >
        <div>
          <Image src={hehe} alt="image1" unoptimized={true} className='h-[60vh]'/>
          
        </div>
        <div>
          <Image src={imgs} alt="image2" unoptimized={true} className='h-[60vh]'/>
          
        </div>
        <div>
          <Image src={imgs} alt="image3" unoptimized={true} className='h-[60vh]'/>
          
        </div>
        <div>
          <Image src={imgs} alt="image4" unoptimized={true} className='h-[60vh]'/>
          
        </div>
        <div>
          <Image src={imgs} alt="image5" unoptimized={true} className='h-[60vh]'/>
          
        </div>
      </Carousel>
    </div>
  );
};

export default SlideShow;
