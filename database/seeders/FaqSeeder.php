<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\DB;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class FaqSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run()
    {
        $faqs = [
            [
                'question' => "What’s included in the tour package, and are there any extra fees?",
                'answer' => "The package covers accommodation, meals, local transport, and activities. Extra fees may apply for optional add-ons or personal expenses."
            ],
            [
                'question' => "Does the tour include transportation, and what type is used?",
                'answer' => "Yes, transportation is provided, including jeep safaris and local transport, depending on the tour."
            ],
            [
                'question' => "How do I book a tour, and can I get help if I have trouble?",
                'answer' => "Simply choose your package and follow the booking process. Our customer support team is available if you need assistance."
            ],
            [
                'question' => "What should I pack, and do you provide gear for activities?",
                'answer' => "Pack light, comfortable clothing and sturdy shoes. We provide the necessary gear for activities like trekking or diving."
            ]
        ];

        foreach ($faqs as $faq) {
            DB::table('faqs')->insert([
                'id' => Str::uuid(),
                'question' => $faq['question'],
                'answer' => $faq['answer'],
                'created_at' => now(),
                'updated_at' => now()
            ]);
        }
    }
}
