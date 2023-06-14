<?php

namespace App\Http\Controllers;

use App\CompanyAnonymousViews;
use App\CompanyViews;
use App\Exports\MultipleProductSheetsExport;
use App\Exports\MultipleSheetsExport;
use App\Forgotpassword;
use App\ProductAnonymousViews;
use App\ProductCategory;
use App\Products;
use App\ProductViews;
use App\Region;
use App\Resource;
use App\ResourceAnonymousViews;
use App\ResourceDownloads;
use App\ResourceViews;
use App\Schedule;
use App\User;
use App\UserCategories;
use App\Users;
use Illuminate\Http\Request;
use DB;
use Artesaos\SEOTools\Facades\SEOTools;
use Maatwebsite\Excel\Facades\Excel;
use Session;
use Mail;
use Storage;

class CompanyController extends Controller
{
    public function register(Request $request)
    {
        $f_name=$request->input('firstName');
        $l_name=$request->input('lastName');
        $uname=$request->input('username');
        $email=$request->input('email');
        $password=$request->input('password');
        $cname=$request->input('companyName');
        $cell=$request->input('cell');
        $work=$request->input('work');if(empty($work)){$work='';}
        $address=$request->input('address');
        $city=$request->input('city');
        $state_province=$request->input('state_province');
        $country=$request->input('country');
        $region=$request->input('region');if(empty($region)){$region='';}
        $postal=$request->input('postalcode');

        if (User::where('email', '=', $email)->orWhere('username', '=', $uname)->exists()) {

            echo 'Email/Username already exists!';
            die;
        }
        else{
            $uid=md5(rand());
            $user = new User();
            $user->uid =$uid ;
            $user->first_name = $f_name;
            $user->last_name = $l_name;
            $user->username = $uname;
            $user->email = $email;
            $user->password = $password;
            $user->company_name = $cname;
            $user->company_image = url('/').'/public/images/default-images/default-company-logo.jpg';
            $user->cell = $cell;
            $user->work = $work;
            $user->address = $address;
            $user->region = $region;
            $user->city = $city;
            $user->state_province = $state_province;
            $user->zip_postal = $postal;
            $user->country = $country;
            $user->package = 'p2';
            $user->user_status ='not approved';
            $user->site_id=1;
            $user->save();

            $data=array('username'=>$uname,'email'=>$email,'user_id'=>$uid);
            Session::push('user_session', $data);
            try {
                if(empty($postal)){$postal='nil';}
                if(empty($country)){$country='nil';}
                $curl = curl_init();
                $date=date('Y-m-d');
                curl_setopt_array($curl, array(
                    CURLOPT_URL => "https://ows.omeda.com/webservices/rest/brand/MMCD/storecustomerandorder/*",
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 30,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "POST",
                    CURLOPT_POSTFIELDS => "{\r\n   \"FirstName\":$f_name,\r\n    \"LastName\":$l_name,\r\n    \"SignupDate\"$date,\r\n   \"Addresses\":[\r\n      {\r\n  \"AddressContactType\":\"100\",\r\n  \"Company\":$cname,\r\n      \"City\":$city,\r\n   \"Region\":$region,\r\n \"PostalCode\":$postal,\r\n   \"Country\":$country,\r\n     }\r\n   ],\r\n   \"Emails\":[\r\n      {\r\n         \"EmailContactType\":\"310\",\r\n         \"EmailAddress\":$email,\r\n      },\r\n      {\r\n         \"EmailContactType\":\"300\",\r\n  \"EmailAddress\":$email,\r\n      }\r\n   ],\r\n   \"Phones\":[\r\n      {\r\n    \"PhoneContactType\":\"200\",\r\n    \"Number\":$cell,\r\n  \"Extension\":\"72\"\r\n      },\r\n      {\r\n         \"PhoneContactType\":\"210\",\r\n         \"Number\":$cell \r\n      }\r\n   ]\r\n}",
                    CURLOPT_POSTFIELDS => "{\r\n    \"FirstName\":$f_name,\r\n  \"LastName\":$l_name,\r\n    \"SignupDate\":$date,\r\n   \"Addresses\":[\r\n      {\r\n  \"AddressContactType\":\"100\",\r\n  \"Company\":$cname,\r\n      \"City\":$city,\r\n  \"Region\":$region,\r\n \"PostalCode\":$postal,\r\n     \"Country\":$country,\r\n  }\r\n   ],\r\n   \"Emails\":[\r\n      {\r\n         \"EmailContactType\":\"310\",\r\n         \"EmailAddress\":$email,\r\n      },\r\n      {\r\n         \"EmailContactType\":\"300\",\r\n  \"EmailAddress\":$email,\r\n      }\r\n   ],\r\n   \"Phones\":[\r\n      {\r\n    \"PhoneContactType\":\"200\",\r\n      \"Number\":$cell,\r\n   \"Extension\":\"72\"\r\n      },\r\n      {\r\n         \"PhoneContactType\":\"210\",\r\n         \"Number\":$cell \r\n      }\r\n   ]\r\n}",
                    CURLOPT_HTTPHEADER => array(
                       "content-type: application/json",
                       "x-omeda-appid: 1DD35A23-6D81-4557-AA65-913ADCD0C704",
                       "x-omeda-inputid: 3126C4678801A4C"
                    ),
                ));

                $response = curl_exec($curl);
                $err = curl_error($curl);
                if ($err) {
                    // echo "cURL Error #:" . $err;
                } else {
                    $json=json_decode($response);
                    foreach($json->ResponseInfo as $row){
                   $t_id=$row->TransactionId;
                   curl_setopt_array($curl, array(
                       CURLOPT_URL => "https://ows.omeda.com/webservices/rest/brand/MMCD/runprocessor/*",
                       CURLOPT_RETURNTRANSFER => true,
                       CURLOPT_ENCODING => "",
                       CURLOPT_MAXREDIRS => 10,
                       CURLOPT_TIMEOUT => 30,
                       CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                       CURLOPT_CUSTOMREQUEST => "POST",
                       CURLOPT_POSTFIELDS => "{\r\n    \"Process\": [\r\n  {\r\n  \"TransactionId\": $t_id\r\n        }\r\n    ]\r\n}",
                       CURLOPT_HTTPHEADER => array(
                           "content-type: application/json",
                           "x-omeda-appid: 1DD35A23-6D81-4557-AA65-913ADCD0C704",
                           "x-omeda-inputid: 3126C4678801A4C"
                       ),
                   ));
                   curl_exec($curl);
                   curl_error($curl);
                   curl_close($curl);

                    }
                }
            }
            catch(Exception $e) {
                //die($e->getMessage());
            }

            $html= "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Account Settings</button>\n".
                "      <div class=\"dropdown-menu dropDown-menu-m\" >\n".
                "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editprofile()\">Edit Profile</a>\n".
                "           <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editcompany()\">Edit Company</a>\n".
                "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"logout()\">Logout</a>\n".
                "      </div>\n";
            echo $html;
        }
    }

    public function register_download(Request $request)
    {
        $f_name=$request->input('firstName');
        $l_name=$request->input('lastName');
        $uname=$request->input('username');
        $email=$request->input('email');
        $password=$request->input('password');
        $cname=$request->input('companyName');
        $cell=$request->input('cell');
        $work=$request->input('work');if(empty($work)){$work='';}
        $address=$request->input('address');
        $city=$request->input('city');
        $state_province=$request->input('state_province');
        $country=$request->input('country');
        $region=$request->input('region');if(empty($region)){$region='';}
        $postal=$request->input('postalcode');

        if (User::where('email', '=', $email)->orWhere('username', '=', $uname)->exists()) {
            echo 'Email/Username already exists!';
            die;
        }
        else{
            $uid=md5(rand());
            $user = new User();
            $user->uid =$uid ;
            $user->first_name = $f_name;
            $user->last_name = $l_name;
            $user->username = $uname;
            $user->email = $email;
            $user->password = $password;
            $user->company_name = $cname;
            $user->company_image = url('/').'/public/images/default-images/default-company-logo.jpg';
            $user->cell = $cell;
            $user->work = $work;
            $user->address = $address;
            $user->region = $region;
            $user->city = $city;
            $user->state_province = $state_province;
            $user->zip_postal = $postal;
            $user->country = $country;
            $user->package = 'p1';
            $user->site_id=1;
            $user->save();

            $data=array('username'=>$uname,'email'=>$email,'user_id'=>$uid);
            Session::push('user_session', $data);
            try {
                if(empty($postal)){$postal='nil';}
                if(empty($country)){$country='nil';}
                $curl = curl_init();
                $date=date('Y-m-d');
                curl_setopt_array($curl, array(
                    CURLOPT_URL => "https://ows.omeda.com/webservices/rest/brand/MMCD/storecustomerandorder/*",
                    CURLOPT_RETURNTRANSFER => true,
                    CURLOPT_ENCODING => "",
                    CURLOPT_MAXREDIRS => 10,
                    CURLOPT_TIMEOUT => 30,
                    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                    CURLOPT_CUSTOMREQUEST => "POST",
                    CURLOPT_POSTFIELDS => "{\r\n   \"FirstName\":$f_name,\r\n    \"LastName\":$l_name,\r\n    \"SignupDate\"$date,\r\n   \"Addresses\":[\r\n      {\r\n  \"AddressContactType\":\"100\",\r\n  \"Company\":$cname,\r\n      \"City\":$city,\r\n   \"Region\":$region,\r\n \"PostalCode\":$postal,\r\n   \"Country\":$country,\r\n     }\r\n   ],\r\n   \"Emails\":[\r\n      {\r\n         \"EmailContactType\":\"310\",\r\n         \"EmailAddress\":$email,\r\n      },\r\n      {\r\n         \"EmailContactType\":\"300\",\r\n  \"EmailAddress\":$email,\r\n      }\r\n   ],\r\n   \"Phones\":[\r\n      {\r\n    \"PhoneContactType\":\"200\",\r\n    \"Number\":$cell,\r\n  \"Extension\":\"72\"\r\n      },\r\n      {\r\n         \"PhoneContactType\":\"210\",\r\n         \"Number\":$cell \r\n      }\r\n   ]\r\n}",
                    CURLOPT_POSTFIELDS => "{\r\n    \"FirstName\":$f_name,\r\n  \"LastName\":$l_name,\r\n    \"SignupDate\":$date,\r\n   \"Addresses\":[\r\n      {\r\n  \"AddressContactType\":\"100\",\r\n  \"Company\":$cname,\r\n      \"City\":$city,\r\n  \"Region\":$region,\r\n \"PostalCode\":$postal,\r\n     \"Country\":$country,\r\n  }\r\n   ],\r\n   \"Emails\":[\r\n      {\r\n         \"EmailContactType\":\"310\",\r\n         \"EmailAddress\":$email,\r\n      },\r\n      {\r\n         \"EmailContactType\":\"300\",\r\n  \"EmailAddress\":$email,\r\n      }\r\n   ],\r\n   \"Phones\":[\r\n      {\r\n    \"PhoneContactType\":\"200\",\r\n      \"Number\":$cell,\r\n   \"Extension\":\"72\"\r\n      },\r\n      {\r\n         \"PhoneContactType\":\"210\",\r\n         \"Number\":$cell \r\n      }\r\n   ]\r\n}",
                    CURLOPT_HTTPHEADER => array(
                       "content-type: application/json",
                       "x-omeda-appid: 1DD35A23-6D81-4557-AA65-913ADCD0C704",
                       "x-omeda-inputid: 3126C4678801A4C"
                    ),
                ));

                $response = curl_exec($curl);
                $err = curl_error($curl);
                if ($err) {
                    // echo "cURL Error #:" . $err;
                } else {
                    $json=json_decode($response);
                    foreach($json->ResponseInfo as $row){
                       $t_id=$row->TransactionId;
                       curl_setopt_array($curl, array(
                           CURLOPT_URL => "https://ows.omeda.com/webservices/rest/brand/MMCD/runprocessor/*",
                           CURLOPT_RETURNTRANSFER => true,
                           CURLOPT_ENCODING => "",
                           CURLOPT_MAXREDIRS => 10,
                           CURLOPT_TIMEOUT => 30,
                           CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
                           CURLOPT_CUSTOMREQUEST => "POST",
                           CURLOPT_POSTFIELDS => "{\r\n    \"Process\": [\r\n  {\r\n  \"TransactionId\": $t_id\r\n        }\r\n    ]\r\n}",
                           CURLOPT_HTTPHEADER => array(
                               "content-type: application/json",
                               "x-omeda-appid: 1DD35A23-6D81-4557-AA65-913ADCD0C704",
                               "x-omeda-inputid: 3126C4678801A4C"
                           ),
                       ));
                       curl_exec($curl);
                       curl_error($curl);
                       curl_close($curl);

                     }
                }
            }
            catch(Exception $e) {
                //die($e->getMessage());
            }
            $rid= $_SERVER['HTTP_REFERER'];
            $pos = strrpos($rid, '/');
            $id = $pos === false ? $rid : substr($rid, $pos + 1);

            if($resource=Resource::where('resources_id',$id)->where('status','enabled')->first()){

                $resource_download = new ResourceDownloads();
                $resource_download->resource_id = $id;
                $resource_download->user_id = $uid;
                $resource_download->owner_id = $resource->user_id;
                $resource_download->date = date('Y-m-d');
                $resource_download->company_name = $cname;
                $resource_download->email = $email;
                $resource_download->region = $region;
                $resource_download->timestamp = time();
                $resource_download->site_id = 1;
                $resource_download->save();
                $this->mail_function($resource,$email);
                $html= "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Account Settings</button>\n".
                    "      <div class=\"dropdown-menu dropDown-menu-m\" >\n".
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editprofile()\">Edit Profile</a>\n".
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"logout()\">Logout</a>\n".
                    "      </div>\n";
                echo $html;
            }
        }
    }

    public function login(Request $request)
    {
        $email=$request->input('email');
        $password=$request->input('password');
        $remember_me=$request->input('remember_me');
        if($remember_me=='remember_me') {
            \Cookie::make('user', $email,  60 * 24 * 30);
            \Cookie::queue('user', $email,  60 * 24 * 30);

            \Cookie::make('pass', $password,  60 * 24 * 30);
            \Cookie::queue('pass', $password,  60 * 24 * 30);
        }
        $sha_pass=sha1($password);
        $md5_pass=md5($password);

        if ($user=User::where(function ($query) use ($password,$sha_pass,$md5_pass){
            $query->where('password',$password)->orWhere('password',$sha_pass)->orWhere('password',$md5_pass);})
            ->where(function ($query) use ($email){
            $query->where('username',$email)->orWhere('email',$email);})->first()) {

            $data=array('username'=>$user->username,'email'=>$user->email,'user_id'=>$user->uid);
            $site_id=$user->site_id;
            $user_status=$user->user_status;
            $third=0;
            $url=url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$user->company_name))).'/'.$user->uid;
            if($site_id==1 and $user_status=='approved') {
                $html = "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Account Settings</button>\n" .
                    "      <div class=\"dropdown-menu dropDown-menu-m\" >\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" style=\"color: #ca311b\" href=\"$url\"  >$user->company_name</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editprofile()\">Edit Profile</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editcompany()\">Edit Company</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#uploadModal\" >Add Resource</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"logout()\">Logout</a>\n" .
                    "      </div>\n";
                $third=1;
            }else{
                $html = "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Account Settings</button>\n" .
                    "      <div class=\"dropdown-menu dropDown-menu-m\" >\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editprofile()\">Edit Profile</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"logout()\">Logout</a>\n" .
                    "      </div>\n";
            }
            $values['first'] = $html;
            $values['second'] = 0;
            $values['third'] = $third;
            $values['url'] = $url;
            print json_encode( $values );
            Session::push('user_session', $data);

        }
        else {
            echo 'Invalid Credentials!';
        }

    }

    public function login_download(Request $request)
    {
        $email=$request->input('email');
        $password=$request->input('password');
        $sha_pass=sha1($password);
        $md5_pass=md5($password);
        $remember_me=$request->input('remember_me');
        if($remember_me=='remember_me')
        {

            \Cookie::make('user', $email,  60 * 24 * 30);
            \Cookie::queue('user', $email,  60 * 24 * 30);

            \Cookie::make('pass', $email,  60 * 24 * 30);
            \Cookie::queue('pass', $email,  60 * 24 * 30);

        }

        if ($user=User::where(function ($query) use ($password,$sha_pass,$md5_pass){
            $query->where('password',$password)->orWhere('password',$sha_pass)->orWhere('password',$md5_pass);})
            ->where(function ($query) use ($email){
                $query->where('username',$email)->orWhere('email',$email);})->first()) {
            $data=array('username'=>$user->username,'email'=>$user->email,'user_id'=>$user->uid);
            Session::push('user_session', $data);

            $rid= $_SERVER['HTTP_REFERER'];
            $pos = strrpos($rid, '/');
            $id = $pos === false ? $rid : substr($rid, $pos + 1);

            if($resource=Resource::where('resources_id',$id)->where('status','enabled')->first()){

                $resource_download = new ResourceDownloads();
                $resource_download->resource_id = $id;
                $resource_download->user_id = $user->uid;
                $resource_download->owner_id = $resource->user_id;
                $resource_download->date = date('Y-m-d');
                $resource_download->company_name = $user->company_name;
                $resource_download->email = $user->email;
                $resource_download->region = $user->region;
                $resource_download->timestamp = time();
                $resource_download->site_id = 1;
                $resource_download->save();
                $this->mail_function($resource,$user->email);
            }

            $site_id=$user->site_id;
            $user_status=$user->user_status;

            $url=url('/').'/company_detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$user->company_name))).'/'.$user->uid;
            if($site_id==1 and $user_status=='approved') {
                $html = "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Account Settings</button>\n" .
                    "      <div class=\"dropdown-menu dropDown-menu-m\" >\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" style=\"color: #ca311b\" href=\"$url\"  >$user->company_name</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editprofile()\">Edit Profile</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editcompany()\">Edit Company</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#uploadModal\" >Add Resource</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"logout()\">Logout</a>\n" .
                    "      </div>\n";
            }else{
                $html = "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Account Settings</button>\n" .
                    "      <div class=\"dropdown-menu dropDown-menu-m\" >\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"editprofile()\">Edit Profile</a>\n" .
                    "        <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#\"  onclick=\"logout()\">Logout</a>\n" .
                    "      </div>\n";
            }
            $values['first'] = $html;
            $values['second'] = 0;
            print json_encode( $values );

        }
        else {
            echo 'Invalid Credentials!';
        }

    }

    public function company_detail($c_name,$id)
    {
        $company_detail=User::where('uid',$id)->first();

        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $user_id=$user[0]['user_id'];
            if($company_detail->uid!=$user_id) {
                $company_view = new CompanyViews();
                $company_view->company_id = $id;
                $company_view->user_id = $user_id;
                $company_view->date = date('Y-m-d');
                $company_view->timestamp = time();
                $company_view->site_id = 1;
                $company_view->save();
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
            $company_view=new CompanyAnonymousViews();
            $company_view->company_id=$id;
            $company_view->ip_address=$ip;
            $company_view->city=$city_name;
            $company_view->country=$country_name;
            $company_view->date=date('Y-m-d');
            $company_view->timestamp=time();
            $company_view->site_id=1;
            $company_view->save();
        }

        $resources=Resource::where('user_id', $id)->where('status','enabled')->where('adminstatus','!=','Disable')->where('resources_id','!=','')->orderBy('id','desc')->paginate(9);
        $query="select resources.*,users.*,content_type_brand.* from resources
                   LEFT JOIN users ON users.uid=resources.user_id
                   LEFT JOIN  content_type_brand  ON content_type_brand.brandid=resources.brand_id
                   where  resources.status='enabled' AND resources.resources_id!='' AND resources.adminstatus!='Disable' and users.package='p3'  group by resources.user_id  ORDER BY rand() DESC limit 0,10";
        $premium_resources=DB::select($query);

        $schedule=\App\Schedule::where('user_id',$id)->get();

        $products=Products::with('user')->where('user_id',$id)
            ->orderBy('product_id','desc')->get();

        SEOTools::setTitle($company_detail->company_name. ' | Resource Center');
        SEOTools::setDescription($company_detail->company_name);
        SEOTools::opengraph()->setUrl(url('/').'/company-detail/'.$c_name.'/'.$id);
        SEOTools::setCanonical(url('/').'/company-detail/'.$c_name.'/'.$id);
        SEOTools::opengraph()->addProperty('type', 'articles');
        SEOTools::jsonLd()->addImage($company_detail->company_image);

        $member_category="SELECT GROUP_CONCAT(category_id) AS value  FROM user_categories where user_id='$id' group by category_id";
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

        return View('company_detail',['data'=>$company_detail,'schedule'=>$schedule,'member_categories'=>$member_categories,
            'categories'=>$categories,'resources'=>$resources,'premium_resources'=>$premium_resources,'products'=>$products]);
    }

    public function edit_profile_modal()
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $email=$user[0]['email'];
            $users=User::where('email','=',$email)->first();
            $username=$users->username;
            $company_name=$users->company_name;
            $fName=$users->first_name;
            $lName=$users->last_name;
            $region=$users->region;
            $cell=$users->cell;
            $work=$users->work;
            $address=$users->address;
            $city=$users->city;
            $state_province=$users->state_province;
            $country=$users->country;
            $postalcode=$users->zip_postal;
            $regions=Region::get();

            echo " <div class=\"col-md-12\">\n";
            echo " <label class=\"form-label\">Email Address <span class=\"form-asterick\">&#42;</span></label>\n";
            echo " <input class=\"form-control\" type=\"text\" name=\"email\" placeholder=\"Email Address\" value=\"$email\">\n";
            echo " <input class=\"form-control\" type=\"hidden\" name=\"oldemail\" placeholder=\"Email Address\" value=\"$email\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">First Name <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"firstName\" placeholder=\"First Name\" value=\"$fName\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Last Name <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"lastName\" placeholder=\"Last Name\" value=\"$lName\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Username <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"username\" id=\"#username\" placeholder=\"Username\" value=\"$username\" readonly>\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Company Name <span class=\"form-asterick\">&#42;</span></label>\n";
            echo " <input class=\"form-control\" type=\"text\" name=\"companyName\" placeholder=\"Company Name\" value=\"$company_name\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Cell <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"cell\" placeholder=\"Cell\" value=\"$cell\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Work <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"work\" placeholder=\"Work\" value=\"$work\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Address<span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"address\" placeholder=\"Address\" value=\"$address\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Region<span class=\"form-asterick\">&#42;</span></label>\n";
            echo " <select class=\"form-control\" name=\"region\" id=\"rregion\">\n";
            if(empty($region)) { echo "   <option selected=\"true\" disabled=\"disabled\" value=\"\">Select Region</option>\n";
                foreach ($regions as $reg) {
                    echo "   <option value=\"$reg->regionname\">\n";
                    echo "     $reg->regionname\n";
                    echo "  </option>\n";
                }
            }else {foreach ($regions as $reg) {
                if($reg->regionname==$region) {
                    echo "    <option value=\"$reg->regionname\">\n";
                    echo "       $reg->regionname\n";
                    echo "   </option>\n";
                }}
                foreach($regions as $reg){
                    if($reg->regionname!=$region) {
                        echo "<option value=\"$reg->regionname\">\n";
                        echo "       $reg->regionname\n";
                        echo "</option>\n";
                    }}}
            echo " </select>\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">City <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"city\" placeholder=\"City\" value=\"$city\">\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">State <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "<input class=\"form-control\" type=\"text\" name=\"state_province\" placeholder=\"State/Province\" value=\"$state_province\">\n";
            echo "\n";
            echo " <br/>\n";
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Country <span class=\"form-asterick\">&#42;</span></label>\n";
            echo "\n";

            if(empty($country)) {
                echo " <select class=\"form-control\" name=\"country\">\n";
                echo " <option selected=\"true\" disabled=\"disabled\" value=\"\">Select Country</option>\n";
                echo " <option value=\"United States\">United States</option>\n";
                echo " <option value=\"Afghanistan\">Afghanistan</option>\n";
                echo " <option value=\"Aland Islands\">Aland Islands</option>\n";
                echo " <option value=\"Albania\">Albania</option>\n";
                echo " <option value=\"Algeria\">Algeria</option>\n";
                echo " <option value=\"American Samoa\">American Samoa</option>\n";
                echo " <option value=\"Andorra\">Andorra</option>\n";
                echo " <option value=\"Angola\">Angola</option>\n";
                echo " <option value=\"Anguilla\">Anguilla</option>\n";
                echo " <option value=\"Antarctica\">Antarctica</option>\n";
                echo " <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n";
                echo " <option value=\"Argentina\">Argentina</option>\n";
                echo " <option value=\"Armenia\">Armenia</option>\n";
                echo " <option value=\"Aruba\">Aruba</option>\n";
                echo " <option value=\"Australia\">Australia</option>\n";
                echo " <option value=\"Austria\">Austria</option>\n";
                echo " <option value=\"Azerbaijan\">Azerbaijan</option>\n";
                echo " <option value=\"Bahamas\">Bahamas</option>\n";
                echo " <option value=\"Bahrain\">Bahrain</option>\n";
                echo " <option value=\"Bangladesh\">Bangladesh</option>\n";
                echo " <option value=\"Barbados\">Barbados</option>\n";
                echo " <option value=\"Belarus\">Belarus</option>\n";
                echo " <option value=\"Belgium\">Belgium</option>\n";
                echo " <option value=\"Belize\">Belize</option>\n";
                echo " <option value=\"Benin\">Benin</option>\n";
                echo " <option value=\"Bermuda\">Bermuda</option>\n";
                echo " <option value=\"Bhutan\">Bhutan</option>\n";
                echo " <option value=\"Bolivia, Plurinational State of\">Bolivia, Plurinational State of</option>\n";
                echo " <option value=\"Bonaire, Sint Eustatius and Saba\">Bonaire, Sint Eustatius and Saba</option>\n";
                echo " <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n";
                echo " <option value=\"Botswana\">Botswana</option>\n";
                echo " <option value=\"Bouvet Island\">Bouvet Island</option>\n";
                echo " <option value=\"Brazil\">Brazil</option>\n";
                echo " <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n";
                echo "<option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n";
                echo "<option value=\"Bulgaria\">Bulgaria</option>\n";
                echo "<option value=\"Burkina Faso\">Burkina Faso</option>\n";
                echo "<option value=\"Burundi\">Burundi</option>\n";
                echo "<option value=\"Cambodia\">Cambodia</option>\n";
                echo "<option value=\"Cameroon\">Cameroon</option>\n";
                echo "<option value=\"Canada\">Canada</option>\n";
                echo "<option value=\"Cape Verde\">Cape Verde</option>\n";
                echo "<option value=\"Cayman Islands\">Cayman Islands</option>\n";
                echo "<option value=\"Central African Republic\">Central African Republic</option>\n";
                echo "<option value=\"Chad\">Chad</option>\n";
                echo "<option value=\"Chile\">Chile</option>\n";
                echo "<option value=\"China\">China</option>\n";
                echo "<option value=\"Christmas Island\">Christmas Island</option>\n";
                echo "<option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n";
                echo "<option value=\"Colombia\">Colombia</option>\n";
                echo "<option value=\"Comoros\">Comoros</option>\n";
                echo "<option value=\"Congo\">Congo</option>\n";
                echo "<option value=\"Congo, the Democratic Republic of the\">Congo, the Democratic Republic of the</option>\n";
                echo "<option value=\"Cook Islands\">Cook Islands</option>\n";
                echo "<option value=\"Costa Rica\">Costa Rica</option>\n";
                echo "<option value=\"Cote d'Ivoire\">Cote d'Ivoire</option>\n";
                echo "<option value=\"Croatia\">Croatia</option>\n";
                echo "<option value=\"Cuba\">Cuba</option>\n";
                echo "<option value=\"Curaçao\">Curaçao</option>\n";
                echo "<option value=\"Cyprus\">Cyprus</option>\n";
                echo "<option value=\"Czech Republic\">Czech Republic</option>\n";
                echo "<option value=\"Denmark\">Denmark</option>\n";
                echo "<option value=\"Djibouti\">Djibouti</option>\n";
                echo "<option value=\"Dominica\">Dominica</option>\n";
                echo "<option value=\"Dominican Republic\">Dominican Republic</option>\n";
                echo "<option value=\"Ecuador\">Ecuador</option>\n";
                echo "<option value=\"Egypt\">Egypt</option>\n";
                echo "<option value=\"El Salvador\">El Salvador</option>\n";
                echo "<option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n";
                echo "<option value=\"Eritrea\">Eritrea</option>\n";
                echo "<option value=\"Estonia\">Estonia</option>\n";
                echo "<option value=\"Ethiopia\">Ethiopia</option>\n";
                echo "<option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n";
                echo "<option value=\"Faroe Islands\">Faroe Islands</option>\n";
                echo "<option value=\"Fiji\">Fiji</option>\n";
                echo "<option value=\"Finland\">Finland</option>\n";
                echo "<option value=\"France\">France</option>\n";
                echo "<option value=\"French Guiana\">French Guiana</option>\n";
                echo "<option value=\"French Polynesia\">French Polynesia</option>\n";
                echo "<option value=\"French Southern Territories\">French Southern Territories</option>\n";
                echo "<option value=\"Gabon\">Gabon</option>\n";
                echo "<option value=\"Gambia\">Gambia</option>\n";
                echo "<option value=\"Georgia\">Georgia</option>\n";
                echo "<option value=\"Germany\">Germany</option>\n";
                echo "<option value=\"Ghana\">Ghana</option>\n";
                echo "<option value=\"Gibraltar\">Gibraltar</option>\n";
                echo "<option value=\"Greece\">Greece</option>\n";
                echo "<option value=\"Greenland\">Greenland</option>\n";
                echo "<option value=\"Grenada\">Grenada</option>\n";
                echo "<option value=\"Guadeloupe\">Guadeloupe</option>\n";
                echo "<option value=\"Guam\">Guam</option>\n";
                echo "<option value=\"Guatemala\">Guatemala</option>\n";
                echo "<option value=\"Guernsey\">Guernsey</option>\n";
                echo "<option value=\"Guinea\">Guinea</option>\n";
                echo "<option value=\"Guinea-Bissau\">Guinea-Bissau</option>\n";
                echo "<option value=\"Guyana\">Guyana</option>\n";
                echo "<option value=\"Haiti\">Haiti</option>\n";
                echo "<option value=\"Heard Island and McDonald Islands\">Heard Island and McDonald Islands</option>\n";
                echo "<option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n";
                echo "<option value=\"Honduras\">Honduras</option>\n";
                echo "<option value=\"Hong Kong\">Hong Kong</option>\n";
                echo "<option value=\"Hungary\">Hungary</option>\n";
                echo "<option value=\"Iceland\">Iceland</option>\n";
                echo "<option value=\"India\">India</option>\n";
                echo "<option value=\"Indonesia\">Indonesia</option>\n";
                echo "<option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n";
                echo "<option value=\"Iraq\">Iraq</option>\n";
                echo "<option value=\"Ireland\">Ireland</option>\n";
                echo "<option value=\"Isle of Man\">Isle of Man</option>\n";
                echo "<option value=\"Israel\">Israel</option>\n";
                echo "<option value=\"Italy\">Italy</option>\n";
                echo "<option value=\"Jamaica\">Jamaica</option>\n";
                echo "<option value=\"Japan\">Japan</option>\n";
                echo "<option value=\"Jersey\">Jersey</option>\n";
                echo "<option value=\"Jordan\">Jordan</option>\n";
                echo "<option value=\"Kazakhstan\">Kazakhstan</option>\n";
                echo "<option value=\"Kenya\">Kenya</option>\n";
                echo "<option value=\"Kiribati\">Kiribati</option>\n";
                echo "<option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n";
                echo "<option value=\"Korea, Republic of\">Korea, Republic of</option>\n";
                echo "<option value=\"Kuwait\">Kuwait</option>\n";
                echo "<option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n";
                echo "<option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n";
                echo "<option value=\"Latvia\">Latvia</option>\n";
                echo "<option value=\"Lebanon\">Lebanon</option>\n";
                echo "<option value=\"Lesotho\">Lesotho</option>\n";
                echo "<option value=\"Liberia\">Liberia</option>\n";
                echo "<option value=\"Libya\">Libya</option>\n";
                echo "<option value=\"Liechtenstein\">Liechtenstein</option>\n";
                echo "<option value=\"Lithuania\">Lithuania</option>\n";
                echo "<option value=\"Luxembourg\">Luxembourg</option>\n";
                echo "<option value=\"Macao\">Macao</option>\n";
                echo "<option value=\"Macedonia, the former Yugoslav Republic of\">Macedonia, the former Yugoslav Republic of</option>\n";
                echo "<option value=\"Madagascar\">Madagascar</option>\n";
                echo "<option value=\"Malawi\">Malawi</option>\n";
                echo "<option value=\"Malaysia\">Malaysia</option>\n";
                echo "<option value=\"Maldives\">Maldives</option>\n";
                echo "<option value=\"Mali\">Mali</option>\n";
                echo "<option value=\"Malta\">Malta</option>\n";
                echo "<option value=\"Marshall Islands\">Marshall Islands</option>\n";
                echo "<option value=\"Martinique\">Martinique</option>\n";
                echo "<option value=\"Mauritania\">Mauritania</option>\n";
                echo "<option value=\"Mauritius\">Mauritius</option>\n";
                echo "<option value=\"Mayotte\">Mayotte</option>\n";
                echo "<option value=\"Mexico\">Mexico</option>\n";
                echo "<option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n";
                echo "<option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n";
                echo "<option value=\"Monaco\">Monaco</option>\n";
                echo "<option value=\"Mongolia\">Mongolia</option>\n";
                echo "<option value=\"Montenegro\">Montenegro</option>\n";
                echo "<option value=\"Montserrat\">Montserrat</option>\n";
                echo "<option value=\"Morocco\">Morocco</option>\n";
                echo "<option value=\"Mozambique\">Mozambique</option>\n";
                echo "<option value=\"Myanmar\">Myanmar</option>\n";
                echo "<option value=\"Namibia\">Namibia</option>\n";
                echo "<option value=\"Nauru\">Nauru</option>\n";
                echo "<option value=\"Nepal\">Nepal</option>\n";
                echo "<option value=\"Netherlands\">Netherlands</option>\n";
                echo "<option value=\"New Caledonia\">New Caledonia</option>\n";
                echo "<option value=\"New Zealand\">New Zealand</option>\n";
                echo "<option value=\"Nicaragua\">Nicaragua</option>\n";
                echo "<option value=\"Niger\">Niger</option>\n";
                echo "<option value=\"Nigeria\">Nigeria</option>\n";
                echo "<option value=\"Niue\">Niue</option>\n";
                echo "<option value=\"Norfolk Island\">Norfolk Island</option>\n";
                echo "<option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n";
                echo "<option value=\"Norway\">Norway</option>\n";
                echo "<option value=\"Oman\">Oman</option>\n";
                echo "<option value=\"Pakistan\">Pakistan</option>\n";
                echo "<option value=\"Palau\">Palau</option>\n";
                echo "<option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n";
                echo "<option value=\"Panama\">Panama</option>\n";
                echo "<option value=\"Papua New Guinea\">Papua New Guinea</option>\n";
                echo "<option value=\"Paraguay\">Paraguay</option>\n";
                echo "<option value=\"Peru\">Peru</option>\n";
                echo "<option value=\"Philippines\">Philippines</option>\n";
                echo "<option value=\"Pitcairn\">Pitcairn</option>\n";
                echo "<option value=\"Poland\">Poland</option>\n";
                echo "<option value=\"Portugal\">Portugal</option>\n";
                echo "<option value=\"Puerto Rico\">Puerto Rico</option>\n";
                echo "<option value=\"Qatar\">Qatar</option>\n";
                echo "<option value=\"Reunion\">Reunion</option>\n";
                echo "<option value=\"Romania\">Romania</option>\n";
                echo "<option value=\"Russian Federation\">Russian Federation</option>\n";
                echo "<option value=\"Rwanda\">Rwanda</option>\n";
                echo "<option value=\"Saint Barthélemy\">Saint Barthelemy</option>\n";
                echo "<option value=\"Saint Helena, Ascension and Tristan da Cunha\">Saint Helena, Ascension and Tristan da Cunha</option>\n";
                echo "<option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n";
                echo "<option value=\"Saint Lucia\">Saint Lucia</option>\n";
                echo "<option value=\"Saint Martin (French part)\">Saint Martin (French part)</option>\n";
                echo "<option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n";
                echo "<option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\n";
                echo "<option value=\"Samoa\">Samoa</option>\n";
                echo "<option value=\"San Marino\">San Marino</option>\n";
                echo "<option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n";
                echo "<option value=\"Saudi Arabia\">Saudi Arabia</option>\n";
                echo "<option value=\"Senegal\">Senegal</option>\n";
                echo "<option value=\"Serbia\">Serbia</option>\n";
                echo "<option value=\"Seychelles\">Seychelles</option>\n";
                echo "<option value=\"Sierra Leone\">Sierra Leone</option>\n";
                echo "<option value=\"Singapore\">Singapore</option>\n";
                echo "<option value=\"Sint Maarten (Dutch part)\">Sint Maarten (Dutch part)</option>\n";
                echo "<option value=\"Slovakia\">Slovakia</option>\n";
                echo "<option value=\"Slovenia\">Slovenia</option>\n";
                echo "<option value=\"Solomon Islands\">Solomon Islands</option>\n";
                echo "<option value=\"Somalia\">Somalia</option>\n";
                echo "<option value=\"South Africa\">South Africa</option>\n";
                echo "<option value=\"South Georgia and the South Sandwich Islands\">South Georgia and the South Sandwich Islands</option>\n";
                echo "<option value=\"South Sudan\">South Sudan</option>\n";
                echo "<option value=\"Spain\">Spain</option>\n";
                echo "<option value=\"Sri Lanka\">Sri Lanka</option>\n";
                echo "<option value=\"Sudan\">Sudan</option>\n";
                echo "<option value=\"Suriname\">Suriname</option>\n";
                echo "<option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n";
                echo "<option value=\"Swaziland\">Swaziland</option>\n";
                echo "<option value=\"Sweden\">Sweden</option>\n";
                echo "<option value=\"Switzerland\">Switzerland</option>\n";
                echo "<option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n";
                echo "<option value=\"TW\">Taiwan, Province of China</option>\n";
                echo "<option value=\"Taiwan, Province of China\">Tajikistan</option>\n";
                echo "<option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n";
                echo "<option value=\"Thailand\">Thailand</option>\n";
                echo "<option value=\"Timor-Leste\">Timor-Leste</option>\n";
                echo "<option value=\"Togo\">Togo</option>\n";
                echo "<option value=\"Tokelau\">Tokelau</option>\n";
                echo "<option value=\"Tonga\">Tonga</option>\n";
                echo "<option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n";
                echo "<option value=\"Tunisia\">Tunisia</option>\n";
                echo "<option value=\"Turkey\">Turkey</option>\n";
                echo "<option value=\"Turkmenistan\">Turkmenistan</option>\n";
                echo "<option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n";
                echo "<option value=\"Tuvalu\">Tuvalu</option>\n";
                echo "<option value=\"Uganda\">Uganda</option>\n";
                echo "<option value=\"Ukraine\">Ukraine</option>\n";
                echo "<option value=\"United Arab Emirates\">United Arab Emirates</option>\n";
                echo "<option value=\"United Kingdom\">United Kingdom</option>\n";
                echo "<option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n";
                echo "<option value=\"Uruguay\">Uruguay</option>\n";
                echo "<option value=\"Uzbekistan\">Uzbekistan</option>\n";
                echo "<option value=\"Vanuatu\">Vanuatu</option>\n";
                echo "<option value=\"Venezuela, Bolivarian Republic of\">Venezuela, Bolivarian Republic of</option>\n";
                echo "<option value=\"Viet Nam\">Viet Nam</option>\n";
                echo "<option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n";
                echo "<option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n";
                echo "<option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n";
                echo "<option value=\"Western Sahara\">Western Sahara</option>\n";
                echo "<option value=\"Yemen\">Yemen</option>\n";
                echo "<option value=\"Zambia\">Zambia</option>\n";
                echo "<option value=\"Zimbabwe\">Zimbabwe</option>\n";

                echo " </select>\n";
            }
            else {
                echo "<select class=\"form-control\" name=\"country\">\n";
                echo "<option value=\"$country\">\n";
                echo "  $country\n";
                echo " </option>\n";
                echo " <option value=\"Afghanistan\">Afghanistan</option>\n";
                echo " <option value=\"Aland Islands\">Aland Islands</option>\n";
                echo " <option value=\"Albania\">Albania</option>\n";
                echo " <option value=\"Algeria\">Algeria</option>\n";
                echo " <option value=\"American Samoa\">American Samoa</option>\n";
                echo " <option value=\"Andorra\">Andorra</option>\n";
                echo " <option value=\"Angola\">Angola</option>\n";
                echo " <option value=\"Anguilla\">Anguilla</option>\n";
                echo " <option value=\"Antarctica\">Antarctica</option>\n";
                echo " <option value=\"Antigua and Barbuda\">Antigua and Barbuda</option>\n";
                echo " <option value=\"Argentina\">Argentina</option>\n";
                echo " <option value=\"Armenia\">Armenia</option>\n";
                echo " <option value=\"Aruba\">Aruba</option>\n";
                echo " <option value=\"Australia\">Australia</option>\n";
                echo " <option value=\"Austria\">Austria</option>\n";
                echo " <option value=\"Azerbaijan\">Azerbaijan</option>\n";
                echo " <option value=\"Bahamas\">Bahamas</option>\n";
                echo " <option value=\"Bahrain\">Bahrain</option>\n";
                echo " <option value=\"Bangladesh\">Bangladesh</option>\n";
                echo " <option value=\"Barbados\">Barbados</option>\n";
                echo " <option value=\"Belarus\">Belarus</option>\n";
                echo " <option value=\"Belgium\">Belgium</option>\n";
                echo " <option value=\"Belize\">Belize</option>\n";
                echo " <option value=\"Benin\">Benin</option>\n";
                echo " <option value=\"Bermuda\">Bermuda</option>\n";
                echo " <option value=\"Bhutan\">Bhutan</option>\n";
                echo " <option value=\"Bolivia, Plurinational State of\">Bolivia, Plurinational State of</option>\n";
                echo " <option value=\"Bonaire, Sint Eustatius and Saba\">Bonaire, Sint Eustatius and Saba</option>\n";
                echo " <option value=\"Bosnia and Herzegovina\">Bosnia and Herzegovina</option>\n";
                echo " <option value=\"Botswana\">Botswana</option>\n";
                echo " <option value=\"Bouvet Island\">Bouvet Island</option>\n";
                echo " <option value=\"Brazil\">Brazil</option>\n";
                echo " <option value=\"British Indian Ocean Territory\">British Indian Ocean Territory</option>\n";
                echo "<option value=\"Brunei Darussalam\">Brunei Darussalam</option>\n";
                echo "<option value=\"Bulgaria\">Bulgaria</option>\n";
                echo "<option value=\"Burkina Faso\">Burkina Faso</option>\n";
                echo "<option value=\"Burundi\">Burundi</option>\n";
                echo "<option value=\"Cambodia\">Cambodia</option>\n";
                echo "<option value=\"Cameroon\">Cameroon</option>\n";
                echo "<option value=\"Canada\">Canada</option>\n";
                echo "<option value=\"Cape Verde\">Cape Verde</option>\n";
                echo "<option value=\"Cayman Islands\">Cayman Islands</option>\n";
                echo "<option value=\"Central African Republic\">Central African Republic</option>\n";
                echo "<option value=\"Chad\">Chad</option>\n";
                echo "<option value=\"Chile\">Chile</option>\n";
                echo "<option value=\"China\">China</option>\n";
                echo "<option value=\"Christmas Island\">Christmas Island</option>\n";
                echo "<option value=\"Cocos (Keeling) Islands\">Cocos (Keeling) Islands</option>\n";
                echo "<option value=\"Colombia\">Colombia</option>\n";
                echo "<option value=\"Comoros\">Comoros</option>\n";
                echo "<option value=\"Congo\">Congo</option>\n";
                echo "<option value=\"Congo, the Democratic Republic of the\">Congo, the Democratic Republic of the</option>\n";
                echo "<option value=\"Cook Islands\">Cook Islands</option>\n";
                echo "<option value=\"Costa Rica\">Costa Rica</option>\n";
                echo "<option value=\"Cote d'Ivoire\">Cote d'Ivoire</option>\n";
                echo "<option value=\"Croatia\">Croatia</option>\n";
                echo "<option value=\"Cuba\">Cuba</option>\n";
                echo "<option value=\"Curaçao\">Curaçao</option>\n";
                echo "<option value=\"Cyprus\">Cyprus</option>\n";
                echo "<option value=\"Czech Republic\">Czech Republic</option>\n";
                echo "<option value=\"Denmark\">Denmark</option>\n";
                echo "<option value=\"Djibouti\">Djibouti</option>\n";
                echo "<option value=\"Dominica\">Dominica</option>\n";
                echo "<option value=\"Dominican Republic\">Dominican Republic</option>\n";
                echo "<option value=\"Ecuador\">Ecuador</option>\n";
                echo "<option value=\"Egypt\">Egypt</option>\n";
                echo "<option value=\"El Salvador\">El Salvador</option>\n";
                echo "<option value=\"Equatorial Guinea\">Equatorial Guinea</option>\n";
                echo "<option value=\"Eritrea\">Eritrea</option>\n";
                echo "<option value=\"Estonia\">Estonia</option>\n";
                echo "<option value=\"Ethiopia\">Ethiopia</option>\n";
                echo "<option value=\"Falkland Islands (Malvinas)\">Falkland Islands (Malvinas)</option>\n";
                echo "<option value=\"Faroe Islands\">Faroe Islands</option>\n";
                echo "<option value=\"Fiji\">Fiji</option>\n";
                echo "<option value=\"Finland\">Finland</option>\n";
                echo "<option value=\"France\">France</option>\n";
                echo "<option value=\"French Guiana\">French Guiana</option>\n";
                echo "<option value=\"French Polynesia\">French Polynesia</option>\n";
                echo "<option value=\"French Southern Territories\">French Southern Territories</option>\n";
                echo "<option value=\"Gabon\">Gabon</option>\n";
                echo "<option value=\"Gambia\">Gambia</option>\n";
                echo "<option value=\"Georgia\">Georgia</option>\n";
                echo "<option value=\"Germany\">Germany</option>\n";
                echo "<option value=\"Ghana\">Ghana</option>\n";
                echo "<option value=\"Gibraltar\">Gibraltar</option>\n";
                echo "<option value=\"Greece\">Greece</option>\n";
                echo "<option value=\"Greenland\">Greenland</option>\n";
                echo "<option value=\"Grenada\">Grenada</option>\n";
                echo "<option value=\"Guadeloupe\">Guadeloupe</option>\n";
                echo "<option value=\"Guam\">Guam</option>\n";
                echo "<option value=\"Guatemala\">Guatemala</option>\n";
                echo "<option value=\"Guernsey\">Guernsey</option>\n";
                echo "<option value=\"Guinea\">Guinea</option>\n";
                echo "<option value=\"Guinea-Bissau\">Guinea-Bissau</option>\n";
                echo "<option value=\"Guyana\">Guyana</option>\n";
                echo "<option value=\"Haiti\">Haiti</option>\n";
                echo "<option value=\"Heard Island and McDonald Islands\">Heard Island and McDonald Islands</option>\n";
                echo "<option value=\"Holy See (Vatican City State)\">Holy See (Vatican City State)</option>\n";
                echo "<option value=\"Honduras\">Honduras</option>\n";
                echo "<option value=\"Hong Kong\">Hong Kong</option>\n";
                echo "<option value=\"Hungary\">Hungary</option>\n";
                echo "<option value=\"Iceland\">Iceland</option>\n";
                echo "<option value=\"India\">India</option>\n";
                echo "<option value=\"Indonesia\">Indonesia</option>\n";
                echo "<option value=\"Iran, Islamic Republic of\">Iran, Islamic Republic of</option>\n";
                echo "<option value=\"Iraq\">Iraq</option>\n";
                echo "<option value=\"Ireland\">Ireland</option>\n";
                echo "<option value=\"Isle of Man\">Isle of Man</option>\n";
                echo "<option value=\"Israel\">Israel</option>\n";
                echo "<option value=\"Italy\">Italy</option>\n";
                echo "<option value=\"Jamaica\">Jamaica</option>\n";
                echo "<option value=\"Japan\">Japan</option>\n";
                echo "<option value=\"Jersey\">Jersey</option>\n";
                echo "<option value=\"Jordan\">Jordan</option>\n";
                echo "<option value=\"Kazakhstan\">Kazakhstan</option>\n";
                echo "<option value=\"Kenya\">Kenya</option>\n";
                echo "<option value=\"Kiribati\">Kiribati</option>\n";
                echo "<option value=\"Korea, Democratic People's Republic of\">Korea, Democratic People's Republic of</option>\n";
                echo "<option value=\"Korea, Republic of\">Korea, Republic of</option>\n";
                echo "<option value=\"Kuwait\">Kuwait</option>\n";
                echo "<option value=\"Kyrgyzstan\">Kyrgyzstan</option>\n";
                echo "<option value=\"Lao People's Democratic Republic\">Lao People's Democratic Republic</option>\n";
                echo "<option value=\"Latvia\">Latvia</option>\n";
                echo "<option value=\"Lebanon\">Lebanon</option>\n";
                echo "<option value=\"Lesotho\">Lesotho</option>\n";
                echo "<option value=\"Liberia\">Liberia</option>\n";
                echo "<option value=\"Libya\">Libya</option>\n";
                echo "<option value=\"Liechtenstein\">Liechtenstein</option>\n";
                echo "<option value=\"Lithuania\">Lithuania</option>\n";
                echo "<option value=\"Luxembourg\">Luxembourg</option>\n";
                echo "<option value=\"Macao\">Macao</option>\n";
                echo "<option value=\"Macedonia, the former Yugoslav Republic of\">Macedonia, the former Yugoslav Republic of</option>\n";
                echo "<option value=\"Madagascar\">Madagascar</option>\n";
                echo "<option value=\"Malawi\">Malawi</option>\n";
                echo "<option value=\"Malaysia\">Malaysia</option>\n";
                echo "<option value=\"Maldives\">Maldives</option>\n";
                echo "<option value=\"Mali\">Mali</option>\n";
                echo "<option value=\"Malta\">Malta</option>\n";
                echo "<option value=\"Marshall Islands\">Marshall Islands</option>\n";
                echo "<option value=\"Martinique\">Martinique</option>\n";
                echo "<option value=\"Mauritania\">Mauritania</option>\n";
                echo "<option value=\"Mauritius\">Mauritius</option>\n";
                echo "<option value=\"Mayotte\">Mayotte</option>\n";
                echo "<option value=\"Mexico\">Mexico</option>\n";
                echo "<option value=\"Micronesia, Federated States of\">Micronesia, Federated States of</option>\n";
                echo "<option value=\"Moldova, Republic of\">Moldova, Republic of</option>\n";
                echo "<option value=\"Monaco\">Monaco</option>\n";
                echo "<option value=\"Mongolia\">Mongolia</option>\n";
                echo "<option value=\"Montenegro\">Montenegro</option>\n";
                echo "<option value=\"Montserrat\">Montserrat</option>\n";
                echo "<option value=\"Morocco\">Morocco</option>\n";
                echo "<option value=\"Mozambique\">Mozambique</option>\n";
                echo "<option value=\"Myanmar\">Myanmar</option>\n";
                echo "<option value=\"Namibia\">Namibia</option>\n";
                echo "<option value=\"Nauru\">Nauru</option>\n";
                echo "<option value=\"Nepal\">Nepal</option>\n";
                echo "<option value=\"Netherlands\">Netherlands</option>\n";
                echo "<option value=\"New Caledonia\">New Caledonia</option>\n";
                echo "<option value=\"New Zealand\">New Zealand</option>\n";
                echo "<option value=\"Nicaragua\">Nicaragua</option>\n";
                echo "<option value=\"Niger\">Niger</option>\n";
                echo "<option value=\"Nigeria\">Nigeria</option>\n";
                echo "<option value=\"Niue\">Niue</option>\n";
                echo "<option value=\"Norfolk Island\">Norfolk Island</option>\n";
                echo "<option value=\"Northern Mariana Islands\">Northern Mariana Islands</option>\n";
                echo "<option value=\"Norway\">Norway</option>\n";
                echo "<option value=\"Oman\">Oman</option>\n";
                echo "<option value=\"Pakistan\">Pakistan</option>\n";
                echo "<option value=\"Palau\">Palau</option>\n";
                echo "<option value=\"Palestinian Territory, Occupied\">Palestinian Territory, Occupied</option>\n";
                echo "<option value=\"Panama\">Panama</option>\n";
                echo "<option value=\"Papua New Guinea\">Papua New Guinea</option>\n";
                echo "<option value=\"Paraguay\">Paraguay</option>\n";
                echo "<option value=\"Peru\">Peru</option>\n";
                echo "<option value=\"Philippines\">Philippines</option>\n";
                echo "<option value=\"Pitcairn\">Pitcairn</option>\n";
                echo "<option value=\"Poland\">Poland</option>\n";
                echo "<option value=\"Portugal\">Portugal</option>\n";
                echo "<option value=\"Puerto Rico\">Puerto Rico</option>\n";
                echo "<option value=\"Qatar\">Qatar</option>\n";
                echo "<option value=\"Reunion\">Reunion</option>\n";
                echo "<option value=\"Romania\">Romania</option>\n";
                echo "<option value=\"Russian Federation\">Russian Federation</option>\n";
                echo "<option value=\"Rwanda\">Rwanda</option>\n";
                echo "<option value=\"Saint Barthélemy\">Saint Barthelemy</option>\n";
                echo "<option value=\"Saint Helena, Ascension and Tristan da Cunha\">Saint Helena, Ascension and Tristan da Cunha</option>\n";
                echo "<option value=\"Saint Kitts and Nevis\">Saint Kitts and Nevis</option>\n";
                echo "<option value=\"Saint Lucia\">Saint Lucia</option>\n";
                echo "<option value=\"Saint Martin (French part)\">Saint Martin (French part)</option>\n";
                echo "<option value=\"Saint Pierre and Miquelon\">Saint Pierre and Miquelon</option>\n";
                echo "<option value=\"Saint Vincent and the Grenadines\">Saint Vincent and the Grenadines</option>\n";
                echo "<option value=\"Samoa\">Samoa</option>\n";
                echo "<option value=\"San Marino\">San Marino</option>\n";
                echo "<option value=\"Sao Tome and Principe\">Sao Tome and Principe</option>\n";
                echo "<option value=\"Saudi Arabia\">Saudi Arabia</option>\n";
                echo "<option value=\"Senegal\">Senegal</option>\n";
                echo "<option value=\"Serbia\">Serbia</option>\n";
                echo "<option value=\"Seychelles\">Seychelles</option>\n";
                echo "<option value=\"Sierra Leone\">Sierra Leone</option>\n";
                echo "<option value=\"Singapore\">Singapore</option>\n";
                echo "<option value=\"Sint Maarten (Dutch part)\">Sint Maarten (Dutch part)</option>\n";
                echo "<option value=\"Slovakia\">Slovakia</option>\n";
                echo "<option value=\"Slovenia\">Slovenia</option>\n";
                echo "<option value=\"Solomon Islands\">Solomon Islands</option>\n";
                echo "<option value=\"Somalia\">Somalia</option>\n";
                echo "<option value=\"South Africa\">South Africa</option>\n";
                echo "<option value=\"South Georgia and the South Sandwich Islands\">South Georgia and the South Sandwich Islands</option>\n";
                echo "<option value=\"South Sudan\">South Sudan</option>\n";
                echo "<option value=\"Spain\">Spain</option>\n";
                echo "<option value=\"Sri Lanka\">Sri Lanka</option>\n";
                echo "<option value=\"Sudan\">Sudan</option>\n";
                echo "<option value=\"Suriname\">Suriname</option>\n";
                echo "<option value=\"Svalbard and Jan Mayen\">Svalbard and Jan Mayen</option>\n";
                echo "<option value=\"Swaziland\">Swaziland</option>\n";
                echo "<option value=\"Sweden\">Sweden</option>\n";
                echo "<option value=\"Switzerland\">Switzerland</option>\n";
                echo "<option value=\"Syrian Arab Republic\">Syrian Arab Republic</option>\n";
                echo "<option value=\"TW\">Taiwan, Province of China</option>\n";
                echo "<option value=\"Taiwan, Province of China\">Tajikistan</option>\n";
                echo "<option value=\"Tanzania, United Republic of\">Tanzania, United Republic of</option>\n";
                echo "<option value=\"Thailand\">Thailand</option>\n";
                echo "<option value=\"Timor-Leste\">Timor-Leste</option>\n";
                echo "<option value=\"Togo\">Togo</option>\n";
                echo "<option value=\"Tokelau\">Tokelau</option>\n";
                echo "<option value=\"Tonga\">Tonga</option>\n";
                echo "<option value=\"Trinidad and Tobago\">Trinidad and Tobago</option>\n";
                echo "<option value=\"Tunisia\">Tunisia</option>\n";
                echo "<option value=\"Turkey\">Turkey</option>\n";
                echo "<option value=\"Turkmenistan\">Turkmenistan</option>\n";
                echo "<option value=\"Turks and Caicos Islands\">Turks and Caicos Islands</option>\n";
                echo "<option value=\"Tuvalu\">Tuvalu</option>\n";
                echo "<option value=\"Uganda\">Uganda</option>\n";
                echo "<option value=\"Ukraine\">Ukraine</option>\n";
                echo "<option value=\"United Arab Emirates\">United Arab Emirates</option>\n";
                echo "<option value=\"United Kingdom\">United Kingdom</option>\n";
                echo "<option value=\"United States Minor Outlying Islands\">United States Minor Outlying Islands</option>\n";
                echo " <option value=\"United States\">United States</option>\n";
                echo " <option value=\"Uruguay\">Uruguay</option>\n";
                echo " <option value=\"Uzbekistan\">Uzbekistan</option>\n";
                echo " <option value=\"Vanuatu\">Vanuatu</option>\n";
                echo " <option value=\"Venezuela, Bolivarian Republic of\">Venezuela, Bolivarian Republic of</option>\n";
                echo " <option value=\"Viet Nam\">Viet Nam</option>\n";
                echo " <option value=\"Virgin Islands, British\">Virgin Islands, British</option>\n";
                echo " <option value=\"Virgin Islands, U.S.\">Virgin Islands, U.S.</option>\n";
                echo " <option value=\"Wallis and Futuna\">Wallis and Futuna</option>\n";
                echo " <option value=\"Western Sahara\">Western Sahara</option>\n";
                echo " <option value=\"Yemen\">Yemen</option>\n";
                echo " <option value=\"Zambia\">Zambia</option>\n";
                echo " <option value=\"Zimbabwe\">Zimbabwe</option>\n";

                echo " </select>\n";
            }
            echo " </div>\n";
            echo " <div class=\"col-md-6\">\n";
            echo " <label class=\"form-label\">Zip / Postal Code <span class=\"form-asterick\">&#42;</span></label>\n";
            echo " <input class=\"form-control\" type=\"text\" name=\"postalcode\" placeholder=\"Zip /Postal Code\" value=\"$postalcode\">\n";
            echo " <br/>\n";
        }
        else {
            echo 'error';
        }
    }

    public function edit_company_modal(Request $request)
    {
        $imgUrl=url('/').'/public/images/default-image.png';

        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $email = $user[0]['email'];
            $users = Users::where('email', '=', $email)->first();

            $company_name = $users->company_name;
            $company_description = $users->company_description;
            $company_image = $users->company_image;
            $fb = $users->fb;
            $twitter = $users->twitter;
            $google_plus = $users->googleplus;
            $company_website = $users->company_website;

            if(!empty($company_image)){$imgUrl=$company_image;}

            $html= " <div class=\"col-md-4\" style=\"margin-top: 5px\">\n".
                "      <input type=\"file\" name=\"file\" id=\"image\" class=\"company\" title=\" \" accept=\"image/gif, image/jpg, image/jpeg, image/png \" >\n".
                "          <input class=\"form-control\" type=\"hidden\" name=\"email\" value=\"$email\" placeholder=\"email\" id=\"email\">\n".
                "     </div>\n".
                "              <script type=\"text/javascript\">\n".
                "                   $('[class^=company][type=\"file\"]').ezdz({\n".
                "                       text: \"<img src='$imgUrl'/>\"\n".
                "                    });\n".
                "              </script>\n".
                "            <div class=\"col-md-8\">\n".
                "                  <label class=\"form-label\">Company Name</label>\n".
                "                  <input class=\"form-control\" type=\"text\" id=\"companyname\" name=\"companyname\" placeholder=\"Company Name\" value=\"$company_name\">\n".
                "                  <label id=\"clerror\" style=\"color:#F44336;display:none\">Company Name is required</label>\n".
                "                  <br>\n".
                "                  <label class=\"form-label\" >Social Links</label>\n".
                "                  <input class=\"form-control\" type=\"text\" id=\"companywebsite\" name=\"address\" placeholder=\"Website\" value=\"$company_website\" >\n".
                "                  <label id=\"wlerror\" style=\"color:#F44336;display:none\">Url is invalid</label>\n".
                "                  <br>\n".
                "                  <input class=\"form-control\" type=\"text\" id=\"fb\" name=\"fb\" placeholder=\"Facebook \" style=\"margin-top: -10px\" value=\"$fb\">\n".
                "                  <label id=\"fblerror\" style=\"color:#F44336;display:none\">Facebook Link is invalid</label>\n".
                "                  <br>\n".
                "                  <input class=\"form-control\" type=\"text\" id=\"twitter\" name=\"twitter\" placeholder=\"Twitter \" style=\"margin-top: -10px\" value=\"$twitter\">\n".
                "                  <label id=\"tlerror\" style=\"color:#F44336;display:none\">Twitter Link is invalid</label>\n".
                "                  <br>\n".
                "                  <input class=\"form-control\" type=\"text\" name=\"gplus\" placeholder=\"Google+ \" style=\"margin-top: -10px\" value=\"$google_plus\">\n".
                "                  <br>\n".
                "           </div>\n";

            $values['first'] = $html;
            $values['second'] = $company_description;
            print json_encode( $values );
        }
    }

    public function edit_company(Request $request)
    {
        $company_name=$request->input('companyname');
        $email=$request->input('email');
        $address=$request->input('address');
        $fb=$request->input('fb');
        $twitter=$request->input('twitter');
        $g_plus=$request->input('gplus');
        $description=$request->input('description');

        if (User::where('email', '=', $email)->exists()) {
            $user = User::where('email', '=', $email)->first();

            if(empty($_FILES["file"]["name"]))
            {
                $user->company_name = $company_name;
                $user->company_website = $address;
                $user->fb = $fb;
                $user->twitter = $twitter;
                $user->googleplus = $g_plus;
                $user->company_description = $description;
                $user->save();

                echo 'success';
            }
            else {
                if($_FILES['file']['size']>1048576) {
                    echo 'Image size no larger than 10MB';
                    die();
                }

                $extension = $request->file('file')->extension();
                $file= 'company_images/'.uniqid().'.'.$extension;
                Storage::disk('s3')->put($file, file_get_contents($request->file('file')));
                $image_path=Storage::disk('s3')->url($file);

                $user->company_name = $company_name;
                $user->company_website = $address;
                $user->company_image = $image_path;
                $user->fb = $fb;
                $user->twitter = $twitter;
                $user->googleplus = $g_plus;
                $user->company_description = $description;
                $user->save();
                echo 'success';
                die();
            }
        }
        else{
            echo 'error';
        }
    }

    public function edit_profile(Request $request)
    {
        $email=$request->input('oldemail');
        $new_email=$request->input('email');
        $company_name=$request->input('companyName');
        $u_name=$request->input('username');
        $first_name=$request->input('firstName');
        $last_name=$request->input('lastName');
        $categories=$request->input('category');
        $cell=$request->input('cell');
        $work=$request->input('work');
        $address=$request->input('address');
        $region=$request->input('region');
        $city=$request->input('city');
        $state_province=$request->input('state_province');
        $country=$request->input('country');
        $postal_code=$request->input('postalcode');

        if($email==$new_email){
            if (User::where('email', '=', $email)->exists()) {
                $user = User::where('email', '=', $email)->first();
                $user->first_name = $first_name;
                $user->last_name = $last_name;
                $user->email = $email;
                $user->username = $u_name;
                $user->company_name = $company_name;
                $user->cell = $cell;
                $user->work = $work;
                $user->address = $address;
                $user->region = $region;
                $user->city = $city;
                $user->state_province = $state_province;
                $user->zip_postal = $postal_code;
                $user->country = $country;
                $user->save();

                if(isset($categories)){
                    UserCategories::where('user_id',$user->uid)->delete();
                    foreach ($categories as $category) {
                        $member_category[]=array('category_id'=>$category,'user_id'=>$user->uid);
                    }
                    UserCategories::insert($member_category);
                }
                $data = array('username' => $u_name, 'email' => $email,'user_id'=>$user->uid);
                Session::push('user_session', $data);
                echo 'success';
            }
        }else{
            if (User::where('email', '=', $new_email)->exists()) {
                echo 'Email already exists.';
                die();
            }

            Session::flush();

            $user = User::where('email', '=', $email)->first();

            $user->first_name = $first_name;
            $user->last_name = $last_name;
            $user->email = $new_email;
            $user->username = $u_name;
            $user->company_name = $company_name;
            $user->cell = $cell;
            $user->work = $work;
            $user->address = $address;
            $user->region = $region;
            $user->city = $city;
            $user->state_province = $state_province;
            $user->zip_postal = $postal_code;
            $user->country = $country;
            $user->save();
            $data=array('username'=>$u_name,'email'=>$new_email,'user_id'=>$user->uid);
            Session::push('user_session', $data);
            echo 'success';
        }
    }

    public function update_password(Request $request)
    {
        $o_password=$request->input('opassword');
        $n_password=$request->input('npassword');
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $email=$user[0]['email'];
        }

        if (User::where('email', '=', $email)->where('password','=',$o_password)->exists()) {
            if($o_password==$n_password) {
                echo 'You have entered old and new password are same.';
                die();
            }
            $user = User::where('email', '=', $email)->first();
            $user->password = $n_password;
            $user->save();

            echo 'Password updated successfully.';
            die();
        }
        else {
            if($o_password==$n_password) {
                echo 'You have entered old and new password are same.';
                die();
            }
            else {
                echo 'You have entered incorrect old password.';
                die();
            }
        }
    }

    public function update_password2(Request $request)
    {
        $n_password=$request->input('npassword');
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $email=$user[0]['email'];
        }

        if (User::where('email', '=', $email)->exists()) {
            $user = User::where('email', '=', $email)->first();
            $user->password = $n_password;
            $user->save();

            $user_detail=UserDetail::where('user_id',$user->uid)->first();
            $user_detail->first_login=0;
            $user_detail->save();

            echo 'Password updated successfully.';
            die();
        }
    }

    public function forgot_password(Request $request)
    {
        $owner_email=$request->input('email');
        if (User::where('email', '=', $owner_email)->exists()) {
            Forgotpassword::where('email', '=', $owner_email)->delete();
            Mail::send([],[], function($message) use ($owner_email) {
                $verifyCode = mt_rand(100000, 999999);
                $body=$verifyCode. ' '.'is your password verification code';
                $fPass = new Forgotpassword;
                $fPass->email =$owner_email;
                $fPass->verifycode =$verifyCode ;
                $fPass->site_id =1 ;
                $fPass->save();
                $message->to($owner_email)->subject('Resource Center')->setBody($body, 'text/html');
            });
            echo $owner_email;
        }
        else{
            echo  'The email you’ve entered doesn’t match any account.';
        }
    }

    public function user_verify_code(Request $request)
    {
        $email=$request->input('email');
        $code= $request->input('code');
        if(Forgotpassword::where('email',$email)->where('verifycode','=',$code)->where('site_id','1')->exists()) {
            echo $email;
            die;
        }
        else {
            echo 'You’ve entered is invalid code.';
            die();
        }
    }

    public function user_set_password(Request $request)
    {
        $email=$request->input('email');
        $n_pass=$request->input('npassword');
        if(User::where('email','=',$email)->exists()) {
            $user = User::where('email', '=', $email)->first();
            $user->password = $n_pass;
            $user->save();
            echo $email;
        }
        else {
            echo 'error';
        }

    }

    public function download_resource(Request $request)
    {
        $id=$request->input('id');
        if(session::has('user_session')){
            $user=session::get('user_session');
            $user_id=$user[0]['user_id'];
            $email=$user[0]['email'];
            $user_=Users::where('uid',$user_id)->first();
            if($resource=Resource::where('resources_id',$id)->where('status','enabled')->first()){
                $resource_download = new ResourceDownloads();
                $resource_download->resource_id = $id;
                $resource_download->user_id = $user_id;
                $resource_download->owner_id = $resource->user_id;
                $resource_download->date = date('Y-m-d');
                $resource_download->company_name = $user_->company_name;
                $resource_download->email = $user_->email;
                $resource_download->region = $user_->region;
                $resource_download->timestamp = time();
                $resource_download->site_id = 1;
                $resource_download->save();
                $this->mail_function($resource,$email);
            }
        }
        else{
            echo 'error';
        }
    }

    public function edit_schedule(Request $request)
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $user_id = $user[0]['user_id'];
            $m_o_t=$request->input('m_o_t');
            $m_c_t=$request->input('m_c_t');
            $tu_o_t=$request->input('tu_o_t');
            $tu_c_t=$request->input('tu_c_t');
            $w_o_t=$request->input('w_o_t');
            $w_c_t=$request->input('w_c_t');
            $t_o_t=$request->input('t_o_t');
            $t_c_t=$request->input('t_c_t');
            $f_o_t=$request->input('f_o_t');
            $f_c_t=$request->input('f_c_t');
            $s_o_t=$request->input('s_o_t');
            $s_c_t=$request->input('s_c_t');
            $su_o_t=$request->input('su_o_t');
            $su_c_t=$request->input('su_c_t');
            Schedule::where('user_id',$user_id)->delete();
            if(!empty($m_o_t) or !empty($m_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Monday';
                $schedule->open_time=$m_o_t;
                $schedule->close_time=$m_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            if(!empty($tu_o_t) or !empty($tu_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Tuesday';
                $schedule->open_time=$tu_o_t;
                $schedule->close_time=$tu_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            if(!empty($w_o_t) or !empty($w_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Wednesday';
                $schedule->open_time=$w_o_t;
                $schedule->close_time=$w_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            if(!empty($t_o_t) or !empty($t_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Thursday';
                $schedule->open_time=$t_o_t;
                $schedule->close_time=$t_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            if(!empty($f_o_t) or !empty($f_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Friday';
                $schedule->open_time=$f_o_t;
                $schedule->close_time=$f_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            if(!empty($s_o_t) or !empty($s_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Saturday';
                $schedule->open_time=$s_o_t;
                $schedule->close_time=$s_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            if(!empty($su_o_t) or !empty($su_c_t)){
                $schedule=new Schedule();
                $schedule->day_of_week='Sunday';
                $schedule->open_time=$su_o_t;
                $schedule->close_time=$su_c_t;
                $schedule->user_id=$user_id;
                $schedule->save();
            }
            echo 'Edit Successfully';
        }else{
            echo 'Invalid Credentials!';
        }
    }

    public function stats_download($id)
    {
        if($resource=Resource::where('resources_id',$id)->where('status','enabled')->first()) {
            $topic=$resource->resource_topic.' '.date('Y-m-d').'.xls';
            $data=$data1=$data2=array();

            $downloads=ResourceDownloads::where('resource_id',$id)->orderBy('date')->get();
            foreach($downloads as $download){
                $userData=$download->userDetail;
                $data[]=array('ResourceTopic'=>$resource->resource_topic,'CompanyName'=>$resource->company_name,'EmailAddress'=>$userData->email,
                    'FirstName'=>$userData->first_name,'LastName'=>$userData->last_name,'Cell'=>$userData->cell,
                    'Work'=>$userData->work,'Address'=>$userData->address,'City'=>$userData->city,'Country'=>$userData->country,
                    'State/Province'=>$userData->state_province,'Postal/ZipCode'=>$userData->zip_postal,
                    'Region'=>$userData->region,'Date'=>$download->date);
            }

            $views=ResourceViews::where('resource_id',$resource->resources_id)->orderBy('date')->get();
            foreach($views as $view){
                $userData=$view->userDetail;
                $data1[]=array('ResourceTopic'=>$resource->resource_topic,'CompanyName'=>$resource->company_name,'EmailAddress'=>$userData->email,
                    'FirstName'=>$userData->first_name,'LastName'=>$userData->last_name,'Cell'=>$userData->cell,
                    'Work'=>$userData->work,'Address'=>$userData->address,'City'=>$userData->city,'Country'=>$userData->country,
                    'State/Province'=>$userData->state_province,'Postal/ZipCode'=>$userData->zip_postal,
                    'Region'=>$userData->region,'Date'=>$view->date);
            }

            $anonymousViews=ResourceAnonymousViews::where('resource_id',$resource->resources_id)->orderBy('date')->get();
            foreach($anonymousViews as $anonymousView){
                $data2[]=array('ResourceTopic'=>$resource->resource_topic,'IP Address'=>$anonymousView->ip_address,'City'=>$anonymousView->city,'Country'=>$anonymousView->country,
                    'Date'=>$anonymousView->date,);
            }
            return  Excel::download(new MultipleSheetsExport(collect($data),collect($data1),collect($data2)),$topic);

        }
    }

    public function stats_product_download($id)
    {
        if($resource=Products::where('product_id',$id)->first()) {
            $topic=$resource->name.' '.date('Y-m-d').'.xls';
            $data=$data1=array();


            $views=ProductViews::where('product_id',$resource->product_id)->orderBy('date')->get();
            foreach($views as $view){
                $userData=$view->userDetail;
                $data[]=array('ResourceTopic'=>$resource->name,'CompanyName'=>$resource->company_name,'EmailAddress'=>$userData->email,
                    'FirstName'=>$userData->first_name,'LastName'=>$userData->last_name,'Cell'=>$userData->cell,
                    'Work'=>$userData->work,'Address'=>$userData->address,'City'=>$userData->city,'Country'=>$userData->country,
                    'State/Province'=>$userData->state_province,'Postal/ZipCode'=>$userData->zip_postal,
                    'Region'=>$userData->region,'Date'=>$view->date);
            }

            $anonymousViews=ProductAnonymousViews::where('product_id',$resource->product_id)->orderBy('date')->get();
            foreach($anonymousViews as $anonymousView){
                $data1[]=array('ResourceTopic'=>$resource->name,'IP Address'=>$anonymousView->ip_address,'City'=>$anonymousView->city,'Country'=>$anonymousView->country,
                    'Date'=>$anonymousView->date,);
            }
            return  Excel::download(new MultipleProductSheetsExport(collect($data),collect($data1)),$topic);

        }
    }

    public function stats_download_date($company_id,$start_date,$end_date)
    {
        $company=User::where('uid',$company_id)->first();

        $date=date('Y-m-d');
        $topic=$company->company_name.' '.'Stats Report'.' '.$date.'.xls';
        $data=$data1=$data2=array();

        $downloads=ResourceDownloads::where('owner_id',$company_id)->where('date','>=',$start_date)->where('date','<=',$end_date)->orderBy('resource_id')->get();
        foreach($downloads as $row) {
            $uid=$row->user_id;
            $user_info=User::where('uid',$uid)->get();
            if(!empty($user_info)) {
                foreach($user_info as $row2) {
                    $f_name=$row2->first_name;
                    $l_name=$row2->last_name;
                    $user_email=$row2->email;
                    $company_name=$row2->company_name;
                    $cell=$row2->cell;
                    $work=$row2->work;
                    $address=$row2->address;
                    $region=$row2->region;
                    $city=$row2->city;
                    $country=$row2->country;
                    $state_province=$row2->state_province;
                    $postal_code=$row2->zip_postal;
                }
            }
            $rid=$row->resource_id;
            $resource=Resource::where('resources_id',$rid)->first();
            $data[]=array('ResourceTopic'=>$resource->resource_topic,'CompanyName'=>$company_name,'EmailAddress'=>$user_email,
                'FirstName'=>$f_name,'LastName'=>$l_name,'Cell'=>$cell,
                'Work'=>$work,'Address'=>$address,'City'=>$city,'Country'=>$country,
                'State/Province'=>$state_province,'Postal/ZipCode'=>$postal_code,
                'Region'=>$region,'Date'=>$row->date);
        }

        $views=ResourceViews::where('owner_id',$company_id)->where('date','>=',$start_date)->where('date','<=',$end_date)->orderBy('resource_id')->get();
        foreach($views as $row) {
            $uid=$row->user_id;
            $user_info=User::where('uid',$uid)->get();
            if(!empty($user_info)) {
                foreach($user_info as $row2) {
                    $f_name=$row2->first_name;
                    $l_name=$row2->last_name;
                    $user_email=$row2->email;
                    $company_name=$row2->company_name;
                    $cell=$row2->cell;
                    $work=$row2->work;
                    $address=$row2->address;
                    $region=$row2->region;
                    $city=$row2->city;
                    $country=$row2->country;
                    $state_province=$row2->state_province;
                    $postal_code=$row2->zip_postal;
                }
            }
            $rid=$row->resource_id;
            $resource=Resource::where('resources_id',$rid)->first();
            $data1[]=array('ResourceTopic'=>$resource->resource_topic,'CompanyName'=>$company_name,'EmailAddress'=>$user_email,
                'FirstName'=>$f_name,'LastName'=>$l_name,'Cell'=>$cell,
                'Work'=>$work,'Address'=>$address,'City'=>$city,'Country'=>$country,
                'State/Province'=>$state_province,'Postal/ZipCode'=>$postal_code,
                'Region'=>$region,'Date'=>$row->date);
        }

        $views=ResourceAnonymousViews::where('owner_id',$company_id)->where('date','>=',$start_date)->where('date','<=',$end_date)->orderBy('resource_id')->get();
        foreach($views as $row) {
            $rid=$row->resource_id;
            $resource=Resource::where('resources_id',$rid)->first();
            if(!empty($resource)){
                $data2[]=array('ResourceTopic'=>$resource->resource_topic,'IP Address'=>$row->ip_address,'City'=>$row->city,'Country'=>$row->country,
                'Date'=>$row->date,);
            }
        }

        return  Excel::download(new MultipleSheetsExport(collect($data),collect($data1),collect($data2)),$topic);

    }

    public function account_expire()
    {
        $users = Users::where('user_status', 'approved')->where(function ($query) {
            $query->where('package', 'p2')->orWhere('package', 'p3');
        })->get();
        if (!empty($users)) {
            foreach($users as $user) {
                $e_date = $user->expire_package;
                $current_date = date_create(date('Y-m-d'));
                $expire_date = date_create($user->expire_package);
                $email = $user->email;
                $diff = date_diff($current_date, $expire_date);
                $difference = $diff->format("%R%a");
                $company_name = $user->company_name;
                if ($difference == '+7') {

                    $mail_data=array('company_name'=>$company_name,
                        'message'=>'Your package is expiring on ' . $e_date . '. Please contact your account manager to renew !!');

                    Mail::send('mail.message',["data"=>$mail_data], function ($message) use ($email)
                    {
                        $message->to($email)->subject('Resource Center');
                        $message->bcc('djones@semcopublishing.com', 'Resource Center');

                    });

                    Mail::send('mail.message',["data"=>$mail_data], function ($message) use ($email)
                    {
                        $message->to('resources@semcopublishing.com')->subject('Resource Center');
                        $message->bcc('djones@semcopublishing.com', 'Resource Center');

                    });


                }
            }
        }
    }

    public function weekly_report()
    {
        $users = Users::where('user_status', 'approved')->where(function ($query) {
            $query->where('package', 'p2')->orWhere('package', 'p3');
        })->get();
        if (!empty($users)) {
            foreach($users as $user) {
                $email = $user->email;
                $company_name = $user->company_name;
                $user_company_id = $user->uid;
                $expire_date = $user->expire_package;
                $sale_representative_id = $user->sale_representative_id;
                $current_date=date('Y-m-d');

                $date_last_week = date('Y-m-d', strtotime("-1 week"));
                $t_download = ResourceDownloads::where('owner_id', $user_company_id)->where('date', '>=', $date_last_week)->count();
                $a_views =ResourceAnonymousViews::where('owner_id', $user_company_id)->where('date', '>=', $date_last_week)->count();
                $r_views = ResourceViews::where('owner_id', $user_company_id)->where('date', '>=', $date_last_week)->count();
                $t_views = $a_views + $r_views;
                $resources = Resource::where('user_id', $user_company_id)->where('status', 'enabled')->where('adminstatus', 'Enable')->where('resources_id', '!=', '')->get();
                $company_url = url() . '/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$company_name))) . $user_company_id;
                $download_url = url('/') . '/stats_download_weekly/' . $user_company_id . '/' . time();

                $mail_data=array('company_name'=>$company_name,'download_url'=>$download_url, 'downloads'=>$t_download,
                    'views'=>$t_views,'company_url'=>$company_url,'is_expired'=>$expire_date>$current_date?1:0);

                if (!empty($resources)) {
                    Mail::send('mail.weekly_report',["data"=>$mail_data], function ($message) use ($company_name,$email,$current_date,$expire_date,$sale_representative_id)
                    {
                        $message->to($email)->subject('Resource Center ' . $company_name . ' Statistics');
                        if(!empty($sale_representative_id)){
                            $sale_representative=DB::table('sale_representatives')->where('user_id',$sale_representative_id)->first();
                            $sale_representative_email=$sale_representative->email;
                            $message->to($sale_representative_email)->subject('Resource Center ' . $company_name . ' Statistics');
                        }
                    });
                }

            }
        }
    }

    public function stats_download_weekly($company_id,$date)
    {
        $company=User::where('uid',$company_id)->first();

        $date=date('Y-m-d', $date);
        $one_week_back_from_now = strtotime("-1 week", strtotime($date));
        $date_last_week=date('Y-m-d', $one_week_back_from_now);

        $topic=$company->company_name.' '.'Stats Report'.' '.$date.'.xls';
        $data=$data1=$data2=array();

        $downloads=ResourceDownloads::where('owner_id',$company_id)->where('date','>=',$date_last_week)->orderBy('resource_id')->get();
        foreach($downloads as $row) {
            $uid=$row->user_id;
            $user_info=User::where('uid',$uid)->get();
            if(!empty($user_info)) {
                foreach($user_info as $row2) {
                    $f_name=$row2->first_name;
                    $l_name=$row2->last_name;
                    $user_email=$row2->email;
                    $company_name=$row2->company_name;
                    $cell=$row2->cell;
                    $work=$row2->work;
                    $address=$row2->address;
                    $region=$row2->region;
                    $city=$row2->city;
                    $country=$row2->country;
                    $state_province=$row2->state_province;
                    $postal_code=$row2->zip_postal;
                }
            }
            $rid=$row->resource_id;
            $resource=Resource::where('resources_id',$rid)->first();
            $data[]=array('ResourceTopic'=>$resource->resource_topic,'CompanyName'=>$company_name,'EmailAddress'=>$user_email,
                'FirstName'=>$f_name,'LastName'=>$l_name,'Cell'=>$cell,
                'Work'=>$work,'Address'=>$address,'City'=>$city,'Country'=>$country,
                'State/Province'=>$state_province,'Postal/ZipCode'=>$postal_code,
                'Region'=>$region,'Date'=>$row->date);
        }

        $views=ResourceViews::where('owner_id',$company_id)->where('date','>=',$date_last_week)->orderBy('resource_id')->get();
        foreach($views as $row) {
            $uid=$row->user_id;
            $user_info=User::where('uid',$uid)->get();
            if(!empty($user_info)) {
                foreach($user_info as $row2) {
                    $f_name=$row2->first_name;
                    $l_name=$row2->last_name;
                    $user_email=$row2->email;
                    $company_name=$row2->company_name;
                    $cell=$row2->cell;
                    $work=$row2->work;
                    $address=$row2->address;
                    $region=$row2->region;
                    $city=$row2->city;
                    $country=$row2->country;
                    $state_province=$row2->state_province;
                    $postal_code=$row2->zip_postal;
                }
            }
            $rid=$row->resource_id;
            $resource=Resource::where('resources_id',$rid)->first();
            $data1[]=array('ResourceTopic'=>$resource->resource_topic,'CompanyName'=>$company_name,'EmailAddress'=>$user_email,
                'FirstName'=>$f_name,'LastName'=>$l_name,'Cell'=>$cell,
                'Work'=>$work,'Address'=>$address,'City'=>$city,'Country'=>$country,
                'State/Province'=>$state_province,'Postal/ZipCode'=>$postal_code,
                'Region'=>$region,'Date'=>$row->date);
        }

        $views=ResourceAnonymousViews::where('owner_id',$company_id)->where('date','>=',$date_last_week)->orderBy('resource_id')->get();
        foreach($views as $row) {
            $resource=Resource::where('resources_id',$rid)->first();
            $data2[]=array('ResourceTopic'=>$resource->resource_topic,'IP Address'=>$row->ip_address,'City'=>$row->city,'Country'=>$row->country,
                'Date'=>$row->date,);
        }

        return  Excel::download(new MultipleSheetsExport(collect($data),collect($data1),collect($data2)),$topic);

    }

    public function mail_function($resource,$email)
    {
        $company_name=Users::where('uid',$resource->user_id)->pluck('company_name')->first();
        $type_of_resource=$resource->type_of_resource;
        $description=$resource->description;
        $resource_path=$resource->resource_path;
        $image_path=$resource->image_path;
        $resource_topic=$resource->resource_topic;
        $resource_url=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id;
        $download_link=url('/').'/resource_download/'.$resource->resources_id;

        $related = Resource::where('adminstatus','Enable')->where('status','enabled')
        ->where('user_id',$resource->user_id)->inRandomOrder()->first();



        $related_resource_topic=$related->resource_topic;
        $related_resource_url=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$related->resource_topic))).'/'.$related->resources_id;
        $related_description=$related->description;
        $related_image_path=$related->image_path;

        $mail_data=array('resource_url'=>$resource_url, 'related_resource_url' => $related_resource_url,
            'resource_topic'=>$resource_topic, 'related_resource_topic'=>$related_resource_topic,
            'description'=>$description,  'related_description'=>$related_description,
            'company_name'=>$company_name,'image_path'=>$image_path,'related_image_path'=>$related_image_path,
            'resource_path'=>$resource_path,'type_of_resource'=>$type_of_resource,'download_link'=>$download_link);



        // Mail::send('mail.resource',["data"=>$mail_data], function ($message) use ($email,$resource_topic)
        // {
        //     $message->to($email)->subject($resource_topic);

        // });

        Mail::send('mail.download',["data"=>$mail_data], function ($message) use ($email,$resource_topic)
        {
            $message->to($email)->subject($resource_topic);

        });
    }

    public function resource_download($id)
    {
        if($resource=Resource::where('resources_id',$id)->where('status','enabled')->first()){
            return redirect()->away($resource->resource_path);
        }
        else{
            return redirect()->away(url('/'));
        }
    }

    public function request_demo($id)
    {
        $member=Users::where('uid',$id)->first();
        $url=$member->company_image;
        if($url==url('/').'/'){
            $url=url("/")."/public/images/default-company-logo.jpg";
        }
        $name=$member->company_name;
        $address=$member->address;
        $zip_code=$member->zip_postal;
        $city=$member->city;
        $state=$member->state_province;
        $contact_email = $member->email;
        $complete_address=$address." ".$city." ".$state." , ".$zip_code;

        $html=  "<img src=\"$url\" class=\"img-responsive  m-x-auto request-logo\" onerror=\"this.src=$url\">\n".
                "<br/><h6 class=\"text-center font-weight-bold\">$name</h6>\n".
                "<p class=\"text-center request-company\"><i class=\"fa fa-map-marker colorf59c28\" aria-hidden=\"true\"></i> <span class=\"font-weight-bold pl10\">$complete_address</span></p>\n".
                "<p class=\"text-center request-phone\"><i class=\"fa fa-phone colorf59c28\" aria-hidden=\"true\"></i><span class=\"bfh-phone font-weight-bold pl10\" data-format=\"(ddd) ddd-dddd\" data-number=\"123456789\"></span></p>\n";

        $values['first'] = $html;
        $values['second'] = $contact_email;
        print json_encode( $values );
    }

    public function request_quote(Request $request)
    {
        $description = $request->input('description');
        $email = $request->input('email');
        $file=$request->file('file');
        $values=$request->input('value','');
        $data='';
        foreach($values as $value){
            $data.=$value.', ';
        }

        $mail_data=array('message'=>$data,'description'=>$description);

        Mail::send('mail.request_quote',["data"=>$mail_data], function ($message) use ($file,$email)
        {
            $message->to($email)
                ->subject('Resource Center - Request A Quote');

            if($file) {
                $message->attach($file->getRealPath(), [
                    'as' => $file->getClientOriginalName(),
                    'mime' => $file->getMimeType()
                ]);
            }

            echo 'Send Successfully';

        });

    }

    public function edit_profile_view(Request $request)
    {
        if (Session::has('user_session')) {
            $user = Session::get('user_session');
            $user_id=$user[0]['user_id'];
            $categories=ProductCategory::with('sub_category')->where('id_self_parent',NULL)->orderBy('name')->get();
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
            $regions=Region::get();
            $users=Users::where('uid','=',$user_id)->first();
            return View('edit_profile',compact('categories','member_categories','users','regions'));

        }else{
            return redirect('/');
        }
    }

    public function logout()
    {
        Session::forget('user_session');

        echo "<button class=\"btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt\" type=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\" style=\"\"> Login / Register</button>\n";
        echo " <div class=\"dropdown-menu dropDown-menu-m\" >\n";
        echo "  <a href=\"\"  class=\" dropdown-item\" data-toggle=\"modal\" data-target=\"#loginModal\">Login</a>\n";
        echo "  <a class=\"dropdown-item waves-effect waves-light\" href=\"\" data-toggle=\"modal\" data-target=\"#registerModal\" >Register</a>\n";
        echo " </div>\n";
    }
}
