import { Separator } from "@/Components/ui/separator";
import { cn } from "@/lib/utils";
import { Link, usePage } from "@inertiajs/react";
import { Contact, Heart, Home, Map, Phone } from "lucide-react";
import React from "react";

const MobileNav = () => {
    const { url } = usePage();
    const isActive = (path) => url === path;
    return (
        <div className="sm:hidden z-50 fixed bottom-0 left-0 w-ful px-4 py-4 w-full">
            <nav className="flex bg-white max-w-96 mx-auto py-2 px-4 sm:px-12 rounded-full justify-between">
                <Link
                    href="/home"
                    className={cn(
                        "p-2 rounded-full ",
                        isActive("/home") ? "bg-primary" : "text-primary"
                    )}
                >
                    <Home className="size-5 sm:size-6" />
                </Link>
                <Separator orientation="vertical" />
                <Link
                    href="/explore"
                    className={cn(
                        "p-2 rounded-full ",
                        isActive("/explore") ? "bg-primary" : "text-primary"
                    )}
                >
                    <Map className="size-5 sm:size-6" />
                </Link>
                <Separator orientation="vertical" />
                <Link
                    href="/wishlist"
                    className={cn(
                        "p-2 rounded-full ",
                        isActive("/wishlist") ? "bg-primary" : "text-primary"
                    )}
                >
                    <Heart className="size-5 sm:size-6" />
                </Link>
                <Separator orientation="vertical" />
                <Link
                    href="/contact-us"
                    className={cn(
                        "p-2 rounded-full",
                        isActive("/contact-us") ? "bg-primary" : "text-primary"
                    )}
                >
                    <Phone className="size-5 sm:size-6" />
                </Link>
            </nav>
        </div>
    );
};

export default MobileNav;
