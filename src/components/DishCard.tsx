import React from 'react';
import { motion } from 'motion/react';
import { Plus, Info, Leaf, Flame } from 'lucide-react';
import { toast } from 'sonner';
import { Dish } from '../types';
import SpiceMeter from './SpiceMeter';
import { cn } from '../lib/utils';

import { useCart } from '../context/CartContext';

interface DishCardProps {
  dish: Dish;
}

export const DishCard: React.FC<DishCardProps> = ({ dish }) => {
  const { addToCart } = useCart();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative perspective-1000"
    >
      <div className="glass rounded-[2rem] p-5 transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-spice-500/10 preserve-3d">
        {/* Image Container */}
        <div className="relative aspect-square rounded-2xl overflow-hidden mb-5">
          <motion.img
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
            src={dish.image}
            alt={dish.name}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {dish.isVeg && (
              <div className="bg-white/90 backdrop-blur p-1.5 rounded-lg shadow-sm">
                <Leaf className="w-4 h-4 text-green-600" />
              </div>
            )}
            {dish.isChefSpecial && (
              <div className="bg-spice-600 text-white px-3 py-1 rounded-lg text-[10px] font-bold uppercase tracking-wider shadow-lg">
                Chef's Choice
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="space-y-3">
          <div className="flex justify-between items-start gap-2">
            <h3 className="text-xl font-serif font-bold text-spice-900 leading-tight">
              {dish.name}
            </h3>
            <span className="text-lg font-bold text-spice-600">${dish.price}</span>
          </div>
          
          <p className="text-sm text-spice-600 line-clamp-2 leading-relaxed">
            {dish.description}
          </p>

          <div className="flex items-center justify-between pt-2">
            <SpiceMeter level={dish.spiceLevel} />
            
            <div className="flex gap-2">
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-xl bg-spice-100 text-spice-600 hover:bg-spice-200 transition-colors"
              >
                <Info className="w-5 h-5" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  addToCart(dish);
                  toast.success(`${dish.name} added to cart!`, {
                    description: "You can view your order in the cart drawer.",
                    duration: 2000,
                  });
                }}
                className="p-2 rounded-xl bg-spice-900 text-white hover:bg-spice-800 transition-colors shadow-lg shadow-spice-900/20"
              >
                <Plus className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default DishCard;
