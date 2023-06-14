<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class TypeOfResource extends Model
{
    //
    protected $table='resourcetype';

    public function resource($id)
    {
        return Resource::where('type_of_resource',$id)->where('adminstatus','!=','Disable')->where('status','=','enabled')->count();

    }

}
