import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const StudDashCard = ({ tuition }) => {
  return (
    <div
      className="bg-white rounded-2xl border border-gray-100 
                 shadow-sm hover:shadow-md transition-all duration-300
                 p-6 flex flex-col gap-4 h-fit "
    >
      {/* Header */}
      <div className="flex justify-between items-start">
        <div className="flex items-center gap-3">
          <h3 className="text-lg font-semibold text-gray-900">
            Chemistry
          </h3>

          {/* Status Badge */}
          <span className="px-3 py-1 text-xs font-semibold rounded-full
                           bg-green-100 text-green-700">
            Approved
          </span>
        </div>

        {/* Actions */}
        <div className="flex gap-3 text-gray-500">
          <button className="hover:text-blue-600 transition">
            <FaEye />
          </button>
          <button className="hover:text-amber-500 transition">
            <FaEdit />
          </button>
          <button className="hover:text-red-500 transition">
            <FaTrash />
          </button>
        </div>
      </div>

      {/* Info Row */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
        <p>
          <span className="font-medium text-gray-900">Class:</span> 12
        </p>
        <p>
          <span className="font-medium text-gray-900">Location:</span> RUET road,
          Rajshahi
        </p>
        <p>
          <span className="font-medium text-gray-900">Budget:</span> 500৳/hr
        </p>
        <p>
          <span className="font-medium text-gray-900">Schedule:</span> Sat–Mon,
          5–7:30PM
        </p>
      </div>

      {/* Description */}
      <p className="text-sm text-gray-600 leading-relaxed">
        Need a tutor from engineering background who can prepare for both HSC
        and admission
      </p>
    </div>
  );
};

export default StudDashCard;
