@php
if(Session::has('user_session')){
    $user = Session::get('user_session');
    $user_id=$user[0]['user_id'];
}else{$user_id='';}

@endphp

@extends('layout.default')
@section('content')
@include('header')

<div class="container hoverable company-desc">
    <div class="row">
        <br/>
        <div class="col-md-3 border-right hm-zoom">
            <img src="{{$data->company_image}}" onerror="this.src='{{url('/')}}/public/images/default-company-logo.jpg'" class=" img-responsive wow  pulse company-detail-image m-x-auto">
        </div>
        <div class="col-md-9">
            <div class="row">
                <div class="col-md-7 b_name">
                    <h3 class="font-weight-bold" id="">{{$data->company_name}}</h3>
                    <a data-toggle="modal" data-target="#mapModal"><i class="fa fa-map-marker gradient-color" aria-hidden="true"></i> <span  class="font-weight-bold padd-address gradient-color"> {{$data->address}}</span></a>
                </div>
                <div class="col-md-5" style="direction: rtl;">
                    <a class="btn btn-warning font-weight-bold" onclick="request_demo('{{$data->uid}}')"  >Quote / Info</a>
                    <a class="btn btn-warning font-weight-bold" data-toggle="modal" data-target="#categories">Categories</a>
                </div>
                <div class="col-md-12">
                    <hr class="mlm15">
                </div>
                <div class="col-md-5">
                    <i class="fa fa-link gradient-color" aria-hidden="true"></i><a class="com-web" href="{{"http://".$data->company_website}}" target="_blank">{{$data->company_website}}</a>
                    <br/>
                    <i class="fa fa-envelope gradient-color mt7" aria-hidden="true"></i><a href="mailto:{{$data->email}}" class="com-web">{{$data->email}}</a>
                    <br/>
                </div>
                <div class="col-md-3">
                    <i class="fa fa-phone gradient-color" aria-hidden="true"></i>@if(!empty($data->work))<span class="font-weight-bold pl15" >{{$data->work}}</span>@endif
                    <br/>
                    <i class="fa fa-clock-o gradient-color mt7" aria-hidden="true"></i><a  data-toggle="modal" data-target="#business_hours" class="com-web">Business Hour</a>
                    <br/>
                </div>
                <div class="col-md-4">
                    <div class="f-social">
                        <div class="social-reveal social-reveal-active add-this-fr">
                            @if(!empty($data->fb))
                                <a type="button" href="{{$data->fb}}" target="_blank" data-toggle="tooltip" data-placement="top" title="Facebook" class="mr20"><i class="fa fa-facebook fa-icon-css"></i></a>
                            @endif
                            @if(!empty($data->twitter))
                                <a type="button" href="{{$data->twitter}}" target="_blank" data-toggle="tooltip" data-placement="top" title="Twitter" class="mr20"><i class="fa fa-twitter fa-icon-css"></i></a>
                            @endif
                            @if(!empty($data->googleplus))
                                <a type="button" href="mailto:{{$data->googleplus}}" target="_blank" data-toggle="tooltip" data-placement="top" title="Google Plus" class="mr20"><i class="fa fa-google-plus fa-icon-css"></i></a>
                            @endif
                            @if(!empty($data->company_website))
                                <a type="button" href="{{$data->company_website}}" target="_blank" data-toggle="tooltip" data-placement="top" title="Website" class="mr20"><i class="fa fa-globe fa-icon-css"></i></a>
                            @endif
                        </div>
                    </div>
                </div>
                <div class="col-md-4">
                </div>
            </div>
            <br/>
        </div>
        <br/>
    </div>
</div>


<div class="container hoverable company-desc" >
    <br/>
    <div class="row">
        <div class="col-md-12">
            <h4 class="bold-n-black"><?php  if($data->uid==$user_id and $data->expire_package>=date('Y-m-d')){ ?>
                <span><a href="#" data-toggle="modal" data-target="#download_statistics"  class="btn btn-warning" style="float: right;margin-top: -10px">Download All Statistics</a></span>
                <?php } ?>
            </h4>
            <h4 class="bold-n-black">{{$data->company_name}} </h4>
            <div class="mh120" id="cd" >@php echo $data->company_description; @endphp</div>
            <p>
            <span class="addthis_inline_share_toolbox_19pu pull-right" >
               <!-- Go to www.addthis.com/dashboard to customize your tools -->
            </span><br/>
            </p>
        </div>
    </div>
</div>
<br/>

<div class="container-fluid container1">
    <div class="container container1">
        <div class="row">
            <br/>
            <div class="col-md-9 mlm10" id="left">
                <ul class="nav nav-tabs tabs-2 indigo" role="tablist" >
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#panel5" role="tab">Media/Resources ( {{$resources->total()}} )</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel6" role="tab">Products ( {{$products->count()}} )</a>
                    </li>
                </ul>
                <div class="tab-content tab-style">
                    <div class="tab-pane fade in active p10" id="panel5" role="tabpanel">
                        <div class="item active">
                            <div class="row text-center">
                                <br/>
                                <div class="item active">
                                    <div class=" text-center">
                                        <div class="infinite-scroll company">
                                            @foreach($resources as $resource)
                                                <div class="col-sm-6 col-md-4 col-lg-4 item-card">
                                                    <div class="card hoverable w100">
                                                        <div class="card-image">
                                                            <div class="view overlay hm-white-slight z-depth-1">
                                                                <a href="@php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; @endphp">
                                                                    <img data-src="{{$resource->image_path}}" src="{{url('/').'/public/images/placeholder-white.png'}}" class="img-responsive cover-blur">
                                                                    <img data-src="{{$resource->image_path}}" src="{{url('/').'/public/images/placeholder.png'}}" class="img-responsive absolute">
                                                                </a>
                                                            </div>
                                                        </div>
                                                        <div class="card-content text-left">
                                                            @php $topicLen= strlen($resource->resource_topic); if($topicLen>=50){$resourceTopic=substr($resource->resource_topic,0,50)." ...";}else{$resourceTopic=$resource->resource_topic;} @endphp
                                                            <h5>
                                                            <a href="@php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; @endphp" class="bold-n-black topic">
                                                                {{$resourceTopic}}
                                                            </a><br>
                                                            <span class="text-nowrap"><span class="card-c-name"><a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->company_name))).'/'.$resource->user_id}}">
                                                            @php $company_length=strlen($resource->company_name);if($company_length>=45){echo substr($resource->company_name,0,45).' ...';} else{echo $resource->company_name;}@endphp</a> </span> </span> </h5>
                                                            @php $description=  strip_tags($resource->description)@endphp
                                                            @php $description_length= strlen($description); if($description_length>=175){$description=substr($description,0,175)." ...";}else{$description=$resource->description;} @endphp
                                                            <p class="mh120">{{strip_tags($description)}}<a class="rm" href="@php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; @endphp"> Read more  <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                                                        </div>
                                                    </div>
                                                    <br>
                                                </div>
                                            @endforeach
                                                <div class="pagination mm1">@php echo urldecode($resources->links()); @endphp </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade p10" id="panel6" role="tabpanel" >
                        <br/>
                        <div class="item active">
                            <div class="row text-center">
                                @foreach($products as $product)
                                    <div class="col-sm-6 col-md-4 col-lg-4 item-card  item-card ">
                                        <div class="card hoverable w100">
                                            <div class="card-image">
                                                <div class="view overlay hm-white-slight z-depth-1">
                                                    <img data-src="{{$product->product_img}}" src="{{url('/').'/public/images/placeholder-white.png'}}" class="img-responsive cover-blur">
                                                    <img data-src="{{$product->product_img}}" src="{{url('/').'/public/images/placeholder.png'}}" class="img-responsive absolute">
                                                    <div class="mask waves-effect">
                                                        <div class="verticalcenter">
                                                            <a href="{{url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id}}"  class="btn btn-warning waves-effect waves-light"><i class="fa fa-eye pad-r-5" aria-hidden="true" ></i>Quick View</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="card-content text-left">
                                                @php $topicLen= strlen($product->name); if($topicLen>=25){$topic=substr($product->name,0,25)." ...";}else{$topic=$product->name;} @endphp
                                                <h5><a href="{{url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id}}"
                                                       class="bold-n-black">{{$topic}}</a>
                                                    <br>
                                                    <span ><span class="card-c-name">
                                                       <a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->user->company_name))).'/'.$product->user_id}}">
                                                           @php $company_name_length=strlen($product->user->company_name);
                                                           if($company_name_length>=25){echo substr($product->user->company_name,0,25).' ...';}
                                                           else{echo $product->user->company_name;}@endphp
                                                       </a>
                                                   </span>
                                               </span>
                                                </h5>
                                                @php $description= strip_tags($product->description)@endphp
                                                @php $descriptionLength= strlen($description); if($descriptionLength>=105){$description=substr($description,0,80)." ...";}else{$description=$product->description;} @endphp
                                                <p class="mh60">{{$description}}<a class="rm" href="{{url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id}}" >Read more   <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                                                <button class="btn btn-warning btn-block"  onclick="request_demo('{{$product->user_id}}')">Quote / Info</button>
                                            </div>
                                        </div>
                                        <br>
                                    </div>
                                @endforeach
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-3 premium-resource" id="right" >
                @if($data->uid==$user_id)
                <div class="sticky">
                    <div id="example-action" class="example card z-depth-1-half box">
                        <div class="input-group">
                            <h5 class="embed-heading">Place this code where you want to embed to appear on your site</h5>
                            <textarea id="bar" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" readonly class="embed-textarea"><iframe src="{{url('/')}}/widgets2/{{$data->uid}}" width="330px" height="1050px" frameBorder="0"></iframe></textarea>
                            <div class="form-actions">
                                <button class="btn btn-warning btn-block m-0" type="button" data-clipboard-demo="" data-clipboard-target="#bar" style="margin-top: -7px">
                                    Copy to clipboard
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <br/>
                @endif
                <h5 class="font-Bd p-b-1 m-t-1  text-uppercase wow pulse fadeInTop" data-wow-delay="1s">
                    Premium Resources
                </h5>

                @foreach($premium_resources as $resource)
                <div  class="premium-box hoverable  hm-zoom ">
                    <img src="{{$resource->image_path}}" align="left" class="premium-image">
                    <a href="@php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; @endphp">
                        <p class="premium-text  flex-center">{{$resource->resource_topic}}</p>
                    </a>
                </div>
                @endforeach
                <br/>
            </div>
        </div>
        <br/><br/>
    </div>
</div>

<!-- Categories Modal -->
<div class="modal fade" id="categories" tabindex="-1" role="dialog">
    <div class="modal-dialog modal-lg" role="document">
        <div class="modal-content mt22" >
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Categories</h4>
            </div>
            <div class="modal-body">
                <!--Accordion wrapper-->
                <div class="accordion" id="accordionEx" role="tablist" aria-multiselectable="true">
                @foreach($categories as $category)
                <!-- Accordion card -->
                    <div class="">
                        <!-- Card header -->
                        <div class="card-header" role="tab" id="{{$category->category_id}}">
                            <a data-toggle="collapse" data-parent="#accordionEx" href="#{{$category->category_id}}" aria-expanded="true" aria-controls="{{$category->category_id}}">
                                <h5 class="mb-0" style=" margin: 0px;">
                                    {{$category->name}}
                                </h5>
                            </a>
                        </div>
                        <!-- Card body -->
                        <div id="{{$category->category_id}}" class="collapse show" role="tabpanel" aria-labelledby="{{$category->category_id}}">
                            <div class="card-body" style="margin: -10px; margin-left: 5px;">
                                <br/>
                                @foreach($category->sub_category as $category)
                                    @if(in_array($category->category_id,$member_categories))
                                        <h6 class="font-weight-bold"><span style="padding-right: 10px">-</span>{{$category->name}} </h6>
                                    @endif
                                @endforeach
                                <br/>
                            </div>
                        </div>
                    </div>
                    <!-- Accordion card -->
                    @endforeach
                </div>
                <!--/.Accordion wrapper-->
            </div>
        </div>
    </div>
</div>
@include('modals')
@include('scripts')
@include('footer')

<script> new WOW().init();</script>
<!-- Download Statistics-->
<div class="modal fade" id="download_statistics" role="dialog" aria-hidden="true" tabindex="-1" >
    <div class="modal-dialog ">
        <div class="modal-content">
            <div class="modal-body" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h2 class="m-l-1">Download Statistics</h2><br/>
                <form role="form" class="form-group" id="download_stats">

                    <div class="col-md-6 col-sm-6">
                        <input type="text" class="from_date form-control" placeholder="Start date" contenteditable="false" name="start_date"  id="start_date"  ><br/>
                    </div>
                    <div class="col-md-6 col-sm-6">
                        <input type="text" class="to_date form-control" placeholder="End date" contenteditable="false" name="end_date" id="end_date" ><br/>
                    </div>

                    <div class="col-md-12">
                        <a class="btn btn-warning btn-md btn-block" onclick="download_statistics('{{ $data->uid}}')" id="download_statistic">Download Statistics</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade" id="business_hours" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <div class="modal-content mt22">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Business Hours</h4>
            </div>
            <div class="modal-body">
                @if(count($schedule->toArray()))
                    @foreach($schedule as $record)
                        <h4 class="schedule-heading">{{$record->day_of_week}}:<span class="schedule-text">{{$record->open_time}} <span class="schedule-dash"> - </span>{{ $record->close_time}}</span></h4>
                    @endforeach
                @else
                    <h3 class="text-center">No schedule for this company</h3>
                @endif
            </div>
        </div>
    </div>
</div>

<div id="mapModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">{{$data->address}}</h4>
            </div>
            <div class="modal-body">
                <div id="map" class="z-depth-1" style="height: 300px"></div>
            </div>
        </div>
    </div>
</div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCjAnICAKNpJvPuLbcLAD0Ar5S2R5QKkpo"></script>
<script>


    var map;
    google.maps.event.addDomListener(window, 'load', init_map);

    function init_map() {
        var address = "{{$data->address}}";

        $.getJSON('https://maps.googleapis.com/maps/api/geocode/json?address='+address+'&sensor=false&key=AIzaSyCjAnICAKNpJvPuLbcLAD0Ar5S2R5QKkpo', null, function (data) {
            var p = data.results[0].geometry.location;
            var lat=p.lat;
            var lng=p.lng;
            var var_location = new google.maps.LatLng(lat, lng);

            var var_mapoptions = {
                center: var_location,
                zoom: 12
            };

            var var_marker = new google.maps.Marker({
                position: var_location,
                map: map,
                title: ""
            });

            var map = new google.maps.Map(document.getElementById("map"),
                var_mapoptions);

            var_marker.setMap(map);
            $('#mapModal').on('shown.bs.modal',function(){
                google.maps.event.trigger(map, "resize");
                return map.setCenter(var_location);
            });
        });
    }

    var textLength =$(".b_name h3").text().length;
    if(textLength > 25) {
        $(".b_name h3").css('font-size', '20px');
        $(".b_name h3").css('line-height', '1.1');
        $(".b_name h3").css('margin-bottom', '0.5rem');
        $(".b_name h3").css('margin-top', '10px');
    }
</script>
<script type="text/javascript">
    function download_statistics(company_id)
    {
        $("#download_statistic").attr('disabled',true);
        var start_date=$('#start_date').val();
        var end_date=$('#end_date').val();
        if(start_date==''){ var start_date = '2015-01-01';}
        if(end_date==''){ var end_date = new Date().toISOString().slice(0,10);}

        var url="{{url('/')}}/stats_download_date/"+company_id+"/"+start_date+"/"+end_date;
        window.location.href =url;
        window.setTimeout(function(){
            toastr.success('Your download will begin shortly.', '',{timeOut: 5000});
            $("#download_statistic").attr('disabled',false);

        },1000);
        window.setTimeout(function(){$('#download_statistics').modal('hide')},2000);
    }
</script>
<script>


    var startDate = new Date('01-01-2012');
    var FromEndDate = new Date('');
    var ToEndDate = new Date('');

    ToEndDate.setDate(ToEndDate.getDate()+365);

    $('.from_date').datepicker({

        weekStart: 1,
        startDate: '01/01/2012',
        endDate: FromEndDate,
        autoclose: true
    })
        .on('changeDate', function(selected){
            startDate = new Date(selected.date.valueOf());
            startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
            $('.to_date').datepicker('setStartDate', startDate);
        });
    $('.to_date')
        .datepicker({

            weekStart: 1,
            startDate: startDate,
            endDate: ToEndDate,
            autoclose: true
        })
        .on('changeDate', function(selected){
            FromEndDate = new Date(selected.date.valueOf());
            FromEndDate.setDate(FromEndDate.getDate(new Date(selected.date.valueOf())));
            $('.from_date').datepicker('setEndDate', FromEndDate);
        });

</script>

<script>
    $(function() {
        $('.datepicker').keypress(function(event) {
            event.preventDefault();
            return false;
        });
    });
</script>
<script>
    var clipboard = new Clipboard('.btn');

    clipboard.on('success', function(e) {
        console.info('Action:', e.action);
        console.info('Text:', e.text);
        console.info('Trigger:', e.trigger);

        e.clearSelection();
    });

    clipboard.on('error', function(e) {
        console.error('Action:', e.action);
        console.error('Trigger:', e.trigger);
    });
</script>
<script type="text/javascript">
    $(function(){

        $(".sticky").sticky({
            topSpacing: 85,
            zIndex:2,
            stopper: "#footer"
        });

    });
</script>

@endsection