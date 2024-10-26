import React, { useState } from "react";

const Registation = () => {
  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [Error, setError] = useState(false);
  let [passShow, setPassShow] = useState("");

  let handleSubmite = () => {
    if (!username || !email || !password) {
      setError("Please fill out this field");
    }
  };

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
                onChange={(e) => {
                  setUserName(e.target.value);
                  setError("");
                }}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 font-popi font-medium text-[18px] pr-8"
                type="text"
                value={username}
              />
              {Error && (
                <p className="absolute bottom-[-30] left-[20px] w-[195px] h-[30px] bg-white shadow-[0px_0px_2px_2px_rgba(0,0,0,0.1)] text-slate-800 transition-all ease-in-out duration-300 px-1 py-1">
                  {Error && <i class="fa-solid fa-circle-xmark"></i>} {Error}
                </p>
              )}
              <p
                className={`text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 ${
                  Error
                    ? "translate-y-[-30px] "
                    : "peer-focus:-translate-y-[35px]"
                } peer-focus:text-[12px] pointer-events-none duration-300`}
              >
                Username
              </p>
              <i class="fa-solid fa-user absolute top-[20px] right-0"></i>
            </div>
            <div className="w-[300px] ml-[80px] mb-[50px] relative">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 font-popi font-medium text-[18px] pr-8"
                type="text"
                value={email}
              />
              <p className="text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 peer-focus:-translate-y-[35px] peer-focus:text-[12px] pointer-events-none duration-300">
                Email
              </p>
              <i class="fa-solid fa-envelope absolute top-[20px] right-0"></i>
            </div>
            <div className="w-[300px] ml-[80px] mb-[50px] relative">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 font-popi font-medium text-[18px] pr-8"
                type={passShow ? "text" : "password"}
                value={password}
              />
              <p className="text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 peer-focus:-translate-y-[35px] peer-focus:text-[12px] pointer-events-none duration-300">
                Password
              </p>
              {passShow ? (
                <i
                  onClick={() => setPassShow(false)}
                  class="fa-solid fa-lock-open absolute top-[20px] right-0 cursor-pointer "
                ></i>
              ) : (
                <i
                  onClick={() => setPassShow(true)}
                  class="fa-solid fa-lock absolute top-[20px] right-0 cursor-pointer "
                ></i>
              )}
            </div>
            <button
              onClick={handleSubmite}
              className="text-[22px] font-robo font-bold text-black bg-gradient-to-t from-black to-white rounded-full px-[120px] py-[12px] ml-[65px] border border-blue-50 hover:bg-gradient-to-t hover:from-white hover:to-black ease-in-out transition-all duration-500"
            >
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
