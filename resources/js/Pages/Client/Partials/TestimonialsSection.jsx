import React, { useEffect, useState } from "react";
import SectionLabel from "../Components/SectionLabel";
import { CircleArrowUp, CircleCheck } from "lucide-react";
import ExploreButton from "../Components/ExploreButton";
import ImageAccrodion from "../Components/ImageAccrodion";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/Components/ui/carousel";

const TestimonialsSection = ({ reviews: testimonials }) => {
    const [chunkSize, setChunkSize] = useState(window.innerWidth < 768 ? 2 : 4);

    useEffect(() => {
        const handleResize = () => {
            setChunkSize(window.innerWidth < 768 ? 2 : 4);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const chunkedTestimonials = Array.from(
        { length: Math.ceil(testimonials.length / chunkSize) },
        (_, i) => testimonials.slice(i * chunkSize, i * chunkSize + chunkSize)
    );

    return (
        <div className="min-h-screen px-6 py-12 sm:p-12 sm:space-y-12">
            <div className="flex-col flex sm:flex-row h-[50vh]">
                <div className="flex-1 space-y-8">
                    <SectionLabel
                        label="The Opinions"
                        icon={
                            <CircleCheck className="text-muted-foreground w-5 h-5" />
                        }
                    />
                    <p className="font-light text-3xl sm:text-5xl">
                        Hear what our explorers say about their unforgettable
                        wildlife journeys. Amazing!
                    </p>
                </div>
                <div className="flex-1 flex sm:justify-end ">
                    <div className="justify-end h-fit max-w-md flex flex-col gap-8">
                        <p className="text-muted-foreground hidden sm:block">
                            Our guests rave about the incredible experiences,
                            from trekking through jungles to watching rare
                            species in their natural habitat. Truly
                            unforgettable!
                        </p>
                        <span className="w-fit mt-4 sm:mt-0">
                            <ExploreButton href={"/explore"} />
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <Carousel>
                    <CarouselContent>
                        {chunkedTestimonials.map((chunk, i) => (
                            <CarouselItem key={i}>
                                <ImageAccrodion testimonials={chunk} />
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default TestimonialsSection;
