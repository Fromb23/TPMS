<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Support\Str;

class TpApplication extends Model
{
    use HasFactory;

    protected $table = 'tp_applications';

    protected $keyType = 'string';
    public $incrementing = false;

    protected $fillable = [
        'id',
        'student_id',
        'school_name',
        'position',
        'start_date',
        'end_date',
        'status',
    ];

    protected $casts = [
        'start_date' => 'date',
        'end_date' => 'date',
    ];

    protected static function boot()
    {
        parent::boot();

        static::creating(function ($model) {
            if (empty($model->id)) {
                $model->id = (string) Str::uuid();
            }
        });
    }

    // Relation to Student
    public function student()
    {
        return $this->belongsTo(Student::class, 'student_id');
    }
}