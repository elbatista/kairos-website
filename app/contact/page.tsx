"use client";

import { Linkedin, Github, Mail, MapPin, Globe } from "lucide-react";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="max-w-3xl mx-auto px-6 py-20">
      {/* Page Header */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-4xl font-bold text-gray-900 mb-6"
      >
        Contact us
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-lg text-gray-600 mb-12"
      >
        You can reach us at the following address or via email:
      </motion.p>

      {/* Address & Email */}
      <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.5 }}
        className="bg-white shadow-md rounded-2xl p-8 border border-gray-100 transition space-y-6"
      >
        <div className="flex  gap-4">
          <MapPin size={28} className="text-gray-900" />
          <div>
          <h2 className="text-xl font-semibold">Distributed Systems Lab</h2>
          <h3 className="text-lg ">USI - Università della Svizzera italiana</h3>
          <p className="text-sm text-gray-00">
              Via La Santa 1<br />
              6900 Lugano, Switzerland
            </p>
          </div>
        </div>

        <div className="flex  gap-4">
          <Mail size={28} className="text-gray-900" />
          <div>
            <h3 className="text-xl font-semibold">Email</h3>
            <p className="text-gray-600">delime@usi.ch</p>
          </div>
        </div>
      </motion.div>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.5 }}
        className="mt-12 flex gap-6 justify-center"
      >
        <a
          href="https://linkedin.com/in/e-batista"
          target="_blank"
          className="text-gray-900 hover:text-blue-900 transition"
        >
          <Linkedin size={30} />
        </a>
        <a
          href="https://github.com/elbatista"
          target="_blank"
          className="text-gray-900 hover:text-black transition"
        >
          <Github size={30} />
        </a>
        <a
          href="https://elbatista.github.io/"
          target="_blank"
          className="text-gray-900 hover:text-black transition"
        >
          <Globe size={30} />
        </a>
      </motion.div>
    </div>
  );
}
