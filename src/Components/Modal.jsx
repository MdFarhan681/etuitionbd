import { useEffect, useRef, useState, useContext } from "react";
import { AuthContext } from "./Provider/AuthProvider";
import toast from "react-hot-toast";
import { useNavigate } from "react-router";

const Modal = ({ open, onClose, tuition }) => {
  const dialogRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const { user, createuser, setuser } = useContext(AuthContext);
  const navigate = useNavigate();


  useEffect(() => {
    if (open) {
      dialogRef.current?.showModal();
    } else {
      dialogRef.current?.close();
    }
  }, [open]);

  const handleSub = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const qualifications = form.qualifications.value;
    const experience = form.experience.value;
    const salary = form.salary.value;

    try {
      const saveUser = {
        tuitionId: tuition?._id,
        studentEmail: tuition?.email,
        tuitionId: tuition?._id,
        tuitionName: tuition?.name,
        name,
        email,
        qualifications,
        experience,
        expectedSalary: salary,
        role: "tutor",
        createdAt: new Date(),
      };
      // console.log(saveUser);
      const res = await fetch(
        "https://etuition-server-psi.vercel.app/application",
        {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify(saveUser),
        }
      );
      if (!res.ok) {
        throw new Error("Server error");
      }
      const data = await res.json();

      if (data.insertedId || data.acknowledged) {
        toast.success("Apply Successful");

        form.reset();
        onClose();
        navigate(-1);
      } else {
        toast.error("Signup failed. Please try again.");
      }
    } catch (error) {
      toast.error("Signup failed. Please try again.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <dialog ref={dialogRef} className="modal modal-bottom sm:modal-middle">
      <div className="modal-box">
        <h1 className="text-xl md:text-3xl pt-5 font-bold text-center">
          Application Form
        </h1>
        <p className="text-sm text-gray-600 mb-6 text-center">
          You are applying for tuition: <b>{tuition?.name}</b>
        </p>

        <div className="card-body w-full">
          <form onSubmit={handleSub} className="fieldset">
            {/* Name */}
            <label className="label">Name</label>
            <input
              type="text"
              name="name"
              className="input w-full"
              placeholder="Enter your name"
              required
              defaultValue={user.displayName}
              readOnly
            />

            {/* Email */}
            <label className="label">Email</label>
            <input
              type="email"
              name="email"
              className="input w-full"
              placeholder="Email"
              required
              defaultValue={user.email}
              readOnly
            />

            {/* Qualifications */}
            <label className="label">Qualifications</label>
            <input
              type="text"
              name="qualifications"
              className="input w-full"
              placeholder="Qualifications"
              required
            />

            {/* Experience */}
            <label className="label">Experience</label>
            <input
              type="text"
              name="experience"
              className="input w-full"
              placeholder="Experience"
              required
            />

            {/* Salary */}
            <label className="label">Expected Salary</label>
            <input
              type="text"
              name="salary"
              className="input w-full"
              placeholder="Expected Salary"
              required
            />

            <div className="flex justify-between items-center mt-4">
              <button
                type="submit"
                className="btn w-1/2 bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                disabled={loading}
              >
                {loading ? (
                  <span className="loading loading-spinner"></span>
                ) : (
                  "Submit"
                )}
              </button>

              <button
                type="button"
                onClick={onClose}
                className="btn btn-outline w-1/2 ml-2"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
