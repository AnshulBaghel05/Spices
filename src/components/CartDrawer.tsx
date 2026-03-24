import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, Plus, Minus, Trash2, ArrowRight } from 'lucide-react';
import { toast } from 'sonner';
import { useCart } from '../context/CartContext';

export default function CartDrawer() {
  const { items, total, isOpen, setIsOpen, updateQuantity, removeFromCart } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 bg-spice-900/40 backdrop-blur-sm z-[100]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-spice-50 z-[101] shadow-2xl flex flex-col"
          >
            <div className="p-6 border-b border-spice-200 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <ShoppingBag className="w-6 h-6 text-spice-600" />
                <h2 className="text-xl font-serif font-bold text-spice-900">Your Order</h2>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 hover:bg-spice-100 rounded-xl transition-colors"
              >
                <X className="w-6 h-6 text-spice-400" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-6">
              {items.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="bg-spice-100 p-6 rounded-full">
                    <ShoppingBag className="w-12 h-12 text-spice-300" />
                  </div>
                  <p className="text-xl font-serif font-bold text-spice-900">Your cart is empty</p>
                  <p className="text-spice-500">Looks like you haven't added any spicy delights yet.</p>
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="text-spice-600 font-bold hover:underline"
                  >
                    Start Ordering
                  </button>
                </div>
              ) : (
                items.map((item) => (
                  <div key={item.id} className="flex gap-4 group">
                    <div className="w-20 h-20 rounded-2xl overflow-hidden shadow-md">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1 space-y-1">
                      <div className="flex justify-between">
                        <h4 className="font-bold text-spice-900">{item.name}</h4>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-spice-300 hover:text-red-500 transition-colors"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                      <p className="text-xs text-spice-500 font-medium uppercase tracking-wider">
                        Spice Level: {item.spiceLevel}
                      </p>
                      <div className="flex justify-between items-center pt-2">
                        <div className="flex items-center gap-3 bg-white rounded-lg border border-spice-200 p-1">
                          <button 
                            onClick={() => updateQuantity(item.id, -1)}
                            className="p-1 hover:bg-spice-50 rounded-md transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="text-sm font-bold w-4 text-center">{item.quantity}</span>
                          <button 
                            onClick={() => updateQuantity(item.id, 1)}
                            className="p-1 hover:bg-spice-50 rounded-md transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                        <span className="font-bold text-spice-900">${(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-spice-200 space-y-4">
                <div className="flex justify-between text-lg">
                  <span className="text-spice-500">Subtotal</span>
                  <span className="font-bold text-spice-900">${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm text-spice-400">
                  <span>Delivery Fee</span>
                  <span>Calculated at checkout</span>
                </div>
                <button 
                  onClick={() => {
                    toast.success('Order placed successfully! This is a demo.');
                    setIsOpen(false);
                  }}
                  className="w-full bg-spice-900 text-white py-4 rounded-2xl font-bold text-lg flex items-center justify-center gap-2 hover:bg-spice-800 transition-all shadow-xl shadow-spice-900/20"
                >
                  Checkout <ArrowRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
