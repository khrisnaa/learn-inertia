<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class TourController extends Controller
{
    public function index()
    {
        return inertia('Client/Tours/Index');
    }

    public function show()
    {
        return inertia('Client/Tours/Show');
    }
}
