import ClientLayout from "@/Layouts/ClientLayout";
import { CircleCheck } from "lucide-react";
import React, { useState } from "react";
import SectionLabel from "./Components/SectionLabel";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/Components/ui/carousel";
import Contact from "./Contact";
import ContactSection from "./Partials/ContactSection";
import { Link } from "@inertiajs/react";
import ImageContainer from "./Partials/ImageContainer";

const Favorites = ({ tours: wishlists }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const tours = wishlists.map((wishlist) => wishlist.tour);
    return (
        <ClientLayout>
            <div className="min-h-screen grid grid-cols-2 gap-2 px-12 pt-28  py-24">
                <div className="col-span-1">
                    <div className="h-full w-full space-y-8">
                        <SectionLabel
                            label="Your Favorites"
                            icon={
                                <CircleCheck className="text-muted-foreground  w-5 h-5" />
                            }
                        />
                        <p className="font-light text-5xl pr-4">
                            Save and organize your wildlife adventures! From
                            safaris to jungle retreats!
                        </p>
                    </div>
                </div>
                <div className="col-span-1 h-[80vh] select-none">
                    <div className="grid grid-rows-4 gap-4 w-full h-full ">
                        <Link
                            href={`/explore/${tours[selectedIndex].id}`}
                            className="cursor-pointer relative overflow-hidden rounded-lg row-span-3"
                        >
                            <ImageContainer
                                className={"bg-red-400"}
                                tour={tours[selectedIndex]}
                            />
                            {/* <img
                                src={`/storage/${tours[selectedIndex].thumbnail}`}
                                className="object-cover w-full h-full-hover:scale-100 scale-110 transition-all duration-500"
                            />
                            */}
                        </Link>
                        <div className=" row-span-1 rounded-lg ">
                            <Carousel>
                                <CarouselContent className="h-full">
                                    {tours.map((tour, i) => (
                                        <CarouselItem className="basis-1/3 h-full">
                                            <div
                                                onClick={() =>
                                                    setSelectedIndex(i)
                                                }
                                                className="cursor-pointer  h-36 w-full relative overflow-hidden rounded-lg "
                                            >
                                                <img
                                                    src={`/storage/${tour.thumbnail}`}
                                                    className="object-cover w-full h-full"
                                                />
                                            </div>
                                        </CarouselItem>
                                    ))}
                                </CarouselContent>
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
            <ContactSection />
        </ClientLayout>
    );
};

export default Favorites;
