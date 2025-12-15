import { FiUsers } from "react-icons/fi";
import { HiOutlineAcademicCap } from "react-icons/hi2";
import { MdOutlineVerifiedUser } from "react-icons/md";

const stats = [
  {
    id: 1,
    icon: <FiUsers className="text-blue-600 text-2xl" />,
    value: "2,000+",
    label: "Active Tutors",
  },
  {
    id: 2,
    icon: <HiOutlineAcademicCap className="text-blue-600 text-2xl" />,
    value: "10,000+",
    label: "Students Helped",
  },
  {
    id: 3,
    icon: <MdOutlineVerifiedUser className="text-blue-600 text-2xl font-bold" />,
    value: "100%",
    label: "Verified Tutors",
  },
];

const Status = () => {
  return (
    <section className="py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-start gap-3"
            >
              {stat.icon}
              <div>
                <h3 className="text-lg font-bold text-gray-900 leading-tight">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500">
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
