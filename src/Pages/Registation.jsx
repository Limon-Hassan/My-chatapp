import React, { useState } from "react";

const Registation = () => {
  let [on, setOn] = useState(true)
  let handleer = () => {
    setOn(false)
  }
  return (
    <>
      <div className="w-full h-screen bg-black/10 flex justify-center items-center ">
        <div className="w-[850px] h-[500px] bg-black shadow-[0px_0px_15px_8px_rgba(0,0,0,0.75)] rounded-[20px]">
          git 
          <div className="hello w-full h-full bg-white rounded-[20px]">
            <button onClick={handleer}>click</button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registation;
