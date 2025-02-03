<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
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
        dd($request->all());
    }
}
