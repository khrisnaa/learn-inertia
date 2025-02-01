import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import ExploreZoomParallax from "../Partials/ExploreZoomParallax";
import ExploreHeadline from "../Partials/ExploreHeadline";
import ContactSection from "../Partials/ContactSection";
import ImageContainer from "../Partials/ImageContainer";
import ExploreLabel from "../Partials/ExploreLabel";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";

const Index = ({ firstTours, secondTours, thirdTours }) => {
    console.log(thirdTours);
    return (
        <ClientLayout>
            <ExploreHeadline />
            <ExploreZoomParallax />
            <div className="h-[50vh]" />
            <div>
                <ExploreLabel
                    title={"Wildlife Ranforest"}
                    description={
                        "Discover the beauty of rainforests and wildlife in an unforgettable adventure."
                    }
                />
                <div className="px-12 py-4 h-screen">
                    <div className="grid h-full grid-cols-5 grid-rows-2 gap-8">
                        {firstTours.map((tour, i) => (
                            <ImageContainer
                                key={i}
                                tour={tour}
                                className={cn(
                                    i == 0
                                        ? "col-span-3 row-span-2"
                                        : "col-span-2 row-span-1"
                                )}
                            />
                        ))}
                    </div>
                </div>
                <ExploreLabel
                    title={"Savanna & Desert"}
                    description={
                        " Explore vast deserts and savannas, home to unique wildlife and stunning landscapes."
                    }
                />
                <div className="px-12 py-4 h-screen">
                    <div className="grid h-full grid-cols-12 grid-rows-4 gap-8">
                        {secondTours.map((tour, i) => (
                            <ImageContainer
                                key={i}
                                tour={tour}
                                className={cn(
                                    i == 0 || i == 1
                                        ? "col-span-6 row-span-2"
                                        : "col-span-4 row-span-2"
                                )}
                            />
                        ))}
                    </div>
                </div>
                <ExploreLabel
                    title={"Beach & Island"}
                    description={
                        "Relax on pristine beaches and islands, perfect for unwinding and adventure alike."
                    }
                />
                <div className="px-12 py-4 h-screen">
                    <div className="grid h-full grid-cols-6 grid-rows-6 gap-8">
                        {thirdTours.map((tour, i) => (
                            <ImageContainer
                                key={i}
                                tour={tour}
                                className={cn(
                                    i == 0
                                        ? "col-span-4 row-span-3"
                                        : "col-span-2 row-span-3"
                                )}
                            />
                        ))}
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <ContactSection />
            </div>
        </ClientLayout>
    );
};

export default Index;
