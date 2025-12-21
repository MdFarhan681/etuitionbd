
import React, {  useContext, useEffect, useState } from "react";
import { FiEdit2, FiTrash2 } from "react-icons/fi";

import axios from "axios";
import { useNavigate } from "react-router";
import Loader from '../../../Components/Loader';
import DashTutorCard from "./DashTutorCard";

import DashTutorHeadCard from "./DashTutorHeadCard";
import { AuthContext } from "../../../Components/Provider/AuthProvider";

const DashTutorApply = () => {
    const [allProducts, setAllProducts] = useState([]);
      const navigate = useNavigate();
    
      const [displayProducts, setDisplayProducts] = useState([]);

      const [category, setCategory] = useState("");

      const [sort, setSort] = useState("");
      const [loading, setLoading] = useState(false);

      const { user } = useContext(AuthContext);



// useEffect(() => {
//   if (!user?.email) return;

//   const fetchAllProducts = async () => {
//     setLoading(true);
//     try {
//      const res = await axios.get(
//   "https://etuition-server-psi.vercel.app/dashboard/tutor/application",
//   {
//     params: { email: user.email },
//   }
// );

// setAllProducts(res.data);
// setDisplayProducts(res.data);

//     } catch (err) {
//       console.error("Failed to load products:", err);
//     } finally {
//       setLoading(false);
//     }
//   };

//   fetchAllProducts();
// }, [user]);

  const handleDelete = (id) => {
    // setAllProducts((prev) => prev.filter((item) => item._id !== id));
    // setDisplayProducts((prev) => prev.filter((item) => item._id !== id));
  };

  return (
     <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-6">
      
      {/* Desktop Header */}
      {/* <div className="hidden md:grid grid-cols-7 gap-4 text-sm text-gray-400 font-medium mb-3">
        {/* <span>Subject</span>
        <span>Class</span>
        <span>Location</span>
        <span>Expected Salary</span>
        <span>Status</span>
        <span>Applied</span>
        <span className="text-right">Actions</span> *
       
      </div> */}


      <div className="header">
         <DashTutorHeadCard></DashTutorHeadCard>
      </div>

      <DashTutorCard></DashTutorCard>

    
    </div>
  );
};

export default DashTutorApply
