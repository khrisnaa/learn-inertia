import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "../Components/HeroCarouselThumb";
import CategoryButton from "../Components/CategoryButton";
import { cn } from "@/lib/utils";

const HeroCarousel = (props) => {
    const { slides: tours, options } = props;
    const [selectedIndex, setSelectedIndex] = useState(0);
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options);
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: "keepSnaps",
        dragFree: true,
    });

    const onThumbClick = useCallback(
        (index) => {
            if (!emblaMainApi || !emblaThumbsApi) return;
            emblaMainApi.scrollTo(index);
        },
        [emblaMainApi, emblaThumbsApi]
    );

    const onSelect = useCallback(() => {
        if (!emblaMainApi || !emblaThumbsApi) return;
        setSelectedIndex(emblaMainApi.selectedScrollSnap());
        emblaThumbsApi.scrollTo(emblaMainApi.selectedScrollSnap());
    }, [emblaMainApi, emblaThumbsApi, setSelectedIndex]);

    useEffect(() => {
        if (!emblaMainApi) return;
        onSelect();

        emblaMainApi.on("select", onSelect).on("reInit", onSelect);
    }, [emblaMainApi, onSelect]);

    return (
        <section className="m-auto relative ">
            <div className="overflow-hidden" ref={emblaMainRef}>
                <div className="-ml-4 flex">
                    {tours.map((tour, i) => (
                        <div className=" flex-[0_0_100%] relative pl-4" key={i}>
                            <div className=" relative h-screen ">
                                <img
                                    src={`/storage/${tour.thumbnail}`}
                                    className="h-full w-full object-cover"
                                />
                                <div
                                    className={cn(
                                        "absolute transition-all duration-1000  top-1/2 -translate-y-1/2",
                                        selectedIndex == i
                                            ? "left-0 opacity-100"
                                            : "left-64 opacity-0"
                                    )}
                                >
                                    <div className="pl-12 max-w-[50vw] ">
                                        <p className="text-7xl tracking-custom leading-tight">
                                            {tour.headline}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className=" absolute left-0 pb-12 pl-12 bottom-0 ">
                                <div className="max-w-72 flex flex-wrap gap-2">
                                    {tour.categories.map((category, i) => (
                                        <div key={i}>
                                            <CategoryButton>
                                                {category.name}
                                            </CategoryButton>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 pb-12 pr-12 right-0">
                <div className="overflow-x-hidden" ref={emblaThumbsRef}>
                    <div className="flex gap-1">
                        {tours.map((tour, i) => (
                            <Thumb
                                key={i}
                                onClick={() => onThumbClick(i)}
                                selected={i === selectedIndex}
                                index={i}
                                image={`/storage/${tour.thumbnail}`}
                                title={tour.name}
                                desc={tour.location}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;

const CATEGORIES = ["Wildlife", "Adventure", "Mountain", "Fresh", "Nature"];
