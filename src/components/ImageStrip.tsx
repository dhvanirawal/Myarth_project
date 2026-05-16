import Image from "next/image";

const strips = [
  {
    top: "https://images.unsplash.com/photo-1513883049090-d0b7439799bf?w=500&q=80",
    bottom: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
    topAlt: "Music skill training",
    bottomAlt: "Cooking skill",
  },
  {
    top: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=500&q=80",
    bottom: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=500&q=80",
    topAlt: "Digital skills workshop",
    bottomAlt: "Tech learning",
  },
  {
    top: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=500&q=80",
    bottom: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=500&q=80",
    topAlt: "Tailoring skills",
    bottomAlt: "Professional training",
  },
];

export default function ImageStrip() {
  return (
    <section className="py-12 px-5 md:px-16 lg:px-24 bg-gray-50 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 md:gap-6 items-start">
          {strips.map((strip, i) => (
            <div
              key={i}
              className={`flex-1 flex flex-col gap-4 ${i === 1 ? "mt-8" : ""}`}
            >
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={strip.top}
                  alt={strip.topAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
              <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
                <Image
                  src={strip.bottom}
                  alt={strip.bottomAlt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
