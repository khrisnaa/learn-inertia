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
}
