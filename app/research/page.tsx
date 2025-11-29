"use client";

import { TrendingDown, TrendingUp, BookOpen, ArrowLeftRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function ResearchPage() {
  const references = [
    {
      title: "FlexCast",
      desc: "Techniques for efficient communication in distributed systems.",
      link: "papers/flexcast.pdf",
    },
    {
      title: "Parallel SMR Execution",
      desc: "Approaches to increase throughput in replicated state machines.",
      link: "https://elbatista.github.io/papers/batista22.pdf",
    },
    {
      title: "B+AVL Trees",
      desc: "Optimized data structures for efficient state management.",
      link: "papers/2025SRDS.pdf",
    },
  ];

  const benchmarks = [
    {
      metric: "Latency Reduction",
      value: "By proposing a novel Atomic Multicast protocol we achieve significantly faster response times under high load.",
      icon: <TrendingDown size={40} />,
    },
    {
      metric: "Throughput Improvement",
      value: "By leveraging our parallel scheduling and optimized synchronization techniques, our system processes more transactions per second.",
      icon: <TrendingUp size={40} />,
    },
    {
      metric: "State Transfer Efficiency",
      value: "Optimized data structures and state transfer techniques minimize overhead in state management and failure recovery.",
      icon: <ArrowLeftRight size={40} />,
    },
  ];
  
  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Research & Validation
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-3xl mb-12"
      >
        KAIROS is backed by cutting-edge research and rigorous benchmarks. Explore our references, performance metrics, and publications to understand the scientific foundation of our platform.
      </motion.p>

      {/* References */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">References</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {references.map((ref, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition cursor-pointer"
            >
              <div className="text-gray-900 mb-4">
                <BookOpen size={40} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{ref.title}</h3>
              <p className="text-gray-600 text-sm mb-4">{ref.desc}</p>
              <Link
                href={ref.link}
                target="_blank"
                className="inline-block text-blue-600 font-medium hover:underline"
              >
                Read Paper →
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Benchmarks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Benchmarks</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benchmarks.map((bench, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="text-gray-900 mb-4">{bench.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{bench.metric}</h3>
              <p className="text-gray-600 text-sm">{bench.value}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
