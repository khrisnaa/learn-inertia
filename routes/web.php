<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\Client\ContactController;

use App\Http\Controllers\Client\HomeController as ClientHomeController;
use App\Http\Controllers\Client\TourController as ClientTourController;
use App\Http\Controllers\Client\BookingController as ClientBookingController;
use App\Http\Controllers\Client\ContactController as ClientContactController;
use App\Http\Controllers\Client\FavoriteController as ClientFavoriteController;
use App\Http\Controllers\ReviewController;

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');


Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::post('/review', [ReviewController::class, 'store'])->name('review.store');
});


// Client Routes
Route::name('client.')->group(function () {
    Route::get('/', [ClientHomeController::class, 'index'])->name('home');
    Route::get('/explore', [ClientTourController::class, 'index'])->name('tours.index');
    Route::get('/explore/{id}', [ClientTourController::class, 'show'])->name('tours.show');
    Route::get('/contact-us', [ClientContactController::class, 'index'])->name('contact.index');

    Route::middleware('auth')->group(function () {
        Route::get('/wishlist', [ClientFavoriteController::class, 'index'])->name('favorites.index');
        Route::post('/wishlist', [ClientFavoriteController::class, 'store'])->name('favorites.store');
        Route::get('/booking/{id}', [ClientBookingController::class, 'create'])->name('booking.create');
        Route::post('/booking', [ClientBookingController::class, 'store'])->name('booking.store');
    });
});


Route::post('/send-email', [ContactController::class, 'send'])->name('contact.send');

require __DIR__ . '/auth.php';
