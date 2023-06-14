
<!-- Edit Admin -->
<div class="modal fade" id="adminModal" tabindex="-1" role="dialog">
   <div class="modal-dialog " role="document">
      <!--Content-->
      <div class="modal-content" style="margin-top: 70px">
         <!--Header-->
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Edit Administrator</h4>
         </div>
         <!--Body-->
         <div class="modal-body">
            <form class="form-group" id="edit-admin" novalidate="novalidate">
               <div class="col-md-4 col-lg-4" style="margin-top: 2px" >
                  <input type="file" name="image" id="image" class="a" ><br/>
               </div>
               <div class="col-md-8">
                  <label class="form-label">Name <span class="form-asterick">&#42;</span></label>
                  <input class="form-control" type="text" name="name" placeholder=" Name" value="">
                  <br>
                  <label class="form-label" >Email <span class="form-asterick">&#42;</span></label>
                  <input class="form-control" type="text" name="email" placeholder="Email" value="">
                  <input class="form-control" type="hidden" name="old_email" placeholder="Email" value="">
                  <br>
               </div>
               <button class="btn" id="editAdminButton" style="margin: auto;width: 95%;padding-left: 40px; padding-right: 40px; color: #222;margin-left: 15px;background-color: #00897b;">Save Changes</button>
            </form>
         </div>
      </div>
      <!--/.Content-->
   </div>
</div>

<div class="modal fade" id="add_category" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
      <!--Content-->
      <div class="modal-content" style="margin-top: 70px">
         <!--Header-->
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Add Sub Category</h4>
         </div>
         <!--Body-->
         <div class="modal-body">
            <form class="form-group" id="add-category" novalidate="novalidate">
               <label class="form-label">Category Name</label>
                @php $categories=\App\ProductCategory::where('id_self_parent',null)->orderBy('name')->get(); @endphp
               <select class="form-control" name="category_id">
                  @foreach($categories as $category)
                     <option value="{{$category->category_id}}">{{$category->name}}</option>
                  @endforeach
               </select>
               <br>
               <label class="form-label">Sub Category Name</label>
               <input class="form-control" type="text" name="category_name" placeholder="Category Name" id="category_name" value="">
               <br>
               <button class="btn btn-block btn-warning"  id="add_category_button">Add Sub Category</button>
            </form>
         </div>
      </div>
      <!--/.Content-->
   </div>
</div>

<div class="modal fade" id="add_new_category" tabindex="-1" role="dialog">
   <div class="modal-dialog" role="document">
      <!--Content-->
      <div class="modal-content" style="margin-top: 70px">
         <!--Header-->
         <div class="modal-header">
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
               <span aria-hidden="true">&times;</span>
            </button>
            <h4 class="modal-title" id="myModalLabel">Add Category</h4>
         </div>
         <!--Body-->
         <div class="modal-body">
            <form class="form-group" id="add-category" novalidate="novalidate">

               <label class="form-label">Category Name</label>
               <input class="form-control" type="text" name="category_id"  value="">
               <input class="form-control" type="text" name="category_name" placeholder="Category Name" id="category_name" value="">
               <br>
               <button class="btn btn-block btn-warning"  id="add_new_category_button">Add Category</button>
            </form>
         </div>
      </div>
      <!--/.Content-->
   </div>
</div>

