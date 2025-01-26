import { Button } from "@/Components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";

const ImageAccrodion = ({ testimonials }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex gap-4">
            {testimonials.map((testimonial, i) => (
                <div
                    onClick={() => setSelectedIndex(i)}
                    className={`h-[60dvh] rounded-lg cursor-pointer transition-all overflow-hidden duration-500 relative ${
                        selectedIndex == i ? "w-full" : "w-[40vw]"
                    }`}
                >
                    <img
                        src={testimonial.image}
                        className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <div
                                className={`w-64 flex flex-wrap justify-end transition-all duration-700 gap-2 ${
                                    selectedIndex == i
                                        ? "opacity-100 translate-y-0"
                                        : " opacity-0 translate-y-4"
                                }`}
                            ></div>
                        </div>
                        <div className="space-y-4 z-[2]">
                            <div className="space-y-2">
                                <h4
                                    className={`line-clamp-2 italic  text-lg  font-medium transition-all duration-500 ${
                                        selectedIndex === i
                                            ? "translate-y-0"
                                            : "translate-y-2 "
                                    } `}
                                >
                                    "{testimonial.testimonial}"
                                </h4>
                                <div
                                    className={`text-sm font-extralight pb-2 line-clamp-2 transition-all duration-500 ease-in-out transform ${
                                        selectedIndex === i
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-4 hidden"
                                    }`}
                                >
                                    <p className="text-secondary">
                                        {testimonial.name}
                                    </p>
                                    <span className="text-xs ">
                                        {testimonial.location}
                                    </span>
                                </div>
                            </div>

                            <Button
                                variant="secondary"
                                className={`rounded-full   text-sm w-full flex justify-between ${
                                    selectedIndex == i
                                        ? ""
                                        : "bg-transparent border border-secondary text-secondary"
                                }`}
                            >
                                <span>More Details</span>
                                <ChevronRight />
                            </Button>
                        </div>
                        <div className="absolute z-[1] inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ImageAccrodion;

const CATEGORIES = ["Wildlife", "Adventure", "Mountain", "Fresh"];
