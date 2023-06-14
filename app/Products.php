<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Products extends Model
{
    protected $table="products";

    public function user()
    {
        return $this->belongsTo('App\Users','user_id','uid');
    }
    public function user_category()
    {
        return $this->belongsTo('App\UserCategories','category_id','category_id');
    }

    public function product_features()
    {
        return $this->hasMany('App\ProductFeatures','product_id','product_id');
    }

    public function product_views()
    {
        return $this->hasMany('App\ProductViews','product_id','product_id');
    }

    public function product_anonymous_views()
    {
        return $this->hasMany('App\ProductAnonymousViews','product_id','product_id');
    }
}
