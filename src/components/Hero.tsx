import Image from "next/image";

const avatars = [
  "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=80&h=80&fit=crop&crop=face",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=80&h=80&fit=crop&crop=face",
];

export default function Hero() {
  return (
    <section className="relative min-h-screen md:min-h-[90vh] flex flex-col">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1440&q=80"
          alt="Students studying together"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/55" />
        {/* Pink gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#D62062]/60 via-transparent to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center px-5 md:px-16 lg:px-24 pt-28 pb-12">
        <div className="max-w-2xl">
          {/* Tag */}
          <p className="text-[#F998BB] font-bold text-lg mb-3 font-poppins">
            Who we are
          </p>

          {/* Headline */}
          <h1 className="text-white font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-4 font-poppins">
            Empowering Lives
            <br />
            Through Skill
            <br />
            Development
          </h1>

          {/* Subtitle */}
          <p className="text-white/85 text-sm md:text-base font-normal leading-relaxed mb-8 max-w-md font-poppins">
            Transforming potential into success by providing the tools, resources,
            and training needed to thrive in today&apos;s job market.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mb-8">
            <a
              href="#membership"
              className="bg-[#D62062] text-white font-semibold text-base px-6 py-4 rounded hover:opacity-90 transition-opacity font-poppins"
            >
              Join us now
            </a>
            <a
              href="#donate"
              className="bg-white text-[#D62062] font-semibold text-base px-6 py-4 rounded hover:bg-gray-50 transition-colors font-poppins"
            >
              Donate
            </a>
          </div>

          {/* Address */}
          <div className="flex items-center gap-2 text-white text-sm font-poppins">
            <svg className="w-4 h-4 shrink-0 text-[#F998BB]" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
            </svg>
            <span>1504878, Rm Nisha Nagar, Delhi</span>
          </div>
        </div>

        {/* Overlapping avatars + Join link */}
        <div className="mt-10">
          <div className="flex items-center gap-4 mb-4">
            {/* Overlapping avatar circles */}
            <div className="flex">
              {avatars.map((src, i) => (
                <div
                  key={i}
                  className="w-10 h-10 rounded-full border-2 border-white overflow-hidden -ml-3 first:ml-0 relative"
                  style={{ zIndex: avatars.length - i }}
                >
                  <Image
                    src={src}
                    alt={`Member ${i + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <a
              href="#membership"
              className="inline-flex items-center gap-2 text-white font-semibold text-sm hover:text-[#F998BB] transition-colors font-poppins"
            >
              Join Our Organization
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="relative z-10 flex justify-center pb-6">
        <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center pt-2">
          <div className="w-1 h-2 bg-white/60 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
