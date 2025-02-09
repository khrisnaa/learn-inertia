import { Separator } from "@/Components/ui/separator";
import { ArrowDownToDot, ArrowRight } from "lucide-react";
import React from "react";
import ReviewModal from "../Partials/ReviewModal";

const OrderCard = () => {
    return (
        <div className="text-primary flex gap-4">
            <div className="w-[26rem] relative h-64 overflow-hidden bg-red-400 rounded-md">
                <img src="/assets/images/rainforest.jpg" />
                <div className="absolute font-medium bottom-0 bg-green-100 text-green-700 text-sm border p-2 bg-secondary w-full">
                    Comfirmed
                </div>
            </div>
            <div className="space-y-8">
                <div className="space-y-4">
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
                                Gunung Leusser National Park, Sumatra
                            </span>
                        </a>
                    </div>

                    <div className="text-sm space-y-2">
                        <p className="flex items-center gap-2">
                            <span className="text-sm text-gray-800">
                                Duration:
                            </span>
                            3 Days 2 Nights
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-sm text-gray-800">
                                Price:
                            </span>
                            $ 170/person
                        </p>
                    </div>
                    <Separator />
                </div>
                <div className="flex justify-between">
                    <div>
                        <span className="font-semibold">Total: </span>
                        <span>$ 240 </span>
                        <span className="text-xs">(4 person)</span>
                    </div>

                    <ReviewModal />
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
