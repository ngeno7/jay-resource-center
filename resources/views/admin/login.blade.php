@extends('admin.layout.default')
@section('content')
<div class="container-fluid">
   <div class="row"  >
      <div class="col-md-4 col-sm-2 col-xs-1"></div>
      <div class="col-md-4 col-sm-8  col-xs-10" >
         <div class="container-fluid " style="border: 1px solid white;background-color: #efefef;color:#2B2B2B;margin-top: 120px" >
            <br/> 
            <h3 style="text-align: center">Login to Your Account</h3>
            <br/>
            <form role="form" action="" id="form" method="post" >
               <div class="form-group ">
                  <input type="text" class="form-control" placeholder="Email ..." name="email" ><br/>
                  <input type="password" class="form-control" placeholder="Password ..." name="password"  ><br/>
                  <button type="submit" class="btn btn-warning btn-block"  id="logInButton">Log In</button>
                  <br/>
               </div>
            </form>
         </div>
      </div>
      <div class="col-md-4 col-sm-2  col-xs-1">
      </div>
   </div>
</div>
@include('admin.footer')
@endsection