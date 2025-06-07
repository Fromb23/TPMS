<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class School extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['id', 'name', 'address', 'zone_id'];

    public function zone()
    {
        return $this->belongsTo(Zone::class, 'zone_id');
    }
}
