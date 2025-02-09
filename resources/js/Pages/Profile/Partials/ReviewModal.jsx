import React, { useState } from "react";
import { useForm } from "@inertiajs/react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/Components/ui/dialog";
import { Button } from "@/Components/ui/button";
import { Textarea } from "@/Components/ui/textarea";
import { Label } from "@/Components/ui/label";
import { Input } from "@/Components/ui/input";
import { ArrowRight, Star } from "lucide-react";

const ReviewModal = ({ bookingId }) => {
    const { data, setData, post, errors, processing } = useForm({
        comment: "",
        rating: 0,
        images: [],
    });

    const [previewImages, setPreviewImages] = useState([]);

    const handleImageChange = (e) => {
        const files = Array.from(e.target.files);
        setData("images", files);

        const previews = files.map((file) => URL.createObjectURL(file));
        setPreviewImages(previews);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        post(route("reviews.store", { booking: bookingId }));
    };

    return (
        <Dialog>
            <DialogTrigger>
                <span className="text-sm flex items-center gap-2 group">
                    Give Review
                    <ArrowRight className="h-4 w-4 group-hover:translate-x-2 transition-all duration-500" />
                </span>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Write a Review</DialogTitle>
                </DialogHeader>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <Label>Rating</Label>
                        <div className="flex gap-1">
                            {[1, 2, 3, 4, 5].map((star) => (
                                <Star
                                    key={star}
                                    className={`w-6 h-6 cursor-pointer ${
                                        data.rating >= star
                                            ? "text-yellow-500"
                                            : "text-gray-300"
                                    }`}
                                    onClick={() => setData("rating", star)}
                                />
                            ))}
                        </div>
                        {errors.rating && (
                            <p className="text-sm text-red-600">
                                {errors.rating}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label>Comment</Label>
                        <Textarea
                            value={data.comment}
                            onChange={(e) => setData("comment", e.target.value)}
                            placeholder="Write your review..."
                        />
                        {errors.comment && (
                            <p className="text-sm text-red-600">
                                {errors.comment}
                            </p>
                        )}
                    </div>

                    <div>
                        <Label>Upload Images</Label>
                        <Input
                            type="file"
                            accept="image/*"
                            multiple
                            onChange={handleImageChange}
                        />
                        <div className="flex gap-2 mt-2">
                            {previewImages.map((src, index) => (
                                <img
                                    key={index}
                                    src={src}
                                    alt="Preview"
                                    className="w-16 h-16 object-cover rounded"
                                />
                            ))}
                        </div>
                        {errors.images && (
                            <p className="text-sm text-red-600">
                                {errors.images}
                            </p>
                        )}
                    </div>

                    <Button type="submit" disabled={processing}>
                        {processing ? "Submitting..." : "Submit Review"}
                    </Button>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default ReviewModal;
