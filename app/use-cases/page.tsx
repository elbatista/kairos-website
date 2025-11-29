"use client";

import { TrendingUp, HeartPulse, Route, Building2 } from "lucide-react";
import { motion } from "framer-motion";

export default function UseCasesPage() {
  const cases = [
    {
      title: "Finance",
      icon: <TrendingUp size={40} />,
      desc: "Enable LLMs to reason over live market data, corporate relations, and regulatory constraints for safer automated insights.",
      link: "/use-cases/finance",
    },
    {
      title: "Healthcare",
      icon: <HeartPulse size={40} />,
      desc: "Deliver personalized recommendations by combining patient records, medical literature, drug interactions, and real-time updates.",
      link: "/use-cases/healthcare",
    },
    {
      title: "Supply Chain",
      icon: <Route size={40} />,
      desc: "Real-time operational reasoning across suppliers, logistics, and monitoring systems for adaptive, resilient workflows.",
      link: "/use-cases/supply-chain",
    },
    {
      title: "Enterprise Knowledge",
      icon: <Building2 size={40} />,
      desc: "Unify CRM, operational data, documents, and analytics to power agents capable of multi-step enterprise reasoning.",
      link: "/use-cases/enterprise",
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-10"
      >
        Use Cases
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-3xl mb-12"
      >
        KAIROS powers real-time, knowledge-driven AI across industries. Explore how agentic systems reason over evolving data to deliver impact.
      </motion.p>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cases.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition cursor-pointer"
          >
            <div className="text-gray-900 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm mb-4">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
