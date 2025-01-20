import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { ArrowRight, Binoculars, CircleArrowUp } from "lucide-react";
import { ScrollArea } from "@/Components/ui/scroll-area";
import ParallaxCarousel from "./ParallaxCarousel";

const RecomendedTourSection = () => {
    return (
        <div className="bg-accent-primary">
            <div className="flex h-[50dvh]  p-12">
                <div className="flex-1 space-y-8">
                    <SectionLabel
                        label="For You"
                        icon={
                            <CircleArrowUp className="text-muted-foreground rotate-90 w-5 h-5" />
                        }
                    />
                    <p className="font-light text-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat!
                    </p>
                </div>
                <div className="flex-1 flex justify-end h-full ">
                    <ScrollArea className="w-96 relative">
                        <div className="flex flex-col z-[1] relative items-end gap-4 p-4 px-8">
                            {CATEGORIES.map((category, i) => (
                                <a href="#" className="text-3xl">
                                    {category}
                                </a>
                            ))}
                        </div>
                        <div className="bg-gradient-to-t z-[2] from-accent-primary/80 via-accent-primary/60 to-transparent w-96 h-2/3 absolute bottom-0 right-0" />
                    </ScrollArea>
                </div>
            </div>
            <div className=" w-full justify-between flex py-12">
                <div className="p-12 py-24 flex-[0.4] flex flex-col justify-end">
                    <div className="flex flex-col cursor-pointer group">
                        <p className="text-xl tracking-custom">
                            Two Black Cocks Mountain
                        </p>
                        <div className="flex gap-4">
                            <p className="text-muted-foreground">
                                Bandung, Sout East Africa
                            </p>
                            <button
                                className=" h-6 group-hover:ml-4  w-6 disabled:-rotate-180 transition-all duration-500 rounded-full bg-secondary text-primary flex items-center justify-center"
                                type="button"
                            >
                                <ArrowRight className="h-3 w-3" />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="flex-1">
                    <ParallaxCarousel slides={IMAGES} options={OPTIONS} />
                </div>
            </div>
        </div>
    );
};

export default RecomendedTourSection;

const CATEGORIES = [
    "Wildlife",
    "Adventure",
    "Mountain",
    "Fresh",
    "Nature",
    "Tree",
    "Sky",
];

const OPTIONS = { loop: false };

const IMAGES = [
    "/assets/images/dummy_hero.jpg",
    "/assets/images/image_2.jpeg",
    "/assets/images/image_3.jpeg",
    "/assets/images/image_5.jpeg",
];
