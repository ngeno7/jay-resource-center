

@php $title='Resource Center | '. 'Edit Product' @endphp
@php
    if($product->product_img!=null){
        $image=$product->product_img;
    }else{
        $image=url("/")."/public/images/upload_box.png";
    }
@endphp
@extends('layout.default',['title' => $title])
@section('content')
@include('header')
<div id="preloader" style=""> <div id="status" style=""></div></div>
<div class="container-fluid">
   <div class="container">
  <div class="row">
    <h2 class="font-weight-bold"> <a href="javascript:history.back()" class="btn btn-warning"><span><i class="fa fa-arrow-circle-left" aria-hidden="true" style="padding-right: 10px"></i>Back</span></a></h2>
    <div class="col-lg-offset-2 col-lg-8">
     <div class="controls">
     <form class="form-group" method="post" action="<?php echo url('/')?>/ajax/edit_product" id="edit-product" enctype="multipart/form-data">
           <div class="col-md-4 col-lg-4" style="margin-top: 22px">
              <h3 style="">Edit Product</h3>
              <input type="file" name="image" id="image" class="product"><br/>
           </div>
           <div class="col-md-8 col-lg-8"  >
              <label class="form-label" style="margin-top: 32px">Product Name</label>
              <input class="form-control" type="text" name="product_name" placeholder="Product Name" value="{{$product->name}}"><br/>
              <input class="form-control" type="hidden" name="product_id" placeholder="Product Name" value="{{$product->product_id}}">
              <label class="form-label">Price</label>
              <input class="form-control" type="text" name="price" placeholder="Price" value="{{$product->price}}">
              <br/>
              <label class="form-label">Quantity</label>
              <input class="form-control" type="number" name="quantities"  placeholder="Quantity"  value="{{$product->quantity}}">
              <br/>
              <label class="form-label" style="margin-top: 5px">Category</label>
                <select class="mdb-select"  name="category">
                 <option disabled>Select Categories</option>
                 @if (Session::has('user_session'))
                  @foreach($categories as $category)
                   <optgroup label="{{$category->name}}">
                     @foreach($category->sub_category as $row)
                        @if(in_array($row->category_id,$member_categories))
                          <option value="{{$row->category_id}}" @if($row->category_id==$product->category_id) {{"Selected"}} @endif>{{$row->name}}</option>
                        @endif
                     @endforeach
                   </optgroup>
                  @endforeach
                 @endif
                </select>
          <input class="form-control" type="hidden" name="token" id="token" value="">
           </div>
           <div class="col-md-12">
              <label class="form-label">Description</label>
              <textarea class="form-control" rows="7" name="description"  placeholder="Description">{{$product->description}}</textarea>
              <br/>
              <h3>Details and specs (Optional)</h3>
           </div>
           <div class=" form-group" style="margin-bottom: -5px;">
              <div class="">
                 <div class="controls">
                 @foreach($product_features as $feature)
                     <div class="entry form-inline form-group col-sm-12">
                        <input class="form-control" name="feature[]" type="text" placeholder="Feature" value="{{$feature->feature}}" style="width: 310px" />
                        <input class="form-control" name="value[]" type="text" placeholder="Value" value="{{$feature->value}}" style="width: 310px" />
                        <button class="btn btn-danger btn-remove" type="button">
                        <span class="glyphicon glyphicon-trash"></span>
                        </button>
                     </div>
                 @endforeach
                    <div class="entry form-inline form-group col-sm-12">
                       <input class="form-control" name="feature[]" type="text" placeholder="Feature" style="width: 310px" />
                       <input class="form-control" name="value[]" type="text" placeholder="Value" style="width: 310px" />
                       <button class="btn btn-success btn-add" type="button">
                       <span class="glyphicon glyphicon-plus"></span>
                       </button>
                    </div>
                 </div>
              </div>
           </div>
        </form>
        <div class="col-md-12">
           <button class="btn btn-outline-primary btn-block waves-effect" style="" id="edit_product_btn">Edit Product</button>
           <br/>
        </div>
     </div>
    </div>
  </div>
</div>
</div>
@include('modals')
@include('scripts')
@include('footer')
 <script>
    $('[class^=product][type="file"]').ezdz({
          text:"<img src='{{$image}}'/>"
        }  );
 </script>
 <script>

     $('#edit_product_btn').click(function(){
         if ($('#edit-product').valid()) {
             $('#edit-product').submit();
         }
     });

     $("#edit-product").validate({
         rules:{
             product_name:{required:true}
         },
         messages:{
             product_name:{required:"Please enter a product name"}
         },
         submitHandler:function(form){
             $("#edit_product_btn").attr('disabled',true);
             $("#add_product_btn").html('Loading ...');
             var formData = new FormData($("#edit-product")[0]);
             $.ajax({
                 url:"<?php echo url('/')?>/ajax/edit_product",
                 method:'post',
                 data:formData,
                 success: function(data) {
                     $("#edit_product_btn").attr('disabled',false);
                     $("#edit_product_btn").html('Edit Product');
                     if (data=='Invalid Credentials!') {
                         toastr["error"](data);
                     }else{
                         toastr["success"](data);

                     }

                 },
                 error:function(){

                 },
                 contentType: false,
                 processData: false

             });
         }
     });
 </script>
@endsection