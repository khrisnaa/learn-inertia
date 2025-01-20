import React from "react";

const Footer = () => {
    return (
        <div className="p-4 border-t relative text-xs flex  items-center justify-between border-gray-400">
            <div>DREDGE</div>
            <div className="flex gap-8 absolute left-1/2 -translate-x-1/2 items-center">
                <a href="#" className="relative">
                    Home
                </a>
                <span className="h-5 w-px bg-gray-300"></span>
                <a href="#" className="relative">
                    Explore
                </a>
                <span className="h-5 w-px bg-gray-300"></span>
                <a href="#" className="relative">
                    Whislist
                </a>
                <span className="h-5 w-px bg-gray-300"></span>
                <a href="#" className="relative">
                    Contact us
                </a>
            </div>

            <div>
                © {new Date().getFullYear()} Your Company Name. All rights
                reserved.
            </div>
        </div>
    );
};

export default Footer;
