<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;

class ContactSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        DB::table('contacts')->insert([
            'id' => Str::uuid(),
            'company_name' => 'Dredge Adventure & Travel',
            'city' => 'Denpasar',
            'country' => 'Indonesia',
            'address' => 'Jl. Bypass Ngurah Rai No. 123, Sanur, Denpasar Selatan, Bali 80228',
            'phone' => '+62 812 3456 7890',
            'email' => 'hello@dredge-adventure.com',
            'created_at' => now(),
            'updated_at' => now(),
        ]);
    }
}
