import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import MenuSection from '../components/MenuSection';
import SpiceEducation from '../components/SpiceEducation';
import ReservationSection from '../components/ReservationSection';
import Testimonials from '../components/Testimonials';
import BlogSection from '../components/BlogSection';

export default function HomePage() {
  const location = useLocation();

  useEffect(() => {
    // Handle hash scrolling on navigation or hash change
    const hash = location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location.hash]);

  useEffect(() => {
    // Smooth scroll behavior for links
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.currentTarget as HTMLAnchorElement;
      const href = target.getAttribute('href');
      if (href?.startsWith('#')) {
        e.preventDefault();
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }
    };

    const anchors = document.querySelectorAll('a[href^="#"]');
    anchors.forEach(anchor => anchor.addEventListener('click', handleAnchorClick as any));
    
    return () => {
      anchors.forEach(anchor => anchor.removeEventListener('click', handleAnchorClick as any));
    };
  }, []);

  return (
    <main>
      <Hero />
      
      {/* Featured Highlights */}
      <section className="py-24 px-6 bg-white/50">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
          {[
            { title: 'Authentic Spices', desc: 'Sourced directly from regional farmers across India.', icon: '🌶️' },
            { title: 'Chef Curated', desc: 'Every dish is a masterpiece of heat and flavor balance.', icon: '👨‍🍳' },
            { title: 'Spice Challenges', desc: 'Test your limits with our signature Inferno series.', icon: '🔥' }
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="text-center space-y-4 p-8 rounded-3xl hover:bg-white transition-colors duration-500"
            >
              <div className="text-5xl mb-6">{item.icon}</div>
              <h3 className="text-2xl font-serif font-bold text-spice-900">{item.title}</h3>
              <p className="text-spice-600 leading-relaxed">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      <SpiceEducation />
      <MenuSection />
      <ReservationSection />
      <Testimonials />
      <BlogSection />

      {/* Location & Hours Section */}
      <section id="contact" className="py-24 px-6 bg-spice-100/30">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-spice-600">Visit Us</span>
              <h2 className="text-4xl md:text-6xl font-serif font-bold text-spice-900">
                Find the <span className="italic">Heat</span> Near You
              </h2>
            </div>
            
            <div className="space-y-6">
              <div className="glass p-8 rounded-3xl space-y-4">
                <h4 className="text-xl font-bold text-spice-900">Opening Hours</h4>
                <div className="grid grid-cols-2 gap-4 text-spice-600">
                  <div>
                    <p className="font-bold text-spice-800">Mon - Thu</p>
                    <p>12:00 PM - 10:00 PM</p>
                  </div>
                  <div>
                    <p className="font-bold text-spice-800">Fri - Sun</p>
                    <p>11:00 AM - 11:30 PM</p>
                  </div>
                </div>
              </div>

              <div className="glass p-8 rounded-3xl space-y-4">
                <h4 className="text-xl font-bold text-spice-900">Our Location</h4>
                <p className="text-spice-600">123 Spice Lane, Flavor District, New Delhi, India 110001</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-spice-600 font-bold flex items-center gap-2 hover:text-spice-900 transition-colors"
                >
                  Get Directions <span className="text-xl">→</span>
                </motion.button>
              </div>
            </div>
          </div>

          <div className="relative aspect-square lg:aspect-video rounded-[3rem] overflow-hidden shadow-2xl border-8 border-white">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.870425624322!2d77.2248553150826!3d28.63359698241773!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd37b7496677%3A0xad54d994243275d4!2sConnaught%20Place%2C%20New%20Delhi%2C%20Delhi%20110001!5e0!3m2!1sen!2sin!4v1647854652345!5m2!1sen!2sin" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy"
              title="Google Maps"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
