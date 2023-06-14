
<!-- Bootstrap Core JavaScript -->
<script type="text/javascript" src="/js/bootstrap.min.js"></script>

<!-- Bootstrap  JavaScript -->
<script type="text/javascript" src="/js/bootstrap.js"></script>

<!--Chosen  JS -->
<script type="text/javascript" src="/js/choosen.jquery.js"></script>

<!--DatePicker  JS -->
<script type="text/javascript" src="/js/datepicker.js"></script>

<!-- Validation JS -->
<script type="text/javascript" src="/js/validation.js"></script>

<!-- Image upload plugin JS -->
<script type="text/javascript" src="/js/jquery.ezdz.min.js"></script>

<!-- wysiwyg JS -->
<script type="text/javascript" src="/js/bootstrap-wysiwyg.js"></script>

<!-- Hot keys JS  -->
<script type="text/javascript" src="/js/jquery.hotkeys.js"></script>

<!-- Owl Carousel  js  -->
<script type="text/javascript" src="/js/owl.carousel.js"></script>

<!-- File Input  js  -->
<script type="text/javascript" src="/js/fileinput.js"></script>

<!-- Tag Input  js  -->
<script type="text/javascript" src="/js/tag-input.min.js"></script>

<!-- DataTables Js -->
<script type="text/javascript" src="/js/dataTables.min.js"></script>

<!-- BootBox Js -->
<script type="text/javascript" src="/js/bootbox.js"></script>

<!-- Scroll Js -->
<script type="text/javascript" src="/js/infinitescroll.js"></script>
<script type="text/javascript" src="/js/pattern.js"></script>
<script type="text/javascript" src="/js/clipboard.min.js"></script>


<!-- Go to www.addthis.com/dashboard to customize your tools -->
<script type="text/javascript" src="//s7.addthis.com/js/300/addthis_widget.js#pubid=ra-57e0fb5bfca32259"></script>


<!-- Edit Company Modal -->
<div id="companyModal" class="modal fade " role="dialog" >
    <div class="modal-dialog modal-lg" style="width: 750px">
        <div class="modal-content">
            <div class="modal-body">
                <button type="button" class="close" data-dismiss="modal">×</button>
                <form class="form-group" method="post" action="{{url('/')}}/edit_company" id="edit-company" enctype="multipart/form-data">
                    <h4 style="margin-left: 15px;">Edit Company Profile</h4>

                    <div id="eccompany">

                    </div>
                    <div class="col-md-12" id="rte">
                        <div class="btn-toolbar" data-role="editor-toolbar" data-target="#editor">
                            <div class="btn-group">
                                <a class="btn " data-edit="bold" title="Bold (Ctrl/Cmd+B)"><i class="icon-bold"></i></a>
                                <a class="btn " data-edit="italic" title="Italic (Ctrl/Cmd+I)"><i class="icon-italic"></i></a>
                                <a class="btn " data-edit="strikethrough" title="Strikethrough"><i class="icon-strikethrough"></i></a>
                                <a class="btn" data-edit="underline" title="Underline (Ctrl/Cmd+U)"><i class="icon-underline"></i></a>
                            </div>
                            <div class="btn-group">
                                <a class="btn" data-edit="insertunorderedlist" title="Bullet list"><i class="icon-list-ul"></i></a>
                                <a class="btn" data-edit="insertorderedlist" title="Number list"><i class="icon-list-ol"></i></a>
                                <a class="btn" data-edit="outdent" title="Reduce indent (Shift+Tab)"><i class="icon-indent-left"></i></a>
                                <a class="btn" data-edit="indent" title="Indent (Tab)"><i class="icon-indent-right"></i></a>
                            </div>
                            <div class="btn-group">
                                <a class="btn   dropdown-toggle" data-toggle="dropdown" title="Hyperlink"><i class="icon-link"></i></a>
                                <div class="dropdown-menu input-append" style="width: 220px;padding: 10px">
                                    <input class="span2 form-control" placeholder="URL" type="text" data-edit="createLink" value="http://"/>
                                    <button class="btn  btn-warning btn-block" type="button" style="margin-top: 5px">Add</button>
                                </div>
                                <a class="btn" data-edit="unlink" title="Remove Hyperlink"><i class="icon-cut"></i></a>
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
                            <input type="text" data-edit="inserttext" id="voiceBtn" x-webkit-speech="">
                        </div>
                        <div id="editor">

                        </div>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <button type="button" data-dismiss="modal" class="btn btn-warning btn-block">Cancel</button>
                    </div>
                    <div class="col-md-6">
                        <br/>
                        <button class="btn btn-warning btn-block"  id="edit_company">Save Changes</button>
                        <br>
                    </div>

                </form>

            </div>
        </div>
    </div>
</div>

<!-- Tag Input Limit -->
<script>
    $('input.tag').tagsinput({ maxTags: 6});
</script>

<!-- Krajee Plugin -->
<script>

    $('#file-fr').on('filebrowse', function(event,files) {
        $('#file-fr').fileinput1('clear');
    });

    var $input = $("#file-fr");
    $input.fileinput1({
        overwriteInitial: true,
        uploadUrl: "{{url('/')}}/upload", // server upload action
        uploadExtraData: function() {
            return {
                // email: $("#email").val()
            };
        },
        uploadAsync: true,
        showUpload:false,
        maxFilesCount: 1,
        maxFilesNum: 1,
        maxFileSize: 2000000,
        autoReplace: true,
        showRemove: true

    }).on("filebatchselected", function(event, files) {
    // trigger upload method immediately after files are selected
        $input.fileinput1("upload");
    });

    $('#file-fr').on('filebatchuploadsuccess', function(event, data) {
        $('#file-fr').fileinput1('clear');
        console.log(event);
        console.log(data);
    });
    $('#file-fr').on('fileuploaded', function(event, data, previewId, index) {
        var form = data.form, files = data.files, extra = data.extra,
            response = data.response, reader = data.reader;
        console.log(data.response);
        $("#token").val(data.response);
        console.log('File uploaded triggered');
    });

</script>

<!-- Change dropdown  -->
<script>
    $("#show,#show-edit").change(function(){
        if($(this).val()=="6") {
            $("#text_area,#text_area_edit").show();
            $("#text_area1,#text_area1_edit").hide();
            $("#file,#file_edit").hide();
            $("#fileType,#fileType_edit").hide();
            $("#utm,#utm_edit").hide();
        }
        else if($(this).val()=="7") {
            $("#text_area1,#text_area1_edit").show();
            $("#text_area,#text_area_edit").hide();
            $("#file,#file_edit").hide();
            $("#fileType,#fileType_edit").hide();
            $("#utm,#utm_edit").hide();

        }
        else {
            $("#text_area,#text_area_edit").hide();
            $("#text_area1,#text_area1_edit").hide();
            $("#file,#file_edit").show();
            $("#fileType,#fileType_edit").show();

        }
    });
</script>

<!-- Utm Field hide and show -->
<script type="text/javascript">
    $(".filetype").change(function () {

        var val = $('.filetype:checked').val();

        if(val =='utm') {
            $("#file").hide();
            $("#utm").show();
        }
        else if(val=='file') {
            $("#file").show();
            $("#utm").hide();
        }

    });

    $(".filetype_edit").change(function () {

        var val = $('.filetype_edit:checked').val();

        if(val =='utm') {
            $("#file_edit").hide();
            $("#utm_edit").show();
        }
        else if(val=='file') {
            $("#file_edit").show();
            $("#utm_edit").hide();
        }

    });


</script>

<!-- Ezdz plugin -->
<script>
    $('[class^=a][type="file"]').ezdz({
        text:"<img src='{{url('/')}}/public/images/upload_box.png'/>"
    }  );
</script>

<!-- Material select -->
<script>
    $(document).ready(function() {
        $('.mdb-select').material_select();
    });
</script>

<!-- Owl Carousel tme duration and responsive scripot -->
<script>
    $(document).ready(function() {

        var owl = $("#owl-demo");

        var owl2 = $("#owl-demo2");

        owl.owlCarousel({
            autoPlay: 3000,
            margin:10,
            loop:true,
            autoWidth:true,
            items:4,
            itemsCustom : [
                [0, 1],
                [450, 1],
                [600, 2],
                [800, 3],
                [1000, 3],
                [1200, 4],
                [1400, 4],
                [1600, 4]
            ]
        });

        owl2.owlCarousel({
            autoPlay: 3000,
            margin:10,
            loop:true,
            autoWidth:true,
            items:4,
            itemsCustom : [
                [0, 1],
                [450, 1],
                [600, 2],
                [800, 4],
                [1000, 5],
                [1200, 6],
                [1400, 6],
                [1600, 6]
            ]
        });

        $('.owl-carousel').owlCarousel({
            margin:10,
            loop:true,
            autoWidth:true,
            items:4
        })

        $('.owl-carousel2').owlCarousel({
            margin:10,
            loop:true,
            autoWidth:true,
            items:8
        })
    });
</script>

<!-- Edit Company modal validation and submit -->
<script>
    $("#edit_company").click(function(){

        var edit = $('#editor').html();

        $("#wlerror").hide();
        $("#clerror").hide();
        $("#tlerror").hide();
        $("#fblerror").hide();
        if($("#companyname").val() == '') {  $("#companyname").focus();  $("#clerror").show();return false;  }
        if($("#companywebsite").val() != '') {

            var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
            var regex = new RegExp(pattern);
            var website_url = $("#companywebsite").val();// url of the website
            if (website_url.match(regex)) { }
            else { $("#wlerror").show();return false; }
        }

        if($("#fb").val() != '') {

            var pattern =/http(?:s)?:\/\/(?:www\.)?facebook\.com\/([a-zA-Z0-9_]+)/;
            var regex = new RegExp(pattern);
            var website_url = $("#fb").val();// url of the facebook
            if (website_url.match(regex)) { }
            else { $("#fblerror").show();return false; }
        }

        if($("#twitter").val() != '') {

            var pattern =/http(?:s)?:\/\/(?:www\.)?twitter\.com\/([a-zA-Z0-9_]+)/;
            var regex = new RegExp(pattern);
            var website_url = $("#twitter").val();// url of the twitter
            if (website_url.match(regex)) { }
            else { $("#tlerror").show();return false; }
        }

        var formData = new FormData($("#edit-company")[0]);
        formData.append('description', edit);
        $("#edit_company").attr('disabled',true);
        $("#edit_company").html('Loading ......');
        $.ajax({
            url: "{{url('/')}}/ajax/edit_company",
            type: 'post',
            data: formData,
            contentType: false,
            processData: false,
            error: function(data) {
                window.setTimeout(function(){location.reload()},1000);
                $("#edit_company").attr('disabled',false);
                $("#edit_company").html('Save Changes');
                window.setTimeout(function(){location.reload()},1000);

            },
            success: function(data) {
                if(data == 'success'){
                    $("#edit_company").attr('disabled',false);
                    $("#edit_company").html('Save Changes');
//$("#cd").html(edit);
                    window.setTimeout(function() {$("#companyModal").modal('hide'); }, 2000);


                    console.log(data);
                    toastr["success"]('Updated Successfully!');
                }
                else{  window.setTimeout(function(){location.reload()},1000)}
            }

        });
        return false;

    });
</script>

<!-- PreLoader -->
<script>
    setTimeout(function(){
        $(window).height();
        $(window).scrollTop(0),$("#status").fadeOut(),
            $("#preloader").delay(0).fadeOut("slow")
    }, 1000);
</script>

<!-- RIch text Editor js load-->
<script>
    $(function(){
        function initToolbarBootstrapBindings() {

            $('a[title]').tooltip({container:'body'});
            $('.dropdown-menu input').click(function() {return false;})
                .change(function () {$(this).parent('.dropdown-menu').siblings('.dropdown-toggle').dropdown('toggle');})
                .keydown('esc', function () {this.value='';$(this).change();});

            $('[data-role=magic-overlay]').each(function () {
                var overlay = $(this), target = $(overlay.data('target'));
                overlay.css('opacity', 0).css('position', 'absolute').offset(target.offset()).width(target.outerWidth()).height(target.outerHeight());
            });
            if ("onwebkitspeechchange"  in document.createElement("input")) {
                var editorOffset1 = $('#editor1').offset();
                var editorOffset2 = $('#editor2').offset();
                var editorOffset = $('#editor').offset();

                $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
                $('#voiceBtn1').css('position','absolute').offset({top: editorOffset1.top, left: editorOffset.left+$('#editor1').innerWidth()-35});
                $('#voiceBtn2').css('position','absolute').offset({top: editorOffset2.top, left: editorOffset.left+$('#editor2').innerWidth()-35});
            } else {
                $('#voiceBtn').hide();
                $('#voiceBtn1').hide();
                $('#voiceBtn2').hide();
            }

        };
        function showErrorAlert (reason, detail) {
            var msg='';
            if (reason==='unsupported-file-type') { msg = "Unsupported format " +detail; }
            else {
                console.log("error uploading file", reason, detail);
            }
            $('<div class="alert"> <button type="button" class="close" data-dismiss="alert">&times;</button>'+
                '<strong>File upload error</strong> '+msg+' </div>').prependTo('#alerts');
        };
        initToolbarBootstrapBindings();
        $('#editor1').wysiwyg({ toolbarSelector: '[data-role=editor1-toolbar]'} );

        $('#editor').wysiwyg();

        $('#editor2').wysiwyg({ toolbarSelector: '[data-role=editor2-toolbar]'} );

        //$("#editor1").html('<p></p>');
        window.prettyPrint && prettyPrint();
    });
</script>

<!-- Date picker validation -->
<script>
    var startDate = new Date('01-01-2012');
    var FromEndDate = new Date('');
    var ToEndDate = new Date('');

    ToEndDate.setDate(ToEndDate.getDate()+365);

    $('.from_date').datepicker({

        weekStart: 1,
        startDate: '01/01/2012',
        endDate: FromEndDate,
        autoclose: true

//    format: ' yyyy',
//    viewMode: 'years',
//    minViewMode: 'years'
    })
        .on('changeDate', function(selected){
            startDate = new Date(selected.date.valueOf());
            startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
            $('.to_date').datepicker('setStartDate', startDate);
        });
    $('.to_date')
        .datepicker({

            weekStart: 1,
            startDate: startDate,
            endDate: ToEndDate,
            autoclose: true
        })
        .on('changeDate', function(selected){
            FromEndDate = new Date(selected.date.valueOf());
            FromEndDate.setDate(FromEndDate.getDate(new Date(selected.date.valueOf())));
            $('.from_date').datepicker('setEndDate', FromEndDate);
        });

    $(function() {
        $('.datepicker').keypress(function(event) {
            event.preventDefault();
            return false;
        });
    });

</script>

<!-- Load chosen select Js -->
<script>
    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
    if ($('.chosen-container').length > 0) {
        $('.chosen-container').on('touchstart', function(e){
            e.stopPropagation(); e.preventDefault();
            // Trigger the mousedown event.
            $(this).trigger('mousedown');
        });
    }
</script>

<!-- Hide current modal and show new  modal -->
<script>
    $(document).ready(function() {
        $("#registerhere,#registerhere1").click(function() {
            if(this.id=='registerhere'){
                $('#loginModal').modal('hide').on('hidden.bs.modal', function(e) {
                    $('#registerModal').modal('show');
                    $(this).off('hidden.bs.modal');
                });
            }
            else if(this.id=='registerhere1') {
                $("#loginDownloadModal").modal('hide').on('hidden.bs.modal',function(e){
                    $('#registerDownloadModal').modal('show');
                    $(this).off('hidden.bs.modal');
                });

            }

        });

        $("#forgottenpassword,#forgottenpassword1").click(function(){

            if(this.id=='forgottenpassword'){
                $("#loginModal").modal('hide').on('hidden.bs.modal',function(e){
                    $("#forgetPasswordModal").modal('show');
                    $(this).off('hidden.bs.modal');
                });
            }
            else if(this.id=='forgottenpassword1') {
                $("#loginDownloadModal").modal('hide').on('hidden.bs.modal',function(e){
                    $("#forgetPasswordModal").modal('show');
                    $(this).off('hidden.bs.modal');
                });

            }

        });


        $("#changePassword").click(function() {

            $('#editProfileModal').modal('hide').on('hidden.bs.modal', function(e) {
                $('#passwordModal').modal('show');
                $(this).off('hidden.bs.modal');
            });
        });

        $("#seeAll").click(function() {
            $('#searchModal').modal('hide').on('hidden.bs.modal', function(e) {
                $('#categoriesModal').modal('show');
                $(this).off('hidden.bs.modal');
            });
        });

    });

</script>

<!-- Toastr Script -->
<script>
    toastr.options = {
        "closeButton": true, // true/false
        "debug": false, // true/false
        "newestOnTop": false, // true/false
        "progressBar": false, // true/false
        "positionClass": "toast-top-right", // toast-top-right / toast-top-left / toast-bottom-right / toast-bottom-left
        "preventDuplicates": false,
        "onclick": null,
        "showDuration": "2000", // in milliseconds
        "hideDuration": "1000", // in milliseconds
        "timeOut": "2000", // in milliseconds
        "extendedTimeOut": "1000", // in milliseconds
        "showEasing": "swing",
        "hideEasing": "linear",
        "showMethod": "fadeIn",
        "hideMethod": "fadeOut"
    }
</script>

<!-- When modal close reset form and error label hide --->
<script>
    $('.modal').on('hidden.bs.modal', function(){
        $(this).find('form')[0].reset();
        $("label.error").hide();
        $(".error").removeClass("error");
    });
</script>

<!-- Edit profile validation -->
<script>
    $("#edit-profile").validate({
        rules:{
            email:{required:true,email:true},firstName:{required:true},lastName:{required:true},
            username:{required:true},password:{required:true},companyName:{required:true},cell:{required:true},
            address:{required:true},city:{required:true},state_province:{required:true},country:{required:true},postalcode:{required:true}
        },
        messages:{
            email:{required:"Please enter an email address",email:"Please enter a valid email address"},
            firstName:"Please enter a firstname",
            lastName:"Please enter a lastname",
            username:"Please enter an username",
            password:"Please enter a password",
            companyName:"Please enter a companyname",
            cell:"Please enter a cell number",
            address:"Please enter an address",
            city:"Please enter a city",
            state_province:"Please enter a state/province",
            country:"Please enter a country",
            postalcode:"Please enter a postalcode"
        },
        submitHandler:function(form){
            $("#epbutton").attr('disabled',true);
            $("#epbutton").html('Loading ......');
            $.ajax({
                url:"{{url('/')}}/ajax/edit_profile",
                method:'post',
                data:$('#edit-profile').serialize(),
                success:function(data){
                    toastr.remove();
                    $("#epbutton").attr('disabled',false);
                    $("#epbutton").html('Save Changes');
                    if(data=='success') {
                        window.setTimeout(function() {$("#editProfileModal").modal('hide'); }, 2000);
                        toastr["success"]('Edit Successfully!');
                    }
                    else {
                        toastr["error"](data);
                        console.log(data);
                    }

                },
                error:function(){
                    alert('error');
                    $("#epbutton").attr('disabled',false);
                    $("#epbutton").html('Save Changes');
                  //  window.setTimeout(function(){location.reload()},1000);

                }

            });
        }
    });
</script>

<!-- Register validation -->
<script>
    $("#registration-form").validate({
        rules:{
            email:{required:true,email:true},firstName:{required:true},lastName:{required:true},
            username:{required:true},password:{required:true},companyName:{required:true},cell:{required:true},
            address:{required:true},city:{required:true},state_province:{required:true},country:{required:true},postalcode:{required:true}
        },
        messages:{
            email:{required:"Please enter an email address",email:"Please enter a valid email address"},
            firstName:"Please enter a first name",
            lastName:"Please enter a last name",
            username:"Please enter an username",
            password:"Please enter a password",
            companyName:"Please enter a company name",
            cell:"Please enter a cell number",
            address:"Please enter an address",
            city:"Please enter a city",
            state_province:"Please enter a state/province",
            country:"Please enter a country",
            postalcode:"Please enter a postal code"
        },
        submitHandler:function(form){
            $("#registerButton").attr('disabled',true);
            $("#registerButton").html('Loading ......');
            $.ajax({
                url:"{{url('/')}}/ajax/register",
                method:'post',
                data:$('#registration-form').serialize(),
                success:function(data){
                    toastr.remove();
                    $("#registerButton").attr('disabled',false);
                    $("#registerButton").html('Register');
                    if(data=='Email/Username already exists!') {
                        toastr["error"](data);
                        console.log(data);
                    }
                    else {
                        window.setTimeout(function() {$("#registerModal").modal('hide'); }, 2000);

                        $(".dd").html(data);
                        console.log(data);
                        toastr["success"]('Register Successfully!');
                    }

                },
                error:function(){
                    alert('error');
                    $("#registerButton").attr('disabled',false);
                    $("#registerButton").html('Register');
                   // window.setTimeout(function(){location.reload()},1000);

                }

            });
        }
    });
</script>

<!-- Register validation -->
<script>
    $("#registration-form-download").validate({
        rules:{
            email:{required:true,email:true},firstName:{required:true},lastName:{required:true},
            username:{required:true},password:{required:true},companyName:{required:true},cell:{required:true},
            address:{required:true},city:{required:true},state_province:{required:true},country:{required:true},postalcode:{required:true}
        },
        messages:{
            email:{required:"Please enter an email address",email:"Please enter a valid email address"},
            firstName:"Please enter a first name",
            lastName:"Please enter a last name",
            username:"Please enter an username",
            password:"Please enter a password",
            companyName:"Please enter a company name",
            cell:"Please enter a cell number",
            address:"Please enter an address",
            city:"Please enter a city",
            state_province:"Please enter a state/province",
            country:"Please enter a country",
            postalcode:"Please enter a postalcode"
        },
        submitHandler:function(form){
            $("#registerButtonDownload").attr('disabled',true);
            $("#registerButtonDownload").html('Loading ......');
            $.ajax({
                url:"{{url('/')}}/ajax/register_download",
                method:'post',
                data:$('#registration-form-download').serialize(),
                success:function(data){
                    toastr.remove();
                    $("#registerButtonDownload").attr('disabled',false);
                    $("#registerButtonDownload").html('Register');
                    if(data=='Email/Username already exists!') {
                        toastr["error"](data);
                        console.log(data);
                    }
                    else {
                        window.setTimeout(function() {$("#registerDownloadModal").modal('hide'); }, 2000);

                        $(".dd").html(data);
                        console.log(data);
                        toastr["success"]('Register Successfully!');
                        toastr["success"]('Download details are sent to your registered email address!','',{timeOut: 5000});
                        $('.downloadCount').html(parseInt($('.downloadCount').html(), 10)+1)

                    }

                },
                error:function(){
                    alert('error');
                    $("#registerButtonDownload").attr('disabled',false);
                    $("#registerButtonDownload").html('Register');
                    window.setTimeout(function(){location.reload()},1000);

                }

            });
        }
    });
</script>

<!-- Login validation -->
<script>
    $("#login-form").validate({
        rules:{
            email:{required:true},password:{required:true}
        },
        messages:{
            email:"Please enter an username or email address",
            password:"Please enter a password"

        },
        submitHandler:function(form){
            $("#loginButton").attr('disabled',true);
            $("#loginButton").html('Loading ......');
            $.ajax({
                url:"{{url('/')}}/ajax/login",
                method:'post',
                data:$('#login-form').serialize(),
                success:function(data){
                    toastr.remove();
                    $("#loginButton").attr('disabled',false);
                    $("#loginButton").html('Login');
                    if(data=='Invalid Credentials!') {
                        toastr["error"](data);

                    }
                    else {
                        window.setTimeout(function() {$("#loginModal").modal('hide'); }, 2000);
                        var obj = jQuery.parseJSON( data );
                        $(".dd").html(obj.first);
                        console.log(obj.second);
                        toastr["success"]('Login Successfully!');
                        if(obj.third==1){
                            window.setTimeout(function(){location.href=obj.url},1000);
                        }
                    }

                },
                error:function(){

                    $("#loginModal").attr('disabled',false);
                    $("#loginModal").html('Login');
//window.setTimeout(function(){location.reload()},1000);

                }

            });
        }
    });
</script>

<!-- Login Download validation -->
<script>
    $("#login-download-form").validate({
        rules:{
            email:{required:true},password:{required:true}
        },
        messages:{
            email:"Please enter an username or email address",
            password:"Please enter a password"

        },
        submitHandler:function(form){
            $("#loginButtonDownload").attr('disabled',true);
            $("#loginButtonDownload").html('Loading ......');
            $.ajax({
                url:"{{url('/')}}/ajax/login_download",
                method:'post',
                data:$('#login-download-form').serialize(),
                success:function(data){
                    toastr.remove();
                    $("#loginButtonDownload").attr('disabled',false);
                    $("#loginButtonDownload").html('Login');
                    if(data=='Invalid Credentials!') {
                        toastr["error"](data);

                    }
                    else {

                        $(".dd").html(data);
                        console.log(data);

                        var obj = jQuery.parseJSON( data );
                        $(".dd").html(obj.first);
                        console.log(obj.second);
                        toastr["success"]('Login Successfully!');
                        toastr["success"]('Download details are sent to your registered email address!','',{timeOut: 5000});
                        $('.downloadCount').html(parseInt($('.downloadCount').html(), 10)+1);

                        window.setTimeout(function(){
                            $('#loginDownloadModal').modal('hide').on('hidden.bs.modal', function(e) {
                                //$('#updatePasswordModal').modal('show');
                                $(this).off('hidden.bs.modal');
                            });
                        },2000);
                        
                    }

                },
                error:function(){

                    $("#loginButtonDownload").attr('disabled',false);
                    $("#loginButtonDownload").html('Login');
                    window.setTimeout(function(){location.reload()},1000);

                }

            });
        }
    });
</script>

<!-- forget-password -->
<script>
    $("#forget-password").validate({
        rules:{
            email:{required:true,email:true}
        },
        messages:{
            email:{required:"Please enter an email address",email:"Please enter a valid email address"}

        },
        submitHandler:function(form){

            $("#forget-password-submit").attr('disabled',true);
            $("#forget-password-submit").html('Loading ...');

            $.ajax({
                url:"{{url('/')}}/ajax/forgot_password",
                method:'post',
                data:$('#forget-password').serialize(),
                success: function(data) {
                    $("#forget-password-submit").attr('disabled',false);
                    $("#forget-password-submit").html('Submit');
                    if (data=='The email you’ve entered doesn’t match any account.') {

                        toastr["error"](data);

                    }
                    else {
                        $('#useremailaddress').val(data);
                        $('#forgetPasswordModal').modal('hide').on('hidden.bs.modal', function(e) {
                            $('#verifycode').modal('show');
                            $(this).off('hidden.bs.modal');
                        });
                        toastr.clear();
                        toastr.success('We’ve sent verification code in your email.', '',{timeOut: 10000});
                    }
                },
                error:function(){

                //    window.setTimeout(function(){location.reload()},1000);

                }

            });
        }
    });
</script>

<!-- Edit profile modal open -->
<script>
    function editprofile()
    {

        $.ajax({
            url:"{{url('/')}}/ajax/edit_profile_modal",
            method:'post',
            data:'',
            success:function(data){
                $(".ep").html(data);
                $('#editProfileModal').modal('show');
                $('#editProfileModal').show();

            },
            error:function(){
               // window.setTimeout(function(){location.reload()},1000);
            }

        });
    }

</script>

<!-- Edit Company modal open -->
<script>
    function editcompany()
    {
        $.post("{{url('/')}}/ajax/edit_company_modal",function(data){
            console.log(data);

            var obj = jQuery.parseJSON( data );
            console.log(obj);
           // alert(obj.second)
            $("#eccompany").html(obj.first);
            $("#editor").html(obj.second);
            $('#companyModal').modal('show');
            $('#companyModal').show();

        });


    }
</script>

<!-- update password -->
<script>
    $("#update-password").validate({
        rules: {
            opassword: {required: true },
            npassword: {required: true},
            cpassword: {required: true,equalTo: "#npassword" }
        },
        messages:{
            cpassword:"Please enter a Confirm Password",
            npassword:"Please enter a New Password",
            opassword:"Please enter a Old Password"},
        submitHandler: function(form) {
            $("#upass").attr('disabled',false);
            $("#upass").html('Loading ...');
            $.ajax({
                url: "{{url('/')}}/ajax/update_password",
                method: "post",
                cache: "false",
                data: $("#update-password").serialize(),
                error: function(data) {
                    $("#upass").attr('disabled',false);
                    $("#upass").html('Save Changes');
                    window.setTimeout(function(){location.reload()},1000);

                },
                success: function(data) {
                    $("#upass").attr('disabled',false);
                    $("#upass").html('Save Changes');

                    if(data =='Password updated successfully.'){
                        window.setTimeout(function() {$("#passwordModal").modal('hide'); }, 2000);
                        toastr["success"](data);
                    }
                    else {
                        toastr["error"](data);
                    }
                }
            })
        }
    })
</script>

<!-- update password -->
<script>
    $("#update-password2").validate({
        rules: {
            npassword: {required: true},
            cpassword: {required: true,equalTo: "#npassword2" }
        },
        messages:{
            cpassword:"Please enter a Confirm Password",
            npassword:"Please enter a New Password"},
        submitHandler: function(form) {
            $("#upass").attr('disabled',false);
            $("#upass").html('Loading ...');
            $.ajax({
                url: "{{url('/')}}/ajax/update_password2",
                method: "post",
                cache: "false",
                data: $("#update-password2").serialize(),
                error: function(data) {
                    $("#upass").attr('disabled',false);
                    $("#upass").html('Save Changes');
                    window.setTimeout(function(){location.reload()},1000);

                },
                success: function(data) {
                    $("#upass").attr('disabled',false);
                    $("#upass").html('Save Changes');

                    if(data =='Password updated successfully.'){
                        window.setTimeout(function() {$("#updatePasswordModal").modal('hide'); }, 2000);
                        toastr["success"](data);
                    }
                    else {
                        toastr["error"](data);
                    }
                }
            })
        }
    })
</script>

{{--upload validation and add resource --}}
<script>
    $('#upload-resource').validate({
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

            if($('#contentcategory').val()==null){
                toastr["error"]('Please select at least one content category');
                return false;
            }
            if($('#editor1').html().length < 1){
                toastr["error"]('Description is required');
                return false;
            }

            if( $('#show').val() == '6') //Check type is video link
            {

                if($("#linkyt").val() == '') //Check video link is empty
                {

                    $("#linkyt").focus();
                    $("#errorMsg1").hide();
                    $("#errorMsg").show();
                    return false;

                }
                else {

                    var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
                    var regex = new RegExp(pattern);
                    var website_url = $("#linkyt").val();// url of the website
                    if (website_url.match(regex)) {} // valid url
                    else {
                        $("#errorMsg").hide();
                        $("#errorMsg1").show();
                        return false;
                    }

                }
            }
            else if( $('#show').val() == '7') // Check type is e-book link
            {
                if($("#ebook").val() == '') //check empty
                {
                    $("#ebook").focus();
                    $("#errorMsgBook").show();
                    $("#errorMsgBook1").hide();

                    return false;
                }
                else
                {
                    var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
                    var regex = new RegExp(pattern);
                    var website_url = $("#ebook").val();// url of the website
                    if (website_url.match(regex)) {} // url valid
                    else {
                        $("#ebook").focus();
                        $("#errorMsgBook").hide();
                        $("#errorMsgBook1").show();
                        return false;
                    }

                }

            }

            var val = $('.filetype:checked').val();

            if(val =='utm') {
                if($("#utmValue").val() == '') {
                    $("#utmValue").focus();
                    $("#errorMsgUTM").show();
                    $("#errorMsgUTM1").hide();
                    return false;

                }else {

                    var pattern = /((https?|ftp)\:\/\/)?[\w\-_]+(\.[\w\-_]+)+([\w\-\.,@?^=%&amp;:/~\+#]*[\w\-\@?^=%&amp;/~\+#])+(.[a-z])?/;
                    var regex = new RegExp(pattern);
                    var website_url = $("#utmValue").val();// url of the website
                    if (website_url.match(regex)) {

                    }
                    else {
                        $("#errorMsgUTM").hide();
                        $("#errorMsgUTM1").show();
                        return false;
                    }

                }
            }
            $("#errorMsg1,#errorMsg,#errorMsgBook,#errorMsgBook1,#errorMsgUTM,#errorMsgUTM1").empty();
            var edit = $('#editor1').html();

            var formData = new FormData($("#upload-resource")[0]);
            formData.append('description', edit);
            $("#upload").attr('disabled',true);
            $("#upload").html('Loading ....');
            $.ajax({
                url:"{{url('/')}}/upload_resource",
                type:"post",
                cache: false,
                data:formData,
                error:function()
                {
                    alert('error');
                    $("#upload").attr('disabled',false);
                    $("#upload").html('Upload');
                },
                success:function(data)
                {

                    $("#upload").attr('disabled',false);
                    $("#upload").html('Upload');
                    if(data=="success") {
                        toastr["success"]('Add Successfully!');
                        window.setTimeout(function(){location.reload()},1000);

                    }

                    else if(data=="Invalid image type") {
                        toastr["error"](data);
                    }
                    else if(data=="Resource is required") {
                        toastr["error"](data);
                    }
                    else {
                        toastr["error"](data);
                    }
                },

                contentType: false,
                processData: false

            });
            return false;

        }
    });


</script>
{{--End upload validation and add resource --}}

<!-- Verify code -->
<script>
    $("#verify-code").validate({
        rules: { code: {required: true},
            messages:{code:"Please enter a code number" }
        },
        submitHandler: function(form) {
            $("#verify-code-submit").attr('disabled',true);
            $("#verify-code-submit").html('Loading ...');
            $.ajax({
                url: "{{url('/')}}/ajax/user_verify_code",
                method: "post",
                cache: "false",
                data: $("#verify-code").serialize(),
                error: function() {},
                success: function(data) {
                    $("#verify-code-submit").attr('disabled',false);
                    $("#verify-code-submit").html('Submit');
                    if (data == 'You’ve entered is invalid code.') {
                        toastr["error"](data);
                    } else {
                        $('#useremailaddress1').val(data);
                        $('#verifycode').modal('hide').on('hidden.bs.modal', function(e) {
                            $('#setpassword').modal('show');
                            $(this).off('hidden.bs.modal');
                        });
                    }
                }
            })
        }
    });
</script>

<!-- set password -->
<script>
    $("#set-password").validate({
        rules: {
            npassword: {
                required: true
            },
            cpassword: {
                required: true,
                equalTo: "#newpassword"
            }
        },
        messages:{npassword:"Please enter a New Password",cpassword:"Please enter a Confirm Password" },
        submitHandler: function(form) {
            $("#set-password-submit").attr('disabled',true);
            $("#set-password-submit").html('Loading ...');

            $.ajax({
                url: "{{url('/')}}/ajax/user_set_password",
                method: "post",
                cache: "false",
                data: $("#set-password").serialize(),
                success: function(data) {
                    $("#set-password-submit").attr('disabled',false);
                    $("#set-password-submit").html('Submit');
                    $('#emailaddress').val(data);
                    $("#setpassword").modal('hide').on('hidden.bs.modal', function(e) {
                        $('#loginModal').modal('show');
                        $('#login').tab('show');
                        $(this).off('hidden.bs.modal');
                    });

                },
                error: function() {}
            });
        }
    });
</script>

<!-- Logout -->
<script>
    function logout()
    {
        $.ajax({
            url:"{{url('/')}}/ajax/logout",
            method:'post',
            data:'',
            success:function(data){
                $(".dd").html(data);
            },
            error:function()
            {
                window.setTimeout(function(){location.reload()},1000);

            }

        });
    }
</script>

<!-- Scroll to top button show/hide and mobile device class show/hide-->
<script>
    $(window).scroll(function(){
        if($(this).scrollTop()>100) {
            $('.fade1').fadeIn();
        } else {
            $('.fade1').fadeOut();}});

    $("a[href='#top']").click(function(){

        $("html, body").animate({scrollTop:0},"slow");
        return false;});

    $(".collapse").on("shown.bs.collapse", function() {
        $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus")
    }).on("hidden.bs.collapse", function() {
        $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus")
    });
    $(document).ready(function(){
        var windowWidth = $(window).width();
        if(windowWidth <= 760) //for iPad & smaller devices
        {
            $('.filter').remove();
            $('.filterButton').show();

        }

    });
</script>

<!-- Ajax resource detail html -->
<script>
    function resourceDetail(id){
        $.ajax({

            url:"{{url('/')}}/ajax/resource_detail",
            method:"post",
            data:{id:id},
            success:function(data){
                $("#resourceDetail").html(data);
                $('#quick-view').modal('show');
                return false;

            },
            error:function(){alert('error');}

        });
    }

</script>

<!-- Resource Download Script-->
<script>
    function resourceDownload(id){

        $("#downloadingButton").attr('disabled',true);
        $("#downloading").html('Downloading ......');
        $.ajax({
            url:"{{url('/')}}/ajax/download_resource",
            method:"post",
            data:{id:id},
            success:function(data){
                $("#downloadingButton").attr('disabled',false);
                $("#downloading").html('Download');
                if(data =='error'){
                    $('#loginDownloadModal').modal('show');
                }
                else{
                    toastr["success"]('Download details are sent to your registered email address!','',{timeOut: 5000});
                    $("#downloadingButton").attr('disabled',false);
                    $("#downloading").html('Download');
                    $('.downloadCount').html(parseInt($('.downloadCount').html(), 10)+1)
                }
            },
            error:function(){

            }

        });
    }
</script>

<!-- Keyword search -->
<script>

    $("#k_search").click(function(){
        $("#searchModal").modal("hide");
        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand  =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#c_search").click(function(){
        $("#searchModal").modal("hide");
        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#date_search").click(function(){
        $("#searchModal").modal("hide");
        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#catSubmit").click(function(){
        $("#categoriesModal").modal("hide");
        $("#searchModal").modal("hide");
        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category_modal').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;
        window.setTimeout(function() { window.location.href = url }, 100)

    });

</script>

<!-- search and filter script -->
<script>
    $("#clearKeyword").click(function(){
        $(".loading").show();
        var keyword='';
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#clearCompany").click(function(){

        $(".loading").show();
        var keyword=$('#keyword').val();
        var company='';
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#clearDate").click(function(){

        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date ='';
        var e_date ='';
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#clearContentType").click(function(){

        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand ='';
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#clearTypeOfResource").click(function(){

        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource ='';
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;
        window.setTimeout(function() { window.location.href = url }, 100)

    });

    $("#clearContentCategory").click(function(){

        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category ='';
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;
        window.setTimeout(function() { window.location.href = url }, 100)

    });



    $(":checkbox.typeOfResource").change(function(){
        $(".loading").show();
        $("#searchModal").modal("hide");
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });
    $(":checkbox.brands").change(function(){
        $("#searchModal").modal("hide");
        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)

    });
    $(":checkbox.categories").change(function(){
        $("#searchModal").modal("hide");
        $(".loading").show();
        var keyword=$('#keyword').val();
        var company=$('#company').val();
        var s_date =$('#s_date').val();
        var e_date =$('#e_date').val();
        var brand =$('#brand').val();
        var type_of_resource =$('#type_of_resource').val();
        var content_category =$('#content_category').val();
        var url = "<?php echo url("/")?>/search?keyword="+keyword+"&company="+company+"&s_date="+s_date+"&e_date="+e_date+"&content_type="+brand+"&resources="+type_of_resource+"&content_category="+content_category;

        window.setTimeout(function() { window.location.href = url }, 100)


    });
    function updateTypeOfResource() {

        var type_of_resource = [];
        $("#typeOfResourceClick :checked").each(function() {
            type_of_resource.push($(this).val())
        });
        $("#type_of_resource").val(type_of_resource);

    }

    function updateBrand() {

        var brand_values = [];
        $("#brandClick :checked").each(function() {
            brand_values.push($(this).val())
        });
        $("#brand").val(brand_values);

    }

    function updateContentCategory() {

        var content_category_values = [];
        $("#contentCategoryClick :checked").each(function() {
            content_category_values.push($(this).val())
        });
        $("#content_category").val(content_category_values);

    }

    function updateTypeOfResourceModal() {

        var type_of_resource = [];
        $("#typeOfResourceClickModal :checked").each(function() {
            type_of_resource.push($(this).val())
        });
        $("#type_of_resource").val(type_of_resource);

    }

    function updateBrandModal() {

        var brand_values = [];
        $("#brandClickModal :checked").each(function() {
            brand_values.push($(this).val())
        });
        $("#brand").val(brand_values);

    }

    function updateContentCategoryClickModal() {

        var content_category_values = [];
        $("#contentCategoryClickModal :checked").each(function() {
            content_category_values.push($(this).val())
        });
        $("#content_category").val(content_category_values);

    }


    function updateContentCategoryModal() {

        var content_category_values = [];
        $("#contentCategoryModalClick :checked").each(function() {
            content_category_values.push($(this).val())
        });
        $("#content_category_modal").val(content_category_values);

    }

    $(function() {

        $("#typeOfResourceClick input").click(updateTypeOfResource);
        updateTypeOfResource();

        $("#brandClick input").click(updateBrand);
        updateBrand();

        $("#contentCategoryClick input").click(updateContentCategory);
        updateContentCategory();

        $("#typeOfResourceClickModal input").click(updateTypeOfResourceModal);
        updateTypeOfResourceModal();

        $("#brandClickModal input").click(updateBrandModal);
        updateBrandModal();

        $("#contentCategoryClickModal input").click(updateContentCategoryClickModal);
        updateContentCategoryClickModal();

        $("#contentCategoryModalClick input").click(updateContentCategoryModal);
        updateContentCategoryModal();
    });
</script>

<!-- Word first character css change -->
<script>
    $(document).ready(function() {

        var words = $('.f-word-change').text().split(' ');
        var html = '';
        $.each(words, function() {
            html += '<span style="font-size:125% ">'+this.substring(0,1)+'</span>'+this.substring(1) + ' ';
        });
        $('.f-word-change').html(html);

        var words1 = $('.f-word-change1').text().split(' ');
        var html1 = '';
        $.each(words1, function() {
            html1 += '<span style="font-size:125%; ">'+this.substring(0,1)+'</span>'+this.substring(1) + ' ';
        });
        $('.f-word-change1').html(html1);
    });


</script>


<!-- DTables JS-->
<script>
    $(function(){

        $("#downloads").dataTable({
            "sPaginationType": "full_numbers",
            "iDisplayLength" : 10
        });
        $('#downloads_filter input').addClass('form-control');

        $("#views").dataTable({
            "sPaginationType": "full_numbers",
            "iDisplayLength" : 10
        });
        $('#views_filter input').addClass('form-control');

        $("#anonymous_views").dataTable({
            "sPaginationType": "full_numbers",
            "iDisplayLength" : 10
        });
        $('#anonymous_views_filter input').addClass('form-control');
    })
</script>


<!-- function run when class found in page -->
<script type="text/javascript">
    $(function () // on document.ready()
    {
        if ($('.aboutPage').length > 0)
        {

            $(document).on('click', 'a[href^="#"]', function(e) {
// target element id
                var id = $(this).attr('href');

// target element
                var $id = $(id);
                if ($id.length === 0) {
                    return;
                }

// prevent standard hash navigation (avoid blinking in IE)
                e.preventDefault();

// top position relative to the document
                var pos = $(id).offset().top;
                pos = pos -50;

// animated top scrolling
                $('body, html').animate({scrollTop: pos});
            });
        }
    });

</script>


<script>
    function editResource(id)
    {
        $("#editing").attr('disabled',true);
        $("#editing").html('Loading');
        $(".loading").show();
        $.get("<?php echo url('/') ?>/edit_resource/"+id, function (result) {
// append response to body
            $('#editModal').modal('show');

            $("#editing").attr('disabled',false);
            $("#editing").html('Edit');
            $('.edit-resource-modal').html('');
            $(".loading").hide();

            $('.edit-resource-modal').html(result);


        });
    }

    function deleteResource(id){

        bootbox.confirm("Are you sure you want to delete this Resource?", function (result) {
            if (result == true) {
                $.get("<?php echo url('/') ?>/delete_resource/"+id, function (result) {

                    window.location.href = result;

                });
            }
            else {

            }
        });

    }
</script>

<script>

</script>

<script type="text/javascript">
    $('ul.pagination').hide();
    $(function() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
            } }
        $('.infinite-scroll').jscroll({
            autoTrigger: true,
            loadingHtml: '<img class="center-block" style="margin-bottom:20px" src="{{url('/')}}/public/images/rolling.gif" alt="Loading..." />',
            padding: 0,
            nextSelector: '.pagination li.active + li a',
            contentSelector: 'div.infinite-scroll',
            callback: function() {
                $('ul.pagination').remove();
                $('form input[type="text"].bfh-phone, form input[type="tel"].bfh-phone, span.bfh-phone').each(function() {
                    var $phone = $(this);
                    $phone.bfhphone($phone.data());
                });
                window.setTimeout(function(){initi();},200);
            }
        });
    });
    function initi() {
        var imgDefer = document.getElementsByTagName('img');
        for (var i=0; i<imgDefer.length; i++) {
            if(imgDefer[i].getAttribute('data-src')) {
                imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
            } } }
</script>

<script type="text/javascript">
    var my_image1 = new Image();
    var my_image2 = new Image();
    var my_image3 = new Image();
    var my_image4 = new Image();
    var my_image5 = new Image();
    var my_image6 = new Image();
    var my_image7 = new Image();
    var my_image8 = new Image();
    my_image1.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-cement-2.jpg';
    my_image2.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-equipo.jpg';
    my_image3.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-emj.jpg';
    my_image4.src = 'http://flockxchange.com/public/images/Fan-Page-banner-image.jpg';
    my_image5.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-qem.jpg';
    my_image6.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-asia-miner.jpg';
    my_image7.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-concrete.jpg';
    my_image8.src = 'http://flockxchange.com/public/images/publisher/Fan-Page-banner-image-coal.jpg';

    var my_image1_logo = new Image();
    var my_image2_logo = new Image();
    var my_image3_logo = new Image();
    var my_image4_logo = new Image();
    var my_image5_logo = new Image();
    var my_image6_logo = new Image();
    var my_image7_logo = new Image();
    var my_image8_logo = new Image();
    my_image1_logo.src = 'http://flockxchange.com/public/images/publisher/cement-america-banner-logo.png';
    my_image2_logo.src = 'http://flockxchange.com/public/images/publisher/coal-age-banner-logo.png';
    my_image3_logo.src = 'http://flockxchange.com/public/images/publisher/concrete-products-banner-logo.png';
    my_image4_logo.src = 'http://flockxchange.com/public/images/publisher/e-&-m-j-banner-logo.png';
    my_image5_logo.src = 'http://flockxchange.com/public/images/publisher/eqm-banner-logo.png';
    my_image6_logo.src = 'http://flockxchange.com/public/images/publisher/qem-banner-logo.png';
    my_image7_logo.src = 'http://flockxchange.com/public/images/publisher/rock-product-logo.jpg';
    my_image8_logo.src = 'http://flockxchange.com/public/images/publisher/tam-banner-logo.png';


</script>

<script>
    $("#contact-form").validate({
        rules:{
            email:{required:true,email:true},name:{required:true},phone:{required:true},
            company:{required:true},business:{required:true}
        },
        messages:{
            email:{required:"Please enter a email address",email:"Please enter a valid email address"},
            name:"Please enter a name",
            phone:"Please enter a phone",
            company:"Please enter a company",
            business:"Please enter a business sector"
        },
        submitHandler:function(form){
            $("#submit").attr('disabled',true);
            $("#submit").html('Sending ......');
            $.ajax({
                url:"{{url('/')}}/ajax/contact",
                method:'post',
                data:$('#contact-form').serialize(),
                success:function(data){
                    $("#submit").attr('disabled',false);
                    $("#submit").html('Send');
                    window.setTimeout(function() {$("#contactForm").modal('hide'); }, 2000);
                    toastr["success"]('Thanks for contacting us! <br/> We will get in touch with you shortly.');

                },
                error:function(){
                    window.setTimeout(function(){location.reload()},1000);
                }

            });
        }
    });

    $("#update-schedule").validate({

        submitHandler:function(form){
            $("#add_schedule_btn").attr('disabled',true);
            $("#add_schedule_btn").html('Loading ...');
            $.ajax({
                url:"{{url('/')}}/ajax/edit_schedule",
                method:'post',
                data:$("#update-schedule").serialize(),
                success: function(data) {
                    console.log(data);
                    $("#add_schedule_btn").attr('disabled',false);
                    $("#add_schedule_btn").html('Save Changes');
                    if (data=='Invalid Credentials!') {
                        toastr["error"](data);
                    }else{
                        toastr["success"](data);
                        window.setTimeout(function() {
                            location.reload()
                        }, 500);
                    }
                },
                error:function(){}
            });
        }
    });

    function request_demo(id){
        $.ajax({
            url:"{{url('/')}}/ajax/request_demo/"+id,
            method:"post",
            success:function(data){
                var obj = jQuery.parseJSON( data );
                $("#company_detail").html(obj.first);
                $("#member_email").val(obj.second);
                $('#request_quote').modal('show');
                return false;
            },
            error:function(){alert('error');}
        });
    }

    $("#request-quote").validate({
        rules:{
            description:{required:true}
        },
        submitHandler:function(form){
            $("#btn_request_quote").attr('disabled',true);
            $("#btn_request_quote").html('Loading ...');
            var formData = new FormData($("#request-quote")[0]);
            $.ajax({
                url:"{{url('/')}}/ajax/request_quote",
                method:'post',
                data:formData,
                success: function(data) {
                    $("#btn_request_quote").attr('disabled',false);
                    $("#btn_request_quote").html('Send');
                    $('#request-quote')[0].reset();
                    if (data=='Invalid Credentials!') {
                        toastr["error"](data);
                    }else{
                        $('#request_quote').modal('hide');
                        toastr["success"](data);
                    }
                },
                error:function(){
                    alert('error')
                },
                contentType: false,
                processData: false
            });
        }
    });

    $('#add_product_btn').click(function(){
        if ($('#upload-product').valid()) {
            $('#upload-product').submit();
        }
    });

    $("#upload-product").validate({
        rules:{
            product_name:{required:true}
        },
        messages:{
            product_name:{required:"Please enter a product name"}
        },
        submitHandler:function(form){
            $("#add_product_btn").attr('disabled',true);
            $("#add_product_btn").html('Loading ...');
            var formData = new FormData($("#upload-product")[0]);
            if($('#product_category').val()==null){
                $("#add_product_btn").attr('disabled',false);
                $("#add_product_btn").html('Add Product');
                toastr["error"]('Please select product category');
                return false;
            }
            $.ajax({
                url:"{{url('/')}}/ajax/add_product",
                method:'post',
                data:formData,
                success: function(data) {
                    $("#add_product_btn").attr('disabled',false);
                    $("#add_product_btn").html('Add Product');
                    if (data=='Invalid Credentials!') {
                        toastr["error"](data);
                    }else{
                        toastr["success"](data);
                        window.setTimeout(function() {
                            location.reload()
                        }, 500);
                    }

                },
                error:function(){


                },
                contentType: false,
                processData: false

            });
        }
    });

    $(function()
    {
        $(document).on('click', '.btn-add', function(e)
        {
            e.preventDefault();

            var controlForm = $('.controls form:first'),
                currentEntry = $(this).parents('.entry:first'),
                newEntry = $(currentEntry.clone()).appendTo(controlForm);

            newEntry.find('input').val('');
            controlForm.find('.entry:not(:last) .btn-add')
                .removeClass('btn-add').addClass('btn-remove')
                .removeClass('btn-success').addClass('btn-danger')
                .html('<span class="glyphicon glyphicon-trash"></span>');
        }).on('click', '.btn-remove', function(e)
        {
            $(this).parents('.entry:first').remove();

            e.preventDefault();
            return false;
        });
    });

    $(function() {
        $('.chosen-select').chosen();
        $('.chosen-select-deselect').chosen({
            allow_single_deselect: true
        });
    });
    if ($('.chosen-container').length > 0) {
        $('.chosen-container').on('touchstart', function(e){
            e.stopPropagation(); e.preventDefault();
            // Trigger the mousedown event.
            $(this).trigger('mousedown');
        });
    }

    $('#categoriesModal').on('shown.bs.modal', function () {
        $('.chosen-select', this).chosen('destroy').chosen();
    });

    function delete_product(id)
    {
        bootbox.confirm("Are you sure you want to delete this Product?", function (result) {
            if (result == true) {
                $.get("{{url('/')}}/ajax/delete_product/"+id, function (result) {
                    toastr["success"]('Product Deleted'); window.location.href = result;});
            }
            else { }
        });
    }


</script>
<script>
    $('.modal-dialog').draggable();

    new WOW().init();
</script>
