import React, { useState,useEffect }from 'react'
import axios from 'axios'
import Cards from './Cards'

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Freebook = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    // const filterData = list.filter((data) => data.category === "FREE")
    // console.log(filterData);


    const[book,Setbook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
            const res = await axios.get("http://localhost:8000/book");
            console.log(res.data)
            Setbook(res.data.filter((data) => data.category === "FREE")) 
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])

    
  return (
     <>
     <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div>
        <h1 className='text-xl font-semibold pb-2'>Free Offered Courses</h1>
        <p> Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolor,
        et totam. Tempora amet atque expedita</p>
        </div>
     
     <div>
     <Slider {...settings}>
       {book.map((item) => (
        <Cards item = { item } key = { item.id } />
        ))}
      </Slider>
     </div>
     </div>
     </>
  )
}

export default Freebook