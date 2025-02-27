import React from "react";
import "./Auth.css";
import logo from "../../assets/Logo/nlogo.jpg";

const Signup = () => {
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-black">
      {/* Parent Container */}
      <div className="h-[80vh] w-[80%] flex flex-col bg_img signup-page rounded-lg ">
        {/* Left Section - Logo and Branding */}
        <div className="w-[30%] flex flex-col items-start justify-center px-10">
          <img src={logo} alt="Logo" className="h-16 w-auto object-contain mix-blend-multiply" />
        </div>

        {/* Form Section - Move to Left */}
        <div className="w-[70%] flex items-center">
          <div className="w-[60%] p-8 bg-opacity-50">
            <h3 className="text-gray-400 uppercase text-sm">Start for free</h3>
            <h1 className="text-white text-3xl font-semibold mt-2">
              Create new account<span className="text-blue-500">.</span>
            </h1>
            <p className="text-gray-500 mt-2">
              Already a member?{" "}
              <a href="#" className="text-blue-500">
                Log in
              </a>
            </p>

            {/* Input Fields */}
            <div className="mt-6 space-y-4">
              <div className="flex gap-4">
                <input
                  type="text"
                  placeholder="First name"
                  className="w-1/2 p-3 bg-gray-800 text-white rounded-md outline-none"
                />
                <input
                  type="text"
                  placeholder="Last name"
                  className="w-1/2 p-3 bg-gray-800 text-white rounded-md outline-none"
                />
              </div>
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 bg-gray-800 text-white rounded-md outline-none"
              />
              <input
                type="password"
                placeholder="Password"
                className="w-full p-3 bg-gray-800 text-white rounded-md outline-none"
              />
            </div>

            {/* Buttons */}
            <div className="mt-6 flex gap-4">
             
              <button className="w-1/2 bg-blue-500 text-white p-3 rounded-md">
                Create account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
