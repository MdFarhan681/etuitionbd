import { useParams } from "react-router";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import Loader from "../../Components/Loader";
import { formatDistanceToNow } from "date-fns";
import { useContext, useEffect, useState } from "react";

const TuitionDetails = () => {
  const { user } = useContext(AuthContext);
  const { id } = useParams();
  const [model, setModel] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/home/tuitions/${id}`)
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
    dateCreated
  } = model;

  const postedTime = dateCreated
    ? formatDistanceToNow(new Date(dateCreated), { addSuffix: true })
    : "Unknown";

  return (
    <div className="min-h-screen bg-gradient-to-br from-cyan-100 via-teal-50 to-indigo-100 relative overflow-hidden">
      {/* Animated Background Gradient Orbs for Depth */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-cyan-400/30 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -right-40 w-80 h-80 bg-teal-400/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-400/20 rounded-full blur-3xl animate-pulse delay-500"></div>
      </div>

      <div className="relative z-10 py-12 px-6">
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
              <p className="text-xl font-semibold text-cyan-700 mt-2">{studentClass}</p>
              <p className="text-sm text-gray-300 mt-1 bg-white/20 px-4 py-1 rounded-full">
                Posted {postedTime}
              </p>
            </div>

            {/* Info Grid - Two Floating Glass Cards */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {/* Student Info Card */}
              <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">👤</span> Student Information
                </h2>
                <div className="space-y-4 text-lg">
                  <p><span className="font-semibold text-gray-800">School/College:</span> {school_college}</p>
                  <p><span className="font-semibold text-gray-800">Email:</span> {email}</p>
                  <p><span className="font-semibold text-gray-800">Location:</span> {location}</p>
                  <p><span className="font-semibold text-gray-800">Weak Subjects:</span> {weak_subjects}</p>
                </div>
              </div>

              {/* Tuition Details Card */}
              <div className="p-8 rounded-2xl bg-white/20 backdrop-blur-xl border border-white/30 shadow-xl transition-all hover:shadow-2xl hover:-translate-y-2">
                <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                  <span className="mr-3 text-3xl">📚</span> Tuition Requirements
                </h2>
                <div className="space-y-4 text-lg">
                  <p><span className="font-semibold text-gray-800">Budget:</span> ৳{budget}</p>
                  <p><span className="font-semibold text-gray-800">Study Time/Day:</span> {study_time_per_day}</p>
                  <p><span className="font-semibold text-gray-800">Days/Month:</span> {study_days_per_month}</p>
                </div>
              </div>
            </div>

            {/* Description Card */}
            <div className="p-8 rounded-2xl bg-white/25 backdrop-blur-xl border border-white/30 shadow-xl">
              <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <span className="mr-3 text-3xl">📝</span> Description
              </h2>
              <p className="text-gray-700 leading-relaxed text-base">{description}</p>
            </div>

            {/* Apply Button */}
            <div className="mt-12 flex justify-center">
              <button
                disabled={!user}
                className="px-12 py-4 rounded-2xl font-bold text-white text-lg
                           bg-gradient-to-r from-cyan-500 to-teal-600
                           hover:from-cyan-600 hover:to-teal-700
                           shadow-2xl hover:shadow-cyan-500/50
                           transform hover:scale-105 active:scale-95
                           transition-all duration-300 animate-pulse-subtle
                           disabled:bg-gray-500 disabled:cursor-not-allowed disabled:animate-none"
              >
                {user ? "Apply as Tutor" : "Login to Apply"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Optional: Custom CSS for subtle pulse if not using plugin */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in { animation: fade-in 1s ease-out; }
        @keyframes pulse-subtle {
          0%, 100% { box-shadow: 0 0 20px rgba(6, 182, 212, 0.4); }
          50% { box-shadow: 0 0 30px rgba(13, 202, 190, 0.6); }
        }
        .animate-pulse-subtle { animation: pulse-subtle 4s infinite; }
      `}</style>
    </div>
  );
};

export default TuitionDetails;