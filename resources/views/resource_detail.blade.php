<?php
if (Session::has('user_session')) {
    $user = Session::get('user_session');
    $user_id=$user[0]['user_id'];
}
else{$user_id='';}

$site_id=$data->site_id;
$resources_id=$data->resources_id;
$title='';
?>
@extends('layout.default',['title' => 'Resource Center | '.$title])
@section('content')
    @include('header')
    <div class="container-fluid" >
        <div class="container">
            <div class="row">
                <div class="col-md-12 padding-0">
                    <div class="col-md-3 padding-0">
                        <br/>
                        <img src="{{$data->image_path}}" class="img-thumbnail img-responsive detail-resource-image" >
                        @if($data->user_id==$user_id)
                            <a onclick="editResource('{{$data->resources_id}}')" class="btn btn-success w43"><i class="fa fa-pencil" aria-hidden="true" ></i> <span id="editing">Edit</span></a>
                            <a onclick="deleteResource('{{$data->resources_id}}')" href="#" class="btn btn-danger w43"><i class="fa fa-trash " aria-hidden="true" ></i> Delete</a>
                        @endif
                    </div>
                    <div class="col-md-9">
                        <br/>
                        <h4 class="font-Bd m-t-1" >{{$data->resource_topic}}</h4>
                        <h5 class="m-top-minus-5">
                            <span class="italic byHeading" >By: </span>
                            <span class="bold-n-blue byPara">
                                <a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$data->company_name))).'/'.$data->user_id}}">{{$data->company_name}}</a>
                            </span>
                            <span class="stats-align"><i class="fa fa-eye stats-view-align" aria-hidden="true"></i>
                                Views: {{$data->resourceViews->count()+$data->resourceAnonymousViews->count()}}</span>
                            <span class="stats-align" ><i class="fa fa-arrow-circle-o-down stats-download-align" aria-hidden="true"></i>
                                Downloads: <span class="downloadCount">{{$data->resourceDownloads->count()}}</span>
                            </span>
                        </h5>
                        <h5 class="m-top-minus-5 mh20"><span class="italic byPara">
                            @if(!empty($data->author_name))
                                Author:</span>
                            <span class="bold-n-blue author">
                               {{$data->author_name}}</span>
                            @endif
                            <span class="f-15-gray float-right"><i class="fa fa-file pr-5"aria-hidden="true"></i>
                               {{$data->typeOfResource->resourcetypename}}
                            </span>
                        </h5>
                        @php $keywords=explode(',',$data->keywords) @endphp
                        @if(!empty($keywords))
                            @foreach($keywords as $keyword)
                              <a href="{{url('/')}}/search?keyword={{$keyword}}" class="badge badge-primary hoverable keyword-badge">{{$keyword}}</a>
                            @endforeach
                        @endif
                        <br/><br/>
                        <p>
                          <span>
                              <a class="btn btn-warning m-top-minus-5-left-0" onclick="resourceDownload('{{$data->resources_id}}')" id="downloadingButton"><i class="fa fa-arrow-circle-o-down pad-r-5" aria-hidden="true" ></i>
                                  <span id="downloading">Download</span>
                              </a>
                              @if($user_id==$data->user_id)
                               <a href="{{url('/').'/stats/'.$data->resources_id}}" class="btn  m-top-minus-5-left-0 btn-warning waves-effect waves-light" ><i class="fa fa-bar-chart pad-r-5" aria-hidden="true" ></i>View Statistics</a>
                              @endif
                          </span>
                        </p>
                    </div>
                    <div class="col-md-12 padding-0">
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container hoverable company-desc" >
        <br/>
        <div class="row">
            <div class="col-md-12">
                <div class="mh120" id="cd" >
                    <?php echo $data->description ?>
                </div>
                <p>
                    <span class="addthis_inline_share_toolbox_19pu pull-right" ></span>
                    <br/>
                </p>
            </div>
        </div>
    </div>
    <br/>
    <div class="container-fluid container1 bgf2f2f2">
        <div class="container container1"  >
            <div class="row">
                <div class="col-md-9 mlm10">
                    <br/>

                    <h2 class="font-Bd">RELATED RESOURCES</h2>
                    <hr class="hr-bg" /> <br/>
                    <div class="item active">
                        <div class="row text-center">
                            @foreach($related_resources as $resource)
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
                        </div>
                    </div>
                </div>
                <div class="col-md-3 premium-resource" id="right" >
                    <h5 class="font-Bd p-b-1 m-t-1  text-uppercase wow pulse fadeInTop" data-wow-delay="1s">
                        Premium Resources
                    </h5>
                    @foreach($premium_resources as $resource)
                    <div  class="premium-box hoverable  hm-zoom ">
                        <img src="{{$resource->image_path}}" align="left" class="premium-image">
                        <a href="@php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail;@endphp">
                            <p class="premium-text  flex-center">{{$resource->resource_topic}}</p>
                        </a>
                    </div>
                    @endforeach
                    <br/>
                </div>
            </div>
        </div>
    </div>
    <div class="loading" style="display: none">Loading&#8230;</div>
    @include('modals')
    @include('scripts')
    @include('footer')
@endsection