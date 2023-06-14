<!DOCTYPE html>
<html lang="en">
   <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
      <meta name="apple-mobile-web-app-capable" content="yes" />
      <meta name="mobile-web-app-capable" content="yes">
      <meta http-equiv="x-ua-compatible" content="ie=edge">
      <meta name="csrf-token" content="{{ csrf_token() }}">
      {!! SEO::generate() !!}
      <link rel="shortcut icon" type="image/png" href=""/>

      <!-- Material Design Icons -->
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">

      <!-- Bootstrap Font-awesome CDN -->
      <link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0-rc2/css/bootstrap-glyphicons.css" rel="stylesheet">
      <link href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.3/css/font-awesome.min.css" rel="stylesheet">

      <!-- Font Awesome -->
      <link rel="stylesheet" href="/css/font-awesome.min.css">

      <!-- Google Font -->
      <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">

      <!-- Bootstrap Core CSS -->
      <link href="/css/bootstrap.min.css" rel="stylesheet">

      <!-- Bootstrap Css-->
      <link href="/css/bootstrap_5_8_17.css" rel="stylesheet">

      <!-- Chosen plugin CSS -->
      <link href="/css/bootstrap-chosen.css" rel="stylesheet">

      <!-- Custom CSS -->
      <link href="/css/styles_5_8_17.css" rel="stylesheet">

      <!-- DatePicker  Css -->
      <link rel="stylesheet" type="text/css" href="/css/datepicker.css" />

      <!-- Profile Image Select Plugin -->
      <link rel="stylesheet" type="text/css" href="/css/jquery.ezdz.min.css" />

      <!-- Bootstrap Icons -->
	  <link href="https://netdna.bootstrapcdn.com/font-awesome/3.0.2/css/font-awesome.css" rel="stylesheet">

       <!-- Owl Carousel Theme CSS -->
      <link href="/css/owl.theme.css" rel="stylesheet">

       <!-- Owl Carousel  CSS -->
      <link href="/css/owl.carousel.css" rel="stylesheet">

       <!-- File Input  CSS -->
      <link href="/css/fileinput.css" rel="stylesheet">

      <!-- Tag Input  CSS -->
      <link href="/css/tag-input.css" rel="stylesheet">

      <!-- DataTables  CSS -->
      <link href="/css/dataTables.min.css" rel="stylesheet">
      <script async src="https://www.googletagmanager.com/gtag/js?id=G-N4D3563RRC"></script>
{{--      New Google Tag - 2023--}}
      <script>
         window.dataLayer = window.dataLayer || [];
         function gtag(){dataLayer.push(arguments);}
         gtag('js', new Date());
         gtag('config', 'G-N4D3563RRC');
      </script>
      <style>
         @font-face {
            font-family: Helvitica;
            src: url('https://resources.miningmarketplace.com/public/font/HelveticaNeueLTStd-Lt.otf') format("opentype");
         }

         @font-face {
            font-family: HelviticaBD;
            src: url('https://resources.miningmarketplace.com/public/font/HelveticaNeueLTStd-Bd.otf') format("opentype");
         }

         .font-Bd {
            font-family: HelviticaBD;
         }

      </style>

   </head>
   <body style="font-family: Helvitica" >
     @yield('content')
     @include('analytics')
   </body>
</html>




