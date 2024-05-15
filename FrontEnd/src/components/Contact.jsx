import React from "react";
import { useForm } from "react-hook-form";
import NavBar from "./NavBar";
import Footer from "./Footer";
const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // Print form data to console
  };
  return (<>   
   <NavBar/>
    <div>
      <div className="flex h-screen items-center justify-center">
        <div className=" border-[2px] shadow-md p-5 rounded-md w-[600px]">
          <h3 className="font-bold text-lg">Contact Us</h3>
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
              <span>Message</span>
              <br />
              <div>
              <textarea
                {...register("message", { required: true })}
                className="w-80 px-3 border rounded-md outline-none py-1"
                placeholder="Enter your Message..."
              ></textarea>
              </div>
              {errors.message && (
                <span className="text-sm text-red-500">
                  This field is required
                </span>
              )}

              <br />

              <br />
            </div>

            <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
    <Footer/>
    </>

  );
};

export default Contact;
