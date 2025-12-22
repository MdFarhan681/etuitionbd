import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router";
import Loader from "../../../Components/Loader";
import DashTutorCard from "./DashTutorCard";
import DashTutorHeadCard from "./DashTutorHeadCard";
import { AuthContext } from "../../../Components/Provider/AuthProvider";

const DashTutorApply = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [displayProducts, setDisplayProducts] = useState([]);
  const [loading, setloading] = useState(false);

  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [products, setproducts] = useState([]);

  useEffect(() => {
    if (!user?.email) return;

    const fetchApplications = async () => {
      setloading(true);
      try {
        const res = await axios.get(
          "https://etuition-server-psi.vercel.app/dashboard/tutor/application",
          { params: { email: user.email } }
        );

        // console.log("API Response:", res.data); // 

        if (res.data.success && Array.isArray(res.data.data)) {
          setAllProducts(res.data.data);
          setDisplayProducts(res.data.data);
        } else {
          setAllProducts([]);
          setDisplayProducts([]);
        }
      } catch (err) {
        // console.error("Fetch error:", err.response?.data || err.message);
        setAllProducts([]);
        setDisplayProducts([]);
      } finally {
        setLoading(false);
      }
    };

    fetchApplications();
  }, [user]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://etuition-server-psi.vercel.app/dashboard/tutor/application/${id}`
      );
      setAllProducts((prev) => prev.filter((item) => item._id !== id));
      setDisplayProducts((prev) => prev.filter((item) => item._id !== id));
    } catch (err) {
      // console.error("Failed to delete:", err);
    }
  };

  if (loading) return <Loader />;

  return (
    <div className="bg-white rounded-xl border border-gray-100 shadow-sm p-4 md:p-6">
      {/* Header */}
      <DashTutorHeadCard />

      {Array.isArray(displayProducts) && displayProducts.length > 0 ? (
        displayProducts.map((product) => (
          <DashTutorCard
            key={product._id}
            product={product}
            onDelete={() => handleDelete(product._id)}
          />
        ))
      ) : (
        <p className="text-center text-gray-500 py-10">
          No applications found.
        </p>
      )}
    </div>
  );
};

export default DashTutorApply;
