"use client";

import { Telescope, Swords, Globe } from "lucide-react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPage() {
  const highlights = [
    {
      icon: <Globe size={40} />,
      title: "Mission",
      desc: "Empower enterprises with real-time, knowledge-driven AI that enhances decision-making and operational efficiency.",
    },
    {
      icon: <Swords size={40} />,
      title: "Challenges",
      desc: "Integrating AI with knowledge graphs is complex: data heterogeneity, scalability, and real-time reasoning are ongoing hurdles.",
    },
    {
      icon: <Telescope size={40} />,
      title: "Vision",
      desc: "A world where enterprises leverage seamless, real-time AI powered by knowledge graphs for smarter, faster insights.",
    },
  ];

  const team = [
    {
      name: "Eliã Batista",
      role: "Co-Founder & Chief Scientist",
      bio: "PhD candidate at USI and PUC-RS specializing in distributed systems, parallel state machine replication, and knowledge-driven AI. Passionate about scalable, dependable AI solutions.",
      link: "https://elbatista.github.io/",
      photo: "/team/elia.jpg",

    },
    {
      name: "Fernando Pedone",
      role: "Co-Founder & Research Supervisor",
      bio: "Full Professor at USI with expertise in dependable distributed systems, replication protocols, and fault-tolerant architectures. Advisor to the KAIROS research team.",
      link: "https://www.inf.usi.ch/faculty/pedone/",
      photo: "/team/pedone.jpg",

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
        About KAIROS
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 max-w-3xl mb-12"
      >
        KAIROS is dedicated to bringing real-time knowledge-driven AI to enterprises. 
        We tackle the challenges of integrating AI with complex knowledge graphs to enable smarter decisions, faster insights, and scalable solutions.
      </motion.p>

      {/* Highlights */}
      <motion.div
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
        }}
        className="grid md:grid-cols-3 gap-8 mb-16"
      >
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.5 }}
            className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition"
          >
            <div className="text-gray-900 mb-4">{item.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Optional Team Section */}
      <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
    >
      <h2 className="text-2xl font-semibold text-gray-900 mb-6">Our Team</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
  {team.map((member, idx) => (
    <div
      key={idx}
      className="bg-white shadow-md rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition flex flex-col sm:flex-row items-center sm:items-start gap-6"
    >
      {/* Photo */}
      <div className="relative w-28 h-28 sm:w-36 sm:h-36 rounded-full overflow-hidden flex-shrink-0">
        <Image
          src={member.photo}
          alt={member.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="text-center sm:text-left">
        <h3 className="text-xl font-semibold mb-1">
          <a
            href={member.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 underline sm:no-underline hover:underline"
          >
            {member.name}
          </a>
        </h3>

        <p className="text-blue-600 font-medium mb-2">
          {member.role}
        </p>

        <p className="text-gray-600 text-sm leading-relaxed">
          {member.bio}
        </p>
      </div>
    </div>
  ))}
</div>

    </motion.div>
    </div>
  );
}
