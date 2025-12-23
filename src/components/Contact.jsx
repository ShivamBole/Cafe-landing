import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-16 sm:py-20 md:py-24 bg-gradient-to-br from-coffee-800 via-coffee-900 to-coffee-800 text-cream-50 relative overflow-hidden">
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
            className="inline-block px-4 py-2 rounded-full glass text-cream-100 font-semibold text-sm mb-4"
            whileHover={{ scale: 1.05 }}
          >
            Visit Us
          </motion.span>
          <h2 className="text-3xl xs:text-4xl sm:text-5xl md:text-6xl font-display font-bold text-cream-50 mb-4 sm:mb-6 px-4">
            We'd <span className="font-script text-4xl xs:text-5xl sm:text-6xl md:text-7xl">Love</span> to See You
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-cream-200 max-w-3xl mx-auto px-4">
            Stop by for a cup, stay for the atmosphere. We're open daily with fresh pastries.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 sm:gap-12 mb-12 sm:mb-16">
          {/* Location & Hours */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.3 }}
          >
            <motion.div 
              className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 mb-4 sm:mb-6"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee-700 flex items-center justify-center mr-4 flex-shrink-0"
                  whileHover={{ scale: 1.1, rotate: 360 }}
                  transition={{ type: "spring" }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cream-100" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </motion.div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-cream-50 mb-2">Location</h3>
                  <p className="text-sm sm:text-base text-cream-200 leading-relaxed">123 Artisan Avenue<br/>Downtown District<br/>San Francisco, CA 94102</p>
                  <motion.button 
                    className="mt-3 sm:mt-4 text-sm sm:text-base text-cream-100 hover:text-white font-semibold flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    Get Directions
                    <svg className="ml-2 w-4 h-4" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor"><path d="M9 5l7 7-7 7"/></svg>
                  </motion.button>
                </div>
              </div>
            </motion.div>

            <motion.div 
              className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              whileHover={{ scale: 1.02, backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <div className="flex items-start">
                <motion.div 
                  className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-coffee-700 flex items-center justify-center mr-4 flex-shrink-0"
                  animate={{ rotate: [0, 360] }}
                  transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                >
                  <svg className="w-5 h-5 sm:w-6 sm:h-6 text-cream-100" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                    <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </motion.div>
                <div className="flex-1">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-cream-50 mb-3 sm:mb-4">Hours</h3>
                  <div className="space-y-2 text-sm sm:text-base">
                    {[['Monday - Friday', '7:00 AM - 8:00 PM'], ['Saturday', '8:00 AM - 9:00 PM'], ['Sunday', '8:00 AM - 7:00 PM']].map(([day, hours], i) => (
                      <motion.div 
                        key={i} 
                        className="flex justify-between"
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.5 + i * 0.1 }}
                      >
                        <span className="text-cream-200">{day}</span>
                        <span className="text-cream-100 font-semibold">{hours}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ delay: 0.5 }}
          >
            <motion.div 
              className="glass rounded-2xl sm:rounded-3xl p-6 sm:p-8"
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.15)' }}
            >
              <h3 className="text-xl sm:text-2xl font-display font-bold text-cream-50 mb-4 sm:mb-6">Send us a Message</h3>
              <form className="space-y-4">
                {['Name', 'Email'].map((field, i) => (
                  <motion.div 
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + i * 0.1 }}
                  >
                    <label className="block text-sm sm:text-base text-cream-200 mb-2 font-medium">{field}</label>
                    <motion.input 
                      type={field === 'Email' ? 'email' : 'text'}
                      className="w-full px-4 py-3 rounded-xl glass text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-cream-100 transition-all text-sm sm:text-base"
                      placeholder={field === 'Email' ? 'your@email.com' : 'Your name'}
                      whileFocus={{ scale: 1.02 }}
                    />
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.8 }}
                >
                  <label className="block text-sm sm:text-base text-cream-200 mb-2 font-medium">Message</label>
                  <motion.textarea 
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl glass text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-cream-100 transition-all resize-none text-sm sm:text-base"
                    placeholder="How can we help you?"
                    whileFocus={{ scale: 1.02 }}
                  />
                </motion.div>
                <motion.button 
                  type="submit"
                  className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-cream-100 text-coffee-900 font-semibold rounded-full hover:bg-white transition-all duration-300 text-sm sm:text-base"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                </motion.button>
              </form>
            </motion.div>
          </motion.div>
        </div>

        {/* Contact Info */}
        <motion.div 
          className="grid sm:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1 }}
        >
          {[
            { icon: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z', title: 'Phone', value: '(415) 555-CAFE' },
            { icon: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z', title: 'Email', value: 'hello@cafelumiere.com' },
            { icon: 'M12 2C6.477 2 2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.879V14.89h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.989C18.343 21.129 22 16.99 22 12c0-5.523-4.477-10-10-10z', title: 'Social', value: '@cafelumiere', fill: true }
          ].map((item, i) => (
            <motion.div 
              key={i} 
              className="text-center"
              whileHover={{ y: -5 }}
            >
              <motion.div 
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-full glass flex items-center justify-center mx-auto mb-3 sm:mb-4"
                whileHover={{ scale: 1.1, rotate: 360 }}
                transition={{ type: "spring" }}
              >
                <svg className="w-6 h-6 sm:w-8 sm:h-8 text-cream-100" fill={item.fill ? 'currentColor' : 'none'} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                  <path d={item.icon}/>
                </svg>
              </motion.div>
              <h4 className="font-display font-bold text-cream-50 mb-1 sm:mb-2 text-sm sm:text-base">{item.title}</h4>
              <p className="text-xs sm:text-sm text-cream-200">{item.value}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ delay: 1.2 }}
        >
          <motion.div 
            className="inline-block glass rounded-2xl sm:rounded-3xl p-6 sm:p-8 max-w-2xl w-full"
            whileHover={{ scale: 1.02 }}
          >
            <h3 className="text-xl sm:text-2xl font-display font-bold text-cream-50 mb-2 sm:mb-3">Stay Connected</h3>
            <p className="text-sm sm:text-base text-cream-200 mb-4 sm:mb-6">Join our newsletter for exclusive offers and community events.</p>
            <div className="flex flex-col xs:flex-row gap-2">
              <input 
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 sm:px-6 py-3 rounded-full glass text-cream-50 placeholder-cream-300 focus:outline-none focus:ring-2 focus:ring-cream-100 text-sm sm:text-base"
              />
              <motion.button 
                className="px-6 sm:px-8 py-3 bg-cream-100 text-coffee-900 font-semibold rounded-full hover:bg-white transition-colors text-sm sm:text-base whitespace-nowrap"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
