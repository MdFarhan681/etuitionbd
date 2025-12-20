import React from "react";
import { UserPlus, FileText, CheckCircle } from "lucide-react";
import Motion from "../../../Components/Motion";

const steps = [
  {
    id: 1,
    title: "Create Account",
    desc: "Sign up as a student or tutor in seconds. Quick verification process to get you started.",
    icon: <UserPlus size={36} className="text-white" />,
    bg: "bg-blue-600",
  },
  {
    id: 2,
    title: "Post or Apply",
    desc: "Students post tuition requests. Tutors browse and apply with their qualifications.",
    icon: <FileText size={36} className="text-white" />,
    bg: "bg-teal-600",
  },
  {
    id: 3,
    title: "Approve & Pay",
    desc: "Review applications, approve your tutor, and complete secure payment. Start learning!",
    icon: <CheckCircle size={36} className="text-white" />,
    bg: "bg-orange-500",
  },
];

const HowWork = () => {
  return (
    <div className="w-full py-20 ">
      <Motion delay={0}>
        <div className="text-center">
          <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
            Simple Process
          </span>
        </div>
      </Motion>
     
      <Motion delay={0.1}>
        <h2 className="text-3xl md:text-4xl font-bold text-center mt-4 text-gray-900">
          How the Platform Works
        </h2>

        <p className="text-center text-gray-600 mt-3 max-w-2xl mx-auto">
          Get started in three easy steps. From registration to your first
          class, we make it seamless.
        </p>
      </Motion>

      <Motion delay={0.2}>   <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 w-[90%] md:w-[80%] mx-auto">
        {steps.map((step) => (
          <div
            key={step.id}
            className="relative bg-gradient-to-br from-cyan-100/30 via-blue-50 to-indigo-100/20 rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300"
          >

            <div className="absolute -top-3 left-6 bg-gray-900 text-white w-8 h-8 flex items-center justify-center rounded-full text-sm font-bold shadow-lg">
              {step.id}
            </div>

            <div
              className={`w-16 h-16 ${step.bg} rounded-xl flex items-center justify-center mx-auto`}
            >
              {step.icon}
            </div>


            <h3 className="text-lg font-bold text-center mt-6 text-gray-900">
              {step.title}
            </h3>

            <p className="text-center text-gray-600 mt-3">{step.desc}</p>
          </div>
        ))}
      </div></Motion>
   
    </div>
  );
};

export default HowWork;
