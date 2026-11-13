import { useEffect, ReactNode } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FiArrowLeft, FiArrowUpRight, FiClock, FiCalendar } from "react-icons/fi";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { blogPosts } from "@/data/blogPosts";

const renderFormattedText = (text: string): ReactNode => {
  if (!text.includes("[") || !text.includes("](") || !text.includes(")")) {
    return text;
  }
  const parts: (string | JSX.Element)[] = [];
  const regex = /\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    parts.push(
      <a
        key={match.index}
        href={match[2]}
        target="_blank"
        rel="noopener noreferrer"
        className="text-cyan-400 hover:text-cyan-300 underline underline-offset-4 transition-colors"
      >
        {match[1]}
      </a>
    );
    lastIndex = regex.lastIndex;
  }
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  return parts.length > 0 ? parts : text;
};

const BlogDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = blogPosts.find(
    (p) =>
      p.id.toLowerCase() === slug?.toLowerCase() ||
      (slug === "neural-lab-prompt-synthesis" && p.id === "ai-voice-generation-how-it-works") ||
      (slug === "nvidia-nemo-riva-triton-stack" && p.id === "ai-audio-enhancement-improve-recording-quality")
  );

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle ? `${post.metaTitle} | Vexon` : `${post.title} | Vexon`;
      const metaDescriptionTag = document.querySelector('meta[name="description"]');
      if (metaDescriptionTag && (post.metaDescription || post.excerpt)) {
        metaDescriptionTag.setAttribute("content", post.metaDescription || post.excerpt);
      }
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-[#050505] text-white flex flex-col">
        <Navbar />
        <main className="flex-1 container mx-auto px-6 pt-44 pb-24 flex flex-col items-center justify-center text-center">
          <span className="text-[10px] tracking-[0.4em] uppercase text-secondary font-bold mb-4">
            404 · Dispatch Not Found
          </span>
          <h1 className="font-display text-4xl md:text-5xl font-bold mb-6">
            This blog post could not be found.
          </h1>
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold tracking-[0.2em] uppercase text-black hover:bg-secondary hover:text-white transition-colors"
          >
            <FiArrowLeft size={14} />
            Back to Blog
          </Link>
        </main>
        <Footer />
      </div>
    );
  }

  const relatedPosts = blogPosts
    .filter((p) => p.id !== post.id)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category))
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-[#050505] text-white">
      <Navbar />

      <main className="container mx-auto px-6 pt-32 md:pt-40 pb-24 max-w-6xl">
        {/* Back Link */}
        <Link
          to="/blog"
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.2em] uppercase text-white/45 hover:text-white transition-colors mb-8"
        >
          <FiArrowLeft size={14} />
          Back to Blog
        </Link>

        {/* Top Title + Subtitle Header */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mb-12"
        >
          <h1 className="font-display text-3xl sm:text-5xl md:text-[3.25rem] font-bold text-white leading-[1.12] tracking-tight mb-5">
            {post.title}
          </h1>
          <p className="text-white/55 text-base sm:text-lg font-light leading-relaxed max-w-3xl">
            {post.excerpt}
          </p>
        </motion.header>

        {/* 2-Column Editorial Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Content Column */}
          <motion.article
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-8"
          >
            {/* Cover Image */}
            <figure className="mb-10">
              <div className="relative aspect-[16/9] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5">
                <img
                  src={post.image}
                  alt={post.imageSeo?.alt || post.title}
                  title={post.imageSeo?.title || post.title}
                  className="w-full h-full object-cover"
                />
              </div>
              {post.imageSeo?.caption && (
                <figcaption className="text-xs text-white/50 text-center mt-3 italic">
                  {post.imageSeo.caption}
                </figcaption>
              )}
            </figure>

            {/* Intro Paragraphs */}
            <div className="space-y-5 text-white/75 text-base md:text-[17px] font-light leading-relaxed mb-10">
              {post.intro.map((paragraph, idx) => (
                <p key={idx}>{renderFormattedText(paragraph)}</p>
              ))}
            </div>

            {/* Numbered Overview Sections */}
            <div className="space-y-10">
              {post.sections.map((section) => (
                <section key={section.heading} className="space-y-4">
                  <h2 className="font-display text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {section.heading}
                  </h2>
                  {section.paragraphs && section.paragraphs.length > 0 && (
                    <div className="space-y-4 text-white/65 text-base md:text-[17px] font-light leading-relaxed">
                      {section.paragraphs.map((paragraph, idx) => (
                        <p key={idx}>{renderFormattedText(paragraph)}</p>
                      ))}
                    </div>
                  )}

                  {section.table && (
                    <div className="overflow-x-auto rounded-xl border border-white/10 my-6">
                      <table className="w-full text-left text-sm text-white/70">
                        <thead className="bg-white/[0.06] text-white/90 font-semibold border-b border-white/10">
                          <tr>
                            {section.table.headers.map((h, i) => (
                              <th key={i} className="px-5 py-3.5">
                                {h}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-white/5">
                          {section.table.rows.map((row, rIdx) => (
                            <tr key={rIdx} className="hover:bg-white/[0.02] transition-colors">
                              {row.map((cell, cIdx) => (
                                <td
                                  key={cIdx}
                                  className={`px-5 py-3.5 ${
                                    cIdx === 0 ? "font-medium text-white/90" : "text-white/65"
                                  }`}
                                >
                                  {cell}
                                </td>
                              ))}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {section.subsections && section.subsections.length > 0 && (
                    <div className="space-y-6 pt-2">
                      {section.subsections.map((sub) => (
                        <div key={sub.subheading} className="space-y-3">
                          <h3 className="font-display text-lg sm:text-xl font-semibold text-white/90">
                            {sub.subheading}
                          </h3>
                          <div className="space-y-3 text-white/65 text-base font-light leading-relaxed">
                            {sub.paragraphs.map((p, pIdx) => (
                              <p key={pIdx}>{renderFormattedText(p)}</p>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </motion.article>

          {/* Right Metadata Sidebar */}
          <aside className="lg:col-span-4 lg:sticky lg:top-32 space-y-8 border-t lg:border-t-0 lg:border-l border-white/10 pt-8 lg:pt-0 lg:pl-10">
            {/* Category Pills */}
            <div>
              <p className="text-xs font-medium text-white/40 mb-3">Category</p>
              <div className="flex flex-wrap gap-2">
                <span className="px-3.5 py-1.5 rounded-lg bg-white/[0.06] border border-white/10 text-xs font-medium text-white/85">
                  {post.category}
                </span>
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1.5 rounded-lg bg-white/[0.04] border border-white/10 text-xs font-medium text-white/65"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Written By */}
            <div>
              <p className="text-xs font-medium text-white/40 mb-4">Written by</p>
              <div className="flex items-center gap-3.5">
                <div className="w-11 h-11 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-xs font-bold text-white shrink-0">
                  {post.authorInitials}
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{post.author}</div>
                  <div className="text-xs text-white/45 mt-0.5">{post.authorRole}</div>
                </div>
              </div>
            </div>

            {/* Date & Reading Time */}
            <div className="flex flex-wrap items-center gap-5 text-xs text-white/45 pt-2 border-t border-white/10">
              <span className="inline-flex items-center gap-1.5">
                <FiCalendar size={13} />
                {post.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <FiClock size={13} />
                {post.readTime}
              </span>
            </div>

            {/* Connected Vexon Site Section */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 space-y-4">
              <span className="text-[10px] tracking-[0.25em] uppercase text-secondary font-bold block">
                Connected Vexon Page
              </span>
              <p className="text-xs text-white/50 font-light leading-relaxed">
                Explore the live Vexon Audio AI platform capabilities featured in this dispatch.
              </p>
              <Link
                to={post.relatedRoute}
                className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-white px-5 py-3 text-[11px] font-bold tracking-[0.2em] uppercase text-black hover:bg-secondary hover:text-white transition-colors"
              >
                {post.relatedLabel}
                <FiArrowUpRight size={14} />
              </Link>
            </div>
          </aside>
        </div>

        {/* Related Blog Posts */}
        <section className="mt-24 pt-16 border-t border-white/10">
          <div className="flex items-center justify-between gap-4 mb-10">
            <h2 className="font-display text-2xl font-bold text-white">More from Vexon Blog</h2>
            <Link
              to="/blog"
              className="text-xs font-semibold tracking-[0.2em] uppercase text-white/50 hover:text-white transition-colors"
            >
              View all posts →
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedPosts.map((related) => (
              <Link
                key={related.id}
                to={`/blog/${related.id}`}
                className="group flex flex-col"
              >
                <div className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden border border-white/10 bg-white/5 mb-4">
                  <img
                    src={related.image}
                    alt={related.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-display text-base font-bold text-white leading-snug mb-2 group-hover:text-secondary transition-colors">
                  {related.title}
                </h3>
                <p className="text-xs text-white/45 font-light line-clamp-2">
                  {related.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BlogDetail;

