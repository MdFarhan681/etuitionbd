import { FiEdit2, FiTrash2 } from "react-icons/fi";

const DashTutorCard = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 px-6 py-4">
    
  {/* Desktop Row */}
      <div className="hidden md:grid grid-cols-7 gap-4 items-center text-sm ">
        <span className="font-medium text-gray-800">Chemistry</span>
        <span>12</span>
        <span className="truncate">RUET Road, Rajshahi</span>
        <span className="font-semibold">৳600/hr</span>

        <span>
          <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-600">
            Approved
          </span>
        </span>

        <span className="text-gray-500">Dec 16, 2025</span>

        <div className="flex justify-end gap-3">
          <FiEdit2 className="cursor-pointer hover:text-blue-600" />
          <FiTrash2 className="cursor-pointer hover:text-red-500" />
        </div>
      </div>

      {/* Mobile Card */}
      <div className="md:hidden space-y-3 text-sm">

        <div className="flex justify-between">
         <div className=""> <span className="font-semibold">Chemistry</span>
          <span className="px-3 py-1 rounded-full text-xs bg-green-100 text-green-600 ml-4">
            Approved
          </span></div>
            <div className="flex  gap-4 pt-2">
          <FiEdit2 className="cursor-pointer text-gray-500 hover:text-blue-600" />
          <FiTrash2 className="cursor-pointer text-gray-500 hover:text-red-500" />
        </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-gray-600">
          <p><span className="font-medium">Class:</span> 12</p>
          <p><span className="font-medium">Salary:</span> ৳600/hr</p>
          <p className="col-span-2">
            <span className="font-medium">Location:</span> RUET Road, Rajshahi
          </p>
          <p className="col-span-2">
            <span className="font-medium">Applied:</span> Dec 16, 2025
          </p>
        </div>

      
      </div>
    </div>
  );
};

export default DashTutorCard;
