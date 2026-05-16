const features = [
  {
    icon: (
      <svg className="w-6 h-6 text-[#D62062]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: "Like Minded Community",
    description: "Connect with passionate individuals who share your vision for social change.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#D62062]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    ),
    title: "Gain Exclusive Access",
    description: "Unlock resources, career support, and exclusive events as a valued member.",
  },
  {
    icon: (
      <svg className="w-6 h-6 text-[#D62062]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
      </svg>
    ),
    title: "Empower Others",
    description: "Make a tangible impact in the lives of underprivileged individuals and communities.",
  },
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    period: "",
    description: "Perfect for those just starting their journey with us.",
    features: ["Access to community forums", "Monthly newsletter", "Basic resources library", "Volunteer opportunities"],
    cta: "Get Started",
    highlight: false,
  },
  {
    name: "Member",
    price: "₹499",
    period: "/month",
    description: "Ideal for active members looking to make a difference.",
    features: ["All Basic features", "Career support sessions", "Exclusive workshops", "Priority event access", "Mentorship program"],
    cta: "Become a Member",
    highlight: true,
  },
  {
    name: "Champion",
    price: "₹999",
    period: "/month",
    description: "For dedicated champions committed to creating lasting impact.",
    features: ["All Member features", "1-on-1 mentorship", "Leadership training", "Recognition & certification", "Advisory board access"],
    cta: "Become a Champion",
    highlight: false,
  },
];

export default function Membership() {
  return (
    <section id="membership" className="py-14 md:py-20 px-5 md:px-16 lg:px-24 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-[#D62062] font-semibold text-xl md:text-2xl mb-2 font-poppins">
            Become a Member
          </h2>
          <p className="text-[#131313] font-normal text-base font-poppins">
            Join us in empowering lives and shaping futures.
          </p>
        </div>

        {/* Create an Impact */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-7 h-1 bg-[#D62062] rounded" />
            <h3 className="text-[#131313] font-bold text-base font-poppins">
              Create an Impact
            </h3>
          </div>
          <p className="text-[#131313] text-sm leading-relaxed mb-8 max-w-2xl font-poppins">
            As a member, you gain access to exclusive resources, career support, and a
            community committed to making a difference. Choose a membership plan that
            fits your needs and start making an impact today.
          </p>

          {/* Feature cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {features.map((f, i) => (
              <div key={i} className="bg-gray-50 rounded-xl p-5 flex flex-col items-start gap-3">
                <div className="bg-pink-50 p-3 rounded-lg">{f.icon}</div>
                <h4 className="text-[#131313] font-semibold text-sm font-poppins">{f.title}</h4>
                <p className="text-[#131313]/60 text-xs leading-relaxed font-poppins">{f.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Membership Plans */}
        <div>
          <h3 className="text-black font-bold text-base md:text-lg mb-8 font-poppins">
            Choose Your Path to Empowerment
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {plans.map((plan, i) => (
              <div
                key={i}
                className={`rounded-xl border-2 p-6 flex flex-col ${
                  plan.highlight
                    ? "border-[#D62062] bg-[#D62062] text-white shadow-xl scale-105"
                    : "border-gray-200 bg-white"
                }`}
              >
                <div className="mb-5">
                  <p className={`text-xs font-semibold uppercase tracking-widest mb-1 font-poppins ${plan.highlight ? "text-pink-200" : "text-[#D62062]"}`}>
                    {plan.name}
                  </p>
                  <div className="flex items-baseline gap-1">
                    <span className={`text-3xl font-bold font-poppins ${plan.highlight ? "text-white" : "text-[#131313]"}`}>
                      {plan.price}
                    </span>
                    <span className={`text-sm font-poppins ${plan.highlight ? "text-pink-100" : "text-gray-500"}`}>
                      {plan.period}
                    </span>
                  </div>
                  <p className={`text-xs mt-2 font-poppins ${plan.highlight ? "text-pink-100" : "text-gray-500"}`}>
                    {plan.description}
                  </p>
                </div>

                <ul className="space-y-2 flex-1 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className={`flex items-start gap-2 text-xs font-poppins ${plan.highlight ? "text-pink-50" : "text-[#131313]/70"}`}>
                      <svg className={`w-4 h-4 shrink-0 mt-0.5 ${plan.highlight ? "text-pink-200" : "text-[#D62062]"}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      {f}
                    </li>
                  ))}
                </ul>

                <a
                  href="#"
                  className={`text-center font-semibold text-sm py-3 px-5 rounded transition-all font-poppins ${
                    plan.highlight
                      ? "bg-white text-[#D62062] hover:bg-pink-50"
                      : "bg-[#131313] text-white hover:bg-[#D62062]"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
