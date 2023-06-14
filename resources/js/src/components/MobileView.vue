<template>
    <vs-row>
        <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
            <vs-row>
                <vs-col class="flex justify-end ">
                    <vs-button type="gradient" :to="`/add-resource/${detail.uid}`" icon="icon-plus" icon-pack="feather"></vs-button>
                    <vs-button type="gradient" icon-pack="feather" icon="icon-download"></vs-button>
                </vs-col>
            </vs-row>
            <h1>Company Name: <small>{{ detail.company_name }}</small></h1>
            <vs-tabs>
                <vs-tab label="Profile Information">
                    <form ref="companyInformationForm" @submit.prevent="storeInfo($event,'companyInfo')">
                        <vs-row>
                            <vs-col vs-lg="4" vs-md="4" vs-sm="12" vs-xs="12">
                                <vs-upload ref="file" accept="image/*" :single-upload='true' :show-upload-button='false' text="Upload Logo" :limit="1"></vs-upload>
                            </vs-col>
                            <vs-col vs-lg="8" vs-md="4" vs-sm="12" vs-xs="12">
                                <vs-col>
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
                </vs-tab>
                <vs-tab label="Package Information">
                    <form ref="packageInformationForm" @submit.prevent="storePackageInfo($event,'packageInfo')">
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
                </vs-tab>
                <vs-tab label="Approval Status">
                    <label class="vs-input--label">Approval Status</label>
                    <select class="vs-inputx vs-input--input normal" v-model="detail.user_status">
                        <option value="not approved">Un Approved</option>
                        <option value="approved">Approved</option>
                    </select>
                    <vs-button class="w-full mt-base" @click="updateStatus(detail.id)" type="gradient">Save Changes</vs-button>
                </vs-tab>
            </vs-tabs>
        </vs-col>
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
            default: [],
        }
    },
    components: {
        Datepicker
    },
    methods: {
        storeInfo(e) {
            this.$validator.validateAll().then(result => {
                if (result) {
                    let fd = new FormData(this.$refs.companyInformationForm)
                    let file = this.$refs.file;
                    let currentAddedFile = file.filesx.filter(i => i.remove !== true);
                    fd.append('file', currentAddedFile);
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
                status: this.detail.user_status,
                notify: this.$vs.notify,
                route: this.$route.path,
            };
            this.$emit('change-status', data);
        },
    },
}

</script>
