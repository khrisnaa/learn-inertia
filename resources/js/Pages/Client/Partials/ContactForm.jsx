import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { CircleHelp } from "lucide-react";
import FaqCard from "../Components/FaqCard";
import { Textarea } from "@/Components/ui/textarea";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";

const ContactForm = () => {
    return (
        <div className="p-12 pt-24 min-h-screen space-y-12">
            <div className="flex">
                <div className="flex-1">
                    <SectionLabel
                        label="Missing Us"
                        icon={
                            <CircleHelp className="text-muted-foreground w-5 h-5" />
                        }
                    />
                </div>
                <div className="flex-1">
                    <p className="font-light text-5xl">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Placeat!
                    </p>
                </div>
            </div>
            <div className="flex gap-12">
                <div className="flex-[0.7] space-y-8">
                    <h4 className="text-3xl ">Get in Touch</h4>
                    <div className="space-y-6">
                        <Input type="text" placeholder="Your name" />
                        <Input type="email" placeholder="Your email" />
                        <Textarea placeholder="Message from you and We would love to hear it!" />
                        <Button variant="secondary" className="w-full py-5">
                            Send
                        </Button>
                    </div>
                </div>
                <div className="flex-1 space-y-4">
                    <div className="h-64 rounded-lg group overflow-hidden ">
                        <img
                            src="/assets/images/dummy_hero.jpg"
                            className="object-cover scale-125 group-hover:scale-100 transition-all duration-500"
                        />
                    </div>
                    <div className="space-y-1">
                        <h4>Lorem ipsum dolor sit amet.</h4>
                        <p className="text-muted-foreground">
                            Lorem ipsum dolor, sit amet consectetur adipisicing
                            elit. Dolorem qui necessitatibus sunt nostrum
                            voluptas neque excepturi officia non rerum
                            consequuntur!
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
