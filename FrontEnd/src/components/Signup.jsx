import React from 'react'
import { useForm } from "react-hook-form";

import Login from './Login';
const Signup = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm();
    
      const onSubmit = (data) => {
        console.log(data); // Print form data to console
      };
    
  return (
    <div>
       <div  className="flex h-screen items-center justify-center">
        <div className=" border-[2px] shadow-md p-5 rounded-md w-[600px]">
          <h3 className="font-bold text-lg">SignUp</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mt-4 space-y-2">
             <span>Name</span><br/>
            <input type="text" placeholder="Enter your Name..." className="w-80 px-3 border rounded-md outline-none py-1" {...register("name", { required: true })}/><br/>
              {errors.name && <span className="text-sm text-red-500">This field is required</span>}<br/>
            <span>Email</span><br/>
            <input type="email" placeholder="Enter your Email..." className="w-80 px-3 border rounded-md outline-none py-1" {...register("email", { required: true })}/><br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
            <span>Password</span><br/>
            <input type="password" placeholder="Enter your Password..." className="w-80 px-3 border rounded-md outline-none py-1" {...register("password", { required: true })}/>
            <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
              <br />
            
          </div>

          <div className="flex justify-around mt-4">
          <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">SignUp</button>
          <p>Have Account? <button  className="underline text-blue-500 cursor-pointer" onClick={()=>{
            document.getElementById('my_modal_2').showModal();
          }}>Login</button>
          <Login/>
          </p>
          </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </div>
    </div>
  )
}

export default Signup
