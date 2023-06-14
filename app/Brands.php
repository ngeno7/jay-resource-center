<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Brands extends Model
{
    //
    protected $table="content_type_brand";
    public $timestamps = false;
    public $primaryKey  = 'brandid';
    
    public function resource_where()
    {
        return $this->hasMany('App\Resource','content_type','brandid');
    }

    public function site()
    {
        return $this->belongsTo('App\Sites','id','site_id');
    }

    public function resource($id) {
        return Resource::whereRaw("find_in_set($id,brand_id)")->where('adminstatus','!=','Disable')->where('status','=','enabled')->count();

    }
}
