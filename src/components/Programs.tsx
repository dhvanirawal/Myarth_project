import Image from "next/image";

const programs = [
  {
    title: "Employability at 12-18",
    description:
      "Tailored for teenagers, this program focuses on foundational skills, career awareness, and hands-on training to prepare young minds for the workforce.",
    features: ["Career Counseling", "Soft Skills Training", "Internship Support"],
    image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=600&q=80",
    imageAlt: "Teenagers in classroom",
  },
  {
    title: "Employability at 19-30",
    description:
      "Designed for young adults, offering specialized vocational training, job placement assistance, and professional development to accelerate career growth.",
    features: ["Vocational Training", "Job Placement", "Professional Skills"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80",
    imageAlt: "Young adults collaborating",
  },
  {
    title: "Employability at 30+",
    description:
      "Supporting adults seeking career transitions or skill upgrades with advanced training programs and mentorship tailored to experienced professionals.",
    features: ["Advanced Training", "Career Transition", "Mentorship Program"],
    image: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&q=80",
    imageAlt: "Adult professional training",
  },
];

export default function Programs() {
  return (
    <section id="programs" className="py-14 md:py-20 px-5 md:px-16 lg:px-24 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <p className="text-[#D62062] font-semibold text-2xl md:text-3xl mb-2 font-poppins">
            Explore programs
          </p>
          <h2 className="text-[#131313] font-semibold text-lg md:text-xl font-poppins">
            Empower Your Future with Our Tailored Programs
          </h2>
          <div className="flex items-center gap-3 mt-4">
            <div className="w-7 h-1 bg-[#D62062] rounded" />
            <p className="text-[#131313] text-sm leading-relaxed max-w-xl font-poppins">
              We offer comprehensive training designed to meet individuals where
              they are in life and help them move forward with confidence.
            </p>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, i) => (
            <div
              key={i}
              className="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-lg transition-shadow group"
            >
              {/* Card image */}
              <div className="relative w-full h-44 overflow-hidden">
                <Image
                  src={program.image}
                  alt={program.imageAlt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#D62062]/10" />
              </div>

              <div className="p-6">
                <h3 className="text-[#131313] font-semibold text-base mb-3 font-poppins">
                  {program.title}
                </h3>
                <p className="text-[#131313]/70 text-xs leading-relaxed mb-5 font-poppins">
                  {program.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {program.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2 text-xs font-poppins text-[#131313]">
                      <div className="w-1.5 h-1.5 bg-[#D62062] rounded-full shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
                <a
                  href="#"
                  className="inline-flex items-center gap-1 text-[#D62062] font-semibold text-xs hover:gap-2 transition-all font-poppins"
                >
                  Learn more
                  <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
