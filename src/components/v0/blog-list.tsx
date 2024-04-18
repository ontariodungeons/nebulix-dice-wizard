
export default function BlogList({ posts }) {
  return (
    <div className="min-h-screen bg-[#131417] p-8 text-white">
      <div className="mx-auto max-w-2xl">
        <header className="mb-12">
          <h1 className="mb-3 text-6xl font-bold leading-tight">
            The Dice Wizard's Tome of Knowledge
          </h1>
          <p className="text-xl">
            Read about past adventures, games play tips, and lessons learned.
          </p>
        </header>
        <article className="space-y-8">
          {posts.map((post) => {
            if (!post || !post.data || !post.slug) {
              console.error("Invalid post data", post);
              return null;
            }
            return (
              <div key={post.slug}>
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-semibold">{post.data.title}</h2>
                  <span className="text-sm text-gray-400">
                    {new Date(post.data.pubDate).toLocaleDateString()}
                  </span>
                </div>
                <p className="mb-2">{post.data.description}</p>
                <a className="text-blue-400" href={`/blog/${post.slug}`}>
                  Learn
                </a>
              </div>
            );
          })}
        </article>
      </div>
    </div>
  );
}
