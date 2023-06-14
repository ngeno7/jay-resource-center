<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductViews extends Model
{
    protected $table="product_views";

    public function userDetail()
    {
        return $this->belongsTo('App\Users','user_id','uid');

    }
}
