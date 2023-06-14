<template>
    <keep-alive>
        <div>
            <vs-row>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="flex justify-between bg-white font-extrabold mt-base p-8 shadow-lg">
                    <h3>List Of Brands</h3>
                    <vs-button @click="showBrandPopup = true" type="gradient" icon-pack="feather" icon='icon-plus'>Add Brand</vs-button>
                </vs-col>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base">
                    <vx-input-group>
                    <vs-input size="large"  icon="search" placeholder="Search" v-model="searchVal"/>
                    </vx-input-group>
                </vs-col>
                <vs-col v-for="(brand,index) in brands" :key="index" vs-lg="3" vs-md='3' vs-sm="6" vs-xs="12" class="mt-base">
                    <vs-card  fixed-height >
                        <div class="flex justify-between">
                            <div>
                                <h3>{{ brand.brandname }}</h3>
                            </div>
                            <div>
                                <vs-button @click="editBrand(brand.brandid)" type="gradient" icon-pack="feather" icon='icon-edit'></vs-button>
                            </div>
                        </div>
                    </vs-card>
                </vs-col>
                <vs-col v-if="brands.length == 0" vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base flex justify-center">
                    <h1>No any brand added</h1>
                </vs-col>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base">
                    <vs-pagination v-if="brands.length > 0" :total="totalBrandsPages" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>
                </vs-col>

            </vs-row>
            <vs-popup :active.sync="showBrandPopup" title="Add Brand">
                <form ref="addBrandForm" @submit.prevent="addNew($event,'addform')">
                    <vx-input-group>
                        <vs-input v-validate="'required'" label-placeholder="Brand Name" name="brandname" v-model="brandname" data-vv-as="Brand Name" data-vv-scope="addform"/>
                        <span v-show="errors.has('addform.brandname')">{{ errors.first('addform.brandname') }}</span>
                    </vx-input-group>
                    <vx-input-group class="mt-base">
                        <div class="flex justify-end">
                    <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Add Brand</vs-button>
                        </div>
                    </vx-input-group>
                </form>
            </vs-popup>
            <vs-popup :active.sync="updateBrandPopup" title="Update Brand">
                <form ref="updateBrandForm" @submit.prevent="updateBrand($event,'editform')">
                    <vx-input-group>
                        <input type="hidden" name="id" v-model="brand_id">
                        <vs-input v-validate="'required'" label-placeholder="Brand Name" name="brandname" v-model="editBrandName" data-vv-as="Brand Name" data-vv-scope="editform"/>
                        <span v-show="errors.has('editform.brandname')">{{ errors.first('editform.brandname') }}</span>
                    </vx-input-group>
                    <vx-input-group class="mt-base">
                        <div class="flex justify-end">
                    <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Update Brand</vs-button>
                        </div>
                    </vx-input-group>
                </form>
            </vs-popup>
        </div>
    </keep-alive>
</template>
<script>
import { mapState, mapActions, mapGetters } from 'vuex';
export default {
    data () {
      return {
        currentx:1,
        searchVal : '',
        showBrandPopup : false,
        brandname : '',
        updateBrandPopup : false,
        brand_id : 0,
        editBrandName : '',
      };
    },
    watch: {
      searchVal(val, oldVal){
        this.search()
      },
      currentx(){
        this.paginateBrands()
      }
    },
    computed: {
        ...mapState('brands/', ['brands','totalBrandsPages']),
        ...mapGetters('brands/',['getBrand'])
    },
    methods: {
        ...mapActions({
            fetchBrands: 'brands/fetchBrands',
            create : 'brands/create',
            update : 'brands/update',
        }),
        addNew(e,scope){
            this.$validator.validateAll(scope).then(result =>{
                if(result){
                    var fd = new FormData(this.$refs.addBrandForm)
                    let data = {
                        fd : fd,
                        notify : this.$vs.notify,
                        closeLoader : this.$vs.loading.close
                    };
                    this.create(data).then((res)=>{
                        if(res.data.status){

                        this.brandname = '';
                        e.target.reset();
                        this.$validator.reset();
                        this.showBrandPopup = false;
                        }
                    })
                }
            });
        },
        updateBrand(e,scope){
            this.$validator.validateAll(scope).then(result =>{
                if(result){
                    var fd = new FormData(this.$refs.updateBrandForm)
                    let data = {
                        fd : fd,
                        notify : this.$vs.notify,
                        closeLoader : this.$vs.loading.close
                    };
                    this.update(data).then((res)=>{
                        if(res.data.status){

                        this.brand_id = 0;
                        this.editBrandName = '';
                        e.target.reset();
                        this.$validator.reset();
                        this.updateBrandPopup = false;
                        }
                    })
                }
            });
        },
        editBrand(id){
            var brand = this.getBrand(id)
            this.brand_id = brand.brandid
            this.editBrandName = brand.brandname
            this.updateBrandPopup = true;
        },
        searchBrand(){
                let params = {
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchBrands(params);
        },
        paginateBrands(){
            let params = {
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchBrands(params);
        }
    },
    created() {
        this.search = _.debounce(this.searchBrand,500)
        let params = {
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchBrands(params);
    }
}

</script>
