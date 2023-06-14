<template>
    <keep-alive>
        <div>
        <vx-card :title="`List Of `+$route.name">
            <vs-table :data="resources" search pagination :max-items="20">
                    <template slot="thead">
                        <vs-th>Topic</vs-th>
                        <vs-th>Company Name</vs-th>
                        <vs-th>Date</vs-th>
                        <vs-th>Status</vs-th>
                        <vs-th>Detail</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr v-for="(resource,index) in data" :key="resource.id">
                            <vs-td :data="resource.resource_topic">{{ resource.resource_topic }}</vs-td>
                            <vs-td :data="resource.company_name">{{ resource.company_name }}</vs-td>
                            <vs-td :data="resource.created_at">{{ new Date(resource.created_at).toLocaleString() }}</vs-td>
                            <vs-td>                                
                                <vs-switch @input="updateStatus(resource.id)" vs-icon-off="close" vs-icon-on="done" v-model="resource.adminstatus == 'Enable'?true:false"></vs-switch>
                            </vs-td>
                            <vs-td>
                                <vs-button type="gradient" target :href="{url: `resource-detail/${getSlug(resource.resource_topic)}/${resource.resources_id}`}" icon-pack="feather"  icon="icon-info"></vs-button>
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
        ...mapState('resources/', ['resources'])
    },
    methods: {
        ...mapActions({
            fetchResources : 'resources/fetchResources',
            changeStatus : 'resources/changeStatus',
        }),
        updateStatus(id){
            this.id = id;
            this.$vs.dialog({
                type: 'confirm',
                color: 'danger',
                title: `Confirm`,
                acceptText: 'Yes Please',
                cancelText: 'No Way',
                text: 'Are you sure! do you want to change resource\'s status?',
                accept: this.updateConfirmed
            })
        },
        getSlug(title){
            return title.replace(' ','-');
        },
        updateConfirmed(){
            let data = {
                id: this.id,
                notify: this.$vs.notify,
                route : this.$route.path,
            };
            this.changeStatus(data);
        },
    },
    created() {
        this.fetchResources(this.$route.path);
    }
}
</script>