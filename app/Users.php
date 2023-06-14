<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Users extends Model
{
    //
    protected $table = "users";

    public function resources()
    {
        return $this->hasMany('App\Resource','user_id','uid');
    }

    public function user_detail()
    {
        return $this->hasOne('App\UserDetail','user_id','user_id');
    }

}
