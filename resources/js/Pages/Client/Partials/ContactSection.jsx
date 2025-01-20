import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { ChevronRight, CircleCheck, CircleParking } from "lucide-react";
import ExploreButton from "../Components/ExploreButton";
import { Button } from "@/Components/ui/button";

const ContactSection = () => {
    return (
        <div className=" w-full bg-accent-primary p-12">
            <div className="flex ">
                <div className="flex-1 space-y-8">
                    <SectionLabel
                        label="Contact Us"
                        icon={
                            <CircleParking className="text-muted-foreground  w-5 h-5" />
                        }
                    />
                    <p className="font-light text-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat!
                    </p>
                    <Button
                        variant="secondary"
                        className="w-fit rounded-full gap-8 flex justify-between"
                    >
                        <span>Get in Touch</span>
                        <ChevronRight />
                    </Button>
                </div>
                <div className="flex-1 flex justify-end ">
                    <div className="justify-end items-end max-w-md flex flex-col gap-8">
                        <div className="text-sm flex flex-col items-end">
                            <address className="not-italic space-y-2">
                                <p className="font-medium text-end">
                                    Company Name
                                </p>
                                <p className="text-end">123 Main Street</p>
                                <p className="text-end">
                                    Cityville, State, 12345
                                </p>
                                <p className="text-end">
                                    Phone: +1 (123) 456-7890
                                </p>
                                <p className="text-end">
                                    Email: info@company.com
                                </p>
                            </address>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactSection;
