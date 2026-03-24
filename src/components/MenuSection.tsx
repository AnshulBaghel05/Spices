import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Link } from 'react-router-dom';
import { Filter, Search, Flame, Leaf, Utensils, ArrowRight } from 'lucide-react';
import { DISHES } from '../data';
import DishCard from './DishCard';
import { cn } from '../lib/utils';
import { SpiceLevel } from '../types';

export default function MenuSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [activeSpiceLevel, setActiveSpiceLevel] = useState<number | 'all'>('all');
  const [isVegOnly, setIsVegOnly] = useState(false);

  const categories = [
    { id: 'all', name: 'All Dishes', icon: Utensils },
    { id: 'starters', name: 'Starters', icon: Flame },
    { id: 'main', name: 'Main Course', icon: Utensils },
    { id: 'desserts', name: 'Desserts', icon: Leaf },
    { id: 'drinks', name: 'Drinks', icon: Flame },
  ];

  const filteredDishes = DISHES.filter(dish => {
    const categoryMatch = activeCategory === 'all' || dish.category === activeCategory;
    const spiceMatch = activeSpiceLevel === 'all' || dish.spiceLevel === activeSpiceLevel;
    const vegMatch = !isVegOnly || dish.isVeg;
    return categoryMatch && spiceMatch && vegMatch;
  });

  return (
    <section id="menu" className="py-24 px-6 bg-white/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-spice-600"
            >
              Curated Selection
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-spice-900">
              Explore Our <span className="italic">Menu</span>
            </h2>
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => setIsVegOnly(!isVegOnly)}
              className={cn(
                'flex items-center gap-2 px-6 py-3 rounded-2xl text-sm font-bold transition-all',
                isVegOnly ? 'bg-green-600 text-white shadow-lg shadow-green-600/20' : 'glass text-spice-700'
              )}
            >
              <Leaf className="w-4 h-4" /> Veg Only
            </button>
            <div className="glass flex items-center gap-2 px-6 py-3 rounded-2xl">
              <Filter className="w-4 h-4 text-spice-600" />
              <select 
                className="bg-transparent text-sm font-bold text-spice-700 outline-none cursor-pointer"
                onChange={(e) => setActiveSpiceLevel(e.target.value === 'all' ? 'all' : Number(e.target.value))}
              >
                <option value="all">Any Spice Level</option>
                <option value="0">Mild</option>
                <option value="1">Medium</option>
                <option value="2">Hot</option>
                <option value="3">Extreme</option>
                <option value="4">Inferno</option>
              </select>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex overflow-x-auto gap-4 pb-8 no-scrollbar">
          {categories.map((cat) => (
            <motion.button
              key={cat.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(cat.id)}
              className={cn(
                'flex items-center gap-3 px-8 py-4 rounded-2xl text-sm font-bold whitespace-nowrap transition-all duration-300',
                activeCategory === cat.id 
                  ? 'bg-spice-900 text-white shadow-2xl shadow-spice-900/20' 
                  : 'glass text-spice-700 hover:bg-white/80'
              )}
            >
              <cat.icon className="w-4 h-4" />
              {cat.name}
            </motion.button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredDishes.map((dish) => (
              <DishCard key={dish.id} dish={dish} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredDishes.length === 0 && (
          <div className="text-center py-20 space-y-4">
            <div className="bg-spice-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto">
              <Search className="w-8 h-8 text-spice-400" />
            </div>
            <p className="text-xl font-serif font-bold text-spice-900">No dishes found</p>
            <p className="text-spice-500">Try adjusting your filters to find your perfect spice match.</p>
          </div>
        )}

        <div className="mt-16 text-center">
          <Link 
            to="/order"
            className="inline-flex items-center gap-3 bg-spice-900 text-white px-10 py-5 rounded-3xl font-bold text-lg hover:bg-spice-800 transition-all shadow-2xl shadow-spice-900/20 group"
          >
            Order Now <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}
