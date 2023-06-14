<template>
    <div>
        <vx-card title="Categories" subtitle="List Of Categories" refreshContentAction>
            <vs-table pagination :max-items="10" search :data="categories">
                
                <template slot="thead">
                    <vs-th sort-key="#">
                        #
                    </vs-th>
                    <vs-th sort-key="name">
                        Title
                    </vs-th>
                    <vs-th>
                        No. Of Sub Categories
                    </vs-th>
                    <!-- <vs-th>
                        Show / Hide
                    </vs-th> -->
                    <vs-th>
                        Action
                    </vs-th>
                </template>
                <template slot-scope="{data}">
                    <vs-tr :key="indextr" v-for="(tr, indextr) in data">
                        <vs-td :data="indextr + 1">
                            {{indextr + 1 }}
                        </vs-td>
                        <vs-td :data="data[indextr].name">
                            {{data[indextr].name}}
                        </vs-td>
                        <vs-td :data="data[indextr].sub_category_count">
                            {{data[indextr].sub_category_count}}
                        </vs-td>
                        <!-- <vs-td>
                            <vs-switch vs-icon-on="done" vs-icon-off="close" @input='updateStatus(indextr)' v-model="data[indextr].status == 1?true:false"></vs-switch>
                        </vs-td> -->
                        <vs-td>
                        	<vs-button @click='findSingleCategory(tr.category_id)' icon-pack="feather" icon="icon-edit-2" type="gradient"></vs-button>
                            <!-- <div>
                                <vs-dropdown vs-trigger-click>
                                    <a class="a-icon" href.prevent>
                                        <vs-icon class="" icon="expand_more"></vs-icon>
                                    </a>
                                    <vs-dropdown-menu>
                                        <vs-dropdown-item :to="'sub-categories/'+data[indextr].category_id">
                                            <vs-icon></vs-icon>Sub Categories
                                        </vs-dropdown-item>
                                        <vs-dropdown-item @click='findSingleCategory(indextr)'>
                                            Edit
                                        </vs-dropdown-item>
                                    </vs-dropdown-menu>
                                </vs-dropdown>
                                <vs-button type="gradient"></vs-button>
                            </div> -->
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup class="holamundo" title="EDIT CATEGORY" :active.sync="editCategoryPopUp">
            <form ref="editCategoryForm" autocomplete="off" data-vv-scope="edit-form" @submit.prevent="editCategory($event,'edit-form')">
                <vs-row>
                    <vs-col vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vx-input-group>
                            <vs-input :danger="errors.has('edit-form.title')" icon-no-border icon="assignment" v-model="editTitle" name="title" v-validate="'required'" label-placeholder="Title" />
                            <span class="text-danger" v-show="errors.has('edit-form.title')">{{ errors.first('edit-form.title') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="flex justify-end" vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vs-button button="submit" class="mt-5" type="gradient">Edit Category</vs-button>
                    </vs-col>
                </vs-row>
            </form>
        </vs-popup>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
export default {
    data() {
        return {
            addCategoryPopUp: false,
            editCategoryPopUp: false,
            title: '',
            editTitle: '',
            editingIndex : null,
            editingId : null,
        };
    },
    computed: {
        ...mapState('categories/', ['categories']),
        ...mapGetters('categories/', ['findCategory']),
    },
    created() {
    	if(this.categories.length == 0){
        this.getCategories();

    	}
    },
    methods: {
        ...mapActions({
            getCategories: 'categories/getCategories',
            updateCategory: 'categories/updateCategory',
            updateCategoryStatus: 'categories/updateCategoryStatus'

        }),
        findSingleCategory(id){
        		let category = this.findCategory(id)
        		this.editTitle = category.name
        		// this.editingIndex = index;
        		this.editingId = category.category_id;
                this.editCategoryPopUp = true;

        },
        editCategory(e, scope) {
            self = this;
            this.$validator.validateAll(scope).then((result) => {
                if (result) {
                    this.$vs.loading({
                        text: 'Processing...'
                    });
                    var fd = new FormData(this.$refs.editCategoryForm);
                    fd.append('id',this.editingId);
                    var data = {
                        form: fd,
                        notify: self.$vs.notify,
                        closeloading: this.$vs.loading.close,
                        index : this.editingIndex,
                        id : this.editingId,
                    };
                    self.updateCategory(data).then((res) => {
                        if (res.data.status == 'true') {
                            this.editCategoryPopUp = false;
                            this.title = null;
                            e.target.reset();
                        }
                    })
                }

            })
        },
        updateStatus(index){
         var category = this.findCategory(index)
         // this.$vs.loading();
         let data = {
         	id : category.id,
         	status : category.status,
         	index : index,
         };
         this.updateCategoryStatus(data);
        }
    }
}

</script>
<style scoped>
.vs-button.small:not(.includeIconOnly) {
    padding: 0.2rem 1.5rem;
}

</style>
