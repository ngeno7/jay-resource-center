<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResourceAnonymousViews extends Model
{
    //
    protected $table='resource_anonymous_views';
    public $timestamps = false;

    public function resource()
    {
        return $this->belongsTo('App\Resource','resource_id','resources_id');

    }
}
