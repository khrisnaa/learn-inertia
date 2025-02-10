import React from "react";
import SectionLabel from "../Components/SectionLabel";
import { CircleHelp } from "lucide-react";
import FaqCard from "../Components/FaqCard";
import { Textarea } from "@/Components/ui/textarea";
import { Input } from "@/Components/ui/input";
import { Button } from "@/Components/ui/button";
import { useForm } from "@inertiajs/react";

const ContactForm = () => {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: "",
        email: "",
        message: "",
    });

    const submit = (e) => {
        e.preventDefault();
        post(route("contact.send"), {
            onSuccess: () => {
                alert("Email sent successfully!");
                reset();
            },
        });
    };
    return (
        <div className="p-6 sm:p-12 pt-24 min-h-screen space-y-12">
            <div className="flex sm:flex-row flex-col">
                <div className="flex-1">
                    <SectionLabel
                        label="Missing Us"
                        icon={
                            <CircleHelp className="text-muted-foreground w-5 h-5" />
                        }
                    />
                </div>
                <div className="flex-1">
                    <p className="font-light text-3xl sm:text-5xl">
                        Have questions? We're here to help – get in touch!
                    </p>
                </div>
            </div>
            <div className="flex sm:flex-row flex-col gap-12">
                <div className="flex-[0.7] space-y-8">
                    <h4 className="text-3xl ">Get in Touch</h4>
                    <form onSubmit={submit} className="space-y-6">
                        <Input
                            value={data.name}
                            onChange={(e) => setData("name", e.target.value)}
                            type="text"
                            placeholder="Your name"
                        />
                        <Input
                            value={data.email}
                            onChange={(e) => setData("email", e.target.value)}
                            type="email"
                            placeholder="Your email"
                        />
                        <Textarea
                            value={data.message}
                            onChange={(e) => setData("message", e.target.value)}
                            placeholder="Message from you and We would love to hear it!"
                        />
                        <Button
                            disable={processing}
                            type="submit"
                            variant="secondary"
                            className="w-full py-5"
                        >
                            Send
                        </Button>
                    </form>
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
