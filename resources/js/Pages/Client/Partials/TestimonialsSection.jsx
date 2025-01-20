import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { CircleArrowUp, CircleCheck } from "lucide-react";
import ExploreButton from "../Components/ExploreButton";

const TestimonialsSection = () => {
    return (
        <div className="min-h-screen p-12">
            <div className="flex h-[50vh]  p-12">
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
        </div>
    );
};

export default TestimonialsSection;
