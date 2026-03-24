import React from 'react';
import { Flame, Instagram, Twitter, Facebook, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-spice-900 text-white pt-24 pb-12 px-6 overflow-hidden relative">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
        <div className="space-y-8">
          <div className="flex items-center gap-2">
            <div className="bg-spice-600 p-2 rounded-xl">
              <Flame className="text-white w-6 h-6" />
            </div>
            <span className="text-2xl font-serif font-bold tracking-tight">Scpies</span>
          </div>
          <p className="text-spice-400 leading-relaxed">
            Crafting the perfect balance of heat and flavor since 2010. 
            Authentic spices, modern techniques, unforgettable experiences.
          </p>
          <div className="flex gap-4">
            {[Instagram, Twitter, Facebook].map((Icon, i) => (
              <a key={i} href="#" className="bg-spice-800 p-3 rounded-xl hover:bg-spice-600 transition-colors">
                <Icon className="w-5 h-5" />
              </a>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg font-serif font-bold">Quick Links</h4>
          <ul className="space-y-4 text-spice-400">
            {['Home', 'Menu', 'About Us', 'Reservation', 'Contact'].map((link) => (
              <li key={link}>
                <a href="#" className="hover:text-spice-300 transition-colors">{link}</a>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg font-serif font-bold">Contact Us</h4>
          <ul className="space-y-6 text-spice-400">
            <li className="flex items-start gap-4">
              <MapPin className="w-5 h-5 text-spice-600 mt-1" />
              <span>123 Spice Lane, Flavor District,<br />New Delhi, India 110001</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="w-5 h-5 text-spice-600" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center gap-4">
              <Mail className="w-5 h-5 text-spice-600" />
              <span>hello@scpies.com</span>
            </li>
          </ul>
        </div>

        <div className="space-y-8">
          <h4 className="text-lg font-serif font-bold">Newsletter</h4>
          <p className="text-spice-400">Get spicy recipes and exclusive offers delivered to your inbox.</p>
          <div className="relative">
            <input 
              type="email" 
              placeholder="Your email address"
              className="w-full bg-spice-800 border border-spice-700 rounded-2xl py-4 px-6 outline-none focus:ring-2 focus:ring-spice-600 transition-all"
            />
            <button className="absolute right-2 top-2 bottom-2 bg-spice-600 px-6 rounded-xl font-bold text-sm hover:bg-spice-500 transition-colors">
              Join
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-spice-800 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-spice-500">
        <p>© 2026 Scpies Restaurant. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="hover:text-spice-400">Privacy Policy</a>
          <a href="#" className="hover:text-spice-400">Terms of Service</a>
        </div>
      </div>

      {/* Background Text */}
      <div className="absolute -bottom-20 -right-20 text-[20vw] font-serif font-black text-white/5 select-none pointer-events-none">
        SCPIES
      </div>
    </footer>
  );
}
