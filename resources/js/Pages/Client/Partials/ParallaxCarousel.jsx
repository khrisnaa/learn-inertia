import React, { useCallback, useEffect, useRef, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../Components/ParallaxCarouselButtons";
import { ArrowBigRight, MoveRight } from "lucide-react";

const TWEEN_FACTOR_BASE = 0.2;

const ParallaxCarousel = (props) => {
    const { slides: tours, options, setActiveSlide } = props;
    const [emblaRef, emblaApi] = useEmblaCarousel(options);
    const tweenFactor = useRef(0);
    const tweenNodes = useRef([]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    const setTweenNodes = useCallback((emblaApi) => {
        tweenNodes.current = emblaApi.slideNodes().map((slideNode) => {
            return slideNode.querySelector("#parallax-layer");
        });
    }, []);

    const setTweenFactor = useCallback((emblaApi) => {
        tweenFactor.current =
            TWEEN_FACTOR_BASE * emblaApi.scrollSnapList().length;
    }, []);

    const tweenParallax = useCallback((emblaApi, eventName) => {
        const engine = emblaApi.internalEngine();
        const scrollProgress = emblaApi.scrollProgress();
        const slidesInView = emblaApi.slidesInView();
        const isScrollEvent = eventName === "scroll";

        emblaApi.scrollSnapList().forEach((scrollSnap, snapIndex) => {
            let diffToTarget = scrollSnap - scrollProgress;
            const slidesInSnap = engine.slideRegistry[snapIndex];

            slidesInSnap.forEach((slideIndex) => {
                if (isScrollEvent && !slidesInView.includes(slideIndex)) return;

                if (engine.options.loop) {
                    engine.slideLooper.loopPoints.forEach((loopItem) => {
                        const target = loopItem.target();

                        if (slideIndex === loopItem.index && target !== 0) {
                            const sign = Math.sign(target);

                            if (sign === -1) {
                                diffToTarget =
                                    scrollSnap - (1 + scrollProgress);
                            }
                            if (sign === 1) {
                                diffToTarget =
                                    scrollSnap + (1 - scrollProgress);
                            }
                        }
                    });
                }

                const translate =
                    diffToTarget * (-1 * tweenFactor.current) * 100;
                const tweenNode = tweenNodes.current[slideIndex];
                tweenNode.style.transform = `translateX(${translate}%)`;
            });
        });
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        const onSelect = () => {
            setActiveSlide(emblaApi.selectedScrollSnap());
        };

        setTweenNodes(emblaApi);
        setTweenFactor(emblaApi);
        tweenParallax(emblaApi);

        emblaApi
            .on("reInit", setTweenNodes)
            .on("reInit", setTweenFactor)
            .on("reInit", tweenParallax)
            .on("scroll", tweenParallax)
            .on("slideFocus", tweenParallax)
            .on("select", onSelect);

        // Cleanup event listeners on unmount
        return () => {
            emblaApi.off("select", onSelect);
        };
    }, [emblaApi, setTweenNodes, setTweenFactor, tweenParallax]);

    return (
        <div className="relative w-full ">
            <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                <div className="-ml-4 flex">
                    {tours.map((tour, index) => (
                        <div className=" flex-[0_0_80%] pl-4" key={index}>
                            <div className="h-full overflow-hidden rounded-lg">
                                <div
                                    id="parallax-layer"
                                    className="relative h-[60dvh] w-full"
                                >
                                    <img
                                        className="object-cover  "
                                        src={`/storage/${tour.thumbnail}`}
                                        alt="Your alt text"
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-4 space-y-4 ">
                <div className="space-x-4 flex">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>

                <a
                    className="text-sm pl-1 group flex items-center gap-4 w-fit"
                    href="#"
                >
                    <span> See all</span>
                    <span className="relative  w-5 before:content-[''] before:bg-secondary before:border before:border-secondary before:w-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0">
                        <MoveRight className="group-hover:translate-x-4 transition-all text-secondary duration-500" />
                    </span>
                </a>
            </div>
        </div>
    );
};

export default ParallaxCarousel;
