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

const TestimonialsSection = () => {
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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat!
                    </p>
                </div>
                <div className="flex-1 flex justify-end ">
                    <div className="justify-end max-w-md flex flex-col gap-8">
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Praesentium pariatur amet distinctio porro
                            modi assumenda inventore aliquid autem? Numquam,
                            magni.
                        </p>
                        <span className="w-fit">
                            <ExploreButton />
                        </span>
                    </div>
                </div>
            </div>
            <div className="">
                <Carousel>
                    <CarouselContent>
                        <CarouselItem>
                            <ImageAccrodion images={IMAGES} />
                        </CarouselItem>
                        <CarouselItem>
                            <ImageAccrodion images={IMAGES} />
                        </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                </Carousel>
            </div>
        </div>
    );
};

export default TestimonialsSection;

const IMAGES = [
    "/assets/images/dummy_hero.jpg",
    "/assets/images/dummy_hero.jpg",
    "/assets/images/dummy_hero.jpg",
    "/assets/images/dummy_hero.jpg",
];
