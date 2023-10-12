(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/game_local/game_local"],{

/***/ 59:
/*!***************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/main.js?{"page":"pages%2Fgame_local%2Fgame_local"} ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(wx, createPage) {

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ 4);
__webpack_require__(/*! uni-pages */ 26);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 25));
var _game_local = _interopRequireDefault(__webpack_require__(/*! ./pages/game_local/game_local.vue */ 60));
// @ts-ignore
wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_game_local.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/wx.js */ 1)["default"], __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 2)["createPage"]))

/***/ }),

/***/ 60:
/*!********************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue ***!
  \********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./game_local.vue?vue&type=template&id=495bb886& */ 61);
/* harmony import */ var _game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./game_local.vue?vue&type=script&lang=js& */ 63);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./game_local.vue?vue&type=style&index=0&lang=css& */ 65);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 32);

var renderjs





/* normalize component */

var component = Object(_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["render"],
  _game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null,
  false,
  _game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/game_local/game_local.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 61:
/*!***************************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue?vue&type=template&id=495bb886& ***!
  \***************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game_local.vue?vue&type=template&id=495bb886& */ 62);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_17_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_template_id_495bb886___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 62:
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--17-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue?vue&type=template&id=495bb886& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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

/***/ 63:
/*!*********************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game_local.vue?vue&type=script&lang=js& */ 64);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_13_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 64:
/*!****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--13-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue?vue&type=script&lang=js& ***!
  \****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
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
      numList: [1, 2, 3, 4, 5],
      currentRound: 1,
      currentPlayer: 1,
      player1Score: 1000,
      player2Score: 1000,
      player1DiceValues: [1, 1, 1, 1, 1],
      player2DiceValues: [1, 1, 1, 1, 1],
      player1LockedDices: [false, false, false, false, false],
      player2LockedDices: [false, false, false, false, false],
      showMultiplierDialog: false,
      player1Multiplier: 1,
      totalMultiplier: 1,
      player2Multiplier: 1,
      currentBureauNum: 1,
      bureauNum: 1,
      isFlag: false,
      player1Multiplying: [] // 倍率数组
    };
  },

  methods: {
    rollDices: function rollDices() {
      var _this = this;
      if (this.currentPlayer === 1) {
        if (this.isFlag) return;
        this.isFlag = true;
        this.player1DiceValues = this.player1DiceValues.map(function (value, index) {
          return _this.player1LockedDices[index] ? value : Math.floor(Math.random() * 6) + 1;
        });
        if (this.currentRound == 3) {
          this.currentPlayer = 2;
        }
      } else {
        this.player2DiceValues = this.player2DiceValues.map(function (value, index) {
          return _this.player2LockedDices[index] ? value : Math.floor(Math.random() * 6) + 1;
        });
        if (this.currentRound == 3) {
          this.isFlag = false;
          this.currentPlayer = 1;
          this.setMultiplierForComputer();
          return;
        }
      }
    },
    confirmLock: function confirmLock() {
      if (this.currentRound == 3 || this.isFlag == false) return;
      this.showMultiplierDialog = true;
      // <-- Added this to show the multiplier dialog for player 1
    },
    setMultiplier: function setMultiplier(value) {
      if (this.currentRound < 3) {
        if (value === 0 && this.player1Multiplying.length) {
          // 多个倍率0 只加1 [0,0]  倍率和为1
          if (!this.player1Multiplying.includes(value)) {
            this.player1Multiplying.push(value);
          }
        } else this.player1Multiplying.push(value);
      }
      if (this.currentPlayer === 1) {
        this.currentPlayer = 2;
      } else {
        this.currentPlayer = 1;
        this.isFlag = false;
        this.currentRound++;
      }
      this.showMultiplierDialog = false;

      // if (this.currentPlayer === 1) {
      // 	this.player1Multiplier = value;
      // 	this.player1Score += this.calculateScore(this.player1DiceValues) * this
      // 		.player1Multiplier; // <-- Adjusted score based on multiplier
      // 	this.currentPlayer = 2;
      // 	this.showMultiplierDialog = false;
      // } else {
      // 	this.player2Multiplier = value;
      // 	this.player2Score += this.calculateScore(this.player2DiceValues) * this
      // 		.player2Multiplier; // <-- Adjusted score based on multiplier
      // 	if (this.currentRound < 3) {
      // 		this.currentRound++;
      // 		this.showMultiplierDialog = false;
      // 		this.currentPlayer = 1;
      // 	} else {
      // 		this.finalizeScores();
      // 	}
      // }
    },
    calculateScore: function calculateScore(diceValues) {
      var counts = Array(6).fill(0);
      diceValues.forEach(function (val) {
        return counts[val - 1]++;
      });
      var hasPair = counts.some(function (count) {
        return count === 2;
      });
      var hasThreeOfAKind = counts.some(function (count) {
        return count === 3;
      });
      var hasFourOfAKind = counts.some(function (count) {
        return count === 4;
      });
      var hasFiveOfAKind = counts.some(function (count) {
        return count === 5;
      });
      var isSmallStraight = [0, 1, 2, 3, 5].every(function (val, index) {
        return counts[val] === 1;
      });
      var isLargeStraight1 = [0, 1, 2, 3, 4].every(function (val, index) {
        return counts[val] === 1;
      });
      var isLargeStraight2 = [1, 2, 3, 4, 5].every(function (val, index) {
        return counts[val] === 1;
      });
      var bonusScore = 0;
      if (hasPair) bonusScore += 10;
      if (hasThreeOfAKind) bonusScore += 10;
      if (hasThreeOfAKind && hasPair) bonusScore += 20;
      if (hasFourOfAKind) bonusScore += 40;
      if (hasFiveOfAKind) bonusScore += 100;
      if (isSmallStraight) bonusScore += 30;
      if (isLargeStraight1 || isLargeStraight2) bonusScore += 60;
      return bonusScore;
    },
    finalizeScores: function finalizeScores() {
      var difference = Math.abs(this.player1Score - this.player2Score);
      if (this.player1Score > this.player2Score) {
        this.player1Score += difference;
        this.player2Score -= difference;
      } else if (this.player2Score > this.player1Score) {
        this.player2Score += difference;
        this.player1Score -= difference;
      }
    },
    updateLockStatus: function updateLockStatus(player, index, status) {
      if (player === 1) {
        this.$set(this.player1LockedDices, index - 1, status);
      } else {
        this.$set(this.player2LockedDices, index - 1, status);
      }
    },
    updateDiceValue: function updateDiceValue(player, index, newValue) {
      if (player === 1) {
        this.$set(this.player1DiceValues, index - 1, newValue);
      } else {
        this.$set(this.player2DiceValues, index - 1, newValue);
      }
    },
    navigateBack: function navigateBack() {
      uni.navigateBack();
    },
    // 判断轮次是否结束  结束后先计算分数后判断局数是否为最后一局
    setMultiplierForComputer: function setMultiplierForComputer() {
      var _this2 = this;
      var player1 = this.judgeType(this.player1DiceValues);
      var player2 = this.judgeType(this.player2DiceValues);
      uni.showLoading({
        title: "\u7B2C".concat(this.currentBureauNum, "\u5C40\u5206\u6570\u8BA1\u7B97\u4E2D\uFF0C\u8BF7\u7A0D\u540E")
      });
      setTimeout(function () {
        _this2.getDiceTypeAndScore(player1, player2);
      }, 2000);
      return;
      // this.player2Multiplier = value;
      // const score = this.calculateScore(this.player2DiceValues);
      // this.player2Score += score * this.player2Multiplier;
      this.showMultiplierDialog = false;
      this.currentPlayer = 1;
      // this.currentRound++;
    },
    // 获取骰子类型以及骰子点数 最后进行结算 1 玩家  2 玩家
    getDiceTypeAndScore: function getDiceTypeAndScore(dice1Values, dice2Values) {
      var _this3 = this;
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
          _this3.hideButton();
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

/***/ 65:
/*!*****************************************************************************************************************************************!*\
  !*** C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue?vue&type=style&index=0&lang=css& ***!
  \*****************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./game_local.vue?vue&type=style&index=0&lang=css& */ 66);
/* harmony import */ var _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_mini_css_extract_plugin_dist_loader_js_ref_6_oneOf_1_0_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_css_loader_dist_cjs_js_ref_6_oneOf_1_1_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_stylePostLoader_js_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_6_oneOf_1_2_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_postcss_loader_src_index_js_ref_6_oneOf_1_3_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_D_programs_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_game_local_vue_vue_type_style_index_0_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 66:
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js??ref--6-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--6-oneOf-1-1!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--6-oneOf-1-2!./node_modules/postcss-loader/src??ref--6-oneOf-1-3!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!C:/Users/jayxin/Desktop/pro/pair_programming/dice_game_front_end/pages/game_local/game_local.vue?vue&type=style&index=0&lang=css& ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
    if(false) { var cssReload; }
  

/***/ })

},[[59,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/game_local/game_local.js.map