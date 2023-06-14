<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Resource extends Model
{
    protected $table='resources';

    public function owner()
    {
        return $this->belongsTo('App\Users','user_id','uid');
    }

    public function premium()
    {
        return $this->hasOne('App\Users','uid','user_id');
    }

    public function brands()
    {
        return $this->belongsTo('App\Brands','content_type','brandid');
    }

    public function typeOfResource()
    {
        return $this->belongsTo('App\TypeOfResource','type_of_resource','resourcetypeid');
    }

    public function resourceDownloads()
    {
        return $this->hasMany('App\ResourceDownloads','resource_id','resources_id');
    }

    public function resourceViews()
    {
        return $this->hasMany('App\ResourceViews','resource_id','resources_id');
    }

    public function resourceAnonymousViews()
    {
        return $this->hasMany('App\ResourceAnonymousViews','resource_id','resources_id');
    }
}
