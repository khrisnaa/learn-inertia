import { Separator } from "@/Components/ui/separator";
import { ArrowDownToDot, ArrowRight } from "lucide-react";
import React from "react";
import ReviewModal from "../Partials/ReviewModal";
import { cn } from "@/lib/utils";
import { Button } from "@/Components/ui/button";

const OrderCard = ({ booking }) => {
    return (
        <div className="text-primary flex gap-4">
            <div className="w-[40rem] h-full relative aspect-video overflow-hidden rounded-md">
                <img src={`/storage/${booking.tour.thumbnail}`} />
                <div
                    className={cn(
                        "absolute font-medium bottom-0 text-sm border p-2 w-full rounded-md text-start",
                        {
                            "bg-yellow-100 text-yellow-700 border-yellow-500":
                                booking.status === "Pending",
                            "bg-blue-100 text-blue-700 border-blue-500":
                                booking.status === "Confirmed",
                            "bg-red-100 text-red-700 border-red-500":
                                booking.status === "Canceled",
                            "bg-green-100 text-green-700 border-green-500":
                                booking.status === "Completed",
                        }
                    )}
                >
                    {booking.status}
                </div>
            </div>
            <div className="space-y-8 w-full">
                <div className="space-y-4">
                    <div className="space-y-2">
                        <h4 className="font-light text-3xl">
                            {booking.tour.name}
                        </h4>
                        <a
                            target="blank"
                            href="#"
                            className="text-sm flex items-center gap-2 group w-fit"
                        >
                            <ArrowDownToDot className="h-4 w-4 group-hover:-rotate-90 transition-all duration-500" />
                            <span className="group-hover:translate-x-2 transition-all duration-500">
                                {booking.tour.location}
                            </span>
                        </a>
                    </div>

                    <div className="text-sm space-y-2">
                        <p className="flex items-center gap-2">
                            <span className="text-sm text-gray-800">
                                Duration:
                            </span>
                            {booking.tour.duration}
                        </p>
                        <p className="flex items-center gap-2">
                            <span className="text-sm text-gray-800">
                                Price:
                            </span>
                            $ {booking.tour.price}/person
                        </p>
                    </div>
                    <Separator />
                </div>
                <div className="flex justify-between">
                    <div>
                        <span className="font-semibold">Total: </span>
                        <span>$ {booking.total_price} </span>
                        <span className="text-xs">
                            (${booking.quantity} pax)
                        </span>
                    </div>
                    {booking.review == null &&
                        booking.status === "Completed" && (
                            <ReviewModal bookingId={booking.id} />
                        )}
                    {booking.status === "Pending" && (
                        <a target="_blank" href={booking.whatsapp_url}>
                            <Button type="button" className="mt-3">
                                Confirm on WhatsApp
                            </Button>
                        </a>
                    )}
                </div>
            </div>
        </div>
    );
};

export default OrderCard;
