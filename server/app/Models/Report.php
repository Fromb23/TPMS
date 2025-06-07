<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Concerns\HasUuids;

class Report extends Model
{
    use HasUuids;

    public $incrementing = false;
    protected $keyType = 'string';

    protected $fillable = [
        'id',
        'type',
        'student_id',
        'description',
        'reported_id',
        'target_type',
    ];

    public function student()
    {
        return $this->belongsTo(Student::class);
    }

    // Polymorphic relation simulation (manual) based on target_type
    public function reported()
    {
        // You could implement this with polymorphic relations or manual logic in controller
    }
}
