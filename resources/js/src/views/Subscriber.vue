<template>
	<keep-alive>
		<div>
		<vx-card title="List Of Subscribers">
            <template slot="actions">
                <vs-button :href="{url: 'export-'+$route.path.substring(1)}"  type="gradient" icon-pack="feather" icon="icon-download">Export</vs-button>
            </template>
			<vs-table :data="subscribers" search pagination :max-items="20">
                    <template slot="thead">
                        <vs-th>Company Name</vs-th>
                        <vs-th>Full Name</vs-th>
                        <vs-th>Email</vs-th>
                        <vs-th>Account Created</vs-th>
                        <!-- <vs-th>Approval Status</vs-th> -->
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr v-for="(subscriber,index) in data" :key="subscriber.id">
                            <vs-td :data="subscriber.company_name">{{ subscriber.company_name }}</vs-td>
                            <vs-td :data="subscriber.full_name">{{ subscriber.full_name }}</vs-td>
                            <vs-td :data="subscriber.email">{{ subscriber.email }}</vs-td>
                            <vs-td :data="subscriber.created_at">{{ new Date(subscriber.created_at).toLocaleString() }}</vs-td>
                            <!-- <vs-td>
                                <vs-switch @input="updateStatus(subscriber.id)" v-model="subscriber.user_status == 'approved'?true:false"></vs-switch>
                            </vs-td> -->
                            <vs-td>
                                <vs-dropdown>
                                    <vs-button icon-pack="feather" icon="icon-settings" type="border"></vs-button>
                                    <vs-dropdown-menu style="width: 180px">
                                        <vs-dropdown-item @click="viewDetail(subscriber.uid)">
                                            Subscriber Detail
                                        </vs-dropdown-item>
                                        <vs-dropdown-item @click="upgradeConfirmation(subscriber.uid)">
                                            Upgrade To Sponsor
                                        </vs-dropdown-item>
                                    </vs-dropdown-menu>
                                </vs-dropdown>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
		</vx-card>
        <vs-popup :active.sync="subscriberDetailPopup" title="User Detail">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="First Name" data-vv-scope="addsponsor" data-vv-as="First Name" v-validate="'required'" v-model="subscriber.first_name" name="first_name"/>
                            <span v-show="errors.has('addsponsor.first_name')">{{ errors.first('addsponsor.first_name') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Last Name" data-vv-scope="addsponsor" data-vv-as="Last Name" v-validate="'required'" v-model="subscriber.last_name" name="last_name"/>
                            <span v-show="errors.has('addsponsor.last_name')">{{ errors.first('addsponsor.last_name') }}</span>

                        </vx-input-group>
                    </vs-col>
                   <!--  <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                       <vx-input-group class="mt-5">
                           <vs-input disabled label-placeholder="User Name" data-vv-scope="addsponsor" data-vv-as="User Name" v-validate="'required'" v-model="subscriber.user_name" name="user_name"/>
                           <span v-show="errors.has('addsponsor.user_name')">{{ errors.first('addsponsor.user_name') }}</span>
                       </vx-input-group>
                   </vs-col> -->
                    <!-- <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Password" data-vv-scope="addsponsor" data-vv-as="Password" v-validate="'required'" v-model="subscriber.password" name="password"/>
                            <span v-show="errors.has('addsponsor.password')">{{ errors.first('addsponsor.password') }}</span>
                        </vx-input-group>
                    </vs-col> -->
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Email" data-vv-scope="addsponsor" data-vv-as="Email Address" v-validate="'required'" v-model="subscriber.email" name="email"/>
                            <span v-show="errors.has('addsponsor.email')">{{ errors.first('addsponsor.email') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Company Name" data-vv-scope="addsponsor" data-vv-as="Company Name" v-validate="'required'" v-model="subscriber.company_name" name="company_name"/>
                            <span v-show="errors.has('addsponsor.company_name')">{{ errors.first('addsponsor.company_name') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Cell" data-vv-scope="addsponsor" data-vv-as="Cell" v-validate="'required'" v-model="subscriber.cell" name="cell"/>
                            <span v-show="errors.has('addsponsor.cell')">{{ errors.first('addsponsor.cell') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Work" data-vv-scope="addsponsor" data-vv-as="Work" v-validate="'required'" v-model="subscriber.work" name="work"/>
                            <span v-show="errors.has('addsponsor.work')">{{ errors.first('addsponsor.work') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Address" data-vv-scope="addsponsor" data-vv-as="Address" v-validate="'required'" v-model="subscriber.address" name="address"/>
                            <span v-show="errors.has('addsponsor.address')">{{ errors.first('addsponsor.address') }}</span>
                        </vx-input-group>
                    </vs-col>
                   <!--  <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                       <vx-input-group class="mt-4">
                         <vs-input disabled v-model="subscriber.region" label-placeholder="Region"/>
                           <span v-show="errors.has('addsponsor.region')">{{ errors.first('addsponsor.region') }}</span>
                       </vx-input-group>
                   </vs-col> -->
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="City" data-vv-scope="addsponsor" data-vv-as="City" v-validate="'required'" v-model="subscriber.city" name="city"/>
                            <span v-show="errors.has('addsponsor.city')">{{ errors.first('addsponsor.city') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="State" data-vv-scope="addsponsor" data-vv-as="State" v-validate="'required'" v-model="subscriber.state" name="state"/>
                            <span v-show="errors.has('addsponsor.state')">{{ errors.first('addsponsor.state') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="country" data-vv-scope="addsponsor" data-vv-as="Country" v-validate="'required'" v-model="subscriber.country" name="country"/>
                            <span v-show="errors.has('addsponsor.country')">{{ errors.first('addsponsor.country') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vx-input-group class="mt-5">
                            <vs-input disabled label-placeholder="Zip / Postal Code" data-vv-scope="addsponsor" data-vv-as="Zip / Postal Code" v-validate="'required'" v-model="subscriber.zipcode" name="zipcode"/>
                            <span v-show="errors.has('addsponsor.zipcode')">{{ errors.first('addsponsor.zipcode') }}</span>
                        </vx-input-group>
                    </vs-col>
                </vs-row>
        </vs-popup>
	</div>
	</keep-alive>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data () {
      return {
        id:0,
        subscriber : {},
        subscriberDetailPopup : false,
      };
    },

    computed: {
        ...mapState('subscribers/', ['subscribers']),
        ...mapGetters('subscribers/', ['findSubscriber']),
        regions(){
            return this.$store.state.regions;            
        },
    },
    methods: {
        ...mapActions({
            fetchSubscribers : 'subscribers/fetchSubscribers',
            changeStatus : 'subscribers/changeStatus',
            upgrade : 'subscribers/upgrade',
        }),
        updateStatus(id){
            this.id = id;
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
        updateConfirmed(){
            let data = {
                id: this.id,
                notify: this.$vs.notify,
                route : this.$route.path,
            };
            this.changeStatus(data);
        },
        upgradeConfirmation(id){
            this.id = id;
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText: 'Yes Please',
                cancelText: 'No Way',
                text: 'Are you sure! do you want to Upgrade Subscriber Account?',
                accept: this.upgradeAccount
            })
            
        },
        viewDetail(id){
            this.subscriber = this.findSubscriber(id);
            this.subscriberDetailPopup = true;
        },
        upgradeAccount(){
            this.$router.push('/account-detail/'+this.id)
        },
    },
    created() {
        this.$store.dispatch('fetchRegions');
    	if(this.subscribers.length == 0){

        this.fetchSubscribers(this.$route.path);
    	}
    }
}
</script>