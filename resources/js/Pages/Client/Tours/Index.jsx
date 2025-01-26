import ClientLayout from "@/Layouts/ClientLayout";
import React from "react";
import ExploreZoomParallax from "../Partials/ExploreZoomParallax";
import ExploreHeadline from "../Partials/ExploreHeadline";
import ContactSection from "../Partials/ContactSection";
import ImageContainer from "../Partials/ImageContainer";
import ExploreLabel from "../Partials/ExploreLabel";

const Index = () => {
    return (
        <ClientLayout>
            <ExploreHeadline />
            <ExploreZoomParallax />
            <div className="h-[50vh]" />
            <div>
                <ExploreLabel />
                <div className="px-12 py-4 h-screen">
                    <div className="grid h-full grid-cols-5 grid-rows-2 gap-8">
                        <ImageContainer className={"col-span-3 row-span-2"} />
                        <ImageContainer className={"col-span-2 row-span-1"} />
                        <ImageContainer className={"col-span-2 row-span-1"} />
                    </div>
                </div>
                <ExploreLabel />
                <div className="px-12 py-4 h-screen">
                    <div className="grid h-full grid-cols-8 grid-rows-4 gap-8">
                        <ImageContainer className={"col-span-4 row-span-2"} />
                        <ImageContainer className={"col-span-4 row-span-2"} />
                        <ImageContainer className={"col-span-3 row-span-2"} />
                        <ImageContainer className={"col-span-3 row-span-2"} />
                        <ImageContainer className={"col-span-2 row-span-2"} />
                    </div>
                </div>
                <ExploreLabel />
                <div className="px-12 py-4 h-screen">
                    <div className="grid h-full grid-cols-6 grid-rows-6 gap-8">
                        <ImageContainer className={"col-span-4 row-span-3"} />
                        <ImageContainer className={"col-span-2 row-span-4"} />
                        <ImageContainer className={"col-span-2 row-span-3"} />
                        <ImageContainer className={"col-span-2 row-span-3"} />
                        <ImageContainer className={"col-span-2 row-span-2"} />
                    </div>
                </div>
            </div>
            <div className="mt-12">
                <ContactSection />
            </div>
        </ClientLayout>
    );
};

export default Index;
