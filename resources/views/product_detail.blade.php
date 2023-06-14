<?php
if (Session::has('user_session')) {
    $user = Session::get('user_session');
    $user_id=$user[0]['user_id'];
}
else{$user_id='';}

$id=$product->product_id;
?>

@extends('layout.default')
@section('content')
    @include('header')
    <div id="preloader" style=""> <div id="status" style=""></div></div>
    <div class="container-fluid" >
        <div class="container"  >
            <div class="row">
                <br/>
                <div class="col-md-3 padding-0">
                    <img src="{{$product->product_img}}" onerror="this.src='{{url('/').'/public/images/placeholder.png'}}'" class="img-responsive img-thumbnail product-image" alt="" align="left" >
                    <button class="btn btn-warning btn-block" onclick="request_demo('{{$product->user_id}}')">Quote / Info</button>
                    <br/>
                </div>
                <div class="col-md-9">
                    <h5 class="s-p-r-h font-Bd m-t-1">{{$product->name}}</h5>
                    <h6 class="s-c-l"><span >
                            <a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->user->company_name))).'/'.$product->user_id}}">{{$product->user->company_name}}</a>
                            <span class="stats-align"><i class="fa fa-eye stats-view-align" aria-hidden="true"></i>Views: {{$product->product_views->count()+$product->product_anonymous_views->count()}}</span>
                        </span>
                    </h6>
                    <div class="s-p  mh120">
                      {{$product->description}}
                    </div>
                    @if($user_id==$product->user_id)
                        <a  class="btn btn-success m-top-minus-5-left-0 waves-effect waves-light" href="{{url('/')}}/edit_product/{{$product->product_id}}"><i class="fa fa-edit pad-r-5" aria-hidden="true" ></i>Edit</a>
                        <a  class="btn btn-danger m-top-minus-5-left-0 waves-effect waves-light" onclick="delete_product('{{$product->product_id}}')"><i class="fa fa-trash-o pad-r-5" aria-hidden="true" ></i>Delete</a>

                        <a href="{{url('/').'/product_stats/'.$product->product_id}}" class="btn  m-top-minus-5-left-0 btn-warning waves-effect waves-light" ><i class="fa fa-bar-chart pad-r-5" aria-hidden="true" ></i>View Statistics</a>
                    @endif
                    <p><span class="addthis_inline_share_toolbox_19pu pull-right" ></span></p>
                </div>

                <br><br>
            </div>
        </div>
    </div>
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                @if(count($product->product_features))
                    <div class="col-md-12 padding-0" >
                        <br><h3 class="font-Bd">Details and specs</h3>
                        <table class="table table-striped feature-border">
                            <tbody>
                            @foreach($product->product_features as $row)
                                <tr>
                                    <th scope="row">{{$row->feature}}</th>
                                    <td>{{$row->value}}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <br>
                    </div>
                    <br><br>
                @endif
            </div>
        </div>
    </div>
    <div class="container-fluid bgf2f2f2">
        <div class="container">
            <div class="row">
                <br/>
                <h4 class="font-weight-bold p-b-1">Related Products</h4>
                <div class="item active">
                    <!-- Row -->
                    <div class="row text-center">
                        <!-- Card -->
                        @foreach($products as $product)
                            <div class="col-sm-6 col-md-4 col-lg-3 item-card text-center">
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
                                        @php $topicLen= strlen($product->name); if($topicLen>=30){$topic=substr($product->name,0,30)." ...";}else{$topic=$product->name;} @endphp
                                        <h5><a href="{{url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id}}"
                                               class="bold-n-black">{{$topic}}</a>
                                            <br>
                                            <span ><span class="card-c-name">
                                       <a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->user->company_name))).'/'.$product->user_id}}">
                                           @php $company_name_length=strlen($product->user->company_name);
                                           if($company_name_length>=30){echo substr($product->user->company_name,0,25).' ...';}
                                           else{echo $product->user->company_name;}@endphp
                                       </a>
                                           </span>
                                        </span>
                                        </h5>
                                        @php $description= strip_tags($product->description)@endphp
                                        @php $descriptionLength= strlen($description); if($descriptionLength>=105){$description=substr($description,0,80)." ...";}else{$description=$product->description;} @endphp
                                        <p class="mh60">{{$description}}<a class="rm" href="{{url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id}}" >Read more  <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                                        <button class="btn btn-warning btn-block" onclick="request_demo('{{$product->user_id}}')">Quote / Info</button>
                                    </div>
                                </div>
                                <br>
                            </div>
                        @endforeach
                    </div>
                    <!-- /.row -->
                </div>
            </div>
        </div>
    </div>

    @include('modals')
    @include('scripts')
    @include('footer')

@endsection