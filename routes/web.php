<?php
 header("Access-Control-Allow-Origin: *");

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/','HomeController@home');
Route::get('/directory_data','HomeController@directory_data');
Route::get('/analytics','HomeController@analytics');
Route::any('/directories','HomeController@directories');
Route::any('/contact','HomeController@contact');
Route::any('/search_directory','HomeController@search_directory');
Route::any('/resource-detail/{resource_name}/{id}','HomeController@resource_detail');
Route::any('/resource_detail/{resource_name}/{id}','HomeController@resource_detail');
Route::any('/product-detail/{product_name}/{id}','HomeController@product_detail');
Route::any('/stats/{id}','HomeController@resource_stats_detail');
Route::any('/product_stats/{id}','HomeController@product_stats_detail');
Route::get('/search','HomeController@search');
Route::get('/products','HomeController@products');

Route::any('/company-detail/{company_name}/{id}','CompanyController@company_detail');
Route::any('/company_detail/{company_name}/{id}','CompanyController@company_detail');
Route::get('/resource_download/{id}','CompanyController@resource_download');
Route::any('/stats_download/{id}','CompanyController@stats_download');
Route::any('/stats_product_download/{id}','CompanyController@stats_product_download');
Route::any('/stats_download_date/{company_id}/{start_date}/{end_date}','CompanyController@stats_download_date');
Route::any('/stats_download_weekly/{company_id}/{date}','CompanyController@stats_download_weekly');
Route::any('/accountExpire','CompanyController@account_expire');
Route::any('/weeklyReport','CompanyController@weekly_report');

Route::any('/upload','ResourcesController@upload');
Route::any('/edit_upload','ResourcesController@edit_upload');
Route::any('/upload_resource','ResourcesController@upload_resource');
Route::any('/edit_resource/','ResourcesController@edit_resource');
Route::any('/delete_resource/{id}','ResourcesController@delete_resource');
Route::any('/upload_resources_to_s3','ResourcesController@upload_resources_to_s3');
Route::any('/upload_resources_image_to_s3','ResourcesController@upload_resources_image_to_s3');
Route::any('/upload_product_image_to_s3','ResourcesController@upload_product_image_to_s3');
Route::any('/upload_company_image_to_s3','ResourcesController@upload_company_image_to_s3');
Route::get('/edit_resource/{id}',function () {  return view('edit_resource');});
Route::get('/edit_product/{id}','ProductController@edit_product_view');
Route::get('/edit_profile/','CompanyController@edit_profile_view');

Route::get('/widget/{id}', function () {  return view('widgets');});
Route::get('/widgets2/{id}', function () {  return view('widgets2');});

Route::group(['prefix'=>'ajax'],function(){
    Route::any('/register','CompanyController@register');
    Route::any('/register_download','CompanyController@register_download');
    Route::any('/login','CompanyController@login');
    Route::any('/login_download','CompanyController@login_download');
    Route::any('/edit_profile','CompanyController@edit_profile');
    Route::any('/edit_profile_modal','CompanyController@edit_profile_modal');
    Route::any('/edit_company_modal','CompanyController@edit_company_modal');
    Route::any('/edit_company','CompanyController@edit_company');
    Route::any('/update_password','CompanyController@update_password');
    Route::any('/update_password2','CompanyController@update_password2');
    Route::any('/forgot_password','CompanyController@forgot_password');
    Route::any('/user_verify_code','CompanyController@user_verify_code');
    Route::any('/user_set_password','CompanyController@user_set_password');
    Route::any('/download_resource','CompanyController@download_resource');
    Route::any('/edit_schedule','CompanyController@edit_schedule');
    Route::any('/request_demo/{id}','CompanyController@request_demo');
    Route::any('/request_quote','CompanyController@request_quote');
    Route::any('/add_product','ProductController@add_product');
    Route::any('/edit_product','ProductController@edit_product');
    Route::any('/contact_us','HomeController@contact_us');
    Route::any('/delete_product/{id}','ProductController@delete_product');
    Route::any('/logout','CompanyController@logout');
});



// Admin

Route::get('/admin-panel', function () { return view('admin.login'); });

Route::group(['prefix'=>'admin/ajax','middleware' => 'cors'],function(){

    Route::get('/fetch-regions','AdminController@regions');
    Route::post('/login','AdminController@login');
    Route::post('/logout','AdminController@logout');
    Route::post('/add_category','Admin@add_category');
    Route::post('/edit_category','Admin@edit_category');
    Route::post('add-brand','AdminController@add_brand');
    Route::post('add-representative','AdminController@add_representative');
    Route::post('delete-representative','AdminController@delete_representative');
    Route::post('update-representative','AdminController@update_representative');
    Route::post('add-sponser','AdminController@add_sponsor');
    Route::post('update-sponsor','AdminController@update_sponsor');
    Route::post('update-package','AdminController@update_package');
    Route::post('add-admin','AdminController@add_admin');
    Route::post('delete-admin','AdminController@delete_admin');
    Route::post('update-admin','AdminController@update_admin');
    Route::post('update-brand','AdminController@update_brand');
    Route::post('add-industry','AdminController@add_industry');
    Route::post('update-industry','AdminController@update_industry');

    Route::any('/delete_user/{potential_id}','Admin@delete_user');
    Route::any('/approve_user/{potential_id}','Admin@approve_user');
    Route::any('/edit_membership','Admin@edit_membership');
    Route::any('/edit_user_profile','Admin@edit_user_profile');
    Route::any('/edit_schedule','Admin@edit_schedule');
    Route::any('/edit_company','Admin@edit_company_profile');
    Route::any('/change_status/{member_id}/{status}','Admin@change_status');
    Route::post('change-sponsor-status','AdminController@change_sponsor_status');
    Route::post('delete-user','AdminController@delete_user');
    Route::post('change-resource-status','AdminController@change_resource_status');
    Route::post('change-subscriber-status','AdminController@change_subscriber_status');
    // sponsers routes from vue.js panel
    Route::get('get-sponsors','AdminController@get_sponsors');

    Route::get('get-sponsor/{uid}','AdminController@get_sponsor');
    Route::get('/get-subscribers','AdminController@get_subscribers');

    Route::get('/get-categories','AdminController@get_categories');
    Route::get('/get-user-categories','AdminController@get_user_categories');

    Route::post('/add-category','AdminController@add_category');
    Route::post('/update-category','AdminController@update_category');
    Route::post('/add-sub-category','AdminController@add_sub_category');
    Route::get('/get-products','AdminController@get_products');
    Route::post('/add-product','AdminController@add_product');
    Route::post('/update-product','AdminController@update_product');
    Route::post('/delete-product-feature','AdminController@delete_product_feature');
    Route::post('/delete-product','AdminController@delete_product');
    Route::post('/logout','AdminController@logout');

    Route::get('/get-sub-categories','AdminController@get_sub_categories');

    Route::post('/add-resource','AdminController@add_resource');
    Route::post('/update-resource','AdminController@update_resource');
    Route::get('/get-resources','AdminController@get_resources');
    Route::get('/get-resource-types','AdminController@get_resource_types');
    Route::get('/get-resource','AdminController@get_resource');
    Route::get('/get-sponsor-resources','AdminController@get_sponsor_resources');
    Route::get('/get-admins','AdminController@get_admins');
    Route::get('/get-representatives','AdminController@get_representatives');
    Route::get('/get-brands','AdminController@get_brands');
    Route::get('/get-all-brands','AdminController@get_all_brands');
    Route::get('/get-industries','AdminController@get_industries');
    Route::get('/get-all-industries','AdminController@get_all_industries');
    Route::get('/get-sites','AdminController@get_sites');

    Route::get('/get-dashboard-data','AdminController@get_dashboard_data');
    Route::post('/export-members','ExportController@export_members');

});

Route::group(['middleware' => ['session']], function () {
    Route::get('admin/export-approved-sponsors','ExportController@approved_sponsors');
    Route::get('admin/export-un-approved-sponsors','ExportController@un_approved_sponsors');
    Route::get('admin/export-expired-sponsors','ExportController@expired_sponsors');
    Route::get('admin/export-subscriber','ExportController@subscribers');
    Route::get('admin/download-stats','ExportController@download_stats');
    Route::get('/{any}', 'AdminController')->where('any', '.*');

});
