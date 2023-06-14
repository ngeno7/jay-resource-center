<?php $__env->startSection('content'); ?>
   <?php echo $__env->make('header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <div id="preloader">
      <div id="status"></div>
   </div>
   <!--Carousel Wrapper-->

   <!--/.Carousel Wrapper-->
   <div class="container-fluid load" id="id-example1">
      <div class="container">
         <div class="row">
           <div class="col-md-9">
           <img src="/images/banners.png" class=" img-fluid img-responsive wow mining-text pulse hidden-sm-down" data-wow-delay="2s">
           </div>
           <div class="col-md-3 hidden-md-down">
             <div class="engageView">
               <h4 class="font-Bd white-text m-l-1">Engage</h4>
               <h4 class="font-Bd white-text text-center" style="margin-top:-8px;margin-bottom:-3px">Your</h4>
               <h4 class="font-Bd white-text text-right">Prospects...</h4>
               <h6 class="white-text m-t-1">GET CUSTOM CONTENT</h6>
               <a href="https://bit.ly/resource-center-video" target="_blank"><h6 class="white-text">• Video</h6></a>
               <a href="https://bit.ly/resource-center-litepaper" target="_blank"><h6 class="white-text">• Whitepapers</h6></a>
               <a href="https://bit.ly/resource-center-webinar" target="_blank"><h6 class="white-text">• Webinars</h6></a>
               <a href="https://bit.ly/resource-center-blogs" target="_blank"><h6 class="white-text">• Blogs</h6></a>
               <a href="https://bit.ly/resource-center-industry-alerts" target="_blank"><h6 class="white-text">• Industry Alerts</h6></a>
               <div class="text-center m-t-1">
               <a href="https://bit.ly/resource-center-litepaper" target="_blank" class="waves-effect waves-light white-text font-Bd startNow">Start Now</a>
               </div>
            </div>
           </div>
            <div class="col-md-12 text-center searchBar">
               <form class="form-inline" method="get" action="<?php echo url('/')?>/search">
                  <h3 class="banner-text"></h3>
                  <div class="form-group">
                     <input type="text" class="form-control keyword-text  banner-search" placeholder="Keyword " name="keyword">
                  </div>
                  <div class="form-group">
                     <select data-placeholder="Topics" class="chosen-select form-control waves-effect" name="content_category" tabindex="2">
                        <option value="" style=""></option>
                        <?php $__currentLoopData = $topics; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $topic): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                           <option value="<?php echo e($topic->industryid); ?>" style=""><?php echo e($topic->industryname); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                     </select>
                  </div>
                  <div class="form-group">
                     <select data-placeholder="Companies" class="chosen-select form-control" name="company">
                        <option value=""></option>
                        <option value="">All Companies</option>
                         <?php $companies=\App\User::where('package','!=','p1')->where('user_status','approved')->orderBy('company_name')->get();foreach($companies as $company){ ?>
                        <option value="<?php echo $company->company_name ?>"><?php echo $company->company_name ?></option>
                         <?php } ?>
                     </select>
                  </div>
                  <div class="form-group">
                     <select data-placeholder="Resources" class="chosen-select form-control" name="resources" tabindex="2">
                        <option value=""></option>
                        <option value="">All Resources</option>
                        <?php $__currentLoopData = $typeOfResource; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                           <option value="<?php echo e($type->resourcetypeid); ?>" style=""><?php echo e($type->resourcetypename); ?></option>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                     </select>
                  </div>
                  <div class="form-group">
                     <button class="btn btn-warning waves-effect waves-light search-button">SEARCH </button>
                     <br/>
                  </div>
               </form>
            </div>
         </div>
      </div>
   </div>
   <div class="container-fluid bgFFF6F2">
      <div class="container"  >
         <div class="row" style="margin:25px 0px">
            <div id="owl-demo2" class="owl-carousel2 owl-theme mdm55" >
               <?php $__currentLoopData = $companies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $company): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                  <div class="item">
                     <div class="text-center">
                        <div class="col-sm-12 col-md-12 item-card">
                           <div class="view overlay ">
                              <img src="<?php echo e($company->company_image); ?>" class="img-responsive brand-logo" style="height:90px" alt="">
                           </div>
                           <br/>
                        </div>
                     </div>
                  </div>
               <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
         </div>
      </div>
   </div>

   <div class="container-fluid ">
      <div class="container "  >
         <div class="row">
            <div class="col-md-12" id="left" >
               <br/>
               <h3 class="font-Bd p-b-1 m-t-2  text-uppercase wow pulse fadeInTop" data-wow-delay="1s">
                  Featured Resources
               </h3>
               <div class="item active">
                  <div class="row text-center">
                     <?php $__currentLoopData = $resources; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $resource): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                     <div class="col-sm-6 col-md-4  col-lg-3 item-card ">
                        <div class="card hoverable w100">
                           <div class="card-image">
                              <div class="view overlay hm-white-slight z-depth-1">
                                 <a href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>">
                                    <img data-src="<?php echo e($resource->image_path); ?>" src="<?php echo e(url('/').'/images/placeholder-white.png'); ?>" class="img-responsive cover-blur">
                                    <img data-src="<?php echo e($resource->image_path); ?>" src="<?php echo e(url('/').'/images/placeholder.png'); ?>" class="img-responsive absolute">
                                 </a>
                              </div>
                           </div>
                           <div class="card-content text-left">
                               <?php $topicLen= strlen($resource->resource_topic); if($topicLen>=30){$resourceTopic=substr($resource->resource_topic,0,30)." ...";}else{$resourceTopic=$resource->resource_topic;} ?>
                              <h5>
                                 <a href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>" class="bold-n-black topic">
                                    <?php echo e($resourceTopic); ?>

                                 </a><br>
                                 <span class="text-nowrap"><span class="card-c-name"><a href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->company_name))).'/'.$resource->user_id); ?>">
                                 <?php $companyNameLenght=strlen($resource->company_name);if($companyNameLenght>=30){echo substr($resource->company_name,0,30).' ...';} else{echo $resource->company_name;}?></a> </span> </span> </h5>
                                 <?php $description=  strip_tags($resource->description)?>
                                 <?php $descriptionLength= strlen($description); if($descriptionLength>=175){$description=substr($description,0,175)." ...";}else{$description=$resource->description;} ?>
                                 <p class="mh90"><?php echo e(strip_tags($description)); ?><a class="rm" href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>"> Read more  <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                           </div>
                        </div>
                        <br>
                     </div>
                     <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                  </div>
               </div>
               <div class="text-center">
                  <a href="<?php echo e(url('/').'/search'); ?>" class="m-x-auto font-Bd  btn btn-warning waves-effect waves-light home-button pt13">Latest Resources</a><br><br>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="container-fluid bgf2f2f2">
      <div class="container "  >
         <div class="row">
            <div class="col-md-12" id="left">
               <br/>

               <h3 class="font-Bd p-b-1 m-t-1  text-uppercase wow pulse fadeInTop" data-wow-delay="1s">
                  Featured Products
               </h3>
               <div class="item active">
                  <div class="row text-center">
                     <?php $__currentLoopData = $products; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $product): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                        <div class="col-sm-6 col-md-4 col-lg-4  item-card ">
                           <div class="card hoverable w100">
                              <div class="card-image">
                                 <div class="view overlay hm-white-slight z-depth-1">
                                    <img data-src="<?php echo e($product->product_img); ?>" src="<?php echo e(url('/').'/images/placeholder-white.png'); ?>" class="img-responsive cover-blur">
                                    <img data-src="<?php echo e($product->product_img); ?>" src="<?php echo e(url('/').'/images/placeholder.png'); ?>" class="img-responsive absolute">                                    <div class="mask waves-effect">
                                       <div class="verticalcenter">
                                          <a href="<?php echo e(url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id); ?>"  class="btn btn-warning waves-effect waves-light"><i class="fa fa-eye pad-r-5" aria-hidden="true" ></i>Quick View</a>
                                       </div>
                                    </div>
                                 </div>
                              </div>
                              <div class="card-content text-left">
                                 <?php $topicLen= strlen($product->name); if($topicLen>=50){$topic=substr($product->name,0,50)." ...";}else{$topic=$product->name;} ?>
                                 <h5><a href="<?php echo e(url('/').'/product-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->name))).'/'.$product->product_id); ?>"
                                        class="bold-n-black"><?php echo e($topic); ?></a>
                                    <br>
                                    <span ><span class="card-c-name">
                                       <a href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$product->user->company_name))).'/'.$product->user_id); ?>">
                                           <?php $company_name_length=strlen($product->user->company_name);
                                           if($company_name_length>=50){echo substr($product->user->company_name,0,50).' ...';}
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
                  </div>
               </div>
               <div class="text-center">
                  <a href="<?php echo e(url('/').'/products'); ?>" class="m-x-auto font-Bd  btn btn-warning waves-effect waves-light home-button pt13">Latest Products</a><br><br>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="container-fluid ">
      <div class="container "  >
         <div class="row">
            <div class="col-md-12" id="left" >
               <br/>

               <h3 class="font-Bd p-b-1 m-t-1  text-uppercase wow pulse fadeInTop" data-wow-delay="1s">
                  Recent Resources
               </h3>
               <div class="item active">
                  <div class="row text-center">
                     <?php $__currentLoopData = $recent_resources; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $resource): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                     <div class="col-sm-6 col-md-6 col-lg-6  item-card ">
                        <!--Image Card-->
                        <div class="card hoverable mt-5 w100">
                           <div class="overlay hm-white-slight">
                              <a href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>">
                                 <img data-src="<?php echo e($resource->image_path); ?>" src="<?php echo e(url('/').'/images/placeholder-white.png'); ?>" class="img-responsive home-media cover-blur" align="left" alt="">
                                 <img data-src="<?php echo e($resource->image_path); ?>" src="<?php echo e(url('/').'/images/placeholder.png'); ?>" class="img-responsive home-media absolute" align="left" alt="">

                              </a>
                           </div>
                           <div class="card-content text-left">
                              <?php $topicLen= strlen($resource->resource_topic); if($topicLen>=50){$resourceTopic=substr($resource->resource_topic,0,50)." ...";}else{$resourceTopic=$resource->resource_topic;} ?>
                              <h5>
                                 <a href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>" class="bold-n-black topic">
                                    <?php echo e($resourceTopic); ?>

                                 </a><br>
                                 <span class="text-nowrap"><span class="card-c-name"><a href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->company_name))).'/'.$resource->user_id); ?>">
                                 <?php $companyNameLenght=strlen($resource->company_name);if($companyNameLenght>=50){echo substr($resource->company_name,0,50).' ...';} else{echo $resource->company_name;}?></a> </span> </span> </h5>
                              <?php $description=  strip_tags($resource->description)?>
                              <?php $descriptionLength= strlen($description); if($descriptionLength>=175){$description=substr($description,0,175)." ...";}else{$description=$resource->description;} ?>
                              <p ><?php echo e(strip_tags($description)); ?><a class="rm" href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>"> Read more  <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                           </div>
                        </div>
                        <br>
                     </div>
                     <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                  </div>
               </div>
               <div class="text-center">
                  <a href="<?php echo e(url('/').'/search'); ?>"  class="m-x-auto font-Bd  btn btn-warning waves-effect waves-light home-button pt13">Latest Media</a><br><br>
               </div>
            </div>
         </div>
      </div>
   </div>

   <div class="container-fluid bgFFF6F2" >
      <div class="container"  >
         <div class="row" style="margin:25px 0px">
            <div id="owl-demo" class="owl-carousel owl-theme mdm55">
               <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                  <div class="item">
                     <div class="text-center">
                        <div class="col-sm-12 col-md-12 item-card">
                           <div class="view overlay ">
                              <img src="<?php echo e($brand->large_logo); ?>" class="img-responsive" style="height: 50px; object-fit: contain;margin: auto" alt="">
                           </div>
                           <br/>
                        </div>
                     </div>
                  </div>
               <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            </div>
         </div>
      </div>
   </div>

   <?php echo $__env->make('modals', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <?php echo $__env->make('scripts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <?php echo $__env->make('footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <script>
       $('#box').click( function () {
           $('.banner').fadeOut(500);
       });
   </script>
   <script> new WOW().init();</script>
   <style>
      h6 {
         font-size: .9rem;
      }
      h4 {
         font-size: 1.4rem;
      }
      .engageView {
         background-color: rgba(37, 154, 196, .8);
         width: 85%;
         margin-top: 10px;
         border-radius: 20px;
         padding:20px
      }
      .startNow {
         background-color: rgb(16 62 78 / 50%);
         padding: 8px;
         padding-left: 30px;
         padding-right: 30px;
         padding-top: 12px;
      }
      .pt13{
          padding-top: 13px
      }
   </style>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.default',['title' => 'Resource Center | Home '], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\hngeno\Projects\resource-center\resources\views/home.blade.php ENDPATH**/ ?>