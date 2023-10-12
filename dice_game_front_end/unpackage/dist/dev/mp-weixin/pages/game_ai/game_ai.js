(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/game_ai/game_ai"],{

/***/ 67:
/*!*********************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/main.js?{"page":"pages%2Fgame_ai%2Fgame_ai"} ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _game_ai = _interopRequireDefault(__webpack_require__(/*! ./pages/game_ai/game_ai.vue */ 68));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_game_ai.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 68:
/*!**************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue ***!
  \**************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_ai.vue?vue&type=template&id=5e198a32& */ 69);
/* harmony import */ var _game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_ai.vue?vue&type=script&lang=js& */ 71);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_ai.vue?vue&type=style&index=0&lang=css& */ 73);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["render"],
  _game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/game_ai/game_ai.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 69:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue?vue&type=template&id=5e198a32& ***!
  \*********************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game_ai.vue?vue&type=template&id=5e198a32& */ 70);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_template_id_5e198a32___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 70:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue?vue&type=template&id=5e198a32& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    dice: function () {
      return __webpack_require__.e(/*! import() | components/dice/dice */ "components/dice/dice").then(__webpack_require__.bind(null, /*! @/components/dice/dice.vue */ 86))
    },
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. 排查组件名称拼写是否正确")
    console.error(
      "2. 排查组件是否符合 easycom 规范，文档：https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. 若组件不符合 easycom 规范，需手动引入，并在 components 中注册该组件"
    )
  } else {
    throw e
  }
}
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 71:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game_ai.vue?vue&type=script&lang=js& */ 72);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 72:
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ 18));
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }
function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }
function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }
var Dice = function Dice() {
  __webpack_require__.e(/*! require.ensure | components/dice/dice */ "components/dice/dice").then((function () {
    return resolve(__webpack_require__(/*! @/components/dice/dice.vue */ 86));
  }).bind(null, __webpack_require__)).catch(__webpack_require__.oe);
};
var _default = {
  components: {
    Dice: Dice
  },
  onLoad: function onLoad(option) {
    if (option.bureauNum) {
      this.bureauNum = +option.bureauNum;
    }
  },
  data: function data() {
    return {
      currentRound: 1,
      numList: [1, 2, 3, 4, 5],
      currentPlayer: 1,
      player1Score: 100,
      player2Score: 100,
      player1DiceValues: [1, 1, 1, 1, 1],
      player2DiceValues: [1, 1, 1, 1, 1],
      player1LockedDices: [false, false, false, false, false],
      player2LockedDices: [false, false, false, false, false],
      showMultiplierDialog: false,
      player1Multiplier: 1,
      player2Multiplier: 1,
      player1Multiplying: [],
      // 倍率数组
      isComputerOpponent: true,
      // 判断是否投掷过 投掷后不允许再次投掷
      isFlag: false,
      // 局数  默认1局
      bureauNum: 2,
      // 当前局数
      currentBureauNum: 1,
      // 筛子类型 默认为0 
      player1Type: 0,
      player2Type: 0
    };
  },
  methods: {
    rollDices: function rollDices() {
      var _this = this;
      if (this.isFlag) return;
      if (this.currentPlayer === 1) {
        this.isFlag = true;
        this.player1DiceValues = this.player1DiceValues.map(function (value, index) {
          return _this.player1LockedDices[index] ? value : Math.floor(Math.random() * 6) + 1;
        });
      }
      if (this.currentRound == 3) {
        this.computerPlay();
      }
    },
    confirmLock1: function confirmLock1() {
      if (this.currentRound == 3 || this.isFlag == false) return;
      this.showMultiplierDialog = true;
    },
    countOccurrences: function countOccurrences(arr, val) {
      var result = arr.reduce(function (acc, curr) {
        return curr === val ? acc + 1 : acc;
      }, 0);
      console.log(result, val);
      return result;
    },
    // 设置倍率
    setMultiplier: function setMultiplier(value) {
      if (this.currentRound < 3) {
        if (value === 0 && this.player1Multiplying.length) {
          // 多个倍率0 只加1 [0,0]  倍率和为1
          if (!this.player1Multiplying.includes(value)) {
            this.player1Multiplying.push(value);
          }
        } else this.player1Multiplying.push(value);
      }
      this.showMultiplierDialog = false;
      this.computerPlay();
      // console.log(this.calculateScore(this.player1DiceValues));
      // const score = this.calculateScore(this.player1DiceValues);
      // this.player1Score += score * this.player1Multiplier;
      // if (this.isComputerOpponent) {
      // 	setTimeout(() => this.computerPlay(), 1000);
      // } else {
      // 	this.currentPlayer = 2;
      // 	this.showMultiplierDialog = false;
      // }
    },
    computerPlay: function computerPlay() {
      this.rollDicesForComputer();
      this.autoLockDices();

      // setTimeout(() => {
      // 	// const multiplier = this.autoChooseMultiplier();

      // }, 500);
    },
    rollDicesForComputer: function rollDicesForComputer() {
      var _this2 = this;
      this.player2DiceValues = this.player2DiceValues.map(function (value, index) {
        return _this2.player2LockedDices[index] ? value : Math.floor(Math.random() * 6) + 1;
      });
      // 人机结束后 可以进行第二轮投掷
      this.isFlag = false;
      if (this.currentRound == 3) {
        this.setMultiplierForComputer();
        return;
      }
      // 人机结束后  当前轮次++
      this.currentRound++;
    },
    autoLockDices: function autoLockDices() {
      this.player2LockedDices = this.player2DiceValues.map(function (value) {
        return value > 4;
      });
    },
    // autoChooseMultiplier() {
    // 	const score = this.calculateScore(this.player2DiceValues);
    // 	if (score > 50) {
    // 		return 3;
    // 	} else if (score > 30) {
    // 		return 2;
    // 	} else if (score > 10) {
    // 		return 1;
    // 	} else {
    // 		return 0;
    // 	}
    // },
    // 判断轮次是否结束  结束后先计算分数后判断局数是否为最后一局
    setMultiplierForComputer: function setMultiplierForComputer() {
      var _this3 = this;
      if (this.currentRound == 3) {
        var player1 = this.judgeType(this.player1DiceValues);
        var player2 = this.judgeType(this.player2DiceValues);
        uni.showLoading({
          title: "\u7B2C".concat(this.currentBureauNum, "\u5C40\u5206\u6570\u8BA1\u7B97\u4E2D\uFF0C\u8BF7\u7A0D\u540E")
        });
        setTimeout(function () {
          _this3.getDiceTypeAndScore(player1, player2);
        }, 1000);
        return;
      }
      // this.player2Multiplier = value;
      // const score = this.calculateScore(this.player2DiceValues);
      // this.player2Score += score * this.player2Multiplier;
      this.showMultiplierDialog = false;
      this.currentPlayer = 1;
      // this.currentRound++;
    },
    // 获取骰子类型以及骰子点数 最后进行结算 1 玩家  2 人机
    getDiceTypeAndScore: function getDiceTypeAndScore(dice1Values, dice2Values) {
      var _this4 = this;
      console.log(dice1Values, dice2Values, 'dice1Values,dice2Values');
      var differenceNum = dice1Values.score - dice2Values.score;
      var multiplying = this.player1Multiplying.reduce(function (acc, cur) {
        if (cur === 0) {
          acc++;
        } else {
          acc += cur;
        }
        return acc;
      }, 0);
      if (differenceNum > 0) {
        this.player1Score = this.player1Score + differenceNum * multiplying;
        this.player2Score = this.player2Score - differenceNum * multiplying;
      } else {
        this.player1Score = this.player1Score + differenceNum * multiplying;
        this.player2Score = this.player2Score - differenceNum * multiplying;
      }
      // this.resetDice()

      if (this.currentBureauNum == this.bureauNum) {
        setTimeout(function () {
          uni.hideLoading();
          uni.showToast({
            title: '对局已结束！',
            icon: 'none'
          });
          _this4.hideButton();
        }, 1000);
        return;
      }
      if (this.player1Score <= 0 || this.player2Score <= 0) {
        uni.hideLoading();
        uni.showToast({
          title: '玩家分数不足对局结束！',
          icon: 'none',
          duration: 3000
        });
        this.hideButton();
        return;
      }
      this.currentBureauNum++;
      this.currentRound = 1;
      this.showMultiplierDialog = false;
      this.currentPlayer = 1;
      uni.hideLoading();
      this.resetDice();
    },
    // calculateScore(diceValues) {
    // 	let score = 0;
    // 	const sortedDice = [...diceValues].sort();
    // 	const uniqueDice = [...new Set(sortedDice)];
    // 	console.log('sortedDice', sortedDice);
    // 	console.log('uniqueDice', uniqueDice)
    // 	const occurrences = uniqueDice.map(value => this.countOccurrences(sortedDice,
    // 		value));
    // 	console.log('occurrences', occurrences)
    // 	const double = occurrences.filter(o => o === 2).length;
    // 	const triple = occurrences.filter(o => o === 3).length;
    // 	const quadruple = occurrences.includes(4);
    // 	const quintuple = occurrences.includes(5);
    // 	if (quintuple) {
    // 		return 100; // 五连
    // 	} else if (quadruple) {
    // 		return 40; // 四连
    // 	} else if (triple && double) {
    // 		return 20; // 葫芦
    // 	} else if (triple) {
    // 		score += 10; // 三连
    // 	}
    // 	score += double * 10; // 双对
    // 	if (sortedDice.join(',') === '1,2,3,4,5' || sortedDice.join(',') === '2,3,4,5,6') {
    // 		score += 60; // 大顺子
    // 	} else if (uniqueDice.length === 5) {
    // 		score += 30; // 小顺子
    // 	}
    // 	return score;
    // },
    updateLockStatus: function updateLockStatus(player, diceIndex, status) {
      if (player === 1) {
        this.$set(this.player1LockedDices, diceIndex - 1, status);
      } else {
        this.$set(this.player2LockedDices, diceIndex - 1, status);
      }
    },
    updateDiceValue: function updateDiceValue(player, diceIndex, value) {
      if (player === 1) {
        this.player1DiceValues[diceIndex - 1] = value;
      } else {
        this.player2DiceValues[diceIndex - 1] = value;
      }
    },
    navigateBack: function navigateBack() {
      // 你的返回逻辑
      uni.navigateBack();
    },
    // 判断骰子类型 1双对 2三连 3葫芦 4四连 5五连 6小顺 7大顺 
    judgeType: function judgeType(current) {
      var sortedDices = current.sort();
      var uniqueDices = (0, _toConsumableArray2.default)(new Set(sortedDices));
      var duplicatedElements = {};
      switch (uniqueDices.length) {
        case 1:
          // 五连
          duplicatedElements[uniqueDices[0]] = 5;
          duplicatedElements.type = 5;
          duplicatedElements.score = uniqueDices[0] * 5 + 100;
          break;
        case 2:
          duplicatedElements = this.setForEach(uniqueDices, current, uniqueDices.length);
          break;
        case 3:
          duplicatedElements = this.setForEach(uniqueDices, current, uniqueDices.length);
          break;
        case 4:
          duplicatedElements.type = 0;
          duplicatedElements.score = current.reduce(function (acc, cur) {
            return acc + cur;
          }, 0);
          break;
        case 5:
          // 大顺子
          if (uniqueDices[uniqueDices.length - 1] - uniqueDices[0] == 4) {
            duplicatedElements.type = 7;
            duplicatedElements.score = current.reduce(function (acc, cur) {
              return acc + cur;
            }, 0) + 60;
          } else if (uniqueDices[uniqueDices.length - 2] - uniqueDices[0] == 3) {
            // 小顺子
            duplicatedElements.type = 6;
            duplicatedElements.score = current.reduce(function (acc, cur) {
              return acc + cur;
            }, 0) + 30;
          } else {
            duplicatedElements.type = 0;
            duplicatedElements.score = current.reduce(function (acc, cur) {
              return acc + cur;
            }, 0);
          }
          break;
      }
      return duplicatedElements;
    },
    // 骰子类型出现两对 三连 length 3   四连 葫芦 length 2
    setForEach: function setForEach(setArr, current, length) {
      var duplicatedElements = {};
      var score = 0;
      var _iterator = _createForOfIteratorHelper(setArr),
        _step;
      try {
        var _loop = function _loop() {
          var ele = _step.value;
          var repetLength = current.filter(function (item) {
            return ele == item;
          }).length;
          if (repetLength > 1) {
            score += ele * repetLength;
          } else score += ele;

          // 判断类型  2 包括 葫芦和四连  3包括 三连和两对
          if (length == 2) {
            if (repetLength == 2) {
              duplicatedElements.type = 3;
            } else if (repetLength == 4) {
              duplicatedElements.type = 4;
            }
          } else if (length == 3) {
            if (repetLength == 3) {
              duplicatedElements.type = 2;
            } else if (repetLength == 2) {
              duplicatedElements.type = 1;
            }
          }
        };
        for (_iterator.s(); !(_step = _iterator.n()).done;) {
          _loop();
        }
      } catch (err) {
        _iterator.e(err);
      } finally {
        _iterator.f();
      }
      if (duplicatedElements.type == 1) {
        score += 10;
      } else if (duplicatedElements.type == 2) {
        score += 10;
      } else if (duplicatedElements.type == 3) {
        score += 20;
      } else if (duplicatedElements.type == 4) {
        score += 40;
      }
      duplicatedElements.score = score;
      return duplicatedElements;
    },
    // 重置骰子
    resetDice: function resetDice() {
      this.player1DiceValues = [1, 1, 1, 1, 1];
      this.player2DiceValues = [1, 1, 1, 1, 1];
      this.player1LockedDices = [false, false, false, false, false];
      this.player2LockedDices = [false, false, false, false, false];
    },
    hideButton: function hideButton() {
      this.currentPlayer = false;
    }
  }
};
exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["default"]))

/***/ }),

/***/ 73:
/*!***********************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue?vue&type=style&index=0&lang=css& ***!
  \***********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game_ai.vue?vue&type=style&index=0&lang=css& */ 74);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_ai_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 74:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_ai/game_ai.vue?vue&type=style&index=0&lang=css& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[67,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/game_ai/game_ai.js.map