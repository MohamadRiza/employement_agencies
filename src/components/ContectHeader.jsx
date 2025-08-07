import {
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const ContectHeader = () => {
  return (
    <div className="bg-gray-900 w-full py-2 px-4 sm:px-6 lg:px-8 md:sticky md:top-0 z-50 shadow-sm">
      <div className="flex flex-col md:flex-row items-center justify-between gap-3 max-w-7xl mx-auto text-sm">
        {/* Contact Info */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-6 text-white">
          <div className="flex items-center gap-1 truncate max-w-xs sm:max-w-none">
            <FaMapMarkerAlt className="text-blue-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm leading-tight">
              <span className="font-semibold">Location:</span>{" "}
              <a href="#">
                ABC Agencies (PVT) LTD. No:01, Colombo Road, Narammala, Sri
                Lanka
              </a>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <FaEnvelope className="text-blue-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm truncate">
              <span className="font-semibold">Email:</span>{" "}
              <a href="mailto:agency@gmail.com">agency@gmail.com</a>
            </span>
          </div>

          <div className="flex items-center gap-1">
            <FaPhoneAlt className="text-blue-600 flex-shrink-0" />
            <span className="text-xs sm:text-sm">
              <span className="font-semibold">Mobile:</span>{" "}
              <a href="tel:0123456789">012 345 6789</a>
            </span>
          </div>
        </div>

        {/* Social Icons */}
        <div className="flex items-center gap-3 mt-2 md:mt-0">
          <span className="font-semibold text-white text-xs sm:text-sm whitespace-nowrap">
            Follow us:
          </span>
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Facebook"
            className="text-blue-600 hover:text-blue-800 transition"
          >
            <FaFacebookF size={16} />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on Instagram"
            className="text-pink-500 hover:text-pink-700 transition"
          >
            <FaInstagram size={16} />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Follow us on LinkedIn"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedinIn size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContectHeader;
