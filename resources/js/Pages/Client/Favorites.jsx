import ClientLayout from "@/Layouts/ClientLayout";
import { CircleCheck } from "lucide-react";
import React, { useState } from "react";
import SectionLabel from "./Components/SectionLabel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Contact from "./Contact";
import ContactSection from "./Partials/ContactSection";

const Favorites = () => {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <ClientLayout>
            <div className="h-screen grid grid-cols-2 gap-2 px-12 pt-28 py-24">
                <div className="h-full w-full space-y-8 sticky top-0">
                    <SectionLabel
                        label="Your Favorites"
                        icon={
                            <CircleCheck className="text-muted-foreground  w-5 h-5" />
                        }
                    />
                    <p className="font-light text-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat!
                    </p>
                </div>
                <div className="col-span-1"></div>
                <div className="col-span-1 h-[80vh] select-none">
                    <div className="grid grid-rows-4 gap-4 w-full h-full ">
                        <div className="cursor-pointer relative overflow-hidden rounded-lg row-span-3">
                            <img
                                src="/assets/images/dummy_hero.jpg"
                                className="object-cover w-full h-full"
                            />
                            <span className="absolute text-3xl font-bold inset-0 flex justify-center items-center">
                                {(selectedIndex + 1)
                                    .toString()
                                    .padStart(2, "0")}
                            </span>
                        </div>
                        <div className=" row-span-1 rounded-lg ">
                            <Carousel>
                                <CarouselContent className="h-full bg-black">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <CarouselItem className="basis-1/3 h-full">
                                            <div
                                                onClick={() =>
                                                    setSelectedIndex(i)
                                                }
                                                className="cursor-pointer relative overflow-hidden rounded-lg "
                                            >
                                                <img
                                                    src="/assets/images/dummy_hero.jpg"
                                                    className="object-cover w-full h-full"
                                                />
                                                <span className="absolute text-xl font-bold inset-0 flex justify-center items-center">
                                                    {(i + 1)
                                                        .toString()
                                                        .padStart(2, "0")}
                                                </span>
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection />
        </ClientLayout>
    );
};

export default Favorites;
