<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Support\Facades\DB;

class TourSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        // Categories
        $categories = [
            'Rainforest', 'Wildlife', 'Adventure', 'Camping', 'Savanna', 'Safari', 'Nature',
            'Marine', 'Mangrove', 'Birdwatching', 'Diving', 'Desert', 'Sunrise', 'Trekking', 'Photography', 'Jungle', 'Mountain', 'Culture', 'Temple', 'Coral', 'Caves', 'Whale Watching'
        ];

        $categoryIds = [];
        foreach ($categories as $category) {
            $id = Str::uuid();
            DB::table('categories')->insert(['id' => $id, 'name' => $category]);
            $categoryIds[$category] = $id;
        }

        // Tours
        $tours = [
            [
                'name' => 'Tropical Rainforest Adventure - Gunung Leuser',
                'headline' => 'Vibrant rainforest adventure with orangutans and exotic wildlife',
                'duration' => '3 Days 2 Nights',
                'location' => 'Gunung Leuser National Park, Sumatra',
                'price' => 170.00,
                'overview' => 'Explore the lush rainforest, spot orangutans, elephants, and exotic birds, and camp under the stars in this immersive wildlife experience.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'categories' => ['Rainforest', 'Wildlife', 'Adventure', 'Camping'],
                'includes' => ['Local guide', 'Meals and drinks', 'Camping gear', 'Entry fees'],
                'highlights' => ['Jungle trekking', 'Wildlife observation', 'Nature conservation insights'],
                'images' => ['/assets/images/rainforest1.jpg', '/assets/images/rainforest2.jpg']
            ],
            [
                'name' => 'Savanna Safari - Baluran National Park',
                'headline' => 'Vast savanna and vibrant wildlife in East Java’s wildlands',
                'duration' => '2 Days 1 Night',
                'location' => 'Baluran, East Java',
                'price' => 120.00,
                'overview' => 'Discover the "Little Africa in Java," with its vast savanna, mangrove forests, and diverse wildlife like deer, banteng, and peacocks.',
                'thumbnail' => '/assets/images/savana.jpg',
                'categories' => ['Savanna', 'Wildlife', 'Safari', 'Nature'],
                'includes' => ['Jeep safari', 'Simple accommodation', 'Meals', 'Entry fees'],
                'highlights' => ['Jeep safari through the savanna', 'Mangrove trekking', 'Sunrise at Bama Beach'],
                'images' => ['/assets/images/savana1.jpg', '/assets/images/savana2.jpg']
            ],
            [
                'name' => 'Marine & Mangrove Exploration - Raja Ampat',
                'headline' => 'Diving in Raja Ampat\'s pristine coral reefs and mangroves',
                'duration' => '5 Days 4 Nights',
                'location' => 'Raja Ampat, West Papua',
                'price' => 670.00,
                'overview' => 'Dive into Raja Ampat\'s vibrant coral reefs, explore mangrove forests, and spot exotic birds like the Bird of Paradise.',
                'thumbnail' => '/assets/images/rajaampat.jpg',
                'categories' => ['Marine', 'Mangrove', 'Birdwatching', 'Diving', 'Adventure'],
                'includes' => ['Eco-resort stay', 'Snorkeling/diving gear', 'Local transport', 'Guided tours'],
                'highlights' => ['Snorkeling/diving', 'Birdwatching', 'Local cultural visits'],
                'images' => ['/assets/images/rajaampat1.jpg', '/assets/images/rajaampat2.jpg']
            ],
            [
                'name' => 'Desert Adventure - Mount Bromo',
                'headline' => 'Explore the mystical desert landscape of Mount Bromo',
                'duration' => '2 Days 1 Night',
                'location' => 'Mount Bromo, East Java',
                'price' => 100.00,
                'overview' => 'Experience the dramatic desert landscape of Bromo, sunrise views, and a trek to the crater.',
                'thumbnail' => '/assets/images/bromo.jpg',
                'categories' => ['Desert', 'Adventure', 'Sunrise', 'Trekking'],
                'includes' => ['Jeep and horse transport', 'Local accommodation', 'Meals'],
                'highlights' => ['Sunrise at Penanjakan', 'Crater trekking', 'Sand dune exploration'],
                'images' => ['/assets/images/bromo1.jpg', '/assets/images/bromo2.jpg']
            ],
            [
                'name' => 'Birdwatching & Jungle Trek - Lorentz National Park',
                'headline' => 'Journey through untouched jungles and rare birdwatching',
                'duration' => '4 Days 3 Nights',
                'location' => 'Lorentz, Papua',
                'price' => 530.00,
                'overview' => 'Immerse yourself in pristine wilderness, with rare bird sightings and lush jungle trails in Southeast Asia\'s largest national park.',
                'thumbnail' => '/assets/images/lake.jpg',
                'categories' => ['Birdwatching', 'Jungle', 'Wildlife', 'Adventure', 'Photography'],
                'includes' => ['Licensed guide', 'Basic accommodation', 'Meals and drinks', 'Entry fees'],
                'highlights' => ['Birdwatching (Bird of Paradise)', 'Jungle trekking', 'Wildlife photography'],
                'images' => ['/assets/images/lake1.jpg', '/assets/images/lake2.jpg']
            ],
            [
                'name' => 'Mountain Escape - Mount Rinjani',
                'headline' => 'Challenging trek through volcanic landscapes in Lombok',
                'duration' => '4 Days 3 Nights',
                'location' => 'Mount Rinjani, Lombok',
                'price' => 380.00,
                'overview' => 'Conquer the majestic Mount Rinjani, camp at its crater lake, and enjoy panoramic views from the summit.',
                'thumbnail' => '/assets/images/rinjani.jpg',
                'categories' => ['Mountain', 'Trekking', 'Adventure', 'Nature'],
                'includes' => ['Experienced guide', 'Camping equipment', 'Meals', 'Entry fees'],
                'highlights' => ['Trekking to the summit', 'Crater lake camping', 'Stunning mountain views'],
                'images' => ['/assets/images/rinjani1.jpg', '/assets/images/rinjani2.jpg']
            ],
            [
                'name' => 'Cultural Exploration - Bali Highlands',
                'headline' => 'A cultural journey through Bali’s hidden villages and temples',
                'duration' => '3 Days 2 Nights',
                'location' => 'Bali, Indonesia',
                'price' => 250.00,
                'overview' => 'Delve into Bali’s culture by visiting ancient temples, sacred waterfalls, and picturesque rice terraces.',
                'thumbnail' => '/assets/images/bali-highlands.jpg',
                'categories' => ['Culture', 'Adventure', 'Nature', 'Temple'],
                'includes' => ['Cultural guide', 'Meals', 'Local transportation', 'Entry fees'],
                'highlights' => ['Visit to Tirta Empul temple', 'Waterfall exploration', 'Rice terrace trekking'],
                'images' => ['/assets/images/bali-highlands1.jpg', '/assets/images/bali-highlands2.jpg']
            ],
            [
                'name' => 'Coral Reef Expedition - Komodo Island',
                'headline' => 'Snorkel and dive in the crystal-clear waters of Komodo’s reefs',
                'duration' => '3 Days 2 Nights',
                'location' => 'Komodo Island, Flores',
                'price' => 400.00,
                'overview' => 'Explore the underwater wonders of Komodo National Park, home to vibrant coral reefs, manta rays, and sea turtles.',
                'thumbnail' => '/assets/images/komodo.jpg',
                'categories' => ['Marine', 'Coral', 'Diving', 'Adventure'],
                'includes' => ['Snorkeling gear', 'Eco-lodge accommodation', 'Meals', 'Park entry fees'],
                'highlights' => ['Snorkeling with manta rays', 'Coral reef exploration', 'Wildlife spotting'],
                'images' => ['/assets/images/komodo1.jpg', '/assets/images/komodo2.jpg']
            ],
            [
                'name' => 'Cave Exploration - Gunung Kidul',
                'headline' => 'Explore the mystical caves and waterfalls of Gunung Kidul',
                'duration' => '2 Days 1 Night',
                'location' => 'Gunung Kidul, Yogyakarta',
                'price' => 90.00,
                'overview' => 'Venture into the depths of Gunung Kidul’s caves, discover underground rivers, and marvel at the limestone formations.',
                'thumbnail' => '/assets/images/gunung-kidul.jpg',
                'categories' => ['Caves', 'Adventure', 'Nature'],
                'includes' => ['Cave exploration guide', 'Meals', 'Transport'],
                'highlights' => ['Cave trekking', 'Waterfall exploration', 'Underground river'],
                'images' => ['/assets/images/gunung-kidul1.jpg', '/assets/images/gunung-kidul2.jpg']
            ],
            [
                'name' => 'Whale Watching - Aceh',
                'headline' => 'Whale watching expedition off the coast of Aceh',
                'duration' => '2 Days 1 Night',
                'location' => 'Aceh, Sumatra',
                'price' => 210.00,
                'overview' => 'Join an unforgettable journey to spot the majestic whales that migrate through the coast of Aceh.',
                'thumbnail' => '/assets/images/whale-watching.jpg',
                'categories' => ['Whale Watching', 'Marine', 'Wildlife', 'Adventure'],
                'includes' => ['Boat transport', 'Meals', 'Wildlife guide'],
                'highlights' => ['Whale spotting', 'Coastal sightseeing', 'Marine life observation'],
                'images' => ['/assets/images/whale-watching1.jpg', '/assets/images/whale-watching2.jpg']
            ],
            [
                'name' => 'Sunrise Trek - Mount Rinjani',
                'headline' => 'Witness the breathtaking sunrise from the summit of Mount Rinjani',
                'duration' => '3 Days 2 Nights',
                'location' => 'Mount Rinjani, Lombok',
                'price' => 250.00,
                'overview' => 'Climb Indonesia’s second highest volcano, Mount Rinjani, and experience a stunning sunrise from the summit.',
                'thumbnail' => '/assets/images/rinjani.jpg',
                'categories' => ['Trekking', 'Sunrise', 'Adventure'],
                'includes' => ['Trekking guide', 'Meals', 'Camping gear'],
                'highlights' => ['Sunrise from the summit', 'Crater lake exploration', 'Wildlife spotting'],
                'images' => ['/assets/images/rinjani1.jpg', '/assets/images/rinjani2.jpg']
            ]
        ];


        foreach ($tours as $tour) {
            $tourId = Str::uuid();
            DB::table('tours')->insert([
                'id' => $tourId,
                'name' => $tour['name'],
                'headline' => $tour['headline'],
                'duration' => $tour['duration'],
                'location' => $tour['location'],
                'price' => $tour['price'],
                'overview' => $tour['overview'],
                'thumbnail' => $tour['thumbnail'],
            ]);

            foreach ($tour['categories'] as $categoryName) {
                DB::table('category_tour')->insert([
                    'tour_id' => $tourId,
                    'category_id' => $categoryIds[$categoryName],
                ]);
            }

            foreach ($tour['includes'] as $include) {
                DB::table('tour_includes')->insert([
                    'id' => Str::uuid(),
                    'tour_id' => $tourId,
                    'include_item' => $include,
                ]);
            }

            foreach ($tour['highlights'] as $highlight) {
                DB::table('tour_highlights')->insert([
                    'id' => Str::uuid(),
                    'tour_id' => $tourId,
                    'highlight_item' => $highlight,
                ]);
            }

            foreach ($tour['images'] as $imageUrl) {
                DB::table('tour_images')->insert([
                    'id' => Str::uuid(),
                    'tour_id' => $tourId,
                    'image_url' => $imageUrl,
                ]);
            }
        }
    }
}
