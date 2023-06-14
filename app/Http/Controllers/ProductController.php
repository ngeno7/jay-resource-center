<?php

namespace App\Http\Controllers;

use App\ProductCategory;
use App\ProductFeatures;
use App\Products;
use App\Users;
use Illuminate\Http\Request;
use Session;
use DB;
use Storage;

class ProductController extends Controller
{
    public function add_product(Request $request)
    {
        $product_name = $request->input('product_name');
        $price = $request->input('price');
        $quantity = $request->input('quantity');
        $description = $request->input('description');
        $category = $request->input('category');
        $feature = $request->input('feature');
        $value = $request->input('value');
        $records = array_combine($feature, $value);
        $errors = array_filter($records);
        if (Session::has('user_session') or Session::has('admin')) {
            if (Session::has('admin')) {
                $user_id = $request->input('user_id');
            } else {
                $user = Session::get('user_session');
                $user_id = $user[0]['user_id'];
            }
            $product_id=md5(rand(000000,9999999));
            $product = new Products();
            $product->name = $product_name;
            $product->product_id = $product_id;
            $product->quantity = $quantity;
            $product->price = $price;
            $product->user_id = $user_id;
            $product->category_id = $category;
            $product->description = $description;
            if ($request->hasFile('image')) {
                $extension = $request->file('image')->extension();
                $file= 'product_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('image')));
                $product->product_img =Storage::disk('s3')->url($file);
            }
            $save = $product->save();
            if ($save) {
                if (!empty($errors)) {
                    foreach ($records as $key => $value) {
                        $data[] = array('feature' => $key, 'value' => $value, 'product_id' => $product->product_id);
                    }
                    ProductFeatures::insert($data);
                }
                echo 'Save Successfully';
            } else {
                echo 'An error occurred during adding product , please try again.';
            }
        } else {
            echo "Invalid Credentials!";
        }

    }

    public function edit_product_view(Request $request)
    {
        if (Session::has('user_session')){
            $user = Session::get('user_session');
            $user_id=$user[0]['user_id'];

            $member_category="SELECT GROUP_CONCAT(category_id) AS value  FROM user_categories where user_id='$user_id' group by category_id";

            $member_category = DB::select($member_category);
            $member_categories='';
            if(!empty($member_category)) {
                foreach($member_category as $row) {
                    $member_categories= $member_categories.','.$row->value;
                }
                $member_categories = explode(',', $member_categories);
            }else{
                $member_categories=[];
            }

            $categories=ProductCategory::with('sub_category')->whereHas('sub_category', function($query) use ($member_categories) {
                $query->whereIn('category_id',$member_categories);
            })->get();

            $id= basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
            if($product=Products::with('product_features')->where('product_id',$id)->where('user_id',$user_id)->first()){
                $product_features=$product->product_features;
                return View('edit_product',compact('categories','member_categories','product','product_features'));
            }else{
                return redirect('/');
            }

        }else{
            return redirect('/');
        }
    }

    public function edit_product(Request $request)
    {
        $product_id=$request->input('product_id');
        $product_name=$request->input('product_name');
        $price=$request->input('price');
        $quantity=$request->input('quantity');
        $description=$request->input('description');
        $category=$request->input('category');
        $feature=$request->input('feature');
        $value=$request->input('value');
        $records=array_combine($feature,$value);
        $errors = array_filter($records);
        if(Session::has('user_session')){
            $user = Session::get('user_session');
            $user_id=$user[0]['user_id'];
            $product=Products::where('product_id',$product_id)->first();
            $product->name=$product_name;
            $product->quantity=$quantity;
            $product->price=$price;
            $product->category_id=$category;
            $product->description=$description;
            if ($request->hasFile('image')) {
                $extension = $request->file('image')->extension();
                $file= 'product_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('image')));
                $product->product_img =Storage::disk('s3')->url($file);
            }
            $save=$product->save();
            if($save){
                ProductFeatures::where('product_id',$product_id)->delete();
                if (!empty($errors)) {
                    foreach($records as $key=>$value){
                        $data[]=array('feature'=>$key,'value'=>$value,'product_id'=>$product_id);
                    }
                    ProductFeatures::insert($data);
                }
                echo 'Edit Successfully';
            }else{
                echo 'An error occurred during adding product , please try again.';
            }
        }else{
            echo "Invalid Credentials!";
        }

    }

    public function delete_product($id)
    {
        if(Session::has('user_session')){
            $user = Session::get('user_session');
            $user_id=$user[0]['user_id'];
            $user=Users::where('uid',$user_id)->first();
            Products::where('product_id',$id)->where('user_id',$user_id)->delete();
            ProductFeatures::where('product_id',$id)->delete();
            $url=url('/').'/company_detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$user->company_name))).'/'.$user->uid;
            echo $url;
        }else{
            echo "Invalid Credentials!";
        }
    }
}
