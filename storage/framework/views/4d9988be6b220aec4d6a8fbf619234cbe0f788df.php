<?php $__env->startSection('content'); ?>
<?php echo $__env->make('header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<div id="preloader"> <div id="status"></div></div>
<div class="container-fluid sticky z-depth-1 bgf2f2f2 mtm10">
   <div class="container">
      <div class="row">
         <div class="col-md-12 padding-0">
            <form class="form-inline mb15" method="get" action="<?php echo e(url('/')); ?>/products" >
               <h3 class="banner-text"></h3>
               <br/>
               <div class="form-group">
                 <div class="col-md-3 padding-0">
                   <select data-placeholder="Select Topics" class="chosen-select form-control" name="category" >
                      <option value=""></option>
                      <option value="" selected="selected">All Categories</option>
                      <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                       <optgroup label="<?php echo e($category->name); ?>">
                          <?php $__currentLoopData = $category->sub_category; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                              <option value="<?php echo e($row->category_id); ?>" <?php if($category_id==$row->category_id): ?> selected="selected" <?php endif; ?>><?php echo e($row->name); ?></option>
                          <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                       </optgroup>
                      <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                   </select>
                 </div>
                 <div class="col-md-6 padding-0">
                   <input type="text" class="form-control keyword-text product-search h42" placeholder="Find Products .." name="search" value="<?php echo e($search); ?>">
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
           <h5 class="search-result1 mtm10">Search Results <?php $count=$products->total(); echo '( '.$count.' )';?></h5>
           <div class="infinite-scroll">
           <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
               <div class="col-sm-6 col-md-4 col-lg-3 item-card text-center">
                   <div class="card hoverable w100">
                       <div class="card-image">
                           <div class="view overlay hm-white-slight z-depth-1">
                               <img data-src="<?php echo e($product->product_img); ?>" src="<?php echo e(url('/').'/public/images/placeholder-white.png'); ?>" class="img-responsive cover-blur">
                               <img data-src="<?php echo e($product->product_img); ?>" src="<?php echo e(url('/').'/public/images/placeholder.png'); ?>" class="img-responsive absolute">
                               <div class="mask waves-effect">
                                   <div class="verticalcenter">
                                       <a href="<?php echo e(url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id); ?>"  class="btn btn-warning waves-effect waves-light"><i class="fa fa-eye pad-r-5" aria-hidden="true" ></i>Quick View</a>
                                   </div>
                               </div>
                           </div>
                       </div>
                       <div class="card-content text-left">
                           <?php $topicLen= strlen($product->name); if($topicLen>=30){$topic=substr($product->name,0,30)." ...";}else{$topic=$product->name;} ?>
                           <h5><a href="<?php echo e(url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id); ?>"
                                  class="bold-n-black"><?php echo e($topic); ?></a>
                               <br>
                               <span ><span class="card-c-name">
                                       <a href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->user->company_name))).'/'.$product->user_id); ?>">
                                           <?php $company_name_length=strlen($product->user->company_name);
                                           if($company_name_length>=30){echo substr($product->user->company_name,0,25).' ...';}
                                           else{echo $product->user->company_name;}?>
                                       </a>
                                   </span>
                               </span>
                           </h5>
                           <?php $description= strip_tags($product->description)?>
                           <?php $descriptionLength= strlen($description); if($descriptionLength>=105){$description=substr($description,0,80)." ...";}else{$description=$product->description;} ?>
                           <p class="mh60"><?php echo e($description); ?><a class="rm" href="<?php echo e(url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id); ?>" >Read more  <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                           <button class="btn btn-warning btn-block" onclick="request_demo('<?php echo e($product->user_id); ?>')">Quote / Info</button>
                       </div>
                   </div>
                  <br>
               </div>
               <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
               <div class="pagination" > <?php echo urldecode($products->appends(['search'=>$search,'category'=>$category_id])->links()); ?> </div>
                    <?php if(!$products->count()): ?>
                     <h2 class="text-center" style="margin:80px">No Products</h2>
                    <?php endif; ?>
               </div>
            </div>
          <br/>
      </div>
   </div>
</div>

<?php echo $__env->make('modals', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('scripts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
<?php echo $__env->make('footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
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
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.default',['title' => 'Products | Resource Center'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\hngeno\Projects\resource-center\resources\views/products.blade.php ENDPATH**/ ?>