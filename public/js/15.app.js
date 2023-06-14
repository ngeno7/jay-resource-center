(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Brands.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Brands.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      currentx: 1,
      searchVal: '',
      showBrandPopup: false,
      brandname: '',
      updateBrandPopup: false,
      brand_id: 0,
      editBrandName: ''
    };
  },
  watch: {
    searchVal: function searchVal(val, oldVal) {
      this.search();
    },
    currentx: function currentx() {
      this.paginateBrands();
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('brands/', ['brands', 'totalBrandsPages']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('brands/', ['getBrand'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchBrands: 'brands/fetchBrands',
    create: 'brands/create',
    update: 'brands/update'
  }), {
    addNew: function addNew(e, scope) {
      var _this = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.addBrandForm);
          var data = {
            fd: fd,
            notify: _this.$vs.notify,
            closeLoader: _this.$vs.loading.close
          };

          _this.create(data).then(function (res) {
            if (res.data.status) {
              _this.brandname = '';
              e.target.reset();

              _this.$validator.reset();

              _this.showBrandPopup = false;
            }
          });
        }
      });
    },
    updateBrand: function updateBrand(e, scope) {
      var _this2 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.updateBrandForm);
          var data = {
            fd: fd,
            notify: _this2.$vs.notify,
            closeLoader: _this2.$vs.loading.close
          };

          _this2.update(data).then(function (res) {
            if (res.data.status) {
              _this2.brand_id = 0;
              _this2.editBrandName = '';
              e.target.reset();

              _this2.$validator.reset();

              _this2.updateBrandPopup = false;
            }
          });
        }
      });
    },
    editBrand: function editBrand(id) {
      var brand = this.getBrand(id);
      this.brand_id = brand.brandid;
      this.editBrandName = brand.brandname;
      this.updateBrandPopup = true;
    },
    searchBrand: function searchBrand() {
      var params = {
        search: this.searchVal,
        page: this.currentx
      };
      this.fetchBrands(params);
    },
    paginateBrands: function paginateBrands() {
      var params = {
        search: this.searchVal,
        page: this.currentx
      };
      this.fetchBrands(params);
    }
  }),
  created: function created() {
    this.search = _.debounce(this.searchBrand, 500);
    var params = {
      search: this.searchVal,
      page: this.currentx
    };
    this.fetchBrands(params);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Brands.vue?vue&type=template&id=3d583f76&":
/*!********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Brands.vue?vue&type=template&id=3d583f76& ***!
  \********************************************************************************************************************************************************************************************************/
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
                staticClass:
                  "flex justify-between bg-white font-extrabold mt-base p-8 shadow-lg",
                attrs: {
                  "vs-lg": "12",
                  "vs-md": "12",
                  "vs-sm": "12",
                  "vs-xs": "12"
                }
              },
              [
                _c("h3", [_vm._v("List Of Brands")]),
                _vm._v(" "),
                _c(
                  "vs-button",
                  {
                    attrs: {
                      type: "gradient",
                      "icon-pack": "feather",
                      icon: "icon-plus"
                    },
                    on: {
                      click: function($event) {
                        _vm.showBrandPopup = true
                      }
                    }
                  },
                  [_vm._v("Add Brand")]
                )
              ],
              1
            ),
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
            _vm._l(_vm.brands, function(brand, index) {
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
                  _c("vs-card", { attrs: { "fixed-height": "" } }, [
                    _c("div", { staticClass: "flex justify-between" }, [
                      _c("div", [_c("h3", [_vm._v(_vm._s(brand.brandname))])]),
                      _vm._v(" "),
                      _c(
                        "div",
                        [
                          _c("vs-button", {
                            attrs: {
                              type: "gradient",
                              "icon-pack": "feather",
                              icon: "icon-edit"
                            },
                            on: {
                              click: function($event) {
                                return _vm.editBrand(brand.brandid)
                              }
                            }
                          })
                        ],
                        1
                      )
                    ])
                  ])
                ],
                1
              )
            }),
            _vm._v(" "),
            _vm.brands.length == 0
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
                  [_c("h1", [_vm._v("No any brand added")])]
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
                _vm.brands.length > 0
                  ? _c("vs-pagination", {
                      attrs: {
                        total: _vm.totalBrandsPages,
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
            attrs: { active: _vm.showBrandPopup, title: "Add Brand" },
            on: {
              "update:active": function($event) {
                _vm.showBrandPopup = $event
              }
            }
          },
          [
            _c(
              "form",
              {
                ref: "addBrandForm",
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
                        "label-placeholder": "Brand Name",
                        name: "brandname",
                        "data-vv-as": "Brand Name",
                        "data-vv-scope": "addform"
                      },
                      model: {
                        value: _vm.brandname,
                        callback: function($$v) {
                          _vm.brandname = $$v
                        },
                        expression: "brandname"
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
                            value: _vm.errors.has("addform.brandname"),
                            expression: "errors.has('addform.brandname')"
                          }
                        ]
                      },
                      [_vm._v(_vm._s(_vm.errors.first("addform.brandname")))]
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
                        [_vm._v("Add Brand")]
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
            attrs: { active: _vm.updateBrandPopup, title: "Update Brand" },
            on: {
              "update:active": function($event) {
                _vm.updateBrandPopup = $event
              }
            }
          },
          [
            _c(
              "form",
              {
                ref: "updateBrandForm",
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateBrand($event, "editform")
                  }
                }
              },
              [
                _c(
                  "vx-input-group",
                  [
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.brand_id,
                          expression: "brand_id"
                        }
                      ],
                      attrs: { type: "hidden", name: "id" },
                      domProps: { value: _vm.brand_id },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.brand_id = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
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
                        "label-placeholder": "Brand Name",
                        name: "brandname",
                        "data-vv-as": "Brand Name",
                        "data-vv-scope": "editform"
                      },
                      model: {
                        value: _vm.editBrandName,
                        callback: function($$v) {
                          _vm.editBrandName = $$v
                        },
                        expression: "editBrandName"
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
                            value: _vm.errors.has("editform.brandname"),
                            expression: "errors.has('editform.brandname')"
                          }
                        ]
                      },
                      [_vm._v(_vm._s(_vm.errors.first("editform.brandname")))]
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
                        [_vm._v("Update Brand")]
                      )
                    ],
                    1
                  )
                ])
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

/***/ "./resources/js/src/views/Brands.vue":
/*!*******************************************!*\
  !*** ./resources/js/src/views/Brands.vue ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Brands_vue_vue_type_template_id_3d583f76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Brands.vue?vue&type=template&id=3d583f76& */ "./resources/js/src/views/Brands.vue?vue&type=template&id=3d583f76&");
/* harmony import */ var _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Brands.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Brands_vue_vue_type_template_id_3d583f76___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Brands_vue_vue_type_template_id_3d583f76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Brands.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Brands.vue?vue&type=script&lang=js&":
/*!********************************************************************!*\
  !*** ./resources/js/src/views/Brands.vue?vue&type=script&lang=js& ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Brands.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Brands.vue?vue&type=template&id=3d583f76&":
/*!**************************************************************************!*\
  !*** ./resources/js/src/views/Brands.vue?vue&type=template&id=3d583f76& ***!
  \**************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_3d583f76___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Brands.vue?vue&type=template&id=3d583f76& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Brands.vue?vue&type=template&id=3d583f76&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_3d583f76___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Brands_vue_vue_type_template_id_3d583f76___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);