 import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";

import toast from "react-hot-toast";
import app from "../Components/Firebase.config";

const auth = getAuth(app);

const Forget = () => {
  const location = useLocation();
  const navigate = useNavigate();

   const [email, setEmail] = useState("");
  

 useEffect(() => {
    if (location.state?.email) {
      setEmail(location.state.email);
    }
  }, [location.state]);





  const handleReset = (e) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        toast.success("Reset email sent! Redirecting to Gmail");
        setTimeout(() => {
          window.location.href = "https://mail.google.com/mail/u/0/#inbox";
        }, 2000);
      })
      .catch((error) => {
        if (error.code === "auth/user-not-found") {
          toast.error("No user found with this email.");
        } else if (error.code === "auth/invalid-email") {
          toast.error("Invalid email format.");
        } else {
          toast.error("Something went wrong. Try again.");
        }
      });



  };

  return (
    <div className="flex justify-center items-center ">
      <div className="card bg-base-100 w-[92%] md:w-96 shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-4">
          Reset Your Password
        </h2>
        <form onSubmit={handleReset} className="space-y-4">
          <label className="label font-semibold">Email</label>
          <input
            type="email"
            name="email"
            className="input input-bordered w-full"
            placeholder="Enter your email"
         autoComplete="email"

            value={email}
            onChange={(e) => setEmail(e.target.value)} 
          

          />

          <button
            type="submit"
            className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-4 mr-4 mx-auto text-center"
          >
            Reset Password
          </button>

          <p className="text-center text-sm pt-3">
            Back to{" "}
            <span
              className="text-blue-600 hover:underline cursor-pointer font-semibold"
              onClick={() => navigate("/auth/login")}
            >
              Login
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Forget;
