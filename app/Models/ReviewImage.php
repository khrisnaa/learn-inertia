<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class ReviewImage extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = ['review_id', 'image_url'];

    public function review()
    {
        return $this->belongsTo(Review::class);
    }
}
