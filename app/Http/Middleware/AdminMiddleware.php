<?php

namespace App\Http\Middleware;

use Closure;
use Filament\Facades\Filament;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;

class AdminMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next): Response
    {
        $user = Filament::auth()->user();

        // Jika user tidak login atau bukan admin, redirect ke halaman lain
        if (!$user || !$user->hasRole('admin')) {
            return redirect()->route('client.home'); // Ganti 'home' dengan rute tujuan
        }

        return $next($request);
    }
}
