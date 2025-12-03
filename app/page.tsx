"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { DatabaseZap, Server, Bot } from "lucide-react";

export default function Home() {
  const valueProps = [
    {
      icon: <DatabaseZap size={40} className="text-gray-900" />,
      title: "Incremental Reasoning",
      desc: "Processes only graph changes, reusing intermediate states to reduce overhead.",
    },
    {
      icon: <Server size={40} className="text-ggray-900" />,
      title: "Distributed & Fault-Tolerant",
      desc: "Built on strongly consistent replicated partitions with cloud-neutral deployment.",
    },
    {
      icon: <Bot size={40} className="text-pugray-900" />,
      title: "Built for Agentic AI",
      desc: "Optimized for multi-step reasoning, adaptive workflows, and real-time decisions.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative px-6 py-28 text-center text-white">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/banner.jpg')" }}
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-60" />

        {/* Content */}
        <motion.div
          className="relative z-10  mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.h1
            className="text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            Real-Time Reasoning for Autonomous AI
          </motion.h1>

          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            KAIROS enables enterprises to deploy AI agents that reason incrementally over
            dynamic, graph-based knowledge at scale.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Link
              href="/technology"
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Learn more
            </Link>
          </motion.div>
        </motion.div>
      </section>

      {/* Value Proposition */}
      <section className="px-6 py-20 bg-white">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Why KAIROS
        </motion.h2>

        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
          }}
          className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
        >
          {valueProps.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Discover KAIROS Technology
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Link
            href="/technology"
            className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow hover:bg-blue-700 transition"
          >
            Learn More
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
