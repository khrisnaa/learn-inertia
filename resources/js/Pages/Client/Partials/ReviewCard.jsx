import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, Star, StarHalf } from "lucide-react";
import React, { useState } from "react";
import ReviewImageCarousel from "../Components/ReviewImageCarousel";
import { Button } from "@/Components/ui/button";

const ReviewCard = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full rounded-lg border border-secondary  space-y-8 px-8 py-4">
            <div className="flex gap-4 items-center">
                <Avatar>
                    <AvatarImage
                        src="https://github.com/khrisnaa.png"
                        alt="@shadcn"
                    />
                </Avatar>
                <div>
                    <h4 className="font-medium text-lg ">John Doe</h4>
                    <p className="text-sm text-gray-300">Travel Enthusiast</p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm">
                    "The wildlife tour was an unforgettable experience! The
                    guides were knowledgeable, and the sights were breathtaking.
                    Highly recommended for anyone seeking adventure and a deep
                    connection with nature."
                </p>
                <div className="flex items-center">
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <Star className="h-4 w-4" />
                    <StarHalf className="h-4 w-4" />
                </div>
            </div>
            <div className="flex flex-col  items-end ">
                <Button
                    size="icon"
                    onClick={() => setIsOpen(!isOpen)}
                    className="w-8 h-8 group"
                >
                    <ArrowDown
                        className={cn(
                            "h-4 w-4 cursor-pointer transition-all duration-500",
                            isOpen
                                ? "rotate-180 group-hover:-translate-y-2"
                                : "rotate-0 group-hover:translate-y-2"
                        )}
                    />
                </Button>
                <div
                    className={cn(
                        "transition-all duration-500 overflow-hidden",
                        isOpen ? "max-h-80 mt-8" : "max-h-0"
                    )}
                >
                    <ReviewImageCarousel />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
