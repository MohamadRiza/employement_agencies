import React from "react";
import { Button } from "@/components/ui/button"; // shadcn UI button
import { Link } from "react-router-dom"; // If using react-router for navigation

const Navbar = () => {
    const [menuOpen, setMenuOpen] = React.useState(false);

    return (
        <nav className="bg-white shadow-md px-6 py-4 flex items-center justify-between flex-wrap">
            {/* Logo Section */}
            <div className="flex items-center space-x-3">
                <img
                    src="https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg"
                    alt="Logo"
                    className="h-12 w-12 object-contain"
                />
                <span className="font-bold text-xl text-gray-800">Manpower Agencies</span>
            </div>
            {/* Hamburger Icon for mobile */}
            <button
                className="block md:hidden ml-auto text-gray-700 focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
                aria-label="Toggle menu"
            >
                <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            </button>
            {/* Navigation Buttons */}
            <div className={`flex-col md:flex-row md:flex space-y-2 md:space-y-0 md:space-x-4 w-full md:w-auto ${menuOpen ? "flex" : "hidden"} md:items-center md:justify-end mt-4 md:mt-0`}>
                <Link to="/">
                    <Button variant="outline" className="w-full md:w-auto">Home</Button>
                </Link>
                <Link to="/about">
                    <Button variant="outline" className="w-full md:w-auto">About Us</Button>
                </Link>
                <Link to="/contact">
                    <Button variant="outline" className="w-full md:w-auto">Contact Us</Button>
                </Link>
            </div>
        </nav>
    );
};

export default Navbar;