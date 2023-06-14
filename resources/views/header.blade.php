@php

    if (Session::has('user_session')) {
        $user = Session::get('user_session');
        $email=$user[0]['email'];
        $username=$user[0]['username'];
        $user_id=$user[0]['user_id'];
        $userDetail=\App\User::where('uid',$user_id)->first();
        $companyName=$userDetail->company_name;
        $site_id=$userDetail->site_id;
        $user_status=$userDetail->user_status;
    }
        $topics=\App\Topics::orderBy('industryname')->where('site_id',1)->get();
        $brands=\App\Brands::where('status','approved')->orderBY('brandid')->get();
        $value= basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
        $column1 = array();
        $column2 = array();
        $column3 = array();
        $column4 = array();
        $c_1 = 3;
        $c_2 = 2;
        $c_3 = 1;
        $c_4 = 0;

        foreach($topics as $value) {
            if ($c_1++ % 4 == 0) {
                $column1[] = $value;
            }
            if ($c_2++ % 4 == 0) {
                $column2[] = $value;
            }
            if ($c_3++ % 4 == 0) {
                $column3[] = $value;
            }
            if ($c_4++ % 4 == 0) {
                $column4[] = $value;
            }
        }
@endphp

<nav class="navbar navbar-fixed-top" style="z-index: 20">
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="navbar-header">
                    <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-2"><span class="sr-only">Toggle navigation</span>
                        <span class="icon-bar"></span> <span class="icon-bar"></span> <span class="icon-bar"></span>
                    </button>
                    <a class="navbar-brand logo-link" href="/">
                        <img src="/images/logo.png" class="img-responsive logo-responsive">
                    </a>
                </div>
                <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
                    <ul class="nav navbar-nav navbar-right">
                        <li id="listLI"><a href="/" class="waves-effect  m-t-3px">HOME</a></li>
                        <li id="listLI" class="dropdown m-t-3px"><a href="#" class="dropdown-toggle" data-toggle="dropdown">CATEGORIES </a>
                            <ul class="dropdown-menu multi-column columns-3 dd-left m-top-minus-5 m-t-1">
                                <div class="row">
                                    <div class="col-sm-3" style="border-right: 1px solid #efefef;">
                                        @foreach($column4 as $category)
                                            <ul class="multi-column-dropdown">
                                                <li class="hoverable">
                                                    <a href="/search?&content_category={{$category->industryid}}">{{$category->industryname}}</a>
                                                </li>
                                            </ul>
                                        @endforeach
                                    </div>
                                    <div class="col-sm-3" style="border-right: 1px solid #efefef;">
                                        @foreach($column1 as $category)
                                            <ul class="multi-column-dropdown">
                                                <li class="hoverable">
                                                    <a href="/search?&content_category={{$category->industryid}}">{{$category->industryname}}</a>
                                                </li>
                                            </ul>
                                        @endforeach
                                    </div>
                                    <div class="col-sm-3" style="border-right: 1px solid #efefef;">
                                        @foreach($column2 as $category)
                                            <ul class="multi-column-dropdown">
                                                <li class="hoverable">
                                                    <a href="/search?&content_category={{$category->industryid}}">{{$category->industryname}}</a>
                                                </li>
                                            </ul>
                                        @endforeach
                                    </div>
                                    <div class="col-sm-3">
                                        @foreach($column3 as $category)
                                            <ul class="multi-column-dropdown">
                                                <li class="hoverable">
                                                    <a href="/search?&content_category={{$category->industryid}}">{{$category->industryname}}</a>
                                                </li>
                                            </ul>
                                        @endforeach
                                    </div>
                                </div>
                            </ul>
                        </li>
                        <li id="listLI">
                            <a href="/directories" class="waves-effect m-t-3px">DIRECTORY</a>
                        </li>
                        <li id="listLI">
                            <a href="/products" class="waves-effect m-t-3px">PRODUCTS</a>
                        </li>
                        <li id="listLI">
                            <a href="/contact" class="waves-effect m-t-3px">CONTACT US</a>
                        </li>

                        <li id="listLI">
                            @if(empty($email))
                                <div class="btn-group dropDown-bt-pos dd">
                                    <button class="btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt"
                                            type="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" style=""> Login / Register
                                    </button>
                                    <div class="dropdown-menu dropDown-menu-m">
                                        <a class=" dropdown-item" data-toggle="modal"
                                           data-target="#loginModal">Login</a>
                                        <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                           data-target="#registerModal">Register</a>
                                    </div>
                                </div>
                            @else
                                <div class="btn-group dropDown-bt-pos dd">
                                    <button class="btn btn-block btn-warning btn-sm dropdown-toggle dropDown-bt"
                                            type="button" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false" style=""> Account Settings
                                    </button>
                                    <div class="dropdown-menu dropDown-menu-m">
                                        @if($user_status=='approved')
                                            <a class="dropdown-item waves-effect waves-light" style="color: #ca311b"
                                               href="@php echo url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$companyName))).'/'.$user_id @endphp">{{$username}}</a>
                                            <a class="dropdown-item waves-effect waves-light"
                                               href="{{url('/')}}/analytics">Profile Analytics</a>
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#uploadModal">Add Resource</a>
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#addProduct">Add Product</a>
                                            <a class="dropdown-item waves-effect waves-light"
                                               href="/edit_profile">Edit Profile</a>
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#" onclick="editcompany()">Edit Company</a>
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#updateSchedule">Edit Schedule Info</a>
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#passwordModal">Change Password</a>

                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#" onclick="logout()">Logout</a>
                                        @else
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#" onclick="editprofile()">Edit Profile</a>
                                            <a class="dropdown-item waves-effect waves-light" data-toggle="modal"
                                               data-target="#" onclick="logout()">Logout</a>
                                        @endif
                                    </div>
                                </div>
                            @endif
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</nav>
<div class="container-fluid banner ">
      <div class="container" style="margin-top: 0px; margin-bottom: 25px;text-align:center">
          <div id='div-gpt-ad-1620922675949-0'>
              <script>
                  googletag.cmd.push(function() { googletag.display('div-gpt-ad-1620922675949-0'); });
              </script>
          </div>
	  </div>
   </div>



