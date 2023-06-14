<!DOCTYPE html>
<html lang="en">

<head>
    <!-- Required meta tags always come first -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no, minimal-ui">

    <meta http-equiv="x-ua-compatible" content="ie=edge">
    <title>Resource Center Admin Panel</title>

    <!-- Font Awesome -->
    <link href="https://netdna.bootstrapcdn.com/bootstrap/3.0.0-rc2/css/bootstrap-glyphicons.css" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.6.0/css/font-awesome.min.css">

    <!-- Google Font -->
    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro" rel="stylesheet">

    <!-- Bootstrap core CSS -->
    <link href="{{url('/')}}/public/admin/css/bootstrap.min.css" rel="stylesheet">

    <!-- Material Design Bootstrap -->
    <link href="{{url('/')}}/public/admin/css/material.css" rel="stylesheet">

    <!-- Data Table-->
    <link href="{{url('/')}}/public/admin/css/dataTables.min.css" rel="stylesheet">

    <!-- Component-->
    <link href="{{url('/')}}/public/admin/css/component.css" rel="stylesheet">
    <link rel="stylesheet" href="https://code.ionicframework.com/ionicons/2.0.1/css/ionicons.min.css">

    <!-- Custom CSS -->
    <link href="{{url('/')}}/public/admin/css/style.css" rel="stylesheet">

    <!-- EZDZ CSS -->
    <link href="{{url('/')}}/public/admin/css/jquery.ezdz.min.css" rel="stylesheet">

    <!-- Table responsive CSS -->
    <link href="{{url('/')}}/public/admin/css/responsive-table.css" rel="stylesheet">

    <!-- Tag CSS -->
    <link href="{{url('/')}}/public/admin/css/tag-input.css" rel="stylesheet">

    <!-- Chosen plugin CSS -->
    <link href="<?php echo url('/')?>/public/css/bootstrap-chosen.css" rel="stylesheet">

    <!-- File Input  CSS -->
    <link href="<?php echo url('/')?>/public/css/fileinput.css" rel="stylesheet">

    <!-- Jasny Css-->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/jasny-bootstrap/3.1.3/css/jasny-bootstrap.min.css" rel="stylesheet">

    <style>
        .bg-image{
            background-image: linear-gradient( rgba(255,255,255,.1), rgba(255,255,255,.1) ),url(public/images/Banner.jpg);
            background-repeat: no-repeat;
            background-size: 100% 100%;
            height: 100vh;
        }
    </style>
</head>

<body class="fixed-sn mdb-skin bg-image" style="font-family: 'Source Sans Pro', sans-serif;">

@yield('content')
@include('admin.modals')
@include('admin.scripts')

</body>

</html>