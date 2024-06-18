import React from 'react'
import { Link } from 'react-router-dom'
import { useForm } from 'react-hook-form';

const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    return (
        <div>
            <dialog id="my_modal_3" className="modal">
                <div className="modal-box">
                    <form method="dialog" onSubmit={handleSubmit((data) => console.log(data))}>
                        {/* if there is a button in form, it will close the modal */}
                        <Link to='/' className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                        onClick={() => document.getElementById("my_modal_3").close()}>✕</Link>
                    
                    <h3 className="font-bold text-lg">Login</h3>
                    {/* Email */}
                    <div className='space-y-2 mt-4'>
                        <span>Email</span>
                        <br />
                        <input type="email"
                            placeholder='Enter your email'
                            className='outline-none px-3 py-1 w-80 rounded-md'
                            {...register('email', { required: true })} />
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
                        hover:bg-pink-700 duration-200'>Login</button>
                        
                        <p>Not registered?{" "}
                            <Link to='/signup' className='underline text-blue-500 cursor-pointer'>Signup</Link></p>
                    </div>
                    </form>
                </div>
                
            </dialog>
            
        </div>
        
    )
}

export default Login