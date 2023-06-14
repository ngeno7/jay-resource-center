<template>
    <div class="layout--main" :class="[navbarClasses, footerClasses, {'app-page': isAppPage}]">
        <vx-sidebar :sideBarColor="sideBarColor" @show-popup="showPopup" :sidebarItems="sidebarItems" :logo="'/public/images/logo.png'" title="" parent=".layout--main" />
        <div id="content-area" :class="[contentAreaClass, {'show-overlay': bodyOverlay}]">
            <div id="content-overlay"></div>
            <div class="content-wrapper">
                <the-navbar :navbarColor="navbarColor" :class="[{'text-white': isNavbarDark && !isThemeDark}, {'text-base': !isNavbarDark && isThemeDark}]" />
                <div class="router-view">
                    <div class="router-content" :class="{'mt-0': navbarType == 'hidden'}">
                        <transition :name="routerTransition">
                            <div class="router-header flex flex-wrap items-center mb-6" v-if="$route.meta.breadcrumb || $route.meta.pageTitle">
                                <div class="content-area__heading" :class="{'pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light' : $route.meta.breadcrumb}">
                                    <h2 class="mb-1">{{ routeTitle }}</h2>
                                </div>
                                <!-- BREADCRUMB -->
                                <vx-breadcrumb class="ml-4 md:block hidden" v-if="$route.meta.breadcrumb" :route="$route" />
                                <!-- DROPDOWN -->
                                <vs-dropdown class="ml-auto md:block hidden cursor-pointer" vs-trigger-click>
                                    <vs-button radius icon="icon-settings" icon-pack="feather"></vs-button>
                                    <vs-dropdown-menu class="w-32">
                                        <vs-dropdown-item>
                                            <div @click="$router.push('/pages/profile')" class="flex items-center">
                                                <feather-icon icon="UserIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                                <span>Profile</span>
                                            </div>
                                        </vs-dropdown-item>
                                        <vs-dropdown-item>
                                            <div @click="$router.push('/apps/todo')" class="flex items-center">
                                                <feather-icon icon="CheckSquareIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                                <span>Tasks</span>
                                            </div>
                                        </vs-dropdown-item>
                                        <vs-dropdown-item>
                                            <div @click="$router.push('/apps/email')" class="flex items-center">
                                                <feather-icon icon="MailIcon" class="inline-block mr-2" svgClasses="w-4 h-4" />
                                                <span>Inbox</span>
                                            </div>
                                        </vs-dropdown-item>
                                    </vs-dropdown-menu>
                                </vs-dropdown>
                            </div>
                        </transition>
                        <div class="content-area__content">
                            <back-to-top bottom="5%" visibleoffset="500" v-if="!hideScrollToTop">
                                <vs-button icon-pack="feather" icon="icon-arrow-up" class="shadow-lg" />
                            </back-to-top>
                            <transition :name="routerTransition" mode="out-in">
                                <router-view :key="$route.path" @changeRouteTitle="changeRouteTitle"></router-view>
                            </transition>
                        </div>
                    </div>
                </div>
            </div>
            <the-footer></the-footer>
        </div>
        <vs-popup :active.sync="addsponsor" title="Add Sponsor">
            <form autocomplete="off" ref="addsponsor" @submit.prevent="addSponsor($event,'addsponsor')">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="First Name" data-vv-scope="addsponsor" data-vv-as="First Name" v-validate="'required'" v-model="first_name" name="first_name" />
                            <span v-show="errors.has('addsponsor.first_name')">{{ errors.first('addsponsor.first_name') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Last Name" data-vv-scope="addsponsor" data-vv-as="Last Name" v-validate="'required'" v-model="last_name" name="last_name" />
                            <span v-show="errors.has('addsponsor.last_name')">{{ errors.first('addsponsor.last_name') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="User Name" data-vv-scope="addsponsor" data-vv-as="User Name" v-validate="'required'" v-model="user_name" name="user_name" />
                            <span v-show="errors.has('addsponsor.user_name')">{{ errors.first('addsponsor.user_name') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Password" data-vv-scope="addsponsor" data-vv-as="Password" v-validate="'required'" v-model="password" name="password" />
                            <span v-show="errors.has('addsponsor.password')">{{ errors.first('addsponsor.password') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Email" data-vv-scope="addsponsor" data-vv-as="Email Address" v-validate="'required'" v-model="email" name="email" />
                            <span v-show="errors.has('addsponsor.email')">{{ errors.first('addsponsor.email') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Company Name" data-vv-scope="addsponsor" data-vv-as="Company Name" v-validate="'required'" v-model="company_name" name="company_name" />
                            <span v-show="errors.has('addsponsor.company_name')">{{ errors.first('addsponsor.company_name') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Cell" data-vv-scope="addsponsor" data-vv-as="Cell" v-validate="'required'" v-model="cell" name="cell" />
                            <span v-show="errors.has('addsponsor.cell')">{{ errors.first('addsponsor.cell') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Work" data-vv-scope="addsponsor" data-vv-as="Work" v-validate="'required'" v-model="work" name="work" />
                            <span v-show="errors.has('addsponsor.work')">{{ errors.first('addsponsor.work') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Address" data-vv-scope="addsponsor" data-vv-as="Address" v-validate="'required'" v-model="address" name="address" />
                            <span v-show="errors.has('addsponsor.address')">{{ errors.first('addsponsor.address') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-4">
                            <vs-select label="Region" data-vv-scope="addsponsor" data-vv-as="Region" v-validate="'required'" v-model="region" name="region">
                                <vs-select-item value="" text="Select Region"></vs-select-item>
                                <vs-select-item v-for="(region,index) in regions" :key="index" :value="region.regionname" :text="region.regionname"></vs-select-item>
                            </vs-select>
                            <span v-show="errors.has('addsponsor.region')">{{ errors.first('addsponsor.region') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="City" data-vv-scope="addsponsor" data-vv-as="City" v-validate="'required'" v-model="city" name="city" />
                            <span v-show="errors.has('addsponsor.city')">{{ errors.first('addsponsor.city') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="State" data-vv-scope="addsponsor" data-vv-as="State" v-validate="'required'" v-model="state" name="state" />
                            <span v-show="errors.has('addsponsor.state')">{{ errors.first('addsponsor.state') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="country" data-vv-scope="addsponsor" data-vv-as="Country" v-validate="'required'" v-model="country" name="country" />
                            <span v-show="errors.has('addsponsor.country')">{{ errors.first('addsponsor.country') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input label-placeholder="Zip / Postal Code" data-vv-scope="addsponsor" data-vv-as="Zip / Postal Code" v-validate="'required'" v-model="zipcode" name="zipcode" />
                            <span v-show="errors.has('addsponsor.zipcode')">{{ errors.first('addsponsor.zipcode') }}</span>
                        </vx-input-group>
                    </vs-col>
                </vs-row>
                <vs-row class="mt-5">
                    <vs-col class="text-right">
                        <vs-button button="submit" type="gradient"> Add Sponsor</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup :active.sync="administratorsPopup" title="Add Administrator">
            <form autocomplete="off" ref="addAdminForm" @submit.prevent="addAdmin($event,'addadmin')">
                <vs-row>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="First Name" placeholder="First Name" data-vv-as="First Name" v-validate="'required'" data-vv-scope="addadmin" v-model="firstname" name="firstname" />
                            <span v-show="errors.has('addadmin.firstname')">{{ errors.first('addadmin.firstname') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Last Name" placeholder="Last Name" data-vv-as="Last Name" v-validate="'required'" data-vv-scope="addadmin" v-model="lastname" name="lastname" />
                            <span v-show="errors.has('addadmin.lastname')">{{ errors.first('addadmin.lastname') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Email" placeholder="Email" data-vv-as="Email" v-validate="'required'" data-vv-scope="addadmin" v-model="adminEmail" name="email" />
                            <span v-show="errors.has('addadmin.email')">{{ errors.first('addadmin.email') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="password" placeholder="password" data-vv-as="Password" v-validate="'required'" data-vv-scope="addadmin" v-model="adminPassword" name="password" />
                            <span v-show="errors.has('addadmin.password')">{{ errors.first('addadmin.password') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Username" placeholder="Username" data-vv-as="Username" v-validate="'required'" data-vv-scope="addadmin" v-model="username" name="username" />
                            <span v-show="errors.has('addadmin.username')">{{ errors.first('addadmin.username') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Contact No." placeholder="Contact No." data-vv-as="Contact No." v-validate="'required'" data-vv-scope="addadmin" v-model="contactno" name="contactno" />
                            <span v-show="errors.has('addadmin.contactno')">{{ errors.first('addadmin.contactno') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" class="flex justify-end">
                        <vx-input-group class="mt-5">
                            <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Add Administrator</vs-button>
                        </vx-input-group>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup :active.sync="addRepresentativePopup" title="Add Representative">
            <form autocomplete="off" ref="addRepresentativeForm" @submit.prevent="addRepresentative($event,'addRepresentativeForm')">
                <vs-row>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="First Name" placeholder="First Name" data-vv-as="First Name" v-validate="'required'" data-vv-scope="addRepresentativeForm" v-model="rep_firstname" name="firstname" />
                            <span v-show="errors.has('addRepresentativeForm.firstname')">{{ errors.first('addRepresentativeForm.firstname') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Last Name" placeholder="Last Name" data-vv-as="Last Name" v-validate="'required'" data-vv-scope="addRepresentativeForm" v-model="rep_lastname" name="lastname" />
                            <span v-show="errors.has('addRepresentativeForm.lastname')">{{ errors.first('addRepresentativeForm.lastname') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Email" placeholder="Email" data-vv-as="Email" v-validate="'required'" data-vv-scope="addRepresentativeForm" v-model="rep_email" name="email" />
                            <span v-show="errors.has('addRepresentativeForm.email')">{{ errors.first('addRepresentativeForm.email') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="password" placeholder="password" data-vv-as="Password" v-validate="'required'" data-vv-scope="addRepresentativeForm" v-model="rep_password" name="password" />
                            <span v-show="errors.has('addRepresentativeForm.password')">{{ errors.first('addRepresentativeForm.password') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Username" placeholder="Username" data-vv-as="Username" v-validate="'required'" data-vv-scope="addRepresentativeForm" v-model="rep_username" name="username" />
                            <span v-show="errors.has('addRepresentativeForm.username')">{{ errors.first('addRepresentativeForm.username') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6">
                        <vx-input-group class="mt-5">
                            <vs-input label="Contact No." placeholder="Contact No." data-vv-as="Contact No." v-validate="'required'" data-vv-scope="addRepresentativeForm" v-model="rep_contactno" name="contactno" />
                            <span v-show="errors.has('addRepresentativeForm.contactno')">{{ errors.first('addRepresentativeForm.contactno') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" class="flex justify-end">
                        <vx-input-group class="mt-5">
                            <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Add Representative</vs-button>
                        </vx-input-group>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup class="holamundo" title="ADD SUB CATEGORY" :active.sync="addSubCategoryPopUp">
            <form ref="addSubCategoryForm" autocomplete="off" data-vv-scope="add-sub-category-form" @submit.prevent="addSubCategory($event,'add-sub-category-form')">
                <vs-row>
                    <vs-col vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vx-input-group>
                            <vx-select placeholder="Select Parent Category" v-model="parent" v-validate="'required'" name="parent_category" data-vv-as="Parent Category">
                                <vs-select-item v-for="(category,index) in categories" :key="index" :text="category.name" :value="category.category_id"></vs-select-item>
                            </vx-select>
                            <span class="text-danger" v-show="errors.has('add-sub-category-form.parent_category')">{{ errors.first('add-sub-category-form.parent_category') }}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input :danger="errors.has('add-sub-category-form.title')" icon-no-border icon="assignment" v-model="subtitle" name="title" v-validate="'required'" label-placeholder="Title" />
                            <span class="text-danger" v-show="errors.has('add-sub-category-form.title')">{{ errors.first('add-sub-category-form.title') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="flex justify-end" vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vs-button button="submit" class="mt-5" type="gradient">Add Sub Category</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup class="holamundo" title="ADD CATEGORY" :active.sync="addCategoryPopUp">
            <form ref="addCategoryForm" data-vv-scope="add-form" autocomplete="off" @submit.prevent="addCategory($event,'add-form')">
                <vs-row>
                    <vs-col vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vx-input-group>
                            <vs-input :danger="errors.has('add-category-form.title')" icon-no-border icon="assignment" v-model="title" name="title" v-validate="'required'" label-placeholder="Title" />
                            <span class="text-danger" v-show="errors.has('add-category-form.title')">{{ errors.first('add-form.title') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="flex justify-end" vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vs-button button="submit" class="mt-5" type="gradient">Add Category</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
        <vs-popup class="holamundo" title="EXPORT" :active.sync="exportMembersPopup">
            <form ref="exportMembersForm" data-vv-scope="export-form" autocomplete="off" @submit.prevent="exportMembers($event,'export-form')">
                <vs-row>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'Name', dbCol : 'fullname' }">First & Last name</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'BusinessName', dbCol : 'company_name' }">Business Name</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'Address', dbCol : 'address' }">Address</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'City', dbCol : 'city' }">City</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'State/Province', dbCol : 'state_province' }">State</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'ZipCode', dbCol : 'zip_postal' }">Zipcode</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'Country', dbCol : 'country' }">Country</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'Email', dbCol : 'email' }">Email Address</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'Website', dbCol : 'company_website' }">Website</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-xl='6' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vs-checkbox v-model="exportColumns" :vs-value="{ excelCol : 'Phone', dbCol : 'cell' }">Phone Number</vs-checkbox>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                    <vx-input-group class="mb-5 ml-5">

                        <vx-select v-validate="'required'" name="site" label="Select Site" v-model="selectedSite" placeholder="Select Site">
                            <vs-select-item v-for="(site,index) in sites" :key="index" :value="site.id" :text="site.name"></vs-select-item>
                        </vx-select>
                    <span v-show="errors.has('export-form.site')">{{ errors.first('export-form.site') }}</span>
                    </vx-input-group>
                </vs-col>
                    <vs-col vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vx-input-group class="mb-5 ml-5">
                            <vx-select v-validate="'required'" name="extractType" data-vv-as="Extract Type" v-model="extractType" placeholder="Select Type" label="Extract">
                                <vs-select-item text="Companies" :value="1"></vs-select-item>
                                <vs-select-item text="Companies and Categories" :value="2"></vs-select-item>
                            </vx-select>
                            <span v-show="errors.has('export-form.extractType')">{{ errors.first('export-form.extractType') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="flex justify-end" vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vs-button button="submit" class="mt-5" type="gradient">Extract</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import VxSidebar from '@/layouts/components/vx-sidebar/VxSidebar.vue';
import TheNavbar from '../components/TheNavbar.vue';
import TheFooter from '../components/TheFooter.vue';
import themeConfig from '@/../themeConfig.js';
import sidebarItems from "@/layouts/components/vx-sidebar/sidebarItems.js";
import BackToTop from 'vue-backtotop'
import { mapState, mapActions } from 'vuex';
export default {
    data() {
        return {
            navbarType: themeConfig.navbarType || 'floating',
            navbarColor: themeConfig.navbarColor || '#fff',
            footerType: themeConfig.footerType || 'static',
            routerTransition: themeConfig.routerTransition || 'none',
            sideBarColor: themeConfig.sideBarColor,
            isNavbarDark: false,
            routeTitle: this.$route.meta.pageTitle,
            sidebarItems: sidebarItems,
            disableCustomizer: themeConfig.disableCustomizer,
            windowWidth: window.innerWidth, //width of windows
            hideScrollToTop: themeConfig.hideScrollToTop,
            disableThemeTour: themeConfig.disableThemeTour,
            addsponsor: false,
            administratorsPopup: false,
            addRepresentativePopup: false,
            addSubCategoryPopUp: false,
            addCategoryPopUp: false,
            exportMembersPopup: false,
            title: '',
            subtitle: '',
            parent: '',

            first_name: '',
            last_name: '',
            email: '',
            user_name: '',
            password: '',
            company_name: '',
            cell: '',
            work: '',
            address: '',
            region: '',
            city: '',
            state: '',
            country: '',
            zipcode: '',

            firstname: '',
            lastname: '',
            adminEmail: '',
            adminPassword: '',
            username: '',
            contactno: '',

            rep_firstname: '',
            rep_lastname: '',
            rep_email: '',
            rep_password: '',
            rep_username: '',
            rep_contactno: '',

            extractType: '',
            exportColumns: [],
            selectedSite : '',
        }
    },
    watch: {
        '$route'() {
            this.routeTitle = this.$route.meta.pageTitle;
        },
        isThemeDark(val) {
            if (this.navbarColor == "#fff" && val) {
                this.updateNavbarColor("#10163a")
            } else {
                this.updateNavbarColor("#fff")
            }
        },
    },
    computed: {
        ...mapState('categories', ['categories']),
        sites(){
            return this.$store.state.sites
        },
        isAppPage() {
            if (this.$route.path.includes('/apps/')) return true
            else return false
        },
        isThemeDark() { return this.$store.state.theme == 'dark' },
        sidebarWidth() {
            return this.$store.state.sidebarWidth;
        },
        bodyOverlay() {
            return this.$store.state.bodyOverlay;
        },
        contentAreaClass() {
            if (this.sidebarWidth == "default") return "content-area-default"
            else if (this.sidebarWidth == "reduced") return "content-area-reduced"
            else if (this.sidebarWidth) return "content-area-full"
        },
        navbarClasses() {
            return {
                'navbar-hidden': this.navbarType == 'hidden',
                'navbar-sticky': this.navbarType == 'sticky',
                'navbar-static': this.navbarType == 'static',
                'navbar-floating': this.navbarType == 'floating',
            }
        },
        regions() {
            return this.$store.state.regions;
        },
        footerClasses() {
            return {
                'footer-hidden': this.footerType == 'hidden',
                'footer-sticky': this.footerType == 'sticky',
                'footer-static': this.footerType == 'static',
            }
        },
    },
    methods: {
        ...mapActions({
            submitCategory: 'categories/submitCategory',
            submitSubCategory: 'categories/submitSubCategory',
            getCategories: 'categories/getCategories',
            submitExportMember: 'sponsors/submitExportMember',
        }),
        showPopup(slug) {
            var slug = slug.replace('-', '')
            this.$data[slug] = true;
        },
        exportMembers(e, scope) {
            self = this;
            this.$validator.validateAll(scope).then((result) => {
                if (result) {
                    /*this.$vs.loading({
                        text: 'Processing...'
                    });*/
                    var fd = new FormData(this.$refs.exportMembersForm);
                    _.each(this.exportColumns, (o, i) => {
                        fd.append(`exportColumns[${i}][excelCol]`, o.excelCol);
                        fd.append(`exportColumns[${i}][dbCol]`, o.dbCol);
                    });
                    fd.append('extractType', this.extractType);
                    fd.append('site', this.selectedSite);
                    var data = {
                        fd: fd,
                        notify: self.$vs.notify,
                        closeloading: this.$vs.loading.close,
                    };
                    self.submitExportMember(data).then((response) => {
                        this.exportMembersPopup = false;
                        var a = document.createElement("a");
                        a.href = response.data.file;
                        a.download = response.data.name;
                        document.body.appendChild(a);
                        a.click();
                        a.remove();
                    })
                }

            })
        },
        addCategory(e, scope) {
            self = this;
            this.$validator.validateAll(scope).then((result) => {
                if (result) {
                    this.$vs.loading({
                        text: 'Processing...'
                    });
                    var fd = new FormData(this.$refs.addCategoryForm);
                    var data = {
                        form: fd,
                        notify: self.$vs.notify,
                        closeloading: this.$vs.loading.close,
                    };
                    self.submitCategory(data).then((res) => {
                        if (res.data.status) {
                            this.addCategoryPopUp = false;
                            this.title = null;
                            e.target.reset();
                            this.getCategories();
                        }
                    })
                }

            })
        },
        addSubCategory(e, scope) {
            self = this;
            this.$validator.validateAll(scope).then((result) => {
                if (result) {
                    this.$vs.loading({
                        text: 'Processing...'
                    });
                    var fd = new FormData(this.$refs.addSubCategoryForm);
                    fd.append('parent', this.parent);
                    var data = {
                        form: fd,
                        notify: self.$vs.notify,
                        closeloading: this.$vs.loading.close,
                    };
                    this.submitSubCategory(data).then((res) => {
                        if (res.data.status == 'true') {
                            this.addCategoryPopUp = false;
                            this.title = null;
                            e.target.reset();
                            this.getSubCategories(this.$route.params.id);
                            this.getCategories();
                        }
                    })
                }

            })
        },
        addSponsor(e, scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    this.$vs.loading();
                    let fd = new FormData(this.$refs.addsponsor)
                    let data = {
                        fd: fd,
                        url: 'admin/ajax/add-sponser',
                        formType: 'sponsor',
                        closeLoader: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    }
                    this.$store.dispatch('createNewAccount', data).then(res => {
                        if (res.data.status) {
                            this.user_name = this.first_name = this.last_name = this.email = this.cell = this.password = this.zipcode = this.company_name = this.work = this.address = this.city = this.region = this.state = this.country = '';
                            e.target.reset();
                            this.$validator.reset();
                            this.addsponsor = false;
                        }
                    });
                    // this.create()
                }
            })
        },
        addAdmin(e, scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    this.$vs.loading();
                    let fd = new FormData(this.$refs.addAdminForm)
                    let data = {
                        fd: fd,
                        url: 'admin/ajax/add-admin',
                        formType: 'admin',
                        closeLoader: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    }
                    this.$store.dispatch('createNewAccount', data).then(res => {
                        if (res.data.status) {
                            this.username = this.firstname = this.lastname = this.adminEmail = this.contactno = this.adminPassword = '';
                            e.target.reset();
                            this.$validator.reset();
                            this.administratorsPopup = false;
                        }
                    });
                    // this.create()
                }
            })
        },
        addRepresentative(e, scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    this.$vs.loading();
                    let fd = new FormData(this.$refs.addRepresentativeForm)
                    let data = {
                        fd: fd,
                        formType: 'representative',
                        url: 'admin/ajax/add-representative',
                        closeLoader: this.$vs.loading.close,
                        notify: this.$vs.notify,
                    }
                    this.$store.dispatch('createNewAccount', data).then(res => {
                        if (res.data.status) {
                            this.rep_username = this.rep_firstname = this.rep_lastname = this.rep_email = this.rep_contactno = this.rep_password = '';
                            e.target.reset();
                            this.$validator.reset();
                            this.addRepresentativePopup = false;
                        }
                    });
                    // this.create()
                }
            })
        },
        changeRouteTitle(title) {
            this.routeTitle = title;
        },
        updateNavbarColor(val) {
            this.navbarColor = val;
            if (val == "#fff") this.isNavbarDark = false
            else this.isNavbarDark = true
        },
        handleWindowResize(event) {
            this.windowWidth = event.currentTarget.innerWidth;
            this.setSidebarWidth();
        },
        setSidebarWidth() {
            if (this.windowWidth < 1200) {
                this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false)
                this.$store.dispatch('updateSidebarWidth', 'no-sidebar')
                this.disableThemeTour = true;
            } else if (this.windowWidth < 1200) {
                this.$store.dispatch('updateSidebarWidth', 'reduced')
            } else {
                this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true)
            }
        },
        toggleHideScrollToTop(val) {
            this.hideScrollToTop = val;
        }
    },
    components: {
        VxSidebar,
        TheNavbar,
        TheFooter,
        BackToTop
    },
    async created() {
        await this.$store.dispatch('getSites');
        this.$store.dispatch('fetchRegions');
        this.setSidebarWidth();
        if (this.categories.length == 0) {
            this.getCategories();
        }

        if (this.navbarColor == "#fff" && this.isThemeDark) {
            this.updateNavbarColor("#10163a")
        } else {
            this.updateNavbarColor(this.navbarColor)
        }
    }
}

</script>
<style>
.con-select {
    width: 100%;
}

</style>
