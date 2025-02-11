import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { ChevronRight, CircleCheck, CircleParking } from "lucide-react";
import ExploreButton from "../Components/ExploreButton";
import { Button } from "@/Components/ui/button";
import { usePage } from "@inertiajs/react";

const ContactSection = () => {
    const { contact } = usePage().props;

    return (
        <div className=" w-full bg-accent-primary px-6 py-12 sm:p-12">
            <div className="flex flex-col sm:flex-row">
                <div className="flex-1 space-y-8">
                    <SectionLabel
                        label="Contact Us"
                        icon={
                            <CircleParking className="text-muted-foreground  w-5 h-5" />
                        }
                    />
                    <p className="font-light text-3xl sm:text-5xl">
                        Got questions? Reach out to us, and we'll be happy to
                        help. Placeat!
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
                                    {contact.company_name}
                                </p>
                                <p className="text-end">
                                    {contact.city}, {contact.country}
                                </p>
                                <p className="text-end">{contact.address}</p>
                                <p className="text-end">
                                    Phone: {contact.phone}
                                </p>
                                <p className="text-end">
                                    Email: {contact.email}
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
