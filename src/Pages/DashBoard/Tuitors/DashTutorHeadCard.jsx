const DashTutorHeadCard = () => {
  return (
    <div className="hidden md:grid grid-cols-7 gap-4 text-sm text-gray-400 font-medium py-3  rounded-xl w-full border-b border-gray-200 mb-3 px-6 ">
      <span>Subject</span>
      <span>Class</span>
      <span>Location</span>
      <span>Expected Salary</span>
      <span>Status</span>
      <span>Applied</span>
      <span className="text-right">Actions</span>
    </div>
  );
};

export default DashTutorHeadCard;
