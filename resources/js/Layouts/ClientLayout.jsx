import Footer from "@/Pages/Client/Partials/Footer";
import Navbar from "@/Pages/Client/Partials/Navbar";
import React, { useEffect, useState } from "react";

const ClientLayout = ({ children }) => {
    const [showNavbar, setShowNavbar] = useState(true);
    let lastScrollY = 0;

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            setShowNavbar(scrollY < 300 || scrollY < lastScrollY);
            lastScrollY = scrollY;
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <main className="bg-primary relative  min-h-screen text-secondary ">
            <div
                className={`p-6 px-12 fixed top-0 left-0 w-full z-50 transition-transform duration-1000 ${
                    showNavbar ? "translate-y-0" : "-translate-y-full"
                }`}
            >
                <Navbar />
            </div>
            {children}
            <div className="px-12 bg-accent-primary">
                <Footer />
            </div>
        </main>
    );
};

export default ClientLayout;
