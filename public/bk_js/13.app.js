(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SaleRepresentatives.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-multiselect */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.js");
/* harmony import */ var vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vue-multiselect/dist/vue-multiselect.min.css */ "./node_modules/vue-multiselect/dist/vue-multiselect.min.css");
/* harmony import */ var vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vue_multiselect_dist_vue_multiselect_min_css__WEBPACK_IMPORTED_MODULE_2__);
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



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('representatives/', ['representatives']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapState"])('sponsors/', ['sponsors']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])('representatives/', ['findSaleRep'])),
  data: function data() {
    return {
      id: '',
      firstname: '',
      lastname: '',
      email: '',
      password: '',
      username: '',
      contactno: '',
      updateRepresentativePopup: false,
      selected: []
    };
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapActions"])({
    fetchRepresentatives: 'representatives/fetchRepresentatives',
    getSponsors: 'sponsors/fetchSponsors',
    update: 'representatives/update',
    remove: 'representatives/deleteRep'
  }), {
    editRep: function editRep(id) {
      var rep = this.findSaleRep(id);
      this.selected = [];
      this.id = rep.id;
      this.firstname = rep.first_name;
      this.lastname = rep.last_name;
      this.email = rep.email;
      this.username = rep.username;
      this.contactno = rep.contact_no;
      this.password = rep.password; // this.selected = rep.sponser_ids;

      var self = this;

      if (rep.sponsers_ids !== null) {
        this.sponsors.forEach(function (element, index) {
          if (_.includes(rep.sponsers_ids, element.uid)) {
            self.selected.push(element);
          }
        });
      }

      this.updateRepresentativePopup = true;
    },
    deleteRep: function deleteRep(id) {
      this.id = id;
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        acceptText: 'Yes Please',
        cancelText: 'No Way',
        text: 'Are you sure! do you want to delete this Sale Representative?',
        accept: this.deleteconfirmed
      });
    },
    deleteconfirmed: function deleteconfirmed() {
      var data = {
        id: this.id,
        notify: this.$vs.notify
      };
      this.remove(data);
    },
    updateRepresentative: function updateRepresentative(e, scope) {
      var _this = this;

      var self = this;
      this.$validator.validateAll(scope).then(function (result) {
        var sponsors = _.map(self.selected, 'uid');

        if (result) {
          var fd = new FormData(_this.$refs.updateRepresentativeForm);
          fd.append('sponsors', JSON.stringify(sponsors));
          fd.append('id', _this.id);
          var data = {
            fd: fd,
            notify: _this.$vs.notify,
            closeLoader: _this.$vs.loading.close
          };

          _this.update(data).then(function (res) {
            if (res.data.status) {
              e.target.reset();
              _this.email = _this.username = _this.contactno = _this.password = '';
              _this.selected = [];
              _this.updateRepresentativePopup = false;
            }
          });
        }
      }); // console.log(this.selected)
    }
  }),
  created: function created() {
    this.fetchRepresentatives(this.$route.path);
    this.getSponsors('/all-sponsors');
  },
  components: {
    Multiselect: vue_multiselect__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".multiselect__tag {\n  background-image: linear-gradient(45deg, #00717f, #7c90c2);\n}\n.multiselect__tag-icon:focus,\n.multiselect__tag-icon:hover {\n  background: #03A9F4;\n  border-radius: 30px;\n  border: 1px solid white;\n}\n.multiselect__option--highlight {\n  background-image: linear-gradient(45deg, #00717f, #7c90c2);\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRepresentatives.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=template&id=6182fe75&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/SaleRepresentatives.vue?vue&type=template&id=6182fe75& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
          { attrs: { title: "List Of " + _vm.$route.name } },
          [
            _c(
              "vs-table",
              {
                attrs: {
                  data: _vm.representatives,
                  search: "",
                  pagination: "",
                  "max-items": 20
                },
                scopedSlots: _vm._u([
                  {
                    key: "default",
                    fn: function(ref) {
                      var data = ref.data
                      return _vm._l(data, function(rep, index) {
                        return _c(
                          "vs-tr",
                          { key: rep.id },
                          [
                            _c(
                              "vs-td",
                              {
                                attrs: {
                                  data: rep.first_name + " " + rep.last_name
                                }
                              },
                              [
                                _vm._v(
                                  _vm._s(rep.first_name + " " + rep.last_name)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: rep.username } }, [
                              _vm._v(_vm._s(rep.username))
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: rep.email } }, [
                              _vm._v(_vm._s(rep.email))
                            ]),
                            _vm._v(" "),
                            _c("vs-td", { attrs: { data: rep.contact_no } }, [
                              _vm._v(_vm._s(rep.contact_no))
                            ]),
                            _vm._v(" "),
                            _c(
                              "vs-td",
                              [
                                _c("vs-button", {
                                  attrs: {
                                    type: "gradient",
                                    "icon-pack": "feather",
                                    icon: "icon-edit-2"
                                  },
                                  on: {
                                    click: function($event) {
                                      return _vm.editRep(rep.id)
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
                                      return _vm.deleteRep(rep.id)
                                    }
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
                    _c("vs-th", [_vm._v("Name")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Username")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Email")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Contact No.")]),
                    _vm._v(" "),
                    _c("vs-th", [_vm._v("Actions")])
                  ],
                  1
                )
              ],
              2
            )
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vs-popup",
          {
            attrs: {
              active: _vm.updateRepresentativePopup,
              title: "Update Representative"
            },
            on: {
              "update:active": function($event) {
                _vm.updateRepresentativePopup = $event
              }
            }
          },
          [
            _c(
              "form",
              {
                ref: "updateRepresentativeForm",
                attrs: { autocomplete: "off" },
                on: {
                  submit: function($event) {
                    $event.preventDefault()
                    return _vm.updateRepresentative(
                      $event,
                      "updateRepresentativeForm"
                    )
                  }
                }
              },
              [
                _c(
                  "vs-row",
                  [
                    _c(
                      "vs-col",
                      { attrs: { "vs-lg": "12" } },
                      [
                        _c(
                          "multiselect",
                          {
                            attrs: {
                              "close-on-select": false,
                              placeholder: "Assigned sponsors",
                              deselectLabel: "",
                              selectLabel: "",
                              multiple: true,
                              options: _vm.sponsors,
                              name: "company_name",
                              label: "company_name",
                              "track-by": "id"
                            },
                            model: {
                              value: _vm.selected,
                              callback: function($$v) {
                                _vm.selected = $$v
                              },
                              expression: "selected"
                            }
                          },
                          [
                            _c("template", { slot: "noResult" }, [
                              _vm._v("No any Sponsor found")
                            ])
                          ],
                          2
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-col",
                      { attrs: { "vs-lg": "6" } },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                                label: "First Name",
                                placeholder: "First Name",
                                "data-vv-as": "First Name",
                                "data-vv-scope": "updateRepresentativeForm",
                                name: "firstname"
                              },
                              model: {
                                value: _vm.firstname,
                                callback: function($$v) {
                                  _vm.firstname = $$v
                                },
                                expression: "firstname"
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
                                      "updateRepresentativeForm.firstname"
                                    ),
                                    expression:
                                      "errors.has('updateRepresentativeForm.firstname')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateRepresentativeForm.firstname"
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
                      { attrs: { "vs-lg": "6" } },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                                label: "Last Name",
                                placeholder: "Last Name",
                                "data-vv-as": "Last Name",
                                "data-vv-scope": "updateRepresentativeForm",
                                name: "lastname"
                              },
                              model: {
                                value: _vm.lastname,
                                callback: function($$v) {
                                  _vm.lastname = $$v
                                },
                                expression: "lastname"
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
                                      "updateRepresentativeForm.lastname"
                                    ),
                                    expression:
                                      "errors.has('updateRepresentativeForm.lastname')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateRepresentativeForm.lastname"
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
                      { attrs: { "vs-lg": "6" } },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                                label: "Email",
                                placeholder: "Email",
                                "data-vv-as": "Email",
                                "data-vv-scope": "updateRepresentativeForm",
                                name: "email"
                              },
                              model: {
                                value: _vm.email,
                                callback: function($$v) {
                                  _vm.email = $$v
                                },
                                expression: "email"
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
                                      "updateRepresentativeForm.email"
                                    ),
                                    expression:
                                      "errors.has('updateRepresentativeForm.email')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateRepresentativeForm.email"
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
                      { attrs: { "vs-lg": "6" } },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                                label: "password",
                                placeholder: "password",
                                "data-vv-as": "Password",
                                "data-vv-scope": "updateRepresentativeForm",
                                name: "password"
                              },
                              model: {
                                value: _vm.password,
                                callback: function($$v) {
                                  _vm.password = $$v
                                },
                                expression: "password"
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
                                      "updateRepresentativeForm.password"
                                    ),
                                    expression:
                                      "errors.has('updateRepresentativeForm.password')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateRepresentativeForm.password"
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
                      { attrs: { "vs-lg": "6" } },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                                label: "Username",
                                placeholder: "Username",
                                "data-vv-as": "Username",
                                "data-vv-scope": "updateRepresentativeForm",
                                name: "username"
                              },
                              model: {
                                value: _vm.username,
                                callback: function($$v) {
                                  _vm.username = $$v
                                },
                                expression: "username"
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
                                      "updateRepresentativeForm.username"
                                    ),
                                    expression:
                                      "errors.has('updateRepresentativeForm.username')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateRepresentativeForm.username"
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
                      { attrs: { "vs-lg": "6" } },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                                label: "Contact No.",
                                placeholder: "Contact No.",
                                "data-vv-as": "Contact No.",
                                "data-vv-scope": "updateRepresentativeForm",
                                name: "contactno"
                              },
                              model: {
                                value: _vm.contactno,
                                callback: function($$v) {
                                  _vm.contactno = $$v
                                },
                                expression: "contactno"
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
                                      "updateRepresentativeForm.contactno"
                                    ),
                                    expression:
                                      "errors.has('updateRepresentativeForm.contactno')"
                                  }
                                ]
                              },
                              [
                                _vm._v(
                                  _vm._s(
                                    _vm.errors.first(
                                      "updateRepresentativeForm.contactno"
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
                        staticClass: "flex justify-end",
                        attrs: { "vs-lg": "12" }
                      },
                      [
                        _c(
                          "vx-input-group",
                          { staticClass: "mt-5" },
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
                              [_vm._v("Update Representative")]
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

/***/ "./resources/js/src/views/SaleRepresentatives.vue":
/*!********************************************************!*\
  !*** ./resources/js/src/views/SaleRepresentatives.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SaleRepresentatives_vue_vue_type_template_id_6182fe75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SaleRepresentatives.vue?vue&type=template&id=6182fe75& */ "./resources/js/src/views/SaleRepresentatives.vue?vue&type=template&id=6182fe75&");
/* harmony import */ var _SaleRepresentatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SaleRepresentatives.vue?vue&type=script&lang=js& */ "./resources/js/src/views/SaleRepresentatives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SaleRepresentatives.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _SaleRepresentatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _SaleRepresentatives_vue_vue_type_template_id_6182fe75___WEBPACK_IMPORTED_MODULE_0__["render"],
  _SaleRepresentatives_vue_vue_type_template_id_6182fe75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/SaleRepresentatives.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/SaleRepresentatives.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/SaleRepresentatives.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRepresentatives.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRepresentatives.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/SaleRepresentatives.vue?vue&type=template&id=6182fe75&":
/*!***************************************************************************************!*\
  !*** ./resources/js/src/views/SaleRepresentatives.vue?vue&type=template&id=6182fe75& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_template_id_6182fe75___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./SaleRepresentatives.vue?vue&type=template&id=6182fe75& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/SaleRepresentatives.vue?vue&type=template&id=6182fe75&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_template_id_6182fe75___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_SaleRepresentatives_vue_vue_type_template_id_6182fe75___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);