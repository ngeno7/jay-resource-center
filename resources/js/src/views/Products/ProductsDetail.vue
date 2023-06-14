<template>
    <keep-alive>
        <div>
            <vs-row>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base">
                    <vx-input-group>
                    <vs-input size="large"  icon="search" placeholder="Search" v-model="searchVal"/>
                    </vx-input-group>
                </vs-col>
                <vs-col v-for="(product,index) in products" :key="index" vs-lg="3" vs-md='3' vs-sm="6" vs-xs="12" class="mt-base">
                    <vs-card class="parent-card"  fixed-height >
                        <div class="flex justify-between hover-set">
                            <div>
                            	<img class="object-cover" :src="product.product_img?product.product_img:`./public/images/no-image.jpg`" style="width: 290px;height: 200px;" :alt="`${product.name} image`">
                            	<div class="pt-2 pb-0">
                            		
                                <h3>{{ product.name }}</h3>
                                <p class="truncate">{{ product.description }}</p>
                            	</div>
                            </div>
                            <div class="flex flex-col absolute btns">
                                <vs-button @click="editProduct(product.product_id)" type="gradient" icon-pack="feather" icon='icon-edit'></vs-button>
                                <vs-button @click="deleteProduct(product.product_id)" type="gradient" icon-pack="feather" icon='icon-trash'></vs-button>
                            </div>
                        </div>
                    </vs-card>
                </vs-col>
                <vs-col v-if="products.length == 0" vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base flex justify-center">
                    <h1>No any Product added</h1>
                </vs-col>
                <vs-col vs-lg="12" vs-md='12' vs-sm="12" vs-xs="12" class="mt-base">
                    <vs-pagination v-if="products.length > 0" :total="totalProductsPages" v-model="currentx" prev-icon="arrow_back" next-icon="arrow_forward"></vs-pagination>
                </vs-col>

            </vs-row>
            <vs-popup :active.sync="showProductPopup" title="Add Product">
                <form ref="addProductForm" @submit.prevent="addNew($event,'addform')">
                    <vx-input-group>
                        <vs-input v-validate="'required'" label-placeholder="Product Name" name="productname" v-model="productname" data-vv-as="Product Name" data-vv-scope="addform"/>
                        <span v-show="errors.has('addform.productname')">{{ errors.first('addform.productname') }}</span>
                    </vx-input-group>
                    <vx-input-group class="mt-base">
                        <div class="flex justify-end">
                    <vs-button button="submit" type="gradient" icon-pack="feather" icon="icon-plus">Add Product</vs-button>
                        </div>
                    </vx-input-group>
                </form>
            </vs-popup>
            <vs-popup :active.sync="updateProductPopup" title="Update Product">
            <form ref="updateProductForm" data-vv-scope="updateproduct" @submit.prevent="submitProduct($event,'updateproduct')">
                <vs-row>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                    	<input type="hidden" name="product_id" v-model="product.product_id">
                        <vs-upload ref="productImage" accept="image/*" :single-upload='true' :show-upload-button='false' text="Product Image" :limit="1"></vs-upload>
                    </vs-col>
                    <vs-col vs-lg="6" vs-md="6" vs-sm="12" vs-xs="12">
                        <vs-row>
                            <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input label="Product Name" placeholder="Product Name" v-model="product.name" name="product_name" v-validate="'required'" data-vv-as="Product Name" />
                                    <span v-show="errors.has('updateproduct.product_name')">{{ errors.first('updateproduct.product_name') }}</span>
                                </vx-input-group>
                            </vs-col>
                            <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input label="Price" placeholder="Price" v-model="product.price" name="price" v-validate="'required'" data-vv-as="Price" />
                                    <span v-show="errors.has('updateproduct.price')">{{ errors.first('updateproduct.price') }}</span>
                                </vx-input-group>
                            </vs-col>
                            <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                                <vx-input-group>
                                    <vs-input-number v-validate="'required'" name="quantity" label="Quantity" v-model="product.quantity" />
                                    <span v-show="errors.has('updateproduct.quantity')">{{ errors.first('updateproduct.quantity') }}</span>
                                </vx-input-group>
                            </vs-col>
                        </vs-row>
                    </vs-col>
                    <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                        <vx-input-group>
                            <vx-select v-validate="'required'" placeholder="Select Category" name="category" label="Category" v-model="category">
                                <div :key="index" v-for="(item,index) in userCategories">
                                    <vs-select-group :title="item.name">
                                        <vs-select-item :key="index" :value="item.category_id" :text="item.name" v-for="(item,index) in item.sub_category" />
                                    </vs-select-group>
                                </div>
                            </vx-select>
                            <span v-show="errors.has('updateproduct.category')">{{ errors.first('updateproduct.category') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-col class="mb-3 p-0" vs-lg="12" vs-md="12" vs-sm="12" vs-xs="12">
                        <vx-input-group>
                            <vs-textarea v-validate="'required'" name="description" label="Description" v-model="product.description"></vs-textarea>
                            <span v-show="errors.has('updateproduct.description')">{{ errors.first('updateproduct.description') }}</span>
                        </vx-input-group>
                    </vs-col>
                    <vs-divider position="left">
                        <h4>Details and specs (Optional)</h4>
                    </vs-divider>
                    <vs-row v-for="(feature,index) in features" :key="index">
                        <vs-col class="mb-3" vs-lg="5" vs-md="5" vs-sm="12" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="feature.feature" :placeholder="`Feature`"/>
                                <!-- <span v-show="errors.has(`updateproduct.${feature.feature_name}${index + 1}`)">{{ errors.first(`updateproduct.${feature.feature_name}${index + 1}`) }}</span> -->
                            </vx-input-group>
                        </vs-col>
                        <vs-col class="mb-3" vs-lg="5" vs-md="5" vs-sm="12" vs-xs="12">
                            <vx-input-group>
                                <vs-input v-model="feature.value" placeholder="Value"  />
                                <!-- <span v-show="errors.has(`updateproduct.${feature._name}${index + 1}`)">{{ errors.first(`updateproduct.${feature._name}${index + 1}`) }}</span> -->
                            </vx-input-group>
                        </vs-col>
                        <vs-col class="mb-3" vs-lg="2" vs-md="2" vs-sm="12" vs-xs="12">
                            <template>
                                <vs-button v-if="index == 0" @click="addMore()" type="gradient" icon="icon-plus" icon-pack="feather"></vs-button>
                                <vs-button v-else @click="deleteMore(index)" type="gradient" icon="icon-trash" icon-pack="feather"></vs-button>
                            </template>
                        </vs-col>
                    </vs-row>
                    <vs-row>
                        <vs-col class="flex justify-end">
                            <vs-button button="submit" type="gradient" icon="icon-plus" icon-pack="feather">Update Product</vs-button>
                        </vs-col>
                    </vs-row>
                </vs-row>
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
        showProductPopup : false,
        productname : '',
        updateProductPopup : false,
        product_id : 0,
        editProductName : '',
        product  : {},
        category : 0,
        features : [],
      };
    },
    watch: {
      searchVal(val, oldVal){
        this.search()
      },
      currentx(){
        this.paginateProducts()
      }
    },
    computed: {
        ...mapState('products/', ['products','totalProductsPages']),
        ...mapGetters('products/',['getProduct']),
        ...mapState('categories/', ['userCategories']),
    },
    methods: {
        ...mapActions({
            fetchProducts: 'products/fetchProducts',
            create : 'products/create',
            update : 'products/update',
            getUserCategories : 'categories/getUserCategories' ,
            deleteFeature : 'products/deleteFeature',
            delete : 'products/deleteProduct'
        }),
        hoverProduct(){
        	alert()
        },
        addNew(e,scope){
            this.$validator.validateAll(scope).then(result =>{
                if(result){
                    var fd = new FormData(this.$refs.addProductForm)
                    let data = {
                        fd : fd,
                        notify : this.$vs.notify,
                        closeLoader : this.$vs.loading.close
                    };
                    this.create(data).then((res)=>{
                        if(res.data.status){

                        this.productname = '';
                        e.target.reset();
                        this.$validator.reset();
                        this.showProductPopup = false;
                        }
                    })
                }
            });
        },
        addMore() {
            this.features.unshift({
                feature : '',
                value: '',
            })
        },
        deleteMore(index) {
        	if(!_.isUndefined(this.features[index].id)){
        	this.deleteFeature({id : this.features[index].id,product_id : this.product.id});
        	}
            this.features.splice(index, 1);
        },
        deleteProduct(product_id){
        	let data = {
                        notify: this.$vs.notify,
                        closeLoader: this.$vs.loading.close,
                        product_id : product_id,
                    };
        	this.delete(data)
        },
        submitProduct(e, scope) {
            this.$validator.validateAll(scope).then(result => {
                if (result) {
                    let fd = new FormData(this.$refs.updateProductForm)
                    // fd.append('features',JSON.stringify(this.features));
                    fd.append('category', this.category);
                    fd.append('user_id', this.$route.params.id);
                    _.each(this.features,function(obj,i){
                    	fd.append('features['+i+'][feature]',obj.feature)
                    	fd.append('features['+i+'][value]',obj.value)
                    	if( !_.isUndefined(obj.product_id) ){
                    	fd.append('features['+i+'][product_id]',obj.id);
                    	}
                    })
                    let file = this.$refs.productImage;
                    let currentAddedFile = file.filesx.filter(i => i.remove !== true);
                    if (currentAddedFile.length > 0) {

                        fd.append('file', currentAddedFile[0]);
                    }

                    let data = {
                        fd: fd,
                        notify: this.$vs.notify,
                        closeLoader: this.$vs.loading.close,
                    };
                    this.update(data).then(res => {
                        if (res.data.status) {
                            this.features = [];
                            this.features.push({
                                name: '',
                                value: '',
                            });
                            this.product  = {};
                            e.target.reset();
                            this.$validator.reset();
                            this.updateProductPopup = false;
                        }
                    })
                }
            })
        },
        editProduct(id){
            this.product = this.getProduct(id)
            this.category = Number(this.product.category_id);
            	this.features = [];
            if(this.product.product_features.length > 0){
            	this.features = this.product.product_features;
            }else{
            	this.features.push({
            feature: '',
            value: '',
        })
            }
           /* this.product_id = product.product_id
            this.editProductName = product.productname*/
            this.updateProductPopup = true;
        },
        searchProduct(){
                let params = {
                user_id : this.$route.params.id,
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchProducts(params);
        },
        paginateProducts(){
            let params = {
            	user_id : this.$route.params.id,
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchProducts(params);
        }
    },
    created() {
        this.search = _.debounce(this.searchProduct,500)
        this.getUserCategories(this.$route.params.id);
        let params = {
            	user_id : this.$route.params.id,
                search : this.searchVal,
                page : this.currentx
        };
        this.fetchProducts(params);
    }
}

</script>
<style>
	.hover-set{
		overflow: hidden;
    	position: relative;
	}
	.parent-card:hover .btns{
	right: 10px;
}
.btns{
    top: 5px;
	right: -45px;
    transition: all 0.5s ease-in-out;
}
</style>