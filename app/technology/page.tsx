"use client";

import { Server, Cpu, BrainCircuit, DatabaseZap, Layers, Eye, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { Database, Bot } from "lucide-react";

export default function TechnologyPage() {
  const features = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Incremental Reasoning",
      desc: "Processes only updated portions of the knowledge graph, enabling real-time insights and low-latency responses.",
    },
    {
      icon: <DatabaseZap size={40} />,
      title: "State Reuse & Caching",
      desc: "Optimizes performance by reusing intermediate computation states across AI workflows.",
    },
    {
      icon: <Layers size={40} />,
      title: "Neighborhood Prefetching",
      desc: "Performs neighborhood-based data prefetching to reduce latency and improve real-time performance.",
    },
    {
      icon: <Eye size={40} />,
      title: "Predictive Access",
      desc: "LLM-driven prediction of future data access using the history of the conversation with the user.",
    },
    {
      icon: <Share2 size={40} />,
      title: "Graph Traversal Optimization",
      desc: "Orders-of-magnitude reduction in repeated graph access, avoiding costly traversals and improving throughput.",
    },
    {
      icon: <Server size={40} />,
      title: "Distributed & Strongly Consistent",
      desc: "Ensures reliability across nodes with replicated state machines and fault-tolerant mechanisms.",
    },
    {
      icon: <Cpu size={40} />,
      title: "Middleware Integration",
      desc: "Seamlessly connects structured knowledge to AI agents for real-time reasoning and decision-making.",
    },
  ];

  const specs = [
    { label: "Connectors", value: "Neo4J and extensible for future integrations (Kafka, SQL, REST APIs)" },
    { label: "Deployment Options", value: "Cloud-neutral or on-premises deployments" },
    { label: "Performance Highlights", value: "Low-latency, highly scalable, fault-tolerant" },
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
        Technology & How It Works
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-3xl mb-12"
      >
        KAIROS combines distributed knowledge graphs with AI agents using a cloud-neutral, high-performance architecture.
        Explore our innovative approach to real-time reasoning, state management, and seamless integration with enterprise systems.
      </motion.p>

      {/* Dynamic Architecture Flow */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-20"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
          How KAIROS Works
        </h2>

        <div className="relative flex flex-col md:flex-row items-center justify-between gap-16 bg-white p-10 rounded-2xl border border-gray-100 shadow-md">

          {/* Graph Database */}
          <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="w-32 h-32 bg-gray-100 border-2 border-gray-300 rounded-2xl flex flex-col items-center justify-center font-semibold">
              <Database size={40} className="text-gray-900" />
              Graph DB
            </div>
          </motion.div>
          <p className="text-sm text-gray-500 mt-3 max-w-[160px]">
              Distributed knowledge graphs / data sources
            </p></div>
          {/* ---------- ARROW MOBILE ---------- */}
          <div className="md:hidden flex justify-center text-blue-500 text-2xl">
            ↓
          </div>


          {/* Flow line 1 */}
          <div className="hidden md:block  left-1/3 top-1/2 w-32 h-[2px] bg-gradient-to-r from-gray-300 via-blue-400 to-blue-500" />

          {/* Data pulses 1 */}
          <motion.div
            animate={{ x: [0, 120, 240], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "linear" }}
            className="hidden md:block absolute left-1/3 top-[50%-6px] w-3 h-3 bg-blue-500 rounded-full"
          />

          {/* KAIROS */}
          <div className="flex flex-col items-center text-center">
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{
                scale: 1
              }}
              transition={{ repeat: Infinity, repeatType: "mirror", duration: 2.5 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-46 h-46 bg-blue-600 text-white rounded-2xl flex flex-col items-center justify-center text-xl font-bold">
              <img src="/icons/kairos-white.svg" alt="KAIROS Logo" className="h-10 w-10" />
                KAIROS
              </div>
            </motion.div>
            <p className="text-sm text-gray-500 mt-3 max-w-[280px]">
              High-performance architecture, state management, providing incremental processing & reasoning
            </p>
          </div>
          {/* Flow line 2 */}
          <div className="hidden md:block  right-1/3 top-1/2 w-32 h-[2px] bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600" />

          {/* ---------- ARROW MOBILE ---------- */}
          <div className="md:hidden flex justify-center text-purple-600 text-2xl">
            ↓
          </div>


          {/* Data pulses 2 */}
          <motion.div
            animate={{ x: [0, 120, 240], opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 2.2, ease: "linear", delay: 0.5 }}
            className="hidden md:block absolute right-[33%] top-[50%-6px] w-3 h-3 bg-purple-500 rounded-full"
          />

          {/* LLM */}
          <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ repeat: Infinity, repeatType: "mirror", duration: 2 }}
            className="flex flex-col items-center text-center"
          >
            <div className="text-lg w-32 h-32 bg-gray-900 text-white rounded-2xl flex flex-col items-center justify-center font-semibold">
              <Bot size={40} className="text-white" />
              LLM
            </div>
          </motion.div>
            <p className="text-sm text-gray-500 mt-3 max-w-[160px]">
              Consumes knowledge in real time
            </p>
          </div>

        </div>

        {/* Bottom description */}
        <p className="text-center text-gray-600 mt-10 max-w-2xl mx-auto">
          Data flows continuously from the <strong>Graph Database</strong> into
          <strong> KAIROS</strong>, where it’s processed and refined incrementally before
          being delivered to the <strong>LLM</strong> for reasoning, decisions, and actions.
        </p>
      </motion.div>


      {/* Key Features / Innovations */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Key Features & Innovations</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="text-gray-900 mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Technical Specs / Integrations */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Technical Specs & Integrations</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {specs.map((spec, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <h3 className="text-lg font-semibold mb-2">{spec.label}</h3>
              <p className="text-gray-600 text-sm">{spec.value}</p>
            </div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}
