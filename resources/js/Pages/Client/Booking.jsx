import { Button } from "@/Components/ui/button";
import ClientLayout from "@/Layouts/ClientLayout";
import { useForm } from "@inertiajs/react";
import React, { useEffect, useState } from "react";

const Booking = ({ tour }) => {
    const { data, setData, post, processing, errors } = useForm({
        tour_id: "",
        quantity: "1",
        total_price: "",
        status: "Pending",
        note: "",
        transfer_proof: null,
    });

    const [preview, setPreview] = useState(null);

    useEffect(() => {
        if (data.quantity) {
            const totalPrice = data.quantity * tour.price;
            setData("total_price", totalPrice.toFixed(2)); // Set total price with 2 decimal points
        } else {
            setData("total_price", 0); // Reset to 0 if no quantity
        }
    }, [data.quantity, tour.price, setData]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setData("transfer_proof", file);
        setPreview(URL.createObjectURL(file));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post("/booking");
    };

    return (
        <ClientLayout>
            <div className="grid grid-cols-2 py-24">
                <div className="col-span-1 p-12">
                    <div className="h-96 rounded-lg group overflow-hidden ">
                        <img
                            src={`/storage/${tour.thumbnail}`}
                            className="object-cover"
                        />
                    </div>
                    <div className="space-y-1 py-4">
                        <h4>{tour.name}</h4>
                        <p className="text-sm">{tour.location}</p>
                        <p className="text-muted-foreground">{tour.overview}</p>
                    </div>
                </div>
                <div className="col-span-1 p-12">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label className="block text-sm font-medium">
                                Quantity
                            </label>
                            <input
                                type="number"
                                value={data.quantity}
                                onChange={(e) =>
                                    setData("quantity", e.target.value)
                                }
                                className="w-full border bg-primary rounded  p-2"
                            />
                            {errors.quantity && (
                                <p className="text-red-500 text-sm">
                                    {errors.quantity}
                                </p>
                            )}
                        </div>

                        <div>
                            <label className="block text-sm font-medium">
                                Note
                            </label>
                            <textarea
                                value={data.note}
                                onChange={(e) =>
                                    setData("note", e.target.value)
                                }
                                className="w-full bg-primary  border rounded p-2"
                            />
                            {errors.note && (
                                <p className="text-red-500 text-sm">
                                    {errors.note}
                                </p>
                            )}
                        </div>
                        <div className="flex gap-4 justify-end">
                            Total price :<span>{data.total_price}</span>
                        </div>
                        <div>
                            <label className="block text-sm font-medium">
                                Transfer Proof
                            </label>
                            <input
                                type="file"
                                onChange={handleFileChange}
                                className="w-full text-primary border rounded p-2"
                            />
                            {preview && (
                                <img
                                    src={preview}
                                    alt="Preview"
                                    className="mt-2 w-40 h-40 object-cover rounded"
                                />
                            )}
                            {errors.transfer_proof && (
                                <p className="text-red-500 text-sm">
                                    {errors.transfer_proof}
                                </p>
                            )}
                        </div>

                        <Button
                            variant="secondary"
                            type="submit"
                            disabled={processing}
                            className="w-full mt-4"
                        >
                            {processing ? "Submitting..." : "Submit"}
                        </Button>
                    </form>
                </div>
            </div>
        </ClientLayout>
    );
};

export default Booking;
