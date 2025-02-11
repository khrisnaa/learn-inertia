<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Concerns\HasUuids;
use Illuminate\Database\Eloquent\Model;

class Contact extends Model
{
    use HasUuids;

    protected $fillable = [
        'company_name',
        'city',
        'country',
        'address',
        'phone',
        'email'
    ];
}
