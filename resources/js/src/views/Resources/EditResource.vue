<template>
    <div>
        <form ref="editForm" @submit.prevent="submit($event)">
            <vs-row>
                <vs-col vs-lg="3" vs-md="3" vs-sm="12" vs-xs="12">
                    <vx-input-group>
                        <vs-upload ref="file" accept="image/*" :single-upload='true' :show-upload-button='false' text="Upload Logo" :limit="1"></vs-upload>
                    </vx-input-group>
                </vs-col>
                <vs-col vs-lg="9" vs-md="9" vs-sm="12" vs-xs="12">
                    <vs-col vs-lg="6" vs-md="6" vs-xs="12" vs-sm="12">
                        <vx-input-group>
                            <input type="hidden" name="id" :value="id">
                            <vs-input v-validate="'required'" v-model="resource.resource_topic" placeholder="Topic" label="Topic" name="topic" />
                            <span v-show="errors.has('topic')">{{ errors.first('topic') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="pl-0" vs-lg="6" vs-md="6" vs-xs="12" vs-sm="12">
                        <vx-input-group>
                            <vs-input v-validate="'required'" v-model="resource.author_name" placeholder="Author Name" label="Author Name" name="author" />
                            <span v-show="errors.has('author')">{{ errors.first('author') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-xs="12" vs-sm="12">
                        <vx-input-group class="">
                            <label>Keywords</label>
                            <vue-tags-input style="width : 100%;" v-model="keyword" :tags="keywords" name="keywords" placeholder="Keywords" @before-saving-tag="SaveEditKeyword" @before-adding-tag="EditKeyword" v-validate="keywords.length == 0?'required':''" :allow-edit-tags="true" class="tags-input vs-inputx vs-input--input w-full" @tags-changed="newKeywords => keywords = newKeywords">
                            </vue-tags-input>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="pl-0" vs-lg="6" vs-md="6" vs-xs="12" vs-sm="12">
                        <vx-input-group class="">
                            <vx-select @input="changeResource" name="type_of_resource" data-vv-as="Type Of Resource" v-model="resource.type_of_resource" label="Type Of Resource">
                                <vs-select-item text="Select Resource Type" value=""></vs-select-item>
                                <vs-select-item v-for="(type,index) in resourceTypes" :key="index" :text="type.resourcetypename" :value="type.resourcetypeid"></vs-select-item>
                            </vx-select>
                            <span v-show="errors.has('type_of_resource')">{{ errors.first('type_of_resource') }}</span>
                        </vx-input-group>
                    </vs-col>
                </vs-col>
            </vs-row>
            <vs-row class="mt-base">
                <vs-col>
                    <vs-col class="pl-0" vs-lg="4" vs-md="4" vs-xs="12" vs-sm="12">
                        <vx-input-group>
                            <template>
                                <vs-input name="link" v-validate="'required'" :label="resource.type_of_resource == 6?'Video Link (Youtube/Vimeo/Websites)':'E-Book Link'" v-if="resource.type_of_resource == 6 || resource.type_of_resource == 7" v-model="link" />
                            <span v-show="errors.has('link')">{{ errors.first('link') }}</span>
                            </template>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="pl-0" vs-lg="4" vs-md="4" vs-xs="12" vs-sm="12">
                        <vx-input-group class="">
                            <vx-select @blur="blurMe" :autocomplete="true" multiple v-validate="'required'" v-model="content_type" data-vv-as="Content Type" label="Content Type">
                                <vs-select-item text="Select Content Type" value=""></vs-select-item>
                                <vs-select-item v-for="(brand,index) in brands" :key="index" :text="brand.brandname" :value="brand.brandid"></vs-select-item>
                            </vx-select>
                            <span v-show="errors.has('content_type')">{{ errors.first('content_type') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="pl-0" vs-lg="4" vs-md="4" vs-xs="12" vs-sm="12">
                        <vx-input-group class="">
                            <vx-select v-validate="'required'" multiple label="Content Category" v-model="contentCategory">
                                <vs-select-item v-for="(industry,index2) in industries" :key="index2" :text="industry.industryname" :value="industry.industryid"></vs-select-item>
                            </vx-select>
                            <span v-show="errors.has('content_category')">{{ errors.first('content_category') }}</span>
                        </vx-input-group>
                    </vs-col>
                </vs-col>
                <vs-col class="mt-base">
                    <quill-editor v-validate="'required'" name="description" style="height: 400px" v-model="resource.description"></quill-editor>
                    <span v-show="errors.has('description')">{{ errors.first('description') }}</span>
                </vs-col>
                <vs-row class="mt-base" v-if="isShown">
                    <vs-col class="mt-base">
                        <br>
                        <label class="title">File Or UTM</label>
                        <div class="btn-group">
                            <vs-button button="button" @click="view = 'file'" type="gradient">Add Resource</vs-button>
                            <vs-button v-show="isShownUtm" button="button" @click="view = 'utm'" type="gradient">Add UTM</vs-button>
                        </div>
                    </vs-col>
                    <template>
                        <vs-col v-if="view == 'file'" class="mt-base">
                            <vs-upload  :single-upload='true' :show-upload-button='false' text="Upload Logo" :limit="1" ref='resource'></vs-upload>
                        </vs-col>
                        <vs-col v-show="isShownUtm" v-if="view == 'utm'">
                            <vx-input-group class="mt-base">
                                <vs-input type="url" v-validate="'required'" v-model="resource.resource_path" placeholder="https://www.example.com" label="" name="resource" />
                                <span v-show="errors.has('resource')">{{ errors.first('resource') }}</span>
                            </vx-input-group>
                        </vs-col>
                    </template>
                </vs-row>
            </vs-row>
            <vs-row class="mt-base">
                <vs-col class="mt-base" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                    <vs-button button="submit" type="gradient" class="float-right">Update</vs-button>
                </vs-col>
            </vs-row>
            <br>
        </form>
    </div>
</template>
<script>
import { mapState, mapActions, mapGetters, mapMutations } from 'vuex';
import VueTagsInput from '@johmun/vue-tags-input';
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import { quillEditor } from 'vue-quill-editor'
export default {
    props: ['id'],
    data() {
        return {
            topic: '',
            author: '',
            keyword: '',
            link: '',
            keywords: [],
            keyword: '',
            resourceType: 0,
            contentCategory: [],
            content_type: [],
            view: 'file',
            isShown: true,
            isShownUtm: true,
        };
    },
    computed: {
        ...mapState('resources/', ['resources', 'resource', 'resourceTypes']),
        ...mapState('brands', ['brands']),
        ...mapState('industries/', ['industries']),
        ...mapGetters({
            getResource: 'resources/getResource',
        })
    },
    async created() {
        /*if(this.resources.length > 0){
            var resource = this.getResource(this.id);
            this.setResource(resource);
        }else{
        }*/
        await this.getIndustries()
        this.fetchResourceTypes();
        this.getBrands();
        var self = this;
        this.fetchResource(this.id).then(() => {
            // console.log(this.resource)
            self.keywords = self.resource.keywords;
            self.resourceType = self.resource.type_of_resource;
            self.contentCategory = self.resource.content_category;
            self.content_type = self.resource.content_type;
            if (self.resource.type == 'file') {
                self.view = 'file';
            } else {

                self.view = 'utm';
                this.resource == self.resource.resource_path;
            }
            if (self.resource.type_of_resource == 7 || self.resource.type_of_resource == 6) {
                this.isShown = false;
                this.link = self.resource.resource_path;
            } else {

                this.isShown = true;
            }
            if (self.resource.type_of_resource == 9 || self.resource.type_of_resource == 8) {
                this.isShownUtm = false;
                this.view = 'file';
            } else {

                this.isShownUtm = true;
            }
        });
    },
    methods: {
        ...mapActions({
            fetchResourceTypes: 'resources/fetchResourceTypes',
            fetchResource: 'resources/fetchResource',
            getBrands: 'brands/getBrands',
            getIndustries: 'industries/getIndustries',
            update : 'resources/update'
        }),
        submit() {
            let result = this.$validator.validateAll().then((result) => {
                if (result) {
                    let fd = new FormData(this.$refs.editForm)
                    let file = this.$refs.file;
                    let currentAddedFile = file.filesx.filter(i => i.remove !== true);
                    if(currentAddedFile.length > 0){
                    fd.append('logo', currentAddedFile[0]);

                    }
                    if (this.view == 'file' && this.resource.type_of_resource != 6 && this.resource.type_of_resource != 7) {

                        let file = this.$refs.resource;
                        let currentAddedFile = file.filesx.filter(i => i.remove !== true);
                        if(currentAddedFile.length > 0){
                        fd.append('resource', currentAddedFile[0]);
                        }/*else{
                            this.$vs.notify({
                                color : 'danger',
                                position : 'right-top',
                                text : 'please select resource file',
                                icon : 'warning',
                            })
                        }*/
                    }
                    fd.append('type_of_resource',this.resource.type_of_resource);
                    fd.append('description',this.resource.description);
                    fd.append('keywords',_.map(this.keywords,'text'));
                    fd.append('content_type',this.content_type);
                    fd.append('content_category',this.contentCategory);
                    fd.append('type', this.view);
                    let data = {
                        fd : fd,
                        notify : this.$vs.notify,
                        closeLoader : this.$vs.loading.close
                    };
                    this.$vs.loading();
                    this.update(data).then(res=>{
                        if(res.data.status){
                            this.$router.go(-1);
                        }
                    });
                }
            });
        },
        ...mapMutations({
            setResource: 'resources/setResource',
        }),
        /*changeView(view){
            this.view = view;
        },*/
        blurMe(e){
            // console.log(e)
        },
        remove(item) {
            this.keywords.splice(this.keywords.indexOf(item), 1)
        },
        changeResource(resource) {
            if (resource == 7 || resource == 6) {
                this.isShown = false;
            } else {

                this.isShown = true;
            }
            if (resource == 9 || resource == 8) {
                this.isShownUtm = false;
                this.view = 'file';
            } else {

                this.isShownUtm = true;
                this.link = '';
            }
        },
        addTag(object) {
            var data = this.services.filter(item => item.text.toLowerCase() == object.tag.text.toLowerCase());
            if (data.length == 0) {
                object.addTag();
            } else {
                this.$vs.notify({
                    position: 'center-top',
                    color: 'danger',
                    text: 'duplicate entry found',
                    icon: 'warning'
                });
                this.$emit('saving-duplicate')
            }
        },
        saveTag(object) {
            var data = this.services.filter((item, i) => item.text.toLowerCase() == object.tag.text.toLowerCase() && i != object.index);
            if (data.length == 0) {
                object.saveTag();
            } else {
                this.$vs.notify({
                    position: 'center-top',
                    color: 'danger',
                    text: 'duplicate entry found',
                    icon: 'warning'
                });
                this.$emit('saving-duplicate')
            };
        },
        EditKeyword(object) {
            var data = this.keywords.filter(item => item.text.toLowerCase() == object.tag.text.toLowerCase());
            if (data.length == 0) {
                object.addTag();
            } else {
                this.$vs.notify({
                    position: 'center-top',
                    color: 'danger',
                    text: 'duplicate entry found',
                    icon: 'warning'
                });
                this.$emit('saving-duplicate')
            }
        },
        SaveEditKeyword(object) {
            var data = this.keywords.filter((item, i) => item.text.toLowerCase() == object.tag.text.toLowerCase() && i != object.index);
            if (data.length == 0) {
                object.saveTag();
            } else {
                this.$vs.notify({
                    position: 'center-top',
                    color: 'danger',
                    text: 'duplicate entry found',
                    icon: 'warning'
                });
                this.$emit('saving-duplicate')
            }
        },
    },
    components: {
        VueTagsInput,
        quillEditor,
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

.ti-input {
    border: none !important;
    padding: 0 !important;
}

.vue-tags-input {
    max-width: 100% !important;
}

</style>
