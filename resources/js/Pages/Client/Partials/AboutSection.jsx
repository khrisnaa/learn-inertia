import { Button } from "@/Components/ui/button";
import { ArrowRight, Info } from "lucide-react";
import React from "react";
import ExploreButton from "../Components/ExploreButton";
import SectionLabel from "../Components/SectionLabel";

const AboutSection = () => {
    return (
        <div className="w-full flex px-12 py-24   ">
            <div className="flex-1  flex flex-col justify-between ">
                <SectionLabel
                    label="About Us"
                    icon={<Info className="text-muted-foreground w-5 h-5" />}
                />
                <div className="text-sm text-muted-foreground">
                    <p className="max-w-96">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quis vitae, ut suscipit impedit dignissimos tempore
                        magnam accusantium unde eaque vero praesentium
                        recusandae sed repudiandae nulla officiis? Officiis
                        consequuntur consectetur quasi ipsa sequi est dolorem
                        vitae, ducimus enim beatae labore magnam?
                    </p>
                </div>
            </div>
            <div className="flex-1 space-y-12">
                <p className="text-5xl text-muted-foreground">
                    <span className="font-medium text-secondary">
                        Photography
                    </span>{" "}
                    is driven by a deep passion for{" "}
                    <span className="font-medium text-secondary">
                        capturing life's
                    </span>{" "}
                    most{" "}
                    <span className="font-medium text-secondary">
                        precious moments
                    </span>{" "}
                    with artistry and a touch of magic
                </p>

                <ExploreButton />
            </div>
        </div>
    );
};

export default AboutSection;
