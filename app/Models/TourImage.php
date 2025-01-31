<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TourImage extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'tour_id',
        'image_url'
    ];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }

}
