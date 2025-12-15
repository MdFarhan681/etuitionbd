import React, { use, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { useState } from "react";
import { PiEyeClosed } from "react-icons/pi";
import { BsEyeglasses } from "react-icons/bs";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import image from "../../assets/image.png";

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const { signIn, googleSignIn } = use(AuthContext);
  
  const handleLogin = (e) => {
    e.preventDefault();

    const form = e.target;

    const email = form.email.value;
    const password = form.password.value;

    signIn(email, password)
      .then((result) => {
        const user = result.user;
        navigate(`${location.state ? location.state : "/"}`);

        toast.success("Successfull LogIn");

      })
      .catch((error) => {
        if (error.code === "auth/wrong-password") {
          toast.error("Incorrect Password");
        } else if (error.code === "auth/user-not-found") {
          toast.error("No user found with that email");
        } else {
          toast.error("Invalid email or password");
        }
      });
  };

  const handleGoogle = () => {
    googleSignIn()
      .then(() => {
        toast.success("Google Sign-In Successful");
        navigate(`${location.state ? location.state : "/"}`);
      })
      .catch(() => {
        toast.error("Google Sign-In Failed. Try again");
      });
  };

  const handleForgotPassword = () => {
    navigate("/auth/forget", { state: { email } });
  };

  return (
    <div className="min-h-screen ">
      <img className="h-40 w-full " src={image} alt="" />
      <div className="flex justify-center items-center px-[7%] ">
        <div className="card bg-base-100 w-[94%]  md:w-100 shrink-0 shadow-2xl   ">
          <h1 className="text-xl md:text-3xl font-bold  pt-5 text-center  mb-3">
            Login Your Account
          </h1>
         
         


          <div className="card-body w-full">
             
        
            <form onSubmit={handleLogin} 
            
            className="fieldset">
              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder=" Email"
                value={email}
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              {/* password*/}
              <div className="relative">
                <label className="label">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  className="input w-full"
                  placeholder="Password"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className=" btn-ghost btn-lg absolute right-3 top-9 transform -translate-y-1/2 text-gray-500 z-3"
                >
                  {showPassword ? (
                    <PiEyeClosed size={25} />
                  ) : (
                    <BsEyeglasses size={25} />
                  )}
                </button>
              </div>

              <a
                onClick={handleForgotPassword}
                className="link link-hover text-blue-600 cursor-pointer"
              >
                Forgot passward?
              </a>

              <button type="submit" className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-4 mr-4 mx-auto text-center">
                Login
              </button>
              <p className="font-semibold text-center pt-3">
                Don't have an account?
                <Link
                  to="/auth/register"
                  state={location.state}
                  className="text-red-600"
                >
                  {" "}
                  Register{" "}
                </Link>
              </p>
              {/* google */}
              <div className="google">
                <button
                  onClick={handleGoogle}
                  type="button"
                  className="btn bg-[#f7f7f7] text-black border-[#e5e5e5]"
                >
                  <svg
                    aria-label="Google logo"
                    width="16"
                    height="16"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <g>
                      <path d="m0 0H512V512H0" fill="#fff"></path>
                      <path
                        fill="#34a853"
                        d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                      ></path>
                      <path
                        fill="#4285f4"
                        d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                      ></path>
                      <path
                        fill="#fbbc02"
                        d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                      ></path>
                      <path
                        fill="#ea4335"
                        d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                      ></path>
                    </g>
                  </svg>
                  Login with Google
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
