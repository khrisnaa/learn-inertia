import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const FaqCard = () => {
    return (
        <div className="group transition-all duration-500 hover:border-none cursor-pointer">
            <div className="rounded-lg h-24 relative before:absolute before:bottom-0 before:h-[.5px] before:w-full before:left-0 before:bg-gray-400 transition-all duration-500 group-hover:before:w-0 before:transition-all before:duration-500  p-4 group-hover:bg-accent-primary flex justify-between items-center">
                <span>2015</span>
                <h4 className="text-lg max-w-xs">
                    Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.
                </h4>
                <Button
                    variant="secondary"
                    className="h-8 w-8 group-hover:bg-secondary transition-all duration-700 group-hover:-rotate-45 group-hover:text-primary rounded-full bg-transparent border border-secondary text-secondary"
                    type="button"
                >
                    <ArrowRight />
                </Button>
            </div>
        </div>
    );
};

export default FaqCard;
