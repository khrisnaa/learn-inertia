import { Button } from "@/Components/ui/button";
import { Input } from "@/Components/ui/input";
import { Label } from "@/Components/ui/label";
import { Separator } from "@/Components/ui/separator";
import { Textarea } from "@/Components/ui/textarea";
import ClientLayout from "@/Layouts/ClientLayout";
import { Link, useForm, usePage } from "@inertiajs/react";
import { ArrowDownToDot, Minus, Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";

const Booking = ({ tour, auth }) => {
    const { props } = usePage();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const whatsappUrl = props.whatsappUrl;
    const successMessage = props.successMessage;

    useEffect(() => {
        if (whatsappUrl) {
            setIsModalOpen(true);
        }
    }, [whatsappUrl]);

    const { data, setData, post, errors, processing } = useForm({
        tour_id: tour.id,
        user_id: auth?.user?.id,
        quantity: "1",
        note: "",
    });

    const [quantity, setQuantity] = useState(1);
    const [total, setTotal] = useState(tour.price);

    useEffect(() => {
        setData("quantity", quantity);
        setTotal(tour.price * quantity);
    }, [quantity, total, setData]);

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/booking", {
            onSuccess: () => {
                setQuantity(1);
            },
        });
    };

    return (
        <ClientLayout>
            <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>{successMessage}</DialogTitle>
                        <DialogDescription>
                            Your booking has been successfully completed. You
                            can now proceed to confirm your reservation via
                            WhatsApp.
                            <br />
                            <a target="_blank" href={whatsappUrl}>
                                <Button className="mt-3">
                                    Confirm on WhatsApp
                                </Button>
                            </a>
                        </DialogDescription>
                    </DialogHeader>
                </DialogContent>
            </Dialog>

            <div className="grid grid-cols-2 py-24">
                <div className="col-span-1 p-12">
                    <div className="h-96 rounded-lg group overflow-hidden ">
                        <img
                            src={`/storage/${tour.thumbnail}`}
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-4 py-2">
                        <Separator />
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
                                <span className="text-sm text-secondary">
                                    Duration:
                                </span>
                                {tour.duration}
                            </p>
                            <p className="flex items-center gap-2">
                                <span className="text-sm text-secondary">
                                    Price:
                                </span>
                                $ {tour.price}/person
                            </p>
                        </div>
                        <Separator />
                        <div className="text-sm text-secondary/50">
                            {tour.overview}
                        </div>
                    </div>
                </div>

                <div className="col-span-1 p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <Label>Name</Label>
                            <Input
                                type="text"
                                value={auth?.user?.email}
                                disabled
                                className="w-full border  rounded p-2"
                            />
                        </div>

                        <div>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                value={auth?.user?.email}
                                disabled
                                className="w-full border  rounded p-2"
                            />
                        </div>

                        <div>
                            <Label>Quantity</Label>
                            <div className="flex items-center gap-4">
                                <Input
                                    type="number"
                                    value={quantity === 0 ? "" : quantity} // Allow empty input for backspacing
                                    onChange={(e) => {
                                        const inputValue = e.target.value;

                                        // Allow empty string for clearing input
                                        if (inputValue === "") {
                                            setQuantity(0);
                                            return;
                                        }

                                        // Prevent leading zeros and non-numeric values
                                        if (!/^\d+$/.test(inputValue)) return;

                                        setQuantity(Number(inputValue));
                                    }}
                                    onBlur={() => {
                                        // Reset to 1 if empty when losing focus
                                        if (quantity === 0) {
                                            setQuantity(1);
                                        }
                                    }}
                                    className="w-full border rounded p-2"
                                />

                                <Button
                                    onClick={() =>
                                        setQuantity((prev) =>
                                            Math.max(1, prev - 1)
                                        )
                                    }
                                    type="button"
                                    variant="secondary"
                                    className="size-8"
                                >
                                    <Minus />
                                </Button>
                                <Button
                                    onClick={() =>
                                        setQuantity((prev) => prev + 1)
                                    }
                                    type="button"
                                    variant="secondary"
                                    className="size-8"
                                >
                                    <Plus />
                                </Button>
                            </div>
                            {errors.quantity && (
                                <p className="text-red-500 text-sm">
                                    {errors.quantity}
                                </p>
                            )}
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <Label className="text-secondary">
                                Total Price
                            </Label>
                            <span className="text-lg font-semibold text-secondary/90">
                                ${total.toLocaleString()}
                            </span>
                        </div>

                        <div>
                            <Label>Note (Optional)</Label>
                            <Textarea
                                value={data.note}
                                onChange={(e) =>
                                    setData("note", e.target.value)
                                }
                                className="w-full border rounded p-2"
                            />
                            {errors.note && (
                                <p className="text-red-500 text-sm">
                                    {errors.note}
                                </p>
                            )}
                        </div>

                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                            className="w-full mt-4"
                        >
                            {processing ? "Sending..." : "Send Order"}
                        </Button>
                    </form>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Booking;
