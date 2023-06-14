(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[17],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('resources/', ['resources']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('sponsors/', ['sponsor'])),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchSponsorResources: 'resources/fetchSponsorResources',
    changeStatus: 'resources/changeStatus',
    getSponsor: 'sponsors/getSponsor'
  }), {
    updateStatus: function updateStatus(id) {
      this.id = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        acceptText: 'Yes Please',
        cancelText: 'No Way',
        text: 'Are you sure! do you want to change resource\'s status?',
        accept: this.updateConfirmed
      });
    },
    updateConfirmed: function updateConfirmed() {
      var data = {
        id: this.id,
        notify: this.$vs.notify,
        route: this.$route.path
      };
      this.changeStatus(data);
    },
    getSlug: function getSlug(title) {
      return title.replace(' ', '-');
    }
  }),
  created: function created() {
    this.fetchSponsorResources(this.$route.params.id);
    this.getSponsor(this.$route.params.id);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=template&id=54c2cc1a&":
/*!**************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=template&id=54c2cc1a& ***!
  \**************************************************************************************************************************************************************************************************************************/
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
          "vx-card",
          {
            attrs: {
              title: "List Of Resources",
              subtitle: _vm.sponsor.company_name + " Resources"
            }
          },
          [
            _c(
              "vs-table",
              {
                attrs: {
                  data: _vm.resources,
                  search: "",
                  pagination: "",
                  "max-items": 20
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(resource, index) {
                        return _c(
                          "vs-tr",
                          { key: resource.id },
                          [
                            _c(
                              "vs-td",
                              { attrs: { data: resource.resource_topic } },
                              [_vm._v(_vm._s(resource.resource_topic))]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              {
                                attrs: {
                                  data:
                                    resource.resource_views_count +
                                    resource.resource_anonymous_views_count
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    resource.resource_views_count +
                                      resource.resource_anonymous_views_count
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              {
                                attrs: {
                                  data: resource.resource_downloads_count
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(resource.resource_downloads_count)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-switch", {
                                  attrs: {
                                    "vs-icon-off": "close",
                                    "vs-icon-on": "done"
                                  },
                                  on: {
                                    input: function($event) {
                                      return _vm.updateStatus(resource.id)
                                    }
                                  },
                                  model: {
                                    value:
                                      resource.adminstatus == "Enable"
                                        ? true
                                        : false,
                                    callback: function($$v) {
                                      _vm.$set(
                                        resource,
                                        "adminstatus == 'Enable'?true:false",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "resource.adminstatus == 'Enable'?true:false"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-button", {
                                  attrs: {
                                    type: "gradient",
                                    target: "",
                                    href: {
                                      url:
                                        "resource-detail/" +
                                        _vm.getSlug(resource.resource_topic) +
                                        "/" +
                                        resource.resources_id
                                    },
                                    "icon-pack": "feather",
                                    icon: "icon-info"
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  attrs: {
                                    type: "gradient",
                                    to:
                                      "/edit-resource/" + resource.resources_id,
                                    "icon-pack": "feather",
                                    icon: "icon-edit-2"
                                  }
                                }),
                                _vm._v(" "),
                                _c("vs-button", {
                                  attrs: {
                                    type: "gradient",
                                    href: {
                                      url:
                                        "stats_download/" +
                                        resource.resources_id
                                    },
                                    "icon-pack": "feather",
                                    icon: "icon-download-cloud"
                                  }
                                })
                              ],
                              1
                            )
                          ],
                          1
                        )
                      })
                    }
                  }
                ])
              },
              [
                _c(
                  "template",
                  { slot: "thead" },
                  [
                    _c("vs-th", [_vm._v("Topic")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("No Of. Views")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("No Of. Downloads")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Status")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Action")])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Resources/ResourceDetail.vue":
/*!*************************************************************!*\
  !*** ./resources/js/src/views/Resources/ResourceDetail.vue ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ResourceDetail_vue_vue_type_template_id_54c2cc1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ResourceDetail.vue?vue&type=template&id=54c2cc1a& */ "./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=template&id=54c2cc1a&");
/* harmony import */ var _ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ResourceDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ResourceDetail_vue_vue_type_template_id_54c2cc1a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ResourceDetail_vue_vue_type_template_id_54c2cc1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Resources/ResourceDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=script&lang=js&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=template&id=54c2cc1a&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=template&id=54c2cc1a& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_template_id_54c2cc1a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ResourceDetail.vue?vue&type=template&id=54c2cc1a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/ResourceDetail.vue?vue&type=template&id=54c2cc1a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_template_id_54c2cc1a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ResourceDetail_vue_vue_type_template_id_54c2cc1a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);