import { useParams } from "react-router";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Loader from "../../Components/Loader";
import { formatDistanceToNow } from "date-fns";
import { useContext, useEffect, useState } from "react";
import image from "../../assets/image.png";
import { FiBookOpen, FiUser, FiFileText } from "react-icons/fi";
import Modal from "../../Components/Modal";
const TuitionDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);
const [isApplyOpen, setIsApplyOpen] = useState(false);
  useEffect(() => {
    fetch(`https://etuition-server-psi.vercel.app/tuitions/${id}`)
      .then((res) => res.json())
      .then((data) => setModel(data.result))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  const {
    name,
    school_college,
    location,
    description,
    photo,
    email,
    study_time_per_day,
    study_days_per_month,
    weak_subjects,
    budget,
    class: studentClass,
    date_created,
  } = model;

  const postedTime = date_created
    ? formatDistanceToNow(new Date(date_created), { addSuffix: true })
    : "Unknown";



    const tutorApply =()=>{
            
<button className="btn" onClick={()=>document.getElementById('my_modal_5').showModal()}>open modal</button>

    }

  return (
    <div className="min-h-screen relative overflow-hidden">
      <img className="h-40 w-full" src={image} alt="" />

      <div className="relative z-10 pt-5 pb-15 px-6">
        {/* Main Glass Card */}
        <div className="max-w-4xl mx-auto">
          <div className="rounded-3xl shadow-2xl overflow-hidden backdrop-blur-2xl bg-white/10 border border-white/20 p-10 animate-fade-in">
            {/* Header - Profile */}
            <div className="flex flex-col items-center mb-12">
              <div className="relative w-40 h-40 rounded-full overflow-hidden border-8 border-white/50 shadow-2xl ring-8 ring-cyan-300/30 transition-all hover:ring-cyan-400/60 hover:scale-105">
                <img
                  src={photo || "https://via.placeholder.com/150"}
                  alt={name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h1 className="text-4xl font-extrabold mt-6 bg-gradient-to-r from-cyan-600 to-teal-600 bg-clip-text text-transparent">
                {name}
              </h1>
              <p className="text-xl font-semibold text-cyan-700 mt-2">
                {studentClass}
              </p>
              <p className="text-sm text-gray-300 mt-1 bg-white/20 px-4 py-1 rounded-full">
                Posted {postedTime}
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Student Info Card */}
              <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">
                    <FiUser className="text-2xl text-green-600" />{" "}
                  </span>{" "}
                  Student Information
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    <span className="font-semibold text-gray-800">
                      School/College:
                    </span>{" "}
                    {school_college}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">Email:</span>{" "}
                    {email}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Location:
                    </span>{" "}
                    {location}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Weak Subjects:
                    </span>{" "}
                    {weak_subjects}
                  </p>
                </div>
              </div>

              <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-sm transition-all hover:shadow-xl hover:-translate-y-1">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">
                    <FiBookOpen className="text-2xl text-blue-400 font-bold" />
                  </span>{" "}
                  Tuition Requirements
                </h2>
                <div className="space-y-4 text-lg">
                  <p>
                    <span className="font-semibold text-gray-800">Budget:</span>{" "}
                    ৳{budget}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Study Time/Day:
                    </span>{" "}
                    {study_time_per_day}
                  </p>
                  <p>
                    <span className="font-semibold text-gray-800">
                      Days/Month:
                    </span>{" "}
                    {study_days_per_month}
                  </p>
                </div>
              </div>
            </div>

            <div className="p-8 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/30 shadow-sm">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3 text-3xl">
                  <FiFileText className="text-xl font-bold text-teal-500" />
                </span>{" "}
                Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">
                {description}
              </p>
            </div>

            <div className="mt-12 flex justify-center">
             <button
  onClick={() => setIsApplyOpen(true)}
  disabled={!user}
  className="w-40 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-4 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-6 mr-4"
>
  {user ? "Apply as Tutor" : "Login to Apply"}
</button>
            </div>
           <Modal
  open={isApplyOpen}
  onClose={() => setIsApplyOpen(false)}
  tuition={model}
/>



          </div>
        </div>
      </div>
    </div>
  );
};

export default TuitionDetails;
