<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Student extends Model
{
    use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'full_name',
        'school_id',
        'year_of_study',
        'assigned_zone_id',
    ];

    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id');
    }

    public function school()
    {
        return $this->belongsTo(School::class);
    }

    public function assignedZone()
    {
        return $this->belongsTo(Zone::class, 'assigned_zone_id');
    }
}
