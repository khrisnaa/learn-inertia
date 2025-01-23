import ClientLayout from "@/Layouts/ClientLayout";
import React, { useEffect, useRef } from "react";
import { useScroll, motion, useTransform } from "motion/react";
import { cn } from "@/lib/utils";
import ExploreZoomParallax from "../Partials/ExploreZoomParallax";
import { ArrowRight } from "lucide-react";

const Index = () => {
    return (
        <ClientLayout>
            <div className="h-[60vh]  px-12 py-24 flex items-center justify-between">
                <p className="text-5xl text-muted-foreground max-w-2xl">
                    <span className="font-medium text-secondary">Penis</span> is
                    driven by a deep passion for{" "}
                    <span className="font-medium text-secondary">
                        capturing life's
                    </span>{" "}
                    most{" "}
                    <span className="font-medium text-secondary">
                        precious moments
                    </span>{" "}
                    with artistry and a touch of magic
                </p>

                <button className="flex group gap-4 h-fit rotate-90">
                    Scroll More
                    <span className="group-hover:translate-x-4 transition-all duration-500">
                        <ArrowRight />
                    </span>
                </button>
            </div>
            <ExploreZoomParallax />
            <div className="h-[100vh]" />
        </ClientLayout>
    );
};

export default Index;
