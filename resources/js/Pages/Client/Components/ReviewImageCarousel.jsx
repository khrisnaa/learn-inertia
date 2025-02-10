import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import React from "react";

const ReviewImageCarousel = ({ images }) => {
    return (
        <Carousel className="pb-12">
            <CarouselContent>
                {images.map((image, i) => (
                    <CarouselItem key={i}>
                        <div className="relative overflow-hidden rounded-lg max-h-64">
                            <img
                                src={`/storage/${image.image_url}`}
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
