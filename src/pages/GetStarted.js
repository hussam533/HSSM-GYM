import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const GetStarted = () => {
  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
          }}
        >
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-7xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Get Started with HSSM Services
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Begin your fitness journey with our premium services
          </motion.p>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">How to Get Started with Our Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">1. Choose Your Service</h3>
              <p className="text-gray-600 mb-4">Select from our range of personal training, group classes, or specialized programs.</p>
              <Link to="/services" className="text-red-600 hover:text-red-800 font-semibold">
                View Our Services
              </Link>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">2. Schedule a Consultation</h3>
              <p className="text-gray-600 mb-4">Book a free consultation with one of our expert trainers to discuss your goals.</p>
              <Link to="/contact" className="text-red-600 hover:text-red-800 font-semibold">
                Contact Us to Schedule
              </Link>
            </motion.div>
            <motion.div
              className="bg-white rounded-lg shadow-md p-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">3. Begin Your Program</h3>
              <p className="text-gray-600 mb-4">Start your personalized fitness program and track your progress with our trainers.</p>
              <Link to="/exercises" className="text-red-600 hover:text-red-800 font-semibold">
                Explore Our Exercise Library
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Life?</h2>
          <p className="text-xl text-gray-600 mb-8">Join HSSM Gym today and start your journey to a healthier, stronger you.</p>
          <Link
            to="/contact"
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors inline-block"
          >
            Contact Us Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default GetStarted;

