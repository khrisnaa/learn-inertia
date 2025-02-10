<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function index()
    {
        $firstTours = Tour::whereHas('categories', function ($query) {
            $query->whereIn('name', ['rainforest']);
        })
            ->with('categories')
            ->orderBy('created_at', 'desc')
            ->take(3)
            ->get();

        $secondTours = Tour::whereHas('categories', function ($query) {
            $query->whereIn('name', ['savanna', 'desert']);
        })
            ->with('categories')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        $thirdTours = Tour::whereHas('categories', function ($query) {
            $query->whereIn('name', ['beach', 'island']);
        })
            ->with('categories')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        return inertia('Client/Tours/Index', compact('firstTours', 'secondTours', 'thirdTours'));
    }

    public function show($id)
    {
        $tour = Tour::with(['categories', 'images', 'includes', 'highlights', 'reviews.user', 'reviews.images'])->findOrFail($id);
        return inertia('Client/Tours/Show', compact('tour'));
    }
}
