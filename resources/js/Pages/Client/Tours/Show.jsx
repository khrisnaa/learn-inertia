import ClientLayout from "@/Layouts/ClientLayout";
import React, { useState } from "react";
import ImageDetails from "../Partials/ImageDetails";
import SectionLabel from "../Components/SectionLabel";
import { CircleCheck } from "lucide-react";
import DetailCarousel from "../Partials/DetailCarousel";

const Show = ({ tour }) => {
    console.log(tour);
    return (
        <ClientLayout>
            <div className="min-h-screen px-12 pt-28">
                <ImageDetails tour={tour} />
                <div className="pt-12">
                    <SectionLabel
                        label="Read This"
                        icon={
                            <CircleCheck className="text-muted-foreground  w-5 h-5" />
                        }
                    />
                    <DetailCarousel tour={tour} />
                </div>
            </div>
        </ClientLayout>
    );
};

export default Show;
