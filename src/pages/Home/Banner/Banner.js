import React from 'react';

const Banner = () => {
    return (
        <div className='mt-6  '>

<div className="carousel w-full  ">
  <div id="slide1" className="carousel-item relative w-full  ">
    <img src="https://images.pexels.com/photos/8467589/pexels-photo-8467589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full ">
    <img src="https://images.pexels.com/photos/6814354/pexels-photo-6814354.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full ">
    <img src="https://images.pexels.com/photos/6340715/pexels-photo-6340715.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full  ">
    <img src="https://images.pexels.com/photos/5990030/pexels-photo-5990030.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="w-full  " />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>










        </div>
    );
};

export default Banner;