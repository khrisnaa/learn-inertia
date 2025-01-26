import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import React from "react";

const ImageDetails = () => {
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 h-[80vh] relative overflow-hidden rounded-lg">
                <img
                    src="/assets/images/dummy_hero.jpg"
                    className="object-cover w-full h-full"
                />
            </div>
            <div className="col-span-2 relative">
                <Carousel orientation="vertical" className="relative">
                    <CarouselContent className="h-[82vh] p-0 mb-0 ">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <CarouselItem className="basis-1/2 ">
                                <div className="row-span-1 relative  h-[38vh] overflow-hidden rounded-lg">
                                    <img
                                        src="/assets/images/dummy_hero.jpg"
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="right-4 absolute bottom-4" />
                    <CarouselPrevious className="right-4 bottom-16 absolute" />
                </Carousel>
            </div>
        </div>
    );
};

export default ImageDetails;
