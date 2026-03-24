import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data';

export default function Testimonials() {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-spice-600"
          >
            Customer Stories
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-spice-900">
            What Our <span className="italic">Spice Lovers</span> Say
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {TESTIMONIALS.map((t, index) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              whileHover={{ scale: 1.02 }}
              className="glass p-10 rounded-[3rem] relative space-y-6 border-white/50"
            >
              <Quote className="absolute top-8 right-8 w-12 h-12 text-spice-200/50" />
              
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-spice-500 fill-spice-500" />
                ))}
              </div>

              <p className="text-xl font-serif italic text-spice-800 leading-relaxed">
                "{t.content}"
              </p>

              <div className="flex items-center gap-4 pt-4">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-14 h-14 rounded-2xl object-cover shadow-lg"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="font-bold text-spice-900">{t.name}</h4>
                  <p className="text-sm text-spice-500 font-medium uppercase tracking-wider">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
