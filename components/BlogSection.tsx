export default function BlogSection() {
  const posts = [
    {
      category: 'Industry Insights',
      title: 'The Future of Precision Agriculture in Africa',
      date: 'March 15, 2024',
      readTime: '5 min read',
      delay: '0s',
    },
    {
      category: 'Case Study',
      title: 'How Kenya Reduced Water Usage by 40% with AI',
      date: 'March 10, 2024',
      readTime: '7 min read',
      delay: '0.2s',
    },
    {
      category: 'Technology',
      title: 'Understanding IoT Sensors for Smart Farming',
      date: 'March 5, 2024',
      readTime: '6 min read',
      delay: '0.4s',
    },
  ];

  return (
    <section id="blog" className="relative bg-[#07080A] py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="mb-16">
          <h2 className="text-4xl font-bold text-white md:text-5xl">Latest Articles</h2>
          <p className="mt-4 text-lg text-white/60">Insights on agritech, sustainability, and innovation</p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-[#C9A84C]/50 hover:bg-white/[0.08] animate-float-card"
              style={{ animationDelay: post.delay }}
            >
              <div className="mb-4">
                <span className="inline-block rounded-full bg-[#C9A84C]/15 px-3 py-1 text-xs font-semibold text-[#C9A84C]">
                  {post.category}
                </span>
              </div>
              <h3 className="mb-4 text-xl font-bold text-white">{post.title}</h3>
              <div className="mb-4 flex items-center justify-between border-t border-white/10 pt-4 text-sm text-white/50">
                <span>{post.date}</span>
                <span>{post.readTime}</span>
              </div>
              <a href="#" className="inline-flex items-center gap-2 font-semibold text-[#C9A84C] transition-all group-hover:gap-3">
                Read more →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
