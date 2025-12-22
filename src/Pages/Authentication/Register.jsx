import React, { use, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router";

import toast from "react-hot-toast";
import { PiEyeClosed } from "react-icons/pi";
import { BsEyeglasses } from "react-icons/bs";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import image from "../../assets/image.png";
import { updateProfile } from "firebase/auth";
import axios from "axios";

const Register = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const { createuser, setuser, googleSignIn } = use(AuthContext);

  const [role, setRole] = useState("student");

  const roleBtn = (value, label) => (
    <button
      onClick={() => setRole(value)}
      className={`flex-1 py-2 px-10 rounded-lg text-sm font-medium transition
        ${
          role === value
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );

  const handleSub = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const phone = form.phone.value;

    // Password validation
    if (!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)) {
      toast.error(
        "Password must include uppercase, lowercase, and min 6 chars"
      );
      setLoading(false);
      return;
    }

    try {
      const userCredential = await createuser(email, password);
      const firebaseUser = userCredential.user;

      await updateProfile(firebaseUser, { displayName: name, photoURL: photo });

      const saveUser = {
        uid: firebaseUser.uid,
        name,
        email,
        photo,
        phone,
        role,
        createdAt: new Date(),
      };

      const res = await fetch("https://etuition-server-psi.vercel.app/users", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify(saveUser),
      });

      const data = await res.json();

      if (data.insertedId || data.acknowledged) {
        toast.success("Signup Successful");
        setuser(firebaseUser);

        form.reset();
        window.location.href = "/";
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      if (error.code === "auth/email-already-in-use") {
        toast.error("This email is already registered. Please login.");
      } else if (error.code === "auth/invalid-email") {
        toast.error("Invalid email.");
      } else {
        toast.error("Signup failed. Please try again.");
        // console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  // Google Signup
  const handleGoogle = async () => {
    setLoading(true);

    try {
      const firebaseUser = await googleSignIn();

      if (!firebaseUser) {
        throw new Error("Firebase user not found");
      }

      const saveUser = {
        uid: firebaseUser.uid,
        name: firebaseUser.displayName,
        email: firebaseUser.email,
        photo: firebaseUser.photoURL,
        phone: firebaseUser.phoneNumber || "",
        role: "student",
        createdAt: new Date(),
      };

      await axios.post(
        "https://etuition-server-psi.vercel.app/users",
        saveUser
      );

      toast.success("Google signup successful!");
      navigate("/");
    } catch (error) {
      // console.error("Google Sign-In Error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen ">
      <img className="h-40 w-full " src={image} alt="" />
      <div className="flex justify-center items-center  ">
        <div className="card bg-base-100 w-[94%]  md:w-100 shrink-0 shadow-2xl ">
          <h1 className="text-xl md:text-3xl pt-5 font-bold  text-center">
            Register Your Account
          </h1>
          <div className="card-body w-full">
            {/* Role Selector */}
            <div className="flex gap-1 bg-gray-100 rounded-xl mb-5 w-full ">
              {roleBtn("student", "I'm a Student")}
              {roleBtn("tutor", "I'm a Tutor")}
            </div>
            <form onSubmit={handleSub} className="fieldset">
              {/* Name */}
              <label className="label">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your name"
                required
              />

              {/* Email */}
              <label className="label">Email</label>
              <input
                type="email"
                name="email"
                className="input w-full"
                placeholder=" Email"
                required
              />

              {/* Photo */}
              <label className="label">Photo Url</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="https://..."
              />
              {/* Phone */}
              <label className="label">Phone</label>
              <input
                type="text"
                name="phone"
                className="input w-full"
                placeholder=" Phone"
                required
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

              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-4 mr-4 mx-auto text-center"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Register"
                )}
              </button>

              <p className="font-semibold text-center pt-3">
                Already have an account?
                <Link to="/auth/login" className="text-red-600">
                  {" "}
                  Login
                </Link>
              </p>
              {/* google */}
              <div className="google">
                <button
                  onClick={handleGoogle}
                  type="button"
                  className="btn bg-[#f7f7f7]text-black border-[#e5e5e5]"
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
                  Signup with Google
                </button>
              </div>
            </form>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default Register;
