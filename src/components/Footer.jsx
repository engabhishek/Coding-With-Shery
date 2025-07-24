import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="relative text-white px-6 py-12">
      <div className="my-10 mb-28 mx-8">
        <hr />
      </div>
      <div className="w-64 h-64 absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white opacity-10 blur-3xl rounded-full pointer-events-none z-0"></div>

      <div className="relative z-10 grid gap-20 m-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-[2fr,1fr,1fr,1fr]">
        <div>
          <img
            src="public/the_sheryians_coding_school_logo.png"
            alt="Logo"
            className="w-24 h-24 mb-3"
          />
          <p className="mb-8 font-mono font-semibold">
            Let's connect with our socials
          </p>
          <div className="flex flex-wrap items-center gap-6 lg:gap-20 mb-6 lg:mb-4">
            <a
              href="https://www.instagram.com/sheryians_coding_school"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/instagram-new--v1.png"
                alt="Instagram"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.linkedin.com/company/the-sheryians-coding-school?originalSubdomain=in"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/linkedin.svg"
                alt="LinkedIn"
                className="w-5 h-5 invert"
              />
            </a>
            <a
              href="https://discord.gg/D23JkFqrgz"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.simpleicons.org/discord/FFFFFF"
                alt="Discord"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://www.youtube.com/@sheryians"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.simpleicons.org/youtube/FFFFFF"
                alt="YouTube"
                className="w-6 h-6"
              />
            </a>
            <a
              href="https://twitter.com/sheryians_"
              target="_blank"
              rel="noreferrer"
            >
              <img
                src="https://cdn.jsdelivr.net/npm/simple-icons@v10/icons/twitter.svg"
                alt="Twitter"
                className="w-6 h-6 invert"
              />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-6 text-xl">COMPANY</h3>
          <ul className="space-y-4">
            <li className="hover:scale-95 transition-transform">
              <a
                href="https://sheryians.com/aboutUs"
                target="_blank"
                rel="noopener noreferrer"
              >
                About Us
              </a>
            </li>
            <li className="hover:scale-95 transition-transform">
              <a href="mailto:hello@sheryians.com">Support</a>
            </li>
            <li className="hover:scale-95 transition-transform">
              <a
                href="https://sheryians.com/terms-and-conditions/Terms_and_Conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Privacy Policy
              </a>
            </li>
            <li className="hover:scale-95 transition-transform">
              <a
                href="https://sheryians.com/terms-and-conditions/Terms_and_Conditions.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Terms and Condition
              </a>
            </li>
            <li className="hover:scale-95 transition-transform">
              <a
                href="https://sheryians.com/Pricing%26Refund-Policy/Pricing-and-Refund_policy.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                Pricing and Refund
              </a>
            </li>
            <li className="hover:scale-95 transition-transform">
              <a
                href="https://sheryians.com/hire"
                target="_blank"
                rel="noopener noreferrer"
              >
                Hire From Us
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3 text-xl">COMMUNITY</h3>
          <ul className="space-y-2">
            <li className="hover:scale-95 transition-transform">
              <Link to="/discord">Discord</Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-6 text-xl">Get In Touch</h3>
          <div className="space-y-4 text-sm">
            <a href="tel:+919691778470" className="hover:text-blue-200 block">
              +91 9691778470
            </a>
            <a href="tel:+918109161752" className="hover:text-blue-200 block">
              +91 8109161752
            </a>
            <a
              href="mailto:hello@sheryians.com"
              className="hover:text-blue-200 block"
            >
              hello@sheryians.com
            </a>
            <a
              href="https://maps.google.com/?q=23-B, Indrapuri Sector C, Bhopal (MP), 462021"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 block"
            >
              23-B, Indrapuri Sector C,
              <br />
              Bhopal (MP), 462021
            </a>
          </div>
        </div>
      </div>
      <div className="my-10 mx-8">
        <hr />
      </div>
      <p className="text-sm text-gray-300 text-center font-semibold py-4">
        © {new Date().getFullYear()} Sheryians{" "}
        <span className="text-red-500">Coding</span> School. <br /> All rights
        reserved.
      </p>
    </footer>
  );
};

export default Footer;
