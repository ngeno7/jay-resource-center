<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width,initial-scale=1.0">
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <!-- <link rel="icon" href="<%= BASE_URL %>favicon.ico"> -->

    <title>RC Directory - Admin</title>
    <!-- Styles -->
    <link rel="stylesheet" href="{{ asset('public/css/main.css') }}">
    <link rel="stylesheet" href="{{ asset('public/css/iconfont.css') }}">
    <link rel="stylesheet" href="{{ asset('public/css/material-icons/material-icons.css') }}">
    <link rel="stylesheet" href="{{ asset('public/css/vuesax.css') }}">
    <link rel="stylesheet" href="{{ asset('public/css/prism-tomorrow.css') }}">
    <link rel="stylesheet" href="{{ asset('public/css/app.css') }}">
  </head>
  <body>
    <noscript>
      <strong>We're sorry but Vuesax - Vuejs Admin Dashboard Template doesn't work properly without JavaScript enabled. Please enable it to continue.</strong>
    </noscript>
    <div id="app">
    </div>

    <!-- <script src="js/app.js"></script> -->
{{--    <script src="{{ asset('/public/js/app.js') }}"></script>--}}
    <script src="{{ asset('public/js/app.js?id=6bce0302a8750f45858839',true) }}"></script>

  </body>
</html>
