import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { Link } from 'react-router-dom';
import { Flame, ArrowRight, Play, Utensils } from 'lucide-react';

export default function Hero() {
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        style={{ y: y1, rotate }}
        className="absolute -top-20 -right-20 w-[600px] h-[600px] bg-spice-200/30 rounded-full blur-3xl -z-10" 
      />
      <motion.div 
        style={{ y: y2, rotate: -rotate }}
        className="absolute -bottom-20 -left-20 w-[400px] h-[400px] bg-spice-300/20 rounded-full blur-3xl -z-10" 
      />

      {/* Floating Spices (Decorative) */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 right-10 md:right-20 hidden lg:block"
      >
        <img 
          src="https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=200" 
          alt="Chili" 
          className="w-24 h-24 object-contain rounded-full shadow-2xl rotate-12 border-4 border-white/50"
          referrerPolicy="no-referrer"
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 bg-spice-100 px-4 py-2 rounded-full border border-spice-200">
            <Flame className="w-4 h-4 text-spice-600" />
            <span className="text-xs font-bold uppercase tracking-widest text-spice-700">
              Authentic Spice Experience
            </span>
          </div>

          <h1 className="text-6xl md:text-8xl font-serif font-bold text-spice-900 leading-[1.1] tracking-tight">
            Feel the <span className="text-gradient italic">Heat</span> of Real Spices.
          </h1>

          <p className="text-lg text-spice-700 max-w-lg leading-relaxed">
            From the smoky depths of Naga ghost peppers to the gentle warmth of Kashmiri chilies, 
            we craft an immersive culinary journey that balances intensity with flavor.
          </p>

          <div className="flex flex-wrap gap-4 pt-4">
            <Link
              to="/order"
              className="bg-spice-900 text-white px-8 py-4 rounded-2xl font-bold flex items-center gap-2 shadow-2xl shadow-spice-900/30 hover:bg-spice-800 transition-all"
            >
              Order Now <ArrowRight className="w-5 h-5" />
            </Link>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="glass px-8 py-4 rounded-2xl font-bold flex items-center gap-2 hover:bg-white/80 transition-all"
            >
              <Play className="w-5 h-5 fill-spice-900" /> Watch Story
            </motion.button>
          </div>

          <div className="flex items-center gap-8 pt-8 border-t border-spice-200">
            <div>
              <p className="text-3xl font-bold text-spice-900">15+</p>
              <p className="text-xs font-medium text-spice-500 uppercase tracking-wider">Spice Origins</p>
            </div>
            <div className="w-px h-10 bg-spice-200" />
            <div>
              <p className="text-3xl font-bold text-spice-900">4.9/5</p>
              <p className="text-xs font-medium text-spice-500 uppercase tracking-wider">Customer Rating</p>
            </div>
            <div className="w-px h-10 bg-spice-200" />
            <div>
              <p className="text-3xl font-bold text-spice-900">24/7</p>
              <p className="text-xs font-medium text-spice-500 uppercase tracking-wider">Online Ordering</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative perspective-1000"
        >
          <div className="relative z-10 animate-float">
            <img 
              src="https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&q=80&w=1000" 
              alt="Signature Dish" 
              className="w-full h-auto rounded-[3rem] shadow-2xl shadow-spice-900/20 border-8 border-white/50"
              referrerPolicy="no-referrer"
            />
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 -right-6 glass p-6 rounded-3xl shadow-xl border border-white/50 flex items-center gap-4"
            >
              <div className="bg-spice-600 p-3 rounded-2xl text-white">
                <Utensils className="w-6 h-6" />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-spice-500">Signature</p>
                <p className="text-lg font-bold text-spice-900">Spicy Ramen</p>
              </div>
            </motion.div>
          </div>

          {/* Decorative Rings */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-spice-200 rounded-full -z-10 opacity-50" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] border border-spice-200 rounded-full -z-10 opacity-30" />
        </motion.div>
      </div>
    </section>
  );
}
