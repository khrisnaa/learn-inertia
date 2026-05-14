<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class HeroSliderSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Get some tour IDs to be featured in the hero slider
        $tours = DB::table('tours')->limit(5)->get();

        foreach ($tours as $tour) {
            DB::table('hero_sliders')->insert([
                'id' => Str::uuid(),
                'tour_id' => $tour->id,
                'is_active' => true,
                'created_at' => now(),
                'updated_at' => now(),
            ]);
        }
    }
}
