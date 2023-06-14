<template>
    <keep-alive>
        <div>
        <vx-card :title="`List Of Resources`" :subtitle="`${sponsor.company_name} Resources`">
            <vs-table :data="resources" search pagination :max-items="20">
                    <template slot="thead">
                        <vs-th>Topic</vs-th>
                        <vs-th>No Of. Views</vs-th>
                        <vs-th>No Of. Downloads</vs-th>
                        <vs-th>Status</vs-th>
                        <vs-th>Action</vs-th>
                    </template>
                    <template slot-scope="{data}">
                        <vs-tr v-for="(resource,index) in data" :key="resource.id">
                            <vs-td :data="resource.resource_topic">{{ resource.resource_topic }}</vs-td>
                            <vs-td :data="resource.resource_views_count + resource.resource_anonymous_views_count">{{ resource.resource_views_count + resource.resource_anonymous_views_count }}</vs-td>
                            <vs-td :data="resource.resource_downloads_count">{{ resource.resource_downloads_count }}</vs-td>
                            <vs-td>                                
                                <vs-switch @input="updateStatus(resource.id)" vs-icon-off="close" vs-icon-on="done" v-model="resource.adminstatus == 'Enable'?true:false"></vs-switch>
                            </vs-td>
                            <vs-td>
                                <vs-button type="gradient" target :href="{url: `resource-detail/${getSlug(resource.resource_topic)}/${resource.resources_id}`}" icon-pack="feather"  icon="icon-info"></vs-button>
                                <vs-button type="gradient" :to="`/edit-resource/${resource.resources_id}`" icon-pack="feather"  icon="icon-edit-2"></vs-button>
                                <vs-button type="gradient" :href="{url : 'stats_download/'+resource.resources_id}" icon-pack="feather"  icon="icon-download-cloud"></vs-button>
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
        ...mapState('resources/', ['resources']),
        ...mapState('sponsors/', ['sponsor'])
    },
    methods: {
        ...mapActions({
            fetchSponsorResources : 'resources/fetchSponsorResources',
            changeStatus : 'resources/changeStatus',
            getSponsor : 'sponsors/getSponsor',
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
        updateConfirmed(){
            let data = {
                id: this.id,
                notify: this.$vs.notify,
                route : this.$route.path,
            };
            this.changeStatus(data);
        },
        getSlug(title){
        	return title.replace(' ','-');
        },
    },
    created() {
        this.fetchSponsorResources(this.$route.params.id);
        this.getSponsor(this.$route.params.id);
    }
}
</script>