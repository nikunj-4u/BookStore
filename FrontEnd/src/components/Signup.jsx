import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios"
import Login from "./Login";
import toast from "react-hot-toast";
import { useAuth } from "../context/Authprovider";
import { Navigate } from "react-router-dom";
const Signup = () => {
  const[authUser,setAuthUser]=useAuth();
  const[signup,setSignup]=useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
   const obj={
    email:data.email,
    name:data.name,
    password:data.password
   }
    await axios.post('http://localhost:8080/users/signup',obj).then((res)=>{
      console.log(res.data.message);
       toast.success("Signup Success");
      localStorage.setItem('userDetails',JSON.stringify(res.data.user));
      setAuthUser(res.data.user);
      setSignup(true);
    }).catch((err)=>{
      console.log(err.response.data);
       toast.error(err.response.data.message);
    })

  };
if(signup){
  return <Navigate to="/"/>
}
  return (
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className=" border-[2px] shadow-md p-5 rounded-md w-[600px]">
          <h3 className="font-bold text-lg">SignUp</h3>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your Name..."
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("name", { required: true })}
              />
              <br />
              {errors.name && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email..."
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              />
              <br />
              {errors.email && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your Password..."
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("password", { required: true })}
              />
              <br />
              {errors.password && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}
              <br />
            </div>

            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
                SignUp
              </button>
              <p>
                Have Account?{" "}
                <button
                  className="underline text-blue-500 cursor-pointer"
                  onClick={() => {
                    document.getElementById("my_modal_2").showModal();
                  }}
                >
                  Login
                </button>
                <Login />
              </p>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
