<?php $__env->startSection('content'); ?>
<?php echo $__env->make('header', \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
    <div class="container-fluid sticky z-depth-1 bgf2f2f2 mtm10">
        <div class="container">
            <div class="row">
                <div class="col-md-12 padding-0">
                    <form class="form-inline mb15" method="get" action="<?php echo e(url('/')); ?>/directories" >
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
                                <input type="text" class="form-control keyword-text product-search h42" placeholder="Find Companies .." name="search" value="<?php echo e($search); ?>">
                            </div>
                            <div class="col-md-3 padding-0">
                                <button class="btn btn-warning waves-effect waves-light search-button-block btn-block h42" >SEARCH </button>
                            </div>
                        </div>
                    </form>
                    <div class="btn-toolbar mtm13">
                        <div class="btn-group btn-group-sm">
                            <button onclick="searchDirectory('A')" class="btn btn-default">A</button>
                            <button onclick="searchDirectory('B')" class="btn btn-default">B</button>
                            <button onclick="searchDirectory('C')" class="btn btn-default">C</button>
                            <button onclick="searchDirectory('D')" class="btn btn-default">D</button>
                            <button onclick="searchDirectory('E')" class="btn btn-default">E</button>
                            <button onclick="searchDirectory('F')" class="btn btn-default">F</button>
                            <button onclick="searchDirectory('G')" class="btn btn-default">G</button>
                            <button onclick="searchDirectory('H')" class="btn btn-default">H</button>
                            <button onclick="searchDirectory('I')" class="btn btn-default">I</button>
                            <button onclick="searchDirectory('J')" class="btn btn-default">J</button>
                            <button onclick="searchDirectory('K')" class="btn btn-default">K</button>
                            <button onclick="searchDirectory('L')" class="btn btn-default">L</button>
                            <button onclick="searchDirectory('M')" class="btn btn-default">M</button>
                            <button onclick="searchDirectory('N')" class="btn btn-default">N</button>
                            <button onclick="searchDirectory('O')" class="btn btn-default">O</button>
                            <button onclick="searchDirectory('P')" class="btn btn-default">P</button>
                            <button onclick="searchDirectory('Q')" class="btn btn-default">Q</button>
                            <button onclick="searchDirectory('R')" class="btn btn-default">R</button>
                            <button onclick="searchDirectory('S')" class="btn btn-default">S</button>
                            <button onclick="searchDirectory('T')" class="btn btn-default">T</button>
                            <button onclick="searchDirectory('U')" class="btn btn-default">V</button>
                            <button onclick="searchDirectory('V')" class="btn btn-default">V</button>
                            <button onclick="searchDirectory('W')" class="btn btn-default">W</button>
                            <button onclick="searchDirectory('X')" class="btn btn-default">X</button>
                            <button onclick="searchDirectory('Y')" class="btn btn-default">Y</button>
                            <button onclick="searchDirectory('Z')" class="btn btn-default">Z</button>
                        </div>
                    </div>
                    <br/>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid bgf2f2f2" >
        <div class="container"  >
            <div class="row">
               <br/>
                <div class="item active">
                    <div class="row text-center">
                        <div class="infinite-scroll directory">
                            <?php $__currentLoopData = $companies; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $company): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <div class="col-sm-6 col-md-4 col-lg-3  item-card ">
                                    <div class="card hoverable w100">
                                        <div class="card-image ">
                                            <div class="view overlay hm-white-slight z-depth-1">
                                                <img data-src="<?php echo e($company->company_image); ?>" src="<?php echo e(url('/').'/public/images/placeholder.png'); ?>" class="img-responsive  object-fit-contain" alt="">
                                                <div class="mask waves-effect">
                                                    <div class="verticalcenter">
                                                        <a class="btn btn-warning waves-effect  waves-light"
                                                            href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$company->company_name))).'/'.$company->uid); ?>"><i class="fa fa-eye pad-r-5" aria-hidden="true" ></i> View Profile</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="card-content text-left mh145">
                                            <h5>
                                                <a class="bold-n-black" href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$company->company_name))).'/'.$company->uid); ?>"><?php $company_length=strlen($company->company_name);if($company_length>=25){echo substr($company->company_name,0,25).' ...';} else{echo $company->company_name;}?></a>
                                            </h5>
                                            <i class="fa fa-envelope m-t-1 orange-text" aria-hidden="true"></i><a href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$company->company_name))).'/'.$company->uid); ?>" class="company-icon-card" ><span><?php echo e(substr($company->email,0,-10)); ?></span><span class="asterick" >*****</span></a><br/>
                                            <?php if(!empty($company->work)): ?>
                                                <div class="mtm10">
                                                    <i class="fa fa-phone orange-text" aria-hidden="true"></i>
                                                    <span class="bfh-phone company-icon-card" data-format="(ddd) ddd-" data-number="<?php echo e($company->work); ?>" ></span><span class="asterick" >****</span>
                                                </div>
                                            <?php endif; ?>

                                            <a class="rm"
                                               href="<?php echo e(url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$company->company_name))).'/'.$company->uid); ?>"> View Profile <i class="fa fa-arrow-right pad-r-5" aria-hidden="true" ></i></a>
                                        </div>
                                    </div>
                                    <br>
                                </div>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                            <div class="pagination mm1" ><?php echo urldecode($companies->links()); ?> </div>
                        </div>
                        <div class="directory_new mh250" ></div>
                    </div>
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
        .btn-group-sm>.btn, .btn-sm {
            padding: 21.4px;
            font-size: .875rem;
            border-radius: .2rem;
            padding-top: 12px;
            padding-right: 25.8px;
            padding-left: 17px;
        }
    </style>
    <script>
        function searchDirectory(value){

            $.post("<?php echo e(url('/')); ?>/search_directory",{search:value,_token: '<?php echo csrf_token(); ?>'},function(data){
                $('.directory').hide();
                $(".directory_new").html(data);
                $(' span.bfh-phone').each(function() {
                    var $phone = $(this);
                    $phone.bfhphone($phone.data());
                });

            });
        }


    </script>
<?php $__env->stopSection(); ?>
<?php echo $__env->make('layout.default',['title' => 'Resource Center | Directories '], \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?><?php /**PATH C:\Users\hngeno\Projects\resource-center\resources\views/directories.blade.php ENDPATH**/ ?>