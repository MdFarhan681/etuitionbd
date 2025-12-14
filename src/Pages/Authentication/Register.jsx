import { useState } from "react";
import { FaUser, FaEnvelope, FaPhone, FaLock, FaGoogle } from "react-icons/fa";
import image from "../../../src/assets/image.png";
const Register = () => {
  const [role, setRole] = useState("student");

  const roleBtn = (value, label) => (
    <button
      onClick={() => setRole(value)}
      className={`flex-1 py-2 rounded-lg text-sm font-medium transition
        ${
          role === value
            ? "bg-blue-600 text-white shadow"
            : "bg-gray-100 text-gray-600 hover:bg-gray-200"
        }`}
    >
      {label}
    </button>
  );

  return (
    <div className="min-h-screen ">
      <img className="h-50 w-full " src={image} alt="" />
      <div className="flex items-center justify-center  px-4 ">
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
          {/* Login / Register Toggle */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            <button className="flex-1 py-2 rounded-lg text-gray-500">
              Login
            </button>
            <button className="flex-1 py-2 rounded-lg bg-white shadow text-black font-medium">
              Register
            </button>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-bold text-center mb-1">
            Create Account
          </h2>
          <p className="text-center text-gray-500 text-sm mb-6">
            Join eTutionBd and start learning today
          </p>

          {/* Role Selector */}
          <div className="flex gap-2 bg-gray-100 p-1 rounded-xl mb-5">
            {roleBtn("student", "I'm a Student")}
            {roleBtn("tutor", "I'm a Tutor")}
            {roleBtn("admin", "Admin")}
          </div>

          {/* Inputs */}
          <div className="space-y-4">
            <Input icon={<FaUser />} placeholder="Full Name" />
            <Input icon={<FaEnvelope />} placeholder="Email Address" />
            <Input icon={<FaPhone />} placeholder="Phone Number" />
            <Input icon={<FaLock />} placeholder="Password" type="password" />
          </div>

          {/* Submit */}
          <button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl font-semibold transition">
            Sign In →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-3 my-6 text-gray-400 text-xs">
            <div className="flex-1 h-px bg-gray-200" />
            OR CONTINUE WITH
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google */}
          <button className="w-full border rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-gray-50 transition">
            <FaGoogle />
            Continue with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default Register;

/* Reusable Input */
const Input = ({ icon, ...props }) => (
  <div className="flex items-center gap-3 border rounded-xl px-4 py-3 bg-gray-50 focus-within:border-blue-500">
    <span className="text-gray-400">{icon}</span>
    <input {...props} className="w-full bg-transparent outline-none text-sm" />
  </div>
);
