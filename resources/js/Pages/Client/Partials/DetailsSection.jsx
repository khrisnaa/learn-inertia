import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Separator } from "@/Components/ui/separator";
import { ArrowDownToDot, MoveRight, Plus } from "lucide-react";
import React from "react";

const DetailsSection = ({ tour }) => {
    return (
        <div className="grid grid-cols-2 py-12 gap-12 max-h-screen">
            <div className="col-span-1 space-y-4">
                <div className="space-y-2">
                    <h4 className="font-light text-3xl">{tour.name}</h4>
                    <a
                        target="blank"
                        href="https://maps.app.goo.gl/N98KAjyyuwpCed427"
                        className="text-sm flex items-center gap-2 group w-fit"
                    >
                        <ArrowDownToDot className="h-4 w-4 group-hover:-rotate-90 transition-all duration-500" />
                        <span className="group-hover:translate-x-2 transition-all duration-500">
                            {tour.location}
                        </span>
                    </a>
                </div>

                <div className="text-sm space-y-2">
                    <p className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">Duration:</span>
                        {tour.duration}
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">Price:</span>$
                        {tour.price}/person
                    </p>
                </div>
                <Separator />
                <div className="grid grid-cols-2">
                    <div className=" col-span-1 space-y-2">
                        <h5 className="font-medium text-lg">Includes</h5>
                        <ul>
                            {tour.includes.map((include, i) => (
                                <li className="flex group items-center cursor-default gap-2">
                                    <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                    <span className="group-hover:translate-x-4 transition-all duration-500">
                                        {include.include_item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className=" col-span-1 space-y-2">
                        <h5 className="font-medium text-lg">Highlights</h5>
                        <ul>
                            {tour.highlights.map((highlight, i) => (
                                <li className="flex group items-center cursor-default gap-2">
                                    <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                    <span className="group-hover:translate-x-4 transition-all duration-500">
                                        {highlight.highlight_item}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
                <Separator />
                <div>
                    <Button
                        variant="secondary"
                        className="rounded-full w-full py-6"
                    >
                        Book Now
                    </Button>
                </div>
            </div>
            <div className="col-span-1 flex flex-col">
                <div className=" space-y-2">
                    <h5 className="font-medium text-lg">Overview</h5>
                    <ScrollArea className="h-64">
                        <p>{tour.overview}</p>
                    </ScrollArea>
                    {/* <div className="flex justify-end">
                        <button className="text-sm pl-1 group flex items-center gap-4 mr-8 w-fit">
                            <span className="group-hover:-translate-x-1 transition-all duration-500">
                                Read review
                            </span>
                            <span className="relative w-3 before:content-[''] before:bg-secondary before:border before:border-secondary before:w-full before:absolute before:top-1/2 before:-translate-y-1/2 before:left-0">
                                <MoveRight className="group-hover:translate-x-2 transition-all text-secondary duration-500" />
                            </span>
                        </button>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default DetailsSection;
