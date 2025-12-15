import { FaUserFriends, FaGraduationCap, FaShieldAlt } from "react-icons/fa";

const status = [
  {
    id: 1,
    icon: <FaUserFriends className="text-blue-600 text-3xl" />,
    value: "5,000+",
    label: "Active Tutors",
  },
  {
    id: 2,
    icon: <FaGraduationCap className="text-blue-600 text-3xl" />,
    value: "10,000+",
    label: "Students Helped",
  },
  {
    id: 3,
    icon: <FaShieldAlt className="text-blue-600 text-3xl" />,
    value: "100%",
    label: "Verified Tutors",
  },
];

const Stats = () => {
  return (
    <section className="bg-white py-10">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          {stats.map((stat) => (
            <div
              key={stat.id}
              className="flex items-center justify-center gap-4"
            >
              {stat.icon}
              <div className="text-left">
                <h3 className="text-2xl font-bold text-gray-900">
                  {stat.value}
                </h3>
                <p className="text-sm text-gray-500">{stat.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Status;
