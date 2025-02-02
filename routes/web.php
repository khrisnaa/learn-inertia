<?php

use App\Http\Controllers\Client\HomeController as ClientHomeController;
use App\Http\Controllers\Client\FavoriteController as ClientFavoriteController;
use App\Http\Controllers\Client\TourController as ClientTourController;
use App\Http\Controllers\Client\ContactController as ClientContactController;

use App\Http\Controllers\ProfileController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});


// Client Routes
Route::name('client.')->group(function () {
    Route::get('/home', [ClientHomeController::class, 'index'])->name('home');
    Route::get('/explore', [ClientTourController::class, 'index'])->name('tours.index');
    Route::get('/explore/{id}', [ClientTourController::class, 'show'])->name('tours.show');
    Route::get('/wishlist', [ClientFavoriteController::class, 'index'])->name('favorites.index');
    Route::post('/wishlist', [ClientFavoriteController::class, 'store'])->name('favorites.store');
    // Route::post('/favorites/{tour}', [ClientFavoriteController::class, 'store'])->name('favorites.store');
    // Route::delete('/favorites/{tour}', [ClientFavoriteController::class, 'destroy'])->name('favorites.destroy');
    Route::get('/contact-us', [ClientContactController::class, 'index'])->name('contact.index');
    // Route::post('/contact-us', [ClientContactController::class, 'store'])->name('contact.store');
});


require __DIR__.'/auth.php';
