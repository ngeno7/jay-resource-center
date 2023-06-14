(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Resources/AddResource.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @johmun/vue-tags-input */ "./node_modules/@johmun/vue-tags-input/dist/vue-tags-input.js");
/* harmony import */ var _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! quill/dist/quill.core.css */ "./node_modules/quill/dist/quill.core.css");
/* harmony import */ var quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_core_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! quill/dist/quill.snow.css */ "./node_modules/quill/dist/quill.snow.css");
/* harmony import */ var quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_snow_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! quill/dist/quill.bubble.css */ "./node_modules/quill/dist/quill.bubble.css");
/* harmony import */ var quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(quill_dist_quill_bubble_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-quill-editor */ "./node_modules/vue-quill-editor/dist/vue-quill-editor.js");
/* harmony import */ var vue_quill_editor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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

 // require styles





/* harmony default export */ __webpack_exports__["default"] = ({
  props: ['id'],
  data: function data() {
    var _ref;

    return _ref = {
      resource_topic: '',
      author_name: '',
      type_of_resource: '',
      link: '',
      description: '',
      resource_path: '',
      keyword: '',
      keywords: []
    }, _defineProperty(_ref, "keyword", ''), _defineProperty(_ref, "resourceType", 0), _defineProperty(_ref, "contentCategory", []), _defineProperty(_ref, "content_type", []), _defineProperty(_ref, "view", 'file'), _defineProperty(_ref, "isShown", true), _defineProperty(_ref, "isShownUtm", true), _ref;
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('resources/', ['resources', 'resource', 'resourceTypes']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('brands', ['brands']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('industries/', ['industries']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    getResource: 'resources/getResource'
  })),
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var self;
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this.getIndustries();

            case 2:
              _this.fetchResourceTypes();

              _this.getBrands();

              self = _this;

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    fetchResourceTypes: 'resources/fetchResourceTypes',
    fetchResource: 'resources/fetchResource',
    getBrands: 'brands/getBrands',
    getIndustries: 'industries/getIndustries',
    create: 'resources/create'
  }), {
    submit: function submit(e) {
      var _this2 = this;

      var result = this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.editForm);
          var file = _this2.$refs.file;
          var currentAddedFile = file.filesx.filter(function (i) {
            return i.remove !== true;
          });

          if (currentAddedFile.length > 0) {
            fd.append('logo', currentAddedFile[0]);
          } else {
            _this2.$vs.notify({
              color: 'danger',
              position: 'right-top',
              text: 'Please select Logo image',
              icon: 'warning'
            });

            return false;
          }

          if (_this2.view == 'file' && _this2.type_of_resource != 6 && _this2.type_of_resource != 7) {
            var _file = _this2.$refs.resource;

            var _currentAddedFile = _file.filesx.filter(function (i) {
              return i.remove !== true;
            });

            if (_currentAddedFile.length > 0) {
              fd.append('resource', _currentAddedFile[0]);
            } else {
              _this2.$vs.notify({
                color: 'danger',
                position: 'right-top',
                text: 'Please select resource file',
                icon: 'warning'
              });

              return false;
            }
          }

          fd.append('type_of_resource', _this2.type_of_resource);
          fd.append('description', _this2.description);
          fd.append('keywords', _.map(_this2.keywords, 'text'));
          fd.append('content_type', _this2.content_type);
          fd.append('content_category', _this2.contentCategory);
          fd.append('type', _this2.view);
          var data = {
            fd: fd,
            notify: _this2.$vs.notify,
            closeLoader: _this2.$vs.loading.close
          };

          _this2.$vs.loading();

          _this2.create(data).then(function (res) {
            e.target.reset();

            if (res.data.status) {
              _this2.$router.go(-1);
            }
          });
        }
      });
    }
  }, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])({
    setResource: 'resources/setResource'
  }), {
    /*changeView(view){
        this.view = view;
    },*/
    blurMe: function blurMe(e) {// console.log(e)
    },
    remove: function remove(item) {
      this.keywords.splice(this.keywords.indexOf(item), 1);
    },
    changeResource: function changeResource(resource) {
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
      }
    },
    addTag: function addTag(object) {
      var data = this.services.filter(function (item) {
        return item.text.toLowerCase() == object.tag.text.toLowerCase();
      });

      if (data.length == 0) {
        object.addTag();
      } else {
        this.$vs.notify({
          position: 'center-top',
          color: 'danger',
          text: 'duplicate entry found',
          icon: 'warning'
        });
        this.$emit('saving-duplicate');
      }
    },
    saveTag: function saveTag(object) {
      var data = this.services.filter(function (item, i) {
        return item.text.toLowerCase() == object.tag.text.toLowerCase() && i != object.index;
      });

      if (data.length == 0) {
        object.saveTag();
      } else {
        this.$vs.notify({
          position: 'center-top',
          color: 'danger',
          text: 'duplicate entry found',
          icon: 'warning'
        });
        this.$emit('saving-duplicate');
      }

      ;
    },
    EditKeyword: function EditKeyword(object) {
      var data = this.keywords.filter(function (item) {
        return item.text.toLowerCase() == object.tag.text.toLowerCase();
      });

      if (data.length == 0) {
        object.addTag();
      } else {
        this.$vs.notify({
          position: 'center-top',
          color: 'danger',
          text: 'duplicate entry found',
          icon: 'warning'
        });
        this.$emit('saving-duplicate');
      }
    },
    SaveEditKeyword: function SaveEditKeyword(object) {
      var data = this.keywords.filter(function (item, i) {
        return item.text.toLowerCase() == object.tag.text.toLowerCase() && i != object.index;
      });

      if (data.length == 0) {
        object.saveTag();
      } else {
        this.$vs.notify({
          position: 'center-top',
          color: 'danger',
          text: 'duplicate entry found',
          icon: 'warning'
        });
        this.$emit('saving-duplicate');
      }
    }
  }),
  components: {
    VueTagsInput: _johmun_vue_tags_input__WEBPACK_IMPORTED_MODULE_2___default.a,
    quillEditor: vue_quill_editor__WEBPACK_IMPORTED_MODULE_6__["quillEditor"]
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-input-upload {\n  width: 100%;\n  margin: 0;\n}\n.con-input-upload.disabled-upload {\n  display: none;\n}\n.ti-input {\n  border: none !important;\n  padding: 0 !important;\n}\n.vue-tags-input {\n  max-width: 100% !important;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddResource.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=template&id=386490ea&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Resources/AddResource.vue?vue&type=template&id=386490ea& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", [
    _c(
      "form",
      {
        ref: "editForm",
        on: {
          submit: function($event) {
            $event.preventDefault()
            return _vm.submit($event)
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
                  "vs-lg": "3",
                  "vs-md": "3",
                  "vs-sm": "12",
                  "vs-xs": "12"
                }
              },
              [
                _c(
                  "vx-input-group",
                  [
                    _c("vs-upload", {
                      ref: "file",
                      attrs: {
                        accept: "image/*",
                        "single-upload": true,
                        "show-upload-button": false,
                        text: "Upload Logo",
                        limit: 1
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
                attrs: {
                  "vs-lg": "9",
                  "vs-md": "9",
                  "vs-sm": "12",
                  "vs-xs": "12"
                }
              },
              [
                _c(
                  "vs-col",
                  {
                    attrs: {
                      "vs-lg": "6",
                      "vs-md": "6",
                      "vs-xs": "12",
                      "vs-sm": "12"
                    }
                  },
                  [
                    _c(
                      "vx-input-group",
                      [
                        _c("input", {
                          attrs: { type: "hidden", name: "id" },
                          domProps: { value: _vm.id }
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
                            placeholder: "Topic",
                            label: "Topic",
                            name: "topic"
                          },
                          model: {
                            value: _vm.resource_topic,
                            callback: function($$v) {
                              _vm.resource_topic = $$v
                            },
                            expression: "resource_topic"
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
                                value: _vm.errors.has("topic"),
                                expression: "errors.has('topic')"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.errors.first("topic")))]
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
                    staticClass: "pl-0",
                    attrs: {
                      "vs-lg": "6",
                      "vs-md": "6",
                      "vs-xs": "12",
                      "vs-sm": "12"
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
                            placeholder: "Author Name",
                            label: "Author Name",
                            name: "author"
                          },
                          model: {
                            value: _vm.author_name,
                            callback: function($$v) {
                              _vm.author_name = $$v
                            },
                            expression: "author_name"
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
                                value: _vm.errors.has("author"),
                                expression: "errors.has('author')"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.errors.first("author")))]
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
                    attrs: {
                      "vs-lg": "6",
                      "vs-md": "6",
                      "vs-xs": "12",
                      "vs-sm": "12"
                    }
                  },
                  [
                    _c(
                      "vx-input-group",
                      {},
                      [
                        _c("label", [_vm._v("Keywords")]),
                        _vm._v(" "),
                        _c("vue-tags-input", {
                          directives: [
                            {
                              name: "validate",
                              rawName: "v-validate",
                              value: _vm.keywords.length == 0 ? "required" : "",
                              expression: "keywords.length == 0?'required':''"
                            }
                          ],
                          staticClass:
                            "tags-input vs-inputx vs-input--input w-full",
                          staticStyle: { width: "100%" },
                          attrs: {
                            tags: _vm.keywords,
                            name: "keywords",
                            placeholder: "Keywords",
                            "allow-edit-tags": true
                          },
                          on: {
                            "before-saving-tag": _vm.SaveEditKeyword,
                            "before-adding-tag": _vm.EditKeyword,
                            "tags-changed": function(newKeywords) {
                              return (_vm.keywords = newKeywords)
                            }
                          },
                          model: {
                            value: _vm.keyword,
                            callback: function($$v) {
                              _vm.keyword = $$v
                            },
                            expression: "keyword"
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
                    staticClass: "pl-0",
                    attrs: {
                      "vs-lg": "6",
                      "vs-md": "6",
                      "vs-xs": "12",
                      "vs-sm": "12"
                    }
                  },
                  [
                    _c(
                      "vx-input-group",
                      {},
                      [
                        _c(
                          "vx-select",
                          {
                            attrs: {
                              name: "type_of_resource",
                              "data-vv-as": "Type Of Resource",
                              placeholder: "Select Resource Type",
                              label: "Type Of Resource"
                            },
                            on: { input: _vm.changeResource },
                            model: {
                              value: _vm.type_of_resource,
                              callback: function($$v) {
                                _vm.type_of_resource = $$v
                              },
                              expression: "type_of_resource"
                            }
                          },
                          _vm._l(_vm.resourceTypes, function(type, index) {
                            return _c("vs-select-item", {
                              key: index,
                              attrs: {
                                text: type.resourcetypename,
                                value: type.resourcetypeid
                              }
                            })
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("type_of_resource"),
                                expression: "errors.has('type_of_resource')"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.errors.first("type_of_resource")))]
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
          "vs-row",
          { staticClass: "mt-base" },
          [
            _c(
              "vs-col",
              [
                _c(
                  "vs-col",
                  {
                    staticClass: "pl-0",
                    attrs: {
                      "vs-lg": "4",
                      "vs-md": "4",
                      "vs-xs": "12",
                      "vs-sm": "12"
                    }
                  },
                  [
                    _c(
                      "vx-input-group",
                      [
                        [
                          _vm.type_of_resource == 6 || _vm.type_of_resource == 7
                            ? _c("vs-input", {
                                attrs: {
                                  label:
                                    _vm.type_of_resource == 6
                                      ? "Video Link (Youtube/Vimeo/Websites)"
                                      : "E-Book Link"
                                },
                                model: {
                                  value: _vm.link,
                                  callback: function($$v) {
                                    _vm.link = $$v
                                  },
                                  expression: "link"
                                }
                              })
                            : _vm._e()
                        ]
                      ],
                      2
                    )
                  ],
                  1
                ),
                _vm._v(" "),
                _c(
                  "vs-col",
                  {
                    staticClass: "pl-0",
                    attrs: {
                      "vs-lg": "4",
                      "vs-md": "4",
                      "vs-xs": "12",
                      "vs-sm": "12"
                    }
                  },
                  [
                    _c(
                      "vx-input-group",
                      {},
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
                              placeholder: "Select Content Type",
                              name: "content_type",
                              autocomplete: true,
                              multiple: "",
                              "data-vv-as": "Content Type",
                              label: "Content Type"
                            },
                            on: { blur: _vm.blurMe },
                            model: {
                              value: _vm.content_type,
                              callback: function($$v) {
                                _vm.content_type = $$v
                              },
                              expression: "content_type"
                            }
                          },
                          _vm._l(_vm.brands, function(brand, index) {
                            return _c("vs-select-item", {
                              key: index,
                              attrs: {
                                text: brand.brandname,
                                value: brand.brandid
                              }
                            })
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("content_type"),
                                expression: "errors.has('content_type')"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.errors.first("content_type")))]
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
                    staticClass: "pl-0",
                    attrs: {
                      "vs-lg": "4",
                      "vs-md": "4",
                      "vs-xs": "12",
                      "vs-sm": "12"
                    }
                  },
                  [
                    _c(
                      "vx-input-group",
                      {},
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
                              multiple: "",
                              label: "Content Category",
                              placeholder: "Select Content Category",
                              name: "content_category",
                              "data-vv-as": "Content Category"
                            },
                            model: {
                              value: _vm.contentCategory,
                              callback: function($$v) {
                                _vm.contentCategory = $$v
                              },
                              expression: "contentCategory"
                            }
                          },
                          _vm._l(_vm.industries, function(industry, index2) {
                            return _c("vs-select-item", {
                              key: index2,
                              attrs: {
                                text: industry.industryname,
                                value: industry.industryid
                              }
                            })
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.errors.has("content_category"),
                                expression: "errors.has('content_category')"
                              }
                            ]
                          },
                          [_vm._v(_vm._s(_vm.errors.first("content_category")))]
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
              { staticClass: "mt-base" },
              [
                _c("quill-editor", {
                  directives: [
                    {
                      name: "validate",
                      rawName: "v-validate",
                      value: "required",
                      expression: "'required'"
                    }
                  ],
                  staticStyle: { height: "400px" },
                  attrs: { name: "description" },
                  model: {
                    value: _vm.description,
                    callback: function($$v) {
                      _vm.description = $$v
                    },
                    expression: "description"
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
                        value: _vm.errors.has("description"),
                        expression: "errors.has('description')"
                      }
                    ]
                  },
                  [_vm._v(_vm._s(_vm.errors.first("description")))]
                )
              ],
              1
            ),
            _vm._v(" "),
            _vm.isShown
              ? _c(
                  "vs-row",
                  { staticClass: "mt-base" },
                  [
                    _c("vs-col", { staticClass: "mt-base" }, [
                      _c("br"),
                      _vm._v(" "),
                      _c("label", { staticClass: "title" }, [
                        _vm._v("File Or UTM")
                      ]),
                      _vm._v(" "),
                      _c(
                        "div",
                        { staticClass: "btn-group" },
                        [
                          _c(
                            "vs-button",
                            {
                              attrs: { button: "button", type: "gradient" },
                              on: {
                                click: function($event) {
                                  _vm.view = "file"
                                }
                              }
                            },
                            [_vm._v("Add Resource")]
                          ),
                          _vm._v(" "),
                          _c(
                            "vs-button",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.isShownUtm,
                                  expression: "isShownUtm"
                                }
                              ],
                              attrs: { button: "button", type: "gradient" },
                              on: {
                                click: function($event) {
                                  _vm.view = "utm"
                                }
                              }
                            },
                            [_vm._v("Add UTM")]
                          )
                        ],
                        1
                      )
                    ]),
                    _vm._v(" "),
                    [
                      _vm.view == "file"
                        ? _c(
                            "vs-col",
                            { staticClass: "mt-base" },
                            [
                              _c("vs-upload", {
                                ref: "resource",
                                attrs: {
                                  "single-upload": true,
                                  "show-upload-button": false,
                                  text: "Upload Logo",
                                  limit: 1
                                }
                              })
                            ],
                            1
                          )
                        : _vm._e(),
                      _vm._v(" "),
                      _vm.view == "utm"
                        ? _c(
                            "vs-col",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.isShownUtm,
                                  expression: "isShownUtm"
                                }
                              ]
                            },
                            [
                              _c(
                                "vx-input-group",
                                { staticClass: "mt-base" },
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
                                      type: "url",
                                      placeholder: "https://www.example.com",
                                      label: "",
                                      name: "resource"
                                    },
                                    model: {
                                      value: _vm.resource_path,
                                      callback: function($$v) {
                                        _vm.resource_path = $$v
                                      },
                                      expression: "resource_path"
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
                                          value: _vm.errors.has("resource"),
                                          expression: "errors.has('resource')"
                                        }
                                      ]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(_vm.errors.first("resource"))
                                      )
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          )
                        : _vm._e()
                    ]
                  ],
                  2
                )
              : _vm._e()
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "vs-row",
          { staticClass: "mt-base" },
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
                  "vs-button",
                  {
                    staticClass: "float-right",
                    attrs: { button: "submit", type: "gradient" }
                  },
                  [_vm._v("Create Resource")]
                )
              ],
              1
            )
          ],
          1
        ),
        _vm._v(" "),
        _c("br")
      ],
      1
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Resources/AddResource.vue":
/*!**********************************************************!*\
  !*** ./resources/js/src/views/Resources/AddResource.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AddResource_vue_vue_type_template_id_386490ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AddResource.vue?vue&type=template&id=386490ea& */ "./resources/js/src/views/Resources/AddResource.vue?vue&type=template&id=386490ea&");
/* harmony import */ var _AddResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AddResource.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Resources/AddResource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AddResource.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _AddResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AddResource_vue_vue_type_template_id_386490ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AddResource_vue_vue_type_template_id_386490ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Resources/AddResource.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Resources/AddResource.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/views/Resources/AddResource.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddResource.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddResource.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Resources/AddResource.vue?vue&type=template&id=386490ea&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/src/views/Resources/AddResource.vue?vue&type=template&id=386490ea& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_template_id_386490ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./AddResource.vue?vue&type=template&id=386490ea& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Resources/AddResource.vue?vue&type=template&id=386490ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_template_id_386490ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AddResource_vue_vue_type_template_id_386490ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);