import React, { useState } from "react";
import SectionLabel from "../Components/SectionLabel";
import { ArrowRight, CircleArrowUp } from "lucide-react";
import ParallaxCarousel from "./ParallaxCarousel";
import { cn } from "@/lib/utils";
import { motion } from "motion/react";
import CategoryScroll from "./CategoryScroll";

const RecomendedTourSection = (props) => {
    const { recommendedTours: tours, categories } = props;
    const [activeSlide, setActiveSlide] = useState(0);
    return (
        <div className="bg-accent-primary">
            <div className="flex h-[50dvh] p-12">
                <div className="flex-1 space-y-8">
                    <SectionLabel
                        label="For You"
                        icon={
                            <CircleArrowUp className="text-muted-foreground rotate-90 w-5 h-5" />
                        }
                    />
                    <p className="font-light text-3xl sm:text-4xl md:text-5xl">
                        Discover unforgettable wildlife adventures crafted just
                        for you. Explore now!
                    </p>
                </div>
                <div className="flex-1 hidden sm:flex justify-end h-full ">
                    <CategoryScroll categories={categories} />
                </div>
            </div>
            <div className="w-full justify-between flex flex-col sm:flex-row  sm:py-12">
                <div className="p-12 sm:py-24 flex-[0.4] flex flex-col justify-end">
                    {tours.map((tour, i) => {
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
                                    {tour.name}
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
                        slides={tours}
                        options={OPTIONS}
                    />
                </div>
            </div>
        </div>
    );
};

export default RecomendedTourSection;

const OPTIONS = { loop: false };
