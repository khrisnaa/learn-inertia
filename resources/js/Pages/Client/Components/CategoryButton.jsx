import { Button } from "@/Components/ui/button";
import React from "react";

const CategoryButton = ({ children }) => {
    return (
        <Button
            variant="secondary"
            className="bg-white/20 backdrop-blur-md border-gray-300 border-[1px] text-secondary rounded-full "
        >
            {children}
        </Button>
    );
};

export default CategoryButton;
