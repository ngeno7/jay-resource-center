<?php

namespace App\Http\Controllers;

use App\Products;
use App\Resource;
use App\User;
use App\Users;
use Illuminate\Http\Request;
Use Session;
use DB;
use Storage;

class ResourcesController extends Controller
{
    public function upload(Request $request)
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $id = $user[0]['user_id'];
        }else{
            echo 'error';
            die;
        }

        if ($request->hasFile('file-fr')) {
            $file= md5(uniqid()).'_'.uniqid().'.';
            $token=md5(uniqid());
            $resource=new Resource();
            $resource->user_id=$id;
            Storage::disk('s3')->put($file, file_get_contents($request->file('file-fr')));
            $resource->resource_path=Storage::disk('s3')->url($file);
            $resource->token=$token;
            $resource->save();
            echo json_encode($token);
            return;
        }
    }

    public function edit_upload(Request $request)
    {
        if ($request->hasFile('file-fr-edit')) {
            $extension = $request->file('file-fr-edit')->extension();
            $file= md5(uniqid()).'_'.uniqid().'.'.$extension;
            Storage::disk('s3')->put($file, file_get_contents($request->file('file-fr-edit')));
            echo json_encode(Storage::disk('s3')->url($file));
            return;
        }
    }

    public function upload_resource(Request $request)
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $email=$user[0]['email'];
            $user=User::where('email',$email)->first();
            $company_name=$user->company_name;
            $user_status=$user->user_status;
            $package=$user->package;
            $uid=$user->uid;
        }
        else{
            echo 'error';die;
        }

        $currentDate = date('Y-m-d');
        $expireCheck =User::where('start_package', '<=', $currentDate)->where('expire_package', '>=', $currentDate)->where('email', $email)->get();
        if(!empty($expireCheck)){
            if ($package == 'p2' and $user_status == 'approved') {
                $remaining_resources = DB::table('packagedetail')->where(function ($query) use($currentDate, $email)
                {
                    $query->where('sdate', $currentDate)->where('useremail', $email);
                })->orWhere(function ($query) use($currentDate, $email)
                {
                    $query->where('sdate', '<=', $currentDate)->where('edate', '>=', $currentDate)->where('useremail', $email);
                })->get();
                if (!empty($remaining_resources)) {
                    foreach($remaining_resources as $resource) {
                        $r_resources = $resource->r_resource;
                    }
                    if ($r_resources == 0) {
                       // echo 'Your resource limit for this month has been reached.';
                       // die();
                    }
                }
                else {
                    echo 'Something went wrong ,please contact your administrator';
                    die();
                }
            }
        }else{
            echo 'Your package has expired.';
            die();
        }

        $resources_id=md5(uniqid());
        $resource_topic= $request->input('topic');
        $keyword= $request->input('keyword','');
        $type_of_resource= $request->input('typeofresource');
        $content_type=$request->input('contenttype');
        $author_name=$request->input('authorname','');
        $file_type=$request->input('filetype');
        $utmUrl=$request->input('utm');
        $token=$request->input('token');
        $currentDate=date('Y-m-d');

        $category= $request->input('contentcategory');
        $categoryMultiValue='';
        foreach ($category as $categoryValue){
            $categoryMultiValue=$categoryMultiValue.$categoryValue.',';
        }
        $category=$categoryMultiValue;
        $category=trim($category, ",");

        $description=     $request->input('description');
        $link=$request->input('link');
        $ebook=$request->input('ebook');

        if($request->hasFile('image')){
            $extension = $request->file('image')->extension();
            if($extension!='jpg' && $extension!='JPG' && $extension!='jpeg' && $extension!='JPEG' && $extension!='png' && $extension!='PNG') {
                echo "Invalid image type";
                die();
            }

            $file= 'resource_images/'.uniqid().'.'.$extension;
            Storage::disk('s3')->put($file, file_get_contents($request->file('image')));
            $image_path=Storage::disk('s3')->url($file);

        }
        else{
            if($type_of_resource==1){$path='/public/images/default-images/white-paper.png';}
            elseif($type_of_resource==2){$path='/public/images/default-images/webinar.png';}
            elseif($type_of_resource==3){$path='/public/images/default-images/catalogue.png';}
            elseif($type_of_resource==4){$path='/public/images/default-images/power-point.png';}
            elseif($type_of_resource==5){$path='/public/images/default-images/video.png';}
            elseif($type_of_resource==6){$path='/public/images/default-images/video.png';}
            elseif($type_of_resource==7){$path='/public/images/default-images/e-book.png';}
            elseif($type_of_resource==8){$path='/public/images/default-images/audio.jpg';}
            elseif($type_of_resource==9){$path='/public/images/default-images/image.jpg';}
            $image_path=url('/').$path;
        }
        if($type_of_resource==6){
            $resource=new Resource();
            $resource->resources_id=$resources_id;
            $resource->user_id=$uid;
            $resource->company_name=$company_name;
            $resource->resource_topic=$resource_topic;
            $resource->keywords=$keyword;
            $resource->author_name=$author_name;
            $resource->type_of_resource=$type_of_resource;
            $resource->type=$file_type;
            $resource->content_category=$category;
            $resource->resource_path=$link;
            $resource->image_path=$image_path;
            $resource->content_type=$content_type;
            $resource->brand_id=$content_type;
            $resource->description=$description;
            $resource->date=$currentDate;
            $resource->status='enabled';
            $resource->site_id=1;
            $save=$resource->save();
            if($save){echo 'success';}
        }else if($type_of_resource==7){
            $resource=new Resource();
            $resource->resources_id=$resources_id;
            $resource->user_id=$uid;
            $resource->company_name=$company_name;
            $resource->resource_topic=$resource_topic;
            $resource->keywords=$keyword;
            $resource->author_name=$author_name;
            $resource->type_of_resource=$type_of_resource;
            $resource->type=$file_type;
            $resource->content_category=$category;
            $resource->brand_id=$content_type;
            $resource->resource_path=$ebook;
            $resource->image_path=$image_path;
            $resource->content_type=$content_type;
            $resource->description=$description;
            $resource->date=$currentDate;
            $resource->status='enabled';
            $resource->site_id=1;
            $save=$resource->save();
            if($save){echo 'success';}
        }else{
            if($file_type=='utm'){
                $resource=new Resource();
                $resource->resources_id=$resources_id;
                $resource->user_id=$uid;
                $resource->company_name=$company_name;
                $resource->resource_topic=$resource_topic;
                $resource->keywords=$keyword;
                $resource->author_name=$author_name;
                $resource->type_of_resource=$type_of_resource;
                $resource->type='UTM';
                $resource->content_category=$category;
                $resource->resource_path=$utmUrl;
                $resource->image_path=$image_path;
                $resource->content_type=$content_type;
                $resource->brand_id=$content_type;
                $resource->description=$description;
                $resource->date=$currentDate;
                $resource->status='enabled';
                $resource->site_id=1;
                $save=$resource->save();
                if($save){echo 'success';}
            }
            elseif($file_type=='file'){
                $resource=Resource::where('token',$token)->where('user_id',$uid)->first();
                if(empty($token)){echo 'Resource is required';die;}

                $resource->resources_id=$resources_id;
                $resource->user_id=$uid;
                $resource->company_name=$company_name;
                $resource->resource_topic=$resource_topic;
                $resource->keywords=$keyword;
                $resource->author_name=$author_name;
                $resource->type_of_resource=$type_of_resource;
                $resource->type=$file_type;
                $resource->content_category=$category;
                $resource->content_type=$content_type;
                $resource->brand_id=$content_type;
                $resource->image_path=$image_path;
                $resource->description=$description;
                $resource->date=$currentDate;
                $resource->status='enabled';
                $resource->site_id=1;
                $save=$resource->save();
                if($save){echo 'success';}
            }
        }
    }

    public function edit_resource(Request $request)
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $uid=$user[0]['user_id'];

        }
        else{
            echo 'error';die;
        }

        $resource_topic= $request->input('topic');
        $keyword= $request->input('keyword','');
        $type_of_resource= $request->input('typeofresource');
        $content_type= $request->input('contenttype');
        $author_name=$request->input('authorname','');
        $file_type=$request->input('filetype_edit');
        $utmUrl=$request->input('utm');
        $resource_id=$request->input('resource_id');
        $resource_path=$request->input('resource_path');

        $category= $request->input('contentcategory');
        $categoryMultiValue='';
        foreach ($category as $categoryValue){
            $categoryMultiValue=$categoryMultiValue.$categoryValue.',';
        }
        $category=$categoryMultiValue;
        $category=trim($category, ",");

        $description=  $request->input('description');
        $link=$request->input('link');
        $ebook=$request->input('ebook');

        if($resource=Resource::where('resources_id',$resource_id)->where('user_id',$uid)->first()){
            if($request->hasFile('image')){
                $extension = $request->file('image')->extension();
                if($extension!='jpg' && $extension!='JPG' && $extension!='jpeg' && $extension!='JPEG' && $extension!='png' && $extension!='PNG')
                {
                    echo "Invalid image type";
                    die();
                }
                $file= 'resource_images/'.uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('image')));
                $image_path=Storage::disk('s3')->url($file);

            }
            else{
                $image_path=$resource->image_path;
            }

            if($type_of_resource==6){
                $resource->resources_id=$resource_id;
                $resource->user_id=$uid;
                $resource->resource_topic=$resource_topic;
                $resource->keywords=$keyword;
                $resource->author_name=$author_name;
                $resource->type_of_resource=$type_of_resource;
                $resource->type=$file_type;
                $resource->content_category=$category;
                $resource->resource_path=$link;
                $resource->image_path=$image_path;
                $resource->content_type=$content_type;
                $resource->brand_id=$content_type;
                $resource->description=$description;
                $resource->status='enabled';
                $save=$resource->save();
                if($save){echo 'success';}
            }else if($type_of_resource==7){
                $resource->resources_id=$resource_id;
                $resource->user_id=$uid;
                $resource->resource_topic=$resource_topic;
                $resource->keywords=$keyword;
                $resource->author_name=$author_name;
                $resource->type_of_resource=$type_of_resource;
                $resource->type=$file_type;
                $resource->content_category=$category;
                $resource->resource_path=$ebook;
                $resource->image_path=$image_path;
                $resource->content_type=$content_type;
                $resource->brand_id=$content_type;
                $resource->description=$description;
                $resource->status='enabled';
                $save=$resource->save();
                if($save){echo 'success';}
            }else{
                if($file_type=='utm'){
                    $resource->resources_id=$resource_id;
                    $resource->user_id=$uid;
                    $resource->resource_topic=$resource_topic;
                    $resource->keywords=$keyword;
                    $resource->author_name=$author_name;
                    $resource->type_of_resource=$type_of_resource;
                    $resource->type=$file_type;
                    $resource->content_category=$category;
                    $resource->resource_path=$utmUrl;
                    $resource->image_path=$image_path;
                    $resource->brand_id=$content_type;
                    $resource->content_type=$content_type;
                    $resource->description=$description;
                    $resource->status='enabled';
                    $save=$resource->save();
                    if($save){echo 'success';}
                }
                elseif($file_type=='file'){

                    if(empty($resource_path)){echo 'Resource is required';die;}
                    $resource->resources_id=$resource_id;
                    $resource->user_id=$uid;
                    $resource->resource_topic=$resource_topic;
                    $resource->keywords=$keyword;
                    $resource->author_name=$author_name;
                    $resource->type_of_resource=$type_of_resource;
                    $resource->type=$file_type;
                    $resource->content_category=$category;
                    $resource->resource_path=$resource_path;
                    $resource->content_type=$content_type;
                    $resource->brand_id=$content_type;
                    $resource->image_path=$image_path;
                    $resource->description=$description;
                    $resource->status='enabled';
                    $save=$resource->save();
                    if($save){echo 'success';}
                }

            }

        }else{
            echo 'error';
        }
    }

    public function delete_resource($id)
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $email=$user[0]['email'];
            $user=User::where('email',$email)->first();
            $company_name=$user->company_name;
            $uid=$user->uid;
        }
        else{
            echo 'error';die;
        }

        if($resource=Resource::where('resources_id',$id)->where('user_id',$uid)->first()){
            $resource->status='disabled';
            $save=$resource->save();
            if($save){
                $url=url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$company_name))).'/'.$user->uid;
                echo $url;

            }
        }
    }

    public function upload_resources_to_s3(){
        ini_set('max_execution_time', 0);
        ini_set('memory_limit', '-1');
        $type_of_resource=array('6','7');
        $resources=Resource::where('resource_path','!=','')->whereNotIn('type_of_resource',$type_of_resource)->where('type','!=','UTM')->where('status','enabled')->get();
        foreach ($resources as $resource){
            $file_headers = @get_headers($resource->resource_path);
            if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found' || $file_headers[0] == 'HTTP/1.0 404 Not Found' || $file_headers[0] == 'HTTP/1.1 403 Forbidden') {
                $exists = false;
            }
            else {
                $extension = substr($resource->resource_path, strrpos($resource->resource_path, '.') + 1);

                $file= 'resources/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($resource->resource_path));
                $resource->resource_path=Storage::disk('s3')->url($file);
                $resource->save();
            }
        }
    }

    public function upload_resources_image_to_s3(){
        ini_set('max_execution_time', 0);
        ini_set('memory_limit', '-1');
        $resources=Resource::where('image_path','!=','')->where('type_of_resource','!=',6)->where('id','>',1106)->where('status','enabled')->get();
        foreach ($resources as $resource){
            $file_headers = @get_headers($resource->image_path);
            if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $exists = false;
            }
            else {
                $extension = substr($resource->image_path, strrpos($resource->image_path, '.') + 1);

                $file= 'resource_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($resource->image_path));
                $resource->image_path=Storage::disk('s3')->url($file);
                $resource->save();
            }
        }
    }

    public function upload_product_image_to_s3(){
        ini_set('max_execution_time', 0);
        ini_set('memory_limit', '-1');
        $products=Products::where('product_img','!=','')->get();
        foreach ($products as $product){
            $file_headers = @get_headers($product->product_img);
            if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $exists = false;
            }
            else {
                $extension = substr($product->product_img, strrpos($product->product_img, '.') + 1);
                $file= 'product_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($product->product_img));
                $product->product_img=Storage::disk('s3')->url($file);
                $product->save();
            }
        }
    }

    public function upload_company_image_to_s3(){
        ini_set('max_execution_time', 0);
        ini_set('memory_limit', '-1');
        $users=Users::where('company_image','!=','')->get();
        foreach ($users as $user){
            $file_headers = @get_headers($user->company_image);
            if(!$file_headers || $file_headers[0] == 'HTTP/1.1 404 Not Found') {
                $exists = false;
            }
            else {
                $extension = substr($user->company_image, strrpos($user->company_image, '.') + 1);
                $file= 'company_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($user->company_image));
                $user->company_image=Storage::disk('s3')->url($file);
                $user->save();
            }
        }
    }
}
