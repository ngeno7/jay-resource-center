(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[3],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    placeholder: {
      type: String,
      "default": 'Search..'
    },
    data: {
      type: Object,
      required: true
    },
    showAction: {
      type: Boolean,
      "default": false
    },
    inputClassses: {
      type: [String, Object, Array]
    },
    autoFocus: {
      type: Boolean,
      "default": false
    },
    showPinned: {
      type: Boolean,
      "default": false
    },
    backgroundOverlay: {
      type: Boolean,
      "default": false
    },
    searchLimit: {
      type: Number,
      "default": 10
    }
  },
  data: function data() {
    return {
      searchQuery: '',
      filteredData: [],
      currentSelected: -1,
      inputFocused: false,
      insideSuggestions: false
    };
  },
  watch: {
    // UPDATE SUGGESTIONS LIST
    searchQuery: function searchQuery(val) {
      var _this = this;

      if (val == '') {
        this.inputInit();
        if (this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);
      } else {
        if (this.backgroundOverlay && !this.bodyOverlay) this.$store.commit('TOGGLE_CONTENT_OVERLAY', true);
        var exactEle = this.data.data.filter(function (item) {
          return item.label.toLowerCase().startsWith(_this.searchQuery.toLowerCase());
        });
        var containEle = this.data.data.filter(function (item) {
          return !item.label.toLowerCase().startsWith(_this.searchQuery.toLowerCase()) && item.label.toLowerCase().indexOf(_this.searchQuery.toLowerCase()) > -1;
        });
        this.filteredData = exactEle.concat(containEle).slice(0, this.searchLimit);
        if (!this.filteredData[0]) this.currentSelected = -1;
      } // ADD: No result found


      if (!this.filteredData.length && this.searchQuery) {
        this.filteredData = [{
          highlightAction: false,
          index: -1,
          label: 'No results found.',
          labelIcon: 'AlertCircleIcon',
          url: null
        }];
      }
    },
    autoFocus: function autoFocus(val) {
      if (val) this.focusInput();else this.searchQuery = '';
    },
    filteredData: function filteredData() {
      this.currentSelected = 0; // Prevent selecting if first item in list dont have url e.g. 'No Reult'

      if (this.filteredData[0]) {
        if (!this.filteredData[0].url) {
          this.currentSelected = -1;
        }
      }
    }
  },
  computed: {
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    actionClasses: function actionClasses() {
      var _this2 = this;

      return function (isHighlighted) {
        if (isHighlighted) return "stroke-current text-".concat(_this2.data.highlightColor);
      };
    }
  },
  methods: {
    escPressed: function escPressed() {
      this.$emit('closeSearchbar');
      this.searchQuery = '';
      this.filteredData = [];
    },
    inputInit: function inputInit() {
      if (this.showPinned) {
        var starredData = this.data.data.filter(function (item) {
          return item.highlightAction;
        });
        this.filteredData = starredData;
      } else {
        this.filteredData = [];
      }
    },
    updateInputFocus: function updateInputFocus() {
      var _this3 = this;

      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

      if (val) {
        if (this.searchQuery == '') this.inputInit();
        setTimeout(function () {
          _this3.inputFocused = true;
        }, 100);
      } else {
        if (this.insideSuggestions) return;
        setTimeout(function () {
          _this3.inputFocused = false;
        }, 100);
        this.escPressed();
      }
    },
    suggestionSelected: function suggestionSelected() {
      if (this.bodyOverlay && this.filteredData[0].url) this.$store.commit('TOGGLE_CONTENT_OVERLAY', false);

      if (this.filteredData.length) {
        if (this.filteredData[0].url) {
          this.searchQuery = '';
          if (this.currentSelected >= 0) this.$emit('selected', this.filteredData[this.currentSelected]);else this.$emit('selected', this.filteredData[0]);
          this.filteredData = [];
        }
      }
    },
    actionClicked: function actionClicked() {
      this.$emit('actionClicked', this.filteredData[this.currentSelected]);
      if (!this.filteredData[this.currentSelected].highlightAction) this.filteredData.splice(this.currentSelected, 1);
    },
    increaseIndex: function increaseIndex() {
      var val = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
      if (!val && this.currentSelected > 0) this.currentSelected--;else if (val && this.currentSelected < this.filteredData.length - 1 && this.filteredData[this.currentSelected + 1].index > -1) this.currentSelected++;
      this.fixScrolling();
    },
    focusInput: function focusInput() {
      this.$refs.input.$el.querySelector('input').focus();
    },
    fixScrolling: function fixScrolling() {
      if (this.currentSelected > 0) {
        var liH = this.$refs.option[this.currentSelected].clientHeight;
        var ulH = this.$refs.scrollContainer.clientHeight;

        if (ulH - liH * this.currentSelected < liH) {
          this.$refs.scrollContainer.scrollTop = Math.round((this.currentSelected + 1 - ulH / liH + 1) * liH);
        }
      }
    }
  },
  mounted: function mounted() {
    if (this.autoFocus) this.focusInput();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "the-footer",
  props: {
    classes: {
      type: String
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/vx-auto-suggest/VxAutoSuggest.vue */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_2__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "the-navbar",
  props: {
    navbarColor: {
      type: String,
      "default": "#fff"
    }
  },
  mounted: function mounted() {},
  data: function data() {
    return {
      navbarSearchAndPinList: this.$store.state.navbarSearchAndPinList,
      searchQuery: '',
      showFullSearch: false,
      unreadNotifications: [{
        index: 0,
        title: 'New Message',
        msg: 'Are your going to meet me tonight?',
        icon: 'MessageSquareIcon',
        time: this.randomDate({
          sec: 10
        }),
        category: 'primary'
      }, {
        index: 1,
        title: 'New Order Recieved',
        msg: 'You got new order of goods.',
        icon: 'PackageIcon',
        time: this.randomDate({
          sec: 40
        }),
        category: 'success'
      }, {
        index: 2,
        title: 'Server Limit Reached!',
        msg: 'Server have 99% CPU usage.',
        icon: 'AlertOctagonIcon',
        time: this.randomDate({
          min: 1
        }),
        category: 'danger'
      }, {
        index: 3,
        title: 'New Mail From Peter',
        msg: 'Cake sesame snaps cupcake',
        icon: 'MailIcon',
        time: this.randomDate({
          min: 6
        }),
        category: 'primary'
      }, {
        index: 4,
        title: 'Bruce\'s Party',
        msg: 'Chocolate cake oat cake tiramisu',
        icon: 'CalendarIcon',
        time: this.randomDate({
          hr: 2
        }),
        category: 'warning'
      }],
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: .60
      },
      autoFocusSearch: false,
      showBookmarkPagesDropdown: false
    };
  },
  watch: {
    '$route': function $route() {
      if (this.showBookmarkPagesDropdown) this.showBookmarkPagesDropdown = false;
    }
  },
  computed: {
    // HELPER
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    breakpoint: function breakpoint() {
      return this.$store.state.breakpoint;
    },
    // NAVBAR STYLE
    classObj: function classObj() {
      if (this.sidebarWidth == "default") return "navbar-default";else if (this.sidebarWidth == "reduced") return "navbar-reduced";else if (this.sidebarWidth) return "navbar-full";
    },
    // BOOKMARK & SEARCH
    data: function data() {
      return this.$store.state.navbarSearchAndPinList;
    },
    starredPages: function starredPages() {
      return this.$store.state.starredPages;
    },
    starredPagesLimited: {
      get: function get() {
        return this.starredPages.slice(0, 10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesLimited', list);
      }
    },
    starredPagesMore: {
      get: function get() {
        return this.starredPages.slice(10);
      },
      set: function set(list) {
        this.$store.dispatch('arrangeStarredPagesMore', list);
      }
    }
  },
  methods: {
    letsLogout: function letsLogout() {
      this.$store.dispatch('logout');
    },
    showSidebar: function showSidebar() {
      this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
    },
    selected: function selected(item) {
      this.$router.push(item.url);
      this.showFullSearch = false;
    },
    actionClicked: function actionClicked(item) {
      // e.stopPropogation();
      this.$store.dispatch('updateStarredPage', {
        index: item.index,
        val: !item.highlightAction
      });
    },
    showNavbarSearch: function showNavbarSearch() {
      this.showFullSearch = true;
    },
    showSearchbar: function showSearchbar() {
      this.showFullSearch = true;
    },
    elapsedTime: function elapsedTime(startTime) {
      var x = new Date(startTime);
      var now = new Date();
      var timeDiff = now - x;
      timeDiff /= 1000;
      var seconds = Math.round(timeDiff);
      timeDiff = Math.floor(timeDiff / 60);
      var minutes = Math.round(timeDiff % 60);
      timeDiff = Math.floor(timeDiff / 60);
      var hours = Math.round(timeDiff % 24);
      timeDiff = Math.floor(timeDiff / 24);
      var days = Math.round(timeDiff % 365);
      timeDiff = Math.floor(timeDiff / 365);
      var years = timeDiff;

      if (years > 0) {
        return years + (years > 1 ? ' Years ' : ' Year ') + 'ago';
      } else if (days > 0) {
        return days + (days > 1 ? ' Days ' : ' Day ') + 'ago';
      } else if (hours > 0) {
        return hours + (hours > 1 ? ' Hrs ' : ' Hour ') + 'ago';
      } else if (minutes > 0) {
        return minutes + (minutes > 1 ? ' Mins ' : ' Min ') + 'ago';
      } else if (seconds > 0) {
        return seconds + (seconds > 1 ? " sec ago" : 'just now');
      }

      return 'Just Now';
    },
    outside: function outside() {
      this.showBookmarkPagesDropdown = false;
    },
    // Method for creating dummy notification time
    randomDate: function randomDate(_ref) {
      var hr = _ref.hr,
          min = _ref.min,
          sec = _ref.sec;
      var date = new Date();
      if (hr) date.setHours(date.getHours() - hr);
      if (min) date.setMinutes(date.getMinutes() - min);
      if (sec) date.setSeconds(date.getSeconds() - sec);
      return date;
    }
  },
  directives: {
    'click-outside': {
      bind: function bind(el, binding) {
        var bubble = binding.modifiers.bubble;

        var handler = function handler(e) {
          if (bubble || !el.contains(e.target) && el !== e.target) {
            binding.value(e);
          }
        };

        el.__vueClickOutside__ = handler;
        document.addEventListener('click', handler);
      },
      unbind: function unbind(el) {
        document.removeEventListener('click', el.__vueClickOutside__);
        el.__vueClickOutside__ = null;
      }
    }
  },
  components: {
    VxAutoSuggest: _components_vx_auto_suggest_VxAutoSuggest_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_1___default.a,
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_2___default.a
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue-perfect-scrollbar */ "./node_modules/vue-perfect-scrollbar/dist/index.js");
/* harmony import */ var vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _VxSidebarGroup_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarGroup.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue");
/* harmony import */ var _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebarItem.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'vx-sidebar',
  props: {
    sidebarItems: {
      type: Array,
      required: true
    },
    title: {
      type: String
    },
    logo: {
      type: String
    },
    parent: {
      type: String
    },
    openGroupHover: {
      type: Boolean,
      "default": false
    },
    reduceNotRebound: {
      type: Boolean,
      "default": true
    },
    sideBarColor: {
      type: String,
      "default": ''
    }
  },
  data: function data() {
    return {
      clickNotClose: false,
      // disable close sidebar on outside click
      reduce: false,
      // determines if sidebar is reduce - component property
      showCloseButton: false,
      // show close button in smaller devices
      isMouseEnter: false,
      settings: {
        // perfectscrollbar settings
        maxScrollbarLength: 60,
        wheelSpeed: 1,
        swipeEasing: true
      },
      windowWidth: window.innerWidth,
      //width of windows
      showShadowBottom: false
    };
  },
  computed: {
    isSidebarActive: {
      get: function get() {
        return this.$store.state.isSidebarActive;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', val);
      }
    },
    reduceSidebar: function reduceSidebar() {
      return Boolean(this.reduce && this.reduceButton);
    },
    reduceButton: {
      get: function get() {
        return this.$store.state.reduceButton;
      },
      set: function set(val) {
        this.$store.commit('TOGGLE_REDUCE_BUTTON', val);
      }
    },
    sidebarItemsMin: function sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    reduce: function reduce(val) {
      if (val == true) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.dispatch('updateSidebarWidth', 'default');
      }

      setTimeout(function () {
        window.dispatchEvent(new Event('resize'));
      }, 100);
    },
    reduceButton: function reduceButton() {
      this.setSidebarWidth();
    },
    '$route': function $route() {
      if (this.isSidebarActive && this.showCloseButton) this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
    }
  },
  methods: {
    showPopup: function showPopup(slug) {
      this.$emit('show-popup', slug);
    },
    sidebarMouseEntered: function sidebarMouseEntered() {
      if (this.reduce) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
      this.isMouseEnter = true;
    },
    sidebarMouseLeave: function sidebarMouseLeave() {
      if (this.reduce) {
        this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);
      }

      this.isMouseEnter = false;
    },
    toggleReduce: function toggleReduce(val) {
      this.reduceButton = val;
      this.setSidebarWidth();
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        if (this.windowWidth < 992) this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'md');else this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'lg');
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        if (this.reduceButton) this.reduce = false; // this.reduceButton = false;

        this.showCloseButton = true;
        this.clickNotClose = false;
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
      } else {
        this.$store.commit('UPDATE_WINDOW_BREAKPOINT', 'xl');
        if (this.reduceButton) this.reduce = true;else this.reduce = false;
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
        if (this.reduceButton && !this.isMouseEnter) this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', true);else this.$store.commit('UPDATE_SIDEBAR_ITEMS_MIN', false);
        this.clickNotClose = true;
        this.showCloseButton = false;
        if (this.reduceSidebar) this.$store.dispatch('updateSidebarWidth', 'reduced');else this.$store.dispatch('updateSidebarWidth', 'default');
      }
    },
    psSectionScroll: function psSectionScroll() {
      if (this.$refs.mainSidebarPs.$el.scrollTop > 0) this.showShadowBottom = true;else this.showShadowBottom = false;
    },
    onSwipeLeft: function onSwipeLeft() {
      if (this.isSidebarActive && this.showCloseButton) this.isSidebarActive = false;
    },
    onSwipeRightSidebarSwipeArea: function onSwipeRightSidebarSwipeArea() {
      if (!this.isSidebarActive && this.showCloseButton) this.isSidebarActive = true;
    }
  },
  components: {
    VxSidebarGroup: _VxSidebarGroup_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    VxSidebarItem: _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    VuePerfectScrollbar: vue_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_0___default.a
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      window.addEventListener('resize', _this2.handleWindowResize);
    });
    this.setSidebarWidth();
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('resize', this.handleWindowResize);
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: 'vx-sidebar-group',
  props: {
    openHover: {
      "default": false,
      type: Boolean
    },
    open: {
      "default": false,
      type: Boolean
    },
    group: {
      type: Object
    },
    groupIndex: {
      type: Number
    }
  },
  data: function data() {
    return {
      maxHeight: '0px',
      openItems: false
    };
  },
  computed: {
    sidebarItemsMin: function sidebarItemsMin() {
      return this.$store.state.sidebarItemsMin;
    },
    styleItems: function styleItems() {
      return {
        maxHeight: this.maxHeight
      };
    },
    itemIcon: function itemIcon() {
      return function (index) {
        if (!((index.match(/\./g) || []).length > 1)) return "CircleIcon";
      };
    },
    isGroupActive: function isGroupActive() {
      var _this = this;

      return function (sidebarItem) {
        var path = _this.$route.fullPath;
        var open = false;

        var func = function func(sidebarItem) {
          if (sidebarItem.submenu) {
            sidebarItem.submenu.forEach(function (item) {
              if (path == item.url) {
                open = true;
              } else if (item.submenu) {
                func(item);
              }
            });
          }
        };

        func(sidebarItem);
        return open;
      };
    }
  },
  watch: {
    // OPEN & CLOSES DROPDOWN ON ROUTE CHANGE
    '$route': function $route() {
      var _this2 = this;

      if (this.sidebarItemsMin) return;
      var scrollHeight = this.scrollHeight;

      if (this.openItems && !this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = "".concat(0, "px");
        }, 50);
      } else if (this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this2.maxHeight = 'none';
        }, 300);
      }
    },
    maxHeight: function maxHeight() {
      this.openItems = this.maxHeight != '0px';
    },
    // OPEN AND CLOSES DROPDOWN MENU ON SIDEBAR COLLAPSE AND DEFAULT VIEW
    '$store.state.sidebarItemsMin': function $storeStateSidebarItemsMin(val) {
      var _this3 = this;

      var scrollHeight = this.$refs.items.scrollHeight;

      if (!val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = 'none';
        }, 300);
      } else {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = '0px';
        }, 50);
      }

      if (val && this.open) {
        this.maxHeight = "".concat(scrollHeight, "px");
        setTimeout(function () {
          _this3.maxHeight = '0px';
        }, 250);
      }
    }
  },
  methods: {
    callPopup: function callPopup(slug) {
      this.$emit('show-popup', slug);
    },
    clickGroup: function clickGroup() {
      var _this4 = this;

      if (!this.openHover) {
        var thisScrollHeight = this.$refs.items.scrollHeight;

        if (this.maxHeight == '0px') {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = 'none';
          }, 300);
        } else {
          this.maxHeight = "".concat(thisScrollHeight, "px");
          setTimeout(function () {
            _this4.maxHeight = "".concat(0, "px");
          }, 50);
        }

        this.$parent.$children.map(function (child) {
          if (child.isGroupActive) {
            if (child !== _this4 && !child.open && child.maxHeight != '0px') {
              setTimeout(function () {
                child.maxHeight = "".concat(0, "px");
              }, 50);
            }
          }
        });
      }
    },
    mouseover: function mouseover() {
      if (this.openHover) {
        var scrollHeight = this.$refs.items.scrollHeight;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    },
    mouseout: function mouseout() {
      if (this.openHover) {
        var scrollHeight = 0;
        this.maxHeight = "".concat(scrollHeight, "px");
      }
    }
  },
  components: {
    VxSidebarItem: _VxSidebarItem_vue__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  mounted: function mounted() {
    this.openItems = this.open;

    if (this.open) {
      this.maxHeight = 'none';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
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
  name: 'VxSidebarItem',
  props: {
    icon: {
      "default": "",
      type: String
    },
    iconSmall: {
      "default": false,
      type: Boolean
    },
    iconPack: {
      "default": 'material-icons',
      type: String
    },
    href: {
      "default": '#',
      type: String
    },
    to: {
      "default": null,
      type: String
    },
    slug: {
      "default": null,
      type: String
    },
    index: {
      "default": null,
      type: [String, Number]
    },
    featherIcon: {
      "default": true,
      type: Boolean
    },
    target: {
      "default": '_self',
      type: String
    },
    isDisabled: {
      "default": false,
      type: Boolean
    }
  },
  data: function data() {
    return {
      activeLink: false
    };
  },
  watch: {
    '$route': function $route() {
      this.CheckIsActive();
    }
  },
  methods: {
    CheckIsActive: function CheckIsActive() {
      if (this.to) {
        if (this.to == this.$router.path && this.to || this.$route.meta.parent == this.slug) this.activeLink = true;else this.activeLink = false; // if (this.$route.path.slice(1).includes(this.to.slice(1)) && this.to.slice(1)) this.activeLink = true
        // else this.activeLink = false
      }
    },
    callPopup: function callPopup() {
      this.$emit('show-popup', this.slug);
    }
  },
  updated: function updated() {
    this.CheckIsActive();
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/VxSidebar.vue */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue");
/* harmony import */ var _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TheNavbar.vue */ "./resources/js/src/layouts/components/TheNavbar.vue");
/* harmony import */ var _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/TheFooter.vue */ "./resources/js/src/layouts/components/TheFooter.vue");
/* harmony import */ var _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/../themeConfig.js */ "./resources/js/themeConfig.js");
/* harmony import */ var _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/layouts/components/vx-sidebar/sidebarItems.js */ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js");
/* harmony import */ var vue_backtotop__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! vue-backtotop */ "./node_modules/vue-backtotop/src/main.js");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");


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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
      navbarType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].navbarType || 'floating',
      navbarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].navbarColor || '#fff',
      footerType: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].footerType || 'static',
      routerTransition: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].routerTransition || 'none',
      sideBarColor: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].sideBarColor,
      isNavbarDark: false,
      routeTitle: this.$route.meta.pageTitle,
      sidebarItems: _layouts_components_vx_sidebar_sidebarItems_js__WEBPACK_IMPORTED_MODULE_5__["default"],
      disableCustomizer: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].disableCustomizer,
      windowWidth: window.innerWidth,
      //width of windows
      hideScrollToTop: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].hideScrollToTop,
      disableThemeTour: _themeConfig_js__WEBPACK_IMPORTED_MODULE_4__["default"].disableThemeTour,
      addsponsor: false,
      administratorsPopup: false,
      addRepresentativePopup: false,
      addSubCategoryPopUp: false,
      addCategoryPopUp: false,
      exportMembersPopup: false,
      title: '',
      subtitle: '',
      parent: '',
      first_name: '',
      last_name: '',
      email: '',
      user_name: '',
      password: '',
      company_name: '',
      cell: '',
      work: '',
      address: '',
      region: '',
      city: '',
      state: '',
      country: '',
      zipcode: '',
      firstname: '',
      lastname: '',
      adminEmail: '',
      adminPassword: '',
      username: '',
      contactno: '',
      rep_firstname: '',
      rep_lastname: '',
      rep_email: '',
      rep_password: '',
      rep_username: '',
      rep_contactno: '',
      extractType: '',
      exportColumns: [],
      selectedSite: ''
    };
  },
  watch: {
    '$route': function $route() {
      this.routeTitle = this.$route.meta.pageTitle;
    },
    isThemeDark: function isThemeDark(val) {
      if (this.navbarColor == "#fff" && val) {
        this.updateNavbarColor("#10163a");
      } else {
        this.updateNavbarColor("#fff");
      }
    }
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapState"])('categories', ['categories']), {
    sites: function sites() {
      return this.$store.state.sites;
    },
    isAppPage: function isAppPage() {
      if (this.$route.path.includes('/apps/')) return true;else return false;
    },
    isThemeDark: function isThemeDark() {
      return this.$store.state.theme == 'dark';
    },
    sidebarWidth: function sidebarWidth() {
      return this.$store.state.sidebarWidth;
    },
    bodyOverlay: function bodyOverlay() {
      return this.$store.state.bodyOverlay;
    },
    contentAreaClass: function contentAreaClass() {
      if (this.sidebarWidth == "default") return "content-area-default";else if (this.sidebarWidth == "reduced") return "content-area-reduced";else if (this.sidebarWidth) return "content-area-full";
    },
    navbarClasses: function navbarClasses() {
      return {
        'navbar-hidden': this.navbarType == 'hidden',
        'navbar-sticky': this.navbarType == 'sticky',
        'navbar-static': this.navbarType == 'static',
        'navbar-floating': this.navbarType == 'floating'
      };
    },
    regions: function regions() {
      return this.$store.state.regions;
    },
    footerClasses: function footerClasses() {
      return {
        'footer-hidden': this.footerType == 'hidden',
        'footer-sticky': this.footerType == 'sticky',
        'footer-static': this.footerType == 'static'
      };
    }
  }),
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_7__["mapActions"])({
    submitCategory: 'categories/submitCategory',
    submitSubCategory: 'categories/submitSubCategory',
    getCategories: 'categories/getCategories',
    submitExportMember: 'sponsors/submitExportMember'
  }), {
    showPopup: function showPopup(slug) {
      var slug = slug.replace('-', '');
      this.$data[slug] = true;
    },
    exportMembers: function exportMembers(e, scope) {
      var _this = this;

      self = this;
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          /*this.$vs.loading({
              text: 'Processing...'
          });*/
          var fd = new FormData(_this.$refs.exportMembersForm);

          _.each(_this.exportColumns, function (o, i) {
            fd.append("exportColumns[".concat(i, "][excelCol]"), o.excelCol);
            fd.append("exportColumns[".concat(i, "][dbCol]"), o.dbCol);
          });

          fd.append('extractType', _this.extractType);
          fd.append('site', _this.selectedSite);
          var data = {
            fd: fd,
            notify: self.$vs.notify,
            closeloading: _this.$vs.loading.close
          };
          self.submitExportMember(data).then(function (response) {
            _this.exportMembersPopup = false;
            var a = document.createElement("a");
            a.href = response.data.file;
            a.download = response.data.name;
            document.body.appendChild(a);
            a.click();
            a.remove();
          });
        }
      });
    },
    addCategory: function addCategory(e, scope) {
      var _this2 = this;

      self = this;
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this2.$vs.loading({
            text: 'Processing...'
          });

          var fd = new FormData(_this2.$refs.addCategoryForm);
          var data = {
            form: fd,
            notify: self.$vs.notify,
            closeloading: _this2.$vs.loading.close
          };
          self.submitCategory(data).then(function (res) {
            if (res.data.status) {
              _this2.addCategoryPopUp = false;
              _this2.title = null;
              e.target.reset();

              _this2.getCategories();
            }
          });
        }
      });
    },
    addSubCategory: function addSubCategory(e, scope) {
      var _this3 = this;

      self = this;
      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this3.$vs.loading({
            text: 'Processing...'
          });

          var fd = new FormData(_this3.$refs.addSubCategoryForm);
          fd.append('parent', _this3.parent);
          var data = {
            form: fd,
            notify: self.$vs.notify,
            closeloading: _this3.$vs.loading.close
          };

          _this3.submitSubCategory(data).then(function (res) {
            if (res.data.status == 'true') {
              _this3.addCategoryPopUp = false;
              _this3.title = null;
              e.target.reset();

              _this3.getSubCategories(_this3.$route.params.id);

              _this3.getCategories();
            }
          });
        }
      });
    },
    addSponsor: function addSponsor(e, scope) {
      var _this4 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this4.$vs.loading();

          var fd = new FormData(_this4.$refs.addsponsor);
          var data = {
            fd: fd,
            url: 'admin/ajax/add-sponser',
            formType: 'sponsor',
            closeLoader: _this4.$vs.loading.close,
            notify: _this4.$vs.notify
          };

          _this4.$store.dispatch('createNewAccount', data).then(function (res) {
            if (res.data.status) {
              _this4.user_name = _this4.first_name = _this4.last_name = _this4.email = _this4.cell = _this4.password = _this4.zipcode = _this4.company_name = _this4.work = _this4.address = _this4.city = _this4.region = _this4.state = _this4.country = '';
              e.target.reset();

              _this4.$validator.reset();

              _this4.addsponsor = false;
            }
          }); // this.create()

        }
      });
    },
    addAdmin: function addAdmin(e, scope) {
      var _this5 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this5.$vs.loading();

          var fd = new FormData(_this5.$refs.addAdminForm);
          var data = {
            fd: fd,
            url: 'admin/ajax/add-admin',
            formType: 'admin',
            closeLoader: _this5.$vs.loading.close,
            notify: _this5.$vs.notify
          };

          _this5.$store.dispatch('createNewAccount', data).then(function (res) {
            if (res.data.status) {
              _this5.username = _this5.firstname = _this5.lastname = _this5.adminEmail = _this5.contactno = _this5.adminPassword = '';
              e.target.reset();

              _this5.$validator.reset();

              _this5.administratorsPopup = false;
            }
          }); // this.create()

        }
      });
    },
    addRepresentative: function addRepresentative(e, scope) {
      var _this6 = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          _this6.$vs.loading();

          var fd = new FormData(_this6.$refs.addRepresentativeForm);
          var data = {
            fd: fd,
            formType: 'representative',
            url: 'admin/ajax/add-representative',
            closeLoader: _this6.$vs.loading.close,
            notify: _this6.$vs.notify
          };

          _this6.$store.dispatch('createNewAccount', data).then(function (res) {
            if (res.data.status) {
              _this6.rep_username = _this6.rep_firstname = _this6.rep_lastname = _this6.rep_email = _this6.rep_contactno = _this6.rep_password = '';
              e.target.reset();

              _this6.$validator.reset();

              _this6.addRepresentativePopup = false;
            }
          }); // this.create()

        }
      });
    },
    changeRouteTitle: function changeRouteTitle(title) {
      this.routeTitle = title;
    },
    updateNavbarColor: function updateNavbarColor(val) {
      this.navbarColor = val;
      if (val == "#fff") this.isNavbarDark = false;else this.isNavbarDark = true;
    },
    handleWindowResize: function handleWindowResize(event) {
      this.windowWidth = event.currentTarget.innerWidth;
      this.setSidebarWidth();
    },
    setSidebarWidth: function setSidebarWidth() {
      if (this.windowWidth < 1200) {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', false);
        this.$store.dispatch('updateSidebarWidth', 'no-sidebar');
        this.disableThemeTour = true;
      } else if (this.windowWidth < 1200) {
        this.$store.dispatch('updateSidebarWidth', 'reduced');
      } else {
        this.$store.commit('TOGGLE_IS_SIDEBAR_ACTIVE', true);
      }
    },
    toggleHideScrollToTop: function toggleHideScrollToTop(val) {
      this.hideScrollToTop = val;
    }
  }),
  components: {
    VxSidebar: _layouts_components_vx_sidebar_VxSidebar_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    TheNavbar: _components_TheNavbar_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    TheFooter: _components_TheFooter_vue__WEBPACK_IMPORTED_MODULE_3__["default"],
    BackToTop: vue_backtotop__WEBPACK_IMPORTED_MODULE_6__["default"]
  },
  created: function created() {
    var _this7 = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _this7.$store.dispatch('getSites');

            case 2:
              _this7.$store.dispatch('fetchRegions');

              _this7.setSidebarWidth();

              if (_this7.categories.length == 0) {
                _this7.getCategories();
              }

              if (_this7.navbarColor == "#fff" && _this7.isThemeDark) {
                _this7.updateNavbarColor("#10163a");
              } else {
                _this7.updateNavbarColor(_this7.navbarColor);
              }

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n    File Name: vxAutoSuggest.scss\n    Description: Styles for vx-auto-suggest component. Imported in VxAutoSuggest.vue file\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vx-auto-suggest {\n  position: relative;\n}\n.vx-auto-suggest .vs-input .vs-con-input .vs-inputx {\n  z-index: 10;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list {\n  position: absolute;\n  background: #fff;\n  width: 100%;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion {\n  padding: 0.8rem 1rem;\n}\n.vx-auto-suggest .auto-suggest-suggestions-list .auto-suggest__suggestion.vx-auto-suggest__current-selected {\n  background: #F1F1F1;\n}\n.navbar-sticky .vx-auto-suggest .auto-suggest-suggestions-list {\n  margin-left: 0.5rem;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxSidebar.scss\n  Description: Styles for vx-sidebar component. Imported in VxSidebar.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*=========================================================================================\n    File Name: _variables.scss\n    Description: partial- SCSS varibales\n    ----------------------------------------------------------------------------------------\n    Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n      Author: Pixinvent\n    Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n\n/*========================================================\n        SPACING\n=========================================================*/\n\n/*========================================================\n        COLORS\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        TYPOGRAPHY\n=========================================================*/\n\n/*========================================================\n        DARK THEME\n=========================================================*/\n.main-menu-sidebar {\n  white-space: nowrap;\n}\n.main-menu-sidebar .vs-sidebar--background {\n  z-index: 51000;\n}\n.main-menu-sidebar .vs-sidebar {\n  z-index: 51000;\n  position: fixed;\n}\n.main-menu-sidebar .vs-sidebar .vs-sidebar--items {\n  padding: 0;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce {\n  max-width: 80px;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce:hover {\n  box-shadow: 0 15px 30px 0 rgba(0, 0, 0, 0.11), 0 5px 15px 0 rgba(0, 0, 0, 0.08) !important;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce:hover:not(.vs-sidebar-reduceNotRebound):not(.vs-sidebar-reduceNotHoverExpand) .vs-sidebar-group .group-header i {\n  display: block;\n}\n.main-menu-sidebar .vs-sidebar.vs-sidebar-reduce .vs-sidebar-group .group-header i {\n  display: none;\n}\n.main-menu-sidebar .header-sidebar {\n  padding: 20px 19px 16px 23px;\n  width: 100%;\n}\n.main-menu-sidebar .header-sidebar .logo img {\n  padding: 4px 0;\n}\n.main-menu-sidebar .header-sidebar .logo .logo-text {\n  font-size: 22px;\n  font-weight: 600;\n  color: #7367F0;\n  -webkit-animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n          animation: 0.3s cubic-bezier(0.25, 0.8, 0.25, 1) 0s normal forwards 1 fadein;\n}\n.main-menu-sidebar .header-sidebar .feather-icon svg {\n  color: #7367F0;\n}\n.main-menu-sidebar .shadow-bottom {\n  position: absolute;\n  z-index: 2;\n  height: 60px;\n  width: 100%;\n  pointer-events: none;\n  margin-top: -1.3rem;\n  -webkit-filter: blur(5px);\n          filter: blur(5px);\n  background: linear-gradient(white 41%, rgba(255, 255, 255, 0.11) 95%, rgba(255, 255, 255, 0) 100%);\n}\n.main-menu-sidebar .scroll-area--main-sidebar {\n  position: relative;\n  margin: auto;\n  width: 100%;\n  height: calc(100vh - 69px);\n}\n.main-menu-sidebar .scroll-area--main-sidebar > .vs-sidebar-group {\n  padding: 0 15px;\n}\n.main-menu-sidebar .scroll-area--main-sidebar > .vs-sidebar--item {\n  padding: 0 15px;\n}\n.main-menu-sidebar .navigation-header {\n  font-size: 0.9rem;\n  display: block;\n  margin-top: 2rem;\n  margin-bottom: 0.8rem;\n  margin-left: 2.2rem;\n  font-weight: 500;\n  text-transform: uppercase;\n  color: #999;\n}\n.main-menu-sidebar .feather-icon {\n  color: #565656;\n  margin-right: 14px;\n}\n.main-menu-sidebar .feather-icon .feather {\n  width: 20px;\n  height: 20px;\n}\n.main-menu-sidebar .con-vs-chip {\n  min-height: 24px;\n  box-shadow: 0px 0px 7px 3px rgba(0, 0, 0, 0.1);\n}\n.main-menu-sidebar .con-vs-chip .vs-chip--text {\n  color: #fff;\n  font-size: 0.8rem;\n}\n.main-menu-sidebar .vs-sidebar--item {\n  transition: none;\n  overflow: visible !important;\n}\n.main-menu-sidebar .vs-sidebar--item:hover a {\n  color: inherit;\n}\n.main-menu-sidebar .vs-sidebar--item:hover a > * {\n  transform: translateX(5px);\n}\n.main-menu-sidebar .vs-sidebar--item.vs-sidebar-item-active {\n  border-right: none !important;\n  font-weight: 400;\n  z-index: 1;\n  position: relative;\n}\n.main-menu-sidebar .vs-sidebar--item a {\n  font-size: 1rem;\n  transition: none;\n  border-radius: 4px;\n  opacity: unset;\n  color: #626262;\n  padding: 10px 15px;\n}\n.main-menu-sidebar .vs-sidebar--item a > * {\n  transition: transform 0.25s ease;\n}\n.main-menu-sidebar .vs-sidebar--item a span {\n  font-size: 15px;\n}\n.main-menu-sidebar .vs-sidebar--item.disabled-item a span {\n  color: #e2e2e2;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active {\n  background: linear-gradient(118deg, rgba(var(--vs-primary), 1), rgba(var(--vs-primary), 0.7));\n  font-weight: 400;\n  box-shadow: 0px 0px 10px 1px rgba(var(--vs-primary), 0.7);\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active .feather-icon {\n  color: #fff;\n}\n.main-menu-sidebar .vs-sidebar--item .router-link-active span {\n  color: #fff;\n}\n#sidebar-demo .vs-sidebar {\n  z-index: 52000;\n}\n#sidebar-demo .vs-sidebar-staticPosition {\n  z-index: 10000;\n}\n#sidebar-demo #parentx-demo-7 .parentx:not(.show-custom-sidebar) .vs-sidebar {\n  display: none;\n  z-index: 1 !important;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*=========================================================================================\n  File Name: vxSidebarGroup.scss\n  Description: Styles for vx-sidebar-group component. Imported in VxSidebarGroup.vue file\n  ----------------------------------------------------------------------------------------\n  Item Name: Vuesax Admin - VueJS Dashboard Admin Template\n  Author: Pixinvent\n  Author URL: http://www.themeforest.net/user/pixinvent\n==========================================================================================*/\n.vs-sidebar-group {\n  overflow: hidden;\n}\n.vs-sidebar-group .group-header {\n  transition: all 0.5s ease;\n  font-size: 15px;\n  padding: 10px 15px;\n  cursor: pointer;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow {\n  position: absolute !important;\n  right: 8px;\n  top: 12px;\n  transition: all 0.2s ease-out;\n  transform: rotate(0deg);\n  display: inline-block;\n}\n.vs-sidebar-group .group-header .feather-grp-header-arrow.rotate90 {\n  transform: rotate(90deg);\n}\n.vs-sidebar-group .group-header > * {\n  transition: all 0.25s ease;\n}\n.vs-sidebar-group .group-header:hover > * {\n  transform: translateX(5px);\n}\n.vs-sidebar-group .group-header .con-vs-chip {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-icon {\n  font-size: 1.5rem;\n}\n.vs-sidebar-group:hover > .group-header {\n  transform: unset;\n}\n.vs-sidebar-group .vs-sidebar-group .group-header {\n  padding-left: 20px;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .group-header {\n  cursor: pointer;\n  background: #f6f6f6;\n  border-radius: 6px;\n  margin-bottom: 7px;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items {\n  padding-left: 0;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item span {\n  padding-left: 2rem;\n  padding: 0;\n}\n.vs-sidebar-group.vs-sidebar-group-open > .vs-sidebar-group-items .vs-sidebar--item:last-child {\n  border-bottom: 0px;\n}\n.vs-sidebar-group.vs-sidebar-group-open .vs-sidebar-group {\n  overflow: visible;\n}\n.vs-sidebar-group.vs-sidebar-group-active > .group-header {\n  background: #f6f6f6;\n  border-radius: 6px;\n}\n.vs-sidebar-group .vs-sidebar-group-items {\n  opacity: 0;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a {\n  padding: 10px 15px 10px 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item a .feather-icon {\n  margin-right: 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar--item:last-child a {\n  margin-bottom: 0;\n}\n.vs-sidebar-group .vs-sidebar-group-items li:last-child {\n  padding-bottom: 7px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group span .feather-icon {\n  margin-right: 20px;\n}\n.vs-sidebar-group .vs-sidebar-group-items .vs-sidebar-group .feather-icon {\n  margin-right: 0px;\n}\n.vs-sidebar-group.disabled-item span {\n  color: #e2e2e2;\n}", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "#page-loader {\n  width: 45px;\n  height: 45px;\n  margin: auto;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  border-radius: 5px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css&":
/*!****************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-select {\n  width: 100%;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--8-2!./node_modules/sass-loader/dist/cjs.js??ref--8-3!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&":
/*!*******************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css& ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \************************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "vx-auto-suggest" }, [
    _c(
      "div",
      { staticClass: "flex items-center relative" },
      [
        _c("vs-input", {
          ref: "input",
          staticClass: "z-50",
          class: _vm.inputClassses,
          attrs: {
            placeholder: _vm.placeholder,
            "icon-pack": "feather",
            icon: "icon-search",
            "icon-no-border": ""
          },
          on: {
            keyup: [
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "esc", 27, $event.key, [
                    "Esc",
                    "Escape"
                  ])
                ) {
                  return null
                }
                return _vm.escPressed($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "up", 38, $event.key, [
                    "Up",
                    "ArrowUp"
                  ])
                ) {
                  return null
                }
                return _vm.increaseIndex(false)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "down", 40, $event.key, [
                    "Down",
                    "ArrowDown"
                  ])
                ) {
                  return null
                }
                return _vm.increaseIndex($event)
              },
              function($event) {
                if (
                  !$event.type.indexOf("key") &&
                  _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                ) {
                  return null
                }
                return _vm.suggestionSelected($event)
              }
            ],
            focus: _vm.updateInputFocus,
            blur: function($event) {
              return _vm.updateInputFocus(false)
            }
          },
          model: {
            value: _vm.searchQuery,
            callback: function($$v) {
              _vm.searchQuery = $$v
            },
            expression: "searchQuery"
          }
        })
      ],
      1
    ),
    _vm._v(" "),
    _c(
      "ul",
      {
        ref: "scrollContainer",
        staticClass:
          "auto-suggest-suggestions-list z-50 rounded-lg mt-2 shadow-lg overflow-hidden",
        class: { hidden: !_vm.inputFocused },
        attrs: { tabindex: "-1" },
        on: {
          mouseenter: function($event) {
            _vm.insideSuggestions = true
          },
          mouseleave: function($event) {
            _vm.insideSuggestions = false
          },
          focus: _vm.updateInputFocus,
          blur: function($event) {
            return _vm.updateInputFocus(false)
          }
        }
      },
      _vm._l(_vm.filteredData, function(suggestion, index) {
        return _c(
          "li",
          {
            key: index,
            ref: "option",
            refInFor: true,
            staticClass:
              "auto-suggest__suggestion flex items-center justify-between py-3 cursor-pointer",
            class: {
              "vx-auto-suggest__current-selected": _vm.currentSelected == index,
              "pointer-events-none": suggestion.index < 0
            },
            on: {
              mouseenter: function($event) {
                _vm.currentSelected = index
              },
              click: _vm.suggestionSelected
            }
          },
          [
            _c(
              "div",
              { staticClass: "flex items-center" },
              [
                _c("feather-icon", {
                  staticClass: "mr-4",
                  attrs: { icon: suggestion.labelIcon, svgClasses: "h-5 w-5" }
                }),
                _vm._v(" "),
                _c("span", [_vm._v(_vm._s(suggestion.label))])
              ],
              1
            ),
            _vm._v(" "),
            _vm.showAction
              ? _c("feather-icon", {
                  attrs: {
                    icon: _vm.data.actionIcon,
                    svgClasses: [
                      _vm.actionClasses(suggestion.highlightAction),
                      "h-5 w-5"
                    ]
                  },
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.actionClicked($event)
                    }
                  }
                })
              : _vm._e()
          ],
          1
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true& ***!
  \****************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function(_h, _vm) {
  var _c = _vm._c
  return _c(
    "footer",
    { staticClass: "the-footer flex-wrap justify-between", class: _vm.classes },
    [
      _c("span", [
        _vm._v(
          "COPYRIGHT @ " +
            _vm._s(new Date().getFullYear()) +
            " All rights Reserved"
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \************************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "relative" }, [
    _c(
      "div",
      { staticClass: "vx-navbar-wrapper" },
      [
        _c(
          "vs-navbar",
          {
            staticClass: "vx-navbar navbar-custom",
            class: _vm.classObj,
            attrs: { color: _vm.navbarColor }
          },
          [
            _c("feather-icon", {
              staticClass: "sm:inline-flex xl:hidden cursor-pointer mr-1",
              attrs: { icon: "MenuIcon" },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.showSidebar($event)
                }
              }
            }),
            _vm._v(" "),
            _vm.breakpoint != "md"
              ? [
                  _c(
                    "ul",
                    { staticClass: "vx-navbar__starred-pages" },
                    [
                      _c(
                        "draggable",
                        {
                          staticClass: "flex cursor-move",
                          attrs: { group: { name: "pinList" } },
                          model: {
                            value: _vm.starredPagesLimited,
                            callback: function($$v) {
                              _vm.starredPagesLimited = $$v
                            },
                            expression: "starredPagesLimited"
                          }
                        },
                        _vm._l(_vm.starredPagesLimited, function(page) {
                          return _c(
                            "li",
                            { key: page.url, staticClass: "starred-page" },
                            [
                              _c(
                                "vx-tooltip",
                                {
                                  attrs: {
                                    text: page.label,
                                    position: "bottom",
                                    delay: ".3s"
                                  }
                                },
                                [
                                  _c("feather-icon", {
                                    staticClass: "p-2 cursor-pointer",
                                    attrs: {
                                      svgClasses: "h-6 w-6",
                                      icon: page.labelIcon
                                    },
                                    on: {
                                      click: function($event) {
                                        return _vm.$router.push(page.url)
                                      }
                                    }
                                  })
                                ],
                                1
                              )
                            ],
                            1
                          )
                        }),
                        0
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.starredPagesMore.length
                    ? _c(
                        "div",
                        {
                          staticClass: "vx-navbar__starred-pages--more-dropdown"
                        },
                        [
                          _c(
                            "vs-dropdown",
                            {
                              attrs: {
                                "vs-custom-content": "",
                                "vs-trigger-click": ""
                              }
                            },
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer p-2",
                                attrs: {
                                  icon: "ChevronDownIcon",
                                  svgClasses: "h-4 w-4"
                                }
                              }),
                              _vm._v(" "),
                              _c("vs-dropdown-menu", [
                                _c(
                                  "ul",
                                  {
                                    staticClass:
                                      "vx-navbar__starred-pages-more--list"
                                  },
                                  [
                                    _c(
                                      "draggable",
                                      {
                                        staticClass: "cursor-move",
                                        attrs: { group: { name: "pinList" } },
                                        model: {
                                          value: _vm.starredPagesMore,
                                          callback: function($$v) {
                                            _vm.starredPagesMore = $$v
                                          },
                                          expression: "starredPagesMore"
                                        }
                                      },
                                      _vm._l(_vm.starredPagesMore, function(
                                        page
                                      ) {
                                        return _c(
                                          "li",
                                          {
                                            key: page.url,
                                            staticClass:
                                              "starred-page--more flex items-center cursor-pointer",
                                            on: {
                                              click: function($event) {
                                                return _vm.$router.push(
                                                  page.url
                                                )
                                              }
                                            }
                                          },
                                          [
                                            _c("feather-icon", {
                                              staticClass: "ml-2 mr-1",
                                              attrs: {
                                                svgClasses: "h-5 w-5",
                                                icon: page.labelIcon
                                              }
                                            }),
                                            _vm._v(" "),
                                            _c(
                                              "span",
                                              { staticClass: "px-2 pt-2 pb-1" },
                                              [_vm._v(_vm._s(page.label))]
                                            )
                                          ],
                                          1
                                        )
                                      }),
                                      0
                                    )
                                  ],
                                  1
                                )
                              ])
                            ],
                            1
                          )
                        ],
                        1
                      )
                    : _vm._e()
                ]
              : _vm._e(),
            _vm._v(" "),
            _c("vs-spacer"),
            _vm._v(" "),
            _c("div", {
              staticClass: "vs-con-loading__container",
              attrs: { id: "page-loader" }
            }),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "the-navbar__user-meta flex items-center" },
              [
                _c(
                  "div",
                  { staticClass: "text-right leading-tight hidden sm:block" },
                  [
                    _c("p", { staticClass: "font-semibold" }, [
                      _vm._v("Administrator")
                    ]),
                    _vm._v(" "),
                    _c("small", [_vm._v("Available")])
                  ]
                ),
                _vm._v(" "),
                _c(
                  "vs-dropdown",
                  {
                    staticClass: "cursor-pointer",
                    attrs: { "vs-custom-content": "", "vs-trigger-click": "" }
                  },
                  [
                    _c(
                      "div",
                      { staticClass: "con-img ml-3" },
                      [
                        _c("vs-avatar", {
                          staticClass:
                            "rounded-full shadow-md cursor-pointer block",
                          attrs: {
                            "icon-pack": "feather",
                            icon: "icon-user",
                            size: "40px"
                          }
                        })
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-dropdown-menu",
                      { staticClass: "vx-navbar-dropdown" },
                      [
                        _c("ul", { staticStyle: { "min-width": "9rem" } }, [
                          _c(
                            "li",
                            {
                              staticClass:
                                "flex py-2 px-4 cursor-pointer hover:bg-primary hover:text-white",
                              on: {
                                click: function($event) {
                                  return _vm.letsLogout()
                                }
                              }
                            },
                            [
                              _c("feather-icon", {
                                attrs: {
                                  icon: "LogOutIcon",
                                  svgClasses: "w-4 h-4"
                                }
                              }),
                              _vm._v(" "),
                              _c("span", { staticClass: "ml-2" }, [
                                _vm._v("Logout")
                              ])
                            ],
                            1
                          )
                        ])
                      ]
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
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "parentx" },
    [
      _c(
        "vs-sidebar",
        {
          directives: [
            {
              name: "hammer",
              rawName: "v-hammer:swipe.left",
              value: _vm.onSwipeLeft,
              expression: "onSwipeLeft",
              arg: "swipe",
              modifiers: { left: true }
            }
          ],
          ref: "mainSidebar",
          staticClass: "sidebarx main-menu-sidebar items-no-padding",
          attrs: {
            parent: _vm.parent,
            hiddenBackground: _vm.clickNotClose,
            reduce: _vm.reduce,
            "default-index": "-1",
            "click-not-close": _vm.clickNotClose,
            "reduce-not-rebound": _vm.reduceNotRebound
          },
          model: {
            value: _vm.isSidebarActive,
            callback: function($$v) {
              _vm.isSidebarActive = $$v
            },
            expression: "isSidebarActive"
          }
        },
        [
          _c(
            "div",
            {
              style: { backgroundColor: _vm.sideBarColor + " !important" },
              on: {
                mouseenter: _vm.sidebarMouseEntered,
                mouseleave: _vm.sidebarMouseLeave
              }
            },
            [
              _c(
                "div",
                {
                  staticClass: "header-sidebar flex items-end justify-between",
                  attrs: { slot: "header" },
                  slot: "header"
                },
                [
                  _c("div", { staticClass: "logo flex items-center" }, [
                    _vm.logo
                      ? _c("img", {
                          staticClass: "w-100 mr-4 object-contain",
                          staticStyle: { height: "50px !important" },
                          attrs: {
                            draggable: "false",
                            src: _vm.logo,
                            alt: "logo"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.title
                      ? _c(
                          "span",
                          {
                            directives: [
                              {
                                name: "show",
                                rawName: "v-show",
                                value: _vm.isMouseEnter || !_vm.reduce,
                                expression: "isMouseEnter || !reduce"
                              }
                            ],
                            staticClass: "logo-text"
                          },
                          [_vm._v(_vm._s(_vm.title))]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c(
                    "div",
                    [
                      _vm.showCloseButton
                        ? [
                            _c("feather-icon", {
                              staticClass: "m-0 cursor-pointer",
                              attrs: { icon: "XIcon" },
                              on: {
                                click: function($event) {
                                  return _vm.$store.commit(
                                    "TOGGLE_IS_SIDEBAR_ACTIVE",
                                    false
                                  )
                                }
                              }
                            })
                          ]
                        : !_vm.showCloseButton && !_vm.sidebarItemsMin
                        ? [
                            _c("feather-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: !_vm.reduce,
                                  expression: "!reduce"
                                }
                              ],
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                icon: "DiscIcon",
                                "svg-classes": "stroke-current",
                                id: "btnSidebarToggler"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(true)
                                }
                              }
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.reduce,
                                  expression: "reduce"
                                }
                              ],
                              staticClass: "mr-0 cursor-pointer",
                              attrs: {
                                icon: "CircleIcon",
                                "svg-classes": "stroke-current",
                                id: "btnSidebarToggler"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.toggleReduce(false)
                                }
                              }
                            })
                          ]
                        : _vm._e()
                    ],
                    2
                  )
                ]
              ),
              _vm._v(" "),
              _c("div", {
                directives: [
                  {
                    name: "show",
                    rawName: "v-show",
                    value: _vm.showShadowBottom,
                    expression: "showShadowBottom"
                  }
                ],
                staticClass: "shadow-bottom"
              }),
              _vm._v(" "),
              _c(
                "VuePerfectScrollbar",
                {
                  ref: "mainSidebarPs",
                  staticClass: "scroll-area--main-sidebar pt-2",
                  attrs: { settings: _vm.settings },
                  on: { "ps-scroll-y": _vm.psSectionScroll }
                },
                [
                  _vm._l(_vm.sidebarItems, function(sidebarItem, index) {
                    return [
                      sidebarItem.header && !_vm.sidebarItemsMin
                        ? _c(
                            "span",
                            {
                              key: "header-" + index,
                              staticClass: "navigation-header truncate"
                            },
                            [_vm._v(_vm._s(sidebarItem.header))]
                          )
                        : !sidebarItem.header
                        ? [
                            [
                              [
                                !sidebarItem.submenu && sidebarItem.shouldPopup
                                  ? _c(
                                      "vx-sidebar-item",
                                      {
                                        key: "sidebarItem-" + index,
                                        ref: "sidebarLink",
                                        refInFor: true,
                                        attrs: {
                                          href: "javascript:void(0)",
                                          index: index,
                                          icon: sidebarItem.icon,
                                          isDisabled: sidebarItem.isDisabled,
                                          slug: sidebarItem.slug
                                        },
                                        on: { "show-popup": _vm.showPopup }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !_vm.sidebarItemsMin,
                                                expression: "!sidebarItemsMin"
                                              }
                                            ],
                                            staticClass: "truncate"
                                          },
                                          [_vm._v(_vm._s(sidebarItem.name))]
                                        ),
                                        _vm._v(" "),
                                        sidebarItem.tag &&
                                        (_vm.isMouseEnter || !_vm.reduce)
                                          ? _c(
                                              "vs-chip",
                                              {
                                                staticClass: "ml-auto",
                                                attrs: {
                                                  color: sidebarItem.tagColor
                                                }
                                              },
                                              [_vm._v(_vm._s(sidebarItem.tag))]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : !sidebarItem.submenu &&
                                    !sidebarItem.shouldPopup
                                  ? _c(
                                      "vx-sidebar-item",
                                      {
                                        key: "sidebarItem-" + index,
                                        ref: "sidebarLink",
                                        refInFor: true,
                                        attrs: {
                                          index: index,
                                          to:
                                            sidebarItem.slug != "external"
                                              ? sidebarItem.url
                                              : "",
                                          href:
                                            sidebarItem.slug == "external"
                                              ? sidebarItem.url
                                              : "",
                                          icon: sidebarItem.icon,
                                          target: sidebarItem.target,
                                          isDisabled: sidebarItem.isDisabled,
                                          slug: sidebarItem.slug
                                        }
                                      },
                                      [
                                        _c(
                                          "span",
                                          {
                                            directives: [
                                              {
                                                name: "show",
                                                rawName: "v-show",
                                                value: !_vm.sidebarItemsMin,
                                                expression: "!sidebarItemsMin"
                                              }
                                            ],
                                            staticClass: "truncate"
                                          },
                                          [_vm._v(_vm._s(sidebarItem.name))]
                                        ),
                                        _vm._v(" "),
                                        sidebarItem.tag &&
                                        (_vm.isMouseEnter || !_vm.reduce)
                                          ? _c(
                                              "vs-chip",
                                              {
                                                staticClass: "ml-auto",
                                                attrs: {
                                                  color: sidebarItem.tagColor
                                                }
                                              },
                                              [_vm._v(_vm._s(sidebarItem.tag))]
                                            )
                                          : _vm._e()
                                      ],
                                      1
                                    )
                                  : [
                                      _c("vx-sidebar-group", {
                                        key: "group-" + index,
                                        ref: "sidebarGrp",
                                        refInFor: true,
                                        attrs: {
                                          openHover: _vm.openGroupHover,
                                          group: sidebarItem,
                                          groupIndex: index,
                                          open: _vm.isGroupActive(sidebarItem)
                                        },
                                        on: { "show-popup": _vm.showPopup }
                                      })
                                    ]
                              ]
                            ]
                          ]
                        : _vm._e()
                    ]
                  })
                ],
                2
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      !_vm.isSidebarActive
        ? _c("div", {
            directives: [
              {
                name: "hammer",
                rawName: "v-hammer:swipe.right",
                value: _vm.onSwipeRightSidebarSwipeArea,
                expression: "onSwipeRightSidebarSwipeArea",
                arg: "swipe",
                modifiers: { right: true }
              }
            ],
            staticClass: "sidebar-swipe-area",
            attrs: { id: "sidebar-swipe-area" }
          })
        : _vm._e()
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vs-sidebar-group",
      class: [
        { "vs-sidebar-group-open": _vm.openItems },
        { "vs-sidebar-group-active": _vm.open },
        { "disabled-item pointer-events-none": _vm.group.isDisabled }
      ],
      on: { mouseover: _vm.mouseover, mouseout: _vm.mouseout }
    },
    [
      _c(
        "div",
        { staticClass: "group-header w-full", on: { click: _vm.clickGroup } },
        [
          _c(
            "span",
            { staticClass: "flex items-center w-full" },
            [
              _vm.group.icon || this.groupIndex > Math.floor(this.groupIndex)
                ? _c("feather-icon", {
                    attrs: {
                      icon: _vm.group.icon || "CircleIcon",
                      svgClasses: { "w-3 h-3": this.groupIndex % 1 != 0 }
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              _c(
                "span",
                {
                  directives: [
                    {
                      name: "show",
                      rawName: "v-show",
                      value: !_vm.sidebarItemsMin,
                      expression: "!sidebarItemsMin"
                    }
                  ],
                  staticClass: "truncate mr-3 select-none"
                },
                [_vm._v(_vm._s(_vm.group.name))]
              ),
              _vm._v(" "),
              _vm.group.tag && !_vm.sidebarItemsMin
                ? _c(
                    "vs-chip",
                    {
                      staticClass: "ml-auto mr-4",
                      attrs: { color: _vm.group.tagColor }
                    },
                    [_vm._v(_vm._s(_vm.group.tag))]
                  )
                : _vm._e()
            ],
            1
          ),
          _vm._v(" "),
          _c("feather-icon", {
            directives: [
              {
                name: "show",
                rawName: "v-show",
                value: !_vm.sidebarItemsMin,
                expression: "!sidebarItemsMin"
              }
            ],
            class: [{ rotate90: _vm.openItems }, "feather-grp-header-arrow"],
            attrs: { icon: "ChevronRightIcon", "svg-classes": "w-4 h-4" }
          }),
          _vm._v(" "),
          _c("span", { staticClass: "vs-sidebar--tooltip" }, [
            _vm._v(_vm._s(_vm.group.name))
          ])
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          ref: "items",
          staticClass: "vs-sidebar-group-items",
          style: _vm.styleItems
        },
        _vm._l(_vm.group.submenu, function(groupItem, index) {
          return _c(
            "li",
            { key: index },
            [
              groupItem.submenu
                ? _c("vx-sidebar-group", {
                    attrs: {
                      group: groupItem,
                      groupIndex: Number(_vm.groupIndex + "." + index),
                      open: _vm.isGroupActive(groupItem),
                      openHover: _vm.openHover
                    }
                  })
                : _vm._e(),
              _vm._v(" "),
              [
                !groupItem.submenu && groupItem.shouldPopup
                  ? _c(
                      "vx-sidebar-item",
                      {
                        attrs: {
                          index: _vm.groupIndex + "." + index,
                          href: "javascript:void(0)",
                          icon: groupItem.icon,
                          slug: groupItem.slug,
                          "icon-normal": "",
                          target: groupItem.target
                        },
                        on: { "show-popup": _vm.callPopup }
                      },
                      [
                        _c("span", { staticClass: "truncate" }, [
                          _vm._v(_vm._s(groupItem.name))
                        ]),
                        _vm._v(" "),
                        groupItem.tag
                          ? _c(
                              "vs-chip",
                              {
                                staticClass: "ml-auto",
                                attrs: { color: groupItem.tagColor }
                              },
                              [_vm._v(_vm._s(groupItem.tag))]
                            )
                          : _vm._e()
                      ],
                      1
                    )
                  : _c(
                      "vx-sidebar-item",
                      {
                        attrs: {
                          index: _vm.groupIndex + "." + index,
                          to: groupItem.url,
                          icon: groupItem.icon,
                          slug: groupItem.slug,
                          "icon-normal": "",
                          target: groupItem.target
                        }
                      },
                      [
                        _c("span", { staticClass: "truncate" }, [
                          _vm._v(_vm._s(groupItem.name))
                        ]),
                        _vm._v(" "),
                        groupItem.tag
                          ? _c(
                              "vs-chip",
                              {
                                staticClass: "ml-auto",
                                attrs: { color: groupItem.tagColor }
                              },
                              [_vm._v(_vm._s(groupItem.tag))]
                            )
                          : _vm._e()
                      ],
                      1
                    )
              ]
            ],
            2
          )
        }),
        0
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \***************************************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "vs-sidebar--item",
      class: [
        { "vs-sidebar-item-active": _vm.activeLink },
        { "disabled-item pointer-events-none": _vm.isDisabled }
      ]
    },
    [
      _vm.to
        ? _c(
            "router-link",
            {
              class: [{ "router-link-active": _vm.activeLink }],
              attrs: { to: _vm.to, target: _vm.target, exact: "" }
            },
            [
              !_vm.featherIcon
                ? _c("vs-icon", {
                    attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                  })
                : _c("feather-icon", {
                    class: { "w-3 h-3": _vm.iconSmall },
                    attrs: { icon: _vm.icon }
                  }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
        : _c(
            "a",
            {
              attrs: { target: _vm.target, href: _vm.href },
              on: { click: _vm.callPopup }
            },
            [
              !_vm.featherIcon
                ? _c("vs-icon", {
                    attrs: { "icon-pack": _vm.iconPack, icon: _vm.icon }
                  })
                : _c("feather-icon", {
                    class: { "w-3 h-3": _vm.iconSmall },
                    attrs: { icon: _vm.icon }
                  }),
              _vm._v(" "),
              _vm._t("default")
            ],
            2
          )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*************************************************************************************************************************************************************************************************************/
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
    {
      staticClass: "layout--main",
      class: [
        _vm.navbarClasses,
        _vm.footerClasses,
        { "app-page": _vm.isAppPage }
      ]
    },
    [
      _c("vx-sidebar", {
        attrs: {
          sideBarColor: _vm.sideBarColor,
          sidebarItems: _vm.sidebarItems,
          logo: "/public/images/logo.png",
          title: "",
          parent: ".layout--main"
        },
        on: { "show-popup": _vm.showPopup }
      }),
      _vm._v(" "),
      _c(
        "div",
        {
          class: [_vm.contentAreaClass, { "show-overlay": _vm.bodyOverlay }],
          attrs: { id: "content-area" }
        },
        [
          _c("div", { attrs: { id: "content-overlay" } }),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "content-wrapper" },
            [
              _c("the-navbar", {
                class: [
                  { "text-white": _vm.isNavbarDark && !_vm.isThemeDark },
                  { "text-base": !_vm.isNavbarDark && _vm.isThemeDark }
                ],
                attrs: { navbarColor: _vm.navbarColor }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "router-view" }, [
                _c(
                  "div",
                  {
                    staticClass: "router-content",
                    class: { "mt-0": _vm.navbarType == "hidden" }
                  },
                  [
                    _c(
                      "transition",
                      { attrs: { name: _vm.routerTransition } },
                      [
                        _vm.$route.meta.breadcrumb || _vm.$route.meta.pageTitle
                          ? _c(
                              "div",
                              {
                                staticClass:
                                  "router-header flex flex-wrap items-center mb-6"
                              },
                              [
                                _c(
                                  "div",
                                  {
                                    staticClass: "content-area__heading",
                                    class: {
                                      "pr-4 border-0 md:border-r border-t-0 border-b-0 border-l-0 border-solid border-grey-light":
                                        _vm.$route.meta.breadcrumb
                                    }
                                  },
                                  [
                                    _c("h2", { staticClass: "mb-1" }, [
                                      _vm._v(_vm._s(_vm.routeTitle))
                                    ])
                                  ]
                                ),
                                _vm._v(" "),
                                _vm.$route.meta.breadcrumb
                                  ? _c("vx-breadcrumb", {
                                      staticClass: "ml-4 md:block hidden",
                                      attrs: { route: _vm.$route }
                                    })
                                  : _vm._e(),
                                _vm._v(" "),
                                _c(
                                  "vs-dropdown",
                                  {
                                    staticClass:
                                      "ml-auto md:block hidden cursor-pointer",
                                    attrs: { "vs-trigger-click": "" }
                                  },
                                  [
                                    _c("vs-button", {
                                      attrs: {
                                        radius: "",
                                        icon: "icon-settings",
                                        "icon-pack": "feather"
                                      }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "vs-dropdown-menu",
                                      { staticClass: "w-32" },
                                      [
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/pages/profile"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "UserIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Profile")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/todo"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "CheckSquareIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Tasks")])
                                            ],
                                            1
                                          )
                                        ]),
                                        _vm._v(" "),
                                        _c("vs-dropdown-item", [
                                          _c(
                                            "div",
                                            {
                                              staticClass: "flex items-center",
                                              on: {
                                                click: function($event) {
                                                  return _vm.$router.push(
                                                    "/apps/email"
                                                  )
                                                }
                                              }
                                            },
                                            [
                                              _c("feather-icon", {
                                                staticClass:
                                                  "inline-block mr-2",
                                                attrs: {
                                                  icon: "MailIcon",
                                                  svgClasses: "w-4 h-4"
                                                }
                                              }),
                                              _vm._v(" "),
                                              _c("span", [_vm._v("Inbox")])
                                            ],
                                            1
                                          )
                                        ])
                                      ],
                                      1
                                    )
                                  ],
                                  1
                                )
                              ],
                              1
                            )
                          : _vm._e()
                      ]
                    ),
                    _vm._v(" "),
                    _c(
                      "div",
                      { staticClass: "content-area__content" },
                      [
                        !_vm.hideScrollToTop
                          ? _c(
                              "back-to-top",
                              { attrs: { bottom: "5%", visibleoffset: "500" } },
                              [
                                _c("vs-button", {
                                  staticClass: "shadow-lg",
                                  attrs: {
                                    "icon-pack": "feather",
                                    icon: "icon-arrow-up"
                                  }
                                })
                              ],
                              1
                            )
                          : _vm._e(),
                        _vm._v(" "),
                        _c(
                          "transition",
                          {
                            attrs: {
                              name: _vm.routerTransition,
                              mode: "out-in"
                            }
                          },
                          [
                            _c("router-view", {
                              key: _vm.$route.path,
                              on: { changeRouteTitle: _vm.changeRouteTitle }
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
              ])
            ],
            1
          ),
          _vm._v(" "),
          _c("the-footer")
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { active: _vm.addsponsor, title: "Add Sponsor" },
          on: {
            "update:active": function($event) {
              _vm.addsponsor = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addsponsor",
              attrs: { autocomplete: "off" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addSponsor($event, "addsponsor")
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
                              "label-placeholder": "First Name",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "First Name",
                              name: "first_name"
                            },
                            model: {
                              value: _vm.first_name,
                              callback: function($$v) {
                                _vm.first_name = $$v
                              },
                              expression: "first_name"
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
                                    "addsponsor.first_name"
                                  ),
                                  expression:
                                    "errors.has('addsponsor.first_name')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("addsponsor.first_name")
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Last Name",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Last Name",
                              name: "last_name"
                            },
                            model: {
                              value: _vm.last_name,
                              callback: function($$v) {
                                _vm.last_name = $$v
                              },
                              expression: "last_name"
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
                                  value: _vm.errors.has("addsponsor.last_name"),
                                  expression:
                                    "errors.has('addsponsor.last_name')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.last_name"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "User Name",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "User Name",
                              name: "user_name"
                            },
                            model: {
                              value: _vm.user_name,
                              callback: function($$v) {
                                _vm.user_name = $$v
                              },
                              expression: "user_name"
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
                                  value: _vm.errors.has("addsponsor.user_name"),
                                  expression:
                                    "errors.has('addsponsor.user_name')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.user_name"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Password",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Password",
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
                                  value: _vm.errors.has("addsponsor.password"),
                                  expression:
                                    "errors.has('addsponsor.password')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.password"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Email",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Email Address",
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
                                  value: _vm.errors.has("addsponsor.email"),
                                  expression: "errors.has('addsponsor.email')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.email"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Company Name",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Company Name",
                              name: "company_name"
                            },
                            model: {
                              value: _vm.company_name,
                              callback: function($$v) {
                                _vm.company_name = $$v
                              },
                              expression: "company_name"
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
                                    "addsponsor.company_name"
                                  ),
                                  expression:
                                    "errors.has('addsponsor.company_name')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("addsponsor.company_name")
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Cell",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Cell",
                              name: "cell"
                            },
                            model: {
                              value: _vm.cell,
                              callback: function($$v) {
                                _vm.cell = $$v
                              },
                              expression: "cell"
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
                                  value: _vm.errors.has("addsponsor.cell"),
                                  expression: "errors.has('addsponsor.cell')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.cell"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Work",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Work",
                              name: "work"
                            },
                            model: {
                              value: _vm.work,
                              callback: function($$v) {
                                _vm.work = $$v
                              },
                              expression: "work"
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
                                  value: _vm.errors.has("addsponsor.work"),
                                  expression: "errors.has('addsponsor.work')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.work"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Address",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Address",
                              name: "address"
                            },
                            model: {
                              value: _vm.address,
                              callback: function($$v) {
                                _vm.address = $$v
                              },
                              expression: "address"
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
                                  value: _vm.errors.has("addsponsor.address"),
                                  expression: "errors.has('addsponsor.address')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.address"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mt-4" },
                        [
                          _c(
                            "vs-select",
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
                                label: "Region",
                                "data-vv-scope": "addsponsor",
                                "data-vv-as": "Region",
                                name: "region"
                              },
                              model: {
                                value: _vm.region,
                                callback: function($$v) {
                                  _vm.region = $$v
                                },
                                expression: "region"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: { value: "", text: "Select Region" }
                              }),
                              _vm._v(" "),
                              _vm._l(_vm.regions, function(region, index) {
                                return _c("vs-select-item", {
                                  key: index,
                                  attrs: {
                                    value: region.regionname,
                                    text: region.regionname
                                  }
                                })
                              })
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              directives: [
                                {
                                  name: "show",
                                  rawName: "v-show",
                                  value: _vm.errors.has("addsponsor.region"),
                                  expression: "errors.has('addsponsor.region')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.region"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "City",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "City",
                              name: "city"
                            },
                            model: {
                              value: _vm.city,
                              callback: function($$v) {
                                _vm.city = $$v
                              },
                              expression: "city"
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
                                  value: _vm.errors.has("addsponsor.city"),
                                  expression: "errors.has('addsponsor.city')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.city"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "State",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "State",
                              name: "state"
                            },
                            model: {
                              value: _vm.state,
                              callback: function($$v) {
                                _vm.state = $$v
                              },
                              expression: "state"
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
                                  value: _vm.errors.has("addsponsor.state"),
                                  expression: "errors.has('addsponsor.state')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.state"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "country",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Country",
                              name: "country"
                            },
                            model: {
                              value: _vm.country,
                              callback: function($$v) {
                                _vm.country = $$v
                              },
                              expression: "country"
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
                                  value: _vm.errors.has("addsponsor.country"),
                                  expression: "errors.has('addsponsor.country')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.country"))
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
                      attrs: {
                        "vs-lg": "6",
                        "vs-md": "6",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
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
                              "label-placeholder": "Zip / Postal Code",
                              "data-vv-scope": "addsponsor",
                              "data-vv-as": "Zip / Postal Code",
                              name: "zipcode"
                            },
                            model: {
                              value: _vm.zipcode,
                              callback: function($$v) {
                                _vm.zipcode = $$v
                              },
                              expression: "zipcode"
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
                                  value: _vm.errors.has("addsponsor.zipcode"),
                                  expression: "errors.has('addsponsor.zipcode')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addsponsor.zipcode"))
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
              ),
              _vm._v(" "),
              _c(
                "vs-row",
                { staticClass: "mt-5" },
                [
                  _c(
                    "vs-col",
                    { staticClass: "text-right" },
                    [
                      _c(
                        "vs-button",
                        { attrs: { button: "submit", type: "gradient" } },
                        [_vm._v(" Add Sponsor")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.administratorsPopup,
            title: "Add Administrator"
          },
          on: {
            "update:active": function($event) {
              _vm.administratorsPopup = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addAdminForm",
              attrs: { autocomplete: "off" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addAdmin($event, "addadmin")
                }
              }
            },
            [
              _c(
                "vs-row",
                [
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
                              "data-vv-scope": "addadmin",
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
                                  value: _vm.errors.has("addadmin.firstname"),
                                  expression: "errors.has('addadmin.firstname')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addadmin.firstname"))
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
                              "data-vv-scope": "addadmin",
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
                                  value: _vm.errors.has("addadmin.lastname"),
                                  expression: "errors.has('addadmin.lastname')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addadmin.lastname"))
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
                              "data-vv-scope": "addadmin",
                              name: "email"
                            },
                            model: {
                              value: _vm.adminEmail,
                              callback: function($$v) {
                                _vm.adminEmail = $$v
                              },
                              expression: "adminEmail"
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
                                  value: _vm.errors.has("addadmin.email"),
                                  expression: "errors.has('addadmin.email')"
                                }
                              ]
                            },
                            [_vm._v(_vm._s(_vm.errors.first("addadmin.email")))]
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
                              "data-vv-scope": "addadmin",
                              name: "password"
                            },
                            model: {
                              value: _vm.adminPassword,
                              callback: function($$v) {
                                _vm.adminPassword = $$v
                              },
                              expression: "adminPassword"
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
                                  value: _vm.errors.has("addadmin.password"),
                                  expression: "errors.has('addadmin.password')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addadmin.password"))
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
                              "data-vv-scope": "addadmin",
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
                                  value: _vm.errors.has("addadmin.username"),
                                  expression: "errors.has('addadmin.username')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addadmin.username"))
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
                              "data-vv-scope": "addadmin",
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
                                  value: _vm.errors.has("addadmin.contactno"),
                                  expression: "errors.has('addadmin.contactno')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addadmin.contactno"))
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
                            [_vm._v("Add Administrator")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            active: _vm.addRepresentativePopup,
            title: "Add Representative"
          },
          on: {
            "update:active": function($event) {
              _vm.addRepresentativePopup = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addRepresentativeForm",
              attrs: { autocomplete: "off" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addRepresentative($event, "addRepresentativeForm")
                }
              }
            },
            [
              _c(
                "vs-row",
                [
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
                              "data-vv-scope": "addRepresentativeForm",
                              name: "firstname"
                            },
                            model: {
                              value: _vm.rep_firstname,
                              callback: function($$v) {
                                _vm.rep_firstname = $$v
                              },
                              expression: "rep_firstname"
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
                                    "addRepresentativeForm.firstname"
                                  ),
                                  expression:
                                    "errors.has('addRepresentativeForm.firstname')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addRepresentativeForm.firstname"
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
                              "data-vv-scope": "addRepresentativeForm",
                              name: "lastname"
                            },
                            model: {
                              value: _vm.rep_lastname,
                              callback: function($$v) {
                                _vm.rep_lastname = $$v
                              },
                              expression: "rep_lastname"
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
                                    "addRepresentativeForm.lastname"
                                  ),
                                  expression:
                                    "errors.has('addRepresentativeForm.lastname')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addRepresentativeForm.lastname"
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
                              "data-vv-scope": "addRepresentativeForm",
                              name: "email"
                            },
                            model: {
                              value: _vm.rep_email,
                              callback: function($$v) {
                                _vm.rep_email = $$v
                              },
                              expression: "rep_email"
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
                                    "addRepresentativeForm.email"
                                  ),
                                  expression:
                                    "errors.has('addRepresentativeForm.email')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addRepresentativeForm.email"
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
                              "data-vv-scope": "addRepresentativeForm",
                              name: "password"
                            },
                            model: {
                              value: _vm.rep_password,
                              callback: function($$v) {
                                _vm.rep_password = $$v
                              },
                              expression: "rep_password"
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
                                    "addRepresentativeForm.password"
                                  ),
                                  expression:
                                    "errors.has('addRepresentativeForm.password')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addRepresentativeForm.password"
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
                              "data-vv-scope": "addRepresentativeForm",
                              name: "username"
                            },
                            model: {
                              value: _vm.rep_username,
                              callback: function($$v) {
                                _vm.rep_username = $$v
                              },
                              expression: "rep_username"
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
                                    "addRepresentativeForm.username"
                                  ),
                                  expression:
                                    "errors.has('addRepresentativeForm.username')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addRepresentativeForm.username"
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
                              "data-vv-scope": "addRepresentativeForm",
                              name: "contactno"
                            },
                            model: {
                              value: _vm.rep_contactno,
                              callback: function($$v) {
                                _vm.rep_contactno = $$v
                              },
                              expression: "rep_contactno"
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
                                    "addRepresentativeForm.contactno"
                                  ),
                                  expression:
                                    "errors.has('addRepresentativeForm.contactno')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "addRepresentativeForm.contactno"
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
                            [_vm._v("Add Representative")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "ADD SUB CATEGORY", active: _vm.addSubCategoryPopUp },
          on: {
            "update:active": function($event) {
              _vm.addSubCategoryPopUp = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addSubCategoryForm",
              attrs: {
                autocomplete: "off",
                "data-vv-scope": "add-sub-category-form"
              },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addSubCategory($event, "add-sub-category-form")
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
                        "vs-lg": "12",
                        "vs-xl": "12",
                        "vs-sm": "12",
                        "vs-md": "12"
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
                                placeholder: "Select Parent Category",
                                name: "parent_category",
                                "data-vv-as": "Parent Category"
                              },
                              model: {
                                value: _vm.parent,
                                callback: function($$v) {
                                  _vm.parent = $$v
                                },
                                expression: "parent"
                              }
                            },
                            _vm._l(_vm.categories, function(category, index) {
                              return _c("vs-select-item", {
                                key: index,
                                attrs: {
                                  text: category.name,
                                  value: category.category_id
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
                                  value: _vm.errors.has(
                                    "add-sub-category-form.parent_category"
                                  ),
                                  expression:
                                    "errors.has('add-sub-category-form.parent_category')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "add-sub-category-form.parent_category"
                                  )
                                )
                              )
                            ]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
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
                              danger: _vm.errors.has(
                                "add-sub-category-form.title"
                              ),
                              "icon-no-border": "",
                              icon: "assignment",
                              name: "title",
                              "label-placeholder": "Title"
                            },
                            model: {
                              value: _vm.subtitle,
                              callback: function($$v) {
                                _vm.subtitle = $$v
                              },
                              expression: "subtitle"
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
                                    "add-sub-category-form.title"
                                  ),
                                  expression:
                                    "errors.has('add-sub-category-form.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first(
                                    "add-sub-category-form.title"
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
                      attrs: {
                        "vs-lg": "12",
                        "vs-xl": "12",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-5",
                          attrs: { button: "submit", type: "gradient" }
                        },
                        [_vm._v("Add Sub Category")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "ADD CATEGORY", active: _vm.addCategoryPopUp },
          on: {
            "update:active": function($event) {
              _vm.addCategoryPopUp = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addCategoryForm",
              attrs: { "data-vv-scope": "add-form", autocomplete: "off" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.addCategory($event, "add-form")
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
                        "vs-lg": "12",
                        "vs-xl": "12",
                        "vs-sm": "12",
                        "vs-md": "12"
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
                              danger: _vm.errors.has("add-category-form.title"),
                              "icon-no-border": "",
                              icon: "assignment",
                              name: "title",
                              "label-placeholder": "Title"
                            },
                            model: {
                              value: _vm.title,
                              callback: function($$v) {
                                _vm.title = $$v
                              },
                              expression: "title"
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
                                    "add-category-form.title"
                                  ),
                                  expression:
                                    "errors.has('add-category-form.title')"
                                }
                              ],
                              staticClass: "text-danger"
                            },
                            [_vm._v(_vm._s(_vm.errors.first("add-form.title")))]
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
                      attrs: {
                        "vs-lg": "12",
                        "vs-xl": "12",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-5",
                          attrs: { button: "submit", type: "gradient" }
                        },
                        [_vm._v("Add Category")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          staticClass: "holamundo",
          attrs: { title: "EXPORT", active: _vm.exportMembersPopup },
          on: {
            "update:active": function($event) {
              _vm.exportMembersPopup = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "exportMembersForm",
              attrs: { "data-vv-scope": "export-form", autocomplete: "off" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.exportMembers($event, "export-form")
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "Name",
                                  dbCol: "fullname"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("First & Last name")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "BusinessName",
                                  dbCol: "company_name"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Business Name")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "Address",
                                  dbCol: "address"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Address")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": { excelCol: "City", dbCol: "city" }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("City")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "State/Province",
                                  dbCol: "state_province"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("State")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "ZipCode",
                                  dbCol: "zip_postal"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Zipcode")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "Country",
                                  dbCol: "country"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Country")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "Email",
                                  dbCol: "email"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Email Address")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": {
                                  excelCol: "Website",
                                  dbCol: "company_website"
                                }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Website")]
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
                        "vs-xl": "6",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
                        [
                          _c(
                            "vs-checkbox",
                            {
                              attrs: {
                                "vs-value": { excelCol: "Phone", dbCol: "cell" }
                              },
                              model: {
                                value: _vm.exportColumns,
                                callback: function($$v) {
                                  _vm.exportColumns = $$v
                                },
                                expression: "exportColumns"
                              }
                            },
                            [_vm._v("Phone Number")]
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
                        "vs-lg": "12",
                        "vs-md": "12",
                        "vs-sm": "12",
                        "vs-xs": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
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
                                name: "site",
                                label: "Select Site",
                                placeholder: "Select Site"
                              },
                              model: {
                                value: _vm.selectedSite,
                                callback: function($$v) {
                                  _vm.selectedSite = $$v
                                },
                                expression: "selectedSite"
                              }
                            },
                            _vm._l(_vm.sites, function(site, index) {
                              return _c("vs-select-item", {
                                key: index,
                                attrs: { value: site.id, text: site.name }
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
                                  value: _vm.errors.has("export-form.site"),
                                  expression: "errors.has('export-form.site')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("export-form.site"))
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
                      attrs: {
                        "vs-lg": "12",
                        "vs-xl": "12",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vx-input-group",
                        { staticClass: "mb-5 ml-5" },
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
                                name: "extractType",
                                "data-vv-as": "Extract Type",
                                placeholder: "Select Type",
                                label: "Extract"
                              },
                              model: {
                                value: _vm.extractType,
                                callback: function($$v) {
                                  _vm.extractType = $$v
                                },
                                expression: "extractType"
                              }
                            },
                            [
                              _c("vs-select-item", {
                                attrs: { text: "Companies", value: 1 }
                              }),
                              _vm._v(" "),
                              _c("vs-select-item", {
                                attrs: {
                                  text: "Companies and Categories",
                                  value: 2
                                }
                              })
                            ],
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
                                  value: _vm.errors.has(
                                    "export-form.extractType"
                                  ),
                                  expression:
                                    "errors.has('export-form.extractType')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("export-form.extractType")
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
                      attrs: {
                        "vs-lg": "12",
                        "vs-xl": "12",
                        "vs-sm": "12",
                        "vs-md": "12"
                      }
                    },
                    [
                      _c(
                        "vs-button",
                        {
                          staticClass: "mt-5",
                          attrs: { button: "submit", type: "gradient" }
                        },
                        [_vm._v("Extract")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue":
/*!***********************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue ***!
  \***********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony import */ var _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&":
/*!************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&":
/*!******************************************************************************************************!*\
  !*** ./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25& ***!
  \******************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxAutoSuggest.vue?vue&type=template&id=3b23de25& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/vx-auto-suggest/VxAutoSuggest.vue?vue&type=template&id=3b23de25&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxAutoSuggest_vue_vue_type_template_id_3b23de25___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=template&id=287afc22&functional=true& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&");
/* harmony import */ var _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheFooter.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  true,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheFooter.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheFooter.vue?vue&type=template&id=287afc22&functional=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheFooter.vue?vue&type=template&id=287afc22&functional=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheFooter_vue_vue_type_template_id_287afc22_functional_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue":
/*!***********************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony import */ var _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TheNavbar.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"],
  _TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/TheNavbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js& ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&":
/*!********************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css& ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&":
/*!******************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./TheNavbar.vue?vue&type=template&id=71a5bfd2& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/TheNavbar.vue?vue&type=template&id=71a5bfd2&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_TheNavbar_vue_vue_type_template_id_71a5bfd2___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=template&id=1f949f14& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&");
/* harmony import */ var _VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&":
/*!********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss& ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebar.vue?vue&type=template&id=1f949f14& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebar.vue?vue&type=template&id=1f949f14&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebar_vue_vue_type_template_id_1f949f14___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue":
/*!***************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=template&id=72f1234e& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&");
/* harmony import */ var _VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&":
/*!****************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/style-loader!../../../../../../node_modules/css-loader!../../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../../node_modules/postcss-loader/src??ref--8-2!../../../../../../node_modules/sass-loader/dist/cjs.js??ref--8-3!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=style&index=0&lang=scss& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/sass-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=style&index=0&lang=scss&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_8_2_node_modules_sass_loader_dist_cjs_js_ref_8_3_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_style_index_0_lang_scss___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e& ***!
  \**********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarGroup.vue?vue&type=template&id=72f1234e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarGroup.vue?vue&type=template&id=72f1234e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarGroup_vue_vue_type_template_id_72f1234e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue":
/*!**************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony import */ var _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./VxSidebarItem.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"],
  _VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&":
/*!*********************************************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae& ***!
  \*********************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./VxSidebarItem.vue?vue&type=template&id=16eca1ae& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/components/vx-sidebar/VxSidebarItem.vue?vue&type=template&id=16eca1ae&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_VxSidebarItem_vue_vue_type_template_id_16eca1ae___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js":
/*!************************************************************************!*\
  !*** ./resources/js/src/layouts/components/vx-sidebar/sidebarItems.js ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ([{
  url: "/dashboard",
  name: "Dashboard",
  slug: "dashboard",
  icon: "HomeIcon",
  shouldPopup: false
}, {
  url: "#",
  name: "Sponsored",
  slug: "sponsored",
  icon: "UsersIcon",
  submenu: [{
    url: "/all-sponsors",
    name: "All Sponsors",
    slug: "all-sponsors",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/approved-sponsors",
    name: "Approved Sponsors",
    slug: "approved-sponsors",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/un-approved-sponsors",
    name: "Un Approved Sponsors",
    slug: "un-approved-sponsors",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/expired-sponsors",
    name: "Expired Sponsors",
    slug: "expired-sponsors",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/add-sponsor",
    name: "Add Sponsor",
    slug: "add-sponsor",
    icon: "ArrowRightIcon",
    shouldPopup: true
  }]
}, {
  url: '/subscriber',
  name: 'Subscriber',
  slug: 'subscriber',
  icon: 'UsersIcon',
  shouldPopup: false
}, {
  url: "#",
  name: "Resources",
  slug: "resources",
  icon: "BookOpenIcon",
  submenu: [{
    url: "/all-resources",
    name: "All Resources",
    slug: "all-resources",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/enabled-resources",
    name: "Enabled Resources",
    slug: "enabled-resources",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/disabled-resources",
    name: "Disabled Resources",
    slug: "disabled-resources",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }]
}, {
  url: "#",
  name: "Administrator",
  slug: "administrator",
  icon: "UserIcon",
  submenu: [{
    url: "/administrators",
    name: "Administrators",
    slug: "administrators",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/add-administrator",
    name: "add-administrator",
    slug: "administratorsPopup",
    icon: "ArrowRightIcon",
    shouldPopup: true
  }]
}, {
  url: "#",
  name: "Sale Representatives",
  slug: "sale-representative",
  icon: "UserIcon",
  submenu: [{
    url: "/sale-representatives",
    name: "Sale Representative",
    slug: "sale-representative",
    icon: "ArrowRightIcon"
  }, {
    url: "/add-representative",
    name: "Add Representative",
    slug: "addRepresentativePopup",
    icon: "ArrowRightIcon",
    shouldPopup: true
  }]
}, {
  url: "#",
  name: "Product Categories",
  slug: "categories",
  icon: "ArchiveIcon",
  submenu: [{
    url: "/categories",
    name: "Categories",
    slug: "categories",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    url: "/sub-categories",
    name: "Sub Categories",
    slug: "sub-categories",
    icon: "ArrowRightIcon",
    shouldPopup: false
  }, {
    name: "Add Category",
    slug: "addCategoryPopUp",
    icon: "ArrowRightIcon",
    shouldPopup: true
  }, {
    name: "Add Sub Category",
    slug: "addSubCategoryPopUp",
    icon: "ArrowRightIcon",
    shouldPopup: true
  }]
}, {
  url: "/brands",
  name: "Brands",
  slug: "brands",
  icon: "TagIcon"
}, {
  url: "/industries",
  name: "Industries",
  slug: "industries",
  icon: "ActivityIcon"
}, {
  name: "Export Members",
  slug: "exportMembersPopup",
  icon: "ArrowRightIcon",
  shouldPopup: true
}]);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue":
/*!************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Main.vue?vue&type=template&id=22fa5a70& */ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony import */ var _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Main.vue?vue&type=script&lang=js& */ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Main.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/layouts/main/Main.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--7-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--7-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&":
/*!*******************************************************************************!*\
  !*** ./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70& ***!
  \*******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./Main.vue?vue&type=template&id=22fa5a70& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/layouts/main/Main.vue?vue&type=template&id=22fa5a70&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Main_vue_vue_type_template_id_22fa5a70___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);