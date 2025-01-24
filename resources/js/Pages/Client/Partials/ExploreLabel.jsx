import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { CircleHelp } from "lucide-react";

const ExploreLabel = () => {
    return (
        <div className="h-[50vh] p-12 flex flex-col justify-center">
            <div className="flex">
                <div className="flex-1">
                    <SectionLabel
                        label="Wild Forest"
                        icon={
                            <CircleHelp className="text-muted-foreground w-5 h-5" />
                        }
                    />
                </div>
                <div className="flex-1">
                    <p className="font-light text-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExploreLabel;
