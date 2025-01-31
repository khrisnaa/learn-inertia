<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class TourHighlight extends Model
{
    use HasUuids, SoftDeletes;

    protected $fillable = [
        'tour_id',
        'highlight_item'
    ];

    public function tour()
    {
        return $this->belongsTo(Tour::class);
    }
}
