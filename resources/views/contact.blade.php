@extends('layout.default')
@section('content')
@include('header')

<div class="container-fluid">
   <div class="container">
      <div class="row">
         <div class="col-md-7">
            <br/>
            <h2 class="font-weight-bold">Contact Us</h2>
            <br/>
            <form id="contact">
               <label class="form-label">Company Name</label>
               <input class="form-control" type="text" name="c_name" placeholder="Company Name">
               <br/>
               <label class="form-label">First Name</label>
               <input class="form-control" type="text" name="f_name" placeholder="First Name">
               <br/>
               <label class="form-label">Last Name</label>
               <input class="form-control" type="text" name="l_name" placeholder="Last Name">
               <br/>
               <label class="form-label">Email</label>
               <input class="form-control" type="text" name="email" placeholder="Email">
               <br/>
               <label class="form-label">Phone</label>
               <input class="form-control" type="text" name="phone" placeholder="Phone">
               <br/>
               <label class="form-label">Message</label>
               <textarea class="form-control" rows="7" name="message"  placeholder="Message"></textarea>
               <br/>
               <button class="btn btn-outline-primary btn-block waves-effect font-weight-bold" id="contact_btn">Contact</button>
               <br/><br/>
            </form>
         </div>
         <div class="col-md-5">
            <!--Google map--> <br/> <br> <br> <br> <br>
            <div class="row">
               <p class="ml15"><i class="fa fa-map-marker gradient-color"></i> <span>8751 E. Hampden Ave Suite B1 Denver, Colorado 80231</span></p>
               <p class="ml15"><i class="fa fa-phone gradient-color"></i> <span>+1 (303) 283-0640</span></p>
               <p class="ml15"><i class="fa fa-fax gradient-color"></i> <span>+1 (303) 283-0641</span></p>
               <p class="ml15"><i class="fa fa-envelope gradient-color"></i> <span>support@semcopublishing.com</span></p>
               <br>
            </div>
            <div id="map" class="z-depth-1-half map-container" style="height: 400px"></div>
            <br> <br>
         </div>
      </div>
   </div>
</div>
@include('modals')
@include('scripts')
@include('footer')
<script src="http://maps.googleapis.com/maps/api/js?key=AIzaSyCjAnICAKNpJvPuLbcLAD0Ar5S2R5QKkpo"></script>
<script>
   var map;
   google.maps.event.addDomListener(window, 'load', init_map);
   
   function init_map() {

      var lat=39.654660;
      var lng=-104.886550;
      var var_location = new google.maps.LatLng(lat, lng);

      var var_mapoptions = {
          center: var_location,
          zoom: 12
      };

      var var_marker = new google.maps.Marker({
          position: var_location,
          map: map,
          title: ""
       });

      var map = new google.maps.Map(document.getElementById("map"),
          var_mapoptions);
      var_marker.setMap(map);
      map.setCenter(var_location);

   }
</script>
<script>
   $('#contact').validate({
          rules: {
              c_name: { required: true},
              f_name: { required: true},
              l_name:{required: true},
              email: { required: true,email:true},
              phone: { required: true},
              message: { required: true}
          },
          messages: {
              f_name: "Please enter a first name",
              l_name: "Please enter a last name",
              email: "Please enter an email address",
              phone: "Please enter a phone number",
              c_name: "Please enter a company name",
              message: "Please enter a message"
          },
          submitHandler: function(form) {
              $("#contact_btn").attr('disabled', true);
              $("#contact_btn").html('Loading ......');
              $.ajax({
                  url: "{{url('/')}}/ajax/contact_us",
                  method: 'post',
                  data: $('#contact').serialize(),
                  success: function(data) {
                      toastr.remove();
                      $("#contact_btn").attr('disabled', false);
                      $("#contact_btn").html('Send');
                          $('#contact')[0].reset();
                          toastr["success"]('Thank you for contacting us – we will get back to you soon!');
   
                  },
                  error: function() {
                      toastr["error"]('Something went wrong, please try again');
                  }
              });
          }
      });
</script>
@endsection