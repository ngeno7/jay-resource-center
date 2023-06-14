@extends('layout.default',['title' => 'Resource Center | Statistics '])
@section('content')
    @include('header')
    <div class="container-fluid">
        <div class="container"  >
            <div class="row">
                <br/>
                <div class="col-md-3 padding-0">
                    <img src="{{$data->product_img}}" onerror="this.src='{{url('/').'/public/images/placeholder.png'}}'" class="img-responsive img-thumbnail product-image" alt="" align="left" >
                    <br/>
                </div>
                <div class="col-md-9">
                    <h5 class="s-p-r-h font-Bd m-t-1">{{$data->name}}</h5>
                    <h6 class="s-c-l"><span >
                            <a href="{{url('/').'/company-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$data->user->company_name))).'/'.$data->user_id}}">{{$data->user->company_name}}</a>
                            <span class="stats-align"><i class="fa fa-eye stats-view-align" aria-hidden="true"></i>Views: {{$data->product_views->count()+$data->product_anonymous_views->count()}}</span>
                        </span>
                    </h6>
                    <div class="s-p mh90">
                        {{$data->description}}
                    </div>
                    <p>
                          <span>
                              <a href="../stats_product_download/{{$data->product_id}}" class="btn  m-top-minus-5-left-0 btn-warning waves-effect waves-light" ><i class="fa fa-download pad-r-5" aria-hidden="true" ></i>Download Statistics</a>
                          </span>
                    </p>
                    <p><span class="addthis_inline_share_toolbox_19pu pull-right" ></span></p>
                </div>

                <br><br>
            </div>
        </div>
    </div>
    <div class="container-fluid" >
        <div class="container padding-0">
            <div class="row">
                <h5 class="float-right">
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
                <ul class="nav nav-tabs tabs-2 indigo" role="tablist" >
                    <li class="nav-item">
                        <a class="nav-link active" data-toggle="tab" href="#panel6" role="tab"><i class="fa fa-eye"></i> Views</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" data-toggle="tab" href="#panel7" role="tab"><i class="fa fa-eye"></i> Anonymous Views</a>
                    </li>
                </ul>
                <div class="tab-content tab-style" >
                    <div class="tab-pane fade in active" id="panel6" role="tabpanel">
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