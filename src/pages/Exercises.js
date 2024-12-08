import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Exercises = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const exerciseList = [
    {
      name: 'Bench Press',
      category: 'Strength',
      description: 'A classic chest exercise that also works the shoulders and triceps.',
      muscles: ['Chest', 'Shoulders', 'Triceps'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Squats',
      category: 'Strength',
      description: 'A compound lower body exercise that targets multiple muscle groups.',
      muscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Core'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Deadlifts',
      category: 'Strength',
      description: 'A powerful full-body exercise that builds overall strength and muscle.',
      muscles: ['Back', 'Glutes', 'Hamstrings', 'Core'],
      image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Pull-ups',
      category: 'Strength',
      description: 'An upper body exercise that primarily targets the back and biceps.',
      muscles: ['Back', 'Biceps', 'Shoulders'],
      image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Plank',
      category: 'Core',
      description: 'A static exercise that strengthens the core, back, and shoulders.',
      muscles: ['Core', 'Back', 'Shoulders'],
      image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Burpees',
      category: 'Cardio',
      description: 'A full-body exercise that combines strength training and aerobic exercise.',
      muscles: ['Full Body'],
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    },
    {
      name: 'Lunges',
      category: 'Strength',
      description: 'A unilateral lower body exercise that improves balance and leg strength.',
      muscles: ['Quadriceps', 'Hamstrings', 'Glutes', 'Calves'],
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Shoulder Press',
      category: 'Strength',
      description: 'An upper body exercise that targets the shoulders and triceps.',
      muscles: ['Shoulders', 'Triceps'],
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    },
    {
      name: 'Bicep Curls',
      category: 'Strength',
      description: 'An isolation exercise that targets the biceps muscles.',
      muscles: ['Biceps'],
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Tricep Dips',
      category: 'Strength',
      description: 'An exercise that targets the triceps and chest muscles.',
      muscles: ['Triceps', 'Chest'],
      image: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Leg Press',
      category: 'Strength',
      description: 'A machine-based lower body exercise that targets the quadriceps, hamstrings, and glutes.',
      muscles: ['Quadriceps', 'Hamstrings', 'Glutes'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Russian Twists',
      category: 'Core',
      description: 'A seated core exercise that targets the obliques and improves rotational strength.',
      muscles: ['Obliques', 'Core'],
      image: 'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    },
    {
      name: 'Mountain Climbers',
      category: 'Cardio',
      description: 'A dynamic exercise that combines core strength and cardiovascular endurance.',
      muscles: ['Core', 'Shoulders', 'Legs'],
      image: 'https://images.unsplash.com/photo-1434608519344-49d77a699e1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Lat Pulldowns',
      category: 'Strength',
      description: 'A machine-based upper body exercise that targets the latissimus dorsi muscles.',
      muscles: ['Back', 'Biceps'],
      image: 'https://images.unsplash.com/photo-1605296867424-35fc25c9212a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Crunches',
      category: 'Core',
      description: 'A classic abdominal exercise that targets the rectus abdominis muscles.',
      muscles: ['Abs'],
      image: 'https://images.unsplash.com/photo-1566241142559-40e1dab266c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Jump Rope',
      category: 'Cardio',
      description: 'A high-intensity cardiovascular exercise that improves coordination and endurance.',
      muscles: ['Legs', 'Shoulders', 'Core'],
      image: 'https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80',
    },
    {
      name: 'Dumbbell Rows',
      category: 'Strength',
      description: 'A unilateral upper body exercise that targets the back and biceps.',
      muscles: ['Back', 'Biceps'],
      image: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Leg Curls',
      category: 'Strength',
      description: 'A machine-based exercise that isolates and targets the hamstring muscles.',
      muscles: ['Hamstrings'],
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
    {
      name: 'Push-ups',
      category: 'Strength',
      description: 'A bodyweight exercise that targets the chest, shoulders, and triceps.',
      muscles: ['Chest', 'Shoulders', 'Triceps'],
      image: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
    },
  ];

  const categories = ['All', ...new Set(exerciseList.map(exercise => exercise.category))];

  const filteredExercises = selectedCategory === 'All'
    ? exerciseList
    : exerciseList.filter(exercise => exercise.category === selectedCategory);

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
            Exercise Library
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover a wide range of exercises to enhance your workout
          </motion.p>
        </div>
      </section>

      {/* Exercise Categories */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white'
                    : 'bg-white text-gray-800 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Exercise List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExercises.map((exercise, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-lg shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <img
                  src={exercise.image}
                  alt={exercise.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{exercise.name}</h3>
                  <p className="text-gray-600 mb-4">{exercise.description}</p>
                  <div>
                    <h4 className="font-semibold mb-2">Muscles Worked:</h4>
                    <ul className="list-disc list-inside text-gray-600">
                      {exercise.muscles.map((muscle, idx) => (
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

      {/* CTA Section */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <motion.h2
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Ready to Start Your Fitness Journey?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Join HSSM Gym today and get personalized workout plans!
          </motion.p>
          <motion.button
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Join Now
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Exercises;
