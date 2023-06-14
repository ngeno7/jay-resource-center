<?php

namespace App\Http\Controllers;

use App\Brands;
use App\ProductAnonymousViews;
use App\ProductCategory;
use App\Products;
use App\ProductViews;
use App\Resource;
use App\ResourceAnonymousViews;
use App\ResourceDownloads;
use App\ResourceViews;
use App\Schedule;
use App\Topics;
use App\TypeOfResource;
use App\User;
use App\Users;
use Illuminate\Http\Request;
use DB;
use Artesaos\SEOTools\Facades\SEOTools;
use Illuminate\View\View;
use Ramsey\Uuid\Uuid;
use Session;
use Mail;


class HomeController extends Controller
{
    public function home()
    {
        $topics=Topics::orderBy('industryname')->get();
        $typeOfResource=TypeOfResource::orderBy('resourcetypename')->get();
        $brands=Brands::where('status','approved')->orderBY('brandid')->get();
        $companies=Users::where('user_status','approved')->where('package','!=','p1')->where('site_id', 1)->orderByRaw("FIELD(package,'p1','p2', 'p3') DESC")->orderBy('company_name')->take(20)->get();
        $query="select resources.*,users.*,content_type_brand.* from resources
                       LEFT JOIN users ON users.uid=resources.user_id
                       LEFT JOIN  content_type_brand  ON content_type_brand.brandid=resources.brand_id
                       where  resources.status='enabled' AND resources.resources_id!='' AND resources.adminstatus!='Disable' and users.package='p3'  group by resources.user_id  ORDER BY rand() DESC limit 0,4";
        $resources=DB::select($query);
        $query="select resources.*,users.*,content_type_brand.* from resources
                       LEFT JOIN users ON users.uid=resources.user_id
                       LEFT JOIN  content_type_brand  ON content_type_brand.brandid=resources.brand_id
                       where  resources.status='enabled' AND resources.resources_id!='' AND resources.adminstatus!='Disable'  group by resources.user_id  ORDER BY resources.id DESC limit 0,4";
        $recent_resources=DB::select($query);

        $products=Products::with('user')->take(3)->groupBy('user_id')->orderBy('id','desc')->get();

        SEOTools::setTitle('Home | Resource Center');
        SEOTools::setDescription("Mining Media's resource center is the mining and construction industry's largest directory of free vendor-supplied technical content. Use the filters below to find white papers, videos, and more on an collection of topics, from engineering to coal mining, concrete production to sand processing.");
        SEOTools::opengraph()->setUrl(url('/'));
        SEOTools::setCanonical(url('/'));
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::jsonLd()->addImage(url('/').'/public/images/logo.png');

        return View('home',compact('topics','typeOfResource','brands','companies','resources','products','recent_resources'));
    }

    public function directories(Request $request)
    {
        SEOTools::setTitle('Directory | Resource Center');
        SEOTools::setDescription("Mining Media's resource center is the mining and construction industry's largest directory of free vendor-supplied technical content. Use the filters below to find white papers, videos, and more on an collection of topics, from engineering to coal mining, concrete production to sand processing.");
        SEOTools::opengraph()->setUrl(url('/').'/directories');
        SEOTools::setCanonical(url('/').'/directories');
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::jsonLd()->addImage(url('/').'/public/images/logo.png');

        $categories=ProductCategory::with('sub_category')->where('id_self_parent',NULL)->orderBy('name')->get();
        $category_id=$request->input('category','');
        $search=$request->input('search','');


        //$companies=User::where('user_status','approved');
        $companies=User::where('user_status','!=','');
        if(!empty($category_id)){
            $companies->whereHas('user_categories', function($query) use ($category_id) {
                $query->where('category_id',$category_id);
            });
        }
         $companies=$companies->where('package','!=','p4')->where('company_name','like','%'.$search.'%')
            ->orderByRaw("FIELD(package,'p1','p2', 'p3') DESC")->orderBy('company_name')->paginate(12);
        return View('directories',compact('companies','category_id','categories','search'));
    }

    public function contact()
    {

        SEOTools::setTitle('Contact Us | Resource Center');
        SEOTools::setDescription("Mining Media's resource center is the mining and construction industry's largest directory of free vendor-supplied technical content. Use the filters below to find white papers, videos, and more on an collection of topics, from engineering to coal mining, concrete production to sand processing.");
        SEOTools::opengraph()->setUrl(url('/'));
        SEOTools::setCanonical(url('/'));
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::jsonLd()->addImage(url('/').'/public/images/logo.png');

        return View('contact');
    }

    public function search(Request $request)
    {
        $topics=Topics::orderBy('industryname')->get();
        $typeOfResource=TypeOfResource::orderBy('resourcetypename')->get();
        $brands=Brands::where('status','approved')->orderBy('brandname')->get();
        $content_category_query="SELECT content_category_industry.industryid, content_category_industry.industryname, COUNT( resources.content_category ) as total FROM  `content_category_industry` LEFT JOIN  `resources` ON find_in_set(content_category_industry.industryid, resources.content_category)  and resources.status='enabled' and  resources.adminstatus!='Disable' GROUP BY content_category_industry.industryid";
        $content_category_query = DB::select($content_category_query);

        $content_category_empty="SELECT content_category_industry.industryid, content_category_industry.industryname, COUNT( resources.content_category ) as total FROM  `content_category_industry` LEFT JOIN  `resources` ON find_in_set(content_category_industry.industryid, resources.content_category)  and resources.status='enabled' and  resources.adminstatus!='Disable' GROUP BY content_category_industry.industryid ORDER BY `total` Desc limit 5";
        $content_category_empty = DB::select($content_category_empty);

        $keyword = $request->input('keyword','');

        $company = $request->input('company','');

        $type_resource= $request->input('resources','');// Type of Resource
        $resource_value=explode(',',$type_resource);

        $c_type  = $request->input('content_type','');
        $c_type_value=explode(',',$c_type);

        $c_category  = $request->input('content_category','');
        $c_category_value=explode(',',$c_category);

        if(!empty($c_category)){
            $content_category_non_empty="SELECT content_category_industry.industryid, content_category_industry.industryname, COUNT( resources.content_category ) as total FROM  `content_category_industry` LEFT JOIN  `resources` ON find_in_set(content_category_industry.industryid, resources.content_category)  and resources.status='enabled' and  resources.adminstatus!='Disable' GROUP BY content_category_industry.industryid HAVING content_category_industry.industryid IN ($c_category)";
            $content_category_non_empty = DB::select($content_category_non_empty);
        }

        $s_date  =$request->input('s_date')?: 'min';
        $e_date  = $request->input('e_date')?: 'max';
        if($s_date=='min'){$sDate='2001-01-01';}else{$sDate=$s_date;}
        if($e_date=='max'){$eDate=date('Y-m-d');}else{$eDate=$e_date;}

        $resources=Resource::join('users','users.uid','=','resources.user_id')->where('resources.company_name', 'like',  '%'.$company.'%')->where('resources.status','enabled')->where('resources.adminstatus','!=','Disable')->where('resources.resources_id','!=','')
            ->where(function ($query) use ($keyword){
                $query->where('resources.keywords','like','%'.$keyword.'%')->orWhere('resources.resource_topic','like','%'.$keyword.'%')
                    ->orWhere('resources.description','like','%'.$keyword.'%');})
            ->where('resources.date','>=',$sDate)->where('resources.date','<=',$eDate);
        if(!empty($type_resource)){$resources->whereIn('resources.type_of_resource',$resource_value);}
        if(!empty($c_type)){
            $resources->where(function ($query) use ($c_type_value){
                $value=1;
                foreach($c_type_value as $type =>$key){
                    if($value==1){$where='whereRaw';}else{$where='orWhereRaw';}
                    $query->$where("find_in_set($key,resources.brand_id)");
                    $value++; };
            });}
        if(!empty($c_category)){
            $resources->where(function ($query) use ($c_category_value){
                $value=1;
                foreach($c_category_value as $category =>$key){
                    if($value==1){$where='whereRaw';}else{$where='orWhereRaw';}
                    $query->$where("find_in_set($key,resources.content_category)");
                    $value++; };
            });}
        $resources=$resources->orderByRaw("FIELD(users.package,'p2','p3') DESC")->orderBy('resources.date','desc')->paginate(12);

        return View('search',
            compact('resource_value','c_category_value','resources','topics','brands','content_category_non_empty',
                'typeOfResource','s_date','e_date','keyword','company','c_type','type_resource','c_category','content_category_empty','content_category_query','c_type_value'));

    }

    public function products(Request $request)
    {
        $categories=ProductCategory::with('sub_category')->where('id_self_parent',NULL)->orderBy('name')->get();
        $category_id=$request->input('category','');
        $search=$request->input('search','');

        $products=Products::with('user')
            ->where(function ($query) use ($search){
                $query->where('name','like','%'.$search.'%')->orWhere('description','like','%'.$search.'%');});
        if(!empty($category_id)){
            $products->where('category_id',$category_id);
        }
        $products= $products->orderBy('product_id','desc')->paginate(24);

        return View('products',
            compact('search','category_id','products','categories'));
    }

    public function product_detail($product_name,$id)
    {
        if( $product=Products::with('user','product_features')->where('product_id',$id)->first()){

            if (Session::has('user_session')) {
                $user = Session::get('user_session');
                $user_id=$user[0]['user_id'];

                if($product->user_id!=$user_id) {
                    if(!ProductViews::where('product_id',$id)->where('date',date('Y-m-d'))->where('user_id',$user_id)->exists()){
                        $resource_view = new ProductViews();
                        $resource_view->product_id = $id;
                        $resource_view->user_id = $user_id;
                        $resource_view->date = date('Y-m-d');
                        $resource_view->timestamp = time();
                        $resource_view->site_id = 1;
                        $resource_view->save();
                    }
                }
            }
            else{
                $client  = @$_SERVER['HTTP_CLIENT_IP'];
                $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
                $remote  = $_SERVER['REMOTE_ADDR'];

                if(filter_var($client, FILTER_VALIDATE_IP)){
                    $ip = $client;
                }
                elseif(filter_var($forward, FILTER_VALIDATE_IP)){
                    $ip = $forward;
                }
                else{
                    $ip = $remote;
                }

                $country_name='';$city_name='';
                $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip));
                if($ip_data && $ip_data->geoplugin_countryName != null)
                {
                    $country_name= $ip_data->geoplugin_countryName;
                    $city_name = $ip_data->geoplugin_city;
                }
                if(!ProductAnonymousViews::where('product_id',$id)->where('date',date('Y-m-d'))->where('ip_address',$ip)->exists()) {
                    $resource_view = new ProductAnonymousViews();
                    $resource_view->product_id = $id;
                    $resource_view->ip_address = $ip;
                    $resource_view->city = $city_name;
                    $resource_view->country = $country_name;
                    $resource_view->date = date('Y-m-d');
                    $resource_view->timestamp = time();
                    $resource_view->site_id = 1;
                    $resource_view->save();
                }
            }
            SEOTools::setTitle($product->name. ' | Resource Center');
            SEOTools::setDescription($product->description);
            SEOTools::opengraph()->setUrl(url('/').'/product-detail/'.$product_name.'/'.$id);
            SEOTools::setCanonical(url('/').'/product-detail/'.$product_name.'/'.$id);
            SEOTools::opengraph()->addProperty('type', 'products');
            SEOTools::jsonLd()->addImage($product->product_img);
            $products=Products::with('user')->where('product_id','!=',$id)->inRandomOrder()->limit(8)->orderBy('product_id','desc')->get();
            return View('product_detail',
                compact('product','products'));
        }
        else{
            return redirect('/');
        }

    }

    public function search_directory(Request $request)
    {
        $value=$request->input('search');
       // $companies=Users::where('user_status','approved')->where('package','!=','p1')->where('company_name', 'LIKE', $value.'%')->orderByRaw("FIELD(package,'p1','p2', 'p3') DESC")->orderBy('company_name')->get();
        $companies=Users::where('user_status','!=','')->where('package','!=','p4')->where('company_name', 'LIKE', $value.'%')->orderByRaw("FIELD(package,'p1','p2', 'p3') DESC")->orderBy('company_name')->get();

        if($companies) {
            foreach ($companies as $company) {
                $company_image = $company->company_image;
                $url = url('/') . '/company-detail/' . preg_replace('/[^A-Za-z0-9\-]/', '', strtolower(str_replace(' ', '-', $company->company_name))) . '/' . $company->uid;
                $company_length = strlen($company->company_name);
                if ($company_length >= 24) {
                    $name = substr($company->company_name, 0, 24) . ' ...';
                } else {
                    $name = $company->company_name;
                }
                echo "<div class=\"col-sm-6 col-md-4 col-lg-3 item-card \">\n";
                echo "<div class=\"card hoverable w100\">\n";
                echo "<div class=\"card-image\">\n";
                echo "<div class=\"view overlay hm-white-slight z-depth-1\">\n";
                echo "<img data-src=\"$company_image\" src=\"$company_image\" class=\"img-responsive object-fit-contain\" alt=\"\">\n";
                echo "<div class=\"mask waves-effect\">\n";
                echo "<div class=\"verticalcenter\">\n";
                echo "<a  class=\"btn btn-warning waves-effect waves-light\" href=\"$url\"><i class=\"fa fa-eye pad-r-5\" aria-hidden=\"true\" ></i> View Profile</a>\n";
                echo "</div>\n";
                echo "</div>\n";
                echo "</div>\n";
                echo "</div>\n";
                echo "<div class=\"card-content text-left mh145\">\n";
                echo "<h5>\n";
                echo "<a class=\"bold-n-black\" href=\"$url\">$name</a>\n";
                echo "</h5>\n";
                $email =substr($company->email,0,-10);
                echo "<i class=\"fa fa-envelope m-t-1 orange-text\" aria-hidden=\"true\"></i><a href=\"mailto:$company->email\" class=\"company-icon-card\" ><span>$email</span><span class=\"asterick\" >********</span></a><br/>\n";
                if(!empty($company->work)){
                  echo "<div class=\"mtm10\"><i class=\"fa fa-phone orange-text\" aria-hidden=\"true\"></i><span class=\"bfh-phone company-icon-card\" data-format=\"(ddd) ddd\" data-number=\"{{$company->work}}\" ></span><span class=\"asterick\" >****</span></div>\n";
                }
                echo "<a class=\"rm\" href=\"$url\"> View Profile <i class=\"fa fa-arrow-right pad-r-5\" aria-hidden=\"true\" ></i></a>";
                echo "</div>\n";
                echo "</div>\n";
                echo "<br/></div>\n";
            }
        }
        if($companies->isEmpty())
        {
            echo "<img src=\"https://blog.ronniefloyd.com/wp-content/uploads/NoRecordFound.png\" class=\"m-x-auto img-responsive\" style=\"height: 200px\">\n";
        }
    }

    public function resource_detail($resource_name,$id)
    {
        if($data=Resource::where('resources_id',$id)->where('status','enabled')->first()){

            if (Session::has('user_session')) {
                $user = Session::get('user_session');
                $user_id=$user[0]['user_id'];
                $user_=Users::where('uid',$user_id)->first();

                if($data->user_id!=$user_id) {
                    if(!ResourceViews::where('owner_id',$data->user_id)->where('resource_id',$id)->where('date',date('Y-m-d'))->where('user_id',$user_id)->exists()){
                        $resource_view = new ResourceViews();
                        $resource_view->resource_id = $id;
                        $resource_view->owner_id = $data->user_id;
                        $resource_view->user_id = $user_id;
                        $resource_view->date = date('Y-m-d');
                        $resource_view->company_name = $user_->company_name;
                        $resource_view->email = $user_->email;
                        $resource_view->region = $user_->region;
                        $resource_view->timestamp = time();
                        $resource_view->site_id = 1;
                        $resource_view->save();
                    }
                }
            }
            else{
                $client  = @$_SERVER['HTTP_CLIENT_IP'];
                $forward = @$_SERVER['HTTP_X_FORWARDED_FOR'];
                $remote  = $_SERVER['REMOTE_ADDR'];

                if(filter_var($client, FILTER_VALIDATE_IP)){
                    $ip = $client;
                }
                elseif(filter_var($forward, FILTER_VALIDATE_IP)){
                    $ip = $forward;
                }
                else{
                    $ip = $remote;
                }

                $country_name='';$city_name='';
                $ip_data = @json_decode(file_get_contents("http://www.geoplugin.net/json.gp?ip=".$ip));
                if($ip_data && $ip_data->geoplugin_countryName != null)
                {
                    $country_name= $ip_data->geoplugin_countryName;
                    $city_name = $ip_data->geoplugin_city;
                }
                if(!ResourceAnonymousViews::where('resource_id',$id)->where('date',date('Y-m-d'))->where('ip_address',$ip)->exists()) {
                    $resource_view = new ResourceAnonymousViews();
                    $resource_view->resource_id = $id;
                    $resource_view->owner_id = $data->user_id;
                    $resource_view->ip_address = $ip;
                    $resource_view->city = $city_name;
                    $resource_view->country = $country_name;
                    $resource_view->date = date('Y-m-d');
                    $resource_view->timestamp = time();
                    $resource_view->site_id = 1;
                    $resource_view->save();
                }
            }

            $title=$data->resource_topic;
            $brand_id=$data->brand_id;
            $company_name=$data->company_name;
            $resources_id=$data->resources_id;
            $related_resources=Resource::where('resources_id','!=','')->where('status','enabled')->where('adminstatus','!=','Disable')->where('resources_id','!=',$resources_id)
                ->where(function ($query) use ($title,$brand_id,$company_name){
                    $query->where('keywords','like','%'.$title.'%')->orWhere('resource_topic','like','%'.$title.'%')
                        ->orWhere('description','like','%'.$title.'%')->orWhere('company_name',$company_name);})
                ->take(6)->get();
            $query="select resources.*,users.*,content_type_brand.* from resources
                   LEFT JOIN users ON users.uid=resources.user_id
                   LEFT JOIN  content_type_brand  ON content_type_brand.brandid=resources.brand_id
                   where  resources.status='enabled' AND resources.resources_id!='' AND resources.adminstatus!='Disable' and users.package='p3'  group by resources.user_id  ORDER BY rand() DESC limit 0,10";
            $premium_resources=DB::select($query);

            SEOTools::setTitle($data->resource_topic. ' | Resource Center');
            SEOTools::setDescription($data->description);
            SEOTools::opengraph()->setUrl(url('/').'/resource-detail/'.$resource_name.'/'.$resources_id);
            SEOTools::setCanonical(url('/').'/resource-detail/'.$resource_name.'/'.$resources_id);
            SEOTools::opengraph()->addProperty('type', 'articles');
            SEOTools::jsonLd()->addImage($data->image_path);

            return View('resource_detail',compact('data','related_resources','premium_resources'));
        }
        else{
            return redirect('/');
        }
    }

    public function resource_stats_detail($id)
    {
        $data=Resource::where('resources_id',$id)->where('status','enabled')->first();
        $downloads=ResourceDownloads::select('*', \DB::raw("count(resource_id)  as total"))->where('resource_id',$data->resources_id)->groupBy('user_id')->get();
        $views=ResourceViews::select('*', \DB::raw("count(resource_id)  as total"))->where('resource_id',$data->resources_id)->groupBy('user_id')->get();
        $anonymousViews=ResourceAnonymousViews::select('*', \DB::raw("count(resource_id )  as total"))->where('resource_id',$data->resources_id)->groupBy('ip_address')->get();

        $anonymous_views_records="SELECT months.*,COUNT( resource_anonymous_views.resource_id ) AS total
                      FROM months
                      LEFT JOIN resource_anonymous_views ON months.id = Month(FROM_UNIXTIME(resource_anonymous_views.timestamp))
                      AND  resource_anonymous_views.resource_id='$data->resources_id'
                      GROUP BY months.month_name
                      ORDER BY YEAR(FROM_UNIXTIME(resource_anonymous_views.timestamp))";
        $anonymous_views_records=DB::select($anonymous_views_records);$anonymous_views_chart='';$month_name='';
        foreach($anonymous_views_records as $view){
            $anonymous_views_chart=$view->total.','.$anonymous_views_chart;
            $month_name='"'.$view->month_name.'"'.','.$month_name;
        }

        $views_records="SELECT months.*,COUNT( resource_views.resource_id ) AS total
                    FROM months
                    LEFT JOIN resource_views ON months.id = Month(FROM_UNIXTIME(resource_views.timestamp))
                    AND resource_views.resource_id='$data->resources_id'
                    GROUP BY months.month_name,  FROM_UNIXTIME(resource_views.timestamp) >= CURDATE() - INTERVAL 1 YEAR
                    ORDER BY YEAR(FROM_UNIXTIME(resource_views.timestamp))";
        $views_records=DB::select($views_records); $views_chart='';
        foreach($views_records as $view){
            $views_chart=$view->total.','.$views_chart;
        }

        $downloads_records="SELECT months.*,COUNT( resource_downloads.resource_id ) AS total
                    FROM months
                    LEFT JOIN resource_downloads ON months.id = Month(FROM_UNIXTIME(resource_downloads.timestamp))
                    AND resource_downloads.resource_id='$data->resources_id'
                    GROUP BY months.month_name,  FROM_UNIXTIME(resource_downloads.timestamp) >= CURDATE() - INTERVAL 1 YEAR
                    ORDER BY YEAR(FROM_UNIXTIME(resource_downloads.timestamp))";
        $downloads_records=DB::select($downloads_records);$downloads_chart='';
        foreach($downloads_records as $downloads_record){
            $downloads_chart=$downloads_record->total.','.$downloads_chart;
        }

        return View('resource_stats',
            compact('data','downloads','views','anonymousViews','month_name',
                'downloads_chart','views_chart','anonymous_views_chart'));
    }

    public function product_stats_detail($id)
    {
        $data=Products::where('product_id',$id)->first();
        $views=ProductViews::select('*', \DB::raw("count(product_id)  as total"))->where('product_id',$data->product_id)->groupBy('user_id')->get();
        $anonymousViews=ProductAnonymousViews::select('*', \DB::raw("count(product_id )  as total"))->where('product_id',$data->product_id)->groupBy('ip_address')->get();

        $anonymous_views_records="SELECT months.*,COUNT( product_anonymous_views.product_id ) AS total
                      FROM months
                      LEFT JOIN product_anonymous_views ON months.id = Month(FROM_UNIXTIME(product_anonymous_views.timestamp))
                      AND  product_anonymous_views.product_id='$data->product_id'
                      GROUP BY months.month_name
                      ORDER BY YEAR(FROM_UNIXTIME(product_anonymous_views.timestamp))";
        $anonymous_views_records=DB::select($anonymous_views_records);$anonymous_views_chart='';$month_name='';
        foreach($anonymous_views_records as $view){
            $anonymous_views_chart=$view->total.','.$anonymous_views_chart;
            $month_name='"'.$view->month_name.'"'.','.$month_name;
        }

        $views_records="SELECT months.*,COUNT( product_views.product_id ) AS total
                    FROM months
                    LEFT JOIN product_views ON months.id = Month(FROM_UNIXTIME(product_views.timestamp))
                    AND product_views.product_id='$data->product_id'
                    GROUP BY months.month_name,  FROM_UNIXTIME(product_views.timestamp) >= CURDATE() - INTERVAL 1 YEAR
                    ORDER BY YEAR(FROM_UNIXTIME(product_views.timestamp))";
        $views_records=DB::select($views_records); $views_chart='';
        foreach($views_records as $view){
            $views_chart=$view->total.','.$views_chart;
        }


        return View('product_stats',
            compact('data','views','anonymousViews','month_name',
                'views_chart','anonymous_views_chart'));
    }

    public function analytics()
    {
        return View('profile_analytics');
    }

    public function contact_us(Request $request)
    {
        $f_name=$request->input('f_name');
        $l_name=$request->input('l_name');
        $email=$request->input('email');
        $phone=$request->input('phone');
        $company=$request->input('c_name');
        $message=$request->input('message');

        $mail_data=array('first_name'=>$f_name,'last_name'=>$l_name,'company_name'=>$company,
            'phone'=>$phone,'message'=>$message,'email'=>$email);

        Mail::send('mail.contact',["data"=>$mail_data], function ($message) use ($f_name,$email)
        {
            $message->to('support@semcopublishing.com')->subject('Contact Us -  ' . $f_name );
        });
        Mail::send('mail.contact',["data"=>$mail_data], function ($message) use ($f_name,$email)
        {
            $message->to('o16.ahsan@gmail.com')->subject('Contact Us -  ' . $f_name );
        });
        if( Mail:: failures());
        echo 'success';
    }

    public function directory_data(Request $request)
    {
        $endpoint = "http://concreteproductsbg.com/gel_all_members_concreate";
        $client = new \GuzzleHttp\Client();


        $response = $client->request('GET', $endpoint, []);
        $users =  json_decode($response->getBody(),true);
        
        $yes= 0 ; $no = 0 ;
        foreach($users as $user) {
           
            $record=DB::table('users')->where('email',$user['user']['email'])->first();
                if(!$record){
                    DB::table('users')->insert($user['user']);
                    foreach ($user['schedules'] as $schedule){
                        DB::table('schedules')->insert(
                            ['day_of_week'=>$schedule['day_of_week'],'open_time'=>$schedule['open_time'],
                                'close_time'=>$schedule['close_time'],'user_id'=>$user['user']['uid'],
                                'created_at'=>date('Y-m-d H:i:s'),'updated_at'=>date('Y-m-d H:i:s')]
                        );
                    }
                    foreach($user['member_categories'] as $category){

                        $data=array('user_id'=>$user['user']['uid'],'category_id'=>$category['id_category'], 'site_id'=> 4);
                        DB::table('user_categories')->insert($data);
                    }
                    DB::table('user_sites')->insert(
                        ['user_id'=>$user['user']['uid'], 'site_id'=> 4]
                    );
                    $yes ++;
                }else{
                    $no++;
                }
        }
       echo 'Yes ' . $yes;
       echo 'No ' . $no;
    }
}
