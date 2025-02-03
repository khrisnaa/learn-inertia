import {
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/Components/ui/accordion";
import { Button } from "@/Components/ui/button";
import { ArrowRight } from "lucide-react";
import React from "react";

const FaqCard = ({ question, answer, index }) => {
    return (
        <AccordionItem className="border-none" value={question}>
            <AccordionTrigger>
                <div className="group w-full transition-all duration-500 hover:border-none cursor-pointer">
                    <div className="rounded-lg h-24 relative before:absolute before:bottom-0 before:h-[.5px] before:w-full before:left-0 before:bg-gray-400 transition-all duration-500 group-hover:before:w-0 before:transition-all before:duration-500  p-4 group-hover:bg-accent-primary flex gap-4 justify-between items-center">
                        <span>{(index + 1).toString().padStart(2, "0")}</span>
                        <h4 className="text-base max-w-xs">{question}</h4>
                        <div
                            variant="secondary"
                            className="h-4 w-4 sm:h-8 sm:w-8 flex items-center justify-center group-hover:bg-secondary transition-all duration-700 group-hover:-rotate-45 group-hover:text-primary rounded-full bg-transparent border border-secondary text-secondary"
                        >
                            <ArrowRight className="h-4 w-4" />
                        </div>
                    </div>
                </div>
            </AccordionTrigger>
            <AccordionContent>
                <div className="flex gap-4 justify-between items-center p-4 ">
                    <span>
                        <ArrowRight className="w-4 h-4" />
                    </span>
                    <p className="text-base font-light max-w-xs">{answer}</p>
                    <span className="w-8"></span>
                </div>
            </AccordionContent>
        </AccordionItem>
    );
};

export default FaqCard;
