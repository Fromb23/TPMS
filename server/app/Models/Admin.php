<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Admin extends Model
{
    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = ['id', 'full_name'];

    public function user()
    {
        return $this->belongsTo(User::class, 'id');
    }
}
