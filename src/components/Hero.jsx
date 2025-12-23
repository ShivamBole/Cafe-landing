import { motion } from 'framer-motion';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-cream-100 via-cream-200 to-coffee-100 paper-texture">
      {/* Animated background gradient orbs */}
      <motion.div 
        className="absolute inset-0 opacity-20"
        animate={{
          background: [
            'radial-gradient(circle at 20% 50%, rgba(151, 118, 105, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 80% 50%, rgba(151, 118, 105, 0.3) 0%, transparent 50%)',
            'radial-gradient(circle at 20% 50%, rgba(151, 118, 105, 0.3) 0%, transparent 50%)',
          ]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Floating coffee beans */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute opacity-5"
          initial={{ 
            x: Math.random() * window.innerWidth, 
            y: Math.random() * window.innerHeight,
            rotate: 0 
          }}
          animate={{ 
            y: [null, Math.random() * 100 - 50],
            rotate: 360
          }}
          transition={{ 
            duration: 20 + Math.random() * 10, 
            repeat: Infinity,
            ease: "linear",
            delay: i * 2
          }}
        >
          <svg className="w-16 h-16 sm:w-24 sm:h-24 md:w-32 md:h-32" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
          </svg>
        </motion.div>
      ))}

      <motion.div 
        className="relative z-10 section-container text-center pt-20 sm:pt-24 md:pt-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Badge */}
        <motion.div 
          variants={itemVariants}
          className="inline-flex items-center gap-2 px-4 py-2 sm:px-6 sm:py-3 rounded-full glass shadow-lg mb-6 sm:mb-8"
          whileHover={{ scale: 1.05 }}
        >
          <motion.span 
            className="w-2 h-2 bg-coffee-500 rounded-full"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
          <span className="text-xs sm:text-sm font-medium text-coffee-700">Handcrafted Since 2020</span>
        </motion.div>

        {/* Main Heading */}
        <motion.h1 
          variants={itemVariants}
          className="text-4xl xs:text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-display font-bold text-coffee-900 mb-4 sm:mb-6 px-2"
        >
          <motion.span
            animate={{ opacity: [1, 0.8, 1] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            Where Every Cup
          </motion.span>
          <br />
          <motion.span 
            className="font-script text-coffee-700 text-5xl xs:text-6xl sm:text-7xl md:text-8xl lg:text-9xl"
            animate={{ 
              backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'],
            }}
            transition={{ duration: 5, repeat: Infinity }}
            style={{
              backgroundImage: 'linear-gradient(90deg, #977669, #d2bab0, #977669)',
              backgroundSize: '200% auto',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            Tells a Story
          </motion.span>
        </motion.h1>

        {/* Subheading */}
        <motion.p 
          variants={itemVariants}
          className="text-base xs:text-lg sm:text-xl md:text-2xl text-coffee-700 mb-8 sm:mb-12 max-w-3xl mx-auto leading-relaxed px-4"
        >
          Experience the perfect blend of artisan coffee, handcrafted pastries, 
          and a warm atmosphere that feels like home.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div 
          variants={itemVariants}
          className="flex flex-col xs:flex-row items-center justify-center gap-3 sm:gap-4 mb-12 sm:mb-16 px-4"
        >
          <motion.button 
            onClick={() => document.getElementById('menu')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary w-full xs:w-auto"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            Explore Menu
            <motion.svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth="2" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
              animate={{ y: [0, 3, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </motion.svg>
          </motion.button>
          <motion.button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-outline w-full xs:w-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Find Us
          </motion.button>
        </motion.div>

        {/* Coffee cup with steam */}
        <motion.div 
          variants={itemVariants}
          className="relative inline-block mb-12 sm:mb-16"
        >
          <motion.div 
            className="relative"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <motion.svg 
              className="w-48 h-48 sm:w-56 sm:h-56 md:w-64 md:h-64 mx-auto text-coffee-700 drop-shadow-2xl" 
              viewBox="0 0 24 24" 
              fill="currentColor"
              animate={{ rotate: [0, -3, 3, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <path d="M2,21H20V19H2M20,8H18V5H20M20,3H4V13A4,4 0 0,0 8,17H14A4,4 0 0,0 18,13V10H20A2,2 0 0,0 22,8V5C22,3.89 21.1,3 20,3Z" />
            </motion.svg>
            {/* Steam effect */}
            <div className="absolute -top-6 sm:-top-10 left-1/2 transform -translate-x-1/2 w-full h-16 sm:h-20">
              {[0, 1, 2].map((i) => (
                <motion.div
                  key={i}
                  className="steam"
                  animate={{
                    opacity: [0.8, 0],
                    y: [0, -80],
                    scale: [1, 1.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    delay: i * 1.3,
                    ease: "easeOut"
                  }}
                />
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Features */}
        <motion.div 
          variants={itemVariants}
          className="grid grid-cols-3 gap-4 xs:gap-6 sm:gap-8 max-w-3xl mx-auto px-4"
        >
          {[
            { value: '100%', label: 'Organic Beans' },
            { value: 'Fresh', label: 'Daily Pastries' },
            { value: 'Cozy', label: 'Atmosphere' }
          ].map((feature, index) => (
            <motion.div
              key={index}
              className="text-center"
              whileHover={{ scale: 1.1, y: -5 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + index * 0.1 }}
            >
              <motion.div 
                className="text-2xl xs:text-3xl sm:text-4xl font-display font-bold text-coffee-800 mb-1 sm:mb-2"
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: index * 0.3 }}
              >
                {feature.value}
              </motion.div>
              <div className="text-xs xs:text-sm text-coffee-600">{feature.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <svg className="w-5 h-5 sm:w-6 sm:h-6 text-coffee-600" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
}
