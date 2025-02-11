<?php

namespace App\Http\Controllers;

use App\Models\Booking;
use App\Models\Review;
use Illuminate\Http\Request;

class ReviewController extends Controller
{
    public function store(Request $request)
    {


        $request->validate([
            'user_id' => 'required|exists:users,id',
            'booking_id' => 'required|exists:bookings,id',
            'rating' => 'required|integer|min:1|max:5',
            'comment' => 'nullable|string|max:500',
            'images' => 'nullable|array',
            'images.*' => 'image|mimes:jpeg,png,jpg,gif|max:5000',
        ]);



        $booking = Booking::with('tour')->find($request->booking_id);

        if (!$booking || !$booking->tour) {
            return response()->json(['message' => 'Booking or tour not found'], 404);
        }

        // Simpan review
        $review = Review::create([
            'user_id' => $request->user_id,
            'tour_id' => $booking->tour->id,
            'booking_id' => $booking->id,
            'rating' => $request->rating,
            'comment' => $request->comment
        ]);

        // Simpan gambar jika ada
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $photo) {
                $photoPath = $photo->store('review-images', 'public');

                // Simpan ke tabel images dengan relasi ke review
                $review->images()->create([
                    'image_url' => $photoPath
                ]);
            }
        }

        return redirect(route('profile.edit', absolute: false));
    }
}
