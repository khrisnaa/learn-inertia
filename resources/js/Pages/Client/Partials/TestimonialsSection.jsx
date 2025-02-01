import React from "react";
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
import testimonials from "@/data/testimonials";

const TestimonialsSection = () => {
    const chunkedTestimonials = Array.from(
        { length: Math.ceil(testimonials.length / 4) },
        (_, i) => testimonials.slice(i * 4, i * 4 + 4)
    );
    return (
        <div className="min-h-screen p-12 space-y-12">
            <div className="flex h-[50vh]">
                <div className="flex-1 space-y-8">
                    <SectionLabel
                        label="The Opinions"
                        icon={
                            <CircleCheck className="text-muted-foreground  w-5 h-5" />
                        }
                    />
                    <p className="font-light text-5xl">
                        Hear what our explorers say about their unforgettable
                        wildlife journeys. Amazing!
                    </p>
                </div>
                <div className="flex-1 flex justify-end ">
                    <div className="justify-end max-w-md flex flex-col gap-8">
                        <p className="text-muted-foreground">
                            Our guests rave about the incredible experiences,
                            from trekking through jungles to watching rare
                            species in their natural habitat. Truly
                            unforgettable!
                        </p>
                        <span className="w-fit">
                            <ExploreButton />
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
