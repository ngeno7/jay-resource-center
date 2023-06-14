<template>
    <div>
        <vx-card title="Sub Categories" subtitle="Sub Categories which are used to associate shop business listings" refreshContentAction>
            <vs-table pagination :max-items="10" search :data="subcategories">
                <template slot="thead">
                    <vs-th>
                        #
                    </vs-th>
                    <vs-th sort-key="name">
                        Parent Category
                    </vs-th>
                    <vs-th sort-key="name">
                        Sub Category
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
                        <vs-td :data="indextr">
                            {{indextr + 1 }}
                        </vs-td>
                        <vs-td :data="data[indextr].category.name">
                            {{data[indextr].category.name}}
                        </vs-td>
                        <vs-td :data="data[indextr].name">
                            {{data[indextr].name}}
                        </vs-td>
                        <!-- <vs-td>
                            <vs-switch vs-icon-on="done" vs-icon-off="close" @input='updateStatus(indextr)' v-model="data[indextr].status == 1?true:false"></vs-switch>
                        </vs-td> -->
                        <vs-td>
                            <div>
                                <vs-button type="gradient" radius @click='findSingleCategory(tr.category_id)' icon="edit"></vs-button>
                            </div>
                        </vs-td>
                    </vs-tr>
                </template>
            </vs-table>
        </vx-card>
        <vs-popup class="holamundo" title="EDIT SUB CATEGORY" :active.sync="editCategoryPopUp">
            <form ref="editCategoryForm" autocomplete="off" data-vv-scope="edit-form" @submit.prevent="editCategory($event,'edit-form')">
                <vs-row>
                    <vs-col vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vx-input-group>
                            <vx-select placeholder="Select Parent Category" v-model="edit_parent" v-validate="'required'" name="parent_category" data-vv-as="Parent Category">
                                <vs-select-item v-for="(category,index) in categories" :key="index" :text="category.name" :value="category.category_id"></vs-select-item>
                            </vx-select>
                            <span class="text-danger" v-show="errors.has('add-sub-category-form.parent_category')">{{ errors.first('add-sub-category-form.parent_category') }}</span>
                        </vx-input-group>
                        <vx-input-group>
                            <vs-input :danger="errors.has('edit-form.title')" icon-no-border icon="assignment" v-model="editTitle" name="title" v-validate="'required'" label-placeholder="Title" />
                            <span class="text-danger" v-show="errors.has('edit-form.title')">{{ errors.first('edit-form.title') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="flex justify-end" vs-lg="12" vs-xl='12' vs-sm='12' vs-md='12'>
                        <vs-button button="submit" class="mt-5" type="gradient">Edit Sub Category</vs-button>
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
            editingIndex: null,
            editingId: null,
            edit_parent : '',
        };
    },
    computed: {
        ...mapState('categories/', ['categories', 'subcategories']),
        ...mapGetters('categories/', ['findCategory', 'findSubCategories','findSubCategory']),
    },
    created() {
            this.getSubCategories().then(res => {
            })
        if (this.categories.length == 0) {
            this.getCategories();
        }/* else {
            var subcategories = this.findSubCategories(this.$route.params.id);
            this.setSubCategories(subcategories);
        }*/
    },
    methods: {
        ...mapActions({
            getCategories: 'categories/getCategories',
            getSubCategories: 'categories/getSubCategories',
           
            updateSubCategory: 'categories/updateSubCategory',
            updateSubCategoryStatus: 'categories/updateSubCategoryStatus'

        }),
        ...mapMutations({
            setSubCategories: 'categories/setSubCategories',
        }),
        findSingleCategory(id) {
            var category = this.findSubCategory(id);
            this.editTitle = category.name
            // this.editingIndex = index;
            this.editingId = category.category_id;
            this.edit_parent = category.id_self_parent
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
                    fd.append('parent', this.edit_parent);
                    fd.append('id', this.editingId);
                    var data = {
                        form: fd,
                        notify: self.$vs.notify,
                        closeloading: this.$vs.loading.close,
                        // index: this.editingIndex,
                        id: this.editingId,
                    };
                    self.updateSubCategory(data).then((res) => {
                        if (res.data.status == 'true') {
                            this.editCategoryPopUp = false;
                            this.title = null;
                            e.target.reset();
                        }
                    })
                }

            })
        },
        updateStatus(index) {
            var category = this.subcategories[index]
            let data = {
                id: category.id,
                status: category.status,
                index: index,
            };
            this.updateSubCategoryStatus(data);
        }
    }
}

</script>
<style scoped>
.vs-button.small:not(.includeIconOnly) {
    padding: 0.2rem 1.5rem;
}

</style>
