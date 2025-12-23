import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Menu() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const coffeeMenu = [
    { name: 'Espresso', description: 'Rich, bold shot of pure coffee perfection', price: '$3.50', icon: '☕', popular: false },
    { name: 'Cappuccino', description: 'Velvety foam over espresso, a classic comfort', price: '$4.50', icon: '☕', popular: true },
    { name: 'Latte', description: 'Smooth espresso with steamed milk artistry', price: '$5.00', icon: '🥛', popular: true },
    { name: 'Cold Brew', description: 'Slow-steeped, smooth and refreshing', price: '$4.75', icon: '🧊', popular: false },
    { name: 'Mocha', description: 'Chocolate indulgence meets espresso bliss', price: '$5.50', icon: '🍫', popular: false },
    { name: 'Flat White', description: 'Microfoam perfection from down under', price: '$5.25', icon: '☕', popular: true },
  ];

  const pastries = [
    { name: 'Croissant', description: 'Buttery, flaky layers of French perfection', price: '$4.00', icon: '🥐' },
    { name: 'Blueberry Muffin', description: 'Bursting with fresh berries', price: '$3.50', icon: '🧁' },
    { name: 'Cinnamon Roll', description: 'Warm, gooey, impossibly delicious', price: '$4.50', icon: '🍩' },
    { name: 'Almond Tart', description: 'Delicate pastry with rich almond cream', price: '$5.00', icon: '🥧' },
  ];

  return (
    <section id="menu" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-coffee-50 via-cream-100 to-coffee-50 relative overflow-hidden paper-texture">
      <motion.div 
        ref={ref}
        className="section-container relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : { opacity: 0 }}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full glass text-coffee-700 font-semibold text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Offerings
          </motion.span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-bold text-coffee-900 mb-4 sm:mb-6 px-4">
            Handcrafted <span className="font-script text-coffee-700 text-4xl xs:text-5xl sm:text-6xl md:text-7xl">Delights</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-coffee-700 max-w-3xl mx-auto px-4">
            Every item crafted with care, using premium ingredients and time-honored techniques.
          </p>
        </motion.div>

        {/* Coffee Menu */}
        <div className="mb-12 sm:mb-16">
          <motion.h3 
            className="text-2xl sm:text-3xl font-display font-bold text-coffee-900 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.3 }}
          >
            Signature Coffees
          </motion.h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {coffeeMenu.map((item, index) => (
              <motion.div
                key={index}
                className="menu-card group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 * index, duration: 0.5 }}
                whileHover={{ y: -8 }}
              >
                {item.popular && (
                  <motion.div 
                    className="absolute top-4 right-4 px-3 py-1 bg-coffee-700 text-white text-xs font-bold rounded-full"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, type: "spring" }}
                  >
                    POPULAR
                  </motion.div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <motion.div 
                    className="text-4xl sm:text-5xl"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-xl sm:text-2xl font-display font-bold text-coffee-800">
                    {item.price}
                  </div>
                </div>
                <h4 className="text-lg sm:text-xl md:text-2xl font-display font-bold text-coffee-900 mb-2">
                  {item.name}
                </h4>
                <p className="text-sm sm:text-base text-coffee-600 leading-relaxed mb-4">
                  {item.description}
                </p>
                <motion.button 
                  className="text-sm sm:text-base text-coffee-700 font-semibold hover:text-coffee-900 transition-colors flex items-center group/btn"
                  whileHover={{ x: 5 }}
                >
                  Order Now
                  <motion.svg 
                    className="ml-2 w-4 h-4" 
                    fill="none" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path d="M9 5l7 7-7 7" />
                  </motion.svg>
                </motion.button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Pastries */}
        <div>
          <motion.h3 
            className="text-2xl sm:text-3xl font-display font-bold text-coffee-900 mb-6 sm:mb-8 text-center"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Fresh Baked Pastries
          </motion.h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {pastries.map((item, index) => (
              <motion.div
                key={index}
                className="menu-card group"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="flex flex-col xs:flex-row lg:flex-col items-start justify-between mb-3 sm:mb-4">
                  <motion.div 
                    className="text-4xl sm:text-5xl mb-2 xs:mb-0 lg:mb-2"
                    whileHover={{ scale: 1.2, rotate: -10 }}
                  >
                    {item.icon}
                  </motion.div>
                  <div className="text-lg xs:text-xl sm:text-2xl font-display font-bold text-coffee-800">
                    {item.price}
                  </div>
                </div>
                <h4 className="text-base sm:text-lg md:text-xl font-display font-bold text-coffee-900 mb-2">
                  {item.name}
                </h4>
                <p className="text-xs sm:text-sm text-coffee-600 leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <motion.div 
          className="mt-12 sm:mt-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="inline-block bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-2xl border-2 border-coffee-100"
            whileHover={{ scale: 1.02, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
          >
            <p className="text-base sm:text-lg md:text-xl text-coffee-700 mb-4 sm:mb-6 max-w-2xl px-2">
              Can't decide? Try our <span className="font-display font-bold text-coffee-900">Chef's Special</span> - 
              a rotating selection of seasonal drinks and treats.
            </p>
            <motion.button 
              className="btn-primary"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View Full Menu
              <motion.svg 
                className="ml-2 w-5 h-5" 
                fill="none" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path d="M9 5l7 7-7 7" />
              </motion.svg>
            </motion.button>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
