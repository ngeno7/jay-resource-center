@extends('layout.default',['title' => 'Products | Resource Center'])
@section('content')
@include('header')
<div id="preloader"> <div id="status"></div></div>
<div class="container-fluid sticky z-depth-1 bgf2f2f2 mtm10">
   <div class="container">
      <div class="row">
         <div class="col-md-12 padding-0">
            <form class="form-inline mb15" method="get" action="{{url('/')}}/products" >
               <h3 class="banner-text"></h3>
               <br/>
               <div class="form-group">
                 <div class="col-md-3 padding-0">
                   <select data-placeholder="Select Topics" class="chosen-select form-control" name="category" >
                      <option value=""></option>
                      <option value="" selected="selected">All Categories</option>
                      @foreach($categories as $category)
                       <optgroup label="{{$category->name}}">
                          @foreach($category->sub_category as $row)
                              <option value="{{$row->category_id}}" @if($category_id==$row->category_id) selected="selected" @endif>{{$row->name}}</option>
                          @endforeach
                       </optgroup>
                      @endforeach
                   </select>
                 </div>
                 <div class="col-md-6 padding-0">
                   <input type="text" class="form-control keyword-text product-search h42" placeholder="Find Products .." name="search" value="{{$search}}">
                 </div>
                 <div class="col-md-3 padding-0">
                   <button class="btn btn-warning waves-effect waves-light search-button-block btn-block h42" >SEARCH </button>
                 </div>
               </div>
            </form>
         </div>
      </div>
   </div>
</div>
<div class="container-fluid bgf2f2f2 mtm10">
   <div class="container padding-0">
      <div class="row">
         <br/>
         <div class="item active">
           <h5 class="search-result1 mtm10">Search Results @php $count=$products->total(); echo '( '.$count.' )';@endphp</h5>
           <div class="infinite-scroll">
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
               <div class="pagination" > <?php echo urldecode($products->appends(['search'=>$search,'category'=>$category_id])->links()); ?> </div>
                    @if(!$products->count())
                     <h2 class="text-center" style="margin:80px">No Products</h2>
                    @endif
               </div>
            </div>
          <br/>
      </div>
   </div>
</div>

@include('modals')
@include('scripts')
@include('footer')
<script type="text/javascript">
    $(function(){

        $(".sticky").sticky({
            topSpacing: 60,
            zIndex:2,
            width: '100%',
            stopper: "#footer"
        });

    });
</script>
<style>
    .sticky {
        width: 100% !important;
    }
    .form-inline .form-group {
        width: 100%;
    }
    .chosen-container-single .chosen-single {
        background-color: #fff;
        -webkit-background-clip: padding-box;
        -moz-background-clip: padding;
        background-clip: padding-box;
        height: 42px;
        -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
        color: #555555;
        display: block;
        overflow: hidden;
        line-height: 34px;
        padding: 0 0 0 8px;
        position: relative;
        text-decoration: none;
        white-space: nowrap;
        border: 1px solid #ccc !important;
    }
    .chosen-container {
        display: inline-block;
        font-size: 15px;
        position: relative;
        vertical-align: middle;
        min-width: 100% !important;
        margin-left: -1px;
        margin-right: -1px;
    }
    .chosen-container-single .chosen-search input[type="text"] {
        margin-left: 5px;
    }
</style>
@endsection