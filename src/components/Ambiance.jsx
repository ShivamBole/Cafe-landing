import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Ambiance() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    { title: 'Cozy Seating', description: 'Comfortable chairs, plush cushions, and intimate nooks perfect for reading.', icon: '🛋️' },
    { title: 'Natural Light', description: 'Large windows flooding our space with warm, natural sunlight.', icon: '☀️' },
    { title: 'Curated Playlist', description: 'Carefully selected music that creates the perfect backdrop.', icon: '🎵' },
    { title: 'Free WiFi', description: 'High-speed internet for remote workers and students.', icon: '📶' },
    { title: 'Indoor Plants', description: 'Lush greenery creating a calming environment.', icon: '🌿' },
    { title: 'Warm Lighting', description: 'Soft, ambient lighting that makes everyone feel their best.', icon: '💡' },
  ];

  const gallery = [
    { title: 'Main Seating Area', desc: 'Spacious & Inviting', icon: '☕', span: 'md:col-span-2 md:row-span-2' },
    { title: 'Reading Nook', desc: 'Quiet corner bliss', icon: '📚' },
    { title: 'Green Space', desc: 'Nature indoors', icon: '🪴' },
    { title: 'Work Space', desc: 'Productivity hub', icon: '💼' },
    { title: 'Art Wall', desc: 'Local artists', icon: '🎨' },
  ];

  return (
    <section id="ambiance" className="py-16 sm:py-20 md:py-24 bg-white relative overflow-hidden">
      <motion.div 
        ref={ref}
        className="section-container relative z-10"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-coffee-50 text-coffee-700 font-semibold text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Our Space
          </motion.span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-bold text-coffee-900 mb-4 sm:mb-6 px-4">
            An Atmosphere That <span className="font-script text-coffee-700 text-4xl xs:text-5xl sm:text-6xl md:text-7xl">Embraces</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-coffee-700 max-w-3xl mx-auto leading-relaxed px-4">
            Step into a world where every detail is designed for comfort, creativity, and connection.
          </p>
        </motion.div>

        {/* Photo Gallery Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-6 mb-12 sm:mb-16">
          {gallery.map((item, index) => (
            <motion.div
              key={index}
              className={`relative group overflow-hidden rounded-xl sm:rounded-2xl md:rounded-3xl shadow-xl ${item.span || ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className={`${item.span ? 'aspect-[4/3]' : 'aspect-square'} bg-gradient-to-br from-coffee-200 via-cream-200 to-coffee-300 flex items-center justify-center`}>
                <div className="text-center p-4">
                  <motion.div 
                    className="text-5xl sm:text-6xl md:text-8xl mb-2 sm:mb-4 opacity-40"
                    animate={{ rotate: [0, 5, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, delay: index * 0.5 }}
                  >
                    {item.icon}
                  </motion.div>
                  <p className="text-base sm:text-lg md:text-2xl font-display font-bold text-coffee-800 opacity-60">{item.title}</p>
                </div>
              </div>
              <motion.div 
                className="absolute inset-0 bg-gradient-to-t from-coffee-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4 sm:p-6 md:p-8"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                <div className="text-white">
                  <h3 className="text-lg sm:text-xl md:text-2xl font-display font-bold mb-1 sm:mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-cream-100">{item.desc}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Features Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="relative bg-gradient-to-br from-cream-50 to-white p-6 sm:p-8 rounded-xl sm:rounded-2xl shadow-lg border border-coffee-100 group"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.6 + index * 0.1 }}
              whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)" }}
            >
              <motion.div 
                className="text-4xl sm:text-5xl mb-3 sm:mb-4"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-lg sm:text-xl font-display font-bold text-coffee-900 mb-2 sm:mb-3">
                {feature.title}
              </h3>
              <p className="text-sm sm:text-base text-coffee-700 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Quote */}
        <motion.div 
          className="mt-16 sm:mt-20 text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <div className="relative inline-block max-w-4xl px-8 sm:px-12 md:px-16">
            <svg className="absolute -top-4 -left-2 sm:-top-6 sm:-left-6 w-8 h-8 sm:w-12 sm:h-12 text-coffee-200" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/>
            </svg>
            <blockquote className="text-xl sm:text-2xl md:text-3xl font-display italic text-coffee-800 px-4">
              A place where time slows down, conversations flow freely, 
              and every visit feels like coming home.
            </blockquote>
            <svg className="absolute -bottom-4 -right-2 sm:-bottom-6 sm:-right-6 w-8 h-8 sm:w-12 sm:h-12 text-coffee-200 transform rotate-180" fill="currentColor" viewBox="0 0 24 24">
              <path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L9.758 4.03c0 0-.218.052-.597.144C8.97 4.222 8.737 4.278 8.472 4.345c-.271.05-.56.187-.882.312C7.272 4.799 6.904 4.895 6.562 5.123c-.344.218-.741.4-1.091.692C5.132 6.116 4.723 6.377 4.421 6.76c-.33.358-.656.734-.909 1.162C3.219 8.33 3.02 8.778 2.81 9.221c-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C2.535 17.474 4.338 19 6.5 19c2.485 0 4.5-2.015 4.5-4.5S8.985 10 6.5 10zM17.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35.208-.086.39-.16.539-.222.302-.125.474-.197.474-.197L20.758 4.03c0 0-.218.052-.597.144-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539.017.109.025.168.025.168l.026-.006C13.535 17.474 15.338 19 17.5 19c2.485 0 4.5-2.015 4.5-4.5S19.985 10 17.5 10z"/>
            </svg>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
