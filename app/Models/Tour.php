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
        'thumbnail'
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
}
