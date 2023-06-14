<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserCategories extends Model
{
    protected $table = "user_categories";

    public function category()
    {
        return $this->belongsTo(ProductSubCategory::class, 'category_id', 'category_id')->orderBy('name','desc');
    }

    public function user()
    {
        return $this->belongsTo(User::class, 'user_id','uid');
    }

}
