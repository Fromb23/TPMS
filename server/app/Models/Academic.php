<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Academic extends Model
{
    use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'lecturer_id',
        'title',
        'content',
    ];

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class);
    }
}
