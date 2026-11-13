import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts, MAX_RECENT_POSTS } from "@/data/blogPosts";

const categories = ["All", "Technology", "Features", "Product", "Security", "Pricing"] as const;

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<(typeof categories)[number]>("All");

  const featuredPost = blogPosts.find((p) => p.featured) ?? blogPosts[0];
  const recentPosts = blogPosts.filter((p) => p.id !== featuredPost.id);
  const filteredRecentPosts = (
    selectedCategory === "All"
      ? recentPosts
      : recentPosts.filter((post) => post.category === selectedCategory)
  ).slice(0, MAX_RECENT_POSTS);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 md:pt-36 pb-24">
        {/* Featured Banner Card */}
        <motion.article
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="group relative w-full h-[420px] sm:h-[480px] md:h-[540px] rounded-[2rem] overflow-hidden border border-white/10 mb-16"
        >
          <Link to={`/blog/${featuredPost.id}`} className="block relative w-full h-full">
            <img
              src={featuredPost.image}
              alt={featuredPost.title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-black/15" />

            <div className="relative z-10 h-full flex flex-col justify-end p-7 sm:p-10 md:p-14">
              <div className="flex items-end justify-between gap-6">
                <div className="max-w-3xl">
                  <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-white/80 mb-3">
                    Featured
                  </span>
                  <h1 className="font-display text-2xl sm:text-4xl md:text-[2.75rem] font-bold text-white leading-[1.14] tracking-tight mb-4">
                    {featuredPost.title}
                  </h1>
                  <p className="text-white/75 text-sm sm:text-base font-light leading-relaxed line-clamp-2 max-w-2xl">
                    {featuredPost.excerpt}
                  </p>
                </div>

                <div className="hidden sm:flex items-center justify-center w-12 h-12 rounded-full border border-white/20 bg-white/5 text-white shrink-0 transition-all duration-300 group-hover:bg-white group-hover:text-black group-hover:translate-x-1">
                  <FiArrowRight size={20} />
                </div>
              </div>
            </div>
          </Link>
        </motion.article>

        {/* Recent Blog Posts Header & Category Filter */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 mb-10">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-white tracking-tight">
            Recent blog posts
          </h2>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const active = selectedCategory === category;
              return (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1.5 rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase transition-all border ${
                    active
                      ? "bg-white text-black border-white"
                      : "bg-white/[0.03] text-white/50 border-white/10 hover:text-white hover:border-white/25"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* 3-Column Recent Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {filteredRecentPosts.map((post, i) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: (i % 3) * 0.08, duration: 0.6 }}
              className="group flex flex-col"
            >
              <Link to={`/blog/${post.id}`} className="flex flex-col flex-1">
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-5">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                <h3 className="font-display text-lg font-bold text-white leading-snug mb-2 group-hover:text-secondary transition-colors">
                  {post.title}
                </h3>

                <p className="text-sm text-white/45 font-light leading-relaxed line-clamp-2 mb-4 flex-grow">
                  {post.excerpt}
                </p>
              </Link>

              <div className="flex items-center justify-between gap-2 text-xs text-white/55">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white/10 border border-white/15 text-[10px] font-bold text-white">
                    {post.authorInitials}
                  </span>
                  <span className="font-medium text-white/75">{post.author}</span>
                  <span className="text-white/30">•</span>
                  <span className="text-white/45">{post.date}</span>
                </div>

                <Link
                  to={post.relatedRoute}
                  className="text-[10px] font-semibold tracking-[0.15em] uppercase text-white/35 hover:text-white transition-colors"
                >
                  {post.category}
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Blog;
