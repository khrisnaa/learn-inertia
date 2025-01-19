import React, { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { Thumb } from "../Components/HeroCarouselThumb";
import CategoryButton from "../Components/CategoryButton";

const HeroCarousel = (props) => {
    const { slides, options } = props;
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
                    {slides.map((image, i) => (
                        <div className=" flex-[0_0_100%] pl-4" key={i}>
                            <div className=" relative h-screen ">
                                <img
                                    src={image}
                                    onClick={() => setCurrentIndex(i)}
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute bottom-0 pb-12 pr-12 right-0">
                <div className="overflow-x-hidden" ref={emblaThumbsRef}>
                    <div className="flex gap-1">
                        {slides.map((image, i) => (
                            <Thumb
                                key={i}
                                onClick={() => onThumbClick(i)}
                                selected={i === selectedIndex}
                                index={i}
                                image={image}
                                title={"Lonely Life at the Baltimore"}
                                desc={"Shot by A6000"}
                            />
                        ))}
                    </div>
                </div>
            </div>

            <div className="absolute left-0 top-1/2 -translate-y-1/2">
                <div className="pl-12 max-w-[50vw]">
                    <p className="text-7xl tracking-custom leading-tight">
                        Lonely life surrounded by majestic mountains and lake
                    </p>
                </div>
            </div>

            <div className=" absolute left-0 pb-12 pl-12 bottom-0 ">
                <div className="max-w-72 flex flex-wrap  gap-2">
                    {CATEGORIES.map((category, i) => (
                        <CategoryButton key={i}>{category}</CategoryButton>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HeroCarousel;

const CATEGORIES = ["Wildlife", "Adventure", "Mountain", "Fresh", "Nature"];
