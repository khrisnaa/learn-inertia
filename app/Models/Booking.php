<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Booking extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'user_id',
        'tour_id',
        'quantity',
        'total_price',
        'status',
        'note',
        'booking_date',
        'transfer_proof'
    ];

    public function user()
    {
        return $this->belongsTo(User::class);
    }

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

    public function reviews()
    {
        return $this->hasMany(Review::class);
    }
}
