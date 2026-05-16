const usefulLinks = [
  { label: "Home", href: "#" },
  { label: "About Us", href: "#about" },
  { label: "Programs", href: "#programs" },
  { label: "Membership", href: "#membership" },
  { label: "Donate", href: "#donate" },
  { label: "Contact Us", href: "#contact" },
  { label: "Privacy Policy", href: "#" },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#1E1E1E] text-white pt-14 pb-6 px-5 md:px-16 lg:px-24">
      <div className="max-w-6xl mx-auto">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <a href="#" className="text-[#FF1376] font-semibold text-xl font-poppins leading-tight block mb-4">
              Ngo
              <br />
              Foundation
            </a>
            <p className="text-white/60 text-sm leading-relaxed font-poppins mb-6">
              Empowering lives through skill development and creating equal
              opportunities for all.
            </p>
            {/* Social icons */}
            <div className="flex gap-3">
              {["facebook", "twitter", "instagram", "linkedin"].map((social) => (
                <a
                  key={social}
                  href="#"
                  className="w-9 h-9 bg-white/10 rounded-full flex items-center justify-center hover:bg-[#D62062] transition-colors"
                  aria-label={social}
                >
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <circle cx="12" cy="12" r="5" />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Useful Links */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-poppins">
              Useful Links
            </h4>
            <ul className="space-y-3">
              {usefulLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/60 text-sm hover:text-[#FF1376] transition-colors font-poppins flex items-center gap-2"
                  >
                    <span className="w-1 h-1 bg-[#D62062] rounded-full" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contacts */}
          <div>
            <h4 className="text-white font-semibold text-sm uppercase tracking-widest mb-5 font-poppins">
              Our Contacts
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#FF1376] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <span className="text-white/60 text-sm font-poppins">info@ngofoundation.org</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#FF1376] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <span className="text-white/60 text-sm font-poppins">+91 98765 43210</span>
              </li>
              <li className="flex items-start gap-3">
                <svg className="w-4 h-4 text-[#FF1376] shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                </svg>
                <span className="text-white/60 text-sm font-poppins">1504878, Rm Nisha Nagar, Delhi</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-xs font-poppins text-center sm:text-left">
            © Charity 128. All Rights Reserved 2025
          </p>
          <a href="#" className="text-white/40 text-xs hover:text-[#FF1376] transition-colors font-poppins">
            Licensing
          </a>
        </div>
      </div>
    </footer>
  );
}
