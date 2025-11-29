"use client";

import { Server, Cpu, BrainCircuit, DatabaseZap } from "lucide-react";
import { motion } from "framer-motion";

export default function TechnologyPage() {
  const features = [
    {
      icon: <BrainCircuit size={40} />,
      title: "Incremental Reasoning",
      desc: "Processes only updated portions of the knowledge graph, enabling real-time insights and low-latency responses.",
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
    {
      icon: <DatabaseZap size={40} />,
      title: "State Reuse & Caching",
      desc: "Optimizes performance by reusing intermediate computation states across AI workflows.",
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

      {/* Architecture Overview */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="mb-16"
      >
        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Architecture Overview</h2>
        <div className=" rounded-2xl p-6 shadow-md border border-gray-100 flex flex-col md:flex-row items-center gap-6">
          <div className="flex-1  md:text-left">
            <p className="text-gray-600 mb-4">
              KAIROS’s architecture supports distributed knowledge graph storage, incremental computation, and AI agent integration. It is designed to be cloud-neutral while supporting on-premises deployment.
            </p>
            <ul className="list-disc list-inside text-gray-600">
              <li>Distributed, strongly consistent replication</li>
              <li>Incremental reasoning and state reuse</li>
              <li>Middleware layer connecting knowledge to AI agents</li>
            </ul>
          </div>
          <div className="flex-1">
            {/* Placeholder for architecture diagram */}
            <div className="w-full h-64  rounded-2xl flex items-center justify-center text-gray-500">
              <img src="/images/diagram.png" alt="Architecture Diagram" className="max-h-full max-w-full object-contain" />
            </div>
          </div>
        </div>
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
