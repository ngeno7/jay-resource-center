@extends('admin.layout.default')
@section('content')
@include('admin.header')
<!--Main layout-->
<?php
$count=444;

?>
<main class="">
   <div class="container-fluid" style="height: 500px" >
      <div class="row">
         <div class="col-lg-12 col-md-12 col-sm-12" style="padding: 0px;margin-top: 20px">
            <div class="col-lg-4 col-xs-12">
               <!-- small box -->
               <div class="small-box bg-red">
                  <div class="inner">
                     <h3 class="count">{{$count}}</h3>
                     <p>All members</p>
                  </div>
                  <div class="icon">
                     <i class="ion ion-ios-people" style="color:white"></i>
                  </div>
                  <a href="{{url('/')}}/admin/dashboard" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
            <div class="col-lg-4 col-xs-12">
               <!-- small box -->
               <div class="small-box bg-red">
                  <div class="inner">
                     <h3 class="count">{{$count}}</h3>
                     <p>Approved members</p>
                  </div>
                  <div class="icon">
                     <i class="ion ion-ios-people" style="color:white"></i>
                  </div>
                  <a href="{{url('/')}}/admin/dashboard" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
            <div class="col-lg-4 col-xs-12">
               <!-- small box -->
               <div class="small-box bg-red">
                  <div class="inner">
                     <h3 class="count">{{$count}}</h3>
                     <p>Un approved members</p>
                  </div>
                  <div class="icon">
                     <i class="ion ion-ios-people" style="color:white"></i>
                  </div>
                  <a href="{{url('/')}}/admin/free_members" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
            <div class="col-lg-4 col-xs-12">
               <!-- small box -->
               <div class="small-box bg-red">
                  <div class="inner">
                     <h3 class="count">{{$count}}</h3>
                     <p>Subscribers </p>
                  </div>
                  <div class="icon">
                     <i class="ion ion-ios-people" style="color:white"></i>
                  </div>
                  <a href="{{url('/')}}/admin/dashboard" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
            <div class="col-lg-4 col-xs-12">
               <!-- small box -->
               <div class="small-box bg-red">
                  <div class="inner">
                     <h3 class="count">{{$count}}</h3>
                     <p>Total Views </p>
                  </div>
                  <div class="icon">
                     <i class="ion ion-eye" style="color:white"></i>
                  </div>
                  <a href="{{url('/')}}/admin/categories" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
            <div class="col-lg-4 col-xs-12">
               <!-- small box -->
               <div class="small-box bg-red">
                  <div class="inner">
                     <h3 class="count">{{$count}}</h3>
                     <p>Total Downloads </p>
                  </div>
                  <div class="icon">
                     <i class="ion ion-code-download" style="color:white"></i>
                  </div>
                  <a href="{{url('/')}}/admin/dashboard" class="small-box-footer">More info <i class="fa fa-arrow-circle-right"></i></a>
               </div>
            </div>
         </div>
      </div>
   </div>
</main>
<!--/Main layout-->
@include('admin.footer')
<script>
   $('.count').each(function () {
     $(this).prop('Counter',0).animate({
         Counter: $(this).text()
     }, {
         duration: 3000,
         easing: 'swing',
         step: function (now) {
             $(this).text(Math.ceil(now));
         }
     });
 });
</script>
@endsection