<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Favorite;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class FavoriteController extends Controller
{
    public function index()
    {
        if (! Auth::check()) {
            return redirect()->route('login');
        }

        $userId = Auth::id();

        $tours = Favorite::where('user_id', $userId)->with('tour.categories')->get();

        if ($tours->isEmpty()) {
            $tours = null;
        }

        return inertia('Client/Favorites', compact('tours'));
    }

    public function store(Request $request)
    {
        if (! Auth::check()) {
            return redirect()->route('login');
        }

        Favorite::firstOrCreate([
            "tour_id" => $request->id,
            "user_id" => Auth::id()
        ]);

        return back()->with('success', 'Added to wishlist!');
    }
}
