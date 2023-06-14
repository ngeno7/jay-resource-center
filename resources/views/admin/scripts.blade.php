

<!-- Material select -->
<script>
$(document).ready(function() {
 $('.mdb-select').material_select();
});
</script>

<!-- Ezdz plugin -->
<script>
   $('[class^=a][type="file"]').ezdz({
         text:"<img src=''/>"
       }  );
</script>


<!-- Validations -->
<script type="text/javascript">

    $(document).ready(function(){

//Login
        $('#form').validate({
            rules: { password: { minlength: 5,required: true }, email: {required: true}
            },

            submitHandler:function(form){

                $('#logInButton').attr('disabled',true);
                $('#logInButton').html('Loading ...');
                $.ajax({
                    url:"{{url('/')}}/admin/ajax/login",
                    type:'post',
                    data: $("#form").serialize(),
                    error:function(){
                        url='{{url('/')}}/admin/ajax/login';
                    },
                    success:function(data)
                    {
                        $('#logInButton').attr('disabled',false);
                        $('#logInButton').html('Log In');
                        if(data=='login successful')
                        {
                            toastr["success"](data);
                            @if(env('APP_ENV') == 'local')
                            url = "{{url('/')}}/admin/#/dashboard"
                            @else 
                            url = "{{url('/')}}/admin/dashboard#/dashboard"
                            @endif
                            window.setTimeout(function() { window.location.href = url }, 1000)
                        }
                        else
                        {
                            toastr["error"](data);
                        }
                    }
                })
            }
        });

        //Edit admin
        $('#edit-admin').validate({
            rules: { name: {required: true }, email: {required: true}
            },

            submitHandler:function(form){
                var formData = new FormData($("#edit-admin")[0]);

                $('#editAdminButton').attr('disabled',true);
                $('#editAdminButton').html('Loading ...');
                $.ajax({
                    url:"admin/editProfile",
                    type:'post',
                    data: formData,
                    contentType: false,
                    processData: false,
                    cache:false,
                    error:function(){
                        url='{{url('/')}}';
                        window.setTimeout(function() { window.location.href = url }, 100)
                    },
                    success:function(data)
                    {
                        $('#editAdminButton').attr('disabled',false);
                        $('#editAdminButton').html('Log In');
                        if(data=='Save Successfully')
                        {
                            toastr["success"](data);
                            url='dashboard';
                            window.setTimeout(function() { window.location.href = url }, 100)
                        }
                        else
                        {
                            toastr["error"](data);
                        }
                    }
                })
            }
        });

        //Change Password admin
        $('#change-password').validate({
            rules: { old_password: { minlength: 5,required: true }, new_password: { minlength: 5,required: true}},

            submitHandler:function(form){

                $('#changePasswordButton').attr('disabled',true);
                $('#changePasswordButton').html('Loading ...');
                $.ajax({
                    url:"admin/changePassword",
                    type:'post',
                    data: $("#change-password").serialize(),
                    error:function(){
                        url='{{url('/')}}';
                        window.setTimeout(function() { window.location.href = url }, 100)
                    },
                    success:function(data)
                    {
                        $('#changePasswordButton').attr('disabled',false);
                        $('#changePasswordButton').html('Save Changes');
                        if(data=='Save Successfully')
                        {
                            toastr["success"](data);
                            url='dashboard';
                            window.setTimeout(function() { window.location.href = url }, 100)
                        }
                        else
                        {
                            toastr["error"](data);
                        }
                    }
                })
            }
        });
        

  //edit-category
    $('#edit-category').validate({
        rules: {
            category_name: {
                required: true
            }
        },

        submitHandler: function(form) {
            $('#edit_category_button').attr('disabled', true);
            $('#edit_category_button').html('Loading ...');
            $.ajax({
                url: "{{url('/')}}/admin/ajax/edit_category",
                type: 'post',
                data: $("#edit-category").serialize(),
                error: function() {
                    url = '{{url('/')}}';
                },
                success: function(data) {
                    $('#edit_category_button').attr('disabled', false);
                    $('#edit_category_button').html('Save Changes');
                    if (data == 'Changes confirmed') {
                        toastr["success"](data);
                        window.setTimeout(function() {
                            location.reload()
                        }, 100)
                    } else {

                    }
                }
            })
        }
    });

    //add-category
    $('#add-category').validate({
        rules: {
            category_name: {
                required: true
            }
        },

        submitHandler: function(form) {
            $('#add_category_button').attr('disabled', true);
            $('#add_category_button').html('Loading ...');
            $.ajax({
                url: "{{url('/')}}/admin/ajax/add_category",
                type: 'post',
                data: $("#add-category").serialize(),
                error: function() {
                    url = '{{url('/')}}';
                },
                success: function(data) {
                    $('#add_category_button').attr('disabled', false);
                    $('#add_category_button').html('Add Sub Category');
                    if (data == 'Changes confirmed') {
                        toastr["success"](data);
                        window.setTimeout(function() {
                            window.location.href = '{{url('/')}}/admin/sub_categories';
                        }, 100)
                    } else {

                    }
                }
            })
        }
    });

    //add-category
    $('#add-new-category').validate({
        rules: {
            category_name: {
                required: true
            }
        },

        submitHandler: function(form) {
            $('#add_new_category_button').attr('disabled', true);
            $('#add_new_category_button').html('Loading ...');
            $.ajax({
                url: "{{url('/')}}/admin/ajax/add_category",
                type: 'post',
                data: $("#add-new-category").serialize(),
                error: function() {
                    url = '{{url('/')}}';
                },
                success: function(data) {
                    $('#add_new_category_button').attr('disabled', false);
                    $('#add_new_category_button').html('Add Category');
                    if (data == 'Changes confirmed') {
                        toastr["success"](data);
                        window.setTimeout(function() {
                            window.location.href = '{{url('/')}}/admin/sub_categories';
                        }, 100)
                    } else {

                    }
                }
            })
        }
    });

});



</script>
<script>
    $('.datepicker').pickadate({
        format: 'dd-mm-yyyy',
        formatSubmit: 'dd-mm-yyyy',
        hiddenName: true
    });
</script>

<!-- Date picker validation -->
<script>
var startDate = new Date('2012-01-01');
var FromEndDate = new Date('');
var ToEndDate = new Date('');

ToEndDate.setDate(ToEndDate.getDate()+365);

$('.from_date').datepicker({

weekStart: 1,
startDate: '01/01/2012',
endDate: FromEndDate,
language: 'pt-BR'

//    format: ' yyyy',
//    viewMode: 'years',
//    minViewMode: 'years'
})
.on('changeDate', function(selected){
startDate = new Date(selected.date.valueOf());
startDate.setDate(startDate.getDate(new Date(selected.date.valueOf())));
$('.to_date').datepicker('setStartDate', startDate);
});
$('.to_date').datepicker({

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

//Logout
function adminLogout()
{
    $.ajax({
        url:"{{url('/')}}/ajax/logout",
        type:'post',
        error:function(){
            url='{{url('/')}}';
            window.setTimeout(function() { window.location.href = url }, 100)
        },
        success:function(data)
        {
            url='{{url('/')}}';
            window.setTimeout(function() { window.location.href = url }, 100)

        }
    });
}


</script>
