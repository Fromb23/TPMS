<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class SupervisionVisit extends Model
{
    use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'lecturer_id',
        'student_id',
        'date',
        'feedback',
        'score',
    ];

    public function lecturer()
    {
        return $this->belongsTo(Lecturer::class);
    }

    public function student()
    {
        return $this->belongsTo(Student::class);
    }
}