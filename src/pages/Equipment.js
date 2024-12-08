import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Equipment = () => {
  const [selectedEquipment, setSelectedEquipment] = useState(null);

  const equipmentList = [
    {
      name: 'Treadmills',
      description: 'High-quality treadmills for cardio workouts and endurance training.',
      image: 'https://images.unsplash.com/photo-1538805060514-97d9cc17730c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      muscles: ['Legs', 'Core', 'Cardiovascular system'],
    },
    {
      name: 'Weight Machines',
      description: 'Various weight machines targeting different muscle groups for strength training.',
      image: 'https://images.unsplash.com/photo-1638805981949-362f5964521e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      muscles: ['Chest', 'Back', 'Arms', 'Legs'],
    },
    {
      name: 'Free Weights',
      description: 'Dumbbells and barbells for versatile strength and muscle-building exercises.',
      image: 'https://images.unsplash.com/photo-1589579234096-25cb6b83e021?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fEZyZWUlMjBXZWlnaHRzfGVufDB8fDB8fHww',
      muscles: ['Full body'],
    },
    {
      name: 'Rowing Machines',
      description: 'Rowing machines for full-body workouts and cardiovascular fitness.',
      image: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      muscles: ['Back', 'Arms', 'Legs', 'Core'],
    },
    {
      name: 'Stationary Bikes',
      description: 'Stationary bikes for low-impact cardio workouts and leg strength.',
      image: 'https://plus.unsplash.com/premium_photo-1664304732747-661c2cd16774?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8U3RhdGlvbmFyeSUyMEJpa2VzfGVufDB8fDB8fHww',
      muscles: ['Legs', 'Cardiovascular system'],
    },
    {
      name: 'Resistance Bands',
      description: 'Versatile resistance bands for strength training and flexibility exercises.',
      image: 'https://images.unsplash.com/photo-1598289431512-b97b0917affc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80',
      muscles: ['Full body'],
    },
    {
      name: 'Leg Press Machine',
      description: 'Target your lower body with this powerful leg press machine.',
      image: 'https://images.unsplash.com/photo-1434682772747-f16d3ea162c3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8TGVnJTIwUHJlc3N8ZW58MHx8MHx8fDA%3D',
      muscles: ['Quadriceps', 'Hamstrings', 'Glutes'],
    },
    {
      name: 'Elliptical Trainers',
      description: 'Low-impact cardio machines for full-body workouts.',
      image: 'https://plus.unsplash.com/premium_photo-1726731185530-32e7d4f6656a?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8RWxsaXB0aWNhbCUyMFRyYWluZXJzfGVufDB8fDB8fHww',
      muscles: ['Legs', 'Arms', 'Core', 'Cardiovascular system'],
    },
    {
      name: 'Cable Machines',
      description: 'Versatile machines for a wide range of exercises and muscle groups.',
      image: 'https://images.unsplash.com/photo-1507398941214-572c25f4b1dc?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fENhYmxlJTIwbWFjaGluZSUyMGd5bXxlbnwwfHwwfHx8MA%3D%3D',
      muscles: ['Chest', 'Back', 'Arms', 'Shoulders'],
    },
    {
      name: 'Smith Machine',
      description: 'Guided barbell system for safe and effective strength training.',
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
      muscles: ['Chest', 'Legs', 'Shoulders'],
    },
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1540497077202-7c8a3999166f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80')`,
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
            Our Equipment
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            State-of-the-art fitness machines for your workout needs
          </motion.p>
        </div>
      </section>

      {/* Equipment Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {equipmentList.map((equipment, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden cursor-pointer"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setSelectedEquipment(equipment)}
              >
                <img
                  src={equipment.image}
                  alt={equipment.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{equipment.name}</h3>
                  <p className="text-gray-600 mb-4">{equipment.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Muscles Worked:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {equipment.muscles.map((muscle, idx) => (
                        <li key={idx}>{muscle}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Details Modal */}
      {selectedEquipment && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg max-w-2xl w-full">
            <h2 className="text-3xl font-bold mb-4">{selectedEquipment.name}</h2>
            <img
              src={selectedEquipment.image}
              alt={selectedEquipment.name}
              className="w-full h-64 object-cover rounded-lg mb-4"
            />
            <p className="text-gray-600 mb-4">{selectedEquipment.description}</p>
            <div>
              <h4 className="font-semibold mb-2">Muscles Worked:</h4>
              <ul className="list-disc list-inside text-gray-600 mb-4">
                {selectedEquipment.muscles.map((muscle, idx) => (
                  <li key={idx}>{muscle}</li>
                ))}
              </ul>
            </div>
            <button
              className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 transition-colors"
              onClick={() => setSelectedEquipment(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Experience Our Top-Notch Equipment
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Visit HSSM Gym today and try out our state-of-the-art fitness equipment!
          </motion.p>
          <motion.button
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Schedule a Tour
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Equipment;
