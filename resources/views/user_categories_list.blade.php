
<select class="mdb-select" name="category" id="product_category">
 <option disabled>Select Categories</option>
 @if (Session::has('user_session'))
  @foreach($categories as $category)
   <optgroup label="{{$category->name}}">
     @foreach($category->sub_category as $row)
        @if(in_array($row->category_id,$member_categories))
          <option value="{{$row->category_id}}">{{$row->name}}</option>
        @endif
     @endforeach
   </optgroup>
  @endforeach
 @endif
</select>
