<template>
    <vs-row>
        <vs-col vs-lg="9" vs-md="9" vs-sm="12" vs-xs="12">
            <vx-card :title="currentForm == 'profileInfo'?'Company Info':'Package Info'" :subtitle="detail.company_name">
                <template>
                    <form v-if="currentForm == 'profileInfo'" ref="companyInformationForm" @submit.prevent="storeInfo($event,'companyInfo')">
                        <vs-row>
                            <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-upload ref="file" accept="image/*" :single-upload='true' :show-upload-button='false' text="Upload Logo" :limit="1"></vs-upload>
                                </vx-input-group>
                            </vs-col>
                            <vs-col class="p-0" vs-lg="8" vs-md="4" vs-sm="12" vs-xs="12">
                                <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <input type="hidden" name="id" :value="detail.uid">
                                        <vs-input v-validate="'required'" v-model="detail.company_name" label="Company Name" name="company_name" />
                                        <span v-show="errors.has('company_name')">{{ errors.first('company_name') }}</span>
                                    </vx-input-group>
                                </vs-col>
                                <vs-col vs-lg="6" vs-md="4" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <vs-input v-validate="'required'" v-model="detail.email" label="Email" name="email" />
                                        <span v-show="errors.has('email')">{{ errors.first('email') }}</span>
                                    </vx-input-group>
                                </vs-col>
                                <vs-col vs-lg="6" vs-md="4" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <vs-input v-validate="'required'" v-model="detail.username" label="Username" name="username" />
                                        <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
                                    </vx-input-group>
                                </vs-col>
                                <vs-col vs-lg="6" vs-md="4" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <vs-input v-validate="'required'" v-model="detail.first_name" label="First Name" name="first_name" />
                                        <span v-show="errors.has('first_name')">{{ errors.first('first_name') }}</span>
                                    </vx-input-group>
                                </vs-col>
                                <vs-col vs-lg="6" vs-md="4" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <vs-input v-validate="'required'" v-model="detail.last_name" label="Last Name" name="last_name" />
                                        <span v-show="errors.has('last_name')">{{ errors.first('last_name') }}</span>
                                    </vx-input-group>
                                </vs-col>
                                <vs-col vs-lg="6" vs-md="4" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <vs-input v-model="detail.cell" label="Cell" name="cell" />
                                    </vx-input-group>
                                </vs-col>
                                <vs-col vs-lg="6" vs-md="4" vs-sm="12" vs-xs="12">
                                    <vx-input-group>
                                        <vs-input v-model="detail.work" label="work" name="work" />
                                    </vx-input-group>
                                </vs-col>
                            </vs-col>
                        </vs-row>
                        <vs-row>
                            <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input v-model="detail.address" label="address" name="address" />
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input type="url" v-model="detail.company_website" placeholder="https://www.example.com" label="Address / URL" name="url" />
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input v-model="detail.city" label="City" name="city" />
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input v-model="detail.state_province" label="State / Province" name="state_province" />
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group class="">
                                    <label class="vs-input--label">
                                        Country
                                    </label>
                                    <select name="country" class="vs-inputx vs-input--input normal">
                                        <option v-for="(country,index) in countries" :key="index">{{ country.name }}</option>
                                    </select>
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input v-model="detail.zip_postal" label="Zip / Postal Code" name="zipcode" />
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group class="mt-5">
                                    <vs-textarea style="resize: vertical;" counter="200" type="url" v-model="detail.description" label="Description" name="description"></vs-textarea>
                                </vx-input-group>
                            </vs-col>
                        </vs-row>
                        <vs-row class="mt-base">
                            <vs-col class="flex justify-end">
                                <vs-button type="gradient" button="submit"> Save Changes</vs-button>
                            </vs-col>
                        </vs-row>
                    </form>
                    <form v-else ref="packageInformationForm" @submit.prevent="storePackageInfo($event,'packageInfo')">
                        <vs-row>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <input type="hidden" name="id" :value="detail.uid">
                                    <label class="vs-input--label">Start Date</label>
                                    <datepicker v-validate="'required'" name="start_package" placeholder="Start Date" v-model="detail.start_package"></datepicker>
                                    <span v-show="errors.has('start_package')">{{ errors.first('start_package') }}</span>
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <label class="vs-input--label">Expiry Date</label>
                                    <datepicker v-validate="'required'" name="expire_package" placeholder="Expiry Date" v-model="detail.expire_package"></datepicker>
                                    <span v-show="errors.has('expire_package')">{{ errors.first('expire_package') }}</span>
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group class="">
                                    <label class="vs-input--label">
                                        Package
                                    </label>
                                    <select name="package" v-model="detail.package" class="vs-inputx vs-input--input normal">
                                        <option value="p1">No Package</option>
                                        <option value="p2">Gold Subscriber</option>
                                        <option value="p3">Platinium Subscriber</option>
                                    </select>
                                </vx-input-group>
                            </vs-col>
                            <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input v-model="detail.is_expired" disabled label="Package Status" />
                                </vx-input-group>
                            </vs-col>
                        </vs-row>
                        <vs-row class="mt-base">
                            <vs-col class="flex justify-end">
                                <vs-button type="gradient" button="submit"> Save Changes</vs-button>
                            </vs-col>
                        </vs-row>
                    </form>
                </template>
            </vx-card>
        </vs-col>
        <vs-col vs-lg="3" vs-md="3" vs-sm="12" vs-xs="12">
            <vx-card title="">
                <vs-list>
                    <vs-list-item class="p-5" title="Profile Information">
                        <vs-button @click="currentFormView('profileInfo')" type="gradient" icon-pack="feather" icon="icon-alert-circle"></vs-button>
                    </vs-list-item>
                    <vs-list-item class="p-5" title="Package Information">
                        <vs-button @click="currentFormView('packageInfo')" type="gradient" icon-pack="feather" icon="icon-alert-circle"></vs-button>
                    </vs-list-item>
                    <vs-list-item class="p-5" title="Approval Status">
                        <vs-switch icon-pack="feather" vs-icon-on="icon-check-circle" vs-icon-off="icon-slash" @input="updateStatus(detail.id)" v-model="detail.user_status == 'approved'?true:false"></vs-switch>
                    </vs-list-item>
                    <vs-list-item v-if="detail.user_status == 'approved' && detail.is_expired != 'Expire'" class="p-5" title="Add Resource">
                        <vs-button type="gradient" :to="`/add-resource/${detail.uid}`" icon="icon-plus" icon-pack="feather"></vs-button>
                    </vs-list-item>
                    <vs-list-item v-if="detail.user_status == 'approved' && detail.is_expired != 'Expire'" class="p-5" title="Add Product">
                        <vs-button type="gradient" @click="showProductPopup(detail.uid)" icon="icon-plus" icon-pack="feather"></vs-button>
                    </vs-list-item>
                    <vs-list-item class="p-5" title="Download All Statistics">
                        <vs-button @click="downloadStats" type="gradient" icon-pack="feather" icon="icon-download"></vs-button>
                    </vs-list-item>
                </vs-list>
            </vx-card>
        </vs-col>
        <vs-popup :active.sync="addProductPopup" title="Add new Product">
            <form ref="addProductForm" data-vv-scope="addproduct" @submit.prevent="submitProduct($event,'addproduct')">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vs-upload ref="productImage" accept="image/*" :single-upload='true' :show-upload-button='false' text="Product Image" :limit="1"></vs-upload>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vs-row>
                            <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input label="Product Name" placeholder="Product Name" v-model="product_name" name="product_name" v-validate="'required'" data-vv-as="Product Name" />
                                    <span v-show="errors.has('addproduct.product_name')">{{ errors.first('addproduct.product_name') }}</span>
                                </vx-input-group>
                            </vs-col>
                            <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input label="Price" placeholder="Price" v-model="price" name="price" v-validate="'required'" data-vv-as="Price" />
                                    <span v-show="errors.has('addproduct.price')">{{ errors.first('addproduct.price') }}</span>
                                </vx-input-group>
                            </vs-col>
                            <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input-number v-validate="'required'" name="quantity" label="Quantity" v-model="quantity" />
                                    <span v-show="errors.has('addproduct.quantity')">{{ errors.first('addproduct.quantity') }}</span>
                                </vx-input-group>
                            </vs-col>
                        </vs-row>
                    </vs-col>
                    <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                        <vx-input-group>
                            <vx-select v-validate="'required'" placeholder="Select Category" name="category" label="Category" v-model="category">
                                <div :key="index" v-for="(item,index) in categories">
                                    <vs-select-group :title="item.name">
                                        <vs-select-item :key="index" :value="item.category_id" :text="item.name" v-for="(item,index) in item.sub_category" />
                                    </vs-select-group>
                                </div>
                            </vx-select>
                            <span v-show="errors.has('addproduct.category')">{{ errors.first('addproduct.category') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                        <vx-input-group>
                            <vs-textarea v-validate="'required'" name="description" label="Description" v-model="description"></vs-textarea>
                            <span v-show="errors.has('addproduct.description')">{{ errors.first('addproduct.description') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-divider position="left">
                        <h4>Details and specs (Optional)</h4>
                    </vs-divider>
                    <vs-row v-for="(feature,index) in features" :key="index">
                        <vs-col class="mb-3" vs-lg="5" vs-md="5" vs-sm="12" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="feature.name" :placeholder="`Feature`" :name="`features[${index}][name]`" />
                                <!-- <span v-show="errors.has(`addproduct.${feature.feature_name}${index + 1}`)">{{ errors.first(`addproduct.${feature.feature_name}${index + 1}`) }}</span> -->
                            </vx-input-group>
                        </vs-col>
                        <vs-col class="mb-3" vs-lg="5" vs-md="5" vs-sm="12" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="feature.value" placeholder="Value" :name="`features[${index}][value]`" />
                                <!-- <span v-show="errors.has(`addproduct.${feature._name}${index + 1}`)">{{ errors.first(`addproduct.${feature._name}${index + 1}`) }}</span> -->
                            </vx-input-group>
                        </vs-col>
                        <vs-col class="mb-3" vs-lg="2" vs-md="2" vs-sm="12" vs-xs="12">
                            <template>
                                <vs-button v-if="index == 0" @click="addMore()" type="gradient" icon="icon-plus" icon-pack="feather"></vs-button>
                                <vs-button v-else @click="deleteMore(index)" type="gradient" icon="icon-trash" icon-pack="feather"></vs-button>
                            </template>
                        </vs-col>
                    </vs-row>
                    <vs-row>
                        <vs-col class="flex justify-end">
                            <vs-button button="submit" type="gradient" icon="icon-plus" icon-pack="feather">Add Product</vs-button>
                        </vs-col>
                    </vs-row>
                </vs-row>
            </form>
        </vs-popup>
        <vs-prompt @accept="downloadStatsFile" :active.sync="downloadStatsPopup">
            <vs-row>
                <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                    <vx-input-group>
                        <label class="vs-input--label">Start Date</label>
                        <datepicker v-validate="'required'" name="start_date" placeholder="Start Date" v-model="start_date"></datepicker>
                    </vx-input-group>
                </vs-col>
                <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                    <vx-input-group>
                        <label class="vs-input--label">End Date</label>
                        <datepicker v-validate="'required'" name="end_date" placeholder="Expiry Date" v-model="end_date"></datepicker>
                    </vx-input-group>
                </vs-col>
            </vs-row>
        </vs-prompt>
    </vs-row>
</template>
<script>
import Datepicker from 'vuejs-datepicker';
export default {
    props: {
        detail: {
            type: Object,
            default: {},
        },
        countries: {
            type: Array,
            default: function() {
                return [];
            },
        },
        categories: {
            type: Array,
            default: function() {
                return [];
            },
        }
    },
    data() {
        return {
            currentForm: 'profileInfo',
            addProductPopup: false,
            downloadStatsPopup: false,
            price: '',
            product_name: '',
            quantity: 1,
            category: '',
            description: '',
            features: [],
            start_date : '',
            end_date : '',
        };
    },
    components: {
        Datepicker
    },
    created() {
        this.features.push({
            name: '',
            value: '',
        })
    },
    methods: {
        showProductPopup(uid) {
            this.addProductPopup = true;
        },
        downloadStats() {
            this.downloadStatsPopup = true;
        },
        downloadStatsFile(){
            // let dates = {start_date : this.start_date, end_date : this.end_date}
            if(this.start_date == '' || this.end_date == ''){
                this.$vs.notify({
                    position : 'center-top',
                    color : 'danger',
                    text : 'Please select both start & end dates',
                    icon : 'warning'
                });
            this.downloadStatsPopup = true;
                return false;
            }else{
                this.$vs.loading();
            }
            let self = this;
            setTimeout(function(){
                self.$vs.loading.close();
            },1000)
            window.location.href = 'download-stats?id='+this.$route.params.id+'&start_date='+this.start_date.toLocaleDateString()+'&end_date='+this.end_date.toLocaleDateString();
        },
        addMore() {
            this.features.unshift({
                name: '',
                value: '',
            })
        },
        deleteMore(index) {
            this.features.splice(index, 1);
        },
        submitProduct(e, scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    let fd = new FormData(this.$refs.addProductForm)
                    // fd.append('features',JSON.stringify(this.features));
                    fd.append('category', this.category);
                    fd.append('user_id', this.detail.uid);
                    let file = this.$refs.productImage;
                    let currentAddedFile = file.filesx.filter(i => i.remove !== true);
                    if (currentAddedFile.length > 0) {

                        fd.append('file', currentAddedFile[0]);
                    }

                    let data = {
                        fd: fd,
                        notify: this.$vs.notify,
                        closeLoader: this.$vs.loading.close,
                    };
                    this.$store.dispatch('products/create', data).then(res => {
                        if (res.data.status) {
                            this.features = [];
                            this.features.push({
                                name: '',
                                value: '',
                            });
                            this.price = this.product_name = this.description = this.category = '';
                            this.quantity = 1;
                            e.target.reset();
                            this.$validator.reset();
                            this.addProductPopup = false;
                        }
                    })
                }
            })
        },
        storeInfo(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    let fd = new FormData(this.$refs.companyInformationForm)
                    let file = this.$refs.file;
                    let currentAddedFile = file.filesx.filter(i => i.remove !== true);
                    fd.append('image', currentAddedFile[0]);
                    this.$emit('info-submitted', fd);
                }
            })
        },
        storePackageInfo(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    let fd = new FormData(this.$refs.packageInformationForm)
                    this.$emit('package-submitted', fd);
                }
            })
        },
        currentFormView(view) {
            this.currentForm = view;
        },
        updateStatus(id) {
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText: 'Yes Please',
                cancelText: 'No Way',
                text: 'Are you sure! do you want to change Subscriber\'s status?',
                accept: this.updateConfirmed
            })
        },
        updateConfirmed() {
            let data = {
                id: this.detail.id,
                notify: this.$vs.notify,
                route: this.$route.path,
            };
            this.$emit('change-status', data);
        },
    },
}

</script>
<style>
.con-input-upload {
    width: 100%;
    margin: 0;
}

.con-input-upload.disabled-upload {
    display: none;
}

</style>
