import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const ExploreButton = () => {
    return (
        <Button className="border group rounded-full py-6 px-6 uppercase border-gray-300">
            Explore More{" "}
            <ArrowRight className="group-hover:ml-4 transition-all duration-500" />
        </Button>
    );
};

export default ExploreButton;
