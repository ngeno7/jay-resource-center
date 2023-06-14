
<select class="mdb-select" name="category" id="product_category">
 <option disabled>Select Categories</option>
 <?php if(Session::has('user_session')): ?>
  <?php $__currentLoopData = $categories; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $category): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
   <optgroup label="<?php echo e($category->name); ?>">
     <?php $__currentLoopData = $category->sub_category; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $row): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
        <?php if(in_array($row->category_id,$member_categories)): ?>
          <option value="<?php echo e($row->category_id); ?>"><?php echo e($row->name); ?></option>
        <?php endif; ?>
     <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
   </optgroup>
  <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
 <?php endif; ?>
</select>
<?php /**PATH C:\Users\hngeno\Projects\resource-center\resources\views/user_categories_list.blade.php ENDPATH**/ ?>