<template>
    <keep-alive>
        <div>
            <vx-card :title="`List Of `+$route.name">
                <vs-table :data="representatives" search pagination :max-items="20">
                    <template slot="thead">
                        <vs-th>Name</vs-th>
                        <vs-th>Username</vs-th>
                        <vs-th>Email</vs-th>
                        <vs-th>Contact No.</vs-th>
                        <vs-th>Actions</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr v-for="(rep,index) in data" :key="rep.id">
                            <vs-td :data="rep.first_name+' '+rep.last_name">{{ rep.first_name+' '+rep.last_name }}</vs-td>
                            <vs-td :data="rep.username">{{ rep.username }}</vs-td>
                            <vs-td :data="rep.email">{{ rep.email }}</vs-td>
                            <vs-td :data="rep.contact_no">{{ rep.contact_no }}</vs-td>
                            <vs-td>
                                <vs-button @click="editRep(rep.id)" type="gradient" icon-pack="feather" icon="icon-edit-2"></vs-button>
                                <vs-button @click="deleteRep(rep.id)" type="gradient" icon-pack="feather" icon="icon-trash"></vs-button>
                            </vs-td>
                        </vs-tr>
                    </template>
                </vs-table>
            </vx-card>
            <vs-popup :active.sync="updateRepresentativePopup" title="Update Representative">
                <form autocomplete="off" ref="updateRepresentativeForm" @submit.prevent="updateRepresentative($event,'updateRepresentativeForm')">
                    <vs-row>
                        <vs-col vs-lg="12">
                            <multiselect :close-on-select="false" placeholder="Assigned sponsors" deselectLabel="" selectLabel="" :multiple="true" :options="sponsors" name="company_name" label="company_name" track-by="id" v-model="selected">
                                <template slot="noResult">No any Sponsor found</template>
                            </multiselect>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="First Name" placeholder="First Name" data-vv-as="First Name" v-validate="'required'" data-vv-scope="updateRepresentativeForm" v-model="firstname" name="firstname" />
                                <span v-show="errors.has('updateRepresentativeForm.firstname')">{{ errors.first('updateRepresentativeForm.firstname') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Last Name" placeholder="Last Name" data-vv-as="Last Name" v-validate="'required'" data-vv-scope="updateRepresentativeForm" v-model="lastname" name="lastname" />
                                <span v-show="errors.has('updateRepresentativeForm.lastname')">{{ errors.first('updateRepresentativeForm.lastname') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Email" placeholder="Email" data-vv-as="Email" v-validate="'required'" data-vv-scope="updateRepresentativeForm" v-model="email" name="email" />
                                <span v-show="errors.has('updateRepresentativeForm.email')">{{ errors.first('updateRepresentativeForm.email') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="password" placeholder="password" data-vv-as="Password" v-validate="'required'" data-vv-scope="updateRepresentativeForm" v-model="password" name="password" />
                                <span v-show="errors.has('updateRepresentativeForm.password')">{{ errors.first('updateRepresentativeForm.password') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Username" placeholder="Username" data-vv-as="Username" v-validate="'required'" data-vv-scope="updateRepresentativeForm" v-model="username" name="username" />
                                <span v-show="errors.has('updateRepresentativeForm.username')">{{ errors.first('updateRepresentativeForm.username') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="6">
                            <vx-input-group class="mt-5">
                                <vs-input label="Contact No." placeholder="Contact No." data-vv-as="Contact No." v-validate="'required'" data-vv-scope="updateRepresentativeForm" v-model="contactno" name="contactno" />
                                <span v-show="errors.has('updateRepresentativeForm.contactno')">{{ errors.first('updateRepresentativeForm.contactno') }}</span>
                            </vx-input-group>
                        </vs-col>
                        <vs-col vs-lg="12" class="flex justify-end">
                            <vx-input-group class="mt-5">
                                <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Update Representative</vs-button>
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
import Multiselect from 'vue-multiselect'
import 'vue-multiselect/dist/vue-multiselect.min.css'
export default {
    computed: {
        ...mapState('representatives/', ['representatives']),
        ...mapState('sponsors/', ['sponsors']),
        ...mapGetters('representatives/', ['findSaleRep'])
    },
    data() {
        return {
            id: '',
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            username: '',
            contactno: '',
            updateRepresentativePopup: false,
            selected: [],
        };
    },
    methods: {
        ...mapActions({
            fetchRepresentatives: 'representatives/fetchRepresentatives',
            getSponsors: 'sponsors/fetchSponsors',
            update: 'representatives/update',
            remove: 'representatives/deleteRep',
        }),
        editRep(id) {
            var rep = this.findSaleRep(id);
            this.selected = [];
            this.id = rep.id;
            this.firstname = rep.first_name;
            this.lastname = rep.last_name;
            this.email = rep.email;
            this.username = rep.username;
            this.contactno = rep.contact_no;
            this.password = rep.password;
            // this.selected = rep.sponser_ids;
            var self = this;
            if (rep.sponsers_ids !== null) {

                this.sponsors.forEach(function(element, index) {
                    if (_.includes(rep.sponsers_ids, element.uid)) {
                        self.selected.push(element);
                    }
                });
            }
            this.updateRepresentativePopup = true;
        },
        deleteRep(id) {
            this.id = id; 
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText : 'Yes Please',
                cancelText : 'No Way',
                text: 'Are you sure! do you want to delete this Sale Representative?',
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
        updateRepresentative(e, scope) {
            var self = this;
            this.$validator.validateAll(scope).then(result => {
                var sponsors = _.map(self.selected, 'uid');
                if (result) {
                    var fd = new FormData(this.$refs.updateRepresentativeForm)
                    fd.append('sponsors', JSON.stringify(sponsors));
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
                            this.updateRepresentativePopup = false;
                        }
                    });
                }
            })
            // console.log(this.selected)
        }
    },
    created() {
        this.fetchRepresentatives(this.$route.path);
        this.getSponsors('/all-sponsors');
    },
    components: {
        Multiselect,
    },
}

</script>
<style>
.multiselect__tag {
    background-image: linear-gradient(45deg, #00717f, #7c90c2);
}

.multiselect__tag-icon:focus,
.multiselect__tag-icon:hover {
    background: #03A9F4;
    border-radius: 30px;
    border: 1px solid white;
}

.multiselect__option--highlight {
    background-image: linear-gradient(45deg, #00717f, #7c90c2);
}

</style>
