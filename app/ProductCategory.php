<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductCategory extends Model
{
    protected $table="product_category";
    protected $primaryKey ="category_id";
    public $timestamps = false;
    
    public function sub_category()
    {
        return $this->hasMany('\App\ProductSubCategory','id_self_parent','category_id');
    }
}
