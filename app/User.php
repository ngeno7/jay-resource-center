<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    //
    protected $appends = ['full_name','is_expired'];
    protected $table = "users";
    public function getFullNameAttribute(){
        return "$this->first_name $this->last_name";
    }
    public function getIsExpiredAttribute(){
        if(empty($this->start_package) || empty($this->expire_package)){
            return 'Expire';
        }elseif(date('Y-m-d',strtotime($this->expire_package)) <= date('Y-m-d') && date('Y-m-d',strtotime($this->start_package)) <= date('Y-m-d')){
            return 'Expire';
        }else{

            return 'Active';
        }
    }
    public function resources()
    {
        return $this->hasMany('App\Resource','user_id','uid');
    }

    public function user_detail()
    {
        return $this->hasOne('App\UserDetail','user_id','user_id');
    }

    public function user_categories()
    {
        return $this->hasMany('App\UserCategories','user_id','uid');
    }
}
