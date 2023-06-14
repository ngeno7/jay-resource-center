<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResourceViews extends Model
{
    //
    protected $table='resource_views';
    public $timestamps = false;

    public function userDetail()
    {
        return $this->belongsTo('App\Users','user_id','uid');

    }

    public function resource()
    {
        return $this->belongsTo('App\Resource','resource_id','resources_id');

    }
}
