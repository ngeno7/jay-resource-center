<template>
    <keep-alive>
        <div>
            <vx-card :title="`List Of `+$route.name">
                <vs-table :data="admins" search pagination :max-items="20">
                    <template slot="thead">
                        <vs-th>Name</vs-th>
                        <vs-th>Username</vs-th>
                        <vs-th>Email</vs-th>
                        <vs-th>Contact No.</vs-th>
                        <vs-th>Actions</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr v-for="(admin,index) in data" :key="admin.adminid">
                            <vs-td :data="admin.fname+' '+admin.lname">{{ admin.fname+' '+admin.lname }}</vs-td>
                            <vs-td :data="admin.uname">{{ admin.uname }}</vs-td>
                            <vs-td :data="admin.email">{{ admin.email }}</vs-td>
                            <vs-td :data="admin.contactno">{{ admin.contactno }}</vs-td>
                            <vs-td>
                                <vs-button @click="editRep(admin.adminid)" type="gradient" icon-pack="feather" icon="icon-edit-2"></vs-button>
                                <vs-button @click="deleteAdmin(admin.adminid)" type="gradient" icon-pack="feather" icon="icon-trash"></vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
            <vs-popup :active.sync="updateAdminPopup" title="Update Administrator">
                <form autocomplete="off" ref="updateAdminForm" @submit.prevent="updateAdmin($event,'updateadmin')">
                    <vs-row>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="First Name" placeholder="First Name" data-vv-as="First Name" v-validate="'required'" data-vv-scope="updateadmin" v-model="firstname" name="firstname" />
                                <span v-show="errors.has('updateadmin.firstname')">{{ errors.first('updateadmin.firstname') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Last Name" placeholder="Last Name" data-vv-as="Last Name" v-validate="'required'" data-vv-scope="updateadmin" v-model="lastname" name="lastname" />
                                <span v-show="errors.has('updateadmin.lastname')">{{ errors.first('updateadmin.lastname') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Email" placeholder="Email" data-vv-as="Email" v-validate="'required'" data-vv-scope="updateadmin" v-model="email" name="email" />
                                <span v-show="errors.has('updateadmin.email')">{{ errors.first('updateadmin.email') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="password" placeholder="password" data-vv-as="Password" v-validate="'required'" data-vv-scope="updateadmin" v-model="password" name="password" />
                                <span v-show="errors.has('updateadmin.password')">{{ errors.first('updateadmin.password') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Username" placeholder="Username" data-vv-as="Username" v-validate="'required'" data-vv-scope="updateadmin" v-model="username" name="username" />
                                <span v-show="errors.has('updateadmin.username')">{{ errors.first('updateadmin.username') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Contact No." placeholder="Contact No." data-vv-as="Contact No." v-validate="'required'" data-vv-scope="updateadmin" v-model="contactno" name="contactno" />
                                <span v-show="errors.has('updateadmin.contactno')">{{ errors.first('updateadmin.contactno') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="12" class="flex justify-end">
                            <vx-input-group class="mt-5">
                                <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Update Administrator</vs-button>
                            </vx-input-group>
                        </vs-col>
                    </vs-row>
                </form>
            </vs-popup>
        </div>
    </keep-alive>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data() {
        return {
            updateAdminPopup: false,
            firstname : '',
            lastname : '',
            email : '',
            password : '',
            username : '',
            contactno : '',
        };
    },
    computed: {
        ...mapState('admins/', ['admins']),
        ...mapGetters('admins/', ['findAdmin'])
    },
    methods: {
        ...mapActions({
            fetchAdmins: 'admins/fetchAdmins',
            update: 'admins/update',
            remove: 'admins/deleteAdmin',
        }),
        editRep(id) {
            var admin = this.findAdmin(id);
            this.id = admin.adminid;
            this.firstname = admin.fname;
            this.lastname = admin.lname;
            this.email = admin.email;
            this.username = admin.uname;
            this.contactno = admin.contactno;
            this.password = admin.password;
            // this.selected = admin.sponser_ids;
            var self = this;
            this.updateAdminPopup = true;
        },
        deleteAdmin(id) {
            this.id = id;
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText: 'Yes Please',
                cancelText: 'No Way',
                text: 'Are you sure! do you want to delete this Administrator?',
                accept: this.deleteconfirmed
            })
        },
        deleteconfirmed() {
            let data = {
                id: this.id,
                notify: this.$vs.notify,

            };
            this.remove(data);
        },
        updateAdmin(e, scope) {
            var self = this;
            this.$validator.validateAll(scope).then(result => {
                var sponsors = _.map(self.selected, 'uid');
                if (result) {
                    var fd = new FormData(this.$refs.updateAdminForm)
                    fd.append('id', this.id);
                    let data = {
                        fd: fd,
                        notify: this.$vs.notify,
                        closeLoader: this.$vs.loading.close,

                    };
                    this.update(data).then(res => {
                        if (res.data.status) {

                            e.target.reset();
                            this.email = this.username = this.contactno = this.password = '';
                            this.selected = [];
                            this.updateAdminPopup = false;
                        }
                    });
                }
            })
            // console.log(this.selected)
        }
    },
    created() {
        this.fetchAdmins(this.$route.path);
    }
}

</script>
