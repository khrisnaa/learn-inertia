import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { CircleHelp } from "lucide-react";

const ExploreLabel = ({ title, description }) => {
    return (
        <div className="h-[50vh] p-6 sm:p-12 flex flex-col justify-center">
            <div className="flex sm:flex-row flex-col gap-4">
                <div className="flex-1">
                    <SectionLabel
                        label={title}
                        icon={
                            <CircleHelp className="text-muted-foreground w-5 h-5" />
                        }
                    />
                </div>
                <div className="flex-1">
                    <p className="font-light  text-3xl sm:text-5xl">
                        {description}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExploreLabel;
