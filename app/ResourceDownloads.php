<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class ResourceDownloads extends Model
{
    protected $table='resource_downloads';
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
