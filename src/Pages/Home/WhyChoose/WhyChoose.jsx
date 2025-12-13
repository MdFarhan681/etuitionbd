// import { Card, CardContent } from "@/components/ui/card";
// ❌ Your project doesn't have shadcn/ui installed, so the import fails.
// ✔ Replacing Card with a simple custom wrapper:
const Card = ({ children, className }) => (
  <div
    className={`rounded-2xl shadow-md p-6 hover:shadow-xl transition-all bg-gradient-to-br from-cyan-50 via-blue-50 to-indigo-100 ${className}`}
  >
    {children}
  </div>
);

const CardContent = ({ children, className }) => (
  <div className={`flex flex-col gap-4 ${className}`}>{children}</div>
);
import { motion } from "framer-motion";
import {
  ShieldCheck,
  CreditCard,
  Clock,
  UserCheck,
  Headphones,
  Globe,
} from "lucide-react";
import Motion from "../../../Components/Motion";

export default function WhyChoose() {
  const benefits = [
    {
      icon: <ShieldCheck className="w-10 h-10" />,
      title: "Verified Tutors",
      desc: "All tutors undergo background checks and credential verification for your peace of mind.",
    },
    {
      icon: <CreditCard className="w-10 h-10" />,
      title: "Secure Payments",
      desc: "Protected transactions with Stripe. Pay only when you approve a tutor.",
    },
    {
      icon: <Clock className="w-10 h-10" />,
      title: "Flexible Scheduling",
      desc: "Find tutors available at your preferred times. Set your own schedule.",
    },
    {
      icon: <UserCheck className="w-10 h-10" />,
      title: "Quality Guaranteed",
      desc: "Satisfaction guarantee with ratings and reviews from real students.",
    },
    {
      icon: <Headphones className="w-10 h-10" />,
      title: "24/7 Support",
      desc: "Dedicated support team ready to help you anytime you need assistance.",
    },
    {
      icon: <Globe className="w-10 h-10" />,
      title: "Wide Coverage",
      desc: "Find tutors for any subject, any level, anywhere. Local and online options.",
    },
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto ">
      {/* Header */}
      <div className="text-center mb-14">
        <Motion>
          <span className="px-4 py-1 rounded-full bg-teal-100 text-teal-600 text-sm font-semibold">
            Our Benefits
          </span>
          <h2 className="text-4xl font-bold mt-4">Why Choose eTuitionBD?</h2>
          <p className="text-gray-500 mt-2 max-w-2xl mx-auto">
            We're committed to providing the best tutoring experience with
            features that matter.
          </p>
        </Motion>
      </div>

      {/* Benefit Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {benefits.map((item, index) => (
          <Motion key={index} delay={index * 0.1}>
            <Card>
              <CardContent>
                <div className="text-blue-500">{item.icon}</div>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </CardContent>
            </Card>
          </Motion>
        ))}
      </div>
    </section>
  );
}
