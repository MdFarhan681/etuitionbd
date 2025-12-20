import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import { handleNav } from "../../../NavigateLoader";
import { NavLink } from "react-router";
import { AuthContext } from "../../../Components/Provider/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const StudDashCard = ({ product, onDelete }) => {
  const { user } = useContext(AuthContext);

  const {
    name,
    classes,
    email,
    photo,
    school_college,
    location,
    study_time_per_day,
    study_days_per_month,
    weak_subjects,
    budget,
    description,
    dateCreated,
    _id,
  } = product;
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (!result.isConfirmed) return;

      fetch(`https://etuition-server-psi.vercel.app/tuition/${_id}`, {
        method: "DELETE",
        headers: {
          authorization: `Bearer ${user?.accessToken}`,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            Swal.fire("Deleted!", "Post has been deleted.", "success");

            onDelete(_id);
          } else {
            Swal.fire("Error!", "Delete failed.", "error");
          }
        })
        .catch(() => {
          Swal.fire("Error!", "Something went wrong.", "error");
        });
    });
  };

  return (
    <div
      className="bg-[#fbfbfc] rounded-2xl border border-gray-100 
                 shadow-sm hover:shadow-md transition-all duration-300
                 p-6 flex flex-col gap-4 h-fit "
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            {weak_subjects}
          </h3>

          {/* Status Badge */}
          <span
            className="px-3 py-1 text-xs font-semibold rounded-full
                           bg-green-100 text-green-700"
          >
            Approved
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 text-gray-500">
          <NavLink
            product={product}
            to={`/dashboard/student/update/${_id}`}
            className=" hover:text-blue-500 transition "
          >
            {" "}
            <FaEdit />
          </NavLink>

          <button
            onClick={handleDelete}
            className="hover:text-red-500 transition"
          >
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Info Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Class:</span> {classes}
        </p>
        <p className=" text-wrap">
          <span className="font-medium text-gray-900">Location:</span>{" "}
          {location}
        </p>
        <p>
          <span className="font-medium text-gray-900">Budget: BDT</span>
          {budget}
        </p>
        <p>
          <span className="font-medium text-gray-900">Time/Days:</span>{" "}
          {study_time_per_day}hr : {study_days_per_month}days
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
    </div>
  );
};

export default StudDashCard;
