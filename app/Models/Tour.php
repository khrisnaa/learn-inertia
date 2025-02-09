<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Tour extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'name',
        'headline',
        'duration',
        'location',
        'price',
        'overview',
        'thumbnail',
        'is_recommended',
        'is_highlighted'
    ];

    public function categories()
    {
        return $this->belongsToMany(Category::class);
    }

    public function images()
    {
        return $this->hasMany(TourImage::class);
    }

    public function includes()
    {
        return $this->hasMany(TourInclude::class);
    }

    public function highlights()
    {
        return $this->hasMany(TourHighlight::class);
    }

    public function favorites()
    {
        return $this->hasMany(Favorite::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }

    public function bookings()
    {
        return $this->hasMany(Booking::class);
    }

    public function sliders()
    {
        return $this->hasMany(HeroSlider::class);
    }
}
