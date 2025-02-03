import { ArrowRight } from "lucide-react";
import React from "react";

const ExploreHeadline = () => {
    return (
        <div className="h-[60vh] px-6 sm:px-12 py-24 flex flex-col sm:flex-row items-center justify-between">
            <p className="text-3xl sm:text-5xl text-muted-foreground max-w-2xl">
                <span className="font-medium text-secondary">Wildlife</span> is
                driven by a deep passion for{" "}
                <span className="font-medium text-secondary">
                    capturing nature's
                </span>{" "}
                most{" "}
                <span className="font-medium text-secondary">
                    stunning moments
                </span>{" "}
                with artistry and a touch of magic
            </p>

            <button className="hidden sm:flex group gap-4 h-fit rotate-90">
                Scroll More
                <span className="group-hover:translate-x-4 transition-all duration-500">
                    <ArrowRight />
                </span>
            </button>
        </div>
    );
};

export default ExploreHeadline;
