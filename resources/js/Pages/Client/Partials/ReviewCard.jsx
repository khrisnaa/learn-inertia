import { Avatar, AvatarImage } from "@/Components/ui/avatar";
import { cn } from "@/lib/utils";
import { ArrowDown, ArrowUp, Star, StarHalf } from "lucide-react";
import React, { useState } from "react";
import ReviewImageCarousel from "../Components/ReviewImageCarousel";
import { Button } from "@/Components/ui/button";

const ReviewCard = ({ review }) => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div className="w-full rounded-lg border border-secondary  space-y-8 px-8 py-4">
            <div className="flex gap-4 items-center">
                <Avatar>
                    <AvatarImage
                        src={
                            review.user.avatar
                                ? `/storage/${review.user.avatar}`
                                : "https://github.com/khrisnaa.png"
                        }
                        alt="avatar"
                    />
                </Avatar>
                <div>
                    <h4 className="font-medium text-lg ">{review.user.name}</h4>
                    <p className="text-sm text-gray-300">
                        {review.user.city}, {review.user.country}
                    </p>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-sm">"{review.comment}"</p>
                <div className="flex items-center">
                    {Array.from({ length: review.rating }).map((_, i) => (
                        <Star key={i} className="h-4 w-4" />
                    ))}
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
                    <ReviewImageCarousel images={review.images} />
                </div>
            </div>
        </div>
    );
};

export default ReviewCard;
