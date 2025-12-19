import React, { useContext, useState } from "react";


import toast from "react-hot-toast";
import AuthProvider, { AuthContext } from "../../../Components/Provider/AuthProvider";
import Loader from "../../../Components/Loader";




const DashPost = () => {
  const [loading, setLoading] = useState(false);
  const { user } = useContext(AuthContext);

  if (!user) {
    return <Loader />;
  }

const handleSub = async (e) => {
  e.preventDefault();
  setLoading(true);

  const form = e.target;

  const saveTuition = {
    name: form.name.value,
    classes: form.classes.value,
    email: user.email,
    photo: form.photo.value || "", // optional field
    school_college: form.school.value,
    location: form.location.value,
    study_time_per_day: form.study_time_per_day.value,
    study_days_per_month: form.study_days_per_month.value,
    weak_subjects: form.weak_subjects.value,
    budget: form.budget.value,
    description: form.description.value,
    dateCreated: new Date(),
  };

  try {
    const res = await fetch("http://localhost:3000/tuition", {
      method: "POST",
      headers: { "Content-Type": "application/json" }, // Fixed header name
      body: JSON.stringify(saveTuition),
    });

    // Always parse JSON, even if error
    const data = await res.json();
    console.log("Response from server:", data); // ← Add this for debugging

    // More reliable check for success
    if (res.ok && (data.insertedId || data.acknowledged)) {
      toast.success("Tuition post created successfully!");
      form.reset();
    } else {
      // Server returned error status or no insertedId
      toast.error(data.message || "Failed to create post");
      console.error("Server error response:", data);
    }
  } catch (error) {
    console.error("Fetch error:", error);
    toast.error("Something went wrong. Please try again.");
  } finally {
    setLoading(false); // This will ALWAYS run
  }
};
return(

    <div className="min-h-screen mb-5 ">
      <div className="flex justify-center items-center w-full px-[7%]  ">
        <div className="card bg-base-100    shrink-0 shadow-2xl w-full">
          <h1 className="text-xl md:text-3xl pt-5 font-bold  text-center">
            Create A New Post
          </h1>
          <div className="card-body w-full">
            <form onSubmit={handleSub} className="fieldset">
              {/* Name */}
              <label className="Name">Name</label>
              <input
                type="text"
                name="name"
                className="input w-full"
                placeholder="Enter your name"
                required
              />
              {/* class */}
              <label className="class">Class</label>
              <input
                type="text"
                name="classes"
                className="input w-full"
                placeholder="Class"
                required
              />
              {/* Email */}
              <label className="Email">Email</label>
              <input
             value={user?.email || ""}
  readOnly
                type="email"
                name="email"
                className="input w-full"
                placeholder=" Email"
                required
              />

              {/* School */}
              <label className="SchoolCollege">School/College</label>
              <input
                type="text"
                name="school"
                className="input w-full"
                placeholder="School/College"
              />
              {/* Location */}
              <label className="location">Location</label>
              <input
                type="text"
                name="location"
                className="input w-full"
                placeholder="Location"
              />
              {/* Photo */}
              <label className="Photo">Photo Url</label>
              <input
                type="text"
                name="photo"
                className="input w-full"
                placeholder="https://..."
              />
              {/* description */}
             
<label className="description">Description</label>
<textarea
  name="description"
  className="textarea textarea-bordered w-full"
  placeholder="Write a short description..."
  rows={3}
/>

              {/* Study time section */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="Study">Study Per Day</label>
                  <input
                    type="text"
                    name="study_time_per_day"
                    className="input w-full"
                    placeholder="1.5 hours"
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="Days">Days in a Month</label>
                  <input
                    type="number"
                    name="study_days_per_month"
                    className="input w-full"
                    placeholder="12"
                      min={1}
                  />
                </div>
              </div>

              {/* Weak subject & budget */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex flex-col gap-1">
                  <label className="Weak">Weak Subject</label>
                  <input
                    type="text"
                    name="weak_subjects"
                    className="input w-full"
                    placeholder="Math"
                    required
                  />
                </div>

                <div className="flex flex-col gap-1">
                  <label className="budget">Budget</label>
                  <input
                    type="text"
                    name="budget"
                    className="input w-full"
                    placeholder="5000 BDT"
                    required
                  />
                </div>
              </div>

              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold text-sm py-3 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 active:scale-95 px-4 mr-4 mx-auto text-center mt-2"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Create"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashPost;
