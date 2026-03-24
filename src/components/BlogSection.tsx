import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Clock, User } from 'lucide-react';

export default function BlogSection() {
  const posts = [
    {
      id: 1,
      title: "The Science of Spice: Why We Crave the Burn",
      excerpt: "Explore the fascinating biology behind capsaicin and how our brains interpret heat as pleasure.",
      image: "https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800",
      author: "Chef Raj",
      date: "Mar 15, 2026",
      category: "Science"
    },
    {
      id: 2,
      title: "5 Essential Spices for Every Home Kitchen",
      excerpt: "From cumin to cardamom, these are the building blocks of authentic Indian flavor.",
      image: "https://images.unsplash.com/photo-1532336414038-cf19250c5757?auto=format&fit=crop&q=80&w=800",
      author: "Spice Master",
      date: "Mar 10, 2026",
      category: "Cooking"
    },
    {
      id: 3,
      title: "How to Tame the Flame: Cooling Your Palate",
      excerpt: "Stuck with a dish that's too hot? Here are the best ways to neutralize the heat instantly.",
      image: "https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&q=80&w=800",
      author: "Nutritionist Anna",
      date: "Mar 05, 2026",
      category: "Health"
    }
  ];

  return (
    <section id="blog" className="py-24 px-6 bg-white/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="space-y-4">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-xs font-bold uppercase tracking-[0.3em] text-spice-600"
            >
              Spice Journal
            </motion.span>
            <h2 className="text-4xl md:text-6xl font-serif font-bold text-spice-900">
              Latest from the <span className="italic">Kitchen</span>
            </h2>
          </div>
          <motion.button
            whileHover={{ x: 10 }}
            className="text-spice-600 font-bold flex items-center gap-2 group"
          >
            View All Posts <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="space-y-6">
                <div className="relative aspect-[4/3] rounded-[2.5rem] overflow-hidden shadow-xl">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-spice-600">
                    {post.category}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-4 text-xs font-medium text-spice-400">
                    <span className="flex items-center gap-1"><User className="w-3 h-3" /> {post.author}</span>
                    <span className="flex items-center gap-1"><Clock className="w-3 h-3" /> {post.date}</span>
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-spice-900 group-hover:text-spice-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-spice-500 leading-relaxed line-clamp-2">
                    {post.excerpt}
                  </p>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
