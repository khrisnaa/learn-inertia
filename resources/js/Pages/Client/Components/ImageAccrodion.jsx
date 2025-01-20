import { Button } from "@/Components/ui/button";
import { ChevronRight } from "lucide-react";
import React, { useEffect, useState } from "react";
import CategoryButton from "./CategoryButton";

const ImageAccrodion = ({ images }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className="flex gap-4">
            {images.map((image, i) => (
                <div
                    onClick={() => setSelectedIndex(i)}
                    className={`h-[60dvh] rounded-lg cursor-pointer transition-all overflow-hidden duration-500 relative ${
                        selectedIndex == i ? "w-full" : "w-[40vw]"
                    }`}
                >
                    <img src={image} className="object-cover w-full h-full" />
                    <div className="absolute inset-0 p-8 flex flex-col justify-between">
                        <div className="flex justify-end">
                            <div
                                className={`w-64 flex flex-wrap justify-end transition-all duration-700 gap-2 ${
                                    selectedIndex == i
                                        ? "opacity-100 translate-y-0"
                                        : " opacity-0 translate-y-4"
                                }`}
                            >
                                {CATEGORIES.map((category, i) => (
                                    <CategoryButton key={i}>
                                        {category}
                                    </CategoryButton>
                                ))}
                            </div>
                        </div>
                        <div className="space-y-2 z-[2]">
                            <h4
                                className={`line-clamp-2 text-lg  font-medium transition-all duration-500 ${
                                    selectedIndex === i
                                        ? "translate-y-0 "
                                        : "translate-y-4 "
                                } `}
                            >
                                Majestic Creature of the White African
                            </h4>
                            <p
                                className={`text-sm  font-extralight line-clamp-2 transition-all duration-500 ease-in-out transform ${
                                    selectedIndex === i
                                        ? "opacity-100 translate-y-0"
                                        : "opacity-0 translate-y-4"
                                }`}
                            >
                                Lorem ipsum, dolor sit amet consectetur
                                adipisicing elit. Perferendis velit non iure
                                itaque. Deleniti, excepturi corrupti.
                            </p>

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
