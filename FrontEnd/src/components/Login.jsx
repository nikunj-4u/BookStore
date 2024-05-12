import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Login = () => {
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
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Login</h3>
          <form onSubmit={handleSubmit(onSubmit)}> {/* Add onSubmit handler to form */}
            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your Email..."
                className="w-80 px-3 border rounded-md outline-none py-1"
                {...register("email", { required: true })}
              /><br/>
              {errors.email && <span className="text-sm text-red-500">This field is required</span>}
              <br />
              <span>Password</span>
              <br />
              <input
                {...register("password", { required: true })}
                type="password"
                placeholder="Enter your Password..."
                className="w-80 px-3 border rounded-md outline-none py-1"
              />
              <br/>
              {errors.password && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-300" type="submit"> {/* Add type="submit" to submit button */}
                Login
              </button>
              <p>
                Not registered?{" "}
                <Link to="/signup" className="underline text-blue-500 cursor-pointer">
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button>close</button>
        </form>
      </dialog>
    </div>
  );
};

export default Login;
