import { cn } from "@/lib/utils";
import React from "react";
import CategoryButton from "../Components/CategoryButton";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Button } from "@/Components/ui/button";

const ImageContainer = ({ className }) => {
    return (
        <div
            className={cn(
                "relative overflow-hidden group rounded-lg",
                className
            )}
        >
            <img
                src="/assets/images/dummy_hero.jpg"
                className="object-cover w-full scale-110 group-hover:scale-100 transition-all duration-500 h-full"
            />
            <div className="absolute  cursor-pointer p-8 bg-gradient-to-t from-black/50 via-transparent to-transparent flex flex-col justify-between inset-0">
                <div>
                    <div className="flex flex-wrap -translate-x-[150%] group-hover:translate-x-0 transition-all duration-700 max-w-56 gap-2">
                        {CATEGORIES.map((category, i) => (
                            <CategoryButton key={i}>{category}</CategoryButton>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="space-y-1">
                        <div className="space-x-2">
                            <span className="text-2xl font-bold">
                                Morning in hell with tony
                            </span>
                            <button className="rounded-full bg-primary text-secondary group-hover:-rotate-45 transition-all duration-500 p-2">
                                <ArrowRight className="h-4 w-4" />
                            </button>
                        </div>
                        <p className="text-xs font-light">
                            Lorem, ipsum dolor.
                        </p>
                        <p className="line-clamp-2 text-sm">
                            Lorem, ipsum dolor sit amet consectetur adipisicing
                            elit. Distinctio quae laborum dolore earum placeat
                            nemo?
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageContainer;

const CATEGORIES = ["Wildlife", "Adventure", "Mountain", "Fresh"];
