<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Booking;
use App\Models\Tour;
use Illuminate\Http\Request;
use Inertia\Inertia;

class BookingController extends Controller
{
    public function create($id)
    {
        $tour = Tour::findOrFail($id);
        return inertia('Client/Booking', compact('tour'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'tour_id' => 'required|string|max:255',
            'user_id' => 'required|string|max:255',
            'quantity' => 'required|integer',
            'note' => 'nullable|string'
        ]);

        $tour = Tour::findOrFail($request->tour_id);
        $totalPrice = $tour->price * $request->quantity;

        Booking::create([
            'tour_id' => $request->tour_id,
            'user_id' => $request->user_id,
            'quantity' => $request->quantity,
            'total_price' => $totalPrice,
            'note' => $request->note
        ]);

        $phoneNumber = '6282266113097';

        $message = "Hello, I want to book a tour with the following details:\n";
        $message .= "🔹 *Tour:* {$tour->name}\n";
        $message .= "📍 *Location:* {$tour->location}\n";
        $message .= "⏳ *Duration:* {$tour->duration}\n";
        $message .= "👥 *Quantity:* {$request->quantity}\n";
        $message .= "💰 *Total Price:* $" . number_format($totalPrice, 2) . "\n";
        if ($request->note) {
            $message .= "📝 *Note:* {$request->note}\n";
        }

        $whatsappUrl = "https://wa.me/{$phoneNumber}?text=" . urlencode($message);

        return Inertia::location($whatsappUrl);
    }
}
