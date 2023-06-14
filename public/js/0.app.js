(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Sponsors.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Sponsors.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
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

/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('sponsors/', ['sponsors'])),
  data: function data() {
    return {
      id: 0
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchSponsors: 'sponsors/fetchSponsors',
    changeStatus: 'sponsors/changeStatus',
    deleteUser: 'sponsors/deleteUser'
  }), {
    updateStatus: function updateStatus(id) {
      this.id = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        acceptText: 'Yes Please',
        cancelText: 'No Way',
        text: 'Are you sure! do you want to change Sponsor\'s status?',
        accept: this.updateConfirmed
      });
    },
    deleteSponsor: function deleteSponsor(id) {
      this.id = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        acceptText: 'Yes Please',
        cancelText: 'No Way',
        text: 'Are you sure you want to delete this user?',
        accept: this.deleteConfirmed
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
    deleteConfirmed: function deleteConfirmed() {
      var data = {
        id: this.id,
        notify: this.$vs.notify,
        route: this.$route.path
      };
      this.deleteUser(data);
    }
  }),
  created: function created() {
    // console.log();
    this.fetchSponsors(this.$route.path);
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Sponsors.vue?vue&type=template&id=98b6017a&":
/*!**********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Sponsors.vue?vue&type=template&id=98b6017a& ***!
  \**********************************************************************************************************************************************************************************************************/
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
              title: "List Of Sponsors",
              subtitle: "List of all premium users"
            }
          },
          [
            _c(
              "template",
              { slot: "actions" },
              [
                _c(
                  "vs-button",
                  {
                    directives: [
                      {
                        name: "show",
                        rawName: "v-show",
                        value: _vm.$route.name != "All Sponsors",
                        expression: "$route.name != 'All Sponsors'"
                      }
                    ],
                    attrs: {
                      href: {
                        url: "admin/export-" + _vm.$route.path.substring(1)
                      },
                      type: "gradient",
                      "icon-pack": "feather",
                      icon: "icon-download"
                    }
                  },
                  [_vm._v("Export")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "vs-table",
              {
                attrs: {
                  data: _vm.sponsors,
                  search: "",
                  pagination: "",
                  "max-items": 20
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(sponser, index) {
                        return _c(
                          "vs-tr",
                          { key: sponser.id },
                          [
                            _c(
                              "vs-td",
                              { attrs: { data: sponser.company_name } },
                              [_vm._v(_vm._s(sponser.company_name))]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: sponser.full_name } },
                              [_vm._v(_vm._s(sponser.full_name))]
                            ),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: sponser.email } }, [
                              _vm._v(_vm._s(sponser.email))
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: sponser.package } }, [
                              _vm._v(_vm._s(sponser.package))
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              { attrs: { data: sponser.created_at } },
                              [
                                _vm._v(
                                  _vm._s(
                                    new Date(
                                      sponser.created_at
                                    ).toLocaleString()
                                  )
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-switch", {
                                  on: {
                                    input: function($event) {
                                      return _vm.updateStatus(sponser.id)
                                    }
                                  },
                                  model: {
                                    value:
                                      sponser.user_status == "approved"
                                        ? true
                                        : false,
                                    callback: function($$v) {
                                      _vm.$set(
                                        sponser,
                                        "user_status == 'approved'?true:false",
                                        $$v
                                      )
                                    },
                                    expression:
                                      "sponser.user_status == 'approved'?true:false"
                                  }
                                })
                              ],
                              1
                            ),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c(
                                  "vs-dropdown",
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        "icon-pack": "feather",
                                        icon: "icon-settings",
                                        type: "border"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      { staticStyle: { width: "150px" } },
                                      [
                                        _c(
                                          "vs-dropdown-item",
                                          {
                                            attrs: {
                                              to:
                                                "/account-detail/" + sponser.uid
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Company Detail\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-dropdown-item",
                                          {
                                            attrs: {
                                              to:
                                                "/resource-detail/" +
                                                sponser.uid
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Resources Detail\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-dropdown-item",
                                          {
                                            attrs: {
                                              to:
                                                "/products-detail/" +
                                                sponser.uid
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Products Detail\n                                    "
                                            )
                                          ]
                                        ),
                                        _vm._v(" "),
                                        _c(
                                          "vs-dropdown-item",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value:
                                                  _vm.$route.name !=
                                                  "Expired Sponsors",
                                                expression:
                                                  "$route.name != 'Expired Sponsors'"
                                              }
                                            ],
                                            on: {
                                              click: function($event) {
                                                return _vm.deleteSponsor(
                                                  sponser.id
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _vm._v(
                                              "\n                                        Delete\n                                    "
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
                    _c("vs-th", [_vm._v("Company Name")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Full Name")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Package")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Account Created")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Approval Status")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Action")])
                  ],
                  1
                )
              ],
              2
            )
          ],
          2
        )
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Sponsors.vue":
/*!*********************************************!*\
  !*** ./resources/js/src/views/Sponsors.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Sponsors_vue_vue_type_template_id_98b6017a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Sponsors.vue?vue&type=template&id=98b6017a& */ "./resources/js/src/views/Sponsors.vue?vue&type=template&id=98b6017a&");
/* harmony import */ var _Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Sponsors.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Sponsors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Sponsors_vue_vue_type_template_id_98b6017a___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Sponsors_vue_vue_type_template_id_98b6017a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Sponsors.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Sponsors.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/src/views/Sponsors.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sponsors.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Sponsors.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Sponsors.vue?vue&type=template&id=98b6017a&":
/*!****************************************************************************!*\
  !*** ./resources/js/src/views/Sponsors.vue?vue&type=template&id=98b6017a& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_template_id_98b6017a___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Sponsors.vue?vue&type=template&id=98b6017a& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Sponsors.vue?vue&type=template&id=98b6017a&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_template_id_98b6017a___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Sponsors_vue_vue_type_template_id_98b6017a___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);