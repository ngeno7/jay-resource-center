<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Representative extends Model
{
	protected $table = 'sale_representatives';
    //
    public $timestamps = false;
    protected $casts = [
    	'sponsers_ids' => 'Array',
    ];
}
