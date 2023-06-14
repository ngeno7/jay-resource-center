(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currentx: 1,
      searchVal: '',
      showProductPopup: false,
      productname: '',
      updateProductPopup: false,
      product_id: 0,
      editProductName: '',
      product: {},
      category: 0,
      features: []
    };
  },
  watch: {
    searchVal: function searchVal(val, oldVal) {
      this.search();
    },
    currentx: function currentx() {
      this.paginateProducts();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('products/', ['products', 'totalProductsPages']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('products/', ['getProduct']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('categories/', ['userCategories'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchProducts: 'products/fetchProducts',
    create: 'products/create',
    update: 'products/update',
    getUserCategories: 'categories/getUserCategories',
    deleteFeature: 'products/deleteFeature',
    "delete": 'products/deleteProduct'
  }), {
    hoverProduct: function hoverProduct() {
      alert();
    },
    addNew: function addNew(e, scope) {
      var _this = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.addProductForm);
          var data = {
            fd: fd,
            notify: _this.$vs.notify,
            closeLoader: _this.$vs.loading.close
          };

          _this.create(data).then(function (res) {
            if (res.data.status) {
              _this.productname = '';
              e.target.reset();

              _this.$validator.reset();

              _this.showProductPopup = false;
            }
          });
        }
      });
    },
    addMore: function addMore() {
      this.features.unshift({
        feature: '',
        value: ''
      });
    },
    deleteMore: function deleteMore(index) {
      if (!_.isUndefined(this.features[index].id)) {
        this.deleteFeature({
          id: this.features[index].id,
          product_id: this.product.id
        });
      }

      this.features.splice(index, 1);
    },
    deleteProduct: function deleteProduct(product_id) {
      var data = {
        notify: this.$vs.notify,
        closeLoader: this.$vs.loading.close,
        product_id: product_id
      };
      this["delete"](data);
    },
    submitProduct: function submitProduct(e, scope) {
      var _this2 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.updateProductForm); // fd.append('features',JSON.stringify(this.features));

          fd.append('category', _this2.category);
          fd.append('user_id', _this2.$route.params.id);

          _.each(_this2.features, function (obj, i) {
            fd.append('features[' + i + '][feature]', obj.feature);
            fd.append('features[' + i + '][value]', obj.value);

            if (!_.isUndefined(obj.product_id)) {
              fd.append('features[' + i + '][product_id]', obj.id);
            }
          });

          var file = _this2.$refs.productImage;
          var currentAddedFile = file.filesx.filter(function (i) {
            return i.remove !== true;
          });

          if (currentAddedFile.length > 0) {
            fd.append('file', currentAddedFile[0]);
          }

          var data = {
            fd: fd,
            notify: _this2.$vs.notify,
            closeLoader: _this2.$vs.loading.close
          };

          _this2.update(data).then(function (res) {
            if (res.data.status) {
              _this2.features = [];

              _this2.features.push({
                name: '',
                value: ''
              });

              _this2.product = {};
              e.target.reset();

              _this2.$validator.reset();

              _this2.updateProductPopup = false;
            }
          });
        }
      });
    },
    editProduct: function editProduct(id) {
      this.product = this.getProduct(id);
      this.category = Number(this.product.category_id);
      this.features = [];

      if (this.product.product_features.length > 0) {
        this.features = this.product.product_features;
      } else {
        this.features.push({
          feature: '',
          value: ''
        });
      }
      /* this.product_id = product.product_id
       this.editProductName = product.productname*/


      this.updateProductPopup = true;
    },
    searchProduct: function searchProduct() {
      var params = {
        user_id: this.$route.params.id,
        search: this.searchVal,
        page: this.currentx
      };
      this.fetchProducts(params);
    },
    paginateProducts: function paginateProducts() {
      var params = {
        user_id: this.$route.params.id,
        search: this.searchVal,
        page: this.currentx
      };
      this.fetchProducts(params);
    }
  }),
  created: function created() {
    this.search = _.debounce(this.searchProduct, 500);
    this.getUserCategories(this.$route.params.id);
    var params = {
      user_id: this.$route.params.id,
      search: this.searchVal,
      page: this.currentx
    };
    this.fetchProducts(params);
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".hover-set{\n  overflow: hidden;\n  position: relative;\n}\n.parent-card:hover .btns{\n  right: 10px;\n}\n.btns{\n  top: 5px;\n  right: -45px;\n  transition: all 0.5s ease-in-out;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=template&id=2a906274&":
/*!*************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=template&id=2a906274& ***!
  \*************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("keep-alive", [
    _c(
      "div",
      [
        _c(
          "vs-row",
          [
            _c(
              "vs-col",
              {
                staticClass: "mt-base",
                attrs: {
                  "vs-lg": "12",
                  "vs-md": "12",
                  "vs-sm": "12",
                  "vs-xs": "12"
                }
              },
              [
                _c(
                  "vx-input-group",
                  [
                    _c("vs-input", {
                      attrs: {
                        size: "large",
                        icon: "search",
                        placeholder: "Search"
                      },
                      model: {
                        value: _vm.searchVal,
                        callback: function($$v) {
                          _vm.searchVal = $$v
                        },
                        expression: "searchVal"
                      }
                    })
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm._l(_vm.products, function(product, index) {
              return _c(
                "vs-col",
                {
                  key: index,
                  staticClass: "mt-base",
                  attrs: {
                    "vs-lg": "3",
                    "vs-md": "3",
                    "vs-sm": "6",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "vs-card",
                    {
                      staticClass: "parent-card",
                      attrs: { "fixed-height": "" }
                    },
                    [
                      _c(
                        "div",
                        { staticClass: "flex justify-between hover-set" },
                        [
                          _c("div", [
                            _c("img", {
                              staticClass: "object-cover",
                              staticStyle: { width: "290px", height: "200px" },
                              attrs: {
                                src: product.product_img
                                  ? product.product_img
                                  : "./public/images/no-image.jpg",
                                alt: product.name + " image"
                              }
                            }),
                            _vm._v(" "),
                            _c("div", { staticClass: "pt-2 pb-0" }, [
                              _c("h3", [_vm._v(_vm._s(product.name))]),
                              _vm._v(" "),
                              _c("p", { staticClass: "truncate" }, [
                                _vm._v(_vm._s(product.description))
                              ])
                            ])
                          ]),
                          _vm._v(" "),
                          _c(
                            "div",
                            { staticClass: "flex flex-col absolute btns" },
                            [
                              _c("vs-button", {
                                attrs: {
                                  type: "gradient",
                                  "icon-pack": "feather",
                                  icon: "icon-edit"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editProduct(product.product_id)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-button", {
                                attrs: {
                                  type: "gradient",
                                  "icon-pack": "feather",
                                  icon: "icon-trash"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteProduct(product.product_id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            }),
            _vm._v(" "),
            _vm.products.length == 0
              ? _c(
                  "vs-col",
                  {
                    staticClass: "mt-base flex justify-center",
                    attrs: {
                      "vs-lg": "12",
                      "vs-md": "12",
                      "vs-sm": "12",
                      "vs-xs": "12"
                    }
                  },
                  [_c("h1", [_vm._v("No any Product added")])]
                )
              : _vm._e(),
            _vm._v(" "),
            _c(
              "vs-col",
              {
                staticClass: "mt-base",
                attrs: {
                  "vs-lg": "12",
                  "vs-md": "12",
                  "vs-sm": "12",
                  "vs-xs": "12"
                }
              },
              [
                _vm.products.length > 0
                  ? _c("vs-pagination", {
                      attrs: {
                        total: _vm.totalProductsPages,
                        "prev-icon": "arrow_back",
                        "next-icon": "arrow_forward"
                      },
                      model: {
                        value: _vm.currentx,
                        callback: function($$v) {
                          _vm.currentx = $$v
                        },
                        expression: "currentx"
                      }
                    })
                  : _vm._e()
              ],
              1
            )
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "vs-popup",
          {
            attrs: { active: _vm.showProductPopup, title: "Add Product" },
            on: {
              "update:active": function($event) {
                _vm.showProductPopup = $event
              }
            }
          },
          [
            _c(
              "form",
              {
                ref: "addProductForm",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.addNew($event, "addform")
                  }
                }
              },
              [
                _c(
                  "vx-input-group",
                  [
                    _c("vs-input", {
                      directives: [
                        {
                          name: "validate",
                          rawName: "v-validate",
                          value: "required",
                          expression: "'required'"
                        }
                      ],
                      attrs: {
                        "label-placeholder": "Product Name",
                        name: "productname",
                        "data-vv-as": "Product Name",
                        "data-vv-scope": "addform"
                      },
                      model: {
                        value: _vm.productname,
                        callback: function($$v) {
                          _vm.productname = $$v
                        },
                        expression: "productname"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "span",
                      {
                        directives: [
                          {
                            name: "show",
                            rawName: "v-show",
                            value: _vm.errors.has("addform.productname"),
                            expression: "errors.has('addform.productname')"
                          }
                        ]
                      },
                      [_vm._v(_vm._s(_vm.errors.first("addform.productname")))]
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c("vx-input-group", { staticClass: "mt-base" }, [
                  _c(
                    "div",
                    { staticClass: "flex justify-end" },
                    [
                      _c(
                        "vs-button",
                        {
                          attrs: {
                            button: "submit",
                            type: "gradient",
                            "icon-pack": "feather",
                            icon: "icon-plus"
                          }
                        },
                        [_vm._v("Add Product")]
                      )
                    ],
                    1
                  )
                ])
              ],
              1
            )
          ]
        ),
        _vm._v(" "),
        _c(
          "vs-popup",
          {
            attrs: { active: _vm.updateProductPopup, title: "Update Product" },
            on: {
              "update:active": function($event) {
                _vm.updateProductPopup = $event
              }
            }
          },
          [
            _c(
              "form",
              {
                ref: "updateProductForm",
                attrs: { "data-vv-scope": "updateproduct" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.submitProduct($event, "updateproduct")
                  }
                }
              },
              [
                _c(
                  "vs-row",
                  [
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-lg": "6",
                          "vs-md": "6",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c("input", {
                          directives: [
                            {
                              name: "model",
                              rawName: "v-model",
                              value: _vm.product.product_id,
                              expression: "product.product_id"
                            }
                          ],
                          attrs: { type: "hidden", name: "product_id" },
                          domProps: { value: _vm.product.product_id },
                          on: {
                            input: function($event) {
                              if ($event.target.composing) {
                                return
                              }
                              _vm.$set(
                                _vm.product,
                                "product_id",
                                $event.target.value
                              )
                            }
                          }
                        }),
                        _vm._v(" "),
                        _c("vs-upload", {
                          ref: "productImage",
                          attrs: {
                            accept: "image/*",
                            "single-upload": true,
                            "show-upload-button": false,
                            text: "Product Image",
                            limit: 1
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        attrs: {
                          "vs-lg": "6",
                          "vs-md": "6",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c(
                          "vs-row",
                          [
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-3 p-0",
                                attrs: {
                                  "vs-lg": "12",
                                  "vs-md": "12",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("vs-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        label: "Product Name",
                                        placeholder: "Product Name",
                                        name: "product_name",
                                        "data-vv-as": "Product Name"
                                      },
                                      model: {
                                        value: _vm.product.name,
                                        callback: function($$v) {
                                          _vm.$set(_vm.product, "name", $$v)
                                        },
                                        expression: "product.name"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.errors.has(
                                              "updateproduct.product_name"
                                            ),
                                            expression:
                                              "errors.has('updateproduct.product_name')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "updateproduct.product_name"
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-3 p-0",
                                attrs: {
                                  "vs-lg": "12",
                                  "vs-md": "12",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("vs-input", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        label: "Price",
                                        placeholder: "Price",
                                        name: "price",
                                        "data-vv-as": "Price"
                                      },
                                      model: {
                                        value: _vm.product.price,
                                        callback: function($$v) {
                                          _vm.$set(_vm.product, "price", $$v)
                                        },
                                        expression: "product.price"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.errors.has(
                                              "updateproduct.price"
                                            ),
                                            expression:
                                              "errors.has('updateproduct.price')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "updateproduct.price"
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-col",
                              {
                                staticClass: "mb-3 p-0",
                                attrs: {
                                  "vs-lg": "12",
                                  "vs-md": "12",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("vs-input-number", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        name: "quantity",
                                        label: "Quantity"
                                      },
                                      model: {
                                        value: _vm.product.quantity,
                                        callback: function($$v) {
                                          _vm.$set(_vm.product, "quantity", $$v)
                                        },
                                        expression: "product.quantity"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "span",
                                      {
                                        directives: [
                                          {
                                            name: "show",
                                            rawName: "v-show",
                                            value: _vm.errors.has(
                                              "updateproduct.quantity"
                                            ),
                                            expression:
                                              "errors.has('updateproduct.quantity')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first(
                                              "updateproduct.quantity"
                                            )
                                          )
                                        )
                                      ]
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        staticClass: "mb-3 p-0",
                        attrs: {
                          "vs-lg": "12",
                          "vs-md": "12",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c(
                          "vx-input-group",
                          [
                            _c(
                              "vx-select",
                              {
                                directives: [
                                  {
                                    name: "validate",
                                    rawName: "v-validate",
                                    value: "required",
                                    expression: "'required'"
                                  }
                                ],
                                attrs: {
                                  placeholder: "Select Category",
                                  name: "category",
                                  label: "Category"
                                },
                                model: {
                                  value: _vm.category,
                                  callback: function($$v) {
                                    _vm.category = $$v
                                  },
                                  expression: "category"
                                }
                              },
                              _vm._l(_vm.userCategories, function(item, index) {
                                return _c(
                                  "div",
                                  { key: index },
                                  [
                                    _c(
                                      "vs-select-group",
                                      { attrs: { title: item.name } },
                                      _vm._l(item.sub_category, function(
                                        item,
                                        index
                                      ) {
                                        return _c("vs-select-item", {
                                          key: index,
                                          attrs: {
                                            value: item.category_id,
                                            text: item.name
                                          }
                                        })
                                      }),
                                      1
                                    )
                                  ],
                                  1
                                )
                              }),
                              0
                            ),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has(
                                      "updateproduct.category"
                                    ),
                                    expression:
                                      "errors.has('updateproduct.category')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first("updateproduct.category")
                                  )
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      {
                        staticClass: "mb-3 p-0",
                        attrs: {
                          "vs-lg": "12",
                          "vs-md": "12",
                          "vs-sm": "12",
                          "vs-xs": "12"
                        }
                      },
                      [
                        _c(
                          "vx-input-group",
                          [
                            _c("vs-textarea", {
                              directives: [
                                {
                                  name: "validate",
                                  rawName: "v-validate",
                                  value: "required",
                                  expression: "'required'"
                                }
                              ],
                              attrs: {
                                name: "description",
                                label: "Description"
                              },
                              model: {
                                value: _vm.product.description,
                                callback: function($$v) {
                                  _vm.$set(_vm.product, "description", $$v)
                                },
                                expression: "product.description"
                              }
                            }),
                            _vm._v(" "),
                            _c(
                              "span",
                              {
                                directives: [
                                  {
                                    name: "show",
                                    rawName: "v-show",
                                    value: _vm.errors.has(
                                      "updateproduct.description"
                                    ),
                                    expression:
                                      "errors.has('updateproduct.description')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateproduct.description"
                                    )
                                  )
                                )
                              ]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("vs-divider", { attrs: { position: "left" } }, [
                      _c("h4", [_vm._v("Details and specs (Optional)")])
                    ]),
                    _vm._v(" "),
                    _vm._l(_vm.features, function(feature, index) {
                      return _c(
                        "vs-row",
                        { key: index },
                        [
                          _c(
                            "vs-col",
                            {
                              staticClass: "mb-3",
                              attrs: {
                                "vs-lg": "5",
                                "vs-md": "5",
                                "vs-sm": "12",
                                "vs-xs": "12"
                              }
                            },
                            [
                              _c(
                                "vx-input-group",
                                [
                                  _c("vs-input", {
                                    attrs: { placeholder: "Feature" },
                                    model: {
                                      value: feature.feature,
                                      callback: function($$v) {
                                        _vm.$set(feature, "feature", $$v)
                                      },
                                      expression: "feature.feature"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              staticClass: "mb-3",
                              attrs: {
                                "vs-lg": "5",
                                "vs-md": "5",
                                "vs-sm": "12",
                                "vs-xs": "12"
                              }
                            },
                            [
                              _c(
                                "vx-input-group",
                                [
                                  _c("vs-input", {
                                    attrs: { placeholder: "Value" },
                                    model: {
                                      value: feature.value,
                                      callback: function($$v) {
                                        _vm.$set(feature, "value", $$v)
                                      },
                                      expression: "feature.value"
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-col",
                            {
                              staticClass: "mb-3",
                              attrs: {
                                "vs-lg": "2",
                                "vs-md": "2",
                                "vs-sm": "12",
                                "vs-xs": "12"
                              }
                            },
                            [
                              [
                                index == 0
                                  ? _c("vs-button", {
                                      attrs: {
                                        type: "gradient",
                                        icon: "icon-plus",
                                        "icon-pack": "feather"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.addMore()
                                        }
                                      }
                                    })
                                  : _c("vs-button", {
                                      attrs: {
                                        type: "gradient",
                                        icon: "icon-trash",
                                        "icon-pack": "feather"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.deleteMore(index)
                                        }
                                      }
                                    })
                              ]
                            ],
                            2
                          )
                        ],
                        1
                      )
                    }),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      [
                        _c(
                          "vs-col",
                          { staticClass: "flex justify-end" },
                          [
                            _c(
                              "vs-button",
                              {
                                attrs: {
                                  button: "submit",
                                  type: "gradient",
                                  icon: "icon-plus",
                                  "icon-pack": "feather"
                                }
                              },
                              [_vm._v("Update Product")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  ],
                  2
                )
              ],
              1
            )
          ]
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Products/ProductsDetail.vue":
/*!************************************************************!*\
  !*** ./resources/js/src/views/Products/ProductsDetail.vue ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ProductsDetail_vue_vue_type_template_id_2a906274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ProductsDetail.vue?vue&type=template&id=2a906274& */ "./resources/js/src/views/Products/ProductsDetail.vue?vue&type=template&id=2a906274&");
/* harmony import */ var _ProductsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ProductsDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Products/ProductsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ProductsDetail.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ProductsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ProductsDetail_vue_vue_type_template_id_2a906274___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ProductsDetail_vue_vue_type_template_id_2a906274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Products/ProductsDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Products/ProductsDetail.vue?vue&type=script&lang=js&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Products/ProductsDetail.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************!*\
  !*** ./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsDetail.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Products/ProductsDetail.vue?vue&type=template&id=2a906274&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Products/ProductsDetail.vue?vue&type=template&id=2a906274& ***!
  \*******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_template_id_2a906274___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ProductsDetail.vue?vue&type=template&id=2a906274& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Products/ProductsDetail.vue?vue&type=template&id=2a906274&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_template_id_2a906274___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ProductsDetail_vue_vue_type_template_id_2a906274___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);