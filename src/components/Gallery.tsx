import Image from "next/image";

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=600&q=80",
    alt: "Mentorship session",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    alt: "Students collaborating",
    span: "col-span-1 row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=600&q=80",
    alt: "Youth studying",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1508243771214-6e95d137426b?w=600&q=80",
    alt: "Career development",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    alt: "Community workshop",
    span: "col-span-1 row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    alt: "Team discussion",
    span: "col-span-1 row-span-1",
  },
];

export default function Gallery() {
  return (
    <section className="py-14 md:py-20 px-5 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <p className="text-[#D62062] font-semibold text-sm uppercase tracking-widest mb-2 font-poppins">
            Our Impact
          </p>
          <h2 className="text-[#131313] font-bold text-xl md:text-2xl font-poppins">
            Moments That Matter
          </h2>
        </div>

        {/* Masonry-style grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4 auto-rows-[200px]">
          {galleryImages.map((img, i) => (
            <div
              key={i}
              className={`${img.span} relative rounded-xl overflow-hidden group cursor-pointer`}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-[#D62062]/0 group-hover:bg-[#D62062]/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
