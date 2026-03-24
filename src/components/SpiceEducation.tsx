import React from 'react';
import { motion } from 'motion/react';
import { ShieldAlert, Info, Flame, Heart, Droplets, Utensils } from 'lucide-react';
import { cn } from '../lib/utils';

export default function SpiceEducation() {
  const solutions = [
    {
      id: 1,
      problem: "I don't know how spicy it will be",
      solution: "Visual Spice Scale",
      desc: "Every dish features our signature 5-level Flame Meter, from Mild to Inferno.",
      icon: Flame,
      color: "bg-orange-100 text-orange-600"
    },
    {
      id: 2,
      problem: "I want flavor, not just heat",
      solution: "Flavor-First Category",
      desc: "Our 'Aromatic Mild' section focuses on complex spice blends without the burn.",
      icon: Heart,
      color: "bg-pink-100 text-pink-600"
    },
    {
      id: 3,
      problem: "Spicy food upsets my stomach",
      solution: "Cooling Pairings",
      desc: "We suggest specific cooling sides like Mango Lassi or Cucumber Raita for every hot dish.",
      icon: Droplets,
      color: "bg-blue-100 text-blue-600"
    },
    {
      id: 4,
      problem: "Is it actually authentic?",
      solution: "Sourcing Transparency",
      desc: "We source our chilies directly from farmers in Guntur, Byadgi, and the North East.",
      icon: ShieldAlert,
      color: "bg-purple-100 text-purple-600"
    }
  ];

  return (
    <section className="py-24 px-6 bg-spice-100/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold uppercase tracking-[0.3em] text-spice-600"
          >
            The Scpies Philosophy
          </motion.span>
          <h2 className="text-4xl md:text-6xl font-serif font-bold text-spice-900">
            Solving the <span className="italic">Spice</span> Dilemma
          </h2>
          <p className="text-spice-600 max-w-2xl mx-auto">
            We believe spicy food should be an experience, not a challenge. 
            Here's how we ensure every bite is perfect for your palate.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {solutions.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass p-8 rounded-[2.5rem] space-y-6 border-white/50"
            >
              <div className={cn("w-14 h-14 rounded-2xl flex items-center justify-center", item.color)}>
                <item.icon className="w-7 h-7" />
              </div>
              <div className="space-y-3">
                <p className="text-xs font-bold text-spice-400 uppercase tracking-wider">Problem</p>
                <h4 className="font-bold text-spice-900 leading-tight">"{item.problem}"</h4>
                <div className="w-10 h-0.5 bg-spice-200" />
                <p className="text-xs font-bold text-spice-600 uppercase tracking-wider">Our Solution</p>
                <h5 className="font-serif font-bold text-lg text-spice-800">{item.solution}</h5>
                <p className="text-sm text-spice-500 leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
