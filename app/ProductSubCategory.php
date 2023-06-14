<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ProductSubCategory extends Model
{
    protected $table='product_category';
    protected $primaryKey ="category_id";
    public $timestamps = false;
    public function category()
    {
        return $this->belongsTo('\App\ProductCategory','id_self_parent','category_id');
    }

    public function parent()
    {
        return $this->belongsTo('\App\ProductCategory','id_self_parent','category_id')->orderBy('name','asc');
    }
}
