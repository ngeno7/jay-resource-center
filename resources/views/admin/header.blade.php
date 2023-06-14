<?php
$value= basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
?>
<!--Double Navigation-->
<header>
   <!-- Sidebar navigation -->
   <ul id="slide-out" class="side-nav fixed custom-scrollbar m-0 p-0">
      <!-- Logo -->
      <li style="list-style-type: none">
         <div class="logo-wrapper sn-ad-avatar-wrapper">
            <div class="rgba-stylish-strong ">
               <p class="user white-text" style="margin-left: 20px;font-size: 20px;">Admin<br>Resource Center
               </p>
            </div>
         </div>
      </li>
      <!--/. Logo -->
      <!-- Side navigation links -->
      <li>
         <ul class="collapsible collapsible-accordion m-0 p-0 p-t-1">
            <li><a href="<?php echo url('/')?>/admin/dashboard" class="collapsible-header waves-effect arrow-r <?php if($value=='dashboard') {?>active<?php } ?>"><i class="fa fa-home"></i> Dashboard</a></li>
            <li class="">
               <a class="collapsible-header waves-effect arrow-r <?php if($value=='premium_members' or $value=='gold_members' or $value=='free_members' or $value=='unapproved_members' or $value=='disabled_members') {?>active<?php } ?>"><i class="fa fa-users"></i> Members<i class="fa fa-angle-down rotate-icon"></i></a>
               <div class="collapsible-body">
                  <ul class="m-0 p-0">
                     <li><a href="<?php echo url('/')?>/admin/dashboard"  class="waves-effect <?php if($value=='premium_members') {?>active<?php } ?>">All members</a> </li>
                     <li><a href="<?php echo url('/')?>/admin/dashboard"  class="waves-effect <?php if($value=='gold_members') {?>active<?php } ?>">Approved members</a> </li>
                     <li><a href="<?php echo url('/')?>/admin/dashboard"  class="waves-effect <?php if($value=='free_members') {?>active<?php } ?>">Unapproved members</a> </li>
                  </ul>
               </div>
            </li>
            <li><a href="<?php echo url('/')?>/admin/dashboard" class="collapsible-header waves-effect arrow-r <?php if($value=='dashboard') {?>active<?php } ?>"><i class="fa fa-users"></i> Subscribers</a></li>


            <li><a  href="#" class="collapsible-header waves-effect arrow-r" onclick="adminLogout()"><i class="fa fa-sign-out"></i> Logout</a> </li>
         </ul>
      </li>
      <!--/. Side navigation links -->
   </ul>
   <!--/. Sidebar navigation -->
   <nav class="navbar navbar-fixed-top scrolling-navbar double-nav">
      <!-- SideNav slide-out button -->
      <div class="float-xs-left">
         <a href="#" data-activates="slide-out" class="button-collapse"><i class="fa fa-bars"></i></a>
      </div>
      <ul class="nav navbar-nav float-xs-right">
         <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" type="button" id="dropdownMenu1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i class="fa fa-user"></i>My Profile</a>
            <div class="dropdown-menu dropdown-primary dd-right" aria-labelledby="dropdownMenu1" data-dropdown-in="fadeIn" data-dropdown-out="fadeOut">
               <a class="dropdown-item" href="#" onclick="adminLogout()">Logout</a>
            </div>
         </li>
      </ul>
   </nav>
   <!--/.Navbar-->
</header>
<!--/Double Navigation-->