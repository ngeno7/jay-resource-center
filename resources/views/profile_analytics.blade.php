<?php

if (Session::has('user_session')) {
  $user = Session::get('user_session');
  $user_id=$user[0]['user_id'];
}else{
$URL=url('/');
echo "<script> window.location='$URL'</script>";
}

//Mobile  Authenticated
  $member_views= \App\CompanyViews::select([
      DB::raw('DATE(`date`) AS date'),
      DB::raw('COUNT(*) AS count'),
   ])
   ->whereBetween('date', [\Carbon\Carbon::now()->subDays(30), \Carbon\Carbon::now()])
   ->where('company_id',$user_id)
   ->groupBy('date')
   ->orderBy('date', 'ASC')
   ->get()
   ->toArray();

   $member_views_by_day1 = array();
   foreach($member_views as $data) {
       $member_views_by_day1[$data['date']] = $data['count'];
   }

   $date = new \Carbon\Carbon();
   for($i = 0; $i < 30; $i++) {
       $dateString = $date->format('Y-m-d');
       if(!isset($member_views_by_day1[ $dateString ])) {
           $member_views_by_day1[ $dateString ] = 0;
       }
       $date->subDay();
   }

   $data_mobile_auth=$label_mobile_auth='';
   foreach($member_views_by_day1 as $key=>$value){
       $data_mobile_auth=$value.','.$data_mobile_auth;
       $arr = explode('-', $key);
       $label_mobile_auth=$arr[2].','.$label_mobile_auth;
   }
$data_mobile_auth=rtrim($data_mobile_auth,',');
$label_mobile_auth=rtrim($label_mobile_auth,',');


//Mobile Non  Authenticated
  $member_views= \App\CompanyAnonymousViews::select([
      DB::raw('DATE(`date`) AS date'),
      DB::raw('COUNT(*) AS count'),
   ])
   ->whereBetween('date', [\Carbon\Carbon::now()->subDays(30), \Carbon\Carbon::now()])
      ->where('company_id',$user_id)
   ->groupBy('date')
   ->orderBy('date', 'ASC')
   ->get()
   ->toArray();

   $member_views_by_day2 = array();
   foreach($member_views as $data) {
       $member_views_by_day2[$data['date']] = $data['count'];
   }

   $date = new \Carbon\Carbon();
   for($i = 0; $i < 30; $i++) {
       $dateString = $date->format('Y-m-d');
       if(!isset($member_views_by_day2[ $dateString ])) {
           $member_views_by_day2[ $dateString ] = 0;
       }
       $date->subDay();
   }

   $data_mobile_non_auth=$label_mobile_non_auth='';
   foreach($member_views_by_day2 as $key=>$value){
       $data_mobile_non_auth=$value.','.$data_mobile_non_auth;
       $label_mobile_non_auth=$key.','.$label_mobile_non_auth;
   }
$data_mobile_non_auth=rtrim($data_mobile_non_auth,',');
$label_mobile_non_auth=rtrim($label_mobile_non_auth,',');




?>
@extends('layout.default',['title' => ' Analytics'])
@section('content')
@include('header')

<div class="container-fluid">
   <div class="container ">
      <div class="row"><br/>
      <h2 class="font-weight-bold"> Analytics</h2>
      <div class="z-depth-1 p-a-2">
      <h4> Profile Visits</h4>
      <p>  Last 30 days of visits of your profile page</p><br/>
        <h6 style="float: right">
          <span><i class="fa fa-square" aria-hidden="true" style="color:#FE8C00;padding: 10px"></i>Authenticated</span>
          <span><i class="fa fa-square" aria-hidden="true" style="color:#dc3912;padding: 10px"></i>Non-Authenticated</span>

        </h6>
        <h4>Line Chart</h4>
        <canvas id="lineChart" height="60px"></canvas><br/><br/>
        <h4>Bar Chart</h4>
        <canvas id="myChart" height="60px" ></canvas>

      </div>
      <br/><br/>
   </div>
 </div>
</div>
@include('modals')
@include('scripts')

<script>

</script>

<script>
   $(function () {
    var data1 = {
      labels: [<?php echo $label_mobile_auth ?>],
      datasets: [
          {
              label: "Mobile Authenticated",
              fillColor: "rgba(254,140,0,0.2)",
              strokeColor: "rgba(254,140,0,1)",
              pointColor: "rgba(254,140,0,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(51,102,204,1)",
              data:[<?php echo $data_mobile_auth; ?>]
          },
          {
              label: "Mobile Non-Authenticated",
              fillColor: "rgba(248,54,0,0.2)",
              strokeColor: "rgba(248,54,0,1)",
              pointColor: "rgba(220, 57, 18,1)",
              pointStrokeColor: "#fff",
              pointHighlightFill: "#fff",
              pointHighlightStroke: "rgba(220, 57, 18,1)",
              data: [<?php echo $data_mobile_non_auth; ?>]
          }
      ]
   };

    var option = {
    responsive: true
   };

   // Get the context of the canvas element we want to select
    var ctxL = document.getElementById("lineChart").getContext('2d');
   var myLineChart  = new Chart(ctxL).Line(data1, option);

   });

      $(function () {
          var data = {
         labels: [<?php echo $label_mobile_auth ?>],
               datasets: [
                   {
                       label: "Mobile Authenticated",
                       fillColor: "#FE8C00",
                       strokeColor: "rgba(254,140,0,1)",
                       pointColor: "rgba(254,140,0,1)",
                       pointStrokeColor: "#222",
                       pointHighlightFill: "#222",
                       pointHighlightStroke: "rgba(51,102,204,1)",
                       data:[<?php echo $data_mobile_auth; ?>]
                   },
                   {
                       label: "Mobile Non-Authenticated",
                       fillColor: "#F83600",
                       strokeColor: "rgba(248,54,0,1)",
                       pointColor: "rgba(248,54,0,1)",
                       pointStrokeColor: "#222",
                       pointHighlightFill: "#222",
                       pointHighlightStroke: "rgba(220, 57, 18,1)",
                       data: [<?php echo $data_mobile_non_auth; ?>]
                   }
               ]
          };

          var option = {
          responsive: true
          };

          // Get the context of the canvas element we want to select
         var ctx = document.getElementById("myChart").getContext('2d');
         var myBarChart = new Chart(ctx).Bar(data, option);

         });
</script>
@include('footer')
@endsection