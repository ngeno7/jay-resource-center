<template>
    <keep-alive>
        <div>
            <vs-row>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="flex justify-between bg-white font-extrabold mt-base p-8 shadow-lg">
                    <h3>List Of Industries</h3>
                    <vs-button @click="showIndustryPopup = true" type="gradient" icon-pack="feather" icon='icon-plus'>Add Industry</vs-button>
                </vs-col>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base">
                    <vx-input-group>
                    <vs-input size="large"  icon="search" placeholder="Search" v-model="searchVal"/>
                    </vx-input-group>
                </vs-col>
                <vs-col v-for="(industry,index) in industries" :key="index" vs-lg="3" vs-md='3' vs-sm="6" vs-xs="12" class="mt-base">
                    <vs-card  fixed-height >
                        <div class="flex justify-between">
                            <div style="word-break: break-all;">
                                <h3>{{ industry.industryname }}</h3>
                            </div>
                            <div>
                                <vs-button @click="editIndustry(industry.industryid)" type="gradient" icon-pack="feather" icon='icon-edit'></vs-button>
                            </div>
                        </div>
                    </vs-card>
                </vs-col>
                <vs-col v-if="industries.length == 0" vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base flex justify-center">
                    <h1>No any Industry Found!</h1>
                </vs-col>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base">
                    <vs-pagination v-if="industries.length > 0" :total="totalIndustriesPages" :max="5" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>
                </vs-col>

            </vs-row>
            <vs-popup :active.sync="showIndustryPopup" title="Add Industry">
                <form ref="addIndustryForm" @submit.prevent="addNew($event,'addform')">
                    <vx-input-group>
                        <vs-input v-validate="'required'" label-placeholder="Industry Name" name="industryname" v-model="industryname" data-vv-as="Industry Name" data-vv-scope="addform"/>
                        <span v-show="errors.has('addform.industryname')">{{ errors.first('addform.industryname') }}</span>
                    </vx-input-group>
                    <vx-input-group class="mt-base">
                        <div class="flex justify-end">
                    <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Add Industry</vs-button>
                        </div>
                    </vx-input-group>
                </form>
            </vs-popup>
            <vs-popup :active.sync="updateIndustryPopup" title="Update Industry">
                <form ref="updateIndustryForm" @submit.prevent="updateIndustry($event,'editform')">
                    <vx-input-group>
                        <input type="hidden" name="id" v-model="industry_id">
                        <vs-input v-validate="'required'" label-placeholder="Industry Name" name="industryname" v-model="editIndustryName" data-vv-as="Industry Name" data-vv-scope="editform"/>
                        <span v-show="errors.has('editform.industryname')">{{ errors.first('editform.industryname') }}</span>
                    </vx-input-group>
                    <vx-input-group class="mt-base">
                        <div class="flex justify-end">
                    <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Update Industry</vs-button>
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
        showIndustryPopup : false,
        industryname : '',
        updateIndustryPopup : false,
        industry_id : 0,
        editIndustryName : '',
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
        ...mapState('industries/', ['industries','totalIndustriesPages']),
        ...mapGetters('industries/',['getIndustry'])
    },
    methods: {
        ...mapActions({
            fetchIndustries: 'industries/fetchIndustries',
            create : 'industries/create',
            update : 'industries/update',
        }),
        addNew(e,scope){
            this.$validator.validateAll(scope).then(result =>{
                if(result){
                    var fd = new FormData(this.$refs.addIndustryForm)
                    let data = {
                        fd : fd,
                        notify : this.$vs.notify,
                        closeLoader : this.$vs.loading.close
                    };
                    this.create(data).then((res)=>{
                        if(res.data.status){

                        this.industryname = '';
                        e.target.reset();
                        this.$validator.reset();
                        this.showIndustryPopup = false;
                        }
                    })
                }
            });
        },
        updateIndustry(e,scope){
            this.$validator.validateAll(scope).then(result =>{
                if(result){
                    var fd = new FormData(this.$refs.updateIndustryForm)
                    let data = {
                        fd : fd,
                        notify : this.$vs.notify,
                        closeLoader : this.$vs.loading.close
                    };
                    this.update(data).then((res)=>{
                        if(res.data.status){

                        this.industry_id = 0;
                        this.editIndustryName = '';
                        e.target.reset();
                        this.$validator.reset();
                        this.updateIndustryPopup = false;
                        }
                    })
                }
            });
        },
        editIndustry(id){
            var industry = this.getIndustry(id)
            this.industry_id = industry.industryid
            this.editIndustryName = industry.industryname
            this.updateIndustryPopup = true;
        },
        searchBrand(){
                let params = {
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchIndustries(params);
        },
        paginateBrands(){
            let params = {
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchIndustries(params);
        }
    },
    created() {
        this.search = _.debounce(this.searchBrand,500)
        let params = {
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchIndustries(params);
    }
}

</script>
