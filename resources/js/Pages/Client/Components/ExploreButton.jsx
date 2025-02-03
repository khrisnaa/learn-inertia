import { Button } from "@/Components/ui/button";
import { Link } from "@inertiajs/react";
import { ArrowRight } from "lucide-react";
import React from "react";

const ExploreButton = ({ href }) => {
    return (
        <Link href={href}>
            <Button className="border group rounded-full py-6 px-6 uppercase border-gray-300">
                Explore More{" "}
                <ArrowRight className="group-hover:ml-4 transition-all duration-500" />
            </Button>
        </Link>
    );
};

export default ExploreButton;
