<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Review extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'user_id',
        'tour_id',
        'booking_id',
        'rating',
        'comment',
        'image',
        'is_visible',
        'is_highlight'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    public function booking()
    {
        return $this->belongsTo(Booking::class);
    }

    public function images()
    {
        return $this->hasMany(ReviewImage::class);
    }
}
