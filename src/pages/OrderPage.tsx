import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShoppingBag, ArrowLeft, Search, Filter, Flame, Utensils, Leaf, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import { DISHES } from '../data';
import DishCard from '../components/DishCard';
import { cn } from '../lib/utils';
import { useCart } from '../context/CartContext';

export default function OrderPage() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const { items, total, setIsOpen } = useCart();

  const categories = [
    { id: 'all', name: 'All Dishes', icon: Utensils },
    { id: 'starters', name: 'Starters', icon: Flame },
    { id: 'main', name: 'Main Course', icon: Utensils },
    { id: 'desserts', name: 'Desserts', icon: Leaf },
    { id: 'drinks', name: 'Drinks', icon: Flame },
  ];

  const filteredDishes = DISHES.filter(dish => {
    const categoryMatch = activeCategory === 'all' || dish.category === activeCategory;
    const searchMatch = dish.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                       dish.description.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const itemCount = items.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="min-h-screen bg-spice-50 pt-24 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
          <div className="space-y-2">
            <Link 
              to="/" 
              className="flex items-center gap-2 text-spice-600 font-bold hover:text-spice-900 transition-colors mb-4"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-spice-900">
              Order <span className="italic">Online</span>
            </h1>
            <p className="text-spice-600">Get your favorite spicy delights delivered to your doorstep.</p>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative flex-1 md:w-80">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-spice-400" />
              <input 
                type="text"
                placeholder="Search for dishes..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-2xl glass border-none focus:ring-2 focus:ring-spice-600 outline-none transition-all"
              />
            </div>
            <button 
              onClick={() => setIsOpen(true)}
              className="relative p-3 glass rounded-2xl text-spice-900 hover:bg-white/80 transition-all"
            >
              <ShoppingBag className="w-6 h-6" />
              {itemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-spice-600 text-white text-[10px] font-bold w-5 h-5 rounded-full flex items-center justify-center shadow-lg">
                  {itemCount}
                </span>
              )}
            </button>
          </div>
        </div>

        <div className="grid lg:grid-cols-[240px_1fr] gap-12">
          {/* Sidebar Categories */}
          <aside className="hidden lg:block space-y-4">
            <h3 className="text-sm font-bold uppercase tracking-widest text-spice-400 px-4">Categories</h3>
            <div className="space-y-2">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "w-full flex items-center justify-between px-4 py-3 rounded-xl text-sm font-bold transition-all",
                    activeCategory === cat.id 
                      ? "bg-spice-900 text-white shadow-lg shadow-spice-900/20" 
                      : "text-spice-600 hover:bg-spice-100"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <cat.icon className="w-4 h-4" />
                    {cat.name}
                  </div>
                  {activeCategory === cat.id && <ChevronRight className="w-4 h-4" />}
                </button>
              ))}
            </div>

            {/* Cart Summary Card */}
            {items.length > 0 && (
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="glass p-6 rounded-3xl mt-8 space-y-4"
              >
                <div className="flex items-center justify-between">
                  <span className="text-sm font-bold text-spice-900">Your Order</span>
                  <span className="text-xs text-spice-500">{itemCount} items</span>
                </div>
                <div className="space-y-2">
                  {items.slice(0, 3).map(item => (
                    <div key={item.id} className="flex justify-between text-xs">
                      <span className="text-spice-600 truncate max-w-[120px]">{item.quantity}x {item.name}</span>
                      <span className="font-bold text-spice-900">${(item.price * item.quantity).toFixed(2)}</span>
                    </div>
                  ))}
                  {items.length > 3 && (
                    <p className="text-[10px] text-spice-400">+{items.length - 3} more items</p>
                  )}
                </div>
                <div className="pt-4 border-t border-spice-200 flex justify-between items-center">
                  <span className="text-sm font-bold text-spice-900">Total</span>
                  <span className="text-lg font-bold text-spice-600">${total.toFixed(2)}</span>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <button 
                    onClick={() => setIsOpen(true)}
                    className="bg-white border border-spice-200 text-spice-900 py-3 rounded-xl text-xs font-bold hover:bg-spice-50 transition-all"
                  >
                    View Cart
                  </button>
                  <button 
                    onClick={() => toast.success('Order placed successfully! This is a demo.')}
                    className="bg-spice-900 text-white py-3 rounded-xl text-xs font-bold hover:bg-spice-800 transition-all"
                  >
                    Checkout
                  </button>
                </div>
              </motion.div>
            )}
          </aside>

          {/* Main Content */}
          <div className="space-y-8">
            {/* Mobile Categories */}
            <div className="lg:hidden flex overflow-x-auto gap-3 pb-4 no-scrollbar">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={cn(
                    "flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold whitespace-nowrap transition-all",
                    activeCategory === cat.id 
                      ? "bg-spice-900 text-white shadow-lg" 
                      : "glass text-spice-600"
                  )}
                >
                  <cat.icon className="w-4 h-4" />
                  {cat.name}
                </button>
              ))}
            </div>

            {/* Grid */}
            <motion.div 
              layout
              className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8"
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
                <p className="text-spice-500">Try searching for something else or explore other categories.</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
