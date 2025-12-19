import React, { use, useContext, useEffect, useState } from 'react'
import StudDashCard from './StudDashCard'
import { AuthContext } from '../../../Components/Provider/AuthProvider';
import Loader from '../../../Components/Loader';
import axios from 'axios';
const DashTuition = () => {
    const [allProducts, setAllProducts] = useState([]);        
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
      const { data } = await axios.get(`http://localhost:3000/dashboard/student/myTuition/${user.email}`);
      console.log(data);
      setAllProducts(data);
      setDisplayProducts(data);
    } catch (err) {
      console.error("Failed to load products:", err);
    } finally {
      setLoading(false);
    }
  };

  fetchAllProducts();
}, [user]);



  return (
    <div className="w-full h-fit mb-10">
     <div className="mb-6"> <h1 className='text-xl font-bold'>My Tuitions</h1>
      <p className='text-sm text-gray-500'>Manage your tuition post</p></div>
        <div className="">
              {loading ? (
          <div className="flex justify-center py-32">
            <Loader />
          </div>
        ) : displayProducts.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-2xl text-gray-500">No products found matching your filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1  mx-auto gap-3">
            {displayProducts.map((product) => (
              <StudDashCard product={product}></StudDashCard>
            ))}
          </div>
        )}
           
                

                 
 
      
    </div>
    </div>
   
  )
}

export default DashTuition
