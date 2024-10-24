import React, { useState } from "react";

const Registation = () => {
  let [on, setOn] = useState(false);

  return (
    <>
      <div className="w-full h-screen bg-black/10 flex justify-center items-center ">
        <div className="w-[850px] h-[600px] bg-white shadow-[0px_0px_15px_8px_rgba(0,0,0,0.75)] rounded-[20px] ">
          <div>
            <h1 className="text-[35px] font-popi font-bold text-slate-800 ml-[150px] mt-[80px] mb-[50px]">
              Sign up{" "}
            </h1>
            <div className="w-[300px] ml-[80px] mb-[70px]">
              <input
                className="w-full h-full border-b-2 border-slate-700 outline-none"
                type="text"
              />
            </div>
            <div className="w-[300px] ml-[80px] mb-[70px]">
              <input
                className="w-full h-full border-b-2 border-slate-700 outline-none"
                type="text"
              />
            </div>
            <div className="w-[300px] ml-[80px] mb-[70px]">
              <input
                className="w-full h-full border-b-2 border-slate-700 outline-none"
                type="text"
              />
            </div>
            <button className="text-[22px] font-robo font-bold text-black bg-gradient-to-t from-black to-white rounded-full px-[120px] py-[12px] ml-[65px] border border-blue-50 hover:bg-gradient-to-t hover:from-white hover:to-black ease-in-out duration-500">
              Submit
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registation;
