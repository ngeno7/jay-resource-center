(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=script&lang=js&":
/*!**************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/DesktopView.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    detail: {
      type: Object,
      "default": {}
    },
    countries: {
      type: Array,
      "default": function _default() {
        return [];
      }
    },
    categories: {
      type: Array,
      "default": function _default() {
        return [];
      }
    }
  },
  data: function data() {
    return {
      currentForm: 'profileInfo',
      addProductPopup: false,
      downloadStatsPopup: false,
      price: '',
      product_name: '',
      quantity: 1,
      category: '',
      description: '',
      features: [],
      start_date: '',
      end_date: ''
    };
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  created: function created() {
    this.features.push({
      name: '',
      value: ''
    });
  },
  methods: {
    showProductPopup: function showProductPopup(uid) {
      this.addProductPopup = true;
    },
    downloadStats: function downloadStats() {
      this.downloadStatsPopup = true;
    },
    downloadStatsFile: function downloadStatsFile() {
      // let dates = {start_date : this.start_date, end_date : this.end_date}
      if (this.start_date == '' || this.end_date == '') {
        this.$vs.notify({
          position: 'center-top',
          color: 'danger',
          text: 'Please select both start & end dates',
          icon: 'warning'
        });
        this.downloadStatsPopup = true;
        return false;
      } else {
        this.$vs.loading();
      }

      var self = this;
      setTimeout(function () {
        self.$vs.loading.close();
      }, 1000);
      window.location.href = 'download-stats?id=' + this.$route.params.id + '&start_date=' + this.start_date.toLocaleDateString() + '&end_date=' + this.end_date.toLocaleDateString();
    },
    addMore: function addMore() {
      this.features.unshift({
        name: '',
        value: ''
      });
    },
    deleteMore: function deleteMore(index) {
      this.features.splice(index, 1);
    },
    submitProduct: function submitProduct(e, scope) {
      var _this = this;

      this.$validator.validateAll(scope).then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.addProductForm); // fd.append('features',JSON.stringify(this.features));

          fd.append('category', _this.category);
          fd.append('user_id', _this.detail.uid);
          var file = _this.$refs.productImage;
          var currentAddedFile = file.filesx.filter(function (i) {
            return i.remove !== true;
          });

          if (currentAddedFile.length > 0) {
            fd.append('file', currentAddedFile[0]);
          }

          var data = {
            fd: fd,
            notify: _this.$vs.notify,
            closeLoader: _this.$vs.loading.close
          };

          _this.$store.dispatch('products/create', data).then(function (res) {
            if (res.data.status) {
              _this.features = [];

              _this.features.push({
                name: '',
                value: ''
              });

              _this.price = _this.product_name = _this.description = _this.category = '';
              _this.quantity = 1;
              e.target.reset();

              _this.$validator.reset();

              _this.addProductPopup = false;
            }
          });
        }
      });
    },
    storeInfo: function storeInfo(e) {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.companyInformationForm);
          var file = _this2.$refs.file;
          var currentAddedFile = file.filesx.filter(function (i) {
            return i.remove !== true;
          });
          fd.append('image', currentAddedFile[0]);

          _this2.$emit('info-submitted', fd);
        }
      });
    },
    storePackageInfo: function storePackageInfo(e) {
      var _this3 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this3.$refs.packageInformationForm);

          _this3.$emit('package-submitted', fd);
        }
      });
    },
    currentFormView: function currentFormView(view) {
      this.currentForm = view;
    },
    updateStatus: function updateStatus(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        acceptText: 'Yes Please',
        cancelText: 'No Way',
        text: 'Are you sure! do you want to change Subscriber\'s status?',
        accept: this.updateConfirmed
      });
    },
    updateConfirmed: function updateConfirmed() {
      var data = {
        id: this.detail.id,
        notify: this.$vs.notify,
        route: this.$route.path
      };
      this.$emit('change-status', data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MobileView.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/MobileView.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuejs-datepicker */ "./node_modules/vuejs-datepicker/dist/vuejs-datepicker.esm.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
    detail: {
      type: Object,
      "default": {}
    },
    countries: {
      type: Array,
      "default": []
    }
  },
  components: {
    Datepicker: vuejs_datepicker__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  methods: {
    storeInfo: function storeInfo(e) {
      var _this = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this.$refs.companyInformationForm);
          var file = _this.$refs.file;
          var currentAddedFile = file.filesx.filter(function (i) {
            return i.remove !== true;
          });
          fd.append('file', currentAddedFile);

          _this.$emit('info-submitted', fd);
        }
      });
    },
    storePackageInfo: function storePackageInfo(e) {
      var _this2 = this;

      this.$validator.validateAll().then(function (result) {
        if (result) {
          var fd = new FormData(_this2.$refs.packageInformationForm);

          _this2.$emit('package-submitted', fd);
        }
      });
    },
    currentFormView: function currentFormView(view) {
      this.currentForm = view;
    },
    updateStatus: function updateStatus(id) {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: "Confirm",
        acceptText: 'Yes Please',
        cancelText: 'No Way',
        text: 'Are you sure! do you want to change Subscriber\'s status?',
        accept: this.updateConfirmed
      });
    },
    updateConfirmed: function updateConfirmed() {
      var data = {
        id: this.detail.id,
        status: this.detail.user_status,
        notify: this.$vs.notify,
        route: this.$route.path
      };
      this.$emit('change-status', data);
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AccountDetail.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/AccountDetail.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _components_DesktopView_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/DesktopView.vue */ "./resources/js/src/components/DesktopView.vue");
/* harmony import */ var _components_MobileView_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/MobileView.vue */ "./resources/js/src/components/MobileView.vue");


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



/* harmony default export */ __webpack_exports__["default"] = ({
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('sponsors/', ['sponsors', 'sponsor']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapState"])('categories/', ['userCategories']), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])('sponsors/', ['getSingleSponsor'])),
  data: function data() {
    return {
      detail: {},
      countries: [{
        "name": "United States",
        "code": "US"
      }, {
        "name": "Afghanistan",
        "code": "AF"
      }, {
        "name": "land Islands",
        "code": "AX"
      }, {
        "name": "Albania",
        "code": "AL"
      }, {
        "name": "Algeria",
        "code": "DZ"
      }, {
        "name": "American Samoa",
        "code": "AS"
      }, {
        "name": "AndorrA",
        "code": "AD"
      }, {
        "name": "Angola",
        "code": "AO"
      }, {
        "name": "Anguilla",
        "code": "AI"
      }, {
        "name": "Antarctica",
        "code": "AQ"
      }, {
        "name": "Antigua and Barbuda",
        "code": "AG"
      }, {
        "name": "Argentina",
        "code": "AR"
      }, {
        "name": "Armenia",
        "code": "AM"
      }, {
        "name": "Aruba",
        "code": "AW"
      }, {
        "name": "Australia",
        "code": "AU"
      }, {
        "name": "Austria",
        "code": "AT"
      }, {
        "name": "Azerbaijan",
        "code": "AZ"
      }, {
        "name": "Bahamas",
        "code": "BS"
      }, {
        "name": "Bahrain",
        "code": "BH"
      }, {
        "name": "Bangladesh",
        "code": "BD"
      }, {
        "name": "Barbados",
        "code": "BB"
      }, {
        "name": "Belarus",
        "code": "BY"
      }, {
        "name": "Belgium",
        "code": "BE"
      }, {
        "name": "Belize",
        "code": "BZ"
      }, {
        "name": "Benin",
        "code": "BJ"
      }, {
        "name": "Bermuda",
        "code": "BM"
      }, {
        "name": "Bhutan",
        "code": "BT"
      }, {
        "name": "Bolivia",
        "code": "BO"
      }, {
        "name": "Bosnia and Herzegovina",
        "code": "BA"
      }, {
        "name": "Botswana",
        "code": "BW"
      }, {
        "name": "Bouvet Island",
        "code": "BV"
      }, {
        "name": "Brazil",
        "code": "BR"
      }, {
        "name": "British Indian Ocean Territory",
        "code": "IO"
      }, {
        "name": "Brunei Darussalam",
        "code": "BN"
      }, {
        "name": "Bulgaria",
        "code": "BG"
      }, {
        "name": "Burkina Faso",
        "code": "BF"
      }, {
        "name": "Burundi",
        "code": "BI"
      }, {
        "name": "Cambodia",
        "code": "KH"
      }, {
        "name": "Cameroon",
        "code": "CM"
      }, {
        "name": "Canada",
        "code": "CA"
      }, {
        "name": "Cape Verde",
        "code": "CV"
      }, {
        "name": "Cayman Islands",
        "code": "KY"
      }, {
        "name": "Central African Republic",
        "code": "CF"
      }, {
        "name": "Chad",
        "code": "TD"
      }, {
        "name": "Chile",
        "code": "CL"
      }, {
        "name": "China",
        "code": "CN"
      }, {
        "name": "Christmas Island",
        "code": "CX"
      }, {
        "name": "Cocos (Keeling) Islands",
        "code": "CC"
      }, {
        "name": "Colombia",
        "code": "CO"
      }, {
        "name": "Comoros",
        "code": "KM"
      }, {
        "name": "Congo",
        "code": "CG"
      }, {
        "name": "Congo, The Democratic Republic of the",
        "code": "CD"
      }, {
        "name": "Cook Islands",
        "code": "CK"
      }, {
        "name": "Costa Rica",
        "code": "CR"
      }, {
        "name": "Cote D'Ivoire",
        "code": "CI"
      }, {
        "name": "Croatia",
        "code": "HR"
      }, {
        "name": "Cuba",
        "code": "CU"
      }, {
        "name": "Cyprus",
        "code": "CY"
      }, {
        "name": "Czech Republic",
        "code": "CZ"
      }, {
        "name": "Denmark",
        "code": "DK"
      }, {
        "name": "Djibouti",
        "code": "DJ"
      }, {
        "name": "Dominica",
        "code": "DM"
      }, {
        "name": "Dominican Republic",
        "code": "DO"
      }, {
        "name": "Ecuador",
        "code": "EC"
      }, {
        "name": "Egypt",
        "code": "EG"
      }, {
        "name": "El Salvador",
        "code": "SV"
      }, {
        "name": "Equatorial Guinea",
        "code": "GQ"
      }, {
        "name": "Eritrea",
        "code": "ER"
      }, {
        "name": "Estonia",
        "code": "EE"
      }, {
        "name": "Ethiopia",
        "code": "ET"
      }, {
        "name": "Falkland Islands (Malvinas)",
        "code": "FK"
      }, {
        "name": "Faroe Islands",
        "code": "FO"
      }, {
        "name": "Fiji",
        "code": "FJ"
      }, {
        "name": "Finland",
        "code": "FI"
      }, {
        "name": "France",
        "code": "FR"
      }, {
        "name": "French Guiana",
        "code": "GF"
      }, {
        "name": "French Polynesia",
        "code": "PF"
      }, {
        "name": "French Southern Territories",
        "code": "TF"
      }, {
        "name": "Gabon",
        "code": "GA"
      }, {
        "name": "Gambia",
        "code": "GM"
      }, {
        "name": "Georgia",
        "code": "GE"
      }, {
        "name": "Germany",
        "code": "DE"
      }, {
        "name": "Ghana",
        "code": "GH"
      }, {
        "name": "Gibraltar",
        "code": "GI"
      }, {
        "name": "Greece",
        "code": "GR"
      }, {
        "name": "Greenland",
        "code": "GL"
      }, {
        "name": "Grenada",
        "code": "GD"
      }, {
        "name": "Guadeloupe",
        "code": "GP"
      }, {
        "name": "Guam",
        "code": "GU"
      }, {
        "name": "Guatemala",
        "code": "GT"
      }, {
        "name": "Guernsey",
        "code": "GG"
      }, {
        "name": "Guinea",
        "code": "GN"
      }, {
        "name": "Guinea-Bissau",
        "code": "GW"
      }, {
        "name": "Guyana",
        "code": "GY"
      }, {
        "name": "Haiti",
        "code": "HT"
      }, {
        "name": "Heard Island and Mcdonald Islands",
        "code": "HM"
      }, {
        "name": "Holy See (Vatican City State)",
        "code": "VA"
      }, {
        "name": "Honduras",
        "code": "HN"
      }, {
        "name": "Hong Kong",
        "code": "HK"
      }, {
        "name": "Hungary",
        "code": "HU"
      }, {
        "name": "Iceland",
        "code": "IS"
      }, {
        "name": "India",
        "code": "IN"
      }, {
        "name": "Indonesia",
        "code": "ID"
      }, {
        "name": "Iran, Islamic Republic Of",
        "code": "IR"
      }, {
        "name": "Iraq",
        "code": "IQ"
      }, {
        "name": "Ireland",
        "code": "IE"
      }, {
        "name": "Isle of Man",
        "code": "IM"
      }, {
        "name": "Israel",
        "code": "IL"
      }, {
        "name": "Italy",
        "code": "IT"
      }, {
        "name": "Jamaica",
        "code": "JM"
      }, {
        "name": "Japan",
        "code": "JP"
      }, {
        "name": "Jersey",
        "code": "JE"
      }, {
        "name": "Jordan",
        "code": "JO"
      }, {
        "name": "Kazakhstan",
        "code": "KZ"
      }, {
        "name": "Kenya",
        "code": "KE"
      }, {
        "name": "Kiribati",
        "code": "KI"
      }, {
        "name": "Korea, Democratic People's Republic of",
        "code": "KP"
      }, {
        "name": "Korea, Republic of",
        "code": "KR"
      }, {
        "name": "Kuwait",
        "code": "KW"
      }, {
        "name": "Kyrgyzstan",
        "code": "KG"
      }, {
        "name": "Lao People'S Democratic Republic",
        "code": "LA"
      }, {
        "name": "Latvia",
        "code": "LV"
      }, {
        "name": "Lebanon",
        "code": "LB"
      }, {
        "name": "Lesotho",
        "code": "LS"
      }, {
        "name": "Liberia",
        "code": "LR"
      }, {
        "name": "Libyan Arab Jamahiriya",
        "code": "LY"
      }, {
        "name": "Liechtenstein",
        "code": "LI"
      }, {
        "name": "Lithuania",
        "code": "LT"
      }, {
        "name": "Luxembourg",
        "code": "LU"
      }, {
        "name": "Macao",
        "code": "MO"
      }, {
        "name": "Macedonia, The Former Yugoslav Republic of",
        "code": "MK"
      }, {
        "name": "Madagascar",
        "code": "MG"
      }, {
        "name": "Malawi",
        "code": "MW"
      }, {
        "name": "Malaysia",
        "code": "MY"
      }, {
        "name": "Maldives",
        "code": "MV"
      }, {
        "name": "Mali",
        "code": "ML"
      }, {
        "name": "Malta",
        "code": "MT"
      }, {
        "name": "Marshall Islands",
        "code": "MH"
      }, {
        "name": "Martinique",
        "code": "MQ"
      }, {
        "name": "Mauritania",
        "code": "MR"
      }, {
        "name": "Mauritius",
        "code": "MU"
      }, {
        "name": "Mayotte",
        "code": "YT"
      }, {
        "name": "Mexico",
        "code": "MX"
      }, {
        "name": "Micronesia, Federated States of",
        "code": "FM"
      }, {
        "name": "Moldova, Republic of",
        "code": "MD"
      }, {
        "name": "Monaco",
        "code": "MC"
      }, {
        "name": "Mongolia",
        "code": "MN"
      }, {
        "name": "Montenegro",
        "code": "ME"
      }, {
        "name": "Montserrat",
        "code": "MS"
      }, {
        "name": "Morocco",
        "code": "MA"
      }, {
        "name": "Mozambique",
        "code": "MZ"
      }, {
        "name": "Myanmar",
        "code": "MM"
      }, {
        "name": "Namibia",
        "code": "NA"
      }, {
        "name": "Nauru",
        "code": "NR"
      }, {
        "name": "Nepal",
        "code": "NP"
      }, {
        "name": "Netherlands",
        "code": "NL"
      }, {
        "name": "Netherlands Antilles",
        "code": "AN"
      }, {
        "name": "New Caledonia",
        "code": "NC"
      }, {
        "name": "New Zealand",
        "code": "NZ"
      }, {
        "name": "Nicaragua",
        "code": "NI"
      }, {
        "name": "Niger",
        "code": "NE"
      }, {
        "name": "Nigeria",
        "code": "NG"
      }, {
        "name": "Niue",
        "code": "NU"
      }, {
        "name": "Norfolk Island",
        "code": "NF"
      }, {
        "name": "Northern Mariana Islands",
        "code": "MP"
      }, {
        "name": "Norway",
        "code": "NO"
      }, {
        "name": "Oman",
        "code": "OM"
      }, {
        "name": "Pakistan",
        "code": "PK"
      }, {
        "name": "Palau",
        "code": "PW"
      }, {
        "name": "Palestinian Territory, Occupied",
        "code": "PS"
      }, {
        "name": "Panama",
        "code": "PA"
      }, {
        "name": "Papua New Guinea",
        "code": "PG"
      }, {
        "name": "Paraguay",
        "code": "PY"
      }, {
        "name": "Peru",
        "code": "PE"
      }, {
        "name": "Philippines",
        "code": "PH"
      }, {
        "name": "Pitcairn",
        "code": "PN"
      }, {
        "name": "Poland",
        "code": "PL"
      }, {
        "name": "Portugal",
        "code": "PT"
      }, {
        "name": "Puerto Rico",
        "code": "PR"
      }, {
        "name": "Qatar",
        "code": "QA"
      }, {
        "name": "Reunion",
        "code": "RE"
      }, {
        "name": "Romania",
        "code": "RO"
      }, {
        "name": "Russian Federation",
        "code": "RU"
      }, {
        "name": "RWANDA",
        "code": "RW"
      }, {
        "name": "Saint Helena",
        "code": "SH"
      }, {
        "name": "Saint Kitts and Nevis",
        "code": "KN"
      }, {
        "name": "Saint Lucia",
        "code": "LC"
      }, {
        "name": "Saint Pierre and Miquelon",
        "code": "PM"
      }, {
        "name": "Saint Vincent and the Grenadines",
        "code": "VC"
      }, {
        "name": "Samoa",
        "code": "WS"
      }, {
        "name": "San Marino",
        "code": "SM"
      }, {
        "name": "Sao Tome and Principe",
        "code": "ST"
      }, {
        "name": "Saudi Arabia",
        "code": "SA"
      }, {
        "name": "Senegal",
        "code": "SN"
      }, {
        "name": "Serbia",
        "code": "RS"
      }, {
        "name": "Seychelles",
        "code": "SC"
      }, {
        "name": "Sierra Leone",
        "code": "SL"
      }, {
        "name": "Singapore",
        "code": "SG"
      }, {
        "name": "Slovakia",
        "code": "SK"
      }, {
        "name": "Slovenia",
        "code": "SI"
      }, {
        "name": "Solomon Islands",
        "code": "SB"
      }, {
        "name": "Somalia",
        "code": "SO"
      }, {
        "name": "South Africa",
        "code": "ZA"
      }, {
        "name": "South Georgia and the South Sandwich Islands",
        "code": "GS"
      }, {
        "name": "Spain",
        "code": "ES"
      }, {
        "name": "Sri Lanka",
        "code": "LK"
      }, {
        "name": "Sudan",
        "code": "SD"
      }, {
        "name": "Suriname",
        "code": "SR"
      }, {
        "name": "Svalbard and Jan Mayen",
        "code": "SJ"
      }, {
        "name": "Swaziland",
        "code": "SZ"
      }, {
        "name": "Sweden",
        "code": "SE"
      }, {
        "name": "Switzerland",
        "code": "CH"
      }, {
        "name": "Syrian Arab Republic",
        "code": "SY"
      }, {
        "name": "Taiwan, Province of China",
        "code": "TW"
      }, {
        "name": "Tajikistan",
        "code": "TJ"
      }, {
        "name": "Tanzania, United Republic of",
        "code": "TZ"
      }, {
        "name": "Thailand",
        "code": "TH"
      }, {
        "name": "Timor-Leste",
        "code": "TL"
      }, {
        "name": "Togo",
        "code": "TG"
      }, {
        "name": "Tokelau",
        "code": "TK"
      }, {
        "name": "Tonga",
        "code": "TO"
      }, {
        "name": "Trinidad and Tobago",
        "code": "TT"
      }, {
        "name": "Tunisia",
        "code": "TN"
      }, {
        "name": "Turkey",
        "code": "TR"
      }, {
        "name": "Turkmenistan",
        "code": "TM"
      }, {
        "name": "Turks and Caicos Islands",
        "code": "TC"
      }, {
        "name": "Tuvalu",
        "code": "TV"
      }, {
        "name": "Uganda",
        "code": "UG"
      }, {
        "name": "Ukraine",
        "code": "UA"
      }, {
        "name": "United Arab Emirates",
        "code": "AE"
      }, {
        "name": "United Kingdom",
        "code": "GB"
      }, {
        "name": "United States Minor Outlying Islands",
        "code": "UM"
      }, {
        "name": "Uruguay",
        "code": "UY"
      }, {
        "name": "Uzbekistan",
        "code": "UZ"
      }, {
        "name": "Vanuatu",
        "code": "VU"
      }, {
        "name": "Venezuela",
        "code": "VE"
      }, {
        "name": "Viet Nam",
        "code": "VN"
      }, {
        "name": "Virgin Islands, British",
        "code": "VG"
      }, {
        "name": "Virgin Islands, U.S.",
        "code": "VI"
      }, {
        "name": "Wallis and Futuna",
        "code": "WF"
      }, {
        "name": "Western Sahara",
        "code": "EH"
      }, {
        "name": "Yemen",
        "code": "YE"
      }, {
        "name": "Zambia",
        "code": "ZM"
      }, {
        "name": "Zimbabwe",
        "code": "ZW"
      }],
      productAdded: false
    };
  },
  components: {
    DesktopView: _components_DesktopView_vue__WEBPACK_IMPORTED_MODULE_2__["default"],
    MobileView: _components_MobileView_vue__WEBPACK_IMPORTED_MODULE_3__["default"]
  },
  created: function created() {
    var _this = this;

    return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              self = _this;

              _this.getUserCategories(_this.$route.params.id);

              if (_this.sponsors.length > 0) {
                _this.detail = _this.getSingleSponsor(_this.$route.params.id);

                _this.setSponsor(_this.detail);
              } else {
                _this.getSponsor(_this.$route.params.id).then(function () {
                  self.detail = self.sponsor;
                });
              }

            case 3:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }))();
  },
  methods: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapMutations"])({
    setSponsor: 'sponsors/setSponsor'
  }), {}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapActions"])({
    getSponsor: 'sponsors/getSponsor',
    updateSponsor: 'sponsors/updateSponsor',
    changeStatus: 'sponsors/changeStatusSingle',
    updatePackage: 'sponsors/updatePackage',
    getUserCategories: 'categories/getUserCategories',
    addProduct: 'products/create'
  }), {
    onSubmit: function onSubmit(data) {},
    updateStatus: function updateStatus(data) {
      this.changeStatus(data);
    },
    isMobile: function isMobile() {
      if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true;
      } else {
        return false;
      }
    },
    informationSubmit: function informationSubmit(fd) {
      var data = {
        fd: fd,
        notify: this.$vs.notify,
        closeLoader: this.$vs.loading.close
      };
      this.updateSponsor(data);
    },
    packageSubmit: function packageSubmit(fd) {
      var data = {
        fd: fd,
        notify: this.$vs.notify,
        closeLoader: this.$vs.loading.close
      };
      this.updatePackage(data);
    }
  })
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css&":
/*!*********************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".con-input-upload {\n  width: 100%;\n}[dir] .con-input-upload {\n  margin: 0;\n}\n.con-input-upload.disabled-upload {\n  display: none;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css&");

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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=template&id=60e7d15e&":
/*!******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/DesktopView.vue?vue&type=template&id=60e7d15e& ***!
  \******************************************************************************************************************************************************************************************************************/
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
    "vs-row",
    [
      _c(
        "vs-col",
        { attrs: { "vs-lg": "9", "vs-md": "9", "vs-sm": "12", "vs-xs": "12" } },
        [
          _c(
            "vx-card",
            {
              attrs: {
                title:
                  _vm.currentForm == "profileInfo"
                    ? "Company Info"
                    : "Package Info",
                subtitle: _vm.detail.company_name
              }
            },
            [
              [
                _vm.currentForm == "profileInfo"
                  ? _c(
                      "form",
                      {
                        ref: "companyInformationForm",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.storeInfo($event, "companyInfo")
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
                                  "vs-lg": "4",
                                  "vs-md": "4",
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
                                staticClass: "p-0",
                                attrs: {
                                  "vs-lg": "8",
                                  "vs-md": "4",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
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
                                      [
                                        _c("input", {
                                          attrs: { type: "hidden", name: "id" },
                                          domProps: { value: _vm.detail.uid }
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
                                            label: "Company Name",
                                            name: "company_name"
                                          },
                                          model: {
                                            value: _vm.detail.company_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "company_name",
                                                $$v
                                              )
                                            },
                                            expression: "detail.company_name"
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
                                                  "company_name"
                                                ),
                                                expression:
                                                  "errors.has('company_name')"
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("company_name")
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
                                      "vs-md": "4",
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
                                            label: "Email",
                                            name: "email"
                                          },
                                          model: {
                                            value: _vm.detail.email,
                                            callback: function($$v) {
                                              _vm.$set(_vm.detail, "email", $$v)
                                            },
                                            expression: "detail.email"
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
                                                value: _vm.errors.has("email"),
                                                expression:
                                                  "errors.has('email')"
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(_vm.errors.first("email"))
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
                                      "vs-md": "4",
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
                                            label: "Username",
                                            name: "username"
                                          },
                                          model: {
                                            value: _vm.detail.username,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "username",
                                                $$v
                                              )
                                            },
                                            expression: "detail.username"
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
                                                  "username"
                                                ),
                                                expression:
                                                  "errors.has('username')"
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("username")
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
                                      "vs-md": "4",
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
                                            label: "First Name",
                                            name: "first_name"
                                          },
                                          model: {
                                            value: _vm.detail.first_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "first_name",
                                                $$v
                                              )
                                            },
                                            expression: "detail.first_name"
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
                                                  "first_name"
                                                ),
                                                expression:
                                                  "errors.has('first_name')"
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("first_name")
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
                                      "vs-md": "4",
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
                                            label: "Last Name",
                                            name: "last_name"
                                          },
                                          model: {
                                            value: _vm.detail.last_name,
                                            callback: function($$v) {
                                              _vm.$set(
                                                _vm.detail,
                                                "last_name",
                                                $$v
                                              )
                                            },
                                            expression: "detail.last_name"
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
                                                  "last_name"
                                                ),
                                                expression:
                                                  "errors.has('last_name')"
                                              }
                                            ]
                                          },
                                          [
                                            _vm._v(
                                              _vm._s(
                                                _vm.errors.first("last_name")
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
                                      "vs-md": "4",
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
                                            label: "Cell",
                                            name: "cell"
                                          },
                                          model: {
                                            value: _vm.detail.cell,
                                            callback: function($$v) {
                                              _vm.$set(_vm.detail, "cell", $$v)
                                            },
                                            expression: "detail.cell"
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
                                      "vs-lg": "6",
                                      "vs-md": "4",
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
                                            label: "work",
                                            name: "work"
                                          },
                                          model: {
                                            value: _vm.detail.work,
                                            callback: function($$v) {
                                              _vm.$set(_vm.detail, "work", $$v)
                                            },
                                            expression: "detail.work"
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
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          [
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
                                  [
                                    _c("vs-input", {
                                      attrs: {
                                        label: "address",
                                        name: "address"
                                      },
                                      model: {
                                        value: _vm.detail.address,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "address", $$v)
                                        },
                                        expression: "detail.address"
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
                                  "vs-lg": "6",
                                  "vs-md": "6",
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
                                        type: "url",
                                        placeholder: "https://www.example.com",
                                        label: "Address / URL",
                                        name: "url"
                                      },
                                      model: {
                                        value: _vm.detail.company_website,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "company_website",
                                            $$v
                                          )
                                        },
                                        expression: "detail.company_website"
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
                                  "vs-lg": "6",
                                  "vs-md": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("vs-input", {
                                      attrs: { label: "City", name: "city" },
                                      model: {
                                        value: _vm.detail.city,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "city", $$v)
                                        },
                                        expression: "detail.city"
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
                                  "vs-lg": "6",
                                  "vs-md": "6",
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
                                        label: "State / Province",
                                        name: "state_province"
                                      },
                                      model: {
                                        value: _vm.detail.state_province,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "state_province",
                                            $$v
                                          )
                                        },
                                        expression: "detail.state_province"
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
                                  "vs-lg": "6",
                                  "vs-md": "6",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c("vx-input-group", {}, [
                                  _c(
                                    "label",
                                    { staticClass: "vs-input--label" },
                                    [
                                      _vm._v(
                                        "\n                                    Country\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      staticClass:
                                        "vs-inputx vs-input--input normal",
                                      attrs: { name: "country" }
                                    },
                                    _vm._l(_vm.countries, function(
                                      country,
                                      index
                                    ) {
                                      return _c("option", { key: index }, [
                                        _vm._v(_vm._s(country.name))
                                      ])
                                    }),
                                    0
                                  )
                                ])
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
                                  [
                                    _c("vs-input", {
                                      attrs: {
                                        label: "Zip / Postal Code",
                                        name: "zipcode"
                                      },
                                      model: {
                                        value: _vm.detail.zip_postal,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "zip_postal",
                                            $$v
                                          )
                                        },
                                        expression: "detail.zip_postal"
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
                                  "vs-lg": "12",
                                  "vs-md": "12",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  { staticClass: "mt-5" },
                                  [
                                    _c("vs-textarea", {
                                      staticStyle: { resize: "vertical" },
                                      attrs: {
                                        counter: "200",
                                        type: "url",
                                        label: "Description",
                                        name: "description"
                                      },
                                      model: {
                                        value: _vm.detail.description,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "description",
                                            $$v
                                          )
                                        },
                                        expression: "detail.description"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mt-base" },
                          [
                            _c(
                              "vs-col",
                              { staticClass: "flex justify-end" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      type: "gradient",
                                      button: "submit"
                                    }
                                  },
                                  [_vm._v(" Save Changes")]
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
                  : _c(
                      "form",
                      {
                        ref: "packageInformationForm",
                        on: {
                          submit: function($event) {
                            $event.preventDefault()
                            return _vm.storePackageInfo($event, "packageInfo")
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
                                  [
                                    _c("input", {
                                      attrs: { type: "hidden", name: "id" },
                                      domProps: { value: _vm.detail.uid }
                                    }),
                                    _vm._v(" "),
                                    _c(
                                      "label",
                                      { staticClass: "vs-input--label" },
                                      [_vm._v("Start Date")]
                                    ),
                                    _vm._v(" "),
                                    _c("datepicker", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        name: "start_package",
                                        placeholder: "Start Date"
                                      },
                                      model: {
                                        value: _vm.detail.start_package,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "start_package",
                                            $$v
                                          )
                                        },
                                        expression: "detail.start_package"
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
                                              "start_package"
                                            ),
                                            expression:
                                              "errors.has('start_package')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("start_package")
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
                                  [
                                    _c(
                                      "label",
                                      { staticClass: "vs-input--label" },
                                      [_vm._v("Expiry Date")]
                                    ),
                                    _vm._v(" "),
                                    _c("datepicker", {
                                      directives: [
                                        {
                                          name: "validate",
                                          rawName: "v-validate",
                                          value: "required",
                                          expression: "'required'"
                                        }
                                      ],
                                      attrs: {
                                        name: "expire_package",
                                        placeholder: "Expiry Date"
                                      },
                                      model: {
                                        value: _vm.detail.expire_package,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "expire_package",
                                            $$v
                                          )
                                        },
                                        expression: "detail.expire_package"
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
                                              "expire_package"
                                            ),
                                            expression:
                                              "errors.has('expire_package')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("expire_package")
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
                                _c("vx-input-group", {}, [
                                  _c(
                                    "label",
                                    { staticClass: "vs-input--label" },
                                    [
                                      _vm._v(
                                        "\n                                    Package\n                                "
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "select",
                                    {
                                      directives: [
                                        {
                                          name: "model",
                                          rawName: "v-model",
                                          value: _vm.detail.package,
                                          expression: "detail.package"
                                        }
                                      ],
                                      staticClass:
                                        "vs-inputx vs-input--input normal",
                                      attrs: { name: "package" },
                                      on: {
                                        change: function($event) {
                                          var $$selectedVal = Array.prototype.filter
                                            .call(
                                              $event.target.options,
                                              function(o) {
                                                return o.selected
                                              }
                                            )
                                            .map(function(o) {
                                              var val =
                                                "_value" in o
                                                  ? o._value
                                                  : o.value
                                              return val
                                            })
                                          _vm.$set(
                                            _vm.detail,
                                            "package",
                                            $event.target.multiple
                                              ? $$selectedVal
                                              : $$selectedVal[0]
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _c("option", { attrs: { value: "p1" } }, [
                                        _vm._v("No Package")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "p2" } }, [
                                        _vm._v("Gold Subscriber")
                                      ]),
                                      _vm._v(" "),
                                      _c("option", { attrs: { value: "p3" } }, [
                                        _vm._v("Platinium Subscriber")
                                      ])
                                    ]
                                  )
                                ])
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
                                  [
                                    _c("vs-input", {
                                      attrs: {
                                        disabled: "",
                                        label: "Package Status"
                                      },
                                      model: {
                                        value: _vm.detail.is_expired,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "is_expired",
                                            $$v
                                          )
                                        },
                                        expression: "detail.is_expired"
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
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-row",
                          { staticClass: "mt-base" },
                          [
                            _c(
                              "vs-col",
                              { staticClass: "flex justify-end" },
                              [
                                _c(
                                  "vs-button",
                                  {
                                    attrs: {
                                      type: "gradient",
                                      button: "submit"
                                    }
                                  },
                                  [_vm._v(" Save Changes")]
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
            ],
            2
          )
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-col",
        { attrs: { "vs-lg": "3", "vs-md": "3", "vs-sm": "12", "vs-xs": "12" } },
        [
          _c(
            "vx-card",
            { attrs: { title: "" } },
            [
              _c(
                "vs-list",
                [
                  _c(
                    "vs-list-item",
                    {
                      staticClass: "p-5",
                      attrs: { title: "Profile Information" }
                    },
                    [
                      _c("vs-button", {
                        attrs: {
                          type: "gradient",
                          "icon-pack": "feather",
                          icon: "icon-alert-circle"
                        },
                        on: {
                          click: function($event) {
                            return _vm.currentFormView("profileInfo")
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-list-item",
                    {
                      staticClass: "p-5",
                      attrs: { title: "Package Information" }
                    },
                    [
                      _c("vs-button", {
                        attrs: {
                          type: "gradient",
                          "icon-pack": "feather",
                          icon: "icon-alert-circle"
                        },
                        on: {
                          click: function($event) {
                            return _vm.currentFormView("packageInfo")
                          }
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-list-item",
                    { staticClass: "p-5", attrs: { title: "Approval Status" } },
                    [
                      _c("vs-switch", {
                        attrs: {
                          "icon-pack": "feather",
                          "vs-icon-on": "icon-check-circle",
                          "vs-icon-off": "icon-slash"
                        },
                        on: {
                          input: function($event) {
                            return _vm.updateStatus(_vm.detail.id)
                          }
                        },
                        model: {
                          value:
                            _vm.detail.user_status == "approved" ? true : false,
                          callback: function($$v) {
                            _vm.$set(
                              _vm.detail,
                              "user_status == 'approved'?true:false",
                              $$v
                            )
                          },
                          expression:
                            "detail.user_status == 'approved'?true:false"
                        }
                      })
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm.detail.user_status == "approved" &&
                  _vm.detail.is_expired != "Expire"
                    ? _c(
                        "vs-list-item",
                        {
                          staticClass: "p-5",
                          attrs: { title: "Add Resource" }
                        },
                        [
                          _c("vs-button", {
                            attrs: {
                              type: "gradient",
                              to: "/add-resource/" + _vm.detail.uid,
                              icon: "icon-plus",
                              "icon-pack": "feather"
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _vm.detail.user_status == "approved" &&
                  _vm.detail.is_expired != "Expire"
                    ? _c(
                        "vs-list-item",
                        { staticClass: "p-5", attrs: { title: "Add Product" } },
                        [
                          _c("vs-button", {
                            attrs: {
                              type: "gradient",
                              icon: "icon-plus",
                              "icon-pack": "feather"
                            },
                            on: {
                              click: function($event) {
                                return _vm.showProductPopup(_vm.detail.uid)
                              }
                            }
                          })
                        ],
                        1
                      )
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "vs-list-item",
                    {
                      staticClass: "p-5",
                      attrs: { title: "Download All Statistics" }
                    },
                    [
                      _c("vs-button", {
                        attrs: {
                          type: "gradient",
                          "icon-pack": "feather",
                          icon: "icon-download"
                        },
                        on: { click: _vm.downloadStats }
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
        ],
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: { active: _vm.addProductPopup, title: "Add new Product" },
          on: {
            "update:active": function($event) {
              _vm.addProductPopup = $event
            }
          }
        },
        [
          _c(
            "form",
            {
              ref: "addProductForm",
              attrs: { "data-vv-scope": "addproduct" },
              on: {
                submit: function($event) {
                  $event.preventDefault()
                  return _vm.submitProduct($event, "addproduct")
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
                                      value: _vm.product_name,
                                      callback: function($$v) {
                                        _vm.product_name = $$v
                                      },
                                      expression: "product_name"
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
                                            "addproduct.product_name"
                                          ),
                                          expression:
                                            "errors.has('addproduct.product_name')"
                                        }
                                      ]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first(
                                            "addproduct.product_name"
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
                                      value: _vm.price,
                                      callback: function($$v) {
                                        _vm.price = $$v
                                      },
                                      expression: "price"
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
                                            "addproduct.price"
                                          ),
                                          expression:
                                            "errors.has('addproduct.price')"
                                        }
                                      ]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first("addproduct.price")
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
                                      value: _vm.quantity,
                                      callback: function($$v) {
                                        _vm.quantity = $$v
                                      },
                                      expression: "quantity"
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
                                            "addproduct.quantity"
                                          ),
                                          expression:
                                            "errors.has('addproduct.quantity')"
                                        }
                                      ]
                                    },
                                    [
                                      _vm._v(
                                        _vm._s(
                                          _vm.errors.first(
                                            "addproduct.quantity"
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
                            _vm._l(_vm.categories, function(item, index) {
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
                                  value: _vm.errors.has("addproduct.category"),
                                  expression:
                                    "errors.has('addproduct.category')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(_vm.errors.first("addproduct.category"))
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
                                  value: _vm.errors.has(
                                    "addproduct.description"
                                  ),
                                  expression:
                                    "errors.has('addproduct.description')"
                                }
                              ]
                            },
                            [
                              _vm._v(
                                _vm._s(
                                  _vm.errors.first("addproduct.description")
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
                                  attrs: {
                                    placeholder: "Feature",
                                    name: "features[" + index + "][name]"
                                  },
                                  model: {
                                    value: feature.name,
                                    callback: function($$v) {
                                      _vm.$set(feature, "name", $$v)
                                    },
                                    expression: "feature.name"
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
                                  attrs: {
                                    placeholder: "Value",
                                    name: "features[" + index + "][value]"
                                  },
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
                            [_vm._v("Add Product")]
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
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: { active: _vm.downloadStatsPopup },
          on: {
            accept: _vm.downloadStatsFile,
            "update:active": function($event) {
              _vm.downloadStatsPopup = $event
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
                    [
                      _c("label", { staticClass: "vs-input--label" }, [
                        _vm._v("Start Date")
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: {
                          name: "start_date",
                          placeholder: "Start Date"
                        },
                        model: {
                          value: _vm.start_date,
                          callback: function($$v) {
                            _vm.start_date = $$v
                          },
                          expression: "start_date"
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
                    "vs-lg": "6",
                    "vs-md": "6",
                    "vs-sm": "12",
                    "vs-xs": "12"
                  }
                },
                [
                  _c(
                    "vx-input-group",
                    [
                      _c("label", { staticClass: "vs-input--label" }, [
                        _vm._v("End Date")
                      ]),
                      _vm._v(" "),
                      _c("datepicker", {
                        directives: [
                          {
                            name: "validate",
                            rawName: "v-validate",
                            value: "required",
                            expression: "'required'"
                          }
                        ],
                        attrs: { name: "end_date", placeholder: "Expiry Date" },
                        model: {
                          value: _vm.end_date,
                          callback: function($$v) {
                            _vm.end_date = $$v
                          },
                          expression: "end_date"
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

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MobileView.vue?vue&type=template&id=3efe6e27&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/components/MobileView.vue?vue&type=template&id=3efe6e27& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
    "vs-row",
    [
      _c(
        "vs-col",
        {
          attrs: { "vs-lg": "12", "vs-md": "12", "vs-sm": "12", "vs-xs": "12" }
        },
        [
          _c(
            "vs-row",
            [
              _c(
                "vs-col",
                { staticClass: "flex justify-end " },
                [
                  _c("vs-button", {
                    attrs: {
                      type: "gradient",
                      to: "/add-resource/" + _vm.detail.uid,
                      icon: "icon-plus",
                      "icon-pack": "feather"
                    }
                  }),
                  _vm._v(" "),
                  _c("vs-button", {
                    attrs: {
                      type: "gradient",
                      "icon-pack": "feather",
                      icon: "icon-download"
                    }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c("h1", [
            _vm._v("Company Name: "),
            _c("small", [_vm._v(_vm._s(_vm.detail.company_name))])
          ]),
          _vm._v(" "),
          _c(
            "vs-tabs",
            [
              _c("vs-tab", { attrs: { label: "Profile Information" } }, [
                _c(
                  "form",
                  {
                    ref: "companyInformationForm",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.storeInfo($event, "companyInfo")
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
                              "vs-lg": "4",
                              "vs-md": "4",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
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
                        ),
                        _vm._v(" "),
                        _c(
                          "vs-col",
                          {
                            attrs: {
                              "vs-lg": "8",
                              "vs-md": "4",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vs-col",
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("input", {
                                      attrs: { type: "hidden", name: "id" },
                                      domProps: { value: _vm.detail.uid }
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
                                        label: "Company Name",
                                        name: "company_name"
                                      },
                                      model: {
                                        value: _vm.detail.company_name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "company_name",
                                            $$v
                                          )
                                        },
                                        expression: "detail.company_name"
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
                                              "company_name"
                                            ),
                                            expression:
                                              "errors.has('company_name')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(
                                            _vm.errors.first("company_name")
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
                                  "vs-md": "4",
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
                                      attrs: { label: "Email", name: "email" },
                                      model: {
                                        value: _vm.detail.email,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "email", $$v)
                                        },
                                        expression: "detail.email"
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
                                            value: _vm.errors.has("email"),
                                            expression: "errors.has('email')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("email"))
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
                                  "vs-md": "4",
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
                                        label: "Username",
                                        name: "username"
                                      },
                                      model: {
                                        value: _vm.detail.username,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "username", $$v)
                                        },
                                        expression: "detail.username"
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
                                            value: _vm.errors.has("username"),
                                            expression: "errors.has('username')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("username"))
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
                                  "vs-md": "4",
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
                                        label: "First Name",
                                        name: "first_name"
                                      },
                                      model: {
                                        value: _vm.detail.first_name,
                                        callback: function($$v) {
                                          _vm.$set(
                                            _vm.detail,
                                            "first_name",
                                            $$v
                                          )
                                        },
                                        expression: "detail.first_name"
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
                                            value: _vm.errors.has("first_name"),
                                            expression:
                                              "errors.has('first_name')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("first_name"))
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
                                  "vs-md": "4",
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
                                        label: "Last Name",
                                        name: "last_name"
                                      },
                                      model: {
                                        value: _vm.detail.last_name,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "last_name", $$v)
                                        },
                                        expression: "detail.last_name"
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
                                            value: _vm.errors.has("last_name"),
                                            expression:
                                              "errors.has('last_name')"
                                          }
                                        ]
                                      },
                                      [
                                        _vm._v(
                                          _vm._s(_vm.errors.first("last_name"))
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
                                  "vs-md": "4",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("vs-input", {
                                      attrs: { label: "Cell", name: "cell" },
                                      model: {
                                        value: _vm.detail.cell,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "cell", $$v)
                                        },
                                        expression: "detail.cell"
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
                                  "vs-lg": "6",
                                  "vs-md": "4",
                                  "vs-sm": "12",
                                  "vs-xs": "12"
                                }
                              },
                              [
                                _c(
                                  "vx-input-group",
                                  [
                                    _c("vs-input", {
                                      attrs: { label: "work", name: "work" },
                                      model: {
                                        value: _vm.detail.work,
                                        callback: function($$v) {
                                          _vm.$set(_vm.detail, "work", $$v)
                                        },
                                        expression: "detail.work"
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
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      [
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
                              [
                                _c("vs-input", {
                                  attrs: { label: "address", name: "address" },
                                  model: {
                                    value: _vm.detail.address,
                                    callback: function($$v) {
                                      _vm.$set(_vm.detail, "address", $$v)
                                    },
                                    expression: "detail.address"
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
                              "vs-lg": "6",
                              "vs-md": "6",
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
                                    type: "url",
                                    placeholder: "https://www.example.com",
                                    label: "Address / URL",
                                    name: "url"
                                  },
                                  model: {
                                    value: _vm.detail.company_website,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.detail,
                                        "company_website",
                                        $$v
                                      )
                                    },
                                    expression: "detail.company_website"
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
                              "vs-lg": "6",
                              "vs-md": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vx-input-group",
                              [
                                _c("vs-input", {
                                  attrs: { label: "City", name: "city" },
                                  model: {
                                    value: _vm.detail.city,
                                    callback: function($$v) {
                                      _vm.$set(_vm.detail, "city", $$v)
                                    },
                                    expression: "detail.city"
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
                              "vs-lg": "6",
                              "vs-md": "6",
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
                                    label: "State / Province",
                                    name: "state_province"
                                  },
                                  model: {
                                    value: _vm.detail.state_province,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.detail,
                                        "state_province",
                                        $$v
                                      )
                                    },
                                    expression: "detail.state_province"
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
                              "vs-lg": "6",
                              "vs-md": "6",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c("vx-input-group", {}, [
                              _c("label", { staticClass: "vs-input--label" }, [
                                _vm._v(
                                  "\n                                    Country\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  staticClass:
                                    "vs-inputx vs-input--input normal",
                                  attrs: { name: "country" }
                                },
                                _vm._l(_vm.countries, function(country, index) {
                                  return _c("option", { key: index }, [
                                    _vm._v(_vm._s(country.name))
                                  ])
                                }),
                                0
                              )
                            ])
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
                              [
                                _c("vs-input", {
                                  attrs: {
                                    label: "Zip / Postal Code",
                                    name: "zipcode"
                                  },
                                  model: {
                                    value: _vm.detail.zip_postal,
                                    callback: function($$v) {
                                      _vm.$set(_vm.detail, "zip_postal", $$v)
                                    },
                                    expression: "detail.zip_postal"
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
                              "vs-lg": "12",
                              "vs-md": "12",
                              "vs-sm": "12",
                              "vs-xs": "12"
                            }
                          },
                          [
                            _c(
                              "vx-input-group",
                              { staticClass: "mt-5" },
                              [
                                _c("vs-textarea", {
                                  staticStyle: { resize: "vertical" },
                                  attrs: {
                                    counter: "200",
                                    type: "url",
                                    label: "Description",
                                    name: "description"
                                  },
                                  model: {
                                    value: _vm.detail.description,
                                    callback: function($$v) {
                                      _vm.$set(_vm.detail, "description", $$v)
                                    },
                                    expression: "detail.description"
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
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "mt-base" },
                      [
                        _c(
                          "vs-col",
                          { staticClass: "flex justify-end" },
                          [
                            _c(
                              "vs-button",
                              { attrs: { type: "gradient", button: "submit" } },
                              [_vm._v(" Save Changes")]
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
              ]),
              _vm._v(" "),
              _c("vs-tab", { attrs: { label: "Package Information" } }, [
                _c(
                  "form",
                  {
                    ref: "packageInformationForm",
                    on: {
                      submit: function($event) {
                        $event.preventDefault()
                        return _vm.storePackageInfo($event, "packageInfo")
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
                              [
                                _c("input", {
                                  attrs: { type: "hidden", name: "id" },
                                  domProps: { value: _vm.detail.uid }
                                }),
                                _vm._v(" "),
                                _c(
                                  "label",
                                  { staticClass: "vs-input--label" },
                                  [_vm._v("Start Date")]
                                ),
                                _vm._v(" "),
                                _c("datepicker", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  attrs: {
                                    name: "start_package",
                                    placeholder: "Start Date"
                                  },
                                  model: {
                                    value: _vm.detail.start_package,
                                    callback: function($$v) {
                                      _vm.$set(_vm.detail, "start_package", $$v)
                                    },
                                    expression: "detail.start_package"
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
                                        value: _vm.errors.has("start_package"),
                                        expression:
                                          "errors.has('start_package')"
                                      }
                                    ]
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("start_package"))
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
                              [
                                _c(
                                  "label",
                                  { staticClass: "vs-input--label" },
                                  [_vm._v("Expiry Date")]
                                ),
                                _vm._v(" "),
                                _c("datepicker", {
                                  directives: [
                                    {
                                      name: "validate",
                                      rawName: "v-validate",
                                      value: "required",
                                      expression: "'required'"
                                    }
                                  ],
                                  attrs: {
                                    name: "expire_package",
                                    placeholder: "Expiry Date"
                                  },
                                  model: {
                                    value: _vm.detail.expire_package,
                                    callback: function($$v) {
                                      _vm.$set(
                                        _vm.detail,
                                        "expire_package",
                                        $$v
                                      )
                                    },
                                    expression: "detail.expire_package"
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
                                        value: _vm.errors.has("expire_package"),
                                        expression:
                                          "errors.has('expire_package')"
                                      }
                                    ]
                                  },
                                  [
                                    _vm._v(
                                      _vm._s(_vm.errors.first("expire_package"))
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
                            _c("vx-input-group", {}, [
                              _c("label", { staticClass: "vs-input--label" }, [
                                _vm._v(
                                  "\n                                    Package\n                                "
                                )
                              ]),
                              _vm._v(" "),
                              _c(
                                "select",
                                {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.detail.package,
                                      expression: "detail.package"
                                    }
                                  ],
                                  staticClass:
                                    "vs-inputx vs-input--input normal",
                                  attrs: { name: "package" },
                                  on: {
                                    change: function($event) {
                                      var $$selectedVal = Array.prototype.filter
                                        .call($event.target.options, function(
                                          o
                                        ) {
                                          return o.selected
                                        })
                                        .map(function(o) {
                                          var val =
                                            "_value" in o ? o._value : o.value
                                          return val
                                        })
                                      _vm.$set(
                                        _vm.detail,
                                        "package",
                                        $event.target.multiple
                                          ? $$selectedVal
                                          : $$selectedVal[0]
                                      )
                                    }
                                  }
                                },
                                [
                                  _c("option", { attrs: { value: "p1" } }, [
                                    _vm._v("No Package")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "p2" } }, [
                                    _vm._v("Gold Subscriber")
                                  ]),
                                  _vm._v(" "),
                                  _c("option", { attrs: { value: "p3" } }, [
                                    _vm._v("Platinium Subscriber")
                                  ])
                                ]
                              )
                            ])
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
                              [
                                _c("vs-input", {
                                  attrs: {
                                    disabled: "",
                                    label: "Package Status"
                                  },
                                  model: {
                                    value: _vm.detail.is_expired,
                                    callback: function($$v) {
                                      _vm.$set(_vm.detail, "is_expired", $$v)
                                    },
                                    expression: "detail.is_expired"
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
                    ),
                    _vm._v(" "),
                    _c(
                      "vs-row",
                      { staticClass: "mt-base" },
                      [
                        _c(
                          "vs-col",
                          { staticClass: "flex justify-end" },
                          [
                            _c(
                              "vs-button",
                              { attrs: { type: "gradient", button: "submit" } },
                              [_vm._v(" Save Changes")]
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
              ]),
              _vm._v(" "),
              _c(
                "vs-tab",
                { attrs: { label: "Approval Status" } },
                [
                  _c("label", { staticClass: "vs-input--label" }, [
                    _vm._v("Approval Status")
                  ]),
                  _vm._v(" "),
                  _c(
                    "select",
                    {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.detail.user_status,
                          expression: "detail.user_status"
                        }
                      ],
                      staticClass: "vs-inputx vs-input--input normal",
                      on: {
                        change: function($event) {
                          var $$selectedVal = Array.prototype.filter
                            .call($event.target.options, function(o) {
                              return o.selected
                            })
                            .map(function(o) {
                              var val = "_value" in o ? o._value : o.value
                              return val
                            })
                          _vm.$set(
                            _vm.detail,
                            "user_status",
                            $event.target.multiple
                              ? $$selectedVal
                              : $$selectedVal[0]
                          )
                        }
                      }
                    },
                    [
                      _c("option", { attrs: { value: "not approved" } }, [
                        _vm._v("Un Approved")
                      ]),
                      _vm._v(" "),
                      _c("option", { attrs: { value: "approved" } }, [
                        _vm._v("Approved")
                      ])
                    ]
                  ),
                  _vm._v(" "),
                  _c(
                    "vs-button",
                    {
                      staticClass: "w-full mt-base",
                      attrs: { type: "gradient" },
                      on: {
                        click: function($event) {
                          return _vm.updateStatus(_vm.detail.id)
                        }
                      }
                    },
                    [_vm._v("Save Changes")]
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
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AccountDetail.vue?vue&type=template&id=2fa4e724&":
/*!***************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/AccountDetail.vue?vue&type=template&id=2fa4e724& ***!
  \***************************************************************************************************************************************************************************************************************/
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
      [
        !_vm.isMobile()
          ? _c("desktop-view", {
              attrs: {
                productAdded: _vm.productAdded,
                categories: _vm.userCategories,
                sites: _vm.sites,
                countries: _vm.countries,
                detail: _vm.sponsor
              },
              on: {
                "submit-product": _vm.onSubmit,
                "change-status": _vm.updateStatus,
                "package-submitted": _vm.packageSubmit,
                "info-submitted": _vm.informationSubmit
              }
            })
          : _c("mobile-view", {
              attrs: {
                sites: _vm.sites,
                countries: _vm.countries,
                detail: _vm.sponsor
              },
              on: {
                "change-status": _vm.updateStatus,
                "package-submitted": _vm.packageSubmit,
                "info-submitted": _vm.informationSubmit
              }
            })
      ]
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/components/DesktopView.vue":
/*!*****************************************************!*\
  !*** ./resources/js/src/components/DesktopView.vue ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _DesktopView_vue_vue_type_template_id_60e7d15e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DesktopView.vue?vue&type=template&id=60e7d15e& */ "./resources/js/src/components/DesktopView.vue?vue&type=template&id=60e7d15e&");
/* harmony import */ var _DesktopView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DesktopView.vue?vue&type=script&lang=js& */ "./resources/js/src/components/DesktopView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DesktopView.vue?vue&type=style&index=0&lang=css& */ "./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DesktopView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DesktopView_vue_vue_type_template_id_60e7d15e___WEBPACK_IMPORTED_MODULE_0__["render"],
  _DesktopView_vue_vue_type_template_id_60e7d15e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/DesktopView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/DesktopView.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/src/components/DesktopView.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css&":
/*!**************************************************************************************!*\
  !*** ./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css& ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopView.vue?vue&type=style&index=0&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=style&index=0&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/components/DesktopView.vue?vue&type=template&id=60e7d15e&":
/*!************************************************************************************!*\
  !*** ./resources/js/src/components/DesktopView.vue?vue&type=template&id=60e7d15e& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_template_id_60e7d15e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./DesktopView.vue?vue&type=template&id=60e7d15e& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/DesktopView.vue?vue&type=template&id=60e7d15e&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_template_id_60e7d15e___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DesktopView_vue_vue_type_template_id_60e7d15e___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/components/MobileView.vue":
/*!****************************************************!*\
  !*** ./resources/js/src/components/MobileView.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _MobileView_vue_vue_type_template_id_3efe6e27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./MobileView.vue?vue&type=template&id=3efe6e27& */ "./resources/js/src/components/MobileView.vue?vue&type=template&id=3efe6e27&");
/* harmony import */ var _MobileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./MobileView.vue?vue&type=script&lang=js& */ "./resources/js/src/components/MobileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _MobileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _MobileView_vue_vue_type_template_id_3efe6e27___WEBPACK_IMPORTED_MODULE_0__["render"],
  _MobileView_vue_vue_type_template_id_3efe6e27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/components/MobileView.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/components/MobileView.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/src/components/MobileView.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileView.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MobileView.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileView_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/components/MobileView.vue?vue&type=template&id=3efe6e27&":
/*!***********************************************************************************!*\
  !*** ./resources/js/src/components/MobileView.vue?vue&type=template&id=3efe6e27& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileView_vue_vue_type_template_id_3efe6e27___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./MobileView.vue?vue&type=template&id=3efe6e27& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/components/MobileView.vue?vue&type=template&id=3efe6e27&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileView_vue_vue_type_template_id_3efe6e27___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_MobileView_vue_vue_type_template_id_3efe6e27___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/src/views/AccountDetail.vue":
/*!**************************************************!*\
  !*** ./resources/js/src/views/AccountDetail.vue ***!
  \**************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccountDetail_vue_vue_type_template_id_2fa4e724___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccountDetail.vue?vue&type=template&id=2fa4e724& */ "./resources/js/src/views/AccountDetail.vue?vue&type=template&id=2fa4e724&");
/* harmony import */ var _AccountDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccountDetail.vue?vue&type=script&lang=js& */ "./resources/js/src/views/AccountDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccountDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccountDetail_vue_vue_type_template_id_2fa4e724___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccountDetail_vue_vue_type_template_id_2fa4e724___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/AccountDetail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/AccountDetail.vue?vue&type=script&lang=js&":
/*!***************************************************************************!*\
  !*** ./resources/js/src/views/AccountDetail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountDetail.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AccountDetail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/AccountDetail.vue?vue&type=template&id=2fa4e724&":
/*!*********************************************************************************!*\
  !*** ./resources/js/src/views/AccountDetail.vue?vue&type=template&id=2fa4e724& ***!
  \*********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetail_vue_vue_type_template_id_2fa4e724___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./AccountDetail.vue?vue&type=template&id=2fa4e724& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/AccountDetail.vue?vue&type=template&id=2fa4e724&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetail_vue_vue_type_template_id_2fa4e724___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_AccountDetail_vue_vue_type_template_id_2fa4e724___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);