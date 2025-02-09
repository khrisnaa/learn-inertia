import Dropdown from "@/Components/Dropdown";
import { Avatar, AvatarFallback, AvatarImage } from "@/Components/ui/avatar";
import { Button } from "@/Components/ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "@/Components/ui/dropdown-menu";
import { Separator } from "@/Components/ui/separator";
import { Link, usePage } from "@inertiajs/react";
import React from "react";

const Navbar = () => {
    const { auth } = usePage().props;
    return (
        <div className="flex justify-between items-center  h-14">
            <div className="flex items-center gap-2">
                <div className="relative size-8 md:size-10 lg:size-12 overflow-hidden rounded-lg">
                    <img
                        src="/assets/logo.jpg"
                        className="object-cover scale-125"
                    />
                </div>
                <span className="text-base md:text-xl lg:text-2xl  uppercase font-grotesk">
                    DREDGE
                </span>
            </div>
            <nav className="hidden sm:flex bg-black/20 py-2 backdrop-blur-lg h-12 px-6 rounded-3xl items-center space-x-4 text-xs lg:text-sm">
                <Link href="/">Home</Link>
                <Separator orientation="vertical" />
                <Link href="/explore">Explore</Link>
                <Separator orientation="vertical" />
                <Link href="/wishlist">Wishlist</Link>
                <Separator orientation="vertical" />
                <Link href="/contact-us">Contact Us</Link>
            </nav>
            <div className="flex gap-3 items-center">
                <Button
                    variant="secondary"
                    className="md:px-6 md:h-12 text-xs lg:text-sm rounded-3xl"
                >
                    Book A Tour
                </Button>
                {auth.user ? (
                    <Dropdown>
                        <Dropdown.Trigger>
                            <Avatar className="cursor-pointer size-8 md:size-10">
                                <AvatarImage src="https://github.com/khrisnaa.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </Dropdown.Trigger>
                        <Dropdown.Content>
                            <Dropdown.Link href={route("profile.edit")}>
                                Profile
                            </Dropdown.Link>
                            <Dropdown.Link
                                href={route("logout")}
                                method="post"
                                as="button"
                            >
                                Log Out
                            </Dropdown.Link>
                        </Dropdown.Content>
                    </Dropdown>
                ) : (
                    <Link
                        className="text-base px-4 hover:text-primary hover:scale-105 transition-all duration-300"
                        href={route("login")}
                    >
                        Log in
                    </Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
