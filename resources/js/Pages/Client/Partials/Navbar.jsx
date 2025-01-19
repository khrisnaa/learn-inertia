import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import { Separator } from "@/Components/ui/separator";
import React from "react";

const Navbar = () => {
    return (
        <div className="flex justify-between items-center  h-14 ">
            <div className="flex items-center gap-2">
                <div className="relative size-12 overflow-hidden rounded-lg">
                    <img
                        src="/assets/logo.jpg"
                        className="object-cover scale-125"
                    />
                </div>
                <span className="text-2xl  uppercase font-grotesk">DREDGE</span>
            </div>
            <nav className="flex bg-black/20 py-2 backdrop-blur-lg h-12 px-6 rounded-3xl items-center space-x-4 text-sm">
                <div>Home</div>
                <Separator orientation="vertical" />
                <div>Explore</div>
                <Separator orientation="vertical" />
                <div>Wishlist</div>
                <Separator orientation="vertical" />
                <div>Contact Us</div>
            </nav>
            <div className="flex gap-3 items-center">
                <Button variant="secondary" className="px-6 h-12 rounded-3xl">
                    Book A Call
                </Button>
                <Avatar>
                    <AvatarImage src="https://github.com/khrisnaa.png" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>
    );
};

export default Navbar;
