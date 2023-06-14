<?php $__env->startSection('content'); ?>
   <?php echo $__env->make('header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <div class="visible-xs">
      <div id="preloader">
         <div id="status"></div>
      </div>
   </div>

   <div class="container-fluid">
      <div class="container">
         <div class="row">
            <br/>
            <div class="col-md-12 filterButton padding-0" style="display: none">
               <a href="" class="btn btn-warning btn-block search-option" data-toggle="modal" data-target="#searchModal">Search Option<i class="fa fa-filter pl5" aria-hidden="true"></i></a>
            </div>
            <div class="col-sm-5 col-md-4 col-lg-3 filter left flexcroll padding-0"  id="left1">
               <p></p>
               <form>
                  <?php if(!empty($keyword) or !empty($company) or ($s_date!='min' or $e_date!='max') or !empty($c_type) or !empty($type_resource)  or !empty($c_category)): ?>
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#ySearch" aria-expanded="true">
                                 <span class="glyphicon pull-right glyphicon-minus"></span>
                                 <h5 class="search-topic">Your Search</h5>
                              </a>
                           </h4>
                        </div>
                        <div id="ySearch" class="panel-collapse collapse in" aria-expanded="true">
                           <div class="panel-body">
                              <div class="form-horizontal">
                                 <?php if(!empty($keyword)): ?>
                                    <div class="alert alert-warning alert-label">
                                       <button class="close icon-btn" id="clearKeyword"><i class="fa fa-times" aria-hidden="true" ></i></button >
                                       <strong class="bold-n-white">Keyword</strong>
                                    </div>
                                 <?php endif; ?>
                                 <?php if(!empty($company)): ?>
                                    <div class="alert alert-warning alert-label">
                                       <button class="close icon-btn" id="clearCompany"><i class="fa fa-times" aria-hidden="true" ></i></button >
                                       <strong class="bold-n-white">Company Name</strong>
                                    </div>
                                 <?php endif; ?>
                                 <?php if($s_date!='min' or $e_date!='max'): ?>
                                    <div class="alert alert-warning alert-label">
                                       <button class="close icon-btn" id="clearDate"><i class="fa fa-times" aria-hidden="true" ></i></button >
                                       <strong class="bold-n-white">Date</strong>
                                    </div>
                                 <?php endif; ?>
                                 <?php if(!empty($c_type)): ?>
                                    <div class="alert alert-warning alert-label">
                                       <button class="close icon-btn" id="clearContentType"><i class="fa fa-times" aria-hidden="true" ></i></button >
                                       <strong class="bold-n-white">Content Type</strong>
                                    </div>
                                 <?php endif; ?>
                                 <?php if(!empty($type_resource)): ?>
                                    <div class="alert alert-warning alert-label">
                                       <button class="close icon-btn" id="clearTypeOfResource"><i class="fa fa-times" aria-hidden="true" ></i></button >
                                       <strong class="bold-n-white">Type Of Resource</strong>
                                    </div>
                                 <?php endif; ?>
                                 <?php if(!empty($c_category)): ?>
                                    <div class="alert alert-warning alert-label">
                                       <button class="close icon-btn" id="clearContentCategory"><i class="fa fa-times" aria-hidden="true" ></i></button >
                                       <strong class="bold-n-white">Content Category</strong>
                                    </div>
                                 <?php endif; ?>
                              </div>
                           </div>
                        </div>
                     </div>
                  <?php endif; ?>
                  <div class="panel-group">
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#one" aria-expanded="true">
                                 <span class="glyphicon pull-right glyphicon-minus"></span>
                                 <h5 class="search-topic">Search By Keyword</h5>
                              </a>
                           </h4>
                        </div>
                        <div id="one" class="panel-collapse collapse in" aria-expanded="true">
                           <div class="panel-body">
                              <div class="input-group add-on m-left-minus-3" >
                                 <div class="input-group-btn">
                                    <button class="btn btn-warning" id="k_search"><i class="fa fa-search"></i></button>
                                 </div>
                                 <input type="text" class="form-control search-input" placeholder="Enter Keyword" name="keyword" id="keyword" value="<?php echo e($keyword); ?>" style="">
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#two" aria-expanded="true">
                                 <span class="glyphicon pull-right glyphicon-minus"></span>
                                 <h5 class="search-topic">Company Name</h5>
                              </a>
                           </h4>
                        </div>
                        <div id="two" class="panel-collapse collapse in" aria-expanded="true">
                           <div class="panel-body">
                              <div class="input-group add-on m-left-minus-3" >
                                 <div class="input-group-btn">
                                    <button class="btn btn-warning" id="c_search" ><i class="fa fa-search"></i></button>
                                 </div>
                                 <input type="text" class="form-control search-input" placeholder="Company Name" name="company" id="company" value="<?php echo e($company); ?>" >
                              </div>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#three" aria-expanded="true">
                                 <span class="glyphicon pull-right glyphicon-minus"></span>
                                 <h5 class="search-topic">Content Categories</h5>
                              </a>
                           </h4>
                        </div>
                        <div id="three" class="panel-collapse collapse in" aria-expanded="true">
                           <div class="panel-body pt10" id="contentCategoryClick" >
                              <?php if(empty($c_category)): ?>
                                 <?php $__currentLoopData = $content_category_empty; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div class="checkbox-background">
                                       <input type="checkbox" class="filled-in categories" id="<?php echo e($row->industryid.'industry'); ?>" name="categories[]" value="<?php echo e($row->industryid); ?>" <?php if(in_array( $row->industryid, $c_category_value)){ echo 'checked';} ?>>
                                       <label class="label-style mw200" for="<?php echo e($row->industryid.'industry'); ?>" ><?php echo e($row->industryname); ?></label>
                                       <span class=" pull-right label-value" ><?php echo e($row->total); ?></span>
                                    </div>
                                 <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                              <?php else: ?>
                                 <?php $__currentLoopData = $content_category_non_empty; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                    <div class="checkbox-background">
                                       <input type="checkbox" class="filled-in categories" id="<?php echo e($row->industryid.'industry'); ?>" name="categories[]" value="<?php echo e($row->industryid); ?>" <?php if(in_array( $row->industryid, $c_category_value)){ echo 'checked';} ?>>
                                       <label class="label-style" style="max-width: 200px;" for="<?php echo e($row->industryid.'industry'); ?>" ><?php echo e($row->industryname); ?> </label>
                                       <span class=" pull-right label-value" ><?php echo e($row->total); ?></span>
                                    </div>
                                 <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                              <?php endif; ?>
                              <input type="hidden" id="content_category">
                              <p class="seeall" data-toggle="modal" data-target="#categoriesModal"><a href="#">See All</a></p>
                           </div>
                        </div>
                     </div>
                     <div class="panel panel-default">
                        <div class="panel-heading">
                           <h4 class="panel-title">
                              <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#four" aria-expanded="true">
                                 <span class="glyphicon pull-right glyphicon-minus"></span>
                                 <h5 class="search-topic">Content Type</h5>
                              </a>
                           </h4>
                        </div>
                        <div id="four" class="panel-collapse collapse in" aria-expanded="true">
                           <div class="panel-body pt10" id="brandClick">
                              <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                 <div class="checkbox-background">
                                    <input type="checkbox" class="filled-in brands" id="<?php echo e($brand->branduid); ?>" name="categories[]" value="<?php echo e($brand->brandid); ?>" <?php if(in_array($brand->brandid,$c_type_value)){echo "checked";} ?>>
                                    <label class="label-style " for="<?php echo e($brand->branduid); ?>"><?php echo e($brand->brandname); ?></label>
                                    <span class="pull-right label-value"><?php echo e($brand->resource($brand->brandid)); ?></span>
                                 </div>
                              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                              <input type="hidden" id="brand">
                           </div>
                        </div>
                     </div>
                     <div class="sticky">
                        <div class="panel panel-default" id="sidebar">
                           <div class="panel-heading">
                              <h4 class="panel-title">
                                 <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#six" aria-expanded="true">
                                    <span class="glyphicon pull-right glyphicon-minus"></span>
                                    <h5 class="search-topic">Select Date</h5>
                                 </a>
                              </h4>
                           </div>
                           <div id="six" class="panel-collapse collapse in" aria-expanded="true">
                              <div class="panel-body">
                                 <div class="input-group add-on m-left-minus-3">
                                    <div class="input-group-btn">
                                       <button class="btn btn-warning" id="date_search"><i class="fa fa-search"></i></button>
                                    </div>
                                    <input type="text" class="from_date form-control datepicker s-date-input" placeholder="Start date" contenteditable="false" name="s_date" id="s_date" value="<?php if($s_date=='min'){echo '';}else{ echo $s_date;} ?>"  >
                                    <input type="text" class="to_date form-control datepicker e-date-input" placeholder="End date" contenteditable="false"   name="e_date" id="e_date" value="<?php if($e_date=='max'){echo '';}else{ echo $e_date;} ?>">
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div class="panel panel-default">
                           <div class="panel-heading">
                              <h4 class="panel-title">
                                 <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#five" aria-expanded="true">
                                    <span class="glyphicon pull-right glyphicon-minus"></span>
                                    <h5 class="search-topic">Type of resource</h5>
                                 </a>
                              </h4>
                           </div>
                           <div id="five" class="panel-collapse collapse in" aria-expanded="true">
                              <div class="panel-body pt10" id="typeOfResourceClick">
                                 <?php $__currentLoopData = $typeOfResource; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                 <div class="checkbox-background">
                                    <input type="checkbox" class="filled-in typeOfResource" id="<?php echo e($type->resourcetypeid); ?>" name="resources[]" value="<?php echo e($type->resourcetypeid); ?>" <?php if(in_array($type->resourcetypeid,$resource_value)){echo "checked";}?>>
                                    <label class="label-style " for="<?php echo e($type->resourcetypeid); ?>" ><?php echo e($type->resourcetypename); ?></label>
                                    <span class=" pull-right label-value"  ><?php echo e($type->resource($type->resourcetypeid)); ?></span>
                                 </div>
                                  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                                 <input type="hidden" id="type_of_resource">
                              </div>
                           </div>
                        </div>
                        <br/>
                     </div>
                  </div>
               </form>
            </div>
            <div class="col-lg-9 col-md-8 col-sm-7 padding-0"  id="right1">
               <h5 class="search-result1">Search Results <?php $count=$resources->total(); echo '( '.$count.' )';?></h5>
               <?php if($count==0): ?>
                  <hr/>
                  <h4 class="text-center">No Record Found</h4>
               <?php endif; ?>
               <div class="item active m-l-25">
                  <div class="row text-center ">
                     <div class="infinite-scroll">
                        <?php $__currentLoopData = $resources; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $resource): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                           <div class="col-sm-6 col-md-4  col-lg-4 item-card ">
                              <div class="card hoverable w100">
                                 <div class="card-image">
                                    <div class="view overlay hm-white-slight z-depth-1">
                                       <a href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>">
                                          <img data-src="<?php echo e($resource->image_path); ?>" src="<?php echo e(url('/').'/public/images/placeholder-white.png'); ?>" class="img-responsive cover-blur">
                                          <img data-src="<?php echo e($resource->image_path); ?>" src="<?php echo e(url('/').'/public/images/placeholder.png'); ?>" class="img-responsive absolute">
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
                                        <?php $company_length=strlen($resource->company_name);if($company_length>=24){echo substr($resource->company_name,0,24).' ...';} else{echo $resource->company_name;}?></a> </span> </span> </h5>
                                    <?php $description=  strip_tags($resource->description)?>
                                    <?php $description_length= strlen($description); if($description_length>=200){$description=substr($description,0,200)." ...";}else{$description=$resource->description;} ?>
                                    <p class="mh120"><?php echo e(strip_tags($description)); ?><a class="rm" href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>"> Read more  <i class="fa fa-arrow-right pad-r-5" aria-hidden="true"></i></a></p>
                                 </div>
                              </div>
                              <br>
                           </div>
                        <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        <div class="pagination"> <?php echo urldecode($resources->appends(['keyword'=>$keyword,'company'=>$company,'s_date'=>$s_date,'e_date'=>$e_date,'content_type'=>$c_type,'resources'=>$type_resource,'content_category'=>$c_category])->links()); ?></div>
                     </div>
                  </div>
               </div>

            </div>
         </div>
      </div>
   </div>
   <div class="loading" style="display: none">Loading&#8230;</div>
   <div class="modal fade" id="searchModal" role="dialog">
      <div class="modal-dialog" style="margin:0px">
         <div class="modal-content">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal" style="font-size: 20px;padding: 7px 20px">&times;</button>
               <h4 class="modal-title" >Search</h4>
            </div>
            <form>
               <div class="panel-group">
                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">
                           <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#one" aria-expanded="true">
                              <span class="glyphicon pull-right glyphicon-minus"></span>
                              <h5 class="search-topic">Search By Keyword</h5>
                           </a>
                        </h4>
                     </div>
                     <div id="one" class="panel-collapse collapse in" aria-expanded="true">
                        <div class="panel-body">
                           <div class="input-group add-on m-left-minus-3" >
                              <div class="input-group-btn">
                                 <button class="btn btn-warning" id="k_search"><i class="fa fa-search"></i></button>
                              </div>
                              <input type="text" class="form-control search-input" placeholder="Enter Keyword" name="keyword" id="keyword" value="<?php echo e($keyword); ?>">
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">
                           <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#two" aria-expanded="true">
                              <span class="glyphicon pull-right glyphicon-minus"></span>
                              <h5 class="search-topic">Company Name</h5>
                           </a>
                        </h4>
                     </div>
                     <div id="two" class="panel-collapse collapse in" aria-expanded="true">
                        <div class="panel-body">
                           <div class="input-group add-on m-left-minus-3" >
                              <div class="input-group-btn">
                                 <button class="btn btn-warning" id="c_search" ><i class="fa fa-search"></i></button>
                              </div>
                              <input type="text" class="form-control search-input" placeholder="Company Name" name="company" id="company" value="<?php echo e($company); ?>" style="border: 1px solid #ccc;border-radius: 2px;height: 2.25rem;margin-top: 6px;width: 100%" >
                           </div>
                        </div>
                     </div>
                  </div>
                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">
                           <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#three" aria-expanded="true">
                              <span class="glyphicon pull-right glyphicon-minus"></span>
                              <h5 class="search-topic">Content Categories</h5>
                           </a>
                        </h4>
                     </div>
                     <div id="three" class="panel-collapse collapse in" aria-expanded="true">
                        <div class="panel-body" id="contentCategoryClickModal" style="padding-top: 10px;">
                            <?php if(empty($c_category)): ?>
                              <?php $__currentLoopData = $content_category_empty; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                 <div class="checkbox-background">
                                    <input type="checkbox" class="filled-in categories" id="<?php echo e($row->industryid.'industry'); ?>" name="categories[]" value="<?php echo e($row->industryid); ?>" <?php if(in_array( $row->industryid, $c_category_value)){ echo 'checked';  }?>>
                                    <label class="label-style" style="max-width: 200px;" for="<?php echo e($row->industryid.'industry'); ?>" ><?php echo e($row->industryname); ?></label>
                                    <span class=" pull-right label-value" ><?php echo e($row->total); ?></span>
                                 </div>
                              <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <?php else: ?>
                               <?php $__currentLoopData = $content_category_non_empty; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                 <div class="checkbox-background">
                                    <input type="checkbox" class="filled-in categories" id="<?php echo e($row->industryid.'industry'); ?>" name="categories[]" value="<?php echo e($row->industryid); ?>" <?php if(in_array( $row->industryid, $c_category_value)){ echo 'checked';  } ?>>
                                    <label class="label-style" style="max-width: 200px;" for="<?php echo e($row->industryid.'industry'); ?>" ><?php echo e($row->industryname); ?> </label>
                                    <span class=" pull-right label-value" ><?php echo e($row->total); ?></span>
                                 </div>
                               <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                           <?php endif; ?>
                           <input type="hidden" id="content_category">
                           <p style="font-weight: bold;text-align: center;margin-bottom: 5px" ><a href="#" id="seeAll">See All</a></p>
                        </div>
                     </div>
                  </div>
                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">
                           <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#four" aria-expanded="true">
                              <span class="glyphicon pull-right glyphicon-minus"></span>
                              <h5 class="search-topic">Content Type</h5>
                           </a>
                        </h4>
                     </div>
                     <div id="four" class="panel-collapse collapse in" aria-expanded="true">
                        <div class="panel-body" id="brandClickModal"  style="padding-top: 10px;">
                           <?php $__currentLoopData = $brands; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $brand): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                           <div class="checkbox-background">
                              <input type="checkbox" class="filled-in brands" id="<?php echo e($brand->branduid); ?>" name="categories[]" value="<?php echo e($brand->brandid); ?>" <?php if(in_array($brand->brandid,$c_type_value)){echo "checked";} ?>>
                              <label class="label-style " for="<?php echo e($brand->branduid); ?>"><?php echo e($brand->brandname); ?></label>
                              <span class="pull-right label-value"><?php echo e($brand->resource($brand->brandid)); ?></span>
                           </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                           <input type="hidden" id="brand">
                        </div>
                     </div>
                  </div>
                  <div class="panel panel-default">
                     <div class="panel-heading">
                        <h4 class="panel-title">
                           <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#five" aria-expanded="true">
                              <span class="glyphicon pull-right glyphicon-minus"></span>
                              <h5 class="search-topic">Type of resource</h5>
                           </a>
                        </h4>
                     </div>
                     <div id="five" class="panel-collapse collapse in" aria-expanded="true">
                        <div class="panel-body" id="typeOfResourceClickModal" style="padding-top: 10px;">
                            <?php $__currentLoopData = $typeOfResource; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                           <div class="checkbox-background">
                              <input type="checkbox" class="filled-in typeOfResource" id="<?php echo e($type->resourcetypeid); ?>" name="resources[]" value="<?php echo e($type->resourcetypeid); ?>" <?php if(in_array($type->resourcetypeid,$resource_value)){echo "checked";}?>>
                              <label class="label-style" for="<?php echo e($type->resourcetypeid); ?>" ><?php echo e($type->resourcetypename); ?></label>
                              <span class=" pull-right label-value"><?php echo e($type->resource($type->resourcetypeid)); ?></span>
                           </div>
                           <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                           <input type="hidden" id="type_of_resource">
                        </div>
                     </div>
                  </div>
                  <div class="panel panel-default" style="display: none">
                     <div class="panel-heading">
                        <h4 class="panel-title">
                           <a class="accordion-toggle" data-toggle="collapse" data-parent="#accordion" href="#six" aria-expanded="true">
                              <span class="glyphicon pull-right glyphicon-minus"></span>
                              <h5 class="search-topic">Select Date</h5>
                           </a>
                        </h4>
                     </div>
                     <div id="six" class="panel-collapse collapse in" aria-expanded="true" style="display: none">
                        <div class="panel-body">
                           <div class="input-group add-on m-left-minus-3" >
                              <div class="input-group-btn">
                                 <button class="btn btn-warning" id="date_search"><i class="fa fa-search"></i></button>
                              </div>
                              <input type="date" class="form-control" placeholder="Start date" contenteditable="false" name="s_date" id="s_date" style="margin-top:6px;float: left;border: 1px solid #ccc;height:1.8rem;width: 38%" value="<?php if($s_date=='min'){echo '';}else{ echo $s_date;} ?>"  >
                              <input type="date" class="to_date form-control" placeholder="End date" contenteditable="false" style="margin-top:6px;float: left;border: 1px solid #ccc;height: 1.8rem;width: 38%;;border-top-right-radius: 2px;border-bottom-right-radius: 2px"  name="e_date" id="e_date" value="<?php if($e_date=='max'){echo '';}else{ echo $e_date;} ?>">
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   </div>
   <div class="modal fade" id="categoriesModal" role="dialog">
      <div class="modal-dialog diologSize modal-lg mt50">
         <div class="modal-content m-x-auto">
            <div class="modal-header">
               <button type="button" class="close" data-dismiss="modal">&times;</button>
               <h4 class="modal-title" >Content Categories</h4>
            </div>
            <div class="col-md-12"><br/></div>
             <?php $__currentLoopData = $content_category_query; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
            <div class="col-md-6 mt5" id="contentCategoryModalClick">
               <input type="checkbox"  class="filled-in" id="<?php echo e($row->industryid.'modal'); ?>" name="categories[]" value="<?php echo e($row->industryid); ?>"
                       <?php if(in_array( $row->industryid, $c_category_value)){echo 'checked';}?>>
               <label class="label-style label-width" for="<?php echo e($row->industryid.'modal'); ?>"><?php echo e($row->industryname); ?> </label>
               <span class="badge pull-right"><?php echo e($row->total); ?></span>
               <br/>
            </div>
            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
            <input type="hidden" id="content_category_modal"/>
            <div class="col-md-12"><br/></div>
            <div class="modal-footer" style="border-top: 1px solid #eee">
               <br/> <br/>
               <button class="btn btn-warning btn-block" id="catSubmit">Submit</button>
            </div>
         </div>
      </div>
   </div>
   <?php echo $__env->make('modals', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <?php echo $__env->make('scripts', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
   <?php echo $__env->make('footer', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>

   <script type="text/javascript">
       $(function(){

           $(".sticky").sticky({
               topSpacing: 85,
               zIndex:2,
               stopper: "#footer"
           });

       });
   </script>
<?php $__env->stopSection(); ?>

<?php echo $__env->make('layout.default',['title' => 'Search | Resource Center'], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\hngeno\Projects\resource-center\resources\views/search.blade.php ENDPATH**/ ?>