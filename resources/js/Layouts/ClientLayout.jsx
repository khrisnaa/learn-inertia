import Navbar from "@/Pages/Client/Partials/Navbar";
import React from "react";

const ClientLayout = ({ children }) => {
    return (
        <main className="bg-primary relative  min-h-screen text-secondary ">
            <div className="p-6 px-12 fixed top-0 left-0 w-full z-50">
                <Navbar />
            </div>
            {children}
        </main>
    );
};

export default ClientLayout;
