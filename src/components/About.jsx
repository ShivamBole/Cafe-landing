import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="about" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <motion.div 
        className="absolute top-0 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-cream-200 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], x: [0, 50, 0] }}
        transition={{ duration: 20, repeat: Infinity }}
      />
      <motion.div 
        className="absolute bottom-0 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-coffee-100 rounded-full blur-3xl opacity-30"
        animate={{ scale: [1, 1.2, 1], x: [0, -50, 0] }}
        transition={{ duration: 20, repeat: Infinity, delay: 5 }}
      />

      <motion.div 
        ref={ref}
        className="section-container relative z-10"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.div variants={itemVariants} className="text-center mb-12 sm:mb-16">
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-coffee-50 text-coffee-700 font-semibold text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Story
          </motion.span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-bold text-coffee-900 mb-4 sm:mb-6 px-4">
            Crafted with <span className="font-script text-coffee-700 text-4xl xs:text-5xl sm:text-6xl md:text-7xl">Passion</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-coffee-600 max-w-3xl mx-auto leading-relaxed px-4">
            Every cup we serve is a celebration of tradition, quality, and the art of coffee making. 
            From bean selection to the final pour, we pour our heart into every detail.
          </p>
        </motion.div>

        {/* Story Cards */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 gap-6 sm:gap-8 mb-16 sm:mb-20"
        >
          {/* Origin Story */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-gradient-to-br from-cream-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-coffee-100 overflow-hidden group"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coffee-500 via-coffee-700 to-coffee-500 rounded-t-3xl"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity }}
              style={{ backgroundSize: '200% auto' }}
            />
            <motion.div 
              className="text-5xl sm:text-6xl mb-4 sm:mb-6"
              animate={{ rotate: [0, 10, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
            >
              ☕
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-coffee-900 mb-3 sm:mb-4">Our Beginning</h3>
            <p className="text-sm sm:text-base text-coffee-700 leading-relaxed mb-4 sm:mb-6">
              Founded in 2020 with a simple dream: to create a space where people could slow down, 
              connect, and enjoy exceptional coffee. What started as a small corner café has blossomed 
              into a beloved community gathering place.
            </p>
            <p className="text-sm sm:text-base text-coffee-700 leading-relaxed">
              We source our beans directly from sustainable farms, ensuring every cup supports ethical 
              practices and delivers unparalleled flavor.
            </p>
          </motion.div>

          {/* Philosophy */}
          <motion.div 
            variants={itemVariants}
            className="relative bg-gradient-to-br from-cream-50 to-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-10 shadow-xl border border-coffee-100 overflow-hidden group"
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.div 
              className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-coffee-500 via-coffee-700 to-coffee-500 rounded-t-3xl"
              animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
              transition={{ duration: 3, repeat: Infinity, delay: 1 }}
              style={{ backgroundSize: '200% auto' }}
            />
            <motion.div 
              className="text-5xl sm:text-6xl mb-4 sm:mb-6"
              animate={{ rotate: [0, -10, 10, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1 }}
            >
              🌿
            </motion.div>
            <h3 className="text-2xl sm:text-3xl font-display font-bold text-coffee-900 mb-3 sm:mb-4">Our Philosophy</h3>
            <p className="text-sm sm:text-base text-coffee-700 leading-relaxed mb-4 sm:mb-6">
              We believe coffee is more than just a beverage—it's an experience, a ritual, a moment 
              of peace in a busy world. Every element of our café is designed to create warmth and comfort.
            </p>
            <p className="text-sm sm:text-base text-coffee-700 leading-relaxed">
              From our carefully curated playlist to our handpicked furniture, every detail is 
              intentional, creating an atmosphere where memories are made and friendships flourish.
            </p>
          </motion.div>
        </motion.div>

        {/* Values */}
        <motion.div 
          variants={containerVariants}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6"
        >
          {[
            { icon: '🌱', title: 'Sustainable', desc: 'Eco-friendly practices' },
            { icon: '🤝', title: 'Community', desc: 'Built together' },
            { icon: '✨', title: 'Quality', desc: 'Never compromised' },
            { icon: '❤️', title: 'Passion', desc: 'In every cup' }
          ].map((value, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-4 sm:p-6 md:p-8 bg-cream-50 rounded-xl sm:rounded-2xl border-2 border-coffee-100 hover:border-coffee-300 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="text-4xl sm:text-5xl mb-2 sm:mb-4"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.2 }}
              >
                {value.icon}
              </motion.div>
              <h4 className="font-display font-bold text-coffee-900 mb-1 sm:mb-2 text-base sm:text-lg">{value.title}</h4>
              <p className="text-xs sm:text-sm text-coffee-600">{value.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </section>
  );
}
