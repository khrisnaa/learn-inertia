import { Button } from "@/Components/ui/button";
import { ScrollArea } from "@/Components/ui/scroll-area";
import { Separator } from "@/Components/ui/separator";
import { ArrowDownToDot, MoveRight, Plus } from "lucide-react";
import React from "react";

const DetailsSection = () => {
    return (
        <div className="grid grid-cols-2 py-12 gap-12 max-h-screen">
            <div className="col-span-1 space-y-4">
                <div className="space-y-2">
                    <h4 className="font-light text-3xl">
                        Tropical Rainforest Adventure - Gunung Leuser
                    </h4>
                    <a
                        target="blank"
                        href="https://maps.app.goo.gl/N98KAjyyuwpCed427"
                        className="text-sm flex items-center gap-2 group w-fit"
                    >
                        <ArrowDownToDot className="h-4 w-4 group-hover:-rotate-90 transition-all duration-500" />
                        <span className="group-hover:translate-x-2 transition-all duration-500">
                            Gunung Leuser National Park, Sumatra
                        </span>
                    </a>
                </div>

                <div className="text-sm space-y-2">
                    <p className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">Duration:</span>
                        3 Days 2 Nights
                    </p>
                    <p className="flex items-center gap-2">
                        <span className="text-sm text-gray-300">Price:</span>
                        $170/person
                    </p>
                </div>
                <Separator />
                <div className="grid grid-cols-2">
                    <div className=" col-span-1 space-y-2">
                        <h5 className="font-medium text-lg">Includes</h5>
                        <ul>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Local guide
                                </span>
                            </li>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Meals and drinks
                                </span>
                            </li>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Camping gear
                                </span>
                            </li>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Entry fees
                                </span>
                            </li>
                        </ul>
                    </div>
                    <div className=" col-span-1 space-y-2">
                        <h5 className="font-medium text-lg">Highlights</h5>
                        <ul>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Jungle trekking
                                </span>
                            </li>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Wildlife observation
                                </span>
                            </li>
                            <li className="flex group items-center cursor-default gap-2">
                                <Plus className="group-hover:rotate-90 transition-all duration-500 h-4 w-4" />
                                <span className="group-hover:translate-x-4 transition-all duration-500">
                                    Nature conservation insights
                                </span>
                            </li>
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
                        <p>
                            Explore the lush rainforest, spot orangutans,
                            elephants, and exotic birds, and camp under the
                            stars in this immersive wildlife experience. Lorem
                            ipsum dolor sit, amet consectetur adipisicing elit.
                            Dolores necessitatibus sit, veritatis nihil, tenetur
                            molestiae quia, expedita a iure enim libero.
                            Voluptatum quia deleniti dolores quos blanditiis
                            veniam quisquam cumque ad, ducimus, ipsam harum enim
                            reprehenderit? Ut, tempore quod molestiae dolorum
                            vitae adipisci neque quae perspiciatis, quia optio
                            dignissimos iusto.
                        </p>
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
