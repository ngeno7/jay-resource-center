<?php
$id= basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
if($id!='all'){
$brandid='0';
$query=DB::table('brands')->where('branduid',$id)->get();
if(!empty($query)){
    foreach($query as $row){
      $brandid=$row->brandid;
    }
}

 $query="SELECT resources.resource_topic, resources.image_path,resources.resources_id
               FROM  `resources`
               LEFT JOIN  `users` ON resources.user_id=users.uid where  resources.resources_id !=''
               and resources.status='enabled' and resources.adminstatus='Enable' and find_in_set($brandid,resources.content_type)
               GROUP BY resources.resources_id ORDER BY resources.created_at DESC  LIMIT 5";
 $resources=DB::select($query);

}else{
 $query="SELECT resources.resource_topic, resources.image_path,resources.resources_id
               FROM  `resources`
               LEFT JOIN  `users` ON resources.user_id=users.uid where  resources.resources_id !=''
               and resources.status='enabled' and resources.adminstatus='Enable'
               GROUP BY resources.resources_id ORDER BY resources.created_at DESC  LIMIT 5";
 $resources=DB::select($query);
}

?>
@extends('layout.default')
@section('content')

<div class="col-md-3 col-sm-12" style="margin-top: -80px; padding:2px">
  <?php
         foreach($resources as $resource){
   ?>
<div  class="premium-box hoverable hm-zoom z-depth-1">
<img src="{{$resource->image_path}}" align="left" class="premium-image">
<a href="<?php $resourceDetail=url('/').'/resource-detail/'.preg_replace('/[^A-Za-z0-9\-]/', '',strtolower(str_replace(' ','-',$resource->resource_topic))).'/'.$resource->resources_id; echo $resourceDetail; ?>" target="_blank">
<p class="premium-text  flex-center">{{$resource->resource_topic}}</p>
</a>
</div>
<?php } ?>
<br/>
</div>




@include('modals')
@include('scripts')

<script language="javascript" type="text/javascript">
function resizeIframe(obj) {
obj.style.height = obj.contentWindow.document.body.scrollHeight + 'px';
}
</script>

@endsection