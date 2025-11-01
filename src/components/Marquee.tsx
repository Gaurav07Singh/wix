const Marquee = () => {
  return (
    <section className="bg-neon py-6 overflow-hidden">
      <div className="flex whitespace-nowrap animate-marquee">
        {[...Array(10)].map((_, i) => (
          <span
            key={i}
            className="inline-block px-8 text-3xl font-bold text-background"
          >
            LIMITED EDITION ✦
          </span>
        ))}
      </div>
    </section>
  );
};

export default Marquee;