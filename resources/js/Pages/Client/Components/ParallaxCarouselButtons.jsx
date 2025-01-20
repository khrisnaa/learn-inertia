import { Button } from "@/Components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useCallback, useEffect, useState } from "react";

export const usePrevNextButtons = (emblaApi, onButtonClick) => {
    const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
    const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

    const onPrevButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollPrev();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onNextButtonClick = useCallback(() => {
        if (!emblaApi) return;
        emblaApi.scrollNext();
        if (onButtonClick) onButtonClick(emblaApi);
    }, [emblaApi, onButtonClick]);

    const onSelect = useCallback((emblaApi) => {
        setPrevBtnDisabled(!emblaApi.canScrollPrev());
        setNextBtnDisabled(!emblaApi.canScrollNext());
    }, []);

    useEffect(() => {
        if (!emblaApi) return;

        onSelect(emblaApi);
        emblaApi.on("reInit", onSelect).on("select", onSelect);
    }, [emblaApi, onSelect]);

    return {
        prevBtnDisabled,
        nextBtnDisabled,
        onPrevButtonClick,
        onNextButtonClick,
    };
};

export const PrevButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <Button
            className="h-8 w-8  transition-all duration-500 hover:bg-secondary hover:text-primary rounded-full border-gray-300 border flex items-center justify-center"
            type="button"
            {...restProps}
        >
            <ChevronLeft className="h-4 w-4" />
            {children}
        </Button>
    );
};

export const NextButton = (props) => {
    const { children, ...restProps } = props;

    return (
        <Button
            className="h-8 w-8 transition-all duration-500 rounded-full border-gray-300 border hover:bg-secondary hover:text-primary flex items-center justify-center"
            type="button"
            {...restProps}
        >
            <ChevronRight />
            {children}
        </Button>
    );
};
