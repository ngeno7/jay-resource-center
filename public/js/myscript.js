<!-- Tag Input Limit -->

$('input.tag').tagsinput({
    maxTags: 6
    });


<!-- Krajee Plugin -->

//$('#file-fr').fileinput1('clear');

$('#file-fr').on('filebrowse', function(event,files) {
    $('#file-fr').fileinput1('clear');
    });

var $input = $("#file-fr");
$input.fileinput1({
    overwriteInitial: true,
    uploadUrl: "<?php echo url('/')?>/upload", // server upload action
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

    showRemove: false

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


<!-- Change dropdown  -->

$("#show").change(function(){
    if($(this).val()=="6")
    {
    $("#text_area").show();
    $("#text_area1").hide();
    $("#file").hide();
    $("#fileType").hide();
    $("#utm").hide();
    }
    else if($(this).val()=="7")
    {
    $("#text_area1").show();
    $("#text_area").hide();
    $("#file").hide();
    $("#fileType").hide();
    $("#utm").hide();

    }
    else
    {
    $("#text_area").hide();
    $("#text_area1").hide();
    $("#file").show();
    $("#fileType").show();

    }
    });


<!-- Utm Field hide and show -->

$(".filetype").change(function () {


    var val = $('.filetype:checked').val();

    if(val =='utm')
    {
    $("#file").hide();
    $("#utm").show();
    }
    else if(val=='file')
    {
    $("#file").show();
    $("#utm").hide();
    }


    });


<!-- Ezdz plugin -->

$('[class^=a][type="file"]').ezdz({
    text:"<img src='<?php echo url('/')?>/public/images/upload_box.png'/>"
    }  );


<!-- Material select -->

$(document).ready(function() {
    $('.mdb-select').material_select();
    });


<!-- Owl Carousel tme duration and responsive scripot -->

$(document).ready(function() {

    var owl = $("#owl-demo1");

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
    $('.owl-carousel').owlCarousel({
    margin:10,
    loop:true,
    autoWidth:true,
    items:4
    })
    });



<!-- Edit Company modal validation and submit -->

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
    url: "<?php echo url('/')?>/ajax/edit_company",
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


<!-- PreLoader -->

$(window).load(function(){$("#preloader").hide();});
$(window).load(function(){$(window).height();
    $(window).scrollTop(0),$("#status").fadeOut(),
    $("#preloader").delay(350).fadeOut("slow")});


<!-- RIch text Editor js load-->

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
            var editorOffset = $('#editor').offset();
            $('#voiceBtn').css('position','absolute').offset({top: editorOffset.top, left: editorOffset.left+$('#editor').innerWidth()-35});
        } else {
            $('#voiceBtn').hide();
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
    $('#editor').wysiwyg({ fileUploadError: showErrorAlert} );
    window.prettyPrint && prettyPrint();
    });


<!-- Date picker validation -->

var startDate = new Date('01-01-2012');
var FromEndDate = new Date('');
var ToEndDate = new Date('');

ToEndDate.setDate(ToEndDate.getDate()+365);

$('.from_date').datepicker({

    weekStart: 1,
    startDate: '01/01/2012',
    endDate: FromEndDate,
    autoclose: true

//        format: ' yyyy',
//           viewMode: 'years',
//           minViewMode: 'years'
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



<!-- Load chosen select Js -->

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


<!-- Hide current modal and show new  modal -->

$(document).ready(function() {
    $("#registerhere").click(function() {

        $('#loginModal').modal('hide').on('hidden.bs.modal', function(e) {

            $('#registerModal').modal('show');
            $(this).off('hidden.bs.modal');
        });
    });

    $("#forgottenpassword").click(function(){

    $("#loginModal").modal('hide').on('hidden.bs.modal',function(e){
    $("#forgetPasswordModal").modal('show');
    $(this).off('hidden.bs.modal');
    });

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



<!-- Toastr Script -->

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
    };


<!-- When modal close reset form and error label hide -->

$('.modal').on('hidden.bs.modal', function(){
    $(this).find('form')[0].reset();
    $("label.error").hide();
    $(".error").removeClass("error");
    });


<!-- Edit profile validation -->

$("#edit-profile").validate({
    rules:{
    email:{required:true,email:true},firstName:{required:true},lastName:{required:true},
    username:{required:true},password:{required:true},companyName:{required:true},cell:{required:true},
    address:{required:true},city:{required:true},state_province:{required:true},country:{required:true},postalcode:{required:true}
    },
    messages:{
    email:{required:"Please enter a email address",email:"Please enter a valid email address"},
    firstName:"Please enter a firstname",
    lastName:"Please enter a lastname",
    username:"Please enter a username",
    password:"Please enter a password",
    companyName:"Please enter a companyname",
    cell:"Please enter a cell number",
    address:"Please enter a address",
    city:"Please enter a city",
    state_province:"Please enter a state/province",
    country:"Please enter a country",
    postalcode:"Please enter a postalcode"
    },
    submitHandler:function(form){
    $("#epbutton").attr('disabled',true);
    $("#epbutton").html('Loading ......');
    $.ajax({
    url:"<?php echo url('/')?>/ajax/editprofile",
    method:'post',
    data:$('#edit-profile').serialize(),
    success:function(data){
    toastr.remove();
    $("#epbutton").attr('disabled',false);
    $("#epbutton").html('Save Changes');
    if(data=='success')
    {
    window.setTimeout(function() {$("#editProfileModal").modal('hide'); }, 2000);

    toastr["success"]('Edit Successfully!');
    }
    else
    {
    toastr["error"](data);
    console.log(data);
    }

    },
    error:function(){
    alert('error');
    $("#epbutton").attr('disabled',false);
    $("#epbutton").html('Save Changes');
    window.setTimeout(function(){location.reload()},1000);

    }

    });
    }
    });


<!-- Register validation -->

$("#registration-form").validate({
    rules:{
    email:{required:true,email:true},firstName:{required:true},lastName:{required:true},
    username:{required:true},password:{required:true},companyName:{required:true},cell:{required:true},
    address:{required:true},city:{required:true},state_province:{required:true},country:{required:true},postalcode:{required:true}
    },
    messages:{
    email:{required:"Please enter a email address",email:"Please enter a valid email address"},
    firstName:"Please enter a firstname",
    lastName:"Please enter a lastname",
    username:"Please enter a username",
    password:"Please enter a password",
    companyName:"Please enter a companyname",
    cell:"Please enter a cell number",
    address:"Please enter a address",
    city:"Please enter a city",
    state_province:"Please enter a state/province",
    country:"Please enter a country",
    postalcode:"Please enter a postalcode"
    },
    submitHandler:function(form){
    $("#registerButton").attr('disabled',true);
    $("#registerButton").html('Loading ......');
    $.ajax({
    url:"<?php echo url('/')?>/ajax/register",
    method:'post',
    data:$('#registration-form').serialize(),
    success:function(data){
    toastr.remove();
    $("#registerButton").attr('disabled',false);
    $("#registerButton").html('Register');
    if(data=='Email/Username already exists!')
    {
    toastr["error"](data);
    console.log(data);
    }
    else
    {
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
    window.setTimeout(function(){location.reload()},1000);

    }

    });
    }
    });


<!-- Login validation -->

$("#login-form").validate({
    rules:{
    email:{required:true},password:{required:true}
    },
    messages:{
    email:"Please enter a username or email address",
    password:"Please enter a password"

    },
    submitHandler:function(form){
    $("#loginButton").attr('disabled',true);
    $("#loginButton").html('Loading ......');
    $.ajax({
    url:"<?php echo url('/')?>/ajax/login",
    method:'post',
    data:$('#login-form').serialize(),
    success:function(data){
    toastr.remove();
    $("#loginButton").attr('disabled',false);
    $("#loginButton").html('Login');
    if(data=='Invalid Credentials!')
    {
    toastr["error"](data);

    }
    else
    {
    window.setTimeout(function() {$("#loginModal").modal('hide'); }, 2000);

    $(".dd").html(data);
    console.log(data);
    toastr["success"]('Login Successfully!');
    }

    },
    error:function(){

    $("#loginModal").attr('disabled',false);
    $("#loginModal").html('Login');
    window.setTimeout(function(){location.reload()},1000);

    }

    });
    }
    });


<!-- forget-password -->

$("#forget-password").validate({
    rules:{
    email:{required:true,email:true}
    },
    messages:{
    email:{required:"Please enter a email address",email:"Please enter a valid email address"}

    },
    submitHandler:function(form){

    $("#forget-password-submit").attr('disabled',true);
    $("#forget-password-submit").html('Loading ...');

    $.ajax({
    url:"<?php echo url('/')?>/ajax/forgotpassword",
    method:'post',
    data:$('#forget-password').serialize(),
    success: function(data) {
    $("#forget-password-submit").attr('disabled',false);
    $("#forget-password-submit").html('Submit');
    if (data=='The email you’ve entered doesn’t match any account.')
    {

    toastr["error"](data);

    }
    else
    {
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

    window.setTimeout(function(){location.reload()},1000);

    }

    });
    }
    });


<!-- Edit profile modal open -->

function editprofile()
{

    $.ajax({
        url:"<?php echo url('/')?>/ajax/editProfileModal",
        method:'post',
        data:'',
        success:function(data){
            $(".ep").html(data);
            $('#editProfileModal').modal('show');
            $('#editProfileModal').show();

        },
        error:function(){
            window.setTimeout(function(){location.reload()},1000);
        }

    });
    }



<!-- Edit Company modal open -->

function editcompany()
{
    $.post("<?php echo url('/')?>/ajax/editCompanyModal",function(data){
        console.log(data);
        var obj = jQuery.parseJSON( data );
        console.log(obj);
        $("#eccompany").html(obj.first);
        $("#editor").html(obj.second);
        $('#companyModal').modal('show');
        $('#companyModal').show();

    });


    }


<!-- update password -->

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
    url: "<?php echo url('/')?>/ajax/update_password",
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
    else
    {
    toastr["error"](data);
    }
    }
    })
    }
    });


<!-- upload validation and add resource -->

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

    if( $('#show').val() == '6') //Check type is video link
    {

    if($("#linkyt").val() == '') //Check video link is empty
    {

    $("#linkyt").focus();
    $("#errorMsg1").hide();
    $("#errorMsg").show();
    return false;

    }
    else
    {

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

    if(val =='utm')
    {
    if($("#utmValue").val() == '')
    {
    $("#utmValue").focus();
    $("#errorMsgUTM").show();
    $("#errorMsgUTM1").hide();
    return false;

    }
    else
    {

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

    var formData = new FormData($("#upload-resource")[0]);
    $("#upload").attr('disabled',true);
    $("#upload").html('Loading ....');
    $.ajax({
    url:"<?php echo url('/')?>/upload_resource",
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
    if(data=="success")
    {
    toastr["success"](data);
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
    window.setTimeout(function(){location.reload()},1000);
    }
    },

    contentType: false,
    processData: false

    });
    return false;

    }
    });


<!-- Verify code -->

$("#verify-code").validate({
    rules: { code: {required: true},
    messages:{code:"Please enter a code number" }
    },
    submitHandler: function(form) {
    $("#verify-code-submit").attr('disabled',true);
    $("#verify-code-submit").html('Loading ...');
    $.ajax({
    url: "<?php echo url('/')?>/ajax/user_verify_code",
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


<!-- set password -->

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
    url: "<?php echo url('/')?>/ajax/user_set_password",
    method: "post",
    cache: "false",
    data: $("#set-password").serialize(),
    success: function(data) {
    $("#set-password-submit").attr('disabled',false);
    $("#set-password-submit").html('Submit');
    $('#emailaddress').val(data);
    $("#setpassword").modal('hide').on('hidden.bs.modal', function(e) {
    $('#loginModal').modal('show');
    $(this).off('hidden.bs.modal');
    });

    },
    error: function() {}
    });
    }
    });


<!-- Logout -->

function logout()
{
    $.ajax({
        url:"<?php echo url('/')?>/ajax/logout",
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


<!-- Scroll to top button show/hide and mobile device class show/hide-->

$(window).scroll(function(){
    if($(this).scrollTop()>100) {
    $('.fade1').fadeIn();
    } else {
    $('.fade1').fadeOut();}});

$("a[href='#top']").click(function(){$("html, body").animate({scrollTop:0},"slow");return false;});

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


<!-- Ajax resource detail html -->

function resourceDetail(id){
    $.ajax({

        url:"<?php echo url('/')?>/ajax/resource_detail",
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




<!-- Keyword search -->


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



<!-- search and filter script -->

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


<!-- Word first character css change -->

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




<!-- function run when class found in page -->

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


