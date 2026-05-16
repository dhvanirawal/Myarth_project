import Image from "next/image";

export default function About() {
  return (
    <section id="about" className="py-14 md:py-20 px-5 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section heading */}
        <h2 className="text-[#131313] font-bold text-xl md:text-2xl mb-10 font-poppins">
          About{" "}
          <span className="text-[#D62062]">Ngo Foundation</span>
        </h2>

        <div className="flex flex-col lg:flex-row gap-10 items-start">
          {/* Text content */}
          <div className="flex-1">
            {/* Who we are */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-1 bg-[#D62062] rounded" />
              <h3 className="text-[#131313] font-bold text-base font-poppins">
                Who we are-
              </h3>
            </div>

            <p className="text-[#131313] text-sm md:text-base leading-relaxed font-poppins font-normal mb-10">
              Founded in 2010, our organization has been at the forefront of
              workforce development, focusing on equipping underprivileged youth
              and adults with the skills they need to succeed. From basic
              education to advanced vocational training, we provide a range of
              programs designed to meet the unique needs of our community.
            </p>

            {/* Vision & Mission */}
            <div className="flex items-center gap-3 mb-4">
              <div className="w-7 h-1 bg-[#D62062] rounded" />
              <h3 className="text-[#131313] font-bold text-base font-poppins">
                Our Vision and mission
              </h3>
            </div>

            <blockquote className="text-[#121212] font-medium text-sm italic mb-3 font-poppins">
              &ldquo;Unlocking Potential, Creating Opportunities.&rdquo;
            </blockquote>

            <p className="text-[#131313] text-sm leading-relaxed font-poppins font-normal mb-8">
              Empowering underprivileged individuals with the skills and support
              needed for meaningful employment, envisioning a world where everyone
              can achieve their full potential through equal opportunities.
            </p>

            <a
              href="#membership"
              className="inline-flex items-center gap-2 bg-[#131313] text-white font-semibold text-sm px-6 py-3 rounded hover:bg-[#D62062] transition-colors font-poppins"
            >
              Become Our Member
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>

          {/* Image */}
          <div className="w-full lg:w-80 xl:w-96 shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=800&q=80"
                alt="Community members working together"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
