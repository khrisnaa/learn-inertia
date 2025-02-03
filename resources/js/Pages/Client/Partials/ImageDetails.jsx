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
import React, { useEffect, useState } from "react";

const ImageDetails = ({ tour }) => {
    const handleClick = () => {
        router.post("/wishlist", { id: tour.id });
    };

    const [isMobile, setMobile] = useState(true);

    useEffect(() => {
        const handleResize = () => {
            setMobile(window.innerWidth < 768);
        };

        window.addEventListener("resize", handleResize);
        handleResize();

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className="md:grid grid-cols-5 flex flex-col gap-4">
            <div className="md:col-span-3 h-[40vh] sm:h-[80vh] relative overflow-hidden rounded-lg">
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
            <div className="md:col-span-2 relative">
                <Carousel
                    orientation={isMobile ? "horizontal" : "vertical"}
                    className="relative"
                >
                    <CarouselContent className="h-[28vh] md:h-[82vh] p-0 mb-0 ">
                        {tour.images.map((image, i) => (
                            <CarouselItem key={i} className="basis-1/2 ">
                                <div className="row-span-1 relative h-[20vh] md:h-[38vh] overflow-hidden rounded-lg">
                                    <img
                                        src={`/storage/${image.image_url}`}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselNext className="right-4 absolute bottom-0 md:bottom-4" />
                    <CarouselPrevious className="md:right-4 bottom-0 right-16 md:bottom-16 absolute" />
                </Carousel>
            </div>
        </div>
    );
};

export default ImageDetails;
