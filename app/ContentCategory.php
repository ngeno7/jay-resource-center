<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ContentCategory extends Model
{
    //
    public $primaryKey = 'industryid';
    public $timestamps = false;
    protected $table='content_category_industry';


}
