
<?php $user_cookie= Cookie::get('user') ; $pass_cookie=Cookie::get('pass') ; if(empty($user_cookie) or empty($pass_cookie)) { $user_cookie=''; $pass_cookie='';  }?>
<?php
$regions=\App\Region::get();
$type_of_resource=\App\TypeOfResource::orderBY('resourcetypename')->get();
$industries=\App\ContentCategory::orderBY('industryname')->get();
$brands=\App\Brands::where('status','approved')->orderBY('brandid')->get();
$user_id=$categories=$member_categories='';
$all_categories=\App\ProductCategory::with('sub_category')->where('id_self_parent',NULL)->orderBy('name')->get();
if (Session::has('user_session')) {
$user = Session::get('user_session');
$user_id=$user[0]['user_id'];

    $member_category="SELECT GROUP_CONCAT(category_id) AS value  FROM user_categories where user_id='$user_id' group by category_id";
    $member_category = DB::select($member_category);

    if(!empty($member_category)) {
        foreach($member_category as $row) {
            $member_categories= $member_categories.','.$row->value;
        }
        $member_categories = explode(',', $member_categories);
    }else{
        $member_categories=[];
    }

    $categories=\App\ProductCategory::with('sub_category')->whereHas('sub_category', function($query) use ($member_categories) {
        $query->whereIn('category_id',$member_categories);
    })->get();
}
?>

<!-- Upload Resource -->
<div id="uploadModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg fileDialogsize" >
        <div class="modal-content">
            <div class="modal-body" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <form  class="form-group" enctype="multipart/form-data"   id="upload-resource" method="post" action="">
                    <div class="col-md-4 col-lg-4" style="margin-top: 22px">
                        <h3 style="">Add or upload a file</h3>
                        <input type="file" name="image" id="image" class="a" ><br/>
                    </div>
                    <div class="col-md-8 col-lg-8"  >
                        <label class="form-label">Topic</label>
                        <input class="form-control" type="text" name="topic" placeholder="Topic"><br/>
                        <label class="form-label">Author Name</label>
                        <input class="form-control" type="text" name="authorname" placeholder="Author Name">
                        <br/>
                        <label class="form-label">Keyword</label>
                        <input class="form-control tag" type="text" name="keyword"  placeholder="Keyword" data-role="tagsinput" >
                        <br/>
                        <label class="form-label" style="margin-top: 15px">Type Of Resource</label>
                        <select class="mdb-select" id="show" name="typeofresource">
                            <?php $__currentLoopData = $type_of_resource; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $type): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($type->resourcetypeid); ?>"><?php echo e($type->resourcetypename); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                        <input class="form-control" type="hidden" name="token" id="token" value="">
                    </div>
                    <div class="col-md-12"  id="text_area" style="display: none">
                        <label class="form-label">Video Link (Youtube/Vimeo/Websites)</label>
                        <input class="form-control" type="text" name="link" id="linkyt" placeholder="http://www.example.com"><br>
                        <p id="errorMsg" class="error-msg"><b>Please enter a Video link.</b></p>
                        <p id="errorMsg1" class="error-msg"><b>Please enter a valid URL.</b></p>
                    </div>
                    <div class="col-md-12"  id="text_area1" style="display: none">
                        <label class="form-label">E-Book Link</label>
                        <input class="form-control" type="text" name="ebook" id="ebook" placeholder="http://www.example.com"><br>
                        <p id="errorMsgBook" class="error-msg"><b>Please enter a E-Book link.</b></p>
                        <p id="errorMsgBook1" class="error-msg"><b>Please enter a valid URL.</b></p>
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
                        <select class="mdb-select" name="contentcategory[]" id="contentcategory" multiple>
                            <option disabled>Select Content Categories</option>
                            <?php $__currentLoopData = $industries; $__env->addLoop($__currentLoopData); foreach($__currentLoopData as $industry): $__env->incrementLoopIndices(); $loop = $__env->getLastLoop(); ?>
                                <option value="<?php echo e($industry->industryid); ?>"><?php echo e($industry->industryname); ?></option>
                            <?php endforeach; $__env->popLoop(); $loop = $__env->getLastLoop(); ?>
                        </select>
                    </div>
                    <div class="col-md-12">
                        <label class="form-label">Description</label>
                    </div>
                    <div class="col-md-12">
                        <div  class="btn-toolbar" data-role="editor-toolbar" data-target="#editor1">
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
                            <input type="text" data-edit="inserttext" id="voiceBtn1" x-webkit-speech="">
                        </div>
                        <div id="editor1">

                        </div>
                    </div>

                    <div class="col-md-12" id="fileType" >
                        <label for="filetype" class="control-label input-group form-label">File or UTM</label>
                        <div class="btn-group" >
                            <label class="btn btn-outline-primary active file-utm-padding">
                                <input type="radio" name="filetype" value="file" class="filetype active" autocomplete="off" checked> Add Resource
                            </label>
                            <label class="btn btn-warning file-utm-padding">
                                <input type="radio" name="filetype" value="utm" class="filetype active" autocomplete="off"> Add UTM
                            </label>
                        </div>
                        <br/> <br/>
                    </div>
                    <div class="col-md-12" style="display: none" id="utm">
                        <label class="form-label">Add UTM</label>
                        <input class="form-control" name="utm" id="utmValue" placeholder="http://www.example.com"><br/>
                        <p id="errorMsgUTM"  class="error-msg"><b>Please enter a UTM Link.</b></p>
                        <p id="errorMsgUTM1"  class="error-msg"><b>Please enter a valid URL.</b></p>
                    </div>
                    <div class="col-md-12" id="file">
                        <input id="file-fr" name="file-fr" type="file" data-min-file-count="1" class="file-loading"><br/>
                    </div>
                    <div class="col-md-12">
                        <button class="btn  btn-warning btn-block waves-effect" style="" id="upload">Upload</button>
                        <br/>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>

<div class="modal fade " id="request_quote" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <!--Content-->
        <div class="modal-content mt70">
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                <h4 class="modal-title">Request A Quote</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <div class="row">
                    <div class="col-md-8">
                        <h6 class="font-weight-bold">Type, paste OR attach your Request for a Quote or Questions below *</h6>
                        <form class="form-group" id="request-quote">
                            <input type="hidden" class="form-control" name="email" id="member_email">
                            <textarea class="form-control" rows="7" name="description"  placeholder="Description"></textarea>
                            <br/>
                            <div class="fileinput fileinput-new input-group" data-provides="fileinput">
                                <div class="form-control" data-trigger="fileinput"><i class="glyphicon glyphicon-file fileinput-exists"></i> <span class="fileinput-filename"></span></div>
                                <span class="input-group-addon btn btn-warning btn-file"><span class="fileinput-new">Select file</span>
                                <input type="file" name="file" accept=".jpeg, .jpg, .jpe, .gif, .csv, .xls , .pdf , .doc"></span>
                            </div>
                            <br/>
                            <h6>I would also like to:</h6>
                            <div class="col-md-6 padding-0" >
                                <div class="form-group">
                                    <input type="checkbox" class="filled-in" name="value[]" id="checkbox22" value="Receive a quotation">
                                    <label for="checkbox22">Receive a quotation</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" class="filled-in" name="value[]" id="checkbox33" value="Receive documentation">
                                    <label for="checkbox33">Receive documentation</label>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="form-group">
                                    <input type="checkbox" class="filled-in" name="value[]" id="checkbox44" value="Be contacted by telephone">
                                    <label for="checkbox44">Be contacted by telephone</label>
                                </div>
                                <div class="form-group">
                                    <input type="checkbox" class="filled-in" name="value[]" id="checkbox55" value="Receive pricing information">
                                    <label for="checkbox55">Receive pricing information</label>
                                </div>
                            </div>
                            <button class="btn btn-warning btn-block" id="btn_request_quote">Send</button>
                        </form>
                    </div>
                    <div class="col-md-4">
                        <br/><br/><br/>
                        <div id="company_detail">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!--/.Content-->
</div>

<!-- Edit Resource -->
<div id="editModal" class="modal fade" role="dialog">
    <div class="modal-dialog modal-lg fileDialogsize" >
        <div class="modal-content">
            <div class="modal-body" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="edit-resource-modal"></div>
            </div>
        </div>
    </div>
</div>

<!-- Register Modal -->
<div class="modal fade" id="registerModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Register</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <form class="form-group" id="registration-form">

                    <div class="col-md-6">
                        <label class="form-label">First Name <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="firstName" placeholder="First Name">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Last Name <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="lastName" placeholder="Last Name">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Username <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="username" id="#username" placeholder="Username">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Password <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="password" name="password" placeholder="Password">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Email Address <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="email" placeholder="Email Address">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Company Name <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="companyName" placeholder="Company Name">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Cell <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="cell" placeholder="Cell">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Work <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="work" placeholder="Work">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Address <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="address" placeholder="Address">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Region <span class="form-asterick">&#42;</span></label>
                        <select class="form-control" name="region" id="rregion">
                            <option selected="true" disabled="disabled" value="">Select Region</option>
                            <?php foreach($regions as $row) {?>
                            <option value="<?php echo $row->regionname;?>">
                                <?php echo $row->regionname;?>
                            </option>
                            <?php } ?>
                        </select>
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">City <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="city" placeholder="City">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">State <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="state_province" placeholder="State/Province">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Country <span class="form-asterick">&#42;</span></label>
                        <select class="form-control" name="country">
                            <option selected="true" disabled="disabled" value="">Select Country</option>
                            <option value="United States">United States</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
                            <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaçao">Curaçao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Barthélemy">Saint Barthelemy</option>
                            <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="Taiwan, Province of China">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Zip / Postal Code <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="postalcode" placeholder="Zip /Postal Code">
                        <br/>
                    </div>
                    <br/>

                    <button class="btn btn-block btn-warning" id="registerButton">Register</button>

                </form>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>

<!-- Register Download Modal -->
<div class="modal fade" id="registerDownloadModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Register</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <form class="form-group" id="registration-form-download">

                    <div class="col-md-6">
                        <label class="form-label">First Name <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="firstName" placeholder="First Name">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Last Name <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="lastName" placeholder="Last Name">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Username <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="username" id="#username" placeholder="Username">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Password <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="password" name="password" placeholder="Password">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Email Address <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="email" placeholder="Email Address">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Company Name <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="companyName" placeholder="Company Name">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Cell <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="cell" placeholder="Cell">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Work <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="work" placeholder="Work">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Address <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="address" placeholder="Address">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Region <span class="form-asterick">&#42;</span></label>
                        <select class="form-control" name="region" id="rregion">
                            <option selected="true" disabled="disabled" value="">Select Region</option>
                            <?php foreach($regions as $row) {?>
                            <option value="<?php echo $row->regionname;?>">
                                <?php echo $row->regionname;?>
                            </option>
                            <?php } ?>
                        </select>
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">City <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="city" placeholder="City">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">State <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="state_province" placeholder="State/Province">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Country <span class="form-asterick">&#42;</span></label>
                        <select class="form-control" name="country">
                            <option selected="true" disabled="disabled" value="">Select Country</option>
                            <option value="United States">United States</option>
                            <option value="Afghanistan">Afghanistan</option>
                            <option value="Aland Islands">Aland Islands</option>
                            <option value="Albania">Albania</option>
                            <option value="Algeria">Algeria</option>
                            <option value="American Samoa">American Samoa</option>
                            <option value="Andorra">Andorra</option>
                            <option value="Angola">Angola</option>
                            <option value="Anguilla">Anguilla</option>
                            <option value="Antarctica">Antarctica</option>
                            <option value="Antigua and Barbuda">Antigua and Barbuda</option>
                            <option value="Argentina">Argentina</option>
                            <option value="Armenia">Armenia</option>
                            <option value="Aruba">Aruba</option>
                            <option value="Australia">Australia</option>
                            <option value="Austria">Austria</option>
                            <option value="Azerbaijan">Azerbaijan</option>
                            <option value="Bahamas">Bahamas</option>
                            <option value="Bahrain">Bahrain</option>
                            <option value="Bangladesh">Bangladesh</option>
                            <option value="Barbados">Barbados</option>
                            <option value="Belarus">Belarus</option>
                            <option value="Belgium">Belgium</option>
                            <option value="Belize">Belize</option>
                            <option value="Benin">Benin</option>
                            <option value="Bermuda">Bermuda</option>
                            <option value="Bhutan">Bhutan</option>
                            <option value="Bolivia, Plurinational State of">Bolivia, Plurinational State of</option>
                            <option value="Bonaire, Sint Eustatius and Saba">Bonaire, Sint Eustatius and Saba</option>
                            <option value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                            <option value="Botswana">Botswana</option>
                            <option value="Bouvet Island">Bouvet Island</option>
                            <option value="Brazil">Brazil</option>
                            <option value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                            <option value="Brunei Darussalam">Brunei Darussalam</option>
                            <option value="Bulgaria">Bulgaria</option>
                            <option value="Burkina Faso">Burkina Faso</option>
                            <option value="Burundi">Burundi</option>
                            <option value="Cambodia">Cambodia</option>
                            <option value="Cameroon">Cameroon</option>
                            <option value="Canada">Canada</option>
                            <option value="Cape Verde">Cape Verde</option>
                            <option value="Cayman Islands">Cayman Islands</option>
                            <option value="Central African Republic">Central African Republic</option>
                            <option value="Chad">Chad</option>
                            <option value="Chile">Chile</option>
                            <option value="China">China</option>
                            <option value="Christmas Island">Christmas Island</option>
                            <option value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                            <option value="Colombia">Colombia</option>
                            <option value="Comoros">Comoros</option>
                            <option value="Congo">Congo</option>
                            <option value="Congo, the Democratic Republic of the">Congo, the Democratic Republic of the</option>
                            <option value="Cook Islands">Cook Islands</option>
                            <option value="Costa Rica">Costa Rica</option>
                            <option value="Cote d'Ivoire">Cote d'Ivoire</option>
                            <option value="Croatia">Croatia</option>
                            <option value="Cuba">Cuba</option>
                            <option value="Curaçao">Curaçao</option>
                            <option value="Cyprus">Cyprus</option>
                            <option value="Czech Republic">Czech Republic</option>
                            <option value="Denmark">Denmark</option>
                            <option value="Djibouti">Djibouti</option>
                            <option value="Dominica">Dominica</option>
                            <option value="Dominican Republic">Dominican Republic</option>
                            <option value="Ecuador">Ecuador</option>
                            <option value="Egypt">Egypt</option>
                            <option value="El Salvador">El Salvador</option>
                            <option value="Equatorial Guinea">Equatorial Guinea</option>
                            <option value="Eritrea">Eritrea</option>
                            <option value="Estonia">Estonia</option>
                            <option value="Ethiopia">Ethiopia</option>
                            <option value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                            <option value="Faroe Islands">Faroe Islands</option>
                            <option value="Fiji">Fiji</option>
                            <option value="Finland">Finland</option>
                            <option value="France">France</option>
                            <option value="French Guiana">French Guiana</option>
                            <option value="French Polynesia">French Polynesia</option>
                            <option value="French Southern Territories">French Southern Territories</option>
                            <option value="Gabon">Gabon</option>
                            <option value="Gambia">Gambia</option>
                            <option value="Georgia">Georgia</option>
                            <option value="Germany">Germany</option>
                            <option value="Ghana">Ghana</option>
                            <option value="Gibraltar">Gibraltar</option>
                            <option value="Greece">Greece</option>
                            <option value="Greenland">Greenland</option>
                            <option value="Grenada">Grenada</option>
                            <option value="Guadeloupe">Guadeloupe</option>
                            <option value="Guam">Guam</option>
                            <option value="Guatemala">Guatemala</option>
                            <option value="Guernsey">Guernsey</option>
                            <option value="Guinea">Guinea</option>
                            <option value="Guinea-Bissau">Guinea-Bissau</option>
                            <option value="Guyana">Guyana</option>
                            <option value="Haiti">Haiti</option>
                            <option value="Heard Island and McDonald Islands">Heard Island and McDonald Islands</option>
                            <option value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                            <option value="Honduras">Honduras</option>
                            <option value="Hong Kong">Hong Kong</option>
                            <option value="Hungary">Hungary</option>
                            <option value="Iceland">Iceland</option>
                            <option value="India">India</option>
                            <option value="Indonesia">Indonesia</option>
                            <option value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                            <option value="Iraq">Iraq</option>
                            <option value="Ireland">Ireland</option>
                            <option value="Isle of Man">Isle of Man</option>
                            <option value="Israel">Israel</option>
                            <option value="Italy">Italy</option>
                            <option value="Jamaica">Jamaica</option>
                            <option value="Japan">Japan</option>
                            <option value="Jersey">Jersey</option>
                            <option value="Jordan">Jordan</option>
                            <option value="Kazakhstan">Kazakhstan</option>
                            <option value="Kenya">Kenya</option>
                            <option value="Kiribati">Kiribati</option>
                            <option value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                            <option value="Korea, Republic of">Korea, Republic of</option>
                            <option value="Kuwait">Kuwait</option>
                            <option value="Kyrgyzstan">Kyrgyzstan</option>
                            <option value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                            <option value="Latvia">Latvia</option>
                            <option value="Lebanon">Lebanon</option>
                            <option value="Lesotho">Lesotho</option>
                            <option value="Liberia">Liberia</option>
                            <option value="Libya">Libya</option>
                            <option value="Liechtenstein">Liechtenstein</option>
                            <option value="Lithuania">Lithuania</option>
                            <option value="Luxembourg">Luxembourg</option>
                            <option value="Macao">Macao</option>
                            <option value="Macedonia, the former Yugoslav Republic of">Macedonia, the former Yugoslav Republic of</option>
                            <option value="Madagascar">Madagascar</option>
                            <option value="Malawi">Malawi</option>
                            <option value="Malaysia">Malaysia</option>
                            <option value="Maldives">Maldives</option>
                            <option value="Mali">Mali</option>
                            <option value="Malta">Malta</option>
                            <option value="Marshall Islands">Marshall Islands</option>
                            <option value="Martinique">Martinique</option>
                            <option value="Mauritania">Mauritania</option>
                            <option value="Mauritius">Mauritius</option>
                            <option value="Mayotte">Mayotte</option>
                            <option value="Mexico">Mexico</option>
                            <option value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                            <option value="Moldova, Republic of">Moldova, Republic of</option>
                            <option value="Monaco">Monaco</option>
                            <option value="Mongolia">Mongolia</option>
                            <option value="Montenegro">Montenegro</option>
                            <option value="Montserrat">Montserrat</option>
                            <option value="Morocco">Morocco</option>
                            <option value="Mozambique">Mozambique</option>
                            <option value="Myanmar">Myanmar</option>
                            <option value="Namibia">Namibia</option>
                            <option value="Nauru">Nauru</option>
                            <option value="Nepal">Nepal</option>
                            <option value="Netherlands">Netherlands</option>
                            <option value="New Caledonia">New Caledonia</option>
                            <option value="New Zealand">New Zealand</option>
                            <option value="Nicaragua">Nicaragua</option>
                            <option value="Niger">Niger</option>
                            <option value="Nigeria">Nigeria</option>
                            <option value="Niue">Niue</option>
                            <option value="Norfolk Island">Norfolk Island</option>
                            <option value="Northern Mariana Islands">Northern Mariana Islands</option>
                            <option value="Norway">Norway</option>
                            <option value="Oman">Oman</option>
                            <option value="Pakistan">Pakistan</option>
                            <option value="Palau">Palau</option>
                            <option value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                            <option value="Panama">Panama</option>
                            <option value="Papua New Guinea">Papua New Guinea</option>
                            <option value="Paraguay">Paraguay</option>
                            <option value="Peru">Peru</option>
                            <option value="Philippines">Philippines</option>
                            <option value="Pitcairn">Pitcairn</option>
                            <option value="Poland">Poland</option>
                            <option value="Portugal">Portugal</option>
                            <option value="Puerto Rico">Puerto Rico</option>
                            <option value="Qatar">Qatar</option>
                            <option value="Reunion">Reunion</option>
                            <option value="Romania">Romania</option>
                            <option value="Russian Federation">Russian Federation</option>
                            <option value="Rwanda">Rwanda</option>
                            <option value="Saint Barthélemy">Saint Barthelemy</option>
                            <option value="Saint Helena, Ascension and Tristan da Cunha">Saint Helena, Ascension and Tristan da Cunha</option>
                            <option value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                            <option value="Saint Lucia">Saint Lucia</option>
                            <option value="Saint Martin (French part)">Saint Martin (French part)</option>
                            <option value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                            <option value="Saint Vincent and the Grenadines">Saint Vincent and the Grenadines</option>
                            <option value="Samoa">Samoa</option>
                            <option value="San Marino">San Marino</option>
                            <option value="Sao Tome and Principe">Sao Tome and Principe</option>
                            <option value="Saudi Arabia">Saudi Arabia</option>
                            <option value="Senegal">Senegal</option>
                            <option value="Serbia">Serbia</option>
                            <option value="Seychelles">Seychelles</option>
                            <option value="Sierra Leone">Sierra Leone</option>
                            <option value="Singapore">Singapore</option>
                            <option value="Sint Maarten (Dutch part)">Sint Maarten (Dutch part)</option>
                            <option value="Slovakia">Slovakia</option>
                            <option value="Slovenia">Slovenia</option>
                            <option value="Solomon Islands">Solomon Islands</option>
                            <option value="Somalia">Somalia</option>
                            <option value="South Africa">South Africa</option>
                            <option value="South Georgia and the South Sandwich Islands">South Georgia and the South Sandwich Islands</option>
                            <option value="South Sudan">South Sudan</option>
                            <option value="Spain">Spain</option>
                            <option value="Sri Lanka">Sri Lanka</option>
                            <option value="Sudan">Sudan</option>
                            <option value="Suriname">Suriname</option>
                            <option value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                            <option value="Swaziland">Swaziland</option>
                            <option value="Sweden">Sweden</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Syrian Arab Republic">Syrian Arab Republic</option>
                            <option value="TW">Taiwan, Province of China</option>
                            <option value="Taiwan, Province of China">Tajikistan</option>
                            <option value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                            <option value="Thailand">Thailand</option>
                            <option value="Timor-Leste">Timor-Leste</option>
                            <option value="Togo">Togo</option>
                            <option value="Tokelau">Tokelau</option>
                            <option value="Tonga">Tonga</option>
                            <option value="Trinidad and Tobago">Trinidad and Tobago</option>
                            <option value="Tunisia">Tunisia</option>
                            <option value="Turkey">Turkey</option>
                            <option value="Turkmenistan">Turkmenistan</option>
                            <option value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                            <option value="Tuvalu">Tuvalu</option>
                            <option value="Uganda">Uganda</option>
                            <option value="Ukraine">Ukraine</option>
                            <option value="United Arab Emirates">United Arab Emirates</option>
                            <option value="United Kingdom">United Kingdom</option>
                            <option value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                            <option value="Uruguay">Uruguay</option>
                            <option value="Uzbekistan">Uzbekistan</option>
                            <option value="Vanuatu">Vanuatu</option>
                            <option value="Venezuela, Bolivarian Republic of">Venezuela, Bolivarian Republic of</option>
                            <option value="Viet Nam">Viet Nam</option>
                            <option value="Virgin Islands, British">Virgin Islands, British</option>
                            <option value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                            <option value="Wallis and Futuna">Wallis and Futuna</option>
                            <option value="Western Sahara">Western Sahara</option>
                            <option value="Yemen">Yemen</option>
                            <option value="Zambia">Zambia</option>
                            <option value="Zimbabwe">Zimbabwe</option>
                        </select>
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <label class="form-label">Zip / Postal Code <span class="form-asterick">&#42;</span></label>
                        <input class="form-control" type="text" name="postalcode" placeholder="Zip /Postal Code">
                        <br/>
                    </div>
                    <br/>

                    <button class="btn btn-block  btn-warning"  id="registerButtonDownload">Register</button>

                </form>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>

<!-- Login Modal -->
<div class="modal fade" id="loginModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <!--Content-->
        <div class="modal-content mt70">
            <!--Header-->
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Login</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <form class="form-group" id="login-form" novalidate="novalidate">
                    <label class="form-label">Username or Email Address <span class="form-asterick">&#42;</span></label>
                    <input class="form-control" type="text" name="email" placeholder="Username or Email Address" id="emailaddress" value="<?php echo $user_cookie;?>">
                    <br>
                    <label class="form-label">Password<span class="form-asterick">&#42;</span></label>
                    <input class="form-control" type="password" name="password" placeholder="Password" value="<?php echo $pass_cookie;?>">
                    <br>
                    <input type="checkbox" class="filled-in" id="checkbox" name="remember_me" value="remember_me">
                    <label for="checkbox" class="form-label"> Remember Me</label> <span class="pull-right" ><a href="#" id="forgottenpassword" class="forgot-password">Forgotten password?</a></span>
                    <br/>
                    <button class="btn btn-warning login-btn" id="loginButton">Login</button> <span class="ml15"><a href="#" class="reg-here" id="registerhere">Register Here</a> </span>
                    <br>

                </form>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>

<!-- Login Download Modal -->
<div class="modal fade" id="loginDownloadModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
        <!--Content-->
        <div class="modal-content mt70">
            <!--Header-->
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Login</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <form class="form-group" id="login-download-form" novalidate="novalidate">
                    <div class="sent" style="text-align: center;font-size: 15px;margin-top: 0px;color: #ca3220;"></div>
                    <label class="form-label">Username or Email Address <span class="form-asterick">&#42;</span></label>
                    <input class="form-control" type="text" name="email" placeholder="Username or Email Address" id="emailaddress" value="<?php echo $user_cookie;?>">
                    <br>
                    <label class="form-label">Password<span class="form-asterick">&#42;</span></label>
                    <input class="form-control" type="password" name="password" placeholder="Password"  value="<?php echo $pass_cookie;?>">
                    <br>
                    <input type="checkbox" class="filled-in" id="checkbox1" name="rememberme" value="rememberme">
                    <label for="checkbox1" class="form-label"> Remember Me</label> <span class="pull-right" style="font-weight: bold;color: red"><a href="#" id="forgottenpassword1" style="color: red">Forgotten password?</a></span>
                    <br/>
                    <button class="btn  btn-warning login-btn"  id="loginButtonDownload">Login</button> <span class="ml15"><a href="#" class="reg-here" id="registerhere1">Register Here</a> </span>
                    <br>

                </form>
            </div>
        </div>
        <!--/.Content-->
    </div>
</div>

<!-- Forget Password Modal -->
<div class="modal fade" id="forgetPasswordModal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">

        <div class="modal-content mt70">

            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Forgot Password</h4>
            </div>

            <div class="modal-body">
                <form class="form-group" id="forget-password">

                    <label class="form-label">Email Address</label>
                    <input class="form-control" type="text" name="email" placeholder="Email Address">
                    <br/>
                    <button class="btn btn-warning btn-block"  id="forget-password-submit">Submit</button>

                </form>
            </div>
        </div>

    </div>
</div>

<!-- Verify Code -->
<div id="verifycode" class="modal fade" role="dialog" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog mt70" >
        <div class="modal-content">
            <div class="modal-header" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Verify Code</h4>
            </div>
            <div class="modal-body" >
                <form class="form-group" id="verify-code">
                    <label class="form-label" >Email Address</label>
                    <input class="form-control" type="text" name="email" placeholder="Email Address" id="useremailaddress" readonly>
                    <br/>
                    <label class="form-label">Verify Code</label>
                    <input class="form-control" type="text" name="code" placeholder="Verify Code">
                    <br/>
                    <button class="btn btn-warning btn-block"  id="verify-code-submit">Submit</button>

                </form>
            </div>
        </div>
    </div>
</div>

<!-- Set Pass -->
<div id="setpassword" class="modal fade" role="dialog" data-backdrop="static" tabindex="-1">
    <div class="modal-dialog" style="margin-top: 70px">
        <div class="modal-content">
            <div class="modal-header" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Set Password</h4>
            </div>
            <div class="modal-body" >
                <form class="form-group" id="set-password">
                    <label class="form-label">Email Address</label>
                    <input class="form-control" type="text" name="email" placeholder="Email Address" id="useremailaddress1" readonly>
                    <br/>
                    <label class="form-label">New Password</label>
                    <input class="form-control" type="password" name="npassword" placeholder="New Password" id="newpassword">
                    <br/>
                    <label class="form-label">Confirm Password</label>
                    <input class="form-control" type="password" name="cpassword" placeholder="Confirm Password">
                    <br/>
                    <button class="btn btn-warning btn-block" id="set-password-submit">Submit</button>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Change Password -->
<div id="passwordModal" class="modal fade" tabindex="-1" role="dialog">
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Change Password</h4>
            </div>
            <div class="modal-body">
                <form class="form-group" id="update-password">
                    <div class="col-md-12">
                        <label class="form-label">Old Password</label>
                        <input class="form-control" type="password" name="opassword" placeholder="Old Password">
                        <br>
                    </div>
                    <div class="col-md-12">
                        <label  class="form-label">New Password</label>
                        <input class="form-control" type="password" name="npassword" placeholder="New Password" id="npassword">
                        <br/>
                    </div>
                    <div class="col-md-12">
                        <label  class="form-label"> Confirm Password</label>
                        <input class="form-control" type="password" name="cpassword" placeholder="Confirm Password">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <button type="button" data-dismiss="modal" class="btn btn-warning btn-block" >Cancel</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-warning btn-block"  id="upass">Save Changes</button>
                    </div>

                    <br/>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Update Password -->
<div id="updatePasswordModal" class="modal fade" tabindex="-1"  data-backdrop="static" role="dialog">
    <div class="modal-dialog" >
        <div class="modal-content">
            <div class="modal-header" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title">Change Password</h4>
            </div>
            <div class="modal-body">
                <form class="form-group" id="update-password2">

                    <div class="col-md-12">
                        <label  class="form-label">New Password</label>
                        <input class="form-control" type="password" name="npassword" placeholder="New Password" id="npassword2">
                        <br/>
                    </div>
                    <div class="col-md-12">
                        <label  class="form-label"> Confirm Password</label>
                        <input class="form-control" type="password" name="cpassword" placeholder="Confirm Password">
                        <br/>
                    </div>
                    <div class="col-md-6">
                        <button type="button" data-dismiss="modal" class="btn btn-warning btn-block" >Cancel</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-warning btn-block"  id="upass">Save Changes</button>
                    </div>
                    <br/>
                </form>
            </div>
        </div>
    </div>
</div>

<!-- Edit Profile and update html from controller -->
<div class="modal fade" id="editProfileModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
        <!--Content-->
        <div class="modal-content">
            <!--Header-->
            <div class="modal-header">
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                <h4 class="modal-title" id="myModalLabel">Edit Profile</h4>
            </div>
            <!--Body-->
            <div class="modal-body">
                <form class="form-group " id="edit-profile">
                    <div class="ep"></div>
                    <a href="#" style="float: right;color: #ca311b;font-weight: bold;margin-top: -8px;" id="changePassword">Change Password?</a>
                    </div>
            <button class="btn btn-warning " data-dismiss="modal" style="padding-left: 40px;padding-right: 40px;color: #222;width: 46%;margin-left: 15px;margin-bottom: 20px">Cancel</button>
            <button class="btn btn-warning " style="padding-left: 40px;padding-right: 40px;color: #222;width: 46%;margin-bottom: 20px" id="epbutton">Save Changes</button>

            </form>
        </div>
    </div>
    <!--/.Content-->
</div>
</div>


<?php if(!empty($user_id)): ?>
    <?php $schedules=\App\Schedule::where('user_id',$user_id)->get();
    $m_o_t=$m_c_t=$tu_o_t=$tu_c_t=$w_o_t=$w_c_t=$t_o_t=$t_c_t=$f_o_t=$f_c_t=$s_o_t=$s_c_t=$su_o_t=$su_c_t='';
    foreach($schedules as $schedule){
        if($schedule->day_of_week=='Monday'){$m_o_t=$schedule->open_time;$m_c_t=$schedule->close_time;}
        if($schedule->day_of_week=='Tuesday'){$tu_o_t=$schedule->open_time;$tu_c_t=$schedule->close_time;}
        if($schedule->day_of_week=='Wednesday'){$w_o_t=$schedule->open_time;$w_c_t=$schedule->close_time;}
        if($schedule->day_of_week=='Thursday'){$t_o_t=$schedule->open_time;$t_c_t=$schedule->close_time;}
        if($schedule->day_of_week=='Friday'){$f_o_t=$schedule->open_time;$f_c_t=$schedule->close_time;}
        if($schedule->day_of_week=='Saturday'){$s_o_t=$schedule->open_time;$s_c_t=$schedule->close_time;}
        if($schedule->day_of_week=='Sunday'){$su_o_t=$schedule->open_time;$su_c_t=$schedule->close_time;}
    }
    ?>
    <div id="updateSchedule" class="modal fade" tabindex="-1"  data-backdrop="static" role="dialog">
        <div class="modal-dialog" >
            <div class="modal-content">
                <div class="modal-header" >
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Edit Schedule</h4>
                </div>
                <div class="modal-body">
                    <form class="form-group" method="post"  id="update-schedule">
                        <div class="col-md-12">
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Monday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select   class="form-control" name="m_o_t">
                                        <option value="" label="Open Time" <?php if(empty($m_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?>></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$m_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="m_c_t">
                                        <option value=""  label="Close Time" <?php if(empty($m_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?>></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$m_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Tuesday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select   class="form-control" name="tu_o_t">
                                        <option value=""  label="Open Time" <?php if(empty($tu_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?>></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$tu_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="tu_c_t">
                                        <option value="" label="Close Time"> <?php if(empty($tu_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$tu_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Wednesday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select   class="form-control" name="w_o_t">
                                        <option value=""  label="Open Time" <?php if(empty($w_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?>></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$w_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="w_c_t">
                                        <option value=""  label="Close Time" <?php if(empty($w_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?>></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$w_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Thursday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select   class="form-control" name="t_o_t">
                                        <option value="" <?php if(empty($t_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Open Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$t_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="t_c_t">
                                        <option value="" <?php if(empty($t_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Close Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$t_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Friday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select   class="form-control" name="f_o_t">
                                        <option value="" <?php if(empty($f_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Open Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$f_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="f_c_t">
                                        <option value="" <?php if(empty($f_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Close Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$f_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Saturday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select   class="form-control" name="s_o_t">
                                        <option value="" <?php if(empty($s_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Open Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$s_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="s_c_t">
                                        <option value="" <?php if(empty($s_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Close Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$s_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <h4>Sunday:</h4>
                                </div>
                                <div class="col-md-4">
                                    <select class="form-control" name="su_o_t">
                                        <option value="" <?php if(empty($su_o_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Open Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$su_o_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div>
                                <div class="col-md-4">
                                    <select  class="form-control"  name="su_c_t">
                                        <option value="" <?php if(empty($su_c_t)): ?> <?php echo e("Selected"); ?> <?php endif; ?> label="Close Time"></option>
                                        <?php echo $__env->make('schedule_list',array('value'=>$su_c_t), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                                    </select>
                                </div><br/><br/><br/>
                            </div>
                        </div>
                        <div class="col-md-12"><button class="btn btn-warning btn-block" id="add_schedule_btn">Save Changes</button></div>
                        <br/>
                    </form>
                </div>
            </div>
        </div>
    </div>
<?php endif; ?>

<!-- Upload Product -->
<div id="addProduct" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-lg fileDialogsize" >
        <div class="modal-content">
            <div class="modal-body" >
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <div class="controls">
                    <form class="form-group" method="post" action="<?php echo e(url('/')); ?>/ajax/add_product" id="upload-product" enctype="multipart/form-data">
                        <div class="col-md-4 col-lg-4 mt22">
                            <h3 style="">Add New Product</h3>
                            <input type="file" name="image" id="image" class="a"><br/>
                        </div>
                        <div class="col-md-8 col-lg-8"  >
                            <label class="form-label mt7" >Product Name</label>
                            <input class="form-control" type="text" name="product_name" placeholder="Product Name"><br/>
                            <label class="form-label">Price</label>
                            <input class="form-control" type="text" name="price" placeholder="Price">
                            <br/>
                            <label class="form-label">Quantity</label>
                            <input class="form-control" type="number" name="quantities"  placeholder="Quantity">
                            <br/>
                            <label class="form-label mt7" >Category</label>
                            <?php echo $__env->make('user_categories_list',array('categories'=>$categories,'member_categories'=>$member_categories), \Illuminate\Support\Arr::except(get_defined_vars(), ['__data', '__path']))->render(); ?>
                            <a href="<?php echo e(url('/')); ?>/edit_profile" style="float: right;font-size: 17px;color: #ca311b;
    text-decoration: underline;">Edit Categories</a>
                            <input class="form-control" type="hidden" name="token" id="token" value="">
                        </div>
                        <div class="col-md-12">
                            <label class="form-label">Description</label>
                            <textarea class="form-control" rows="7" name="description"  placeholder="Description"></textarea>
                            <br/>
                            <h3 >Details and specs (Optional)</h3>
                        </div>
                        <div class="form-group">
                            <div class="">
                                <div class="controls ">
                                    <div class="entry form-inline form-group col-sm-12">
                                        <input class="form-control" name="feature[]" type="text" placeholder="Feature" style="width: 45%" />
                                        <input class="form-control" name="value[]" type="text" placeholder="Value" style="width: 45%" />
                                        <button class="btn btn-success btn-add" type="button">
                                            <span class="glyphicon glyphicon-plus"></span>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                    <div class="col-md-12">
                        <button class="btn btn-warning btn-block waves-effect" id="add_product_btn">Add Product</button>
                        <br/>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div class="fixed-action-btn smooth-scroll fade1" style="bottom: 20px; right:-3px; display: none;">
    <a href="#top" class="btn-floating btn-medium  waves-effect waves-light" id="top" style="background:linear-gradient(to right, #FE8C00 0%, #F83600 100%);border-radius:0px;width: 36px;right:10px;top: -50px;"><i class="fa fa-arrow-up" style="margin-top: 3px;"></i> </a>
</div><?php /**PATH C:\Users\hngeno\Projects\resource-center\resources\views/modals.blade.php ENDPATH**/ ?>