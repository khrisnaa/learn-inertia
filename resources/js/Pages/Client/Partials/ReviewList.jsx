import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { ScrollArea } from "@/Components/ui/scroll-area";

const ReviewList = () => {
    return (
        <div className="py-12">
            <ScrollArea className="h-screen">
                <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-1 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                    <div className="col-span-1 flex flex-col gap-4">
                        <ReviewCard />
                        <ReviewCard />
                        <ReviewCard />
                    </div>
                </div>
            </ScrollArea>
        </div>
    );
};

export default ReviewList;
