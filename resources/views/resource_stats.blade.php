@extends('layout.default',['title' => 'Resource Center | Statistics '])
@section('content')
    @include('header')
    <div class="container-fluid">
        <div class="container">
            <div class="row">
                <div class="col-md-12 padding-0">
                    <div class="col-md-3 padding-0 m-t-1">
                        <br/>
                        <img src="{{$data->image_path}}" class="img-thumbnail img-responsive detail-resource-image" >
                    </div>
                    <div class="col-md-9">
                        <br/>
                        <h4 class="font-Bd m-t-2" >{{$data->resource_topic}}</h4>
                        <h5 class="m-top-minus-5 ">
                            <span class="italic byHeading" >By: </span>
                            <span class="bold-n-blue byPara">
                                <a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$data->company_name))).'/'.$data->user_id}}">{{$data->company_name}}</a>
                            </span>
                            <span class="stats-align"><i class="fa fa-eye stats-view-align" aria-hidden="true"></i>
                                Views: {{$data->resourceViews->count()+$data->resourceAnonymousViews->count()}}</span>
                            <span class="stats-align" ><i class="fa fa-arrow-circle-o-down stats-download-align" aria-hidden="true"></i>
                                Downloads: <span class="downloadCount">{{$data->resourceDownloads->count()}}</span>
                            </span>
                        </h5>
                        <h5 class="m-top-minus-5 mh20"><span class="italic byPara">
                            @if(!empty($data->author_name))
                                    Author:</span>
                            <span class="bold-n-blue author">
                               {{$data->author_name}}</span>
                            @endif
                            <span class="f-15-gray float-right"><i class="fa fa-file pr-5"aria-hidden="true"></i>
                                {{$data->typeOfResource->resourcetypename}}
                            </span>
                        </h5>
                        @php $keywords=explode(',',$data->keywords) @endphp
                        @if(!empty($keywords))
                            @foreach($keywords as $keyword)
                                <a href="{{url('/')}}/search?keyword={{$keyword}}" class="badge badge-primary hoverable keyword-badge">{{$keyword}}</a>
                            @endforeach
                        @endif
                        <br/><br/>
                        <p>
                          <span>
                              <a href="../stats_download/{{$data->resources_id}}" class="btn  m-top-minus-5-left-0 btn-warning waves-effect waves-light" ><i class="fa fa-download pad-r-5" aria-hidden="true" ></i>Download Statistics</a>
                          </span>
                        </p>
                    </div>
                    <div class="col-md-12 padding-0">
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="container-fluid" >
        <div class="container padding-0">
            <div class="row">
                <h5 class="float-right">
                    <span><i class="fa fa-square download-text" aria-hidden="true"></i>Download</span>
                    <span><i class="fa fa-square view-text" aria-hidden="true"></i>Views</span>
                    <span><i class="fa fa-square a-view-text" aria-hidden="true"></i>Anonymous Views</span>
                </h5>
                <canvas id="myChart" height="70px"></canvas>
                <br/>
                <br/>
            </div>
        </div>
    </div>
    <div class="container-fluid" >
        <div class="container padding-0">
            <div class="row">
                <br/>
                <ul class="nav nav-tabs tabs-3 indigo" role="tablist" >
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#panel5" role="tab"><i class="fa fa-download"></i> Downloads</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel6" role="tab"><i class="fa fa-eye"></i> Views</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-eye"></i> Anonymous Views</a>
                    </li>
                </ul>
                <div class="tab-content tab-style" >
                    <div class="tab-pane fade in active" id="panel5" role="tabpanel">
                        <br>
                        <h2 class="stats-head">Downloads</h2>
                        <table id="downloads">
                            <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Region</th>
                                <th>No Of Downloads</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($downloads as $download) <?php $dataUser=$download->userDetail; ?>
                            <tr>
                                <td>{{$dataUser->company_name}}</td>
                                <td>{{$dataUser->email}}</td>
                                <td>{{$dataUser->region}}</td>
                                <td>{{$download->total}}</td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <br/> <br/>
                    </div>
                    <div class="tab-pane fade" id="panel6" role="tabpanel">
                        <br>
                        <h2 class="stats-head">Views</h2>
                        <table id="views">
                            <thead>
                            <tr>
                                <th>Company Name</th>
                                <th>Email</th>
                                <th>Region</th>
                                <th>No Of Views</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($views as $view) <?php  $dataUser=$view->userDetail ?>
                            <tr>
                                <td>{{$dataUser->company_name}}</td>
                                <td>{{$dataUser->email}}</td>
                                <td>{{$dataUser->region}}</td>
                                <td>{{$view->total}}</td>
                            </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <br/> <br/>
                    </div>
                    <div class="tab-pane fade" id="panel7" role="tabpanel">
                        <br>
                        <h2 class="stats-head">Anonymous Views</h2>
                        <table id="anonymous_views">
                            <thead>
                            <tr>
                                <th>IP Address</th>
                                <th>City</th>
                                <th>Country</th>
                                <th >No Of Views</th>
                            </tr>
                            </thead>
                            <tbody>
                            @foreach($anonymousViews as $view)
                                <tr>
                                    <td>{{$view->ip_address}}</td>
                                    <td>{{$view->city}}</td>
                                    <td>{{$view->country}}</td>
                                    <td>{{$view->total}}</td>
                                </tr>
                            @endforeach
                            </tbody>
                        </table>
                        <br/> <br/>
                    </div>
                </div>
                <br/> <br/>
            </div>
        </div>
    </div>

    @include('modals')
    @include('scripts')
    <script>
        $(function () {
            var data = {
                labels: [@php echo $month_name; @endphp],
                datasets: [
                    {
                        label: "Downloads",
                        fillColor: "#ffba15",
                        strokeColor: "#ffba15",
                        pointColor: "#ffba15",
                        pointStrokeColor: "#333",
                        pointHighlightFill: "#333",
                        pointHighlightStroke: "rgba(151,187,205,1)",
                        data: [{{$downloads_chart}}]
                    },
                    {
                        label: "Views",
                        fillColor: "#FE8C00",
                        strokeColor: "rgba(254,140,0,1)",
                        pointColor: "rgba(254,140,0,1)",
                        pointStrokeColor: "#222",
                        pointHighlightFill: "#222",
                        pointHighlightStroke: "rgba(51,102,204,1)",
                        data: [{{$views_chart}}]
                    },
                    {
                        label: "Anonymous",
                        fillColor: "#F83600",
                        strokeColor: "rgba(248,54,0,1)",
                        pointColor: "rgba(248,54,0,1)",
                        pointStrokeColor: "#222",
                        pointHighlightFill: "#222",
                        pointHighlightStroke: "rgba(220, 57, 18,1)",
                        data: [{{$anonymous_views_chart}}]
                    }
                ]
            };

            var option = {responsive: true };
            var ctx = document.getElementById("myChart").getContext('2d');
            var myBarChart = new Chart(ctx).Bar(data, option);

        });

</script>
@include('footer')
@endsection