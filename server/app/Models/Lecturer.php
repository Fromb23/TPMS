<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Lecturer extends Model
{
      use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',          
        'full_name',
        'department',
        'zone_id',
    ];
    public function user()
    {
        return $this->belongsTo(User::class, 'id', 'id');
    }
    public function zone()
    {
        return $this->belongsTo(Zone::class, 'zone_id', 'id');
    }
}
