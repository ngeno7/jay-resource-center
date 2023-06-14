<?php
$id= basename(parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH));
$industries=\App\ContentCategory::orderBY('industryname')->get();
$resource=\App\Resource::where('resources_id',$id)->first();
$typeOfResource=\App\TypeOfResource::orderByRaw("CASE WHEN resourcetypeid =".$resource->type_of_resource." THEN resourcetypename END DESC")->get();
$contentCategories=explode(',',$resource->content_category);
$brands=\App\Brands::orderByRaw("CASE WHEN brandid =".$resource->brand_id." THEN brandname END DESC")->get();
$type=$resource->type;
?>

@extends('layout.default',['title' => 'Resource Center | Edit Resource '])

@section('content')

   <form  class="form-group" enctype="multipart/form-data"   id="edit-resource" method="post" action="">
      <div class="col-md-4 col-lg-4" style="margin-top: 12px">
         <h3 style="">Edit Resource</h3>

         <input type="file" name="image" id="image" class="edit" ><br/>
         <script>
             $('[class^=edit][type="file"]').ezdz({
                 text:"<img src='<?php echo $resource->image_path?>'/>"
             }  );
         </script>
      </div>
      <div class="col-md-8 col-lg-8"  >
         <label class="form-label">Topic</label>
         <input class="form-control" type="text" name="topic" placeholder="Topic" value="{{$resource->resource_topic}}"><br/>
         <label class="form-label">Author Name</label>
         <input class="form-control" type="text" name="authorname" placeholder="Author Name" value="{{$resource->author_name}}">
         <br/>
         <label class="form-label">Keyword</label>
         <input class="form-control tag" type="text" name="keyword"  placeholder="Keyword" data-role="tagsinput" value="{{$resource->keywords}}">
         <br/>
         <label class="form-label" style="margin-top: 15px">Type Of Resource</label>
         <select class="mdb-select" id="show-edit" name="typeofresource">
            @foreach($typeOfResource as $type)
               <option value="{{$type->resourcetypeid}}">{{$type->resourcetypename}}</option>
            @endforeach
         </select>
         <input class="form-control" type="hidden" name="resource_path" id="resource_path" <?php  if($resource->type!='UTM'){ ?> value="{{$resource->resource_path}}" <?php }?>>
         <input class="form-control" type="hidden" name="resource_id" id="" value="{{$resource->resources_id}}">
      </div>
      <div class="col-md-12"  id="text_area_edit" <?php if($resource->type_of_resource!=6){ ?>style="display: none"<?php } ?>>
         <label class="form-label">Video Link (Youtube/Vimeo/Websites)</label>
         <input class="form-control" type="text" name="link" id="linkyt_edit" placeholder="http://www.example.com" value="{{$resource->resource_path}}"><br>
         <p id="errorMsg_edit" style="display: none;color: #ca3220;margin-top: -20px"><b>Please enter a Video link.</b></p>
         <p id="errorMsg1_edit" style="display: none;color: #ca3220;margin-top: -20px"><b>Please enter a valid URL.</b></p>
      </div>
      <div class="col-md-12"  id="text_area1_edit" <?php if($resource->type_of_resource!=7){ ?> style="display: none" <?php } ?>>
         <label class="form-label">E-Book Link</label>
         <input class="form-control" type="text" name="ebook" id="ebook_edit" placeholder="http://www.example.com"  value="{{$resource->resource_path}}"><br>
         <p id="errorMsgBook_edit" style="display: none;color: #ca3220;margin-top: -20px"><b>Please enter a E-Book link.</b></p>
         <p id="errorMsgBook1_edit" style="display: none;color: #ca3220;margin-top: -20px"><b>Please enter a valid URL.</b></p>
      </div>
      <div class="col-md-12 ">
         <label class="form-label">Content Type</label><br/>
         <select class="mdb-select" name="contenttype" id="contenttype" >
             <?php foreach($brands as $brand){?>
            <option value="<?php echo $brand->brandid?>" ><?php echo $brand->brandname?></option>
             <?php } ?>
         </select>
      </div>
      <div class="col-md-12">
         <label class="form-label">Content Category</label>
         <select class="mdb-select" name="contentcategory[]" id="contentcategory_edit" multiple>
            <option disabled>Select Content Categories</option>
            @foreach($industries as $industry)
               <option value="{{$industry->industryid}}" <?php if(in_array($industry->industryid,$contentCategories)){ ?>selected="selected"<?php } ?> >{{$industry->industryname}}</option>

            @endforeach
         </select>
      </div>
      <div class="col-md-12">
         <div  class="btn-toolbar" data-role="editor2-toolbar" data-target="#editor2">
            <div class="btn-group">
               <a class="btn" data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>
               <a class="btn" data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>
               <a class="btn" data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a>
               <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>
            </div>
            <div class="btn-group">
               <a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="icon-list-ul"></i></a>
               <a class="btn " data-edit="insertorderedlist" title="Number list"><i class="icon-list-ol"></i></a>
               <a class="btn " data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a>
               <a class="btn " data-edit="indent" title="Indent (Tab)"><i class="icon-indent-right"></i></a>
            </div>
            <div class="btn-group">
               <a class="btn   dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="icon-link"></i></a>
               <div class="dropdown-menu input-append" style="width: 220px;padding: 10px">
                  <input class="span2 form-control" placeholder="URL" type="text" data-edit="createLink" value="http://"/>
                  <button class="btn  btn-warning btn-block" type="button" style="margin-top: 5px">Add</button>
               </div>
               <a class="btn  " data-edit="unlink" title="Remove Hyperlink"><i class="icon-cut"></i></a>
            </div>
            <div class="btn-group">
               <a class="btn" data-edit="justifyleft" title="Align Left (Ctrl/Cmd+L)"><i class="icon-align-left"></i></a>
               <a class="btn " data-edit="justifycenter" title="Center (Ctrl/Cmd+E)"><i class="icon-align-center"></i></a>
               <a class="btn" data-edit="justifyright" title="Align Right (Ctrl/Cmd+R)"><i class="icon-align-right"></i></a>
               <a class="btn " data-edit="justifyfull" title="Justify (Ctrl/Cmd+J)"><i class="icon-align-justify"></i></a>
            </div>
            <div class="btn-group" style="display: none">
               <a class="btn  " data-edit="undo" title="Undo (Ctrl/Cmd+Z)"><i class="icon-undo"></i></a>
               <a class="btn " data-edit="redo" title="Redo (Ctrl/Cmd+Y)"><i class="icon-repeat"></i></a>
            </div>
            <input type="text" data-edit="inserttext" id="voiceBtn2" x-webkit-speech="">
         </div>
         <div id="editor2">


         </div>
      </div>


      <div class="col-md-12" id="fileType_edit" <?php if($resource->type_of_resource==6  or $resource->type_of_resource==7){ ?>style="display: none"<?php } ?>>
         <label for="filetype_edit" class="control-label input-group form-label">File or UTM</label>
         <div class="btn-group">
            <label class="btn btn-outline-primary active"  style="padding: 8px 35px">
               <input type="radio" name="filetype_edit" value="file" class="filetype_edit active" autocomplete="off" <?php if($resource->type!='UTM'){ ?>checked <?php } ?>> Add Resource
            </label>
            <label class="btn btn-warning" style="padding: 8px 50px">
               <input type="radio" name="filetype_edit"  value="utm" class="filetype_edit active" autocomplete="off" <?php if($resource->type=='UTM'){ ?>checked <?php } ?>> Add UTM
            </label>
         </div>
         <br/> <br/>
      </div>
      <div class="col-md-12" <?php if($resource->type!='UTM' or $resource->type_of_resource==6  or $resource->type_of_resource==7){ ?>style="display: none"<?php } ?> id="utm_edit">
         <label class="form-label">Add UTM</label>
         <input class="form-control" name="utm" id="utmValue_edit" placeholder="http://www.example.com" value="{{$resource->resource_path}}"><br/>
         <p id="errorMsgUTM_edit" style="display: none;color: #ca3220;margin-top: -20px"><b>Please enter a UTM Link.</b></p>
         <p id="errorMsgUTM1_edit" style="display: none;color: #ca3220;margin-top: -20px"><b>Please enter a valid URL.</b></p>
      </div>
      <div class="col-md-12" id="file_edit" <?php if($resource->type=='utm' or $resource->type_of_resource==6  or $resource->type_of_resource==7){ ?>style="display: none"<?php } ?>>
         <input id="file-fr-edit" name="file-fr-edit" type="file" data-min-file-count="1" class="file-loading"><br/>
      </div>

      <div class="col-md-12">
         <button class="btn btn-outline-primary btn-block waves-effect" style="" id="upload_edit">Save Changes</button>
         <br/>
      </div>
   </form>

   <script>
       var html ='<?php echo $resource->description;?>';
       $('#editor2').html(html);

       $('#file-fr-edit').on('filebrowse', function(event,files) {
           $('#file-fr-edit').fileinput1('clear');
       });

       var $input = $("#file-fr-edit");
       $input.fileinput1({
           overwriteInitial: true,
           uploadUrl: "<?php echo url('/')?>/edit_upload", // server upload action

           uploadAsync: true,
           showUpload:false,
           maxFilesCount: 1,
           maxFilesNum: 1,
           autoReplace: true,
           <?php if($resource->type!='utm'){ ?>
           initialPreview: [ "<img style='height:160px' src='<?php echo $resource->image_path; ?>'>" ],
           initialCaption: "<?php echo $resource->resource_topic; ?>"
           <?php } ?>

       }).on("filebatchselected", function(event, files) {
// trigger upload method immediately after files are selected
           $input.fileinput1("upload");
       });

       $('#file-fr-edit').on('filebatchuploadsuccess', function(event, data) {
           $('#file-fr-edit').fileinput1('clear');
           console.log(event);
           console.log(data);
       });
       $('#file-fr-edit').on('fileuploaded', function(event, data, previewId, index) {
           var form = data.form, files = data.files, extra = data.extra,
               response = data.response, reader = data.reader;
           console.log(data.response);
           $("#resource_path").val(data.response);
           console.log('File uploaded triggered');
       });
   </script>
   <script>
       $('#edit-resource').validate({
           rules:{
               topic:{required:true},
               keyword:{required:true},
               description:{required:true}
           },
           messages:{
               topic:"Please enter a topic",
               description:"Please enter a description",
               keyword:"Please enter a keywords"
           },

           submitHandler:function(form){

               if($('#contentcategory_edit').val()==null){
                   toastr["error"]('Please select at least one content category');
                   return false;
               }

               if( $('#show-edit').val() == '6') //Check type is video link
               {

                   if($("#linkyt_edit").val() == '') //Check video link is empty
                   {

                       $("#linkyt_edit").focus();
                       $("#errorMsg1_edit").hide();
                       $("#errorMsg_edit").show();
                       return false;

                   }
                   else
                   {

                       var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
                       var regex = new RegExp(pattern);
                       var website_url = $("#linkyt_edit").val();// url of the website
                       if (website_url.match(regex)) {} // valid url
                       else {
                           $("#errorMsg_edit").hide();
                           $("#errorMsg1_edit").show();
                           return false;
                       }

                   }
               }
               else if( $('#show-edit').val() == '7') // Check type is e-book link
               {
                   if($("#ebook_edit").val() == '') //check empty
                   {
                       $("#ebook_edit").focus();
                       $("#errorMsgBook_edit").show();
                       $("#errorMsgBook1_edit").hide();

                       return false;
                   }
                   else
                   {
                       var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
                       var regex = new RegExp(pattern);
                       var website_url = $("#ebook_edit").val();// url of the website
                       if (website_url.match(regex)) {} // url valid
                       else {
                           $("#ebook_edit").focus();
                           $("#errorMsgBook_edit").hide();
                           $("#errorMsgBook1_edit").show();
                           return false;
                       }

                   }

               }

               var val = $('.filetype_edit:checked').val();

               if(val =='utm')
               {
                   if($("#utmValue_edit").val() == '')
                   {
                       $("#utmValue_edit").focus();
                       $("#errorMsgUTM_edit").show();
                       $("#errorMsgUTM1_edit").hide();
                       return false;

                   }
                   else
                   {

                       var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
                       var regex = new RegExp(pattern);
                       var website_url = $("#utmValue_edit").val();// url of the website
                       if (website_url.match(regex)) {

                       }
                       else {
                           $("#errorMsgUTM_edit").hide();
                           $("#errorMsgUTM1_edit").show();
                           return false;
                       }

                   }
               }
               $("#errorMsg1_edit,#errorMsg_edit,#errorMsgBook_edit,#errorMsgBook1_edit,#errorMsgUTM_edit,#errorMsgUTM1_edit").empty();
               var edit = $('#editor2').html();
               var formData = new FormData($("#edit-resource")[0]);
               formData.append('description', edit);
               $("#upload_edit").attr('disabled',true);
               $("#upload_edit").html('Loading ....');
               $.ajax({
                   url:"<?php echo url('/')?>/edit_resource",
                   type:"post",
                   cache: false,
                   data:formData,
                   error:function()
                   {
                       alert('error');
                       $("#upload_edit").attr('disabled',false);
                       $("#upload_edit").html('Upload');
                   },
                   success:function(data)
                   {


                       $("#upload_edit").attr('disabled',false);
                       $("#upload_edit").html('Upload');
                       if(data=="success")
                       {
                           toastr["success"]('Edit Successfully!');
                           window.setTimeout(function(){location.reload()},1000);

                       }

                       else if(data=="Invalid image type")
                       {
                           toastr["error"](data);
                       }
                       else if(data=="Resource is required")
                       {
                           toastr["error"](data);
                       }
                       else
                       {
                           alert(data);
                       }
                   },

                   contentType: false,
                   processData: false

               });
               return false;

           }
       });

       $().button('toggle');
   </script>
   <style>
      #editor2 {
         max-height: 250px;
         height: 250px;
         background-color: #fff;
         border-collapse: separate;
         border: 1px solid #ccc;
         padding: 4px;
         box-sizing: content-box;
         -webkit-box-shadow: rgba(0,0,0,.0745098) 0 1px 1px 0 inset;
         box-shadow: rgba(0,0,0,.0745098) 0 1px 1px 0 inset;
         border-top-right-radius: 3px;
         border-bottom-right-radius: 3px;
         border-bottom-left-radius: 3px;
         border-top-left-radius: 3px;
         overflow: scroll;
         outline: none;
         margin-top: 10px;
      }
   </style>
   @include('modals')
   @include('scripts')
@endsection
