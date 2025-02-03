import { Button } from "@/Components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import React from "react";
import ExploreButton from "../Components/ExploreButton";
import SectionLabel from "../Components/SectionLabel";

const AboutSection = () => {
    return (
        <div className="w-full lg:flex space-y-24 sm:space-y-0 px-12 py-24   ">
            <div className="flex-1 gap-8 flex flex-col justify-between ">
                <SectionLabel
                    label="About Us"
                    icon={<Info className="text-muted-foreground w-5 h-5" />}
                />
                <div className="hidden sm:block text-sm text-muted-foreground pb-24">
                    <p className="max-w-96">
                        Join us on unforgettable wildlife adventures, from lush
                        rainforests to vibrant savannas. Our guided tours
                        celebrate nature, promote conservation, and immerse you
                        in breathtaking destinations.
                    </p>
                </div>
            </div>
            <div className="flex-1 space-y-12">
                <p className="text-4xl sm:text-5xl text-muted-foreground">
                    <span className="font-medium text-secondary">
                        Wildlife tours
                    </span>{" "}
                    offer a profound connection to{" "}
                    <span className="font-medium text-secondary">
                        nature's beauty
                    </span>{" "}
                    and{" "}
                    <span className="font-medium text-secondary">
                        incredible creatures
                    </span>{" "}
                    with wonder and a sense of adventure
                </p>
                <div>
                    <ExploreButton href={"/explore"} />
                </div>
            </div>
        </div>
    );
};

export default AboutSection;
