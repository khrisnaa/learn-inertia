import React from "react";
import DetailsSection from "./DetailsSection";
import ReviewList from "./ReviewList";
import SectionLabel from "../Components/SectionLabel";
import { CircleArrowUp } from "lucide-react";

const TourDetails = ({ tour }) => {
    return (
        <div>
            <div>
                <DetailsSection tour={tour} />
            </div>
            <div>
                <div className="flex-1 space-y-8 w-1/2">
                    <SectionLabel
                        label="For You"
                        icon={
                            <CircleArrowUp className="text-muted-foreground rotate-90 w-5 h-5" />
                        }
                    />
                    <p className="font-light text-3xl sm:text-4xl md:text-5xl">
                        Discover unforgettable wildlife adventures crafted just
                        for you. Explore now!
                    </p>
                </div>
                <ReviewList />
            </div>
        </div>
    );
};

export default TourDetails;
