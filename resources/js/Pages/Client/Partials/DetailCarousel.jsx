import React from "react";
import useEmblaCarousel from "embla-carousel-react";
import AutoHeight from "embla-carousel-auto-height";
import {
    NextButton,
    PrevButton,
    usePrevNextButtons,
} from "../Components/DetailCarouselButtons";
import DetailsSection from "./DetailsSection";
import ReviewList from "./ReviewList";

const DetailCarousel = () => {
    const options = {};
    const [emblaRef, emblaApi] = useEmblaCarousel(options, [AutoHeight()]);

    const {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    } = usePrevNextButtons(emblaApi);

    return (
        <div className="m-auto relative">
            <div className="overflow-hidden" ref={emblaRef}>
                <section className="-ml-4 flex">
                    <div className="flex-[0_0_100%] pl-4 h-fit">
                        <div className="h-full">
                            <DetailsSection />
                        </div>
                    </div>
                    <div className="flex-[0_0_100%] pl-4 min-h-screen h-full ">
                        <div className="h-full">
                            <ReviewList />
                        </div>
                    </div>
                </section>
            </div>
            <div className="mt-4 space-y-4 ">
                <div className="space-x-4 absolute top-0 right-0 flex">
                    <PrevButton
                        onClick={onPrevButtonClick}
                        disabled={prevBtnDisabled}
                    />
                    <NextButton
                        onClick={onNextButtonClick}
                        disabled={nextBtnDisabled}
                    />
                </div>
            </div>
        </div>
    );
};

export default DetailCarousel;
