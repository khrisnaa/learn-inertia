import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { usePage } from "@inertiajs/react";

const ReviewList = () => {
    const { tour } = usePage().props;

    const middleIndex = Math.ceil(tour.reviews.length / 2);
    const firstHalf = tour.reviews.slice(0, middleIndex);
    const secondHalf = tour.reviews.slice(middleIndex);

    return (
        <div className="py-12 sticky top-24">
            <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                    {firstHalf.map((review, i) => (
                        <ReviewCard review={review} key={i} />
                    ))}
                </div>
                <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
                    {secondHalf.map((review, i) => (
                        <ReviewCard review={review} key={i} />
                    ))}
                </div>
            </div>
        </div>
    );
    // return (
    //     <div className="py-12 sticky top-24">
    //         <ScrollArea className="h-screen overflow-y-auto  w-full ">
    //             <div className="grid grid-cols-2 gap-4">
    //                 <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
    //                     {firstHalf.map((review, i) => (
    //                         <ReviewCard review={review} key={i} />
    //                     ))}
    //                 </div>
    //                 <div className="col-span-2 md:col-span-1 flex flex-col gap-4">
    //                     {secondHalf.map((review, i) => (
    //                         <ReviewCard review={review} key={i} />
    //                     ))}
    //                 </div>
    //             </div>
    //         </ScrollArea>
    //     </div>
    // );
};

export default ReviewList;
