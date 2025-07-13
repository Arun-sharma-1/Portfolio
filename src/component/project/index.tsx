'use client'
import React from 'react'
import { motion } from "framer-motion";
const ProjectComponent = () => {
  return(
    <div className="w-full py-20 bg-gradient-to-r from-[#0f172a] to-[#1e293b]">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6">
        
        {/* LEFT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1 text-white space-y-8"
        >
          <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">
            🚀 StudyNotion Platform
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            StudyNotion is an ed-tech platform enabling seamless learning and course creation for educators and learners. It integrates secure authentication, payments, video streaming, and interactive dashboards to provide a comprehensive user experience.
          </p>
          
          <div>
            <h3 className="text-2xl font-semibold mb-4">Tech Stack</h3>
            <div className="flex flex-wrap gap-4">
              {[
                "React.js",
                "Next.js",
                "Node.js",
                "Express",
                "MongoDB",
                "Tailwind CSS",
                "Stripe API",
              ].map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-500 text-white text-sm font-medium shadow-lg hover:scale-105 transition"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 50 ,y:50}}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex-1"
        >
          <div className="overflow-hidden rounded-2xl shadow-2xl border-4 border-cyan-500">
            <img
              src="/images/studynotion.png"
              alt="StudyNotion Screenshot"
              className="object-cover w-full h-[400px] hover:scale-110 transition duration-700 ease-in-out"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );

}

export default ProjectComponent