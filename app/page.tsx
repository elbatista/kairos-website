"use client";

import Link from "next/link";
import { DatabaseZap, Server, Bot, Users, Building2, Plug, Share2, Eye, Layers } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Home() {

  const [investorForm, setInvestorForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChangeInv = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setInvestorForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmitInv = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!investorForm.name || !investorForm.email || !investorForm.company || !investorForm.message) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const res = await fetch("/api/investor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(investorForm),
      });

      if (res.ok) {
        toast.success("Your interest has been submitted successfully!");
        setInvestorForm({ name: "", email: "", company: "", message: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  };

  const valueProps = [
    {
      icon: <DatabaseZap size={40} className="text-gray-900" />,
      title: "Incremental Data Access",
      desc: "Keeps enterprise knowledge up to date by processing only what changes.",
    },
    {
      icon: <Server size={40} className="text-gray-900" />,
      title: "Enterprise-Grade Reliability",
      desc: "Distributed, fault-tolerant architecture with strong consistency guarantees.",
    },
    {
      icon: <Bot size={40} className="text-gray-900" />,
      title: "Built for LLM Interfaces",
      desc: "Optimized for LLMs querying structured knowledge in real business contexts.",
    },
  ];

  const whoItsFor = [
    {
      icon: <Building2 size={36} className="text-gray-900" />,
      title: "Enterprises & SMEs",
      desc: "Organizations with dynamic, distributed data that need accurate, real-time answers.",
    },
    {
      icon: <Users size={36} className="text-gray-900" />,
      title: "Data & Innovation Teams",
      desc: "Teams building LLM-powered tools, assistants, and internal knowledge systems.",
    },
    {
      icon: <Plug size={36} className="text-gray-900" />,
      title: "System Integrators",
      desc: "Partners delivering AI, data, and automation solutions to enterprise clients.",
    },
  ];

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Basic validation
    if (!formData.name || !formData.email || !formData.company) {
      toast.error("Please fill in all fields.");
      return;
    }

    try {
      const response = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("You’ve successfully joined the waitlist!");
        setFormData({ name: "", email: "", company: "" });
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    } catch (error) {
      toast.error("Error submitting form. Please try again.");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="relative px-6 py-28 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-90"
          style={{ backgroundImage: "url('/images/banner.jpg')" }}
        />
        <div className="absolute inset-0 bg-black opacity-60" />

        <motion.div
          className="relative z-10 mx-auto"
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
            Real-time Knowledge for LLM-powered Enterprises
          </motion.h1>

          <motion.p
            className="text-xl max-w-2xl mx-auto mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            KAIROS connects LLMs directly to live enterprise knowledge.  
            It updates only what changes — delivering faster answers, lower costs, and
            reliable results for business-critical decisions.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="flex justify-center gap-4"
          >
            <Link
              href="/technology"
              className="bg-blue-600 text-white px-6 py-3 rounded-2xl text-lg font-medium shadow hover:bg-blue-700 transition"
            >
              Explore the platform
            </Link>
            <Link
              href="/contact"
              className="bg-white text-gray-900 px-6 py-3 rounded-2xl text-lg font-medium shadow hover:bg-gray-100 transition"
            >
              Book a demo
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


      {/* Secret Sauce / Advanced Features */}
<section className="px-6 py-20 bg-gray-50">
  <motion.h2
    className="text-3xl font-semibold text-gray-900 text-center mb-12"
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    KAIROS Secret Sauce
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
    {[
      {
        icon: <Layers size={40} className="text-gray-900" />,
        title: "Neighborhood Prefetching",
        desc: "Performs neighborhood-based data prefetching to reduce latency and improve real-time performance.",
      },
      {
        icon: <Eye size={40} className="text-gray-900" />,
        title: "Predictive Access",
        desc: "LLM-driven prediction of future data access using the history of the conversation with the user.",
      },
      {
        icon: <Share2 size={40} className="text-gray-900" />,
        title: "Graph Traversal Optimization",
        desc: "Orders-of-magnitude reduction in repeated graph access, avoiding costly traversals and improving throughput.",
      },
    ].map((item, idx) => (
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


      {/* Who it’s for */}
      <section className="px-6 py-20 bg-gray-50">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Who KAIROS is for
        </motion.h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {whoItsFor.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
            >
              <div className="mb-4">{item.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 py-20 text-center bg-white">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Turn your enterprise data into real-time intelligence
        </motion.h2>

        <motion.p
          className="max-w-xl mx-auto mb-8 text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.6 }}
        >
          Join forward-thinking companies using KAIROS to power LLM tools with
          fresh, consistent, and trusted knowledge.
        </motion.p>

        <div className=" bg-gray-50 text-gray-800">
      {/* Waitlist Form Section */}
      <section className="px-6 py-20 text-center bg-white">
        <motion.h2
          className="text-3xl font-semibold text-gray-900 mb-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Join the KAIROS Waitlist
        </motion.h2>

        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            placeholder="Your Company"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-lg font-medium shadow hover:bg-blue-700 transition w-full cursor-pointer"
          >
            Join waitlist
          </button>
        </motion.form>
      </section>
    </div>
      </section>

       {/* Investor Form */}
       <section className="px-6 py-12 bg-gray-50 rounded-2xl shadow-md border border-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-semibold text-gray-900 mb-6 text-center"
        >
          Become a KAIROS Investor
        </motion.h2>

        <motion.form
          onSubmit={handleSubmitInv}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="max-w-xl mx-auto space-y-4"
        >
          <input
            type="text"
            name="name"
            value={investorForm.name}
            onChange={handleChangeInv}
            placeholder="Your Name"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="email"
            name="email"
            value={investorForm.email}
            onChange={handleChangeInv}
            placeholder="Your Email"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <input
            type="text"
            name="company"
            value={investorForm.company}
            onChange={handleChangeInv}
            placeholder="Your Company"
            className="w-full px-4 py-2 border rounded-lg"
            required
          />
          <textarea
            name="message"
            value={investorForm.message}
            onChange={handleChangeInv}
            placeholder="Your Message / Investment Interest"
            className="w-full px-4 py-2 border rounded-lg h-32"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-8 py-3 rounded-2xl text-lg font-medium shadow hover:bg-blue-700 transition w-full cursor-pointer"
          >
            Submit Interest
          </button>
        </motion.form>
      </section>

      {/* Add this once, preferably near the root */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    
    </div>
  );
}
