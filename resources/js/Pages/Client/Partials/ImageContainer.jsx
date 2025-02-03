import { cn } from "@/lib/utils";
import React from "react";
import CategoryButton from "../Components/CategoryButton";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";

const ImageContainer = ({ className, tour }) => {
    return (
        <Link
            href={`/explore/${tour.id}`}
            className={cn(
                "relative overflow-hidden h-full group rounded-lg",
                className
            )}
        >
            <img
                src={`/storage/${tour.thumbnail}`}
                className="object-cover w-full scale-110 group-hover:scale-100 transition-all duration-500 h-full"
            />
            <div className="absolute  cursor-pointer p-2 sm:p-8 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-between inset-0">
                <div>
                    <div className="sm:flex hidden flex-wrap -translate-x-[150%] group-hover:translate-x-0 transition-all duration-700 max-w-56 gap-2">
                        {tour.categories.map((category, i) => (
                            <CategoryButton key={i}>
                                {category.name}
                            </CategoryButton>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="space-y-1">
                        <div className="gap-2 flex">
                            <span className="text-lg sm:text-2xl line-clamp-2 font-bold">
                                {tour.name}
                            </span>
                            <button className="rounded-full h-8 w-8 bg-secondary text-primary group-hover:-rotate-45 transition-all duration-500 p-2">
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                        <p className="text-xs font-light">{tour.location}</p>
                        <p className="line-clamp-2 hidden sm:block text-sm">
                            {tour.overview}
                        </p>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default ImageContainer;
