import React from 'react';
import { motion } from 'motion/react';
import { Calendar, Users, Clock, MessageSquare, Flame, ShieldCheck, Heart } from 'lucide-react';

export default function ReservationSection() {
  return (
    <section id="reservation" className="py-24 px-6 relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full bg-spice-900 -z-10 skew-y-3 origin-top-right scale-110" />
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
        <div className="space-y-12">
          <div className="space-y-6">
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-spice-300"
            >
              Secure Your Spot
            </motion.span>
            <h2 className="text-4xl md:text-7xl font-serif font-bold text-white leading-tight">
              Book Your <span className="italic text-spice-400 underline decoration-spice-400/30">Table</span>
            </h2>
            <p className="text-lg text-spice-200 leading-relaxed max-w-lg">
              Experience the heat in person. Whether it's a quiet dinner or a spicy challenge with friends, 
              we'll make sure your table is ready.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="flex items-start gap-4">
              <div className="bg-spice-800 p-3 rounded-2xl text-spice-300">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Safe & Secure</h4>
                <p className="text-sm text-spice-400">Your data is protected with us.</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-spice-800 p-3 rounded-2xl text-spice-300">
                <Heart className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-bold text-white mb-1">Personalized</h4>
                <p className="text-sm text-spice-400">Tell us your spice preference.</p>
              </div>
            </div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="glass p-8 md:p-12 rounded-[3rem] shadow-2xl border-white/10"
        >
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-spice-500">Date</label>
                <div className="relative">
                  <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-spice-400" />
                  <input 
                    type="date" 
                    className="w-full bg-white/50 border border-spice-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-spice-600 transition-all"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-spice-500">Time</label>
                <div className="relative">
                  <Clock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-spice-400" />
                  <select className="w-full bg-white/50 border border-spice-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-spice-600 transition-all appearance-none">
                    <option>12:00 PM</option>
                    <option>01:00 PM</option>
                    <option>06:00 PM</option>
                    <option>07:00 PM</option>
                    <option>08:00 PM</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-spice-500">Guests</label>
                <div className="relative">
                  <Users className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-spice-400" />
                  <select className="w-full bg-white/50 border border-spice-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-spice-600 transition-all appearance-none">
                    <option>2 People</option>
                    <option>4 People</option>
                    <option>6 People</option>
                    <option>8+ People</option>
                  </select>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-spice-500">Spice Preference</label>
                <div className="relative">
                  <Flame className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-spice-400" />
                  <select className="w-full bg-white/50 border border-spice-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-spice-600 transition-all appearance-none">
                    <option>Beginner (Mild)</option>
                    <option>Intermediate (Medium)</option>
                    <option>Pro (Hot)</option>
                    <option>Inferno (Extreme)</option>
                  </select>
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold uppercase tracking-widest text-spice-500">Special Requests</label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 w-4 h-4 text-spice-400" />
                <textarea 
                  placeholder="Allergies, birthdays, or specific spice requests..."
                  className="w-full bg-white/50 border border-spice-200 rounded-2xl py-4 pl-12 pr-4 outline-none focus:ring-2 focus:ring-spice-600 transition-all min-h-[120px]"
                />
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-spice-900 text-white py-5 rounded-2xl font-bold text-lg shadow-2xl shadow-spice-900/30 hover:bg-spice-800 transition-all"
            >
              Confirm Reservation
            </motion.button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
