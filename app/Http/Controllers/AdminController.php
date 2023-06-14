<?php

namespace App\Http\Controllers;

use App\Admin;
use App\Brands;
use App\ContentCategory;
use App\ProductCategory;
use App\ProductFeatures;
use App\ProductSubCategory;
use App\Products;
use App\Region;
use App\Representative;
use App\Resource;
use App\ResourceAnonymousViews;
use App\ResourceDownloads;
use App\ResourceViews;
use App\TypeOfResource;
use App\User;
use App\Sites;
use App\UserCategories;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;
use Session;

class AdminController extends Controller
{
    public function __invoke()
    {
        return view('application');
    }
    public function get_sponsors(Request $request){
        $route = substr(($request->route),1);
        if($route == 'all-sponsors'){
            $users =  User::whereIn('package',['p2','p3'])->latest('id')->get();
        }elseif ($route == 'approved-sponsors') {
            # code...
            $users =  User::whereIn('package',['p2','p3'])->where('user_status','approved')->latest('id')->get();
        }elseif ($route == 'expired-sponsors') {
            $users =  User::whereIn('package',['p2','p3'])->where('expire_package','<',now())->latest('id')->get();
        }else{

            $users =  User::whereIn('package',['p2','p3'])->where('user_status','not approved')->latest('id')->get();
        }

        return response()->json(compact('users'));
    }
    public function get_sponsor($uid){
            $user =  User::where('uid',$uid)->first();

        return response()->json(compact('user'));
    }
    public function get_resources(Request $request){
        $route = substr(($request->route),1);
        if($route == 'all-resources'){
            $resources =  Resource::latest('id')->where('status','enabled')->get();
        }elseif ($route == 'enabled-resources') {

            $resources =  Resource::where('status','enabled')->where('adminstatus','Enable')->latest('id')->get();
        }elseif ($route == 'disabled-resources') {

            $resources =  Resource::where('status','enabled')->where('adminstatus','Disable')->latest('id')->get();
        }

        return response()->json(compact('resources'));
    }
    public function add_resource(Request $request){
        $sponsor = User::where('uid',$request->id)->first();
        $resource = new Resource;
        $resource->user_id = $request->id;
        $resource->company_name = $sponsor->company_name;
        $resource->resources_id = (String) Str::uuid();
        $resource->resource_topic = $request->topic;
        $resource->author_name = $request->author;
        $resource->type = $request->type;
        if($request->hasFile('logo')){
                $extension = $request->file('logo')->extension();
                if($extension!='jpg' && $extension!='JPG' && $extension!='jpeg' && $extension!='JPEG' && $extension!='png' && $extension!='PNG')
                {
                    echo "Invalid image type";
        return response()->json(['status'=>false,'msg'=>'resource updated successfully']);
                    die();
                }
                $file= 'resource_images/'.uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('logo')));
                $image_path = Storage::disk('s3')->url($file);
                $resource->image_path = $image_path;
            }
        $resource->description = $request->description;
        $resource->content_type = $request->content_type;
        $resource->content_category = $request->content_category;
        $resource->type_of_resource = $request->type_of_resource;
        $resource->keywords = $request->keywords;
        if($request->type_of_resource == 7 || $request->type_of_resource == 6){
            $resource->resource_path = $request->link;
        }elseif(($request->type_of_resource != 7 || $request->type_of_resource != 6) && $request->type == 'file'){
            if($request->hasFile('resource')){
                $extension = $request->file('resource')->extension();
                if($extension!='jpg' && $extension!='JPG' && $extension!='jpeg' && $extension!='JPEG' && $extension!='png' && $extension!='PNG')
                {
                    echo "Invalid image type";
                    die();
                }
                $file= 'resources/'.uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('resource')));
                $resource_path = Storage::disk('s3')->url($file);
                $resource->resource_path = $resource_path;
            }
        }elseif ($request->type == 'utm') {
            $resource->resource_path = $request->resource;
        }
        $resource->save();
        return response()->json(['status'=>true,'msg'=>'resource updated successfully','resource'=>$resource]);
    }
    public function update_resource(Request $request){
        $resource = Resource::where('resources_id',$request->id)->first();
        $resource->resource_topic = $request->topic;
        $resource->author_name = $request->author;
        $resource->type = $request->type;
        if($request->hasFile('logo')){
                $extension = $request->file('logo')->extension();
                if($extension!='jpg' && $extension!='JPG' && $extension!='jpeg' && $extension!='JPEG' && $extension!='png' && $extension!='PNG')
                {
                    echo "Invalid image type";
        return response()->json(['status'=>false,'msg'=>'resource updated successfully']);
                    die();
                }
                $file= 'resource_images/'.uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('logo')));
                $image_path = Storage::disk('s3')->url($file);
                $resource->image_path = $image_path;
            }
        $resource->description = $request->description;
        $resource->content_type = $request->content_type;
        $resource->content_category = $request->content_category;
        $resource->type_of_resource = $request->type_of_resource;
        $resource->keywords = $request->keywords;
        if($request->type_of_resource == 7 || $request->type_of_resource == 6){
            $resource->resource_path = $request->link;
        }elseif(($request->type_of_resource != 7 || $request->type_of_resource != 6) && $request->type == 'file'){
            if($request->hasFile('resource')){
                $extension = $request->file('resource')->extension();
                if($extension!='jpg' && $extension!='JPG' && $extension!='jpeg' && $extension!='JPEG' && $extension!='png' && $extension!='PNG')
                {
                    echo "Invalid image type";
                    die();
                }
                $file= 'resources/'.uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('resource')));
                $resource_path = Storage::disk('s3')->url($file);
                $resource->resource_path = $resource_path;
            }
        }elseif ($request->type == 'utm') {
            $resource->resource_path = $request->resource;
        }
        $resource->save();
        return response()->json(['status'=>true,'msg'=>'resource updated successfully','resource'=>$resource]);
    }
    public function get_resource_types(){
        $types = TypeOfResource::all();
        return response()->json(compact('types'));
    }
    public function get_sponsor_resources(Request $request){
        $resources =  Resource::withCount(['resourceViews','resourceAnonymousViews','resourceDownloads'])->latest('id')->where('status','enabled')->where('user_id',$request->id)->get();

        return response()->json(compact('resources'));
    }
    public function get_resource(Request $request){
        $resource =  Resource::where('resources_id',$request->resources_id)->first();

        return response()->json(compact('resource'));
    }
    public function regions(Request $request){
        $regions = Region::all();
        return response()->json(compact('regions'));
    }

    public function get_subscribers(){
        $subscribers = User::where('package','p1')->latest('id')->get();
        return response()->json(compact('subscribers'));
    }

    public function get_admins(){
        $admins = Admin::where('site_id',1)->latest('adminid')->get();
        return response()->json(compact('admins'));
    }
    public function get_representatives(){
            $representatives = Representative::latest('id')->get();
            return response()->json(compact('representatives'));
    }
    public function get_brands(Request $request){
            $brands = Brands::latest('brandid');
            if($request->q){
                $brands->where('brandname','like','%'.$request->q.'%');
            }
            $brands = $brands->paginate(16);
            return response()->json(compact('brands'));
    }

    public function get_all_brands(Request $request){
            $brands = Brands::latest('brandid');
            $brands = $brands->get();
            return response()->json(compact('brands'));
    }

    public function add_brand(Request $request){
        if(Brands::where('brandname',$request->brandname)->exists()){
            return response()->json(['status'=>false,'msg'=>'Brand with this name already exist']);
        }
        $brand = new Brands;
        $brand->branduid = (String) Str::uuid();
        $brand->brandname = $request->brandname;
        $save = $brand->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Brand added successfully','brand'=>$brand]);

        }
    }
    public function update_brand(Request $request){
        if(Brands::where('brandname',$request->brandname)->where('brandid','!=',$request->id)->exists()){
            return response()->json(['status'=>false,'msg'=>'Brand with this name already exist']);
        }
        $brand = Brands::where('brandid',$request->id)->first();
        $brand->brandname = $request->brandname;
        $save = $brand->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Brand updated successfully','brand'=>$brand]);

        }
    }
    public function get_industries(Request $request){
            $industries = ContentCategory::latest('industryid');
            if($request->q){
                $industries->where('industryname','like','%'.$request->q.'%');
            }
            $industries = $industries->paginate(16);
            return response()->json(compact('industries'));
    }
    public function get_all_industries(Request $request){
            $industries = ContentCategory::get();
            return response()->json(compact('industries'));
    }
     public function add_industry(Request $request){
        if(ContentCategory::where('industryname',$request->industryname)->exists()){
            return response()->json(['status'=>false,'msg'=>'Industry with this title already exist']);
        }
        $industry = new ContentCategory;
        $industry->industryname = $request->industryname;
        $save = $industry->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Industry added successfully','industry'=>$industry]);

        }
    }
    public function update_industry(Request $request){
        if(ContentCategory::where('industryname',$request->industryname)->where('industryid','!=',$request->id)->exists()){
            return response()->json(['status'=>false,'msg'=>'Industry with this name already exist']);
        }
        $industry = ContentCategory::where('industryid',$request->id)->first();
        $industry->industryname = $request->industryname;
        $save = $industry->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Industry updated successfully','industry'=>$industry]);

        }
    }

    public function add_representative(Request $request){
        if(Representative::where('email',$request->email)->exists()){
            return response()->json(['status'=> false, 'msg'=>'account with this email already exists']);
        }
        if(Representative::where('username',$request->username)->exists()){
            return response()->json(['status'=> false, 'msg'=>' Account with this Username already exists']);
        }
        $representative = new Representative;
        $representative->user_id = (String) Str::uuid();
        $representative->first_name = $request->firstname;
        $representative->last_name = $request->lastname;
        $representative->email = $request->email;
        $representative->password = $request->password;
        $representative->username = $request->username;
        $representative->contact_no = $request->contactno;
        $representative->save();

        return response()->json(['status'=> true, 'msg'=>'Representative added successfully','representative'=>$representative]);


    }
    public function update_representative(Request $request){
        if(Representative::where('email',$request->email)->where('id','!=',$request->id)->exists()){
            return response()->json(['status'=> false, 'msg'=>'account with this email already exists']);
        }
        if(Representative::where('username',$request->username)->where('id','!=',$request->id)->exists()){
            return response()->json(['status'=> false, 'msg'=>' Account with this Username already exists']);
        }
        $representative = Representative::where('id',$request->id)->first();
        $representative->first_name = $request->firstname;
        $representative->last_name = $request->lastname;
        $representative->email = $request->email;
        $representative->password = $request->password;
        $representative->username = $request->username;
        $representative->contact_no = $request->contactno;
        $representative->sponsers_ids = json_decode($request->sponsors);
        $representative->save();

        return response()->json(['status'=> true, 'msg'=>'Representative updated successfully','representative'=>$representative]);
    }
    public function delete_representative(Request $request){
        $save = Representative::where('id',$request->id)->delete();
        if($save){
            return response()->json(['status'=>true,'msg'=>'sale representative deleted successfully']);
        }else{
            return response()->json(['status'=>false,'msg'=>'something went wrong while deleting']);
        }
    }
    public function add_sponsor(Request $request){
        if(User::where('email',$request->email)->exists()){
            return response()->json(['status'=> false, 'msg'=>'Sponsor with this email already exists']);
        }
        if(User::where('username',$request->user_name)->exists()){
            return response()->json(['status'=> false, 'msg'=>' Sponsor with this Username already exists']);
        }
        $sponsor = new User;
        $sponsor->uid = (String) Str::uuid();
        $sponsor->first_name = $request->first_name;
        $sponsor->last_name = $request->last_name;
        $sponsor->username = $request->user_name;
        $sponsor->password = md5($request->password);
        $sponsor->email = $request->email;
        $sponsor->company_name = $request->company_name;
        $sponsor->cell = $request->cell;
        $sponsor->work = $request->work;
        $sponsor->address = $request->address;
        $sponsor->region = $request->region;
        $sponsor->city = $request->city;
        $sponsor->state_province = $request->state;
        $sponsor->country = $request->country;
        $sponsor->zip_postal = $request->zipcode;
        $sponsor->package = 'p3';
        $sponsor->save();
        return response()->json(['status'=> true, 'msg'=>'Sponsor added successfully','sponsor'=>$sponsor]);

    }
    public function update_sponsor(Request $request){
        if(User::where('email',$request->email)->where('uid','!=',$request->id)->exists()){
            return response()->json(['status'=> false, 'msg'=>'Sponsor with this email already exists']);
        }
        if(User::where('username',$request->user_name)->where('uid','!=',$request->id)->exists()){
            return response()->json(['status'=> false, 'msg'=>' Sponsor with this Username already exists']);
        }
        $sponsor = User::where('uid',$request->id)->first();
        if($request->hasFile('file')){
            $extension = $request->file('file')->extension();
            $file= 'company_images/'.uniqid().'.'.$extension;
            Storage::disk('s3')->put($file, file_get_contents($request->file('file')));
            $image_path= Storage::disk('s3')->url($file);
            $sponsor->company_image = $image_path;
        }
        $sponsor->first_name = $request->first_name;
        $sponsor->last_name = $request->last_name;
        $sponsor->username = $request->username;
        $sponsor->email = $request->email;
        $sponsor->company_name = $request->company_name;
        $sponsor->cell = $request->cell;
        $sponsor->work = $request->work;
        $sponsor->address = $request->address;
        $sponsor->city = $request->city;
        $sponsor->state_province = $request->state_province;
        $sponsor->country = $request->country;
        $sponsor->zip_postal = $request->zipcode;
        $sponsor->company_website = $request->url;
        $sponsor->company_description = $request->description;
        $sponsor->save();
        return response()->json(['status'=> true, 'msg'=>'Sponsor updated successfully','sponsor'=>$sponsor]);

    }
    public function update_package(Request $request){

        $sponsor = User::where('uid',$request->id)->first();
        $sponsor->start_package = $request->start_package;
        $sponsor->expire_package = $request->expire_package;
        $sponsor->package = $request->package;
        $sponsor->save();
        return response()->json(['status'=> true, 'msg'=>'Package updated successfully','sponsor'=>$sponsor]);

    }
    public function change_sponsor_status(Request $request){
        $sponsor = User::find($request->id);
        if($sponsor->user_status == 'approved'){
            $sponsor->user_status = 'not approved';
        }else{
            $sponsor->user_status = 'approved';
        }
        $save = $sponsor->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Status updated successfully','sponsor'=>$sponsor]);
        }else{
            return response()->json(['status'=>false,'msg'=>'something went wrong while updating status. please try again.']);
        }
    }
    public function delete_user(Request $request){
        $sponsor = User::where('id',$request->id)->delete();

        return response()->json(['status'=>true,'msg'=>'User deleted successfully','sponsor'=>$sponsor]);

    }
    public function change_resource_status(Request $request){
        $resource = Resource::find($request->id);
        if($resource->adminstatus == 'Enable'){
            $resource->adminstatus = 'Disable';
        }else{
            $resource->adminstatus = 'Enable';
        }
        $save = $resource->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Status updated successfully','resource'=>$resource]);
        }else{
            return response()->json(['status'=>false,'msg'=>'something went wrong while updating status. please try again.']);
        }
    }
    public function change_subscriber_status(Request $request){
        $subscriber = User::find($request->id);
        if($subscriber->user_status == 'approved'){
            $subscriber->user_status = 'not approved';
        }else{
            $subscriber->user_status = 'approved';
        }
        $save = $subscriber->save();
        if($save){
            return response()->json(['status'=>true,'msg'=>'Status updated successfully','subscriber'=>$subscriber]);
        }else{
            return response()->json(['status'=>false,'msg'=>'something went wrong while updating status. please try again.']);
        }
    }
    public function add_admin(Request $request){

        if(Admin::where('email',$request->email)->where('site_id',1)->exists()){
            return response()->json(['status'=> false, 'msg'=>'account with this email already exists']);
        }
        if(Admin::where('uname',$request->username)->where('site_id',1)->exists()){
            return response()->json(['status'=> false, 'msg'=>' Account with this Username already exists']);
        }
        $admin = new Admin;
        $admin->fname = $request->firstname;
        $admin->lname = $request->lastname;
        $admin->email = $request->email;
        $admin->password = $request->password;
        $admin->uname = $request->username;
        $admin->contactno = $request->contactno;
        $admin->site_id = 1; //1 for resource center
        $admin->save();

        return response()->json(['status'=> true, 'msg'=>'Administrator added successfully','admin'=>$admin]);

    }
    public function update_admin(Request $request){
        if(Admin::where('email',$request->email)->where('adminid','!=',$request->id)->exists()){
            return response()->json(['status'=> false, 'msg'=>'account with this email already exists']);
        }
        if(Admin::where('uname',$request->username)->where('adminid','!=',$request->id)->exists()){
            return response()->json(['status'=> false, 'msg'=>' Account with this Username already exists']);
        }
        $admin = Admin::where('adminid',$request->id)->first();
        $admin->fname = $request->firstname;
        $admin->lname = $request->lastname;
        $admin->email = $request->email;
        $admin->password = $request->password;
        $admin->uname = $request->username;
        $admin->contactno = $request->contactno;
        $admin->save();

        return response()->json(['status'=> true, 'msg'=>'Admin updated successfully','admin'=>$admin]);
    }
    public function delete_admin(Request $request){
        $save = Admin::where('adminid',$request->id)->delete();
        if($save){
            return response()->json(['status'=>true,'msg'=>'admin deleted successfully']);
        }else{
            return response()->json(['status'=>false,'msg'=>'something went wrong while deleting']);
        }
    }
    public function login(Request $request)
    {
        $email=$request->input('email');
        $password=$request->input('password');
        if($user=Admin::where(function ($query) use ($email){
            $query->where('uname',$email)->orWhere('email',$email);
        })->where('password',$password)->where('site_id',1)->first()){
            $data=array('email'=>$email);
            Session::push('admin', $data);
            echo 'login successful';
        }else{
            echo 'Invalid Credentials!';
        }
    }

    public function get_categories(Request $request){
        $categories = ProductCategory::withCount('sub_category')->whereNull('id_self_parent')->latest('category_id')->get();
        return response()->json(compact('categories'));
    }
    public function get_user_categories(Request $request){
        $user_id = $request->user_id;
        $categories = ProductCategory::with(['sub_category'=>function($q) use($user_id){
          $q->whereRaw('category_id IN (SELECT category_id FROM user_categories WHERE user_id = ?)',['user_id'=>$user_id]);
        }])->whereNull('id_self_parent')->whereHas('sub_category',function($q) use($user_id){
          $q->whereRaw('category_id IN (SELECT category_id FROM user_categories WHERE user_id = ?)',['user_id'=>$user_id]);
        })->get();
        return response()->json(compact('categories'));
        // UserCategories::where()->
    }
    public function get_sub_categories(Request $request){
        $categories = ProductSubCategory::with(['category'])->whereNotNull('id_self_parent')->latest('category_id')->get();
        return response()->json(compact('categories'));
    }

    public function add_category(Request $request){
        $category = ProductCategory::where('name',$request->title)->whereNull('id_self_parent')->first();
        if($category){
            return response()->json(['msg'=>'category with this name already exist','status'=>false]);
        }
        $category = new ProductCategory;
        $category->name = $request->title;
        $category->save();
        return response()->json(['msg'=>'category added successfully','status'=>true]);

    }
    public function add_sub_category(Request $request){
        $category = ProductSubCategory::with('category')->where('name',$request->title)->whereIdSelfParent($request->parent)->first();
        if($category){
            return response()->json(['msg'=>'category with this name already exist '.$category->category->category_name,'status'=>false]);
        }
        $category = new ProductSubCategory;
        $category->name = $request->title;
        $category->id_self_parent = $request->parent;
        $category->save();
        return response()->json(['msg'=>'sub category added successfully','status'=>true]);
    }

    public function update_category(Request $request) {

        if ($check = ProductCategory::where(['name' => $request->input('title'), 'id_self_parent' => $request->parent ?? NULL])->where('category_id', '!=', $request->id)->first()) {
            $msg = $request->parent ? 'Sub Category name already exists' : 'Category name already exists';
            $data = ['status' => 'false', 'msg' => $msg];
            return response()->json($data);
        }
        if(empty($request->parent)){

        $cat = ProductCategory::withCount('sub_category')->whereCategoryId($request->id)->first();
        }else{
        $cat = ProductSubCategory::with('category')->whereCategoryId($request->id)->first();
        $cat->id_self_parent = $request->parent;
        }
        $cat->name = $request->input('title');
        $cat->save();

        if(empty($request->parent)){

        $cat = ProductCategory::withCount('sub_category')->whereCategoryId($request->id)->first();
        }else{
        $cat = ProductSubCategory::with('category')->whereCategoryId($request->id)->first();
        }

        $msg = $request->parent ? 'Sub Category updated successfully' : 'Category updated successfully';
        return response()->json(['status' => 'true', 'msg' => $msg, 'category' => $cat]);
    }
    public function add_product(Request $request)
    {
        $product_name = $request->input('product_name');
        $price = $request->input('price');
        $quantity = $request->input('quantity');
        $description = $request->input('description');
        $category = $request->input('category');
        $feature = $request->input('features');
        $value = $request->input('value');
        $records = $feature;
        // $records = array_combine($feature, $value);
        // $errors = array_filter($records);

        // dd($errors);
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
            if ($request->hasFile('file')) {
                $extension = $request->file('file')->extension();
                $file= 'product_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('file')));
                $product->product_img =Storage::disk('s3')->url($file);
            }
            $save = $product->save();
            if ($save) {
                $data = [];
                if (!empty($records)) {
                    foreach ($records as $key => $value) {
                        if(empty($value['name'])){
                            continue;
                        }
                        $data[] = array('feature' => $value['name'], 'value' => $value['value'], 'product_id' => $product->product_id);
                    }
                    if(count($data) > 0){

                    ProductFeatures::insert($data);
                    }
                }
                return response()->json(['status'=>true,'msg'=>'Save Successfully','product'=>$product]);
            } else {
                return response()->json(['status'=>true,'msg'=>'An error occurred during adding product , please try again.','product'=>$product]);
            }
        } else {
            echo "Invalid Credentials!";
        }

    }
    public function update_product(Request $request)
    {
        $product_name = $request->input('product_name');
        $price = $request->input('price');
        $quantity = $request->input('quantity');
        $description = $request->input('description');
        $category = $request->input('category');
        $feature = $request->input('features');
        $value = $request->input('value');
        $records = $feature;

            $product = Products::where('product_id',$request->product_id)->first();
            $product->name = $product_name;
            $product->quantity = $quantity;
            $product->price = $price;
            $product->category_id = $category;
            $product->description = $description;
            if ($request->hasFile('file')) {
                $extension = $request->file('file')->extension();
                $file= 'product_images/'. md5(uniqid()).uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('file')));
                $product->product_img =Storage::disk('s3')->url($file);
            }
            $save = $product->save();
            if ($save) {
                $data = [];
                if (!empty($records)) {
                    foreach ($records as $key => $value) {
                        if(empty($value['feature'])){
                            continue;
                        }
                        if(!array_key_exists('product_id',$value)){

                        $data[] = array('feature' => $value['feature'], 'value' => $value['value'], 'product_id' => $product->product_id);
                            ProductFeatures::insert($data);
                        }else{
                            $feature = ProductFeatures::find($value['product_id']);
                            $feature->feature = $value['feature'];
                            $feature->value = $value['value'];
                            $feature->save();
                        }
                    }
                }
                $product = Products::with(['user_category','product_features'=>function($q){$q->latest('id');}])->where('product_id',$request->product_id)->first();
                return response()->json(['status'=>true,'msg'=>'Save Successfully','product'=>$product]);
            } else {
                return response()->json(['status'=>true,'msg'=>'An error occurred during adding product , please try again.','product'=>$product]);
            }

    }
    public function get_products(Request $request){
            $products = Products::with(['user_category','product_features'=>function($q){$q->latest('id');}])->latest('id');
            if($request->q){
                $products->where('name','like','%'.$request->q.'%');
            }
            $products = $products->where('user_id',$request->user_id)->paginate(16);
            return response()->json(compact('products'));
    }
    public function delete_product_feature(Request $request){
        ProductFeatures::find($request->id)->delete();
    }

     public function delete_product(Request $request)
    {
            Products::where('product_id',$request->id)->delete();
            ProductFeatures::where('product_id',$request->id)->delete();
            return response()->json(['status'=>true,'msg'=>'Product deleted successfully']);
    }

    public function get_dashboard_data(Request $request){
        if($request->duration == '' || $request->duration == 'this-month'){
        $month = date('m',strtotime('this month'));
        $products = Products::whereMonth('created_at',$month)->count();
        $resources = Resource::whereMonth('created_at',$month)->count();
        $sponsors = User::whereIn('package',['p2','p3'])->whereMonth('created_at',$month)->count();
        $subscribers = User::where('package','p1')->whereMonth('created_at',$month)->count();
        $resourceViews = ResourceViews::whereMonth('date',$month)->count();
        $ResourceAnonymousViews = ResourceAnonymousViews::whereMonth('date',$month)->count();
        $views = $ResourceAnonymousViews + $resourceViews;

        $downloads = ResourceDownloads::whereMonth('date',$month)->count();

        }elseif($request->duration == 'last-month'){
        $month = date('m',strtotime('previous month'));
        $products = Products::whereMonth('created_at',$month)->count();
        $resources = Resource::whereMonth('created_at',$month)->count();
        $sponsors = User::whereIn('package',['p2','p3'])->whereMonth('created_at',$month)->count();
        $subscribers = User::where('package','p1')->whereMonth('created_at',$month)->count();
        $resourceViews = ResourceViews::whereMonth('date',$month)->count();
        $ResourceAnonymousViews = ResourceAnonymousViews::whereMonth('date',$month)->count();
        $views = $ResourceAnonymousViews + $resourceViews;

        $downloads = ResourceDownloads::whereMonth('date',$month)->count();
        }elseif($request->duration == 'last-year'){
        $year = date('Y',strtotime('previous year'));
        $products = Products::whereYear('created_at',$year)->count();
        $resources = Resource::whereYear('created_at',$year)->count();
        $sponsors = User::whereIn('package',['p2','p3'])->whereYear('created_at',$year)->count();
        $subscribers = User::where('package','p1')->whereYear('created_at',$year)->count();
        $resourceViews = ResourceViews::whereYear('date',$year)->count();
        $ResourceAnonymousViews = ResourceAnonymousViews::whereYear('date',$year)->count();
        $views = $ResourceAnonymousViews + $resourceViews;

        $downloads = ResourceDownloads::whereYear('date',$year)->count();
        }elseif($request->duration == 'this-year'){
        $year = date('Y');
        $products = Products::whereYear('created_at',$year)->count();
        $resources = Resource::whereYear('created_at',$year)->count();
        $sponsors = User::whereIn('package',['p2','p3'])->whereYear('created_at',$year)->count();
        $subscribers = User::where('package','p1')->whereYear('created_at',$year)->count();
        $resourceViews = ResourceViews::whereYear('date',$year)->count();
        $ResourceAnonymousViews = ResourceAnonymousViews::whereYear('date',$year)->count();
        $views = $ResourceAnonymousViews + $resourceViews;

        $downloads = ResourceDownloads::whereYear('date',$year)->count();
        }
        $products = amountFormat($products);
        $resources = amountFormat($resources);
        $sponsors = amountFormat($sponsors);
        $subscribers = amountFormat($subscribers);
        $views = amountFormat($views);
        $downloads = amountFormat($downloads);
        return response()->json(compact('products','resources','sponsors','subscribers','views','downloads'));
    }

    public function logout(){
        Session::forget('admin');
    }
    public function get_sites(){
        $sites = Sites::all();
        return response()->json(compact('sites'));
    }
}
