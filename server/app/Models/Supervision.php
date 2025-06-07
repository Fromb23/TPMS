<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Supervision extends Model
{
    use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'student_id',
        'lecturer_id',
        'is_primary',
    ];

    // Relationships
    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class);
    }
}
