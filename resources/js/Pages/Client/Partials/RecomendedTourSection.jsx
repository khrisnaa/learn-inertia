import React, { useState } from "react";
import SectionLabel from "../Components/SectionLabel";
import { ArrowRight, Binoculars, CircleArrowUp } from "lucide-react";
import { ScrollArea } from "@/Components/ui/scroll-area";
import ParallaxCarousel from "./ParallaxCarousel";
import categories from "@/data/categories";
import packageTours from "@/data/package-tours.json";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";

const RecomendedTourSection = () => {
    const [activeSlide, setActiveSlide] = useState(0);
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
                            {categories.map((category, i) => (
                                <a href="#" className="text-3xl">
                                    {category.name}
                                </a>
                            ))}
                        </div>
                        <div className="bg-gradient-to-t z-[2] from-accent-primary/80 via-accent-primary/60 to-transparent w-96 h-2/3 absolute bottom-0 right-0" />
                    </ScrollArea>
                </div>
            </div>
            <div className=" w-full justify-between flex py-12">
                <div className="p-12 py-24 flex-[0.4] flex flex-col justify-end">
                    {packageTours.map((tour, i) => {
                        return (
                            <motion.div
                                className={`flex-col  cursor-pointer group transition-all duration-500 ease-in-out transform ${
                                    activeSlide === i ? "flex" : "hidden"
                                }`}
                                initial={{ opacity: 0 }}
                                animate={{
                                    opacity: activeSlide === i ? 1 : 0,
                                }}
                                transition={{
                                    duration: 0.6,
                                    ease: [0.25, 0.8, 0.25, 1],
                                }}
                                key={i}
                            >
                                <p className={cn("text-xl tracking-custom")}>
                                    {tour.package_name}
                                </p>
                                <div className={cn("flex gap-4")}>
                                    <p className="text-gray-300">
                                        {tour.location}
                                    </p>
                                    <button
                                        className="h-6 group-hover:ml-4 w-6 disabled:-rotate-180 transition-all duration-500 rounded-full bg-secondary text-primary flex items-center justify-center"
                                        type="button"
                                    >
                                        <ArrowRight className="h-3 w-3" />
                                    </button>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                <div className="flex-1">
                    <ParallaxCarousel
                        setActiveSlide={setActiveSlide}
                        slides={packageTours}
                        options={OPTIONS}
                    />
                </div>
            </div>
        </div>
    );
};

export default RecomendedTourSection;

const OPTIONS = { loop: false };
