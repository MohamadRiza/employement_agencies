import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate("/about");
    };

    return (
        <footer className="bg-gray-900 text-white py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-row justify-between items-start gap-10">
                    {/* Left Side */}
                    <div className="flex-1 min-w-[220px] flex flex-col items-start">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                            alt="Website Logo"
                            className="w-24 mb-4"
                        />
                        <p className="text-gray-300 text-base leading-relaxed">
                            ABC PVT LTD is a leading manpower agency in Sri Lanka, connecting skilled professionals with top employers.
                            <button
                                onClick={handleReadMore}
                                className="ml-2 text-cyan-400 underline hover:text-cyan-300 transition"
                                type="button"
                            >
                                Read more
                            </button>
                        </p>
                    </div>

                    {/* Center - Quick Links */}
                    <div className="w-[220px] flex flex-col items-center">
                        <h4 className="mb-4 font-semibold text-lg">Quick Links</h4>
                        <ul className="list-none p-0 m-0 space-y-3">
                            <li>
                                <Link to="/" className="text-white hover:text-cyan-400 transition text-base">
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" className="text-white hover:text-cyan-400 transition text-base">
                                    About
                                </Link>
                            </li>
                            <li>
                                <Link to="/contact" className="text-white hover:text-cyan-400 transition text-base">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Right Side */}
                    <div className="flex-1 min-w-[220px] flex flex-col items-end text-right">
                        <h4 className="mb-4 font-semibold text-lg">Contact Us</h4>
                        <p className="my-1 text-base">
                             ABC PVT LTD
                        </p>
                        <p className="my-1 text-base">
                             No: 00, Colombo Road, Narammala, Sri Lanka
                        </p>
                        <p className="my-1 text-base">
                           0123456789
                        </p>
                        <p className="my-1 text-base">
                            agency@email.com
                        </p>
                    </div>
                </div>
                <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-400">
                    &copy; {new Date().getFullYear()} ABC PVT LTD. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;