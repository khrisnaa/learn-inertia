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
        $member = User::firstOrCreate([
            'email' => 'member@example.com',
        ], [
            'name' => 'Member User',
            'password' => bcrypt('password123'),
        ]);
        $member->assignRole($memberRole);

        $this->command->info('Admin & Member created successfully.');
    }
}
