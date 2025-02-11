<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class RoleAndUserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $adminRole = Role::firstOrCreate(['name' => 'admin']);
        $memberRole = Role::firstOrCreate(['name' => 'member']);

        // Buat Admin
        $admin = User::firstOrCreate([
            'email' => 'admin@example.com',
        ], [
            'name' => 'Admin User',
            'password' => bcrypt('password123'),
        ]);
        $admin->assignRole($adminRole);

        // Buat Member
        $member1 = User::firstOrCreate([
            'email' => 'john.doe@example.com',
        ], [
            'name' => 'John Doe',
            'password' => bcrypt('password123'),
            'city' => 'New York',
            'country' => 'USA',
        ]);
        $member1->assignRole($memberRole);

        $member2 = User::firstOrCreate([
            'email' => 'jane.smith@example.com',
        ], [
            'name' => 'Jane Smith',
            'password' => bcrypt('password123'),
            'city' => 'Los Angeles',
            'country' => 'USA',
        ]);
        $member2->assignRole($memberRole);

        $member3 = User::firstOrCreate([
            'email' => 'michael.jordan@example.com',
        ], [
            'name' => 'Michael Jordan',
            'password' => bcrypt('password123'),
            'city' => 'Chicago',
            'country' => 'USA',
        ]);
        $member3->assignRole($memberRole);

        $member4 = User::firstOrCreate([
            'email' => 'emma.watson@example.com',
        ], [
            'name' => 'Emma Watson',
            'password' => bcrypt('password123'),
            'city' => 'London',
            'country' => 'UK',
        ]);
        $member4->assignRole($memberRole);


        $this->command->info('Admin & Member created successfully.');
    }
}
