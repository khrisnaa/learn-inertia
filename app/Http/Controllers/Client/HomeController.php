<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Models\Category;
use App\Models\Faq;
use App\Models\HeroSlider;
use App\Models\Tour;

class HomeController extends Controller
{
    public function index()
    {
        $highlightTours = HeroSlider::where('is_active', true)->with('tour.categories')->orderBy('created_at', 'desc')->get();
        $recommendedTours = Tour::where('is_recommended', true)->orderByDesc('updated_at', 'desc')->take(5)->get();

        $faqs = Faq::all();
        $categories = Category::all();
        return inertia('Client/Home', compact('highlightTours', 'recommendedTours', 'faqs', 'categories'));
    }
}
