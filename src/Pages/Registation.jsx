import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { ThreeDots } from "react-loader-spinner";

const Registation = () => {
  const auth = getAuth();
  useEffect(() => {
    Aos.init();
  }, []);
  let [username, setUserName] = useState("");
  let [email, setEmail] = useState("");
  let [emailerror, setEmailError] = useState("");
  let [password, setPassword] = useState("");
  let [Error, setError] = useState(false);
  let [passShow, setPassShow] = useState("");
  let [success, setSuccess] = useState(false);
  let nevigate = useNavigate();

  let handleSubmite = () => {
    if (!username || !email || !password) {
      setError("Please fill out this field");
    } else if (
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)
    ) {
      setEmailError("Invaild Email !");
    }
    if (username && email && password) {
      setSuccess(true);
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          setTimeout(() => {
            setSuccess(false);
            nevigate('/')
            const user = userCredential.user;
          }, [2000]);
        })
        .catch((error) => {
          setTimeout(() => {
            setSuccess(false);
            const errorCode = error.code;
            const errorMessage = error.message;
          }, [2000]);
        });
    }
  };

  return (
    <>
      <div className="w-full h-screen bg-black/10 flex justify-center items-center">
        <div className="w-[850px] h-[630px] bg-white shadow-[0px_0px_15px_8px_rgba(0,0,0,0.75)] rounded-[20px] relative overflow-hidden  ">
          <div className="curvared-shadow"></div>
          <h1
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            className="text-[35px] font-popi font-bold text-slate-800 ml-[150px] mt-[80px] mb-[50px]"
          >
            Sign up
          </h1>
          <div
            data-aos="fade-right"
            data-aos-duration="1500"
            data-aos-easing="ease-in-out"
          >
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
                    ? "-translate-y-[45px] "
                    : "peer-focus:-translate-y-[35px]"
                } peer-focus:text-[12px] pointer-events-none duration-300`}
              >
                Username
              </p>
              <i class="fa-solid fa-user absolute top-[20px] right-0"></i>
            </div>
            <div className="w-[300px] ml-[80px] mb-[50px] relative">
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError("");
                }}
                className="w-full h-full border-b-2 border-slate-700 outline-none peer py-3 font-popi font-medium text-[18px] pr-8"
                type="text"
                value={email}
              />
              {emailerror && (
                <p className="absolute bottom-[-30] left-[20px] w-[120px] h-[30px] bg-white shadow-[0px_0px_2px_2px_rgba(0,0,0,0.1)] text-slate-800 transition-all ease-in-out duration-300 px-1 py-1">
                  {emailerror}
                </p>
              )}
              <p className="text-[18px] font-robo font-medium text-slate-900 absolute top-[50%] translate-y-[-50%] left-0 peer-focus:-translate-y-[35px] peer-focus:text-[12px] pointer-events-none duration-300">
                Email
              </p>
              <i class="fa-solid fa-envelope absolute top-[20px] right-0"></i>
            </div>
            <div
              className={`w-[300px] ml-[80px] ${
                success ? "mb-[20px]" : "mb-[50px]"
              }  relative`}
            >
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
          </div>
          {success == true ? (
            <div className="ml-[180px] mt-0">
              <ThreeDots
                visible={true}
                height="80"
                width="80"
                color="#4fa94d"
                radius="9"
                ariaLabel="three-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
              />
            </div>
          ) : (
            <button
              data-aos="fade-right"
              data-aos-duration="2000"
              data-aos-easing="ease-in-out"
              onClick={handleSubmite}
              className="text-[22px] font-robo font-bold text-black bg-gradient-to-t from-black to-white rounded-full px-[120px] py-[12px] ml-[65px] border border-blue-50 hover:bg-gradient-to-t hover:from-white hover:to-black ease-in-out transition-all duration-500 mb-[20px]"
            >
              Submit
            </button>
          )}

          <p
            data-aos="fade-right"
            data-aos-duration="2500"
            data-aos-easing="ease-in-out"
            className="text-[16px] font-robo font-normal text-slate-800 ml-[95px]"
          >
            Already Have An Account ?
            <Link
              to="/"
              className="text-black font-bold ml-2 hover:underline cursor-pointer"
            >
              Sign in
            </Link>
          </p>
          <div className="info-contan absolute top-0 h-[100%] w-[50%] flex justify-center flex-col right-0  text-right pt-0 pb-[40px] pl-[150px] pr-[60px]">
            <h2
              data-aos="fade-left"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
              className="text-[36px] font-popi font-bold text-white uppercase"
            >
              Welcome Back!
            </h2>
            <p
              data-aos="fade-left"
              data-aos-duration="1500"
              data-aos-easing="ease-in-out"
              className="text-[16px] font-robo font-normal text-white "
            >
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit
              consequuntur minima, temporibus harum consectetur laboriosam!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default Registation;
