<template>
    <keep-alive>
        <div>
            <vx-card title="List Of Sponsors" subtitle="List of all premium users">
                <template slot="actions">
                    <vs-button v-show="$route.name != 'All Sponsors'" :href="{url: 'admin/export-'+$route.path.substring(1)}"  type="gradient" icon-pack="feather" icon="icon-download">Export</vs-button>
                </template>
                <vs-table :data="sponsors" search pagination :max-items="20">
                    <template slot="thead">
                        <vs-th>Company Name</vs-th>
                        <vs-th>Full Name</vs-th>
                        <vs-th>Email</vs-th>
                        <vs-th>Package</vs-th>
                        <vs-th>Account Created</vs-th>
                        <vs-th>Approval Status</vs-th>
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr v-for="(sponser,index) in data" :key="sponser.id">
                            <vs-td :data="sponser.company_name">{{ sponser.company_name }}</vs-td>
                            <vs-td :data="sponser.full_name">{{ sponser.full_name }}</vs-td>
                            <vs-td :data="sponser.email">{{ sponser.email }}</vs-td>
                            <vs-td :data="sponser.package">{{ sponser.package }}</vs-td>
                            <vs-td :data="sponser.created_at">{{ new Date(sponser.created_at).toLocaleString() }}</vs-td>
                            <vs-td>
                            	<vs-switch @input="updateStatus(sponser.id)" v-model="sponser.user_status == 'approved'?true:false"></vs-switch>
                            </vs-td>
                            <vs-td>
                                <vs-dropdown>
                                    <vs-button icon-pack="feather" icon="icon-settings" type="border"></vs-button>
                                    <vs-dropdown-menu style="width: 150px">
                                        <vs-dropdown-item :to="'/account-detail/'+sponser.uid">
                                            Company Detail
                                        </vs-dropdown-item>
                                        <vs-dropdown-item :to="'/resource-detail/'+sponser.uid">
                                            Resources Detail
                                        </vs-dropdown-item>
                                        <vs-dropdown-item :to="'/products-detail/'+sponser.uid">
                                            Products Detail
                                        </vs-dropdown-item>
                                        <vs-dropdown-item @click="deleteSponsor(sponser.id)" v-show="$route.name != 'Expired Sponsors'">
                                            Delete
                                        </vs-dropdown-item>
                                    </vs-dropdown-menu>
                                </vs-dropdown>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
        </div>
    </keep-alive>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    computed: {
        ...mapState('sponsors/', ['sponsors'])
    },
    data () {
      return {
        id:0,
      };
    },
    methods: {
        ...mapActions({
            fetchSponsors: 'sponsors/fetchSponsors',
            changeStatus : 'sponsors/changeStatus',
            deleteUser : 'sponsors/deleteUser',
        }),
        updateStatus(id){
            this.id = id;
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText: 'Yes Please',
                cancelText: 'No Way',
                text: 'Are you sure! do you want to change Sponsor\'s status?',
                accept: this.updateConfirmed
            })
        },
        deleteSponsor(id){
            this.id = id;
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText: 'Yes Please',
                cancelText: 'No Way',
                text: 'Are you sure you want to delete this user?',
                accept: this.deleteConfirmed
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
        deleteConfirmed(){
            let data = {
                id: this.id,
                notify: this.$vs.notify,
                route : this.$route.path,
            };
            this.deleteUser(data);
        },
    },
    created() {
        // console.log();
        this.fetchSponsors(this.$route.path);
    }
}

</script>
