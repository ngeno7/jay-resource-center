<?php

namespace App\Http\Controllers;

use App\Exports\MultipleSheetsExport;
use App\Exports\SponsorExport;
use App\ResourceAnonymousViews;
use App\ResourceDownloads;
use App\ResourceViews;
use App\User;
use App\UserCategories;
use App\Users;
use Excel;
use Illuminate\Http\Request;
use Illuminate\Support\Arr;
define('ALPHABETS', range('A', 'Z'));
class ExportController extends Controller
{
    public function approved_sponsors(){
    	$users =  User::whereIn('package',['p2','p3'])->where('user_status','approved')->latest('id')->get(['company_name','email','first_name','last_name','jobfunction','cell','work','address','city','state_province','zip_postal','region','company_website','fb','twitter','googleplus'])->makeHidden(['is_expired']);
    	$heading = [
            'Company Name',
            'Email Address',
            'First Name',
            'Last Name',
            'Job Function',
            'Cell',
            'Work',
            'Address',
            'City',
            'Country',
            'State/Province',
            'Postal/ZipCode',
            'Region',
            'Website',
            'Facebook',
            'Twitter',
            'Google +',
        ];
        $colRange = ['A','Q'];
    	$title = 'Approved Sponsors';
		return Excel::download(new SponsorExport($users,$heading,$title,$colRange),'Approved-Sponsors.xlsx');
    }

    public function un_approved_sponsors(){
    	$users =  User::whereIn('package',['p2','p3'])->where('user_status','not approved')->latest('id')->get(['company_name','email','first_name','last_name','jobfunction','cell','work','address','city','state_province','zip_postal','region','company_website','fb','twitter','googleplus'])->makeHidden(['is_expired']);
    	$heading = [
            'Company Name',
            'Email Address',
            'First Name',
            'Last Name',
            'Job Function',
            'Cell',
            'Work',
            'Address',
            'City',
            'Country',
            'State/Province',
            'Postal/ZipCode',
            'Region',
            'Website',
            'Facebook',
            'Twitter',
            'Google +',
        ];
        $colRange = ['A','Q'];
    	$title = 'Un Approved Sponsors';
	return Excel::download(new SponsorExport($users,$heading,$title,$colRange),'Un-Approved-Sponsors.xlsx');
    }

    public function expired_sponsors(){
    	$users =  User::whereIn('package',['p2','p3'])->where('user_status','not approved')->where(function($q){
    		$q->whereNull('start_package')->WhereNull('expire_package');
    	})->orWhere('expire_package','<=',now())->latest('id')->get(['company_name','email','first_name','last_name','jobfunction','cell','work','address','city','country','state_province','zip_postal','region','company_website','fb','twitter','googleplus'])->makeHidden(['is_expired','full_name']);
    	$heading = [
            'Company Name',
            'Email Address',
            'First Name',
            'Last Name',
            'Job Function',
            'Cell',
            'Work',
            'Address',
            'City',
            'Country',
            'State/Province',
            'Postal/ZipCode',
            'Region',
            'Website',
            'Facebook',
            'Twitter',
            'Google +',
        ];
        $colRange = ['A','Q'];
    	$title = 'Expired Sponsors';
	return Excel::download(new SponsorExport($users,$heading,$title,$colRange),'Expired-Sponsors.xlsx');
    }

    public function subscribers(){
    	$users =  User::where('package','p1')->latest('id')->get(['company_name','email','first_name','last_name','jobfunction','cell','work','address','city','country','state_province','zip_postal','region'])->makeHidden(['is_expired','full_name']);
    	$heading = [
            'Company Name',
            'Email Address',
            'First Name',
            'Last Name',
            'Job Function',
            'Cell',
            'Work',
            'Address',
            'City',
            'Country',
            'State/Province',
            'Postal/ZipCode',
            'Region',
        ];
        $colRange = ['A','M'];
    	$title = 'Subscribers '.date('y-m-d');
	return Excel::download(new SponsorExport($users,$heading,$title,$colRange),'Expired-Sponsors.xlsx');
    }

    public function download_stats(Request $request)
    {
    		$user = User::where('uid',$request->id)->first();
            $topic=$user->company_name.' '.date('Y-m-d').'.xlsx';
            $data=$data1=$data2=array();
            $downloads=ResourceDownloads::with('resource')->where('owner_id',$request->id)->where('date','>=',date('Y-m-d',strtotime($request->start_date)))->where('date','<=',date('Y-m-d',strtotime($request->end_date)))->orderBy('date')->get();
            foreach($downloads as $download){
                $userData=$download->userDetail;
                $data[]=array('ResourceTopic'=>$download->resource->resource_topic,'CompanyName'=>$download->resource->company_name,'EmailAddress'=>$userData->email,
                    'FirstName'=>$userData->first_name,'LastName'=>$userData->last_name,'Cell'=>$userData->cell,
                    'Work'=>$userData->work,'Address'=>$userData->address,'City'=>$userData->city,'Country'=>$userData->country,
                    'State/Province'=>$userData->state_province,'Postal/ZipCode'=>$userData->zip_postal,
                    'Region'=>$userData->region,'Date'=>$download->date);
            }
            $views=ResourceViews::with('resource')->where('owner_id',$request->id)->where('date','>=',date('Y-m-d',strtotime($request->start_date)))->where('date','<=',date('Y-m-d',strtotime($request->end_date)))->orderBy('date')->get();
            foreach($views as $view){
                $userData=$view->userDetail;
                $data1[]=array('ResourceTopic'=>$view->resource->resource_topic,'CompanyName'=>$view->resource->company_name,'EmailAddress'=>$userData->email,
                    'FirstName'=>$userData->first_name,'LastName'=>$userData->last_name,'Cell'=>$userData->cell,
                    'Work'=>$userData->work,'Address'=>$userData->address,'City'=>$userData->city,'Country'=>$userData->country,
                    'State/Province'=>$userData->state_province,'Postal/ZipCode'=>$userData->zip_postal,
                    'Region'=>$userData->region,'Date'=>$view->date);
            }

            $anonymousViews=ResourceAnonymousViews::with('resource')->where('owner_id',$request->id)->where('date','>=',date('Y-m-d',strtotime($request->start_date)))->where('date','<=',date('Y-m-d',strtotime($request->end_date)))->orderBy('date')->get();
            foreach($anonymousViews as $anonymousView){
                $data2[]=array('ResourceTopic'=>$anonymousView->resource->resource_topic,'IP Address'=>$anonymousView->ip_address,'City'=>$anonymousView->city,'Country'=>$anonymousView->country,
                    'Date'=>$anonymousView->date,);
            }

            return  Excel::download(new MultipleSheetsExport(collect($data),collect($data1),collect($data2)),$topic);


    }
    public function export_members(Request $request){
        /*if($request->extractType == 1){

        }*/
            $dbColumns = data_get($request->exportColumns,'*.dbCol');
            $heading = data_get($request->exportColumns,'*.excelCol');
            $fileName = 'Members '.date('Y-m-d');
            if(isset($request->exportColumns) && count($request->exportColumns) > 0){
                foreach ($dbColumns as $key => $col) {
                    if($col == 'fullname'){
                        $dbColumns[$key] = 'first_name';
                        array_push($dbColumns,'last_name');
                    }
                }
            }
                if($request->extractType == 1){
                    $users = Users::whereRaw('uid IN (SELECT user_id FROM user_sites WHERE site_id = ?)',['site_id'=>$request->site])->get()->map(function($user) use(&$heading){
                        $array = [];
                        // dd($heading,array_key_exists('BusinessName',(Array) $heading));
                        if(is_array($heading)){

                        if(in_array('Name',$heading))
                            $array['Name'] = "$user->first_name $user->last_name";

                        if(in_array('BusinessName',$heading))
                        $array['BusinessName'] = $user->company_name;

                        if(in_array('Address',$heading))
                        $array['Address'] = $user->address;

                        if(in_array('City',$heading))
                        $array['City'] = $user->city;

                        if(in_array('State/Province',$heading))
                        $array['State/Province'] = $user->state_province;

                        if(in_array('ZipCode',$heading))
                        $array['ZipCode'] = $user->zip_postal;

                        if(in_array('Country',$heading))
                        $array['Country'] = $user->country;

                        if(in_array('Email',$heading))
                        $array['Email'] = $user->email;

                        if(in_array('Website',$heading))
                        $array['Website'] = $user->company_website;

                        if(in_array('Phone',$heading))
                        $array['Phone'] = $user->cell ? $user->cell : $user->work;
                        $heading = array_keys($array);
                        }
                        return $array;
                    });
                }else{
                    $users = UserCategories::with('category.category','user')->whereRaw('user_id IN (SELECT user_id FROM user_sites WHERE site_id = ?)',['site_id'=>$request->site])->get()->map(function($obj) use(&$heading){
                        $array = [];
                        $array['Category'] = $obj->category->category->name??'';
                        $array['SubCategory'] = $obj->category->name??'';
                        if(is_array($heading)){

                        if(in_array('Name',$heading))
                            $array['Name'] = $obj->user->first_name." ".$obj->user->last_name;

                        if(in_array('BusinessName',$heading))
                        $array['BusinessName'] = $obj->user->company_name;

                        if(in_array('Address',$heading))
                        $array['Address'] = $obj->user->address;

                        if(in_array('City',$heading))
                        $array['City'] = $obj->user->city;

                        if(in_array('State/Province',$heading))
                        $array['State/Province'] = $obj->user->state_province;

                        if(in_array('ZipCode',$heading))
                        $array['ZipCode'] = $obj->user->zip_postal;

                        if(in_array('Country',$heading))
                        $array['Country'] = $obj->user->country;

                        if(in_array('Email',$heading))
                        $array['Email'] = $obj->user->email;

                        if(in_array('Website',$heading))
                        $array['Website'] = $obj->user->company_website;

                        if(in_array('Phone',$heading))
                        $array['Phone'] = $obj->user->cell ? $obj->user->cell : $obj->user->work;
                        }
                        $heading = array_keys($array);
                        return $array;
                    });
                    $users = collect($users);
                    $users = $users->sortBy(function($item){ return $item['Category'].'#'.$item['SubCategory']; });
                }
                if(is_array($heading)){

                $colRange = ['A',ALPHABETS[count($heading) - 1 ]];
                }else{
                $heading = [];
                $colRange = ['A','Z'];
                }
                $title = 'Members';
                $myFile = Excel::raw(new SponsorExport($users,$heading,$title,$colRange), "Xlsx");

                $response =  array(
                   'name' => $fileName, //no extention needed
                   'file' => "data:application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;base64,".base64_encode($myFile) //mime type of used format
                );

                return response()->json($response);
            // }
    }
}
