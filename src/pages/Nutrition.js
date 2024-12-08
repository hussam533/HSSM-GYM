import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Nutrition = () => {
  const [activeTab, setActiveTab] = useState('diet');

  const nutritionInfo = {
    diet: {
      title: 'Importance of a Balanced Diet',
      content: 'A balanced diet is crucial for overall health and fitness. It provides your body with the necessary nutrients, vitamins, and minerals to function optimally. Eating a variety of foods from all food groups ensures that you get a wide range of nutrients to support your workout goals and general well-being.',
      tips: [
        'Include a variety of fruits and vegetables in your diet',
        'Choose whole grains over refined grains',
        'Incorporate lean proteins like chicken, fish, and legumes',
        'Don t forget healthy fats from sources like avocados, nuts, and olive oil',
        'Stay hydrated by drinking plenty of water throughout the day',
      ],
    },
    massGain: {
      title: 'Mass Gaining Diet',
      content: 'To gain muscle mass, you need to consume more calories than you burn while following a structured strength training program. Focus on nutrient-dense foods that provide quality proteins, complex carbohydrates, and healthy fats.',
      recipe: {
        name: 'High-Protein Smoothie Bowl',
        ingredients: [
          '1 scoop whey protein powder',
          '1 banana',
          '1 cup Greek yogurt',
          '1/4 cup oats',
          '1 tbsp peanut butter',
          'Toppings: berries, nuts, and seeds',
        ],
        instructions: 'Blend all ingredients except toppings until smooth. Pour into a bowl and add toppings.',
      },
    },
    weightLoss: {
      title: 'Weight Loss Diet',
      content: 'For weight loss, create a calorie deficit by consuming fewer calories than you burn. Focus on nutrient-dense, low-calorie foods that keep you feeling full and satisfied while supporting your workout routine.',
      recipe: {
        name: 'Grilled Chicken Salad',
        ingredients: [
          '4 oz grilled chicken breast',
          '2 cups mixed greens',
          '1/4 cup cherry tomatoes',
          '1/4 cucumber, sliced',
          '1/4 avocado, diced',
          '1 tbsp balsamic vinaigrette',
        ],
        instructions: 'Combine all ingredients in a bowl and toss with the vinaigrette.',
      },
    },
  };

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center z-0"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1490645935967-10de6ba17061?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1453&q=80')`,
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
            Nutrition
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Fuel your body for optimal performance
          </motion.p>
        </div>
      </section>

      {/* Nutrition Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          {/* Tabs */}
          <div className="flex justify-center mb-8">
            {['diet', 'massGain', 'weightLoss'].map((tab, index) => (
              <motion.button
                key={index}
                className={`px-4 py-2 mx-2 rounded-full ${
                  activeTab === tab
                    ? 'bg-red-600 text-white'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
                onClick={() => setActiveTab(tab)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                {tab === 'diet' ? 'Balanced Diet' : tab === 'massGain' ? 'Mass Gain' : 'Weight Loss'}
              </motion.button>
            ))}
          </div>

          {/* Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-4">{nutritionInfo[activeTab].title}</h2>
            <p className="text-gray-700 mb-6">{nutritionInfo[activeTab].content}</p>

            {activeTab === 'diet' && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Nutrition Tips:</h3>
                <ul className="list-disc list-inside text-gray-700">
                  {nutritionInfo.diet.tips.map((tip, index) => (
                    <li key={index} className="mb-2">{tip}</li>
                  ))}
                </ul>
              </div>
            )}

            {(activeTab === 'massGain' || activeTab === 'weightLoss') && (
              <div>
                <h3 className="text-xl font-semibold mb-4">Recipe: {nutritionInfo[activeTab].recipe.name}</h3>
                <div className="bg-gray-100 p-6 rounded-lg">
                  <h4 className="font-semibold mb-2">Ingredients:</h4>
                  <ul className="list-disc list-inside text-gray-700 mb-4">
                    {nutritionInfo[activeTab].recipe.ingredients.map((ingredient, index) => (
                      <li key={index}>{ingredient}</li>
                    ))}
                  </ul>
                  <h4 className="font-semibold mb-2">Instructions:</h4>
                  <p className="text-gray-700">{nutritionInfo[activeTab].recipe.instructions}</p>
                </div>
              </div>
            )}
          </motion.div>
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
            Need Personalized Nutrition Advice?
          </motion.h2>
          <motion.p
            className="text-xl mb-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Consult with our nutrition experts to create a diet plan tailored to your goals!
          </motion.p>
          <motion.button
            className="bg-red-600 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Schedule a Consultation
          </motion.button>
        </div>
      </section>
    </div>
  );
};

export default Nutrition;
