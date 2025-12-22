import React, { use, useContext, useEffect, useState } from "react";
import StudDashCard from "./StudDashCard";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import Loader from "../../../Components/Loader";
import axios from "axios";
import { useNavigate } from "react-router";
const DashTuition = () => {
  const [allProducts, setAllProducts] = useState([]);
  const navigate = useNavigate();

  const [displayProducts, setDisplayProducts] = useState([]);
  const [category, setCategory] = useState("");
  const [sort, setSort] = useState("");
  const [loading, setLoading] = useState(true);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    if (!user?.email) return;

    const fetchAllProducts = async () => {
      setLoading(true);
      try {
        const { data } = await axios.get(
          `https://etuition-server-psi.vercel.app/dashboard/student/myTuition/${user.email}`
        );

        setAllProducts(data);
        setDisplayProducts(data);
      } catch (err) {
        // console.error("Failed to load products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchAllProducts();
  }, [user]);

  const handleDelete = (id) => {
    setAllProducts((prev) => prev.filter((item) => item._id !== id));
    setDisplayProducts((prev) => prev.filter((item) => item._id !== id));
  };

  return (
    <div className="w-full h-fit mb-10">
      <div className="mb-6">
        {" "}
        <h1 className="text-xl font-bold">My Tuitions</h1>
        <p className="text-sm text-gray-500">Manage your tuition post</p>
      </div>
      <div className="">
        {loading ? (
          <div className="flex justify-center py-32">
            <Loader />
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="card text-center py-20  shadow-sm">
            <p className="text-2xl text-gray-500">
              You don’t have any tuition posts yet. Start by creating one.
            </p>
            <button
              onClick={() => navigate("/dashboard/student/post")}
              className=" w-30 border mt-5 mx-auto px-6 py-2 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 
               text-white font-semibold hover:from-cyan-600 hover:to-blue-700
               transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Create
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1  mx-auto gap-3">
            {displayProducts.map((product) => (
              <StudDashCard
                product={product}
                key={product._id}
                onDelete={handleDelete}
              ></StudDashCard>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashTuition;
