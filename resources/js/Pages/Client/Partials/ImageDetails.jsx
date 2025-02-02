import { Button } from "@/Components/ui/button";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";
import { router } from "@inertiajs/react";
import { Plus } from "lucide-react";
import React from "react";

const ImageDetails = ({ tour }) => {
    const handleClick = () => {
        router.post("/wishlist", { id: tour.id });
    };
    return (
        <div className="grid grid-cols-5 gap-4">
            <div className="col-span-3 h-[80vh] relative overflow-hidden rounded-lg">
                <img
                    src={`/storage/${tour.thumbnail}`}
                    className="object-cover w-full h-full"
                />
                <Button
                    onClick={handleClick}
                    variant="secondary"
                    className="absolute rounded-full left-0 bottom-0 m-4"
                >
                    Wishlist <Plus />
                </Button>
            </div>
            <div className="col-span-2 relative">
                <Carousel orientation="vertical" className="relative">
                    <CarouselContent className="h-[82vh] p-0 mb-0 ">
                        {tour.images.map((image, i) => (
                            <CarouselItem key={i} className="basis-1/2 ">
                                <div className="row-span-1 relative  h-[38vh] overflow-hidden rounded-lg">
                                    <img
                                        src={`/storage/${image.image_url}`}
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
