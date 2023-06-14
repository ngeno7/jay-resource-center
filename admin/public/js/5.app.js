(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[5],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-apexcharts */ "./node_modules/vue-apexcharts/dist/vue-apexcharts.js");
/* harmony import */ var vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_apexcharts__WEBPACK_IMPORTED_MODULE_0__);
//
//
//
//
//
//
//
//
//
//
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
  props: {
    icon: {
      type: String,
      required: true
    },
    statistic: {
      type: [Number, String],
      required: true
    },
    statisticTitle: {
      type: String
    },
    chartData: {
      type: Object,
      required: true
    },
    color: {
      type: String,
      "default": 'primary'
    },
    chartType: {
      type: String,
      "default": 'line-chart'
    },
    type: {
      type: String,
      "default": 'line'
    },
    iconRight: {
      type: Boolean,
      "default": false
    }
  },
  watch: {
    themePrimaryColor: function themePrimaryColor() {
      this.$refs.apexChart.updateOptions({
        theme: {
          monochrome: {
            color: this.getHex()
          }
        }
      });
    }
  },
  computed: {
    themePrimaryColor: function themePrimaryColor() {
      return this.$store.state.themePrimaryColor;
    }
  },
  methods: {
    getHex: function getHex() {
      var rgb = window.getComputedStyle(document.documentElement).getPropertyValue("--vs-".concat(this.color));
      rgb = rgb.split(",");
      return "#" + ((1 << 24) + (Number(rgb[0]) << 16) + (Number(rgb[1]) << 8) + Number(rgb[2])).toString(16).slice(1);
    }
  },
  components: {
    VueApexCharts: vue_apexcharts__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  created: function created() {
    if (this.type == 'area') {
      this.chartData.chartOptions['theme'] = {
        monochrome: {
          enabled: true,
          color: this.getHex(this.color),
          shadeTo: 'light',
          shadeIntensity: 0.65
        }
      };
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/components/statistics-cards/StatisticsCardLine.vue */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue");
/* harmony import */ var _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/analyticsData.js */ "./resources/js/src/components/analyticsData.js");
/* harmony import */ var _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/ChangeTimeDurationDropdown.vue */ "./resources/js/src/components/ChangeTimeDurationDropdown.vue");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      ordersReceviedChartData: _components_analyticsData_js__WEBPACK_IMPORTED_MODULE_2__["default"].subscribersGained,
      data: {},
      currentStat: 'This month'
    };
  },
  components: {
    StatisticsCardLine: _components_statistics_cards_StatisticsCardLine_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    ChangeTimeDurationDropdown: _components_ChangeTimeDurationDropdown_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    this.changeDuration();
  },
  methods: {
    changeDuration: function changeDuration() {
      var _arguments = arguments,
          _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        var duration, fetchDashboardData;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                duration = _arguments.length > 0 && _arguments[0] !== undefined ? _arguments[0] : '';

                if (duration != '') {
                  _this.currentStat = _.upperFirst(duration.replace('-', ' '));
                }

                _context.next = 4;
                return axios.get('admin/ajax/get-dashboard-data?duration=' + duration);

              case 4:
                fetchDashboardData = _context.sent;
                _this.data = fetchDashboardData.data;

              case 6:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true&":
/*!*************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "vs-dropdown",
    {
      staticClass: "cursor-pointer",
      class: _vm.data.staticClass,
      attrs: { "vs-trigger-click": "" }
    },
    [
      _c(
        "small",
        { staticClass: "flex cursor-pointer" },
        [
          _c("span", [_vm._v("Change Stats")]),
          _vm._v(" "),
          _c("feather-icon", {
            staticClass: "ml-1",
            attrs: { icon: "ChevronDownIcon", svgClasses: "h-4 w-4" }
          })
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-dropdown-menu",
        { staticClass: "w-32" },
        [
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "this-month"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("This Month")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "last-month"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("Last Month")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "this-year"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("This Year")]
          ),
          _vm._v(" "),
          _c(
            "vs-dropdown-item",
            {
              on: {
                click: function($event) {
                  _vm.listeners.timeDurationChanged
                    ? {
                        timeDurationChanged: _vm.listeners.timeDurationChanged(
                          "last-year"
                        )
                      }
                    : null
                }
              }
            },
            [_vm._v("Last Year")]
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \******************************************************************************************************************************************************************************************************************************************/
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
  return _c("vx-card", { staticClass: "overflow-hidden" }, [
    _c("div", { attrs: { slot: "no-body" }, slot: "no-body" }, [
      _c(
        "div",
        {
          staticClass: "p-6 pb-0",
          class: {
            "flex justify-between flex-row-reverse items-center": _vm.iconRight
          }
        },
        [
          _c("feather-icon", {
            staticClass: "p-3 inline-flex rounded-full",
            class: ["text-" + _vm.color, { "mb-4": !_vm.iconRight }],
            style: { background: "rgba(var(--vs-" + _vm.color + "),.15)" },
            attrs: { icon: _vm.icon }
          }),
          _vm._v(" "),
          _c("div", [
            _c("h2", { staticClass: "mb-1 font-bold" }, [
              _vm._v(_vm._s(_vm.statistic))
            ]),
            _vm._v(" "),
            _c("span", [_vm._v(_vm._s(_vm.statisticTitle))])
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "line-area-chart", attrs: { id: _vm.chartData.id } },
        [
          _c("vue-apex-charts", {
            ref: "apexChart",
            attrs: {
              type: _vm.type,
              height: "100",
              width: "100%",
              options: _vm.chartData.chartOptions,
              series: _vm.chartData.series
            }
          })
        ],
        1
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \******************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    [
      _c(
        "vs-row",
        [
          _c("vs-col", { attrs: { "vs-lg": "6" } }, [
            _c("h2", [_vm._v("Welcome To RC Directory CMS!")]),
            _vm._v(" "),
            _c("small", { staticClass: "text-base" }, [
              _vm._v("These Stats are for "),
              _c("strong", [_vm._v(_vm._s(_vm.currentStat) + "!")])
            ])
          ]),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "text-right", attrs: { "vs-lg": "6" } },
            [
              _c("change-time-duration-dropdown", {
                on: { timeDurationChanged: _vm.changeDuration }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mt-base", attrs: { "vs-md": "4", "vs-lg": "4" } },
            [
              _c("statistics-card-line", {
                attrs: {
                  icon: "ShoppingBagIcon",
                  statistic: _vm.data.products || 0,
                  statisticTitle: "Products",
                  chartData: _vm.ordersReceviedChartData,
                  color: "primary",
                  type: "area"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mt-base", attrs: { "vs-md": "4", "vs-lg": "4" } },
            [
              _c("statistics-card-line", {
                attrs: {
                  icon: "BookOpenIcon",
                  statistic: _vm.data.resources || 0,
                  statisticTitle: "Resources",
                  chartData: _vm.ordersReceviedChartData,
                  color: "primary",
                  type: "area"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mt-base", attrs: { "vs-md": "4", "vs-lg": "4" } },
            [
              _c("statistics-card-line", {
                attrs: {
                  icon: "UsersIcon",
                  statistic: _vm.data.sponsors || 0,
                  statisticTitle: "Sponsors",
                  chartData: _vm.ordersReceviedChartData,
                  color: "primary",
                  type: "area"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mt-base", attrs: { "vs-md": "4", "vs-lg": "4" } },
            [
              _c("statistics-card-line", {
                attrs: {
                  icon: "UsersIcon",
                  statistic: _vm.data.subscribers || 0,
                  statisticTitle: "Subscribers",
                  chartData: _vm.ordersReceviedChartData,
                  color: "primary",
                  type: "area"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mt-base", attrs: { "vs-md": "4", "vs-lg": "4" } },
            [
              _c("statistics-card-line", {
                attrs: {
                  icon: "TvIcon",
                  statistic: _vm.data.views || 0,
                  statisticTitle: "Total Views",
                  chartData: _vm.ordersReceviedChartData,
                  color: "primary",
                  type: "area"
                }
              })
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-col",
            { staticClass: "mt-base", attrs: { "vs-md": "4", "vs-lg": "4" } },
            [
              _c("statistics-card-line", {
                attrs: {
                  icon: "DownloadIcon",
                  statistic: _vm.data.downloads || 0,
                  statisticTitle: "Total Downloads",
                  chartData: _vm.ordersReceviedChartData,
                  color: "primary",
                  type: "area"
                }
              })
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/ChangeTimeDurationDropdown.vue":
/*!********************************************************************!*\
  !*** ./resources/js/src/components/ChangeTimeDurationDropdown.vue ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true& */ "./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");

var script = {}


/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_1__["default"])(
  script,
  _ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/ChangeTimeDurationDropdown.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true& ***!
  \*******************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/ChangeTimeDurationDropdown.vue?vue&type=template&id=c2faee7c&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ChangeTimeDurationDropdown_vue_vue_type_template_id_c2faee7c_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/analyticsData.js":
/*!******************************************************!*\
  !*** ./resources/js/src/components/analyticsData.js ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/*=========================================================================================
	File Name: analyticsData.vue
	Description: Data shown by charts
	----------------------------------------------------------------------------------------
	Item Name: Vuesax Admin - VueJS Dashboard Admin Template
	Author: Pixinvent
	Author URL: http://www.themeforest.net/user/pixinvent
==========================================================================================*/
/* harmony default export */ __webpack_exports__["default"] = ({
  // LINE CHART
  siteTraffic: {
    series: [{
      name: 'Traffic Rate',
      data: [150, 200, 125, 225, 200, 250]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#7367F0'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#A9A2F6'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  activeUsers: {
    series: [{
      name: 'Active Users',
      data: [750, 1000, 900, 1250, 1000, 1200, 1100]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#28C76F'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#55DD92'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 75, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  newsletter: {
    series: [{
      name: 'Newsletter',
      data: [365, 390, 365, 400, 375, 400]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'line',
        dropShadow: {
          enabled: true,
          top: 5,
          left: 0,
          blur: 4,
          opacity: 0.10
        },
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      stroke: {
        width: 5,
        curve: 'smooth'
      },
      xaxis: {
        type: 'numeric'
      },
      colors: ['#FF9F43'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#ffc085'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 75, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  revenueComparisonLine: {
    series: [{
      name: "This Month",
      data: [45000, 47000, 44800, 47500, 45500, 48000, 46500, 48600]
    }, {
      name: "Last Month",
      data: [46000, 48000, 45500, 46600, 44500, 46500, 45000, 47000]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        }
      },
      stroke: {
        curve: 'smooth',
        dashArray: [0, 8],
        width: [4, 2]
      },
      grid: {
        borderColor: '#e7e7e7'
      },
      legend: {
        show: false
      },
      colors: ['#F97794', '#b8c2cc'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#7367F0', '#b8c2cc'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['01', '05', '09', '13', '17', '21', '26', '31'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          },
          formatter: function formatter(val) {
            return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // LINE AREA CHART
  subscribersGained: {
    series: [{
      name: 'Subscribers',
      data: [28, 40, 36, 52, 38, 60, 55]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        enabled: false,
        x: {
          show: false
        }
      }
    }
  },
  quarterlySales: {
    series: [{
      name: 'Sales',
      data: [10, 15, 7, 12, 3, 16]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  revenueGenerated: {
    series: [{
      name: 'Revenue',
      data: [350, 275, 400, 300, 350, 300, 450]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  ordersRecevied: {
    series: [{
      name: 'Orders',
      data: [10, 15, 8, 15, 7, 12, 8]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        toolbar: {
          show: false
        },
        sparkline: {
          enabled: true
        }
      },
      dataLabels: {
        enabled: false
      },
      stroke: {
        curve: 'smooth',
        width: 2.5
      },
      fill: {
        type: 'gradient',
        gradient: {
          shadeIntensity: 0.9,
          opacityFrom: 0.7,
          opacityTo: 0.5,
          stops: [0, 80, 100]
        }
      },
      xaxis: {
        type: 'numeric',
        lines: {
          show: false
        },
        axisBorder: {
          show: false
        },
        labels: {
          show: false
        }
      },
      yaxis: [{
        y: 0,
        offsetX: 0,
        offsetY: 0,
        padding: {
          left: 0,
          right: 0
        }
      }],
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // BAR CHART
  salesBar: {
    series: [{
      name: 'Sessions',
      data: [75, 125, 225, 175, 125, 75, 25]
    }],
    chartOptions: {
      grid: {
        show: false,
        padding: {
          left: 0,
          right: 0
        }
      },
      chart: {
        type: 'bar',
        sparkline: {
          enabled: true
        },
        toolbar: {
          show: false
        }
      },
      states: {
        hover: {
          filter: 'none'
        }
      },
      colors: ['#e6edf7', '#e6edf7', '#7367f0', '#e6edf7', '#e6edf7', '#e6edf7'],
      plotOptions: {
        bar: {
          columnWidth: '45%',
          distributed: true,
          endingShape: 'rounded' // Deprecated
          // borderRadius: '20px', // Coming Soon

        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // RADIAL BAR
  goalOverviewRadialBar: {
    series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 110,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '77%'
          },
          track: {
            background: "#bfc5cc",
            strokeWidth: '50%'
          },
          dataLabels: {
            name: {
              show: false
            },
            value: {
              offsetY: 18,
              color: '#99a2ac',
              fontSize: '4rem'
            }
          }
        }
      },
      colors: ['#00db89'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#00b5b5'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      chart: {
        sparkline: {
          enabled: true
        },
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    }
  },
  supportTrackerRadialBar: {
    chartData: {
      totalTickets: 163,
      openTickets: 103,
      lastResponse: '1d'
    },
    series: [83],
    chartOptions: {
      plotOptions: {
        radialBar: {
          size: 150,
          offsetY: -40,
          startAngle: -150,
          endAngle: 150,
          hollow: {
            size: '65%'
          },
          track: {
            background: "rgba(0,0,0,0)",
            strokeWidth: '100%'
          },
          dataLabels: {
            value: {
              offsetY: 30,
              color: '#99a2ac',
              fontSize: '2rem'
            }
          }
        }
      },
      colors: ['#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'horizontal',
          shadeIntensity: 0.5,
          gradientToColors: ['#7367F0'],
          inverseColors: true,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        dashArray: 8
      },
      chart: {
        sparkline: {}
      },
      labels: ['Completed Tickets']
    }
  },
  // RADAR
  statisticsRadar: {
    series: [{
      name: 'Visits',
      data: [90, 50, 86, 40, 100, 20]
    }, {
      name: 'Sales',
      data: [70, 75, 70, 76, 20, 85]
    }],
    chartOptions: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      dataLabels: {
        style: {
          colors: ['#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd', '#b9c3cd']
        }
      },
      yaxis: {
        show: false
      },
      grid: {
        show: false
      },
      legend: {
        show: false
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 8,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: ['#9f8ed7', '#1edec5'],
      plotOptions: {
        radar: {
          polygons: {
            strokeColors: ['#e8e8e8', 'transparent', 'transparent', 'transparent', 'transparent', 'transparent'],
            connectorColors: 'transparent'
          }
        }
      },
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          gradientToColors: ['#8e9ad6', '#1fcadb'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0
      }
    }
  },
  // SessionsByDevice
  sessionsByDeviceDonut: {
    analyticsData: [{
      device: 'Dekstop',
      icon: 'MonitorIcon',
      color: 'primary',
      sessionsPercentgae: 58.6,
      comparedResultPercentage: 2
    }, {
      device: 'Mobile',
      icon: 'SmartphoneIcon',
      color: 'warning',
      sessionsPercentgae: 34.9,
      comparedResultPercentage: 8
    }, {
      device: 'Tablet',
      icon: 'TabletIcon',
      color: 'danger',
      sessionsPercentgae: 6.5,
      comparedResultPercentage: -5
    }],
    comparedResult: [2, -3, 8],
    series: [58.6, 34.9, 6.5],
    chartOptions: {
      labels: ['Desktop', 'Mobile', 'Tablet'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      chart: {
        offsetY: 30,
        type: 'donut',
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 0
      },
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
        }
      }
    }
  },
  // Product Orders
  productOrdersRadialBar: {
    analyticsData: [{
      'orderType': 'Finished',
      'counts': 23043,
      color: 'primary'
    }, {
      'orderType': 'Pending',
      'counts': 14658,
      color: 'warning'
    }, {
      'orderType': 'Rejected ',
      'counts': 4758,
      color: 'danger'
    }],
    series: [70, 52, 26],
    chartOptions: {
      labels: ['Finished', 'Pending', 'Rejected'],
      plotOptions: {
        radialBar: {
          size: 165,
          offsetY: -25,
          hollow: {
            size: '20%'
          },
          track: {
            background: "#ebebeb",
            strokeWidth: '100%',
            margin: 15
          },
          dataLabels: {
            show: true,
            name: {
              fontSize: '18px'
            },
            value: {
              fontSize: '16px',
              color: "#636a71",
              offsetY: 11
            },
            total: {
              show: true,
              label: 'Total',
              formatter: function formatter() {
                return 42459;
              }
            }
          }
        }
      },
      responsive: [{
        breakpoint: 576,
        options: {
          plotOptions: {
            radialBar: {
              size: 150,
              hollow: {
                size: '20%'
              },
              track: {
                background: "#ebebeb",
                strokeWidth: '100%',
                margin: 15
              }
            }
          }
        }
      }],
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          // enabled: true,
          shade: 'dark',
          type: 'vertical',
          shadeIntensity: 0.5,
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292'],
          inverseColors: false,
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100]
        }
      },
      stroke: {
        lineCap: 'round'
      },
      chart: {
        dropShadow: {
          enabled: true,
          blur: 3,
          left: 1,
          top: 1,
          opacity: 0.1
        }
      }
    }
  },
  // Customers
  customersPie: {
    analyticsData: [{
      'customerType': 'New',
      'counts': 890,
      color: 'primary'
    }, {
      'customerType': 'Returning',
      'counts': 258,
      color: 'warning'
    }, {
      'customerType': 'Referrals ',
      'counts': 149,
      color: 'danger'
    }],
    series: [690, 258, 149],
    chartOptions: {
      labels: ['New', 'Returning', 'Referrals'],
      dataLabels: {
        enabled: false
      },
      legend: {
        show: false
      },
      chart: {
        type: 'pie',
        offsetY: 0,
        dropShadow: {
          enabled: false,
          blur: 5,
          left: 1,
          top: 1,
          opacity: 0.2
        },
        toolbar: {
          show: false
        }
      },
      stroke: {
        width: 5
      },
      colors: ['#7961F9', '#FF9F43', '#EA5455'],
      fill: {
        type: 'gradient',
        gradient: {
          gradientToColors: ['#9c8cfc', '#FFC085', '#f29292']
        }
      }
    }
  },
  // Sales monthly
  salesLine: {
    series: [{
      name: "Sales",
      data: [140, 180, 150, 205, 160, 295, 125, 255, 205, 305, 240, 295]
    }],
    chartOptions: {
      chart: {
        toolbar: {
          show: false
        },
        dropShadow: {
          enabled: true,
          top: 20,
          left: 2,
          blur: 6,
          opacity: 0.20
        }
      },
      stroke: {
        curve: 'smooth',
        width: 4
      },
      grid: {
        borderColor: '#ebebeb'
      },
      legend: {
        show: false
      },
      colors: ['#df87f2'],
      fill: {
        type: 'gradient',
        gradient: {
          shade: 'dark',
          inverseColors: false,
          gradientToColors: ['#7367F0'],
          shadeIntensity: 1,
          type: 'horizontal',
          opacityFrom: 1,
          opacityTo: 1,
          stops: [0, 100, 100, 100]
        }
      },
      markers: {
        size: 0,
        hover: {
          size: 5
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'July', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          },
          formatter: function formatter(val) {
            return val > 999 ? (val / 1000).toFixed(1) + 'k' : val;
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // ClientRetention Bar Chart
  clientRetentionBar: {
    series: [{
      name: 'New Clients',
      data: [175, 125, 225, 175, 160, 189, 206, 134, 159, 216, 148, 123]
    }, {
      name: 'Retained Clients',
      data: [-144, -155, -141, -167, -122, -143, -158, -107, -126, -131, -140, -137]
    }],
    chartOptions: {
      grid: {
        borderColor: '#ebebeb',
        padding: {
          left: 0,
          right: 0
        }
      },
      legend: {
        show: false
      },
      dataLabels: {
        enabled: false
      },
      chart: {
        stacked: true,
        type: 'bar',
        toolbar: {
          show: false
        }
      },
      colors: ['#7367F0', '#EA5455'],
      plotOptions: {
        bar: {
          columnWidth: '10%'
        }
      },
      xaxis: {
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        },
        axisTicks: {
          show: false
        },
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        axisBorder: {
          show: false
        }
      },
      yaxis: {
        tickAmount: 5,
        labels: {
          style: {
            cssClass: 'text-grey fill-current'
          }
        }
      },
      tooltip: {
        x: {
          show: false
        }
      }
    }
  },
  // OTHER
  browserAnalytics: [{
    id: 1,
    name: 'Google Chrome',
    ratio: 73,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '800'
  }, {
    id: 3,
    name: 'Opera',
    ratio: 8,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '-200'
  }, {
    id: 2,
    name: 'Firefox',
    ratio: 19,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '100'
  }, {
    id: 4,
    name: 'Internet Explorer',
    ratio: 27,
    time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
    comparedResult: '-450'
  }]
});

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony import */ var _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"],
  _StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/statistics-cards/StatisticsCardLine.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&":
/*!************************************************************************************************************!*\
  !*** ./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& ***!
  \************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/statistics-cards/StatisticsCardLine.vue?vue&type=template&id=2d2fa5ad&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_StatisticsCardLine_vue_vue_type_template_id_2d2fa5ad___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/Home.vue":
/*!*****************************************!*\
  !*** ./resources/js/src/views/Home.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=e85b2cee& */ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&":
/*!************************************************************************!*\
  !*** ./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee& ***!
  \************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=e85b2cee& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Home.vue?vue&type=template&id=e85b2cee&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_e85b2cee___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);