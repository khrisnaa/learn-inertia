<?php

namespace App\Http\Controllers\Client;

use App\Http\Controllers\Controller;
use App\Mail\ContactMail;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    public function index()
    {
        return inertia('Client/Contact');
    }

    public function send(Request $request)
    {
        $validatedData = $request->validate([
            'name' => 'required|string',
            'email' => 'required|email',
            'message' => 'required|string'
        ]);

        Mail::to('your-email@example.com')->send(new ContactMail($validatedData));

        // Return success response for Inertia
        return back()->with('success', 'Email sent successfully!');
    }
}
