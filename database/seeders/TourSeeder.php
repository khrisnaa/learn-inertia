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
            'Rainforest',
            'Wildlife',
            'Adventure',
            'Camping',
            'Savanna',
            'Safari',
            'Nature',
            'Marine',
            'Mangrove',
            'Birdwatching',
            'Diving',
            'Desert',
            'Sunrise',
            'Trekking',
            'Photography',
            'Jungle',
            'Mountain',
            'Culture',
            'Temple',
            'Coral',
            'Caves',
            'Whale Watching',
            'Island',
            'Beach',
            'Luxury',
            'Snorkeling'
        ];

        $categoryIds = [];
        foreach ($categories as $category) {
            $id = Str::uuid();
            DB::table('categories')->insert(['id' => $id, 'name' => $category]);
            $categoryIds[$category] = $id;
        }

        // Tours
        $tours = [
            // Rainforest & Wildlife (3 Tours)
            [
                'name' => 'Tropical Rainforest Adventure - Gunung Leuser',
                'headline' => 'Vibrant rainforest adventure with orangutans and exotic wildlife',
                'duration' => '3 Days 2 Nights',
                'location' => 'Gunung Leuser National Park, Sumatra',
                'price' => 170.00,
                'overview' => 'Explore the lush rainforest, spot orangutans, elephants, and exotic birds, and camp under the stars.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Rainforest', 'Wildlife', 'Adventure'],
                'includes' => ['Local guide', 'Meals', 'Camping gear', 'Entry fees'],
                'highlights' => ['Jungle trekking', 'Wildlife observation'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Rainforest Trekking - Borneo',
                'headline' => 'Experience Borneo’s deep rainforest and its diverse wildlife',
                'duration' => '4 Days 3 Nights',
                'location' => 'Kalimantan, Borneo',
                'price' => 250.00,
                'overview' => 'Trek through untouched rainforest, observe orangutans, and immerse yourself in nature.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Rainforest', 'Wildlife', 'Trekking'],
                'includes' => ['Jungle guide', 'Meals', 'Accommodation'],
                'highlights' => ['Wildlife photography', 'River safari'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Wildlife Safari - Way Kambas',
                'headline' => 'Explore the hidden wildlife gems of Sumatra’s Way Kambas National Park',
                'duration' => '2 Days 1 Night',
                'location' => 'Way Kambas, Sumatra',
                'price' => 150.00,
                'overview' => 'Spot Sumatran elephants, tigers, and rhinos in their natural habitat.',
                'thumbnail' => '/assets/imagesrainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Wildlife', 'Rainforest', 'Safari'],
                'includes' => ['Wildlife guide', 'Meals', 'Safari transport'],
                'highlights' => ['Jeep safari', 'Birdwatching'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],

            // Savanna & Desert (5 Tours)
            [
                'name' => 'Savanna Safari - Baluran National Park',
                'headline' => 'Vast savanna and vibrant wildlife in East Java’s wildlands',
                'duration' => '2 Days 1 Night',
                'location' => 'Baluran, East Java',
                'price' => 120.00,
                'overview' => 'Discover the "Little Africa in Java" with its diverse wildlife.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Savanna', 'Wildlife', 'Safari'],
                'includes' => ['Jeep safari', 'Meals'],
                'highlights' => ['Jeep safari', 'Sunrise at Bama Beach'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Desert Adventure - Mount Bromo',
                'headline' => 'Explore the mystical desert landscape of Mount Bromo',
                'duration' => '2 Days 1 Night',
                'location' => 'Mount Bromo, East Java',
                'price' => 100.00,
                'overview' => 'Experience the dramatic desert landscape of Bromo, sunrise views, and a trek to the crater.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Desert', 'Adventure', 'Trekking'],
                'includes' => ['Jeep transport', 'Accommodation'],
                'highlights' => ['Sunrise at Penanjakan', 'Crater trekking'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Savanna Sunset - Sumba Island',
                'headline' => 'Witness breathtaking sunsets over Sumba’s golden savannas',
                'duration' => '3 Days 2 Nights',
                'location' => 'Sumba Island, Indonesia',
                'price' => 200.00,
                'overview' => 'Explore Sumba’s rolling hills, interact with local tribes, and enjoy scenic savannas.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Savanna', 'Culture', 'Adventure'],
                'includes' => ['Cultural guide', 'Meals'],
                'highlights' => ['Tribal village visit', 'Horse riding'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Desert Dunes - Merapi Sand Hills',
                'headline' => 'Explore volcanic desert dunes on Merapi’s foothills',
                'duration' => '1 Day',
                'location' => 'Yogyakarta, Indonesia',
                'price' => 80.00,
                'overview' => 'Ride off-road jeeps across volcanic sand dunes and witness stunning landscapes.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Desert', 'Adventure'],
                'includes' => ['Jeep tour', 'Guide'],
                'highlights' => ['Sand dune adventure', 'Off-road driving'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Nomadic Desert Experience - Rote Island',
                'headline' => 'Experience the dry savanna and sand dunes of Rote Island',
                'duration' => '3 Days 2 Nights',
                'location' => 'Rote Island, East Nusa Tenggara',
                'price' => 230.00,
                'overview' => 'Discover the untouched beauty of Rote Island’s sand dunes and grasslands.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Desert', 'Savanna', 'Adventure'],
                'includes' => ['Camping gear', 'Local guide'],
                'highlights' => ['Camping under the stars', 'Traditional weaving'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],

            // Beach & Island (5 Tours)
            [
                'name' => 'Island Paradise - Gili Islands',
                'headline' => 'Relax and snorkel in the pristine waters of the Gili Islands',
                'duration' => '4 Days 3 Nights',
                'location' => 'Gili Islands, Lombok',
                'price' => 300.00,
                'overview' => 'Enjoy tropical island life with crystal-clear waters and vibrant coral reefs.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Island', 'Beach', 'Diving'],
                'includes' => ['Boat transport', 'Snorkeling gear'],
                'highlights' => ['Turtle snorkeling', 'Sunset beach'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Komodo Island Exploration',
                'headline' => 'Visit the legendary Komodo dragons and stunning beaches',
                'duration' => '3 Days 2 Nights',
                'location' => 'Komodo National Park',
                'price' => 450.00,
                'overview' => 'Encounter the prehistoric Komodo dragons and snorkel in vibrant coral reefs.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Island', 'Wildlife', 'Beach'],
                'includes' => ['Park entry fees', 'Boat transport'],
                'highlights' => ['Komodo dragon encounter', 'Pink beach'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],
            [
                'name' => 'Raja Ampat Diving Expedition',
                'headline' => 'Discover the world’s most breathtaking underwater paradise',
                'duration' => '5 Days 4 Nights',
                'location' => 'Raja Ampat, West Papua',
                'price' => 750.00,
                'overview' => 'Explore pristine coral reefs, encounter manta rays, and immerse yourself in the untouched beauty of Raja Ampat.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Island', 'Beach', 'Diving'],
                'includes' => ['Diving gear', 'Boat transport', 'Accommodation'],
                'highlights' => ['Scuba diving', 'Snorkeling with manta rays'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],

            [
                'name' => 'Bali Hidden Beach Retreat',
                'headline' => 'Escape to Bali’s most secluded and serene beaches',
                'duration' => '3 Days 2 Nights',
                'location' => 'Uluwatu, Bali',
                'price' => 280.00,
                'overview' => 'Relax on hidden white-sand beaches, explore sea caves, and enjoy the stunning sunset views of Uluwatu.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Beach', 'Island', 'Luxury'],
                'includes' => ['Beachfront villa', 'Private transport'],
                'highlights' => ['Hidden beaches', 'Luxury villa stay'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],

            [
                'name' => 'Weh Island Snorkeling Getaway',
                'headline' => 'Snorkel in the untouched reefs of Weh Island',
                'duration' => '4 Days 3 Nights',
                'location' => 'Weh Island, Aceh',
                'price' => 320.00,
                'overview' => 'Experience vibrant marine life, crystal-clear waters, and a peaceful island escape in Weh Island.',
                'thumbnail' => '/assets/images/rainforest.jpg',
                'is_recommended' => false,
                'is_highlighted' => false,
                'categories' => ['Island', 'Beach', 'Snorkeling'],
                'includes' => ['Snorkeling tour', 'Local guide', 'Meals'],
                'highlights' => ['Snorkeling adventure', 'Sunset at Iboih Beach'],
                'images' => ['/assets/images/rainforest.jpg', '/assets/images/rainforest.jpg']
            ],

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
