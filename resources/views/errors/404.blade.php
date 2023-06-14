
<?php $title='Resource Center | 404'?>
@extends('layout.default',['title' => $title])
<div id="preloader" style=""> <div id="status" style=""></div></div>
@section('content')
@include('header')
<link href="{{url('/')}}/public/css/404.css" rel="stylesheet">
<style>
input[type="text"]:focus, textarea:focus, textarea.form-control:focus {
    outline: 0;
    background-color: transparent;
       border: 0px !important;
    -moz-box-shadow: none;
    -webkit-box-shadow: none;
    box-shadow: none;
}
</style>
  		<canvas id="canvas"></canvas>
        <section class="error">
            <!-- Content -->
            <div class="error__content">
                <div class="error__message message">
                    <h1 class="message__title">Page Not Found</h1>
                    <p class="message__text">We're sorry, the page you were looking for isn't found here. The link you followed may either be broken or no longer exists. Please try again, or take a look at our site.
                    </p>
                </div>
                <div class="error__nav e-nav">
                    <a href="{{url('/')}}" class="e-nav__link"></a>
                    <form action="/search" class="e-nav__form">
                        <input type="text" placeholder="Search" name="keyword" class="e-nav__search" style="text-align: center">
                    </form>
                </div>
            </div>

        </section>
@include('modals')
@include('scripts')
@include('footer')
 <script src="{{url('/')}}/public/js/404.js"></script>
 @endsection
