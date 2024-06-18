import React from 'react'
import { Link } from 'react-router-dom'
import Login from './Login'
import { useForm } from 'react-hook-form'
import axios from 'axios'

const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    const onsubmit = async (data) => { 
        const userInfo ={
            Name: data.Name,
            Email: data.Email,
            Password: data.Password
        }
        // console.log(data)
        await axios.post("http://localhost:8000/users/signup",userInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data){
                alert('Signup Successfully')
            }
        }).catch((err) => {
            console.log(err)
            alert('Error ',err)
        })
    }
  return (
    <>
    <div className='flex h-screen items-center justify-center'>
    <div className="w-[600px]">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit(onsubmit)}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
                    
                    <h3 className="font-bold text-lg">Signup</h3>
                    {/* Name */}
                    <div className='space-y-2 mt-4'>
                        <span>Name</span>
                        <br />
                        <input type="text" 
                        placeholder='Enter your name'
                        className='outline-none px-3 py-1 w-80 rounded-md'
                        {...register('Name', { required: true })}/>
                        <br />
                        {errors.Name && <span className='text-sm text-red-500'>This field is required.</span>}
                    </div>
                    {/* Email */}
                    <div className='space-y-2 mt-4'>
                        <span>Email</span>
                        <br />
                        <input type="email" 
                        placeholder='Enter your email'
                        className='outline-none px-3 py-1 w-80 rounded-md'
                        {...register('email', { required: true })}/>
                        <br />
                        {errors.email && <span className='text-sm text-red-500'>This field is required.</span>}
                    </div>
                    {/* Password */}
                    <div className='space-y-2 mt-4'>
                        <span>Password</span>
                        <br />
                        <input type="password" 
                        placeholder='Enter your password'
                        className='outline-none px-3 py-1 w-80 rounded-md'
                        {...register('password', { required: true })}/>
                        <br />
                        {errors.password && <span className='text-sm text-red-500'>This field is required.</span>}
                    </div>
                    {/* Button */}
                    <div className='flex justify-around mt-4'>
                        <button className='bg-pink-500 rounded-md text-white px-3 py-1
                        hover:bg-pink-700 duration-200'>Signup</button>
                        <p>Have account?{" "}
                        <button className='underline text-blue-500 cursor-pointer'
                        onClick={()=>
                            document.getElementById("my_modal_3").showModal()
                        }>
                        Login</button>
                        <Login />
                        </p>
                    </div>
                    </form>
                </div>
            </div>
    </div>
    </>
  )
}

export default Signup