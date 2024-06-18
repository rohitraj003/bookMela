import React,{ useEffect, useState } from 'react'
import Cards from '../components/Cards'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Course = () => {


    const[book,Setbook] = useState([])
    useEffect(()=>{
        const getBook = async()=>{
            try {
            const res = await axios.get("http://localhost:8000/book");
            console.log(res.data)
            Setbook(res.data) 
            } catch (error) {
                console.log(error)
            }
        }
        getBook();
    },[])

    
    return (
        <>
            <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
                <div className='mt-28 items-center justify-center text-center'>
                    <h1 className='text-2xl md:text-4xl'>We're delighted to have you {" "}
                        <span className='text-pink-500'>Here! :)</span></h1>
                    <p className='mt-12'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Exercitationem porro laboriosam placeat sed ullam voluptatum
                        alias error totam quasi. Delectus, voluptate nemo aut nihil esse,
                        quasi ipsa sunt eius provident quos earum! Animi laudantium nisi
                        asperiores quis esse? Ipsum, labore!
                    </p>
                    <Link to='/'>
                    <button className='bg-pink-500 text-white px-3 py-2 mt-6 
                    rounded-md hover:bg-pink-600'>Back</button>
                    </Link>
                </div>
                <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                    {
                        book?.map((item) => (
                            <Cards item = {item} key = {item.id} />
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default Course