<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Tour;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HomeController extends Controller
{
    public function index()
    {
        $highlightTours = Tour::with('categories')->orderByDesc('updated_at')->take(5)->get();
        $recommendedTours = Tour::with('categories')->orderByDesc('updated_at')->take(5)->get();
        return inertia('Client/Home', compact('highlightTours', 'recommendedTours'));
    }
}
