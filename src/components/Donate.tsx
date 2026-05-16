import Image from "next/image";

const donateImages = [
  {
    src: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=400&q=80",
    alt: "Healthcare workers",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&q=80",
    alt: "Students collaborating",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=400&q=80",
    alt: "Young woman smiling",
    tall: true,
  },
  {
    src: "https://images.unsplash.com/photo-1588702547923-7093a6c3ba33?w=400&q=80",
    alt: "Students studying",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=400&q=80",
    alt: "Library study session",
    tall: false,
  },
  {
    src: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=400&q=80",
    alt: "Community support",
    tall: false,
  },
];

export default function Donate() {
  return (
    <section id="donate" className="bg-[#D62062] relative overflow-hidden">
      {/* Decorative diagonal lines (bottom-left) */}
      <div className="absolute bottom-0 left-0 w-48 h-48 opacity-20 pointer-events-none">
        {Array.from({ length: 8 }).map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-white w-64 rotate-45"
            style={{ top: i * 20, left: -40 }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-5 md:px-16 lg:px-24 py-14 md:py-20">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Left — text */}
          <div className="flex-1 max-w-md">
            <h2 className="text-white font-semibold text-2xl md:text-3xl lg:text-4xl leading-snug mb-5 font-poppins">
              Change Lives, One Donation at a Time.
            </h2>
            <p className="text-white/80 text-sm leading-relaxed mb-8 font-poppins">
              Your donation helps empower underprivileged individuals with the
              skills and opportunities needed for a brighter future.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 bg-white text-[#FF1376] font-medium text-base px-8 py-4 rounded-full hover:bg-pink-50 transition-colors font-inter"
            >
              Donate Now
            </a>
          </div>

          {/* Right — image grid */}
          <div className="w-full lg:w-auto lg:flex-1 grid grid-cols-2 gap-3">
            {donateImages.map((img, i) => (
              <div
                key={i}
                className={`relative rounded-xl overflow-hidden ${
                  i === 1 ? "row-span-2" : ""
                }`}
                style={{ height: i === 1 ? "100%" : "160px" }}
              >
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
