import React, { useState } from "react";

const Registation = () => {
  let [username,setUserName]=useState('')
  let [email, setEmail]=useState('')
  let [password, setPassword]=useState('')

  return (
    <>
      <div className="w-full h-screen bg-black/10 flex justify-center items-center">
        <div className="w-[850px] h-[600px] bg-white shadow-[0px_0px_15px_8px_rgba(0,0,0,0.75)] rounded-[20px] ">
          <div>
            <h1 className="text-[35px] font-popi font-bold text-slate-800 ml-[150px] mt-[80px] mb-[50px]">
              Sign up
            </h1>
            <div className="w-[300px] ml-[80px] mb-[50px] relative">
              <input
                onChange={(e) => setUserName(console.log(e.target.value))}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 text-[16px]"
                type="text"
              />
              <p className="text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 peer-focus:-translate-y-[35px] peer-focus:text-[12px] pointer-events-none duration-300">
                Username
              </p>
              <i class="fa-solid fa-user absolute top-0 right-0"></i>
            </div>
            <div className="w-[300px] ml-[80px] mb-[50px] relative">
              <input
                onChange={(e) => setEmail(console.log(e.target.value))}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 text-[16px]"
                type="text"
              />
              <p className="text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 peer-focus:-translate-y-[35px] peer-focus:text-[12px] pointer-events-none duration-300">
                Email
              </p>
              <i class="fa-solid fa-envelope absolute top-0 right-0"></i>
            </div>
            <div className="w-[300px] ml-[80px] mb-[50px] relative">
              <input
                onChange={(e) => setPassword(console.log(e.target.value))}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 text-[16px]"
                type="password"
              />
              <p className="text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 peer-focus:-translate-y-[35px] peer-focus:text-[12px] pointer-events-none duration-300">
                Password
              </p>
              <i class="fa-solid fa-lock absolute top-0 right-0"></i>
              <i class="fa-solid fa-lock-open absolute top-0 right-0"></i>
            </div>
            <button className="text-[22px] font-robo font-bold text-black bg-gradient-to-t from-black to-white rounded-full px-[120px] py-[12px] ml-[65px] border border-blue-50 hover:bg-gradient-to-t hover:from-white hover:to-black ease-in-out transition-all duration-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registation;

// https://www.facebook.com/reel/537846992278911/?s=ifu