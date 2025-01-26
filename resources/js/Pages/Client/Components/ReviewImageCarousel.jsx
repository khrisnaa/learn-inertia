import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import React from "react";

const ReviewImageCarousel = () => {
    return (
        <Carousel className="pb-12">
            <CarouselContent>
                {Array.from({ length: 5 }).map((_, i) => (
                    <CarouselItem>
                        <div className="relative overflow-hidden rounded-lg max-h-64">
                            <img
                                src="/assets/images/dummy_hero.jpg"
                                className="object-contain w-full h-full"
                            />
                        </div>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <CarouselPrevious className="right-10 bottom-0" />
            <CarouselNext className="right-0 bottom-0" />
        </Carousel>
    );
};

export default ReviewImageCarousel;
