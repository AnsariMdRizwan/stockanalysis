import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-900 text-white py-6 mt-10">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    {/* Brand Name */}
                    <div className="text-lg font-bold">
                        StockMarket<span className="text-yellow-400"> Pro</span>
                    </div>

                    {/* Quick Links */}
                    <div className="flex space-x-6 my-4 md:my-0">
                        <Link to="/" className="hover:text-yellow-400 transition">Home</Link>
                        <Link to="/watchlist" className="hover:text-yellow-400 transition">Watchlist</Link>
                        <Link to="/about" className="hover:text-yellow-400 transition">About</Link>
                        <Link to="/contact" className="hover:text-yellow-400 transition">Contact</Link>
                    </div>

                    {/* Social Media Icons */}
                    <div className="flex space-x-4">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className="text-xl hover:text-blue-500 transition" />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className="text-xl hover:text-blue-400 transition" />
                        </a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className="text-xl hover:text-blue-600 transition" />
                        </a>
                        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                            <FaGithub className="text-xl hover:text-gray-400 transition" />
                        </a>
                    </div>
                </div>

                {/* Copyright */}
                <div className="text-center text-gray-400 mt-4 text-sm">
                    © {new Date().getFullYear()} StockMarket Pro. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
