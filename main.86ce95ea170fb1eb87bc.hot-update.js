"use strict";
self["webpackHotUpdatefls_start"]("main",{

/***/ "./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/string-replace-loader/index.js??ruleSet[1].rules[0].use[1]!./node_modules/css-loader/dist/cjs.js??ruleSet[1].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??ruleSet[1].rules[0].use[3]!./src/scss/style.scss ***!
  \********************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css?family=Roboto:700&display=swap);"]);
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `@charset "UTF-8";
@font-face {
  font-family: icons;
  font-display: swap;
  src: url("../fonts/icons.woff2") format("woff2"), url("../fonts/icons.woff") format("woff");
  font-weight: 400;
  font-style: normal;
}
[class*=_icon-]:before {
  font-family: "icons";
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

[class*=_icon-]:before {
  display: block;
}

._icon-settings:before {
  content: "\\e900";
}

._icon-case:before {
  content: "\\e901";
}

._icon-delivery:before {
  content: "\\e902";
}

._icon-rent:before {
  content: "\\e903";
}

._icon-youtube:before {
  content: "\\e904";
}

._icon-instagram:before {
  content: "\\e905";
}

._icon-guarantee:before {
  content: "\\e906";
}

._icon-sale:before {
  content: "\\e907";
}

._icon-arrow-down:before {
  content: "\\e908";
}

._icon-burger:before {
  content: "\\e909";
}

._icon-filter:before {
  content: "\\e90a";
}

._icon-close:before {
  content: "\\e90b";
}

._icon-all:before {
  content: "\\e90d";
}

._icon-search:before {
  content: "\\e90e";
}

._icon-cart:before {
  content: "\\e90f";
}

._icon-service:before {
  content: "\\e912";
}

* {
  padding: 0px;
  margin: 0px;
  border: 0px;
}

*,
*:before,
*:after {
  box-sizing: border-box;
}

html,
body {
  height: 100%;
  min-width: 320px;
}

body {
  color: #161616;
  line-height: 1;
  font-family: "Golos Text", sans-serif;
  font-size: 1rem;
  -ms-text-size-adjust: 100%;
  -moz-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

input,
button,
textarea {
  font-family: "Golos Text", sans-serif;
  font-size: inherit;
}

button {
  cursor: pointer;
  color: inherit;
  background-color: transparent;
}

a {
  color: inherit;
  text-decoration: none;
}

ul li {
  list-style: none;
}

img {
  vertical-align: top;
}

h1,
h2,
h3,
h4,
h5,
h6 {
  font-weight: inherit;
  font-size: inherit;
}

.lock body {
  overflow: hidden;
  touch-action: none;
  overscroll-behavior: none;
}
.wrapper {
  min-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
@supports (overflow: clip) {
  .wrapper {
    overflow: clip;
  }
}
.wrapper > main {
  flex: 1 1 auto;
}
.wrapper > * {
  min-width: 0;
}

iframe#webpack-dev-server-client-overlay {
  display: none !important;
}

/*
(i) Стилі будуть застосовуватись до
всіх класів, що містять *__container
Наприклад header__container, main__container і т.п.
Сніппет (HTML): cnt
*/
[class*=__container] {
  max-width: 76.875rem;
  margin: 0 auto;
  padding: 0 0.9375rem;
}

.button {
  display: inline-flex;
  padding: 12px 20px;
  border-radius: 8px;
  background-color: #202226;
  color: var(--text-white, #fff);
  font-weight: 400;
  line-height: 1.25;
  transition: all 0.3s ease 0s;
  white-space: nowrap;
}
@media (any-hover: hover) {
  .button:hover {
    background-color: #2b2d32;
  }
}
.button._fw {
  width: 100%;
}
.button_gray {
  color: #161616;
  background-color: #f4f5f8;
}
@media (any-hover: hover) {
  .button_gray:hover {
    background-color: #e9e9e9;
  }
}
.button_white {
  color: #161616;
  background-color: #fff;
}
@media (any-hover: hover) {
  .button_white:hover {
    background-color: #f4f5f8;
  }
}

input[type=text],
input[type=email],
input[type=tel],
textarea {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
}

.input {
  border-radius: 0 !important;
  width: 100%;
  display: block;
  padding: 16px 0px;
  background-color: transparent;
  border-bottom: 2px solid #fff;
  outline: none;
  color: #fff;
  font-weight: 400;
  line-height: 1.25;
}
.input[type=search] {
  padding: 0px;
  border: 1px solid #eee;
  border-radius: 8px;
  background: var(--background-gray, #f4f5f8);
}

.input[placeholder]:not([data-placeholder-nohiden])::placeholder {
  transition: opacity 0.3s;
  color: var(--text-gray-dark-bg, #9f9f9f);
}
.input[placeholder]:not([data-placeholder-nohiden]):focus::placeholder {
  opacity: 0;
}

textarea.input {
  resize: none;
  padding: 0px 0px;
}

[class*=-ibg] {
  position: relative;
}
[class*=-ibg] img {
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  object-fit: cover;
}

[class*=-ibg_contain] img {
  object-fit: contain;
}

.header {
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
}
.top-header {
  background: var(--background-gray, #f4f5f8);
  padding: 1.125rem 0;
  transition: all 0.3s ease 0.2s;
}
@media (min-width: 76.875em) {
  .top-header {
    margin-bottom: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.3125rem , -0.1929945055rem  +  2.5274725275vw , 1.75rem )) {
    .top-header {
      margin-bottom: clamp( 0.3125rem , -0.1929945055rem  +  2.5274725275vw , 1.75rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.3125rem , -0.1929945055rem  +  2.5274725275vw , 1.75rem )) {
    .top-header {
      margin-bottom: calc(0.3125rem + 1.4375 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .top-header {
    margin-bottom: 0.3125rem;
  }
}
.menu-open .top-header {
  transition: all 0.3s ease 0s;
  transform: translate(0px, -100%);
}
.top-header__right {
  display: flex;
  color: var(--text-gray-light-bg, #757575);
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.1428571429;
}
@media (min-width: 80em) {
  .top-header__right {
    gap: 5rem;
  }
}
@media (min-width: 64em) and (max-width: 80em) {
  @supports (gap: clamp( 2rem , -10rem  +  18.75vw , 5rem )) {
    .top-header__right {
      gap: clamp( 2rem , -10rem  +  18.75vw , 5rem );
    }
  }
  @supports not (gap: clamp( 2rem , -10rem  +  18.75vw , 5rem )) {
    .top-header__right {
      gap: calc(2rem + 3 * (100vw - 64rem) / 16);
    }
  }
}
@media (max-width: 64em) {
  .top-header__right {
    gap: 2rem;
  }
}
@media (max-width: 47.99875em) {
  .top-header__right {
    flex: 1 1 auto;
    justify-content: space-between;
  }
}
@media (max-width: 47.99875em) and (min-width: 48em) {
  .top-header__right {
    margin-left: 5.875rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 48em) {
  @supports (margin-left: clamp( 1.5625rem , -1.5178571429rem  +  15.4017857143vw , 5.875rem )) {
    .top-header__right {
      margin-left: clamp( 1.5625rem , -1.5178571429rem  +  15.4017857143vw , 5.875rem );
    }
  }
  @supports not (margin-left: clamp( 1.5625rem , -1.5178571429rem  +  15.4017857143vw , 5.875rem )) {
    .top-header__right {
      margin-left: calc(1.5625rem + 4.3125 * (100vw - 20rem) / 28);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .top-header__right {
    margin-left: 1.5625rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 48em) {
  .top-header__right {
    margin-right: 4.3125rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 48em) {
  @supports (margin-right: clamp( 0.0000000625rem , -3.0803570357rem  +  15.4017854911vw , 4.3125rem )) {
    .top-header__right {
      margin-right: clamp( 0.0000000625rem , -3.0803570357rem  +  15.4017854911vw , 4.3125rem );
    }
  }
  @supports not (margin-right: clamp( 0.0000000625rem , -3.0803570357rem  +  15.4017854911vw , 4.3125rem )) {
    .top-header__right {
      margin-right: calc(0.0000000625rem + 4.3124999375 * (100vw - 20rem) / 28);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .top-header__right {
    margin-right: 0.0000000625rem;
  }
}
@media (max-width: 38.125em) {
  .top-header__right {
    margin-right: auto;
    margin-left: auto;
    justify-content: flex-end;
    padding-left: 0.3125rem;
  }
}
.top-header__links {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.3125rem;
}
@media (max-width: 47.99875em) {
  .top-header__links {
    flex-direction: column;
  }
}
@media (max-width: 38.125em) {
  .top-header__links {
    display: none;
  }
}
.top-header__content {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.bottom-header {
  transition: all 0.3s ease 0.2s;
}
.menu-open .bottom-header {
  transition: all 0.3s ease 0s;
  transform: translate(0px, -175%);
}
.bottom-header__content {
  display: flex;
  justify-content: space-between;
}
.bottom-header__left {
  display: flex;
  justify-content: space-between;
  gap: 0.5rem;
}

.contacts-top-header {
  display: flex;
  flex-wrap: wrap;
  column-gap: 2rem;
  row-gap: 0.3125rem;
}
@media (max-width: 47.99875em) {
  .contacts-top-header {
    flex-direction: column;
  }
}
.contacts-top-header__link {
  transition: all 0.3s ease 0s;
}
.contacts-top-header__link:hover {
  color: #161616;
}

.right-top-header__link {
  transition: all 0.3s ease 0s;
}
.right-top-header__link:hover {
  color: #161616;
}

@media (max-width: 64em) {
  .body-header {
    margin-bottom: 0.5rem;
  }
}
.body-header__content {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
}
.top-menu {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.top-menu__logo {
  display: none;
}
@media (max-width: 38.125em) {
  .top-menu__logo {
    margin-bottom: 2.75rem;
    display: block;
  }
}

.menu {
  display: flex;
  justify-content: center;
  align-items: center;
}
@media (max-width: 38.125em) {
  .menu__body {
    padding: 1.5rem 1rem;
    position: fixed;
    width: 100%;
    height: 100%;
    top: 0;
    left: -100%;
    background-color: #f4f5f8;
    transition: all 0.3s ease 0s;
    z-index: 1;
  }
  .menu-open .menu__body {
    transition: all 0.3s ease 0.2s;
    left: 0;
  }
}
.menu__list {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  flex-wrap: wrap;
}
@media (max-width: 38.125em) {
  .menu__list {
    flex-direction: column;
    align-items: flex-start;
    flex-wrap: nowrap;
    overflow: auto;
    max-height: 60%;
  }
}
@media (max-width: 38.125em) {
  .menu__item {
    display: block;
    position: relative;
    padding-bottom: 16px;
    width: 100%;
  }
  .menu__item::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    background-color: #e9e9e9;
  }
}
@media (max-width: 38.125em) {
  .menu__link {
    padding: 0;
  }
}

.right-body-header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 0.5rem;
}
.right-body-header__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
}
@media (max-width: 38.125em) {
  .right-body-header__btn {
    position: absolute;
    width: calc(100% - 15px);
    display: block;
    text-align: center;
    bottom: 24px;
    left: 50%;
    transform: translate(-50%, 0px);
  }
}
.form-right-body-header {
  display: flex;
}
.form-right-body-header__input {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 0;
  padding: 0;
  border: none !important;
  position: relative;
  outline: none;
}
.form-right-body-header__input::-webkit-search-cancel-button {
  -webkit-appearance: none;
  pointer-events: none;
}
.form-right-body-header__link {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1;
}
.form-right-body-header__close {
  display: none;
  cursor: pointer;
  justify-content: center;
  align-items: center;
  width: 44px;
  height: 44px;
  position: relative;
  z-index: 1;
  margin-left: 8px;
}

.icon-menu {
  display: none;
}
@media (max-width: 38.125em) {
  .icon-menu {
    display: block;
    position: relative;
    padding: 13px 7px;
    width: 2.75rem;
    height: 2.75rem;
    transition: all 0.3s ease 0s;
  }
}
@media (max-width: 38.125em) and (any-hover: none) {
  .icon-menu {
    cursor: default;
  }
}
@media (max-width: 38.125em) {
  .icon-menu span, .icon-menu::before, .icon-menu::after {
    content: "";
    transition: all 0.3s ease 0s;
    right: 50%;
    position: absolute;
    width: 45.4545454545%;
    height: 0.1875rem;
    background-color: #161616;
    transform: translate(50%, 0px);
  }
  .icon-menu::before {
    top: 27.2727272727%;
  }
  .icon-menu::after {
    bottom: 27.2727272727%;
  }
  .icon-menu span {
    top: calc(50% - 0.09375rem);
  }
  .menu-open .icon-menu {
    position: absolute;
    right: 16px;
    z-index: 3;
  }
  .menu-open .icon-menu span {
    width: 0;
  }
  .menu-open .icon-menu::before {
    top: calc(50% - 0.09375rem);
    transform: translate(50%, 50%) rotate(-45deg);
  }
  .menu-open .icon-menu::after {
    bottom: calc(50% - 0.09375rem);
    transform: translate(50%, 50%) rotate(45deg);
  }
}

@media (min-width: 76.875em) {
  .form-footer {
    padding-top: 7.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-top: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-top: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem );
    }
  }
  @supports not (padding-top: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-top: calc(3.75rem + 3.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .form-footer {
    padding-top: 3.75rem;
  }
}
@media (min-width: 76.875em) {
  .form-footer {
    padding-bottom: 7.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-bottom: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-bottom: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem );
    }
  }
  @supports not (padding-bottom: clamp( 3.75rem , 2.4313186813rem  +  6.5934065934vw , 7.5rem )) {
    .form-footer {
      padding-bottom: calc(3.75rem + 3.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .form-footer {
    padding-bottom: 3.75rem;
  }
}
.form-footer__content {
  border-radius: 20px;
  background: var(--background-black, #202226);
  display: flex;
  justify-content: space-between;
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-top: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-top: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-top: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem );
    }
  }
  @supports not (padding-top: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-top: calc(0.75rem + 3 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-top: 0.75rem;
  }
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-bottom: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-bottom: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-bottom: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 0.75rem , -0.6136363636rem  +  6.8181818182vw , 3.75rem )) {
    .form-footer__content {
      padding-bottom: calc(0.75rem + 3 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-bottom: 0.75rem;
  }
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-left: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-left: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-left: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem );
    }
  }
  @supports not (padding-left: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-left: calc(0.75rem + 1.75 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-left: 0.75rem;
  }
}
@media (min-width: 64em) {
  .form-footer__content {
    padding-right: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 64em) {
  @supports (padding-right: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-right: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem );
    }
  }
  @supports not (padding-right: clamp( 0.75rem , -0.0454545455rem  +  3.9772727273vw , 2.5rem )) {
    .form-footer__content {
      padding-right: calc(0.75rem + 1.75 * (100vw - 20rem) / 44);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    padding-right: 0.75rem;
  }
}
@media (min-width: 76.875em) {
  .form-footer__content {
    gap: 7.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (gap: clamp( 1rem , -1.1978021978rem  +  10.989010989vw , 7.25rem )) {
    .form-footer__content {
      gap: clamp( 1rem , -1.1978021978rem  +  10.989010989vw , 7.25rem );
    }
  }
  @supports not (gap: clamp( 1rem , -1.1978021978rem  +  10.989010989vw , 7.25rem )) {
    .form-footer__content {
      gap: calc(1rem + 6.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .form-footer__content {
    gap: 1rem;
  }
}
@media (max-width: 47.99875em) {
  .form-footer__content {
    flex-direction: column;
  }
}
.left-form-footer {
  flex: 0 1 451px;
}
@media (max-width: 47.99875em) {
  .left-form-footer {
    flex: 1 1 auto;
  }
}
.left-form-footer__title {
  color: var(--text-white, #fff);
  font-weight: 400;
  line-height: 1.2;
}
@media (min-width: 76.875em) {
  .left-form-footer__title {
    font-size: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1.5rem , 1.1483516484rem  +  1.7582417582vw , 2.5rem )) {
    .left-form-footer__title {
      font-size: clamp( 1.5rem , 1.1483516484rem  +  1.7582417582vw , 2.5rem );
    }
  }
  @supports not (font-size: clamp( 1.5rem , 1.1483516484rem  +  1.7582417582vw , 2.5rem )) {
    .left-form-footer__title {
      font-size: calc(1.5rem + 1 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-form-footer__title {
    font-size: 1.5rem;
  }
}
@media (min-width: 76.875em) {
  .left-form-footer__title {
    margin-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.75rem , 0.5741758242rem  +  0.8791208791vw , 1.25rem )) {
    .left-form-footer__title {
      margin-bottom: clamp( 0.75rem , 0.5741758242rem  +  0.8791208791vw , 1.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.75rem , 0.5741758242rem  +  0.8791208791vw , 1.25rem )) {
    .left-form-footer__title {
      margin-bottom: calc(0.75rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-form-footer__title {
    margin-bottom: 0.75rem;
  }
}
.left-form-footer__desc {
  color: var(--text-gray-dark-bg, #9f9f9f);
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .left-form-footer__desc {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .left-form-footer__desc {
      font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .left-form-footer__desc {
      font-size: calc(0.875rem + 0.125 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-form-footer__desc {
    font-size: 0.875rem;
  }
}

.right-form-footer {
  flex: 0 1 552px;
}
@media (max-width: 47.99875em) {
  .right-form-footer {
    flex: 1 1 auto;
  }
}
@media (min-width: 76.875em) {
  .right-form-footer__input:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.5rem , 0.2362637363rem  +  1.3186813187vw , 1.25rem )) {
    .right-form-footer__input:not(:last-child) {
      margin-bottom: clamp( 0.5rem , 0.2362637363rem  +  1.3186813187vw , 1.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.5rem , 0.2362637363rem  +  1.3186813187vw , 1.25rem )) {
    .right-form-footer__input:not(:last-child) {
      margin-bottom: calc(0.5rem + 0.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .right-form-footer__input:not(:last-child) {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 76.875em) {
  .right-form-footer__btn {
    margin-top: 2.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-top: clamp( 2rem , 1.7362637363rem  +  1.3186813187vw , 2.75rem )) {
    .right-form-footer__btn {
      margin-top: clamp( 2rem , 1.7362637363rem  +  1.3186813187vw , 2.75rem );
    }
  }
  @supports not (margin-top: clamp( 2rem , 1.7362637363rem  +  1.3186813187vw , 2.75rem )) {
    .right-form-footer__btn {
      margin-top: calc(2rem + 0.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .right-form-footer__btn {
    margin-top: 2rem;
  }
}

.bottom-footer {
  background: var(--background-gray, #f4f5f8);
}
@media (min-width: 76.875em) {
  .bottom-footer {
    padding-top: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem );
    }
  }
  @supports not (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-top: calc(1rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-footer {
    padding-top: 1rem;
  }
}
@media (min-width: 76.875em) {
  .bottom-footer {
    padding-bottom: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-bottom: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-bottom: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem );
    }
  }
  @supports not (padding-bottom: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-footer {
      padding-bottom: calc(1rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-footer {
    padding-bottom: 1rem;
  }
}
.top-bottom-footer {
  border-bottom: 1px solid #e9e9e9;
}
@media (min-width: 76.875em) {
  .top-bottom-footer {
    padding-bottom: 1.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-bottom: clamp( 1.25rem , 1.0741758242rem  +  0.8791208791vw , 1.75rem )) {
    .top-bottom-footer {
      padding-bottom: clamp( 1.25rem , 1.0741758242rem  +  0.8791208791vw , 1.75rem );
    }
  }
  @supports not (padding-bottom: clamp( 1.25rem , 1.0741758242rem  +  0.8791208791vw , 1.75rem )) {
    .top-bottom-footer {
      padding-bottom: calc(1.25rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .top-bottom-footer {
    padding-bottom: 1.25rem;
  }
}
@media (min-width: 76.875em) {
  .top-bottom-footer {
    margin-bottom: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 2.5rem , 3.5137362637rem  +  -1.3186813187vw , 3.25rem )) {
    .top-bottom-footer {
      margin-bottom: clamp( 2.5rem , 3.5137362637rem  +  -1.3186813187vw , 3.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.5rem , 3.5137362637rem  +  -1.3186813187vw , 3.25rem )) {
    .top-bottom-footer {
      margin-bottom: calc(3.25rem + -0.75 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .top-bottom-footer {
    margin-bottom: 3.25rem;
  }
}
.mid-bottom-footer {
  display: flex;
}
@media (min-width: 75em) {
  .mid-bottom-footer {
    gap: 14.5625rem;
  }
}
@media (min-width: 59em) and (max-width: 75em) {
  @supports (gap: clamp( 1rem , -49.01171875rem  +  84.765625vw , 14.5625rem )) {
    .mid-bottom-footer {
      gap: clamp( 1rem , -49.01171875rem  +  84.765625vw , 14.5625rem );
    }
  }
  @supports not (gap: clamp( 1rem , -49.01171875rem  +  84.765625vw , 14.5625rem )) {
    .mid-bottom-footer {
      gap: calc(1rem + 13.5625 * (100vw - 59rem) / 16);
    }
  }
}
@media (max-width: 59em) {
  .mid-bottom-footer {
    gap: 1rem;
  }
}
@media (max-width: 47.99875em) {
  .mid-bottom-footer {
    flex-direction: column;
  }
}
.left-mid-footer {
  flex: 0 1 389px;
}
@media (max-width: 47.99875em) {
  .left-mid-footer {
    flex: 1 1 auto;
  }
}
@media (max-width: 47.99875em) and (min-width: 76.875em) {
  .left-mid-footer {
    margin-bottom: 3.875rem;
  }
}
@media (max-width: 47.99875em) and (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 3.625rem , 3.5370879121rem  +  0.4395604396vw , 3.875rem )) {
    .left-mid-footer {
      margin-bottom: clamp( 3.625rem , 3.5370879121rem  +  0.4395604396vw , 3.875rem );
    }
  }
  @supports not (margin-bottom: clamp( 3.625rem , 3.5370879121rem  +  0.4395604396vw , 3.875rem )) {
    .left-mid-footer {
      margin-bottom: calc(3.625rem + 0.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 47.99875em) and (max-width: 20em) {
  .left-mid-footer {
    margin-bottom: 3.625rem;
  }
}
.left-mid-footer__text {
  color: var(--text-black, #161616);
  font-feature-settings: "liga" off;
  font-weight: 500;
  line-height: 1.1666666667;
  letter-spacing: 0.24px;
}
@media (min-width: 76.875em) {
  .left-mid-footer__text {
    font-size: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1.125rem , 0.9931318681rem  +  0.6593406593vw , 1.5rem )) {
    .left-mid-footer__text {
      font-size: clamp( 1.125rem , 0.9931318681rem  +  0.6593406593vw , 1.5rem );
    }
  }
  @supports not (font-size: clamp( 1.125rem , 0.9931318681rem  +  0.6593406593vw , 1.5rem )) {
    .left-mid-footer__text {
      font-size: calc(1.125rem + 0.375 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__text {
    font-size: 1.125rem;
  }
}
.left-mid-footer__street {
  display: block;
}
@media (min-width: 76.875em) {
  .left-mid-footer__street {
    margin-bottom: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__street {
      margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__street {
      margin-bottom: calc(2rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__street {
    margin-bottom: 2rem;
  }
}
.left-mid-footer__phone {
  display: block;
}
@media (min-width: 76.875em) {
  .left-mid-footer__phone {
    margin-bottom: 0.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.5rem , 1.1758241758rem  +  -0.8791208791vw , 1rem )) {
    .left-mid-footer__phone {
      margin-bottom: clamp( 0.5rem , 1.1758241758rem  +  -0.8791208791vw , 1rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.5rem , 1.1758241758rem  +  -0.8791208791vw , 1rem )) {
    .left-mid-footer__phone {
      margin-bottom: calc(1rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__phone {
    margin-bottom: 1rem;
  }
}
.left-mid-footer__email {
  display: block;
}
@media (min-width: 76.875em) {
  .left-mid-footer__email {
    margin-bottom: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__email {
      margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5rem , 2.1758241758rem  +  -0.8791208791vw , 2rem )) {
    .left-mid-footer__email {
      margin-bottom: calc(2rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__email {
    margin-bottom: 2rem;
  }
}
.left-mid-footer__btns {
  display: flex;
  gap: 8px;
}
@media (min-width: 76.875em) {
  .left-mid-footer__btns {
    margin-bottom: 3.875rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 2.375rem , 1.8475274725rem  +  2.6373626374vw , 3.875rem )) {
    .left-mid-footer__btns {
      margin-bottom: clamp( 2.375rem , 1.8475274725rem  +  2.6373626374vw , 3.875rem );
    }
  }
  @supports not (margin-bottom: clamp( 2.375rem , 1.8475274725rem  +  2.6373626374vw , 3.875rem )) {
    .left-mid-footer__btns {
      margin-bottom: calc(2.375rem + 1.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .left-mid-footer__btns {
    margin-bottom: 2.375rem;
  }
}
.socials-left-mid-footer {
  display: flex;
  align-items: center;
  gap: 8px;
}
.socials-left-mid-footer__item {
  min-width: 44px;
  min-height: 44px;
  max-width: 44px;
  max-height: 44px;
  padding: 10px;
  border-radius: 8px;
  border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);
  display: flex;
  justify-content: center;
  align-items: center;
}
.socials-left-mid-footer__desc {
  margin-left: 16px;
  color: var(--text-gray-light-bg, #757575);
  line-height: 1.25;
}

.right-mid-bottom-footer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  row-gap: 40px;
}
@media (max-width: 64em) {
  .right-mid-bottom-footer {
    grid-template-columns: 1fr;
  }
}
.item-right-footer {
  flex: 0 1 288px;
  color: var(--text-black, #161616);
}
.item-right-footer__title {
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
}
@media (min-width: 76.875em) {
  .item-right-footer__title {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem )) {
    .item-right-footer__title {
      font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem )) {
    .item-right-footer__title {
      font-size: calc(1rem + 0.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .item-right-footer__title {
    font-size: 1rem;
  }
}
@media (min-width: 76.875em) {
  .item-right-footer__title {
    margin-bottom: 2rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 1.5rem , 1.3241758242rem  +  0.8791208791vw , 2rem )) {
    .item-right-footer__title {
      margin-bottom: clamp( 1.5rem , 1.3241758242rem  +  0.8791208791vw , 2rem );
    }
  }
  @supports not (margin-bottom: clamp( 1.5rem , 1.3241758242rem  +  0.8791208791vw , 2rem )) {
    .item-right-footer__title {
      margin-bottom: calc(1.5rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .item-right-footer__title {
    margin-bottom: 1.5rem;
  }
}
.item-right-footer__list {
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .item-right-footer__list {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .item-right-footer__list {
      font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .item-right-footer__list {
      font-size: calc(0.875rem + 0.125 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .item-right-footer__list {
    font-size: 0.875rem;
  }
}

@media (min-width: 76.875em) {
  .list-item-right-footer__item:not(:last-child) {
    margin-bottom: 0.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-bottom: clamp( 0.75rem , 1.4258241758rem  +  -0.8791208791vw , 1.25rem )) {
    .list-item-right-footer__item:not(:last-child) {
      margin-bottom: clamp( 0.75rem , 1.4258241758rem  +  -0.8791208791vw , 1.25rem );
    }
  }
  @supports not (margin-bottom: clamp( 0.75rem , 1.4258241758rem  +  -0.8791208791vw , 1.25rem )) {
    .list-item-right-footer__item:not(:last-child) {
      margin-bottom: calc(1.25rem + -0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .list-item-right-footer__item:not(:last-child) {
    margin-bottom: 1.25rem;
  }
}
.bottom-bottom-footer {
  display: flex;
  flex-wrap: wrap;
  row-gap: 8px;
  justify-content: space-between;
  border-top: 1px solid #e9e9e9;
  color: var(--text-gray-light-bg, #757575);
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .bottom-bottom-footer {
    padding-top: 1.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-bottom-footer {
      padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem );
    }
  }
  @supports not (padding-top: clamp( 1rem , 0.8241758242rem  +  0.8791208791vw , 1.5rem )) {
    .bottom-bottom-footer {
      padding-top: calc(1rem + 0.5 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-bottom-footer {
    padding-top: 1rem;
  }
}
@media (min-width: 76.875em) {
  .bottom-bottom-footer {
    margin-top: 2.625rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-top: clamp( 2.625rem , 3.4697802198rem  +  -1.0989010989vw , 3.25rem )) {
    .bottom-bottom-footer {
      margin-top: clamp( 2.625rem , 3.4697802198rem  +  -1.0989010989vw , 3.25rem );
    }
  }
  @supports not (margin-top: clamp( 2.625rem , 3.4697802198rem  +  -1.0989010989vw , 3.25rem )) {
    .bottom-bottom-footer {
      margin-top: calc(3.25rem + -0.625 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .bottom-bottom-footer {
    margin-top: 3.25rem;
  }
}
.advantages__cards {
  display: flex;
  flex-wrap: wrap;
}

.card-advantages {
  flex: 0 1 33.333%;
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/button.scss","webpack://./src/scss/base/forms/input.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/advantages.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACC,kBAAA;EACA,kBAAA;EACA,2FAAA;EACA,gBAAA;EACA,kBAAA;ADID;AETA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;EACA,cAAA;EACA,mCAAA;EACA,kCAAA;AFWF;;AERE;EAEE,cAAA;AFUJ;;AENA;EACE,gBAAA;AFSF;;AEPA;EACE,gBAAA;AFUF;;AERA;EACE,gBAAA;AFWF;;AETA;EACE,gBAAA;AFYF;;AEVA;EACE,gBAAA;AFaF;;AEXA;EACE,gBAAA;AFcF;;AEZA;EACE,gBAAA;AFeF;;AEbA;EACE,gBAAA;AFgBF;;AEdA;EACE,gBAAA;AFiBF;;AEfA;EACE,gBAAA;AFkBF;;AEhBA;EACE,gBAAA;AFmBF;;AEjBA;EACE,gBAAA;AFoBF;;AElBA;EACE,gBAAA;AFqBF;;AEnBA;EACE,gBAAA;AFsBF;;AEpBA;EACE,gBAAA;AFuBF;;AErBA;EACE,gBAAA;AFwBF;;AGvFA;EACC,YAAA;EACA,WAAA;EACA,WAAA;AH0FD;;AGxFA;;;EAGC,sBAAA;AH2FD;;AGjFA;;EAEC,YAAA;EACA,gBAAA;AHoFD;;AGlFA;EACC,cHEW;EGDX,cAAA;EACA,qCHLY;EGMZ,eHLU;EGOV,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;AHoFD;;AGlFA;;;EAGC,qCHjBY;EGkBZ,kBAAA;AHqFD;;AGnFA;EACC,eAAA;EACA,cAAA;EACA,6BAAA;AHsFD;;AGpFA;EACC,cAAA;EACA,qBAAA;AHuFD;;AGrFA;EACC,gBAAA;AHwFD;;AGtFA;EACC,mBAAA;AHyFD;;AGvFA;;;;;;EAMC,oBAAA;EACA,kBAAA;AH0FD;;AA5EE;EACE,gBAAA;EACA,kBAAA;EACA,yBAAA;AA+EJ;AAtEA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAwEF;AAtEE;EANF;IAOI,cAAA;EAyEF;AACF;AAtEE;EACE,cAAA;AAwEJ;AApEE;EACE,YAAA;AAsEJ;;AAjEA;EACE,wBAAA;AAoEF;;AA/DA;;;;;CAAA;AAQE;EAEI,oBAAA;EACA,cAAA;EAKE,oBAAA;AA2DR;;AI7LA;EACE,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBJwBW;EIvBX,8BAAA;EACA,gBAAA;EACA,iBAAA;EACA,4BAAA;EACA,mBAAA;AJgMF;AI/LE;EACE;IACE,yBAAA;EJiMJ;AACF;AI/LE;EACE,WAAA;AJiMJ;AI/LE;EACE,cAAA;EACA,yBJSQ;AAwLZ;AIhMI;EACE;IACE,yBAAA;EJkMN;AACF;AI/LE;EACE,cAAA;EACA,sBAAA;AJiMJ;AIhMI;EACE;IACE,yBAAA;EJkMN;AACF;;AKpOA;;;;EAIE,wBAAA;EACA,qBAAA;EACA,gBAAA;ALuOF;;AKpOA;EACE,2BAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,6BAAA;EACA,6BAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;ALuOF;AKhOA;EACE,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,2CAAA;ALkOF;;AK/NE;EACE,wBAAA;EACA,wCAAA;ALkOJ;AKhOE;EACE,UAAA;ALkOJ;;AK9NA;EACE,YAAA;EACA,gBAAA;ALiOF;;AMvOA;EACC,kBAAA;AN0OD;AMzOC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;AN2OF;;AMvOC;EACC,mBAAA;AN0OF;;AO9RA;EACE,eAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;APiSF;AOtRA;EACE,2CAAA;EACA,mBAAA;EAEA,8BAAA;APuRF;AQ9NE;ED7DF;IC8DG,sBAAA;ERiOD;AACF;AQ9NC;EAEC;IDpEF;MCqEG,iFAhBc;IRgPb;EACF;EQ9NA;IDxEF;MCyEG,kEAAA;IRiOC;EACF;AACF;AQ/NE;ED7EF;IC8EG,wBAAA;ERkOD;AACF;AO5SE;EACE,4BAAA;EACA,gCAAA;AP8SJ;AOvSE;EACE,aAAA;EACA,yCAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;APySJ;AQ/PE;ED/CA;ICgDC,SAAA;ERkQD;AACF;AQ/PC;EAEC;IDtDA;MCuDC,8CAhBc;IRiRb;EACF;EQ/PA;ID1DA;MC2DC,0CAAA;IRkQC;EACF;AACF;AQhQE;ED/DA;ICgEC,SAAA;ERmQD;AACF;AO7TI;EAPF;IAUI,cAAA;IACA,8BAAA;EP8TJ;AACF;AQ3RE;ED/CA;ICgDC,qBAAA;ER8RD;AACF;AQ3RC;EAEC;IDtDA;MCuDC,iFAhBc;IR6Sb;EACF;EQ3RA;ID1DA;MC2DC,4DAAA;IR8RC;EACF;AACF;AQ5RE;ED/DA;ICgEC,sBAAA;ER+RD;AACF;AQjTE;ED/CA;ICgDC,uBAAA;ERoTD;AACF;AQjTC;EAEC;IDtDA;MCuDC,yFAhBc;IRmUb;EACF;EQjTA;ID1DA;MC2DC,yEAAA;IRoTC;EACF;AACF;AQlTE;ED/DA;ICgEC,6BAAA;ERqTD;AACF;AOzWI;EAbF;IAcI,kBAAA;IACA,iBAAA;IACA,yBAAA;IACA,uBAAA;EP4WJ;AACF;AO1WE;EACE,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AP4WJ;AO3WI;EALF;IAMI,sBAAA;EP8WJ;AACF;AO7WI;EARF;IASI,aAAA;EPgXJ;AACF;AO5WE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AP8WJ;AOtVA;EACE,8BAAA;APwVF;AOvVE;EACE,4BAAA;EACA,gCAAA;APyVJ;AOhVE;EACE,aAAA;EACA,8BAAA;APkVJ;AOhVE;EACE,aAAA;EACA,8BAAA;EACA,WAAA;APkVJ;;AO9UA;EACE,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;APiVF;AOhVE;EALF;IAMI,sBAAA;EPmVF;AACF;AO/UE;EACE,4BAAA;APiVJ;AOhVI;EACE,cPxGM;AA0bZ;;AO3UE;EACE,4BAAA;AP8UJ;AO7UI;EACE,cPlHM;AAicZ;;AOxUE;EADF;IAEI,qBAAA;EP4UF;AACF;AOpUE;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;APsUJ;AOzTA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AP2TF;AOzTE;EACE,aAAA;AP2TJ;AO1TI;EAFF;IAGI,sBAAA;IACA,cAAA;EP6TJ;AACF;;AO1TA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AP6TF;AOvTI;EADF;IAEI,oBAAA;IACA,eAAA;IACA,WAAA;IACA,YAAA;IACA,MAAA;IACA,WAAA;IACA,yBP1KM;IO2KN,4BAAA;IACA,UAAA;EP0TJ;EOxTI;IACE,8BAAA;IACA,OAAA;EP0TN;AACF;AOpTE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;APsTJ;AOpTI;EANF;IAOI,sBAAA;IACA,uBAAA;IACA,iBAAA;IACA,cAAA;IACA,eAAA;EPuTJ;AACF;AOjTI;EADF;IAEI,cAAA;IACA,kBAAA;IACA,oBAAA;IACA,WAAA;EPoTJ;EOnTI;IACE,WAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,SAAA;IACA,OAAA;IACA,yBAAA;EPqTN;AACF;AO9SI;EADF;IAEI,UAAA;EPiTJ;AACF;;AO7SA;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;APgTF;AO7SE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AP+SJ;AOvSI;EADF;IAEI,kBAAA;IACA,wBAAA;IACA,cAAA;IACA,kBAAA;IACA,YAAA;IACA,SAAA;IACA,+BAAA;EP0SJ;AACF;AOxRA;EACE,aAAA;AP0RF;AOzRE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,UAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AP2RJ;AO1RI;EACE,wBAAA;EACA,oBAAA;AP4RN;AOzRE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;AP2RJ;AOzRE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;AP2RJ;;AOpRA;EACE,aAAA;APuRF;AOrRE;EAHF;IAII,cAAA;IACA,kBAAA;IACA,iBAAA;IACA,cAAA;IACA,eAAA;IACA,4BAAA;EPwRF;AACF;AOxRI;EAVJ;IAWM,eAAA;EP2RJ;AACF;AOpSE;EAUE;IAGE,WAAA;IACA,4BAAA;IACA,UAAA;IACA,kBAAA;IACA,qBAAA;IACA,iBAAA;IACA,yBAAA;IACA,8BAAA;EP2RJ;EOzRE;IACE,mBAAA;EP2RJ;EOzRE;IACE,sBAAA;EP2RJ;EOzRE;IACE,2BAAA;EP2RJ;EOzRE;IACE,kBAAA;IACA,WAAA;IACA,UAAA;EP2RJ;EO1RI;IACE,QAAA;EP4RN;EOvRI;IACE,2BAAA;IACA,6CAAA;EPyRN;EOvRI;IACE,8BAAA;IACA,4CAAA;EPyRN;AACF;;AQxlBE;EClEF;IDmEG,mBAAA;ER4lBD;AACF;AQzlBC;EAEC;ICzEF;MD0EG,2EAhBc;IR2mBb;EACF;EQzlBA;IC7EF;MD8EG,4DAAA;IR4lBC;EACF;AACF;AQ1lBE;EClFF;IDmFG,oBAAA;ER6lBD;AACF;AQ/mBE;EClEF;IDmEG,sBAAA;ERknBD;AACF;AQ/mBC;EAEC;ICzEF;MD0EG,8EAhBc;IRioBb;EACF;EQ/mBA;IC7EF;MD8EG,+DAAA;IRknBC;EACF;AACF;AQhnBE;EClFF;IDmFG,uBAAA;ERmnBD;AACF;AS7rBE;EACE,mBAAA;EACA,4CAAA;EAKA,aAAA;EACA,8BAAA;AT2rBJ;AQ3oBE;ECxDA;IDyDC,oBAAA;ER8oBD;AACF;AQ3oBC;EAEC;IC/DA;MDgEC,6EAhBc;IR6pBb;EACF;EQ3oBA;ICnEA;MDoEC,qDAAA;IR8oBC;EACF;AACF;AQ5oBE;ECxEA;IDyEC,oBAAA;ER+oBD;AACF;AQjqBE;ECxDA;IDyDC,uBAAA;ERoqBD;AACF;AQjqBC;EAEC;IC/DA;MDgEC,gFAhBc;IRmrBb;EACF;EQjqBA;ICnEA;MDoEC,wDAAA;IRoqBC;EACF;AACF;AQlqBE;ECxEA;IDyEC,uBAAA;ERqqBD;AACF;AQvrBE;ECxDA;IDyDC,oBAAA;ER0rBD;AACF;AQvrBC;EAEC;IC/DA;MDgEC,6EAhBc;IRysBb;EACF;EQvrBA;ICnEA;MDoEC,yDAAA;IR0rBC;EACF;AACF;AQxrBE;ECxEA;IDyEC,qBAAA;ER2rBD;AACF;AQ7sBE;ECxDA;IDyDC,qBAAA;ERgtBD;AACF;AQ7sBC;EAEC;IC/DA;MDgEC,8EAhBc;IR+tBb;EACF;EQ7sBA;ICnEA;MDoEC,0DAAA;IRgtBC;EACF;AACF;AQ9sBE;ECxEA;IDyEC,sBAAA;ERitBD;AACF;AQnuBE;ECxDA;IDyDC,YAAA;ERsuBD;AACF;AQnuBC;EAEC;IC/DA;MDgEC,kEAhBc;IRqvBb;EACF;EQnuBA;ICnEA;MDoEC,iDAAA;IRsuBC;EACF;AACF;AQpuBE;ECxEA;IDyEC,SAAA;ERuuBD;AACF;ASvyBI;EAVF;IAWI,sBAAA;ET0yBJ;AACF;AS7xBA;EACE,eAAA;AT+xBF;AS9xBE;EAFF;IAGI,cAAA;ETiyBF;AACF;AS9xBE;EACE,8BAAA;EAEA,gBAAA;EACA,gBAAA;AT+xBJ;AQ3wBE;ECxBA;IDyBC,iBAAA;ER8wBD;AACF;AQ3wBC;EAEC;IC/BA;MDgCC,wEAhBc;IR6xBb;EACF;EQ3wBA;ICnCA;MDoCC,sDAAA;IR8wBC;EACF;AACF;AQ5wBE;ECxCA;IDyCC,iBAAA;ER+wBD;AACF;AQjyBE;ECxBA;IDyBC,sBAAA;ERoyBD;AACF;AQjyBC;EAEC;IC/BA;MDgCC,8EAhBc;IRmzBb;EACF;EQjyBA;ICnCA;MDoCC,6DAAA;IRoyBC;EACF;AACF;AQlyBE;ECxCA;IDyCC,sBAAA;ERqyBD;AACF;ASr0BE;EACE,wCAAA;EAEA,gBAAA;EACA,iBAAA;ATs0BJ;AQ5zBE;ECdA;IDeC,eAAA;ER+zBD;AACF;AQ5zBC;EAEC;ICrBA;MDsBC,uEAhBc;IR80Bb;EACF;EQ5zBA;ICzBA;MD0BC,4DAAA;IR+zBC;EACF;AACF;AQ7zBE;EC9BA;ID+BC,mBAAA;ERg0BD;AACF;;ASx1BA;EACE,eAAA;AT21BF;AS11BE;EAFF;IAGI,cAAA;ET61BF;AACF;AQ31BE;ECOE;IDND,sBAAA;ER81BD;AACF;AQ31BC;EAEC;ICAE;MDCD,6EAhBc;IR62Bb;EACF;EQ31BA;ICJE;MDKD,6DAAA;IR81BC;EACF;AACF;AQ51BE;ECTE;IDUD,qBAAA;ER+1BD;AACF;AQj3BE;ECYA;IDXC,mBAAA;ERo3BD;AACF;AQj3BC;EAEC;ICKA;MDJC,wEAhBc;IRm4Bb;EACF;EQj3BA;ICCA;MDAC,wDAAA;IRo3BC;EACF;AACF;AQl3BE;ECJA;IDKC,gBAAA;ERq3BD;AACF;;ASt3BA;EACE,2CAAA;ATy3BF;AQ34BE;ECiBF;IDhBG,mBAAA;ER84BD;AACF;AQ34BC;EAEC;ICUF;MDTG,wEAhBc;IR65Bb;EACF;EQ34BA;ICMF;MDLG,wDAAA;IR84BC;EACF;AACF;AQ54BE;ECCF;IDAG,iBAAA;ER+4BD;AACF;AQj6BE;ECiBF;IDhBG,sBAAA;ERo6BD;AACF;AQj6BC;EAEC;ICUF;MDTG,2EAhBc;IRm7Bb;EACF;EQj6BA;ICMF;MDLG,2DAAA;IRo6BC;EACF;AACF;AQl6BE;ECCF;IDAG,oBAAA;ERq6BD;AACF;ASp4BA;EAEE,gCAAA;ATq4BF;AQ17BE;ECmDF;IDlDG,uBAAA;ER67BD;AACF;AQ17BC;EAEC;IC4CF;MD3CG,+EAhBc;IR48Bb;EACF;EQ17BA;ICwCF;MDvCG,8DAAA;IR67BC;EACF;AACF;AQ37BE;ECmCF;IDlCG,uBAAA;ER87BD;AACF;AQh9BE;ECmDF;IDlDG,qBAAA;ERm9BD;AACF;AQh9BC;EAEC;IC4CF;MD3CG,8EAbe;IR+9Bd;EACF;EQh9BA;ICwCF;MDvCG,+DAAA;IRm9BC;EACF;AACF;AQj9BE;ECmCF;IDlCG,sBAAA;ERo9BD;AACF;AS16BA;EACE,aAAA;AT46BF;AQz+BE;EC4DF;ID3DG,eAAA;ER4+BD;AACF;AQz+BC;EAEC;ICqDF;MDpDG,iEAhBc;IR2/Bb;EACF;EQz+BA;ICiDF;MDhDG,gDAAA;IR4+BC;EACF;AACF;AQ1+BE;EC4CF;ID3CG,SAAA;ER6+BD;AACF;ASh8BE;EAHF;IAII,sBAAA;ETm8BF;AACF;ASj6BA;EACE,eAAA;ATm6BF;ASj6BE;EAHF;IAII,cAAA;ETo6BF;AACF;AQ5gCE;ECmGF;IDlGG,uBAAA;ER+gCD;AACF;AQ5gCC;EAEC;IC4FF;MD3FG,gFAhBc;IR8hCb;EACF;EQ5gCA;ICwFF;MDvFG,+DAAA;IR+gCC;EACF;AACF;AQ7gCE;ECmFF;IDlFG,uBAAA;ERghCD;AACF;ASt7BE;EACE,iCAAA;EACA,iCAAA;EACA,gBAAA;EAEA,yBAAA;EACA,sBAAA;ATu7BJ;AQziCE;EC4GA;ID3GC,iBAAA;ER4iCD;AACF;AQziCC;EAEC;ICqGA;MDpGC,0EAhBc;IR2jCb;EACF;EQziCA;ICiGA;MDhGC,4DAAA;IR4iCC;EACF;AACF;AQ1iCE;EC4FA;ID3FC,mBAAA;ER6iCD;AACF;ASx8BE;EACE,cAAA;AT08BJ;AQlkCE;ECuHA;IDtHC,qBAAA;ERqkCD;AACF;AQlkCC;EAEC;ICgHA;MD/GC,2EAbe;IRilCd;EACF;EQlkCA;IC4GA;MD3GC,2DAAA;IRqkCC;EACF;AACF;AQnkCE;ECuGA;IDtGC,mBAAA;ERskCD;AACF;AS19BE;EACE,cAAA;AT49BJ;AQ3lCE;EC8HA;ID7HC,qBAAA;ER8lCD;AACF;AQ3lCC;EAEC;ICuHA;MDtHC,2EAbe;IR0mCd;EACF;EQ3lCA;ICmHA;MDlHC,2DAAA;IR8lCC;EACF;AACF;AQ5lCE;EC8GA;ID7GC,mBAAA;ER+lCD;AACF;AS5+BE;EACE,cAAA;AT8+BJ;AQpnCE;ECqIA;IDpIC,qBAAA;ERunCD;AACF;AQpnCC;EAEC;IC8HA;MD7HC,2EAbe;IRmoCd;EACF;EQpnCA;IC0HA;MDzHC,2DAAA;IRunCC;EACF;AACF;AQrnCE;ECqHA;IDpHC,mBAAA;ERwnCD;AACF;AS9/BE;EACE,aAAA;EACA,QAAA;ATggCJ;AQ9oCE;EC4IA;ID3IC,uBAAA;ERipCD;AACF;AQ9oCC;EAEC;ICqIA;MDpIC,gFAhBc;IRgqCb;EACF;EQ9oCA;ICiIA;MDhIC,8DAAA;IRipCC;EACF;AACF;AQ/oCE;EC4HA;ID3HC,uBAAA;ERkpCD;AACF;ASxgCA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AT0gCF;ASvgCE;EACE,eAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,4DAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ATygCJ;ASpgCE;EACE,iBAAA;EACA,yCAAA;EACA,iBAAA;ATsgCJ;;ASr7BA;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,aAAA;ATw7BF;ASv7BE;EALF;IAMI,0BAAA;ET07BF;AACF;ASp7BA;EACE,eAAA;EAEA,iCAAA;ATq7BF;ASp7BE;EAEE,gBAAA;EACA,gBAAA;EACA,sBAAA;ATq7BJ;AQ/sCE;ECsRA;IDrRC,kBAAA;ERktCD;AACF;AQ/sCC;EAEC;IC+QA;MD9QC,uEAhBc;IRiuCb;EACF;EQ/sCA;IC2QA;MD1QC,uDAAA;IRktCC;EACF;AACF;AQhtCE;ECsQA;IDrQC,eAAA;ERmtCD;AACF;AQruCE;ECsRA;IDrRC,mBAAA;ERwuCD;AACF;AQruCC;EAEC;IC+QA;MD9QC,0EAhBc;IRuvCb;EACF;EQruCA;IC2QA;MD1QC,4DAAA;IRwuCC;EACF;AACF;AQtuCE;ECsQA;IDrQC,qBAAA;ERyuCD;AACF;AS39BE;EAEE,gBAAA;EACA,iBAAA;AT49BJ;AQ/vCE;ECgSA;ID/RC,eAAA;ERkwCD;AACF;AQ/vCC;EAEC;ICyRA;MDxRC,uEAhBc;IRixCb;EACF;EQ/vCA;ICqRA;MDpRC,4DAAA;IRkwCC;EACF;AACF;AQhwCE;ECgRA;ID/QC,mBAAA;ERmwCD;AACF;;AQrxCE;EC0SE;IDzSD,sBAAA;ERyxCD;AACF;AQtxCC;EAEC;ICmSE;MDlSD,+EAbe;IRqyCd;EACF;EQtxCA;IC+RE;MD9RD,8DAAA;IRyxCC;EACF;AACF;AQvxCE;EC0RE;IDzRD,sBAAA;ER0xCD;AACF;ASv/BA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;EAEA,6BAAA;EAIA,yCAAA;EACA,gBAAA;EACA,iBAAA;ATq/BF;AQtzCE;ECqTF;IDpTG,mBAAA;ERyzCD;AACF;AQtzCC;EAEC;IC8SF;MD7SG,wEAhBc;IRw0Cb;EACF;EQtzCA;IC0SF;MDzSG,wDAAA;IRyzCC;EACF;AACF;AQvzCE;ECqSF;IDpSG,iBAAA;ER0zCD;AACF;AQ50CE;ECqTF;IDpTG,oBAAA;ER+0CD;AACF;AQ50CC;EAEC;IC8SF;MD7SG,6EAbe;IR21Cd;EACF;EQ50CA;IC0SF;MDzSG,6DAAA;IR+0CC;EACF;AACF;AQ70CE;ECqSF;IDpSG,mBAAA;ERg1CD;AACF;AUn6CE;EACE,aAAA;EACA,eAAA;AVq6CJ;;AUl6CA;EACE,iBAAA;AVq6CF","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:700&display=swap);\r\n@import url(\"https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500&display=swap\");\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Golos Text\", sans-serif;\r\n$fontSize: rem(16); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n//text\r\n$mainColor: #161616; // Колір шрифту за замовчуванням\r\n$darkGray: #757575;\r\n$lightGray: #9f9f9f;\r\n\r\n//bg\r\n$lightBlack: #202226;\r\n$darkWhite: #f4f5f8;\r\n\r\n//tags\r\n$red: #d21924;\r\n$blue: #2949b5;\r\n$green: #308d77;\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1280;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1200;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n  // Скролл заблоковано\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n    overscroll-behavior: none;\r\n  }\r\n\r\n  // Сайт завантажений\r\n  .loaded & {\r\n  }\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n\r\n  @supports (overflow: clip) {\r\n    overflow: clip;\r\n  }\r\n\r\n  // Притискаємо footer\r\n  > main {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  // Фікс для слайдерів\r\n  > * {\r\n    min-width: 0;\r\n  }\r\n}\r\n\r\n//Для того чтобы не ломался слайдер при ресайзе\r\niframe#webpack-dev-server-client-overlay {\r\n  display: none !important;\r\n}\r\n\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Чуйна\r\n  [class*=\"__container\"] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n      margin: 0 auto;\r\n    }\r\n\r\n    @if ($containerPadding>0) {\r\n      @if ($maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      } @else {\r\n        @include adaptiveValue(\r\n          \"padding-left\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n        @include adaptiveValue(\r\n          \"padding-right\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n      }\r\n    }\r\n  }\r\n} @else {\r\n  // Брейк-поїнтами\r\n  [class*=\"__container\"] {\r\n    margin: 0 auto;\r\n\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n@import \"advantages\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","@font-face {\n\tfont-family: icons;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/icons.woff2\") format(\"woff2\"), url(\"../fonts/icons.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\r\n","%ic {\r\n  font-family: \"icons\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*=\"_icon-\"] {\r\n  &:before {\r\n    @extend %ic;\r\n    display: block;\r\n  }\r\n}\r\n\r\n._icon-settings:before {\r\n  content: \"\\e900\";\r\n}\r\n._icon-case:before {\r\n  content: \"\\e901\";\r\n}\r\n._icon-delivery:before {\r\n  content: \"\\e902\";\r\n}\r\n._icon-rent:before {\r\n  content: \"\\e903\";\r\n}\r\n._icon-youtube:before {\r\n  content: \"\\e904\";\r\n}\r\n._icon-instagram:before {\r\n  content: \"\\e905\";\r\n}\r\n._icon-guarantee:before {\r\n  content: \"\\e906\";\r\n}\r\n._icon-sale:before {\r\n  content: \"\\e907\";\r\n}\r\n._icon-arrow-down:before {\r\n  content: \"\\e908\";\r\n}\r\n._icon-burger:before {\r\n  content: \"\\e909\";\r\n}\r\n._icon-filter:before {\r\n  content: \"\\e90a\";\r\n}\r\n._icon-close:before {\r\n  content: \"\\e90b\";\r\n}\r\n._icon-all:before {\r\n  content: \"\\e90d\";\r\n}\r\n._icon-search:before {\r\n  content: \"\\e90e\";\r\n}\r\n._icon-cart:before {\r\n  content: \"\\e90f\";\r\n}\r\n._icon-service:before {\r\n  content: \"\\e912\";\r\n}\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","//<BUTTONS (a.btn+tab)>\r\n// Сніппет (HTML): btn\r\n\r\n.button {\r\n  display: inline-flex;\r\n  padding: 12px 20px;\r\n  border-radius: 8px;\r\n  background-color: $lightBlack;\r\n  color: var(--text-white, #fff);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  transition: all 0.3s ease 0s;\r\n  white-space: nowrap;\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      background-color: #2b2d32;\r\n    }\r\n  }\r\n  &._fw {\r\n    width: 100%;\r\n  }\r\n  &_gray {\r\n    color: #161616;\r\n    background-color: $darkWhite;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n  &_white {\r\n    color: #161616;\r\n    background-color: #fff;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #f4f5f8;\r\n      }\r\n    }\r\n  }\r\n}\r\n","//<INPUT>\r\n// Сніппет (HTML): inp\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.input {\r\n  border-radius: 0 !important;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 16px 0px;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid #fff;\r\n  outline: none;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n\r\n  &._form-focus {\r\n  }\r\n  &._form-error {\r\n  }\r\n}\r\n.input[type=\"search\"] {\r\n  padding: 0px;\r\n  border: 1px solid #eee;\r\n  border-radius: 8px;\r\n  background: var(--background-gray, #f4f5f8);\r\n}\r\n.input[placeholder]:not([data-placeholder-nohiden]) {\r\n  &::placeholder {\r\n    transition: opacity 0.3s;\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n  }\r\n  &:focus::placeholder {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\ntextarea.input {\r\n  resize: none;\r\n  padding: 0px 0px;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  // .header__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .header__body\r\n\r\n  &__body {\r\n  }\r\n}\r\n.top-header {\r\n  background: var(--background-gray, #f4f5f8);\r\n  padding: rem(18) 0;\r\n  @include adaptiveValue(\"margin-bottom\", 28, 5);\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -100%);\r\n  }\r\n  // .top-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  &__right {\r\n    display: flex;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    font-size: rem(14);\r\n    font-weight: 400;\r\n    line-height: math.div(16, 14);\r\n    @include adaptiveValue(\"gap\", 80, 32, 0, 1280, 1024);\r\n    @media (max-width: $mobile) {\r\n      @include adaptiveValue(\"margin-left\", 94, 25, 0, 768, 320);\r\n      @include adaptiveValue(\"margin-right\", 69, 0, 0, 768, 320);\r\n      flex: 1 1 auto;\r\n      justify-content: space-between;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      justify-content: flex-end;\r\n      padding-left: rem(5);\r\n    }\r\n  }\r\n  &__links {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    column-gap: rem(32);\r\n    row-gap: rem(5);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      display: none;\r\n    }\r\n  }\r\n  // .top-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  // .top-header__logo\r\n\r\n  &__logo {\r\n  }\r\n\r\n  // .top-header__contacts\r\n\r\n  &__contacts {\r\n  }\r\n\r\n  // .top-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.header {\r\n  // .header__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.bottom-header {\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -175%);\r\n  }\r\n  // .bottom-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__left {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: rem(8);\r\n  }\r\n}\r\n\r\n.contacts-top-header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  column-gap: rem(32);\r\n  row-gap: rem(5);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  // .contacts-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n}\r\n.right-top-header {\r\n  // .right-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n\r\n  // .right-top-header__Link\r\n}\r\n.body-header {\r\n  @media (max-width: em(1024)) {\r\n    margin-bottom: rem(8);\r\n  }\r\n  // .body-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .body-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  // .body-header__menu\r\n\r\n  &__menu {\r\n  }\r\n\r\n  // .body-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.top-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  &__logo {\r\n    display: none;\r\n    @media (max-width: em(610)) {\r\n      margin-bottom: rem(44);\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n.menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  // .menu__icon\r\n\r\n  // .menu__body\r\n\r\n  &__body {\r\n    @media (max-width: em(610)) {\r\n      padding: rem(24) rem(16);\r\n      position: fixed;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: -100%;\r\n      background-color: $darkWhite;\r\n      transition: all 0.3s ease 0s;\r\n      z-index: 1;\r\n\r\n      .menu-open & {\r\n        transition: all 0.3s ease 0.2s;\r\n        left: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__list\r\n\r\n  &__list {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(8);\r\n    flex-wrap: wrap;\r\n\r\n    @media (max-width: em(610)) {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      flex-wrap: nowrap;\r\n      overflow: auto;\r\n      max-height: 60%;\r\n    }\r\n  }\r\n\r\n  // .menu__item\r\n\r\n  &__item {\r\n    @media (max-width: em(610)) {\r\n      display: block;\r\n      position: relative;\r\n      padding-bottom: 16px;\r\n      width: 100%;\r\n      &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 1px;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__link\r\n\r\n  &__link {\r\n    @media (max-width: em(610)) {\r\n      padding: 0;\r\n    }\r\n  }\r\n}\r\n\r\n.right-body-header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  gap: rem(8);\r\n  // .right-body-header__link\r\n\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n\r\n  &__form {\r\n  }\r\n  // .right-body-header__btn\r\n\r\n  &__btn {\r\n    @media (max-width: em(610)) {\r\n      position: absolute;\r\n      width: calc(100% - 15px);\r\n      display: block;\r\n      text-align: center;\r\n      bottom: 24px;\r\n      left: 50%;\r\n      transform: translate(-50%, 0px);\r\n    }\r\n  }\r\n  &__input {\r\n    //  width: 44px;\r\n    //  height: 44px;\r\n    //  &::-webkit-search-cancel-button {\r\n    //    -webkit-appearance: none;\r\n    //    height: 1em;\r\n    //    width: 1em;\r\n    //    border-radius: 50em;\r\n    //    background-image: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)\r\n    //      no-repeat 50% 50%;\r\n    //    background-size: contain;\r\n    //    opacity: 0;\r\n    //    pointer-events: none;\r\n    //  }\r\n  }\r\n}\r\n.form-right-body-header {\r\n  display: flex;\r\n  &__input {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 0;\r\n    padding: 0;\r\n    border: none !important;\r\n    position: relative;\r\n    outline: none;\r\n    &::-webkit-search-cancel-button {\r\n      -webkit-appearance: none;\r\n      pointer-events: none;\r\n    }\r\n  }\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  &__close {\r\n    display: none;\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-left: 8px;\r\n  }\r\n}\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n  display: none;\r\n\r\n  @media (max-width: em(610)) {\r\n    display: block;\r\n    position: relative;\r\n    padding: 13px 7px;\r\n    width: rem(44);\r\n    height: rem(44);\r\n    transition: all 0.3s ease 0s;\r\n    @media (any-hover: none) {\r\n      cursor: default;\r\n    }\r\n    span,\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      transition: all 0.3s ease 0s;\r\n      right: 50%;\r\n      position: absolute;\r\n      width: percent(20, 44);\r\n      height: rem(3);\r\n      background-color: #161616;\r\n      transform: translate(50%, 0px);\r\n    }\r\n    &::before {\r\n      top: percent(12, 44);\r\n    }\r\n    &::after {\r\n      bottom: percent(12, 44);\r\n    }\r\n    span {\r\n      top: calc(50% - rem(1.5));\r\n    }\r\n    .menu-open & {\r\n      position: absolute;\r\n      right: 16px;\r\n      z-index: 3;\r\n      span {\r\n        width: 0;\r\n      }\r\n      &::before,\r\n      &::after {\r\n      }\r\n      &::before {\r\n        top: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(-45deg);\r\n      }\r\n      &::after {\r\n        bottom: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n  // .footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.form-footer {\r\n  @include adaptiveValue(\"padding-top\", 120, 60);\r\n  @include adaptiveValue(\"padding-bottom\", 120, 60);\r\n  // .form-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .form-footer__content\r\n\r\n  &__content {\r\n    border-radius: 20px;\r\n    background: var(--background-black, #202226);\r\n    @include adaptiveValue(\"padding-top\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-bottom\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-left\", 40, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-right\", 40, 12, 0, 1024, 320);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    @include adaptiveValue(\"gap\", 116, 16);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  // .form-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .form-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-form-footer {\r\n  flex: 0 1 451px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .left-form-footer__title\r\n\r\n  &__title {\r\n    color: var(--text-white, #fff);\r\n    @include adaptiveValue(\"font-size\", 40, 24);\r\n    font-weight: 400;\r\n    line-height: math.div(48, 40);\r\n    @include adaptiveValue(\"margin-bottom\", 20, 12);\r\n  }\r\n\r\n  // .left-form-footer__desc\r\n\r\n  &__desc {\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n\r\n.right-form-footer {\r\n  flex: 0 1 552px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .right-form-footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .right-form-footer__input\r\n\r\n  &__input {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 20, 8);\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    @include adaptiveValue(\"margin-top\", 44, 32);\r\n  }\r\n}\r\n\r\n.bottom-footer {\r\n  background: var(--background-gray, #f4f5f8);\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  @include adaptiveValue(\"padding-bottom\", 24, 16);\r\n  // .bottom-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-footer__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .bottom-footer__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .bottom-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n\r\n  // .bottom-footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.top-bottom-footer {\r\n  @include adaptiveValue(\"padding-bottom\", 28, 20);\r\n  border-bottom: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-bottom\", 40, 52);\r\n  // .top-bottom-footer__logo\r\n\r\n  &__logo {\r\n  }\r\n}\r\n.mid-bottom-footer {\r\n  display: flex;\r\n  @include adaptiveValue(\"gap\", 233, 16, 0, 1200, 944);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  //   display: grid;\r\n  //   grid-template: 1fr / minmax(288px, 389px) 1fr 288px 288px;\r\n  @media (max-width: em(1024)) {\r\n    //  grid-template: 1fr 1fr / minmax(288px, 389px) 16px 288px;\r\n    //  row-gap: 40px;\r\n  }\r\n  @media (max-width: $mobile) {\r\n    //  grid-template: 1fr 1fr / 1fr 1fr;\r\n    //  column-gap: 16px;\r\n    //  row-gap: 62px;\r\n  }\r\n  @media (max-width: $mobileSmall) {\r\n    //  display: flex;\r\n    //  flex-direction: column;\r\n    //  row-gap: 52px;\r\n  }\r\n\r\n  // .mid-bottom-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .mid-bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .mid-bottom-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-mid-footer {\r\n  flex: 0 1 389px;\r\n  //   grid-row: span 2;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 58);\r\n  }\r\n  // .left-mid-footer__text\r\n\r\n  &__text {\r\n    color: var(--text-black, #161616);\r\n    font-feature-settings: \"liga\" off;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"font-size\", 24, 18);\r\n    line-height: math.div(28, 24);\r\n    letter-spacing: 0.24px;\r\n  }\r\n\r\n  // .left-mid-footer__street\r\n\r\n  &__street {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__phone\r\n\r\n  &__phone {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 8, 16);\r\n  }\r\n\r\n  // .left-mid-footer__email\r\n\r\n  &__email {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__btns\r\n\r\n  &__btns {\r\n    display: flex;\r\n    gap: 8px;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 38);\r\n  }\r\n\r\n  // .left-mid-footer__btn\r\n\r\n  &__btn {\r\n  }\r\n\r\n  // .left-mid-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n}\r\n.socials-left-mid-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  // .socials-left-mid-footer__item\r\n\r\n  &__item {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    max-width: 44px;\r\n    max-height: 44px;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  // .socials-left-mid-footer__desc\r\n\r\n  &__desc {\r\n    margin-left: 16px;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n// .mid-mid-bottom-footer {\r\n//   grid-column: 3;\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 1;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .mid-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .mid-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-mid-bottom-footer {\r\n//   // .list-mid-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-mid-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n// .right-mid-bottom-footer {\r\n//   grid-column: 4;\r\n//   @media (max-width: em(1024)) {\r\n//     grid-column: 3;\r\n//     grid-row: 2;\r\n//   }\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 2;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .right-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .right-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-right-bottom-footer {\r\n//   // .list-right-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-right-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n.right-mid-bottom-footer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 16px;\r\n  row-gap: 40px;\r\n  @media (max-width: em(1024)) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  // .right-mid-bottom-footer__item\r\n\r\n  &__item {\r\n  }\r\n}\r\n.item-right-footer {\r\n  flex: 0 1 288px;\r\n  // .item-right-footer__title\r\n  color: var(--text-black, #161616);\r\n  &__title {\r\n    @include adaptiveValue(\"font-size\", 20, 16);\r\n    font-weight: 500;\r\n    line-height: math.div(24, 20);\r\n    letter-spacing: -0.6px;\r\n    @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n  }\r\n\r\n  // .item-right-footer__list\r\n\r\n  &__list {\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n.list-item-right-footer {\r\n  // .list-item-right-footer__item\r\n\r\n  &__item {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n    }\r\n  }\r\n\r\n  // .list-item-right-footer__link\r\n\r\n  &__link {\r\n  }\r\n}\r\n\r\n.bottom-bottom-footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  row-gap: 8px;\r\n  justify-content: space-between;\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  border-top: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-top\", 42, 52);\r\n  // .bottom-bottom-footer__copyright\r\n\r\n  color: var(--text-gray-light-bg, #757575);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  &__copyright {\r\n  }\r\n\r\n  // .bottom-bottom-footer__policy\r\n\r\n  &__policy {\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n",".advantages {\r\n  // .advantages__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .advantages__cards\r\n\r\n  &__cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n  }\r\n}\r\n.card-advantages {\r\n  flex: 0 1 33.333%;\r\n  // .card-advantages__body\r\n\r\n  &__body {\r\n  }\r\n\r\n  // .card-advantages__img-ibg\r\n\r\n  &__img-ibg {\r\n  }\r\n\r\n  // .card-advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .card-advantages__title\r\n\r\n  &__title {\r\n  }\r\n\r\n  // .card-advantages__desc\r\n\r\n  &__desc {\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1f4d6b0536f31e5dc3d6")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NmNlOTVlYTE3MGZiMWViODdiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUg7QUFDdkgsbUhBQW1ILGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUMsT0FBTyxvZUFBb2UsTUFBTSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsS0FBSyxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsT0FBTyxRQUFRLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxRQUFRLFlBQVksWUFBWSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFdBQVcsT0FBTyxVQUFVLEtBQUssS0FBSyxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsWUFBWSxZQUFZLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLE1BQU0sU0FBUyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxPQUFPLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsWUFBWSxZQUFZLFVBQVUsTUFBTSxNQUFNLFdBQVcsVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsVUFBVSxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxNQUFNLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFVBQVUsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsVUFBVSxPQUFPLE9BQU8sVUFBVSxXQUFXLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxVQUFVLFdBQVcsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsUUFBUSxPQUFPLFVBQVUsV0FBVyxXQUFXLFVBQVUsT0FBTyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFP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TyxzREFBc0QsT0FBTyxLQUFLLHVCQUF1QjtBQUN6cmhEO0FBQ0EsaUVBQWUsdUJBQXVCLEVBQUM7Ozs7Ozs7OztVQy83Q3ZDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZmxzLXN0YXJ0Ly4vc3JjL3Njc3Mvc3R5bGUuc2NzcyIsIndlYnBhY2s6Ly9mbHMtc3RhcnQvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzP2ZhbWlseT1Sb2JvdG86NzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdvbG9zK1RleHQ6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBgQGNoYXJzZXQgXCJVVEYtOFwiO1xuQGZvbnQtZmFjZSB7XG4gIGZvbnQtZmFtaWx5OiBpY29ucztcbiAgZm9udC1kaXNwbGF5OiBzd2FwO1xuICBzcmM6IHVybChcIi4uL2ZvbnRzL2ljb25zLndvZmYyXCIpIGZvcm1hdChcIndvZmYyXCIpLCB1cmwoXCIuLi9mb250cy9pY29ucy53b2ZmXCIpIGZvcm1hdChcIndvZmZcIik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbn1cbltjbGFzcyo9X2ljb24tXTpiZWZvcmUge1xuICBmb250LWZhbWlseTogXCJpY29uc1wiO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XG4gIGZvbnQtdmFyaWFudDogbm9ybWFsO1xuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5bY2xhc3MqPV9pY29uLV06YmVmb3JlIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5cbi5faWNvbi1zZXR0aW5nczpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTAwXCI7XG59XG5cbi5faWNvbi1jYXNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDFcIjtcbn1cblxuLl9pY29uLWRlbGl2ZXJ5OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDJcIjtcbn1cblxuLl9pY29uLXJlbnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwM1wiO1xufVxuXG4uX2ljb24teW91dHViZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA0XCI7XG59XG5cbi5faWNvbi1pbnN0YWdyYW06YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwNVwiO1xufVxuXG4uX2ljb24tZ3VhcmFudGVlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDZcIjtcbn1cblxuLl9pY29uLXNhbGU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwN1wiO1xufVxuXG4uX2ljb24tYXJyb3ctZG93bjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA4XCI7XG59XG5cbi5faWNvbi1idXJnZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwOVwiO1xufVxuXG4uX2ljb24tZmlsdGVyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MGFcIjtcbn1cblxuLl9pY29uLWNsb3NlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MGJcIjtcbn1cblxuLl9pY29uLWFsbDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBkXCI7XG59XG5cbi5faWNvbi1zZWFyY2g6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwZVwiO1xufVxuXG4uX2ljb24tY2FydDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBmXCI7XG59XG5cbi5faWNvbi1zZXJ2aWNlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MTJcIjtcbn1cblxuKiB7XG4gIHBhZGRpbmc6IDBweDtcbiAgbWFyZ2luOiAwcHg7XG4gIGJvcmRlcjogMHB4O1xufVxuXG4qLFxuKjpiZWZvcmUsXG4qOmFmdGVyIHtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbn1cblxuaHRtbCxcbmJvZHkge1xuICBoZWlnaHQ6IDEwMCU7XG4gIG1pbi13aWR0aDogMzIwcHg7XG59XG5cbmJvZHkge1xuICBjb2xvcjogIzE2MTYxNjtcbiAgbGluZS1oZWlnaHQ6IDE7XG4gIGZvbnQtZmFtaWx5OiBcIkdvbG9zIFRleHRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiAxcmVtO1xuICAtbXMtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xufVxuXG5pbnB1dCxcbmJ1dHRvbixcbnRleHRhcmVhIHtcbiAgZm9udC1mYW1pbHk6IFwiR29sb3MgVGV4dFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbmJ1dHRvbiB7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xufVxuXG5hIHtcbiAgY29sb3I6IGluaGVyaXQ7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbn1cblxudWwgbGkge1xuICBsaXN0LXN0eWxlOiBub25lO1xufVxuXG5pbWcge1xuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xufVxuXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYge1xuICBmb250LXdlaWdodDogaW5oZXJpdDtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG4ubG9jayBib2R5IHtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgdG91Y2gtYWN0aW9uOiBub25lO1xuICBvdmVyc2Nyb2xsLWJlaGF2aW9yOiBub25lO1xufVxuLndyYXBwZXIge1xuICBtaW4taGVpZ2h0OiAxMDAlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBvdmVyZmxvdzogaGlkZGVuO1xufVxuQHN1cHBvcnRzIChvdmVyZmxvdzogY2xpcCkge1xuICAud3JhcHBlciB7XG4gICAgb3ZlcmZsb3c6IGNsaXA7XG4gIH1cbn1cbi53cmFwcGVyID4gbWFpbiB7XG4gIGZsZXg6IDEgMSBhdXRvO1xufVxuLndyYXBwZXIgPiAqIHtcbiAgbWluLXdpZHRoOiAwO1xufVxuXG5pZnJhbWUjd2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5IHtcbiAgZGlzcGxheTogbm9uZSAhaW1wb3J0YW50O1xufVxuXG4vKlxuKGkpINCh0YLQuNC70ZYg0LHRg9C00YPRgtGMINC30LDRgdGC0L7RgdC+0LLRg9Cy0LDRgtC40YHRjCDQtNC+XG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cbtCh0L3RltC/0L/QtdGCIChIVE1MKTogY250XG4qL1xuW2NsYXNzKj1fX2NvbnRhaW5lcl0ge1xuICBtYXgtd2lkdGg6IDc2Ljg3NXJlbTtcbiAgbWFyZ2luOiAwIGF1dG87XG4gIHBhZGRpbmc6IDAgMC45Mzc1cmVtO1xufVxuXG4uYnV0dG9uIHtcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XG4gIHBhZGRpbmc6IDEycHggMjBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjAyMjI2O1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSwgI2ZmZik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5idXR0b246aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJkMzI7XG4gIH1cbn1cbi5idXR0b24uX2Z3IHtcbiAgd2lkdGg6IDEwMCU7XG59XG4uYnV0dG9uX2dyYXkge1xuICBjb2xvcjogIzE2MTYxNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuYnV0dG9uX2dyYXk6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIH1cbn1cbi5idXR0b25fd2hpdGUge1xuICBjb2xvcjogIzE2MTYxNjtcbiAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuYnV0dG9uX3doaXRlOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICB9XG59XG5cbmlucHV0W3R5cGU9dGV4dF0sXG5pbnB1dFt0eXBlPWVtYWlsXSxcbmlucHV0W3R5cGU9dGVsXSxcbnRleHRhcmVhIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XG4gIGFwcGVhcmFuY2U6IG5vbmU7XG59XG5cbi5pbnB1dCB7XG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICBwYWRkaW5nOiAxNnB4IDBweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZmZmO1xuICBvdXRsaW5lOiBub25lO1xuICBjb2xvcjogI2ZmZjtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG4uaW5wdXRbdHlwZT1zZWFyY2hdIHtcbiAgcGFkZGluZzogMHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XG59XG5cbi5pbnB1dFtwbGFjZWhvbGRlcl06bm90KFtkYXRhLXBsYWNlaG9sZGVyLW5vaGlkZW5dKTo6cGxhY2Vob2xkZXIge1xuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDAuM3M7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktZGFyay1iZywgIzlmOWY5Zik7XG59XG4uaW5wdXRbcGxhY2Vob2xkZXJdOm5vdChbZGF0YS1wbGFjZWhvbGRlci1ub2hpZGVuXSk6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcbiAgb3BhY2l0eTogMDtcbn1cblxudGV4dGFyZWEuaW5wdXQge1xuICByZXNpemU6IG5vbmU7XG4gIHBhZGRpbmc6IDBweCAwcHg7XG59XG5cbltjbGFzcyo9LWliZ10ge1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG59XG5bY2xhc3MqPS1pYmddIGltZyB7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICBvYmplY3QtZml0OiBjb3Zlcjtcbn1cblxuW2NsYXNzKj0taWJnX2NvbnRhaW5dIGltZyB7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5oZWFkZXIge1xuICBwb3NpdGlvbjogZml4ZWQ7XG4gIHdpZHRoOiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHotaW5kZXg6IDEwMDA7XG59XG4udG9wLWhlYWRlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XG4gIHBhZGRpbmc6IDEuMTI1cmVtIDA7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAudG9wLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjMxMjVyZW0gLCAtMC4xOTI5OTQ1MDU1cmVtICArICAyLjUyNzQ3MjUyNzV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjMxMjVyZW0gLCAtMC4xOTI5OTQ1MDU1cmVtICArICAyLjUyNzQ3MjUyNzV2dyAsIDEuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMzEyNXJlbSAsIC0wLjE5Mjk5NDUwNTVyZW0gICsgIDIuNTI3NDcyNTI3NXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjMxMjVyZW0gKyAxLjQzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuMzEyNXJlbTtcbiAgfVxufVxuLm1lbnUtb3BlbiAudG9wLWhlYWRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTEwMCUpO1xufVxuLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XG4gIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE0Mjg1NzE0Mjk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogODBlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIGdhcDogNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIGFuZCAobWF4LXdpZHRoOiA4MGVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMnJlbSAsIC0xMHJlbSAgKyAgMTguNzV2dyAsIDVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBnYXA6IGNsYW1wKCAycmVtICwgLTEwcmVtICArICAxOC43NXZ3ICwgNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAycmVtICwgLTEwcmVtICArICAxOC43NXZ3ICwgNXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIGdhcDogY2FsYygycmVtICsgMyAqICgxMDB2dyAtIDY0cmVtKSAvIDE2KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgZ2FwOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDUuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAtMS41MTc4NTcxNDI5cmVtICArICAxNS40MDE3ODU3MTQzdncgLCA1Ljg3NXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgLTEuNTE3ODU3MTQyOXJlbSAgKyAgMTUuNDAxNzg1NzE0M3Z3ICwgNS44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAtMS41MTc4NTcxNDI5cmVtICArICAxNS40MDE3ODU3MTQzdncgLCA1Ljg3NXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1sZWZ0OiBjYWxjKDEuNTYyNXJlbSArIDQuMzEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDI4KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiAxLjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogNC4zMTI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA0OGVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMDgwMzU3MDM1N3JlbSAgKyAgMTUuNDAxNzg1NDkxMXZ3ICwgNC4zMTI1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMDgwMzU3MDM1N3JlbSAgKyAgMTUuNDAxNzg1NDkxMXZ3ICwgNC4zMTI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjA4MDM1NzAzNTdyZW0gICsgIDE1LjQwMTc4NTQ5MTF2dyAsIDQuMzEyNXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2FsYygwLjAwMDAwMDA2MjVyZW0gKyA0LjMxMjQ5OTkzNzUgKiAoMTAwdncgLSAyMHJlbSkgLyAyOCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuMDAwMDAwMDYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjMxMjVyZW07XG4gIH1cbn1cbi50b3AtaGVhZGVyX19saW5rcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgcm93LWdhcDogMC4zMTI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX2xpbmtzIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX2xpbmtzIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICB9XG59XG4udG9wLWhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5ib3R0b20taGVhZGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xufVxuLm1lbnUtb3BlbiAuYm90dG9tLWhlYWRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTE3NSUpO1xufVxuLmJvdHRvbS1oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4uYm90dG9tLWhlYWRlcl9fbGVmdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgZ2FwOiAwLjVyZW07XG59XG5cbi5jb250YWN0cy10b3AtaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICByb3ctZ2FwOiAwLjMxMjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuY29udGFjdHMtdG9wLWhlYWRlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmNvbnRhY3RzLXRvcC1oZWFkZXJfX2xpbmsge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuLmNvbnRhY3RzLXRvcC1oZWFkZXJfX2xpbms6aG92ZXIge1xuICBjb2xvcjogIzE2MTYxNjtcbn1cblxuLnJpZ2h0LXRvcC1oZWFkZXJfX2xpbmsge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xufVxuLnJpZ2h0LXRvcC1oZWFkZXJfX2xpbms6aG92ZXIge1xuICBjb2xvcjogIzE2MTYxNjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLmJvZHktaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbi5ib2R5LWhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG4udG9wLW1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4udG9wLW1lbnVfX2xvZ28ge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC50b3AtbWVudV9fbG9nbyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi43NXJlbTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgfVxufVxuXG4ubWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5tZW51X19ib2R5IHtcbiAgICBwYWRkaW5nOiAxLjVyZW0gMXJlbTtcbiAgICBwb3NpdGlvbjogZml4ZWQ7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHRvcDogMDtcbiAgICBsZWZ0OiAtMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgei1pbmRleDogMTtcbiAgfVxuICAubWVudS1vcGVuIC5tZW51X19ib2R5IHtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XG4gICAgbGVmdDogMDtcbiAgfVxufVxuLm1lbnVfX2xpc3Qge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbiAgZmxleC13cmFwOiB3cmFwO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5tZW51X19saXN0IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xuICAgIGZsZXgtd3JhcDogbm93cmFwO1xuICAgIG92ZXJmbG93OiBhdXRvO1xuICAgIG1heC1oZWlnaHQ6IDYwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5tZW51X19pdGVtIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZy1ib3R0b206IDE2cHg7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbiAgLm1lbnVfX2l0ZW06OmJlZm9yZSB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxcHg7XG4gICAgYm90dG9tOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5tZW51X19saW5rIHtcbiAgICBwYWRkaW5nOiAwO1xuICB9XG59XG5cbi5yaWdodC1ib2R5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xufVxuLnJpZ2h0LWJvZHktaGVhZGVyX19saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLnJpZ2h0LWJvZHktaGVhZGVyX19idG4ge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgIGJvdHRvbTogMjRweDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMHB4KTtcbiAgfVxufVxuLmZvcm0tcmlnaHQtYm9keS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuLmZvcm0tcmlnaHQtYm9keS1oZWFkZXJfX2lucHV0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiAwO1xuICBwYWRkaW5nOiAwO1xuICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICBvdXRsaW5lOiBub25lO1xufVxuLmZvcm0tcmlnaHQtYm9keS1oZWFkZXJfX2lucHV0Ojotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xuICBwb2ludGVyLWV2ZW50czogbm9uZTtcbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyX19saW5rIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyX19jbG9zZSB7XG4gIGRpc3BsYXk6IG5vbmU7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIHdpZHRoOiA0NHB4O1xuICBoZWlnaHQ6IDQ0cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgei1pbmRleDogMTtcbiAgbWFyZ2luLWxlZnQ6IDhweDtcbn1cblxuLmljb24tbWVudSB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLmljb24tbWVudSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmc6IDEzcHggN3B4O1xuICAgIHdpZHRoOiAyLjc1cmVtO1xuICAgIGhlaWdodDogMi43NXJlbTtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIGFuZCAoYW55LWhvdmVyOiBub25lKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5pY29uLW1lbnUgc3BhbiwgLmljb24tbWVudTo6YmVmb3JlLCAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgY29udGVudDogXCJcIjtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHJpZ2h0OiA1MCU7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiA0NS40NTQ1NDU0NTQ1JTtcbiAgICBoZWlnaHQ6IDAuMTg3NXJlbTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMHB4KTtcbiAgfVxuICAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogMjcuMjcyNzI3MjcyNyU7XG4gIH1cbiAgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogMjcuMjcyNzI3MjcyNyU7XG4gIH1cbiAgLmljb24tbWVudSBzcGFuIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wOTM3NXJlbSk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgcmlnaHQ6IDE2cHg7XG4gICAgei1pbmRleDogMztcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgd2lkdGg6IDA7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjpiZWZvcmUge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA5Mzc1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKC00NWRlZyk7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiBjYWxjKDUwJSAtIDAuMDkzNzVyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiA3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMy43NXJlbSArIDMuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5mb3JtLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygzLjc1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG4uZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJsYWNrLCAjMjAyMjI2KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAwLjc1cmVtICwgLTAuNjEzNjM2MzYzNnJlbSAgKyAgNi44MTgxODE4MTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAwLjc1cmVtICwgLTAuNjEzNjM2MzYzNnJlbSAgKyAgNi44MTgxODE4MTgydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDAuNzVyZW0gKyAzICogKDEwMHZ3IC0gMjByZW0pIC8gNDQpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLXRvcDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgLTAuNjEzNjM2MzYzNnJlbSAgKyAgNi44MTgxODE4MTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgLTAuNjEzNjM2MzYzNnJlbSAgKyAgNi44MTgxODE4MTgydncgLCAzLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDAuNzVyZW0gKyAzICogKDEwMHZ3IC0gMjByZW0pIC8gNDQpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2FsYygwLjc1cmVtICsgMS43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDQ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1yaWdodDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1yaWdodDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctcmlnaHQ6IGNhbGMoMC43NXJlbSArIDEuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA0NCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctcmlnaHQ6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIGdhcDogNy4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDFyZW0gLCAtMS4xOTc4MDIxOTc4cmVtICArICAxMC45ODkwMTA5ODl2dyAsIDcuMjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBnYXA6IGNsYW1wKCAxcmVtICwgLTEuMTk3ODAyMTk3OHJlbSAgKyAgMTAuOTg5MDEwOTg5dncgLCA3LjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDFyZW0gLCAtMS4xOTc4MDIxOTc4cmVtICArICAxMC45ODkwMTA5ODl2dyAsIDcuMjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBnYXA6IGNhbGMoMXJlbSArIDYuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmxlZnQtZm9ybS1mb290ZXIge1xuICBmbGV4OiAwIDEgNDUxcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubGVmdC1mb3JtLWZvb3RlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbi5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlLCAjZmZmKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4xNDgzNTE2NDg0cmVtICArICAxLjc1ODI0MTc1ODJ2dyAsIDIuNXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMTQ4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4xNDgzNTE2NDg0cmVtICArICAxLjc1ODI0MTc1ODJ2dyAsIDIuNXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjVyZW0gKyAxICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIDAuNTc0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICkpIHtcbiAgICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAwLjU3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIDAuNTc0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICkpIHtcbiAgICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjc1cmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxufVxuLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWRhcmstYmcsICM5ZjlmOWYpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fZGVzYyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAubGVmdC1mb3JtLWZvb3Rlcl9fZGVzYyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAubGVmdC1mb3JtLWZvb3Rlcl9fZGVzYyB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44NzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fZGVzYyB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuXG4ucmlnaHQtZm9ybS1mb290ZXIge1xuICBmbGV4OiAwIDEgNTUycHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDAuMjM2MjYzNzM2M3JlbSAgKyAgMS4zMTg2ODEzMTg3dncgLCAxLjI1cmVtICkpIHtcbiAgICAucmlnaHQtZm9ybS1mb290ZXJfX2lucHV0Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDAuMjM2MjYzNzM2M3JlbSAgKyAgMS4zMTg2ODEzMTg3dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAwLjIzNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC41cmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXJfX2lucHV0Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5yaWdodC1mb3JtLWZvb3Rlcl9fYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAyLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXRvcDogY2xhbXAoIDJyZW0gLCAxLjczNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMi43NXJlbSApKSB7XG4gICAgLnJpZ2h0LWZvcm0tZm9vdGVyX19idG4ge1xuICAgICAgbWFyZ2luLXRvcDogY2xhbXAoIDJyZW0gLCAxLjczNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMi43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMnJlbSAsIDEuNzM2MjYzNzM2M3JlbSAgKyAgMS4zMTg2ODEzMTg3dncgLCAyLjc1cmVtICkpIHtcbiAgICAucmlnaHQtZm9ybS1mb290ZXJfX2J0biB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKDJyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5yaWdodC1mb3JtLWZvb3Rlcl9fYnRuIHtcbiAgICBtYXJnaW4tdG9wOiAycmVtO1xuICB9XG59XG5cbi5ib3R0b20tZm9vdGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApKSB7XG4gICAgLmJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApKSB7XG4gICAgLmJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDFyZW07XG4gIH1cbn1cbi50b3AtYm90dG9tLWZvb3RlciB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjA3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuMDc0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuMDc0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjc1cmVtICkpIHtcbiAgICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMS4yNXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMy41MTM3MzYyNjM3cmVtICArICAtMS4zMTg2ODEzMTg3dncgLCAzLjI1cmVtICkpIHtcbiAgICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDMuNTEzNzM2MjYzN3JlbSAgKyAgLTEuMzE4NjgxMzE4N3Z3ICwgMy4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMy41MTM3MzYyNjM3cmVtICArICAtMS4zMTg2ODEzMTg3dncgLCAzLjI1cmVtICkpIHtcbiAgICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygzLjI1cmVtICsgLTAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjI1cmVtO1xuICB9XG59XG4ubWlkLWJvdHRvbS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc1ZW0pIHtcbiAgLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICBnYXA6IDE0LjU2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA1OWVtKSBhbmQgKG1heC13aWR0aDogNzVlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDFyZW0gLCAtNDkuMDExNzE4NzVyZW0gICsgIDg0Ljc2NTYyNXZ3ICwgMTQuNTYyNXJlbSApKSB7XG4gICAgLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIGdhcDogY2xhbXAoIDFyZW0gLCAtNDkuMDExNzE4NzVyZW0gICsgIDg0Ljc2NTYyNXZ3ICwgMTQuNTYyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxcmVtICwgLTQ5LjAxMTcxODc1cmVtICArICA4NC43NjU2MjV2dyAsIDE0LjU2MjVyZW0gKSkge1xuICAgIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgICBnYXA6IGNhbGMoMXJlbSArIDEzLjU2MjUgKiAoMTAwdncgLSA1OXJlbSkgLyAxNik7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNTllbSkge1xuICAubWlkLWJvdHRvbS1mb290ZXIge1xuICAgIGdhcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyIHtcbiAgZmxleDogMCAxIDM4OXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3RlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNjI1cmVtICwgMy41MzcwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDMuODc1cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjYyNXJlbSAsIDMuNTM3MDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAzLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy42MjVyZW0gLCAzLjUzNzA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMy44NzVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygzLjYyNXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMuNjI1cmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX190ZXh0IHtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xuICBmb250LWZlYXR1cmUtc2V0dGluZ3M6IFwibGlnYVwiIG9mZjtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTY2NjY2NjY2NztcbiAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45OTMxMzE4NjgxcmVtICArICAwLjY1OTM0MDY1OTN2dyAsIDEuNXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTkzMTMxODY4MXJlbSAgKyAgMC42NTkzNDA2NTkzdncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk5MzEzMTg2ODFyZW0gICsgIDAuNjU5MzQwNjU5M3Z3ICwgMS41cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxLjEyNXJlbSArIDAuMzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS4xMjVyZW07XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDIuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fc3RyZWV0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDIuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fc3RyZWV0IHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMnJlbSArIC0wLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fc3RyZWV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3Bob25lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMS4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxcmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMS4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAxLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDFyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3Bob25lIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMXJlbSArIC0wLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICAgIG1hcmdpbi1ib3R0b206IDFyZW07XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDIuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygycmVtICsgLTAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGdhcDogOHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX2J0bnMge1xuICAgIG1hcmdpbi1ib3R0b206IDMuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMzc1cmVtICwgMS44NDc1Mjc0NzI1cmVtICArICAyLjYzNzM2MjYzNzR2dyAsIDMuODc1cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjM3NXJlbSAsIDEuODQ3NTI3NDcyNXJlbSAgKyAgMi42MzczNjI2Mzc0dncgLCAzLjg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4zNzVyZW0gLCAxLjg0NzUyNzQ3MjVyZW0gICsgIDIuNjM3MzYyNjM3NHZ3ICwgMy44NzVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX2J0bnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygyLjM3NXJlbSArIDEuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjM3NXJlbTtcbiAgfVxufVxuLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiA4cHg7XG59XG4uc29jaWFscy1sZWZ0LW1pZC1mb290ZXJfX2l0ZW0ge1xuICBtaW4td2lkdGg6IDQ0cHg7XG4gIG1pbi1oZWlnaHQ6IDQ0cHg7XG4gIG1heC13aWR0aDogNDRweDtcbiAgbWF4LWhlaWdodDogNDRweDtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCB2YXIoLS1ib3JkZXItb3ItZGV2aWRlci1saWdodC1iZywgI2U5ZTllOSk7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyX19kZXNjIHtcbiAgbWFyZ2luLWxlZnQ6IDE2cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cblxuLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyIHtcbiAgZGlzcGxheTogZ3JpZDtcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xuICBjb2x1bW4tZ2FwOiAxNnB4O1xuICByb3ctZ2FwOiA0MHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcbiAgfVxufVxuLml0ZW0tcmlnaHQtZm9vdGVyIHtcbiAgZmxleDogMCAxIDI4OHB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XG59XG4uaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MTIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTEyMDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAxLjMyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMS4zMjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDJyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDEuMzI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS41cmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxufVxuLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0IHtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0IHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX2xpc3Qge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0IHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAxLjQyNTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAxLjQyNTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAxLjQyNTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjI1cmVtICsgLTAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG4uYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIHJvdy1nYXA6IDhweDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxcmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDIuNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLXRvcDogY2xhbXAoIDIuNjI1cmVtICwgMy40Njk3ODAyMTk4cmVtICArICAtMS4wOTg5MDEwOTg5dncgLCAzLjI1cmVtICkpIHtcbiAgICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgICAgbWFyZ2luLXRvcDogY2xhbXAoIDIuNjI1cmVtICwgMy40Njk3ODAyMTk4cmVtICArICAtMS4wOTg5MDEwOTg5dncgLCAzLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi10b3A6IGNsYW1wKCAyLjYyNXJlbSAsIDMuNDY5NzgwMjE5OHJlbSAgKyAgLTEuMDk4OTAxMDk4OXZ3ICwgMy4yNXJlbSApKSB7XG4gICAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMy4yNXJlbSArIC0wLjYyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgIG1hcmdpbi10b3A6IDMuMjVyZW07XG4gIH1cbn1cbi5hZHZhbnRhZ2VzX19jYXJkcyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cblxuLmNhcmQtYWR2YW50YWdlcyB7XG4gIGZsZXg6IDAgMSAzMy4zMzMlO1xufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMvaWNvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvaW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2FkdmFudGFnZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkZBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESUQ7QUVUQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRldGOztBRVJFO0VBRUUsY0FBQTtBRlVKOztBRU5BO0VBQ0UsZ0JBQUE7QUZTRjs7QUVQQTtFQUNFLGdCQUFBO0FGVUY7O0FFUkE7RUFDRSxnQkFBQTtBRldGOztBRVRBO0VBQ0UsZ0JBQUE7QUZZRjs7QUVWQTtFQUNFLGdCQUFBO0FGYUY7O0FFWEE7RUFDRSxnQkFBQTtBRmNGOztBRVpBO0VBQ0UsZ0JBQUE7QUZlRjs7QUViQTtFQUNFLGdCQUFBO0FGZ0JGOztBRWRBO0VBQ0UsZ0JBQUE7QUZpQkY7O0FFZkE7RUFDRSxnQkFBQTtBRmtCRjs7QUVoQkE7RUFDRSxnQkFBQTtBRm1CRjs7QUVqQkE7RUFDRSxnQkFBQTtBRm9CRjs7QUVsQkE7RUFDRSxnQkFBQTtBRnFCRjs7QUVuQkE7RUFDRSxnQkFBQTtBRnNCRjs7QUVwQkE7RUFDRSxnQkFBQTtBRnVCRjs7QUVyQkE7RUFDRSxnQkFBQTtBRndCRjs7QUd2RkE7RUFDQyxZQUFBO0VBQ0EsV0FBQTtFQUNBLFdBQUE7QUgwRkQ7O0FHeEZBOzs7RUFHQyxzQkFBQTtBSDJGRDs7QUdqRkE7O0VBRUMsWUFBQTtFQUNBLGdCQUFBO0FIb0ZEOztBR2xGQTtFQUND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SVI0bEJDO0VBQ0Y7QUFDRjtBUTFsQkU7RUNsRkY7SURtRkcsb0JBQUE7RVI2bEJEO0FBQ0Y7QVEvbUJFO0VDbEVGO0lEbUVHLHNCQUFBO0VSa25CRDtBQUNGO0FRL21CQztFQUVDO0lDekVGO01EMEVHLDhFQWhCYztJUmlvQmI7RUFDRjtFUS9tQkE7SUM3RUY7TUQ4RUcsK0RBQUE7SVJrbkJDO0VBQ0Y7QUFDRjtBUWhuQkU7RUNsRkY7SURtRkcsdUJBQUE7RVJtbkJEO0FBQ0Y7QVM3ckJFO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUtBLGFBQUE7RUFDQSw4QkFBQTtBVDJyQko7QVEzb0JFO0VDeERBO0lEeURDLG9CQUFBO0VSOG9CRDtBQUNGO0FRM29CQztFQUVDO0lDL0RBO01EZ0VDLDZFQWhCYztJUjZwQmI7RUFDRjtFUTNvQkE7SUNuRUE7TURvRUMscURBQUE7SVI4b0JDO0VBQ0Y7QUFDRjtBUTVvQkU7RUN4RUE7SUR5RUMsb0JBQUE7RVIrb0JEO0FBQ0Y7QVFqcUJFO0VDeERBO0lEeURDLHVCQUFBO0VSb3FCRDtBQUNGO0FRanFCQztFQUVDO0lDL0RBO01EZ0VDLGdGQWhCYztJUm1yQmI7RUFDRjtFUWpxQkE7SUNuRUE7TURvRUMsd0RBQUE7SVJvcUJDO0VBQ0Y7QUFDRjtBUWxxQkU7RUN4RUE7SUR5RUMsdUJBQUE7RVJxcUJEO0FBQ0Y7QVF2ckJFO0VDeERBO0lEeURDLG9CQUFBO0VSMHJCRDtBQUNGO0FRdnJCQztFQUVDO0lDL0RBO01EZ0VDLDZFQWhCYztJUnlzQmI7RUFDRjtFUXZyQkE7SUNuRUE7TURvRUMseURBQUE7SVIwckJDO0VBQ0Y7QUFDRjtBUXhyQkU7RUN4RUE7SUR5RUMscUJBQUE7RVIyckJEO0FBQ0Y7QVE3c0JFO0VDeERBO0lEeURDLHFCQUFBO0VSZ3RCRDtBQUNGO0FRN3NCQztFQUVDO0lDL0RBO01EZ0VDLDhFQWhCYztJUit0QmI7RUFDRjtFUTdzQkE7SUNuRUE7TURvRUMsMERBQUE7SVJndEJDO0VBQ0Y7QUFDRjtBUTlzQkU7RUN4RUE7SUR5RUMsc0JBQUE7RVJpdEJEO0FBQ0Y7QVFudUJFO0VDeERBO0lEeURDLFlBQUE7RVJzdUJEO0FBQ0Y7QVFudUJDO0VBRUM7SUMvREE7TURnRUMsa0VBaEJjO0lScXZCYjtFQUNGO0VRbnVCQTtJQ25FQTtNRG9FQyxpREFBQTtJUnN1QkM7RUFDRjtBQUNGO0FRcHVCRTtFQ3hFQTtJRHlFQyxTQUFBO0VSdXVCRDtBQUNGO0FTdnlCSTtFQVZGO0lBV0ksc0JBQUE7RVQweUJKO0FBQ0Y7QVM3eEJBO0VBQ0UsZUFBQTtBVCt4QkY7QVM5eEJFO0VBRkY7SUFHSSxjQUFBO0VUaXlCRjtBQUNGO0FTOXhCRTtFQUNFLDhCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBVCt4Qko7QVEzd0JFO0VDeEJBO0lEeUJDLGlCQUFBO0VSOHdCRDtBQUNGO0FRM3dCQztFQUVDO0lDL0JBO01EZ0NDLHdFQWhCYztJUjZ4QmI7RUFDRjtFUTN3QkE7SUNuQ0E7TURvQ0Msc0RBQUE7SVI4d0JDO0VBQ0Y7QUFDRjtBUTV3QkU7RUN4Q0E7SUR5Q0MsaUJBQUE7RVIrd0JEO0FBQ0Y7QVFqeUJFO0VDeEJBO0lEeUJDLHNCQUFBO0VSb3lCRDtBQUNGO0FRanlCQztFQUVDO0lDL0JBO01EZ0NDLDhFQWhCYztJUm16QmI7RUFDRjtFUWp5QkE7SUNuQ0E7TURvQ0MsNkRBQUE7SVJveUJDO0VBQ0Y7QUFDRjtBUWx5QkU7RUN4Q0E7SUR5Q0Msc0JBQUE7RVJxeUJEO0FBQ0Y7QVNyMEJFO0VBQ0Usd0NBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FUczBCSjtBUTV6QkU7RUNkQTtJRGVDLGVBQUE7RVIrekJEO0FBQ0Y7QVE1ekJDO0VBRUM7SUNyQkE7TURzQkMsdUVBaEJjO0lSODBCYjtFQUNGO0VRNXpCQTtJQ3pCQTtNRDBCQyw0REFBQTtJUit6QkM7RUFDRjtBQUNGO0FRN3pCRTtFQzlCQTtJRCtCQyxtQkFBQTtFUmcwQkQ7QUFDRjs7QVN4MUJBO0VBQ0UsZUFBQTtBVDIxQkY7QVMxMUJFO0VBRkY7SUFHSSxjQUFBO0VUNjFCRjtBQUNGO0FRMzFCRTtFQ09FO0lETkQsc0JBQUE7RVI4MUJEO0FBQ0Y7QVEzMUJDO0VBRUM7SUNBRTtNRENELDZFQWhCYztJUjYyQmI7RUFDRjtFUTMxQkE7SUNKRTtNREtELDZEQUFBO0lSODFCQztFQUNGO0FBQ0Y7QVE1MUJFO0VDVEU7SURVRCxxQkFBQTtFUisxQkQ7QUFDRjtBUWozQkU7RUNZQTtJRFhDLG1CQUFBO0VSbzNCRDtBQUNGO0FRajNCQztFQUVDO0lDS0E7TURKQyx3RUFoQmM7SVJtNEJiO0VBQ0Y7RVFqM0JBO0lDQ0E7TURBQyx3REFBQTtJUm8zQkM7RUFDRjtBQUNGO0FRbDNCRTtFQ0pBO0lES0MsZ0JBQUE7RVJxM0JEO0FBQ0Y7O0FTdDNCQTtFQUNFLDJDQUFBO0FUeTNCRjtBUTM0QkU7RUNpQkY7SURoQkcsbUJBQUE7RVI4NEJEO0FBQ0Y7QVEzNEJDO0VBRUM7SUNVRjtNRFRHLHdFQWhCYztJUjY1QmI7RUFDRjtFUTM0QkE7SUNNRjtNRExHLHdEQUFBO0lSODRCQztFQUNGO0FBQ0Y7QVE1NEJFO0VDQ0Y7SURBRyxpQkFBQTtFUis0QkQ7QUFDRjtBUWo2QkU7RUNpQkY7SURoQkcsc0JBQUE7RVJvNkJEO0FBQ0Y7QVFqNkJDO0VBRUM7SUNVRjtNRFRHLDJFQWhCYztJUm03QmI7RUFDRjtFUWo2QkE7SUNNRjtNRExHLDJEQUFBO0lSbzZCQztFQUNGO0FBQ0Y7QVFsNkJFO0VDQ0Y7SURBRyxvQkFBQTtFUnE2QkQ7QUFDRjtBU3A0QkE7RUFFRSxnQ0FBQTtBVHE0QkY7QVExN0JFO0VDbURGO0lEbERHLHVCQUFBO0VSNjdCRDtBQUNGO0FRMTdCQztFQUVDO0lDNENGO01EM0NHLCtFQWhCYztJUjQ4QmI7RUFDRjtFUTE3QkE7SUN3Q0Y7TUR2Q0csOERBQUE7SVI2N0JDO0VBQ0Y7QUFDRjtBUTM3QkU7RUNtQ0Y7SURsQ0csdUJBQUE7RVI4N0JEO0FBQ0Y7QVFoOUJFO0VDbURGO0lEbERHLHFCQUFBO0VSbTlCRDtBQUNGO0FRaDlCQztFQUVDO0lDNENGO01EM0NHLDhFQWJlO0lSKzlCZDtFQUNGO0VRaDlCQTtJQ3dDRjtNRHZDRywrREFBQTtJUm05QkM7RUFDRjtBQUNGO0FRajlCRTtFQ21DRjtJRGxDRyxzQkFBQTtFUm85QkQ7QUFDRjtBUzE2QkE7RUFDRSxhQUFBO0FUNDZCRjtBUXorQkU7RUM0REY7SUQzREcsZUFBQTtFUjQrQkQ7QUFDRjtBUXorQkM7RUFFQztJQ3FERjtNRHBERyxpRUFoQmM7SVIyL0JiO0VBQ0Y7RVF6K0JBO0lDaURGO01EaERHLGdEQUFBO0lSNCtCQztFQUNGO0FBQ0Y7QVExK0JFO0VDNENGO0lEM0NHLFNBQUE7RVI2K0JEO0FBQ0Y7QVNoOEJFO0VBSEY7SUFJSSxzQkFBQTtFVG04QkY7QUFDRjtBU2o2QkE7RUFDRSxlQUFBO0FUbTZCRjtBU2o2QkU7RUFIRjtJQUlJLGNBQUE7RVRvNkJGO0FBQ0Y7QVE1Z0NFO0VDbUdGO0lEbEdHLHVCQUFBO0VSK2dDRDtBQUNGO0FRNWdDQztFQUVDO0lDNEZGO01EM0ZHLGdGQWhCYztJUjhoQ2I7RUFDRjtFUTVnQ0E7SUN3RkY7TUR2RkcsK0RBQUE7SVIrZ0NDO0VBQ0Y7QUFDRjtBUTdnQ0U7RUNtRkY7SURsRkcsdUJBQUE7RVJnaENEO0FBQ0Y7QVN0N0JFO0VBQ0UsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtBVHU3Qko7QVF6aUNFO0VDNEdBO0lEM0dDLGlCQUFBO0VSNGlDRDtBQUNGO0FRemlDQztFQUVDO0lDcUdBO01EcEdDLDBFQWhCYztJUjJqQ2I7RUFDRjtFUXppQ0E7SUNpR0E7TURoR0MsNERBQUE7SVI0aUNDO0VBQ0Y7QUFDRjtBUTFpQ0U7RUM0RkE7SUQzRkMsbUJBQUE7RVI2aUNEO0FBQ0Y7QVN4OEJFO0VBQ0UsY0FBQTtBVDA4Qko7QVFsa0NFO0VDdUhBO0lEdEhDLHFCQUFBO0VScWtDRDtBQUNGO0FRbGtDQztFQUVDO0lDZ0hBO01EL0dDLDJFQWJlO0lSaWxDZDtFQUNGO0VRbGtDQTtJQzRHQTtNRDNHQywyREFBQTtJUnFrQ0M7RUFDRjtBQUNGO0FRbmtDRTtFQ3VHQTtJRHRHQyxtQkFBQTtFUnNrQ0Q7QUFDRjtBUzE5QkU7RUFDRSxjQUFBO0FUNDlCSjtBUTNsQ0U7RUM4SEE7SUQ3SEMscUJBQUE7RVI4bENEO0FBQ0Y7QVEzbENDO0VBRUM7SUN1SEE7TUR0SEMsMkVBYmU7SVIwbUNkO0VBQ0Y7RVEzbENBO0lDbUhBO01EbEhDLDJEQUFBO0lSOGxDQztFQUNGO0FBQ0Y7QVE1bENFO0VDOEdBO0lEN0dDLG1CQUFBO0VSK2xDRDtBQUNGO0FTNStCRTtFQUNFLGNBQUE7QVQ4K0JKO0FRcG5DRTtFQ3FJQTtJRHBJQyxxQkFBQTtFUnVuQ0Q7QUFDRjtBUXBuQ0M7RUFFQztJQzhIQTtNRDdIQywyRUFiZTtJUm1vQ2Q7RUFDRjtFUXBuQ0E7SUMwSEE7TUR6SEMsMkRBQUE7SVJ1bkNDO0VBQ0Y7QUFDRjtBUXJuQ0U7RUNxSEE7SURwSEMsbUJBQUE7RVJ3bkNEO0FBQ0Y7QVM5L0JFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QVRnZ0NKO0FROW9DRTtFQzRJQTtJRDNJQyx1QkFBQTtFUmlwQ0Q7QUFDRjtBUTlvQ0M7RUFFQztJQ3FJQTtNRHBJQyxnRkFoQmM7SVJncUNiO0VBQ0Y7RVE5b0NBO0lDaUlBO01EaElDLDhEQUFBO0lSaXBDQztFQUNGO0FBQ0Y7QVEvb0NFO0VDNEhBO0lEM0hDLHVCQUFBO0VSa3BDRDtBQUNGO0FTeGdDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QVQwZ0NGO0FTdmdDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QVR5Z0NKO0FTcGdDRTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtBVHNnQ0o7O0FTcjdCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBVHc3QkY7QVN2N0JFO0VBTEY7SUFNSSwwQkFBQTtFVDA3QkY7QUFDRjtBU3A3QkE7RUFDRSxlQUFBO0VBRUEsaUNBQUE7QVRxN0JGO0FTcDdCRTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBVHE3Qko7QVEvc0NFO0VDc1JBO0lEclJDLGtCQUFBO0VSa3RDRDtBQUNGO0FRL3NDQztFQUVDO0lDK1FBO01EOVFDLHVFQWhCYztJUml1Q2I7RUFDRjtFUS9zQ0E7SUMyUUE7TUQxUUMsdURBQUE7SVJrdENDO0VBQ0Y7QUFDRjtBUWh0Q0U7RUNzUUE7SURyUUMsZUFBQTtFUm10Q0Q7QUFDRjtBUXJ1Q0U7RUNzUkE7SURyUkMsbUJBQUE7RVJ3dUNEO0FBQ0Y7QVFydUNDO0VBRUM7SUMrUUE7TUQ5UUMsMEVBaEJjO0lSdXZDYjtFQUNGO0VRcnVDQTtJQzJRQTtNRDFRQyw0REFBQTtJUnd1Q0M7RUFDRjtBQUNGO0FRdHVDRTtFQ3NRQTtJRHJRQyxxQkFBQTtFUnl1Q0Q7QUFDRjtBUzM5QkU7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0FUNDlCSjtBUS92Q0U7RUNnU0E7SUQvUkMsZUFBQTtFUmt3Q0Q7QUFDRjtBUS92Q0M7RUFFQztJQ3lSQTtNRHhSQyx1RUFoQmM7SVJpeENiO0VBQ0Y7RVEvdkNBO0lDcVJBO01EcFJDLDREQUFBO0lSa3dDQztFQUNGO0FBQ0Y7QVFod0NFO0VDZ1JBO0lEL1FDLG1CQUFBO0VSbXdDRDtBQUNGOztBUXJ4Q0U7RUMwU0U7SUR6U0Qsc0JBQUE7RVJ5eENEO0FBQ0Y7QVF0eENDO0VBRUM7SUNtU0U7TURsU0QsK0VBYmU7SVJxeUNkO0VBQ0Y7RVF0eENBO0lDK1JFO01EOVJELDhEQUFBO0lSeXhDQztFQUNGO0FBQ0Y7QVF2eENFO0VDMFJFO0lEelJELHNCQUFBO0VSMHhDRDtBQUNGO0FTdi9CQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBRUEsNkJBQUE7RUFJQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QVRxL0JGO0FRdHpDRTtFQ3FURjtJRHBURyxtQkFBQTtFUnl6Q0Q7QUFDRjtBUXR6Q0M7RUFFQztJQzhTRjtNRDdTRyx3RUFoQmM7SVJ3MENiO0VBQ0Y7RVF0ekNBO0lDMFNGO01EelNHLHdEQUFBO0lSeXpDQztFQUNGO0FBQ0Y7QVF2ekNFO0VDcVNGO0lEcFNHLGlCQUFBO0VSMHpDRDtBQUNGO0FRNTBDRTtFQ3FURjtJRHBURyxvQkFBQTtFUiswQ0Q7QUFDRjtBUTUwQ0M7RUFFQztJQzhTRjtNRDdTRyw2RUFiZTtJUjIxQ2Q7RUFDRjtFUTUwQ0E7SUMwU0Y7TUR6U0csNkRBQUE7SVIrMENDO0VBQ0Y7QUFDRjtBUTcwQ0U7RUNxU0Y7SURwU0csbUJBQUE7RVJnMUNEO0FBQ0Y7QVVuNkNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7QVZxNkNKOztBVWw2Q0E7RUFDRSxpQkFBQTtBVnE2Q0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiQHVzZSBcXFwic2FzczptYXRoXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINC80ZbQutGB0LjQvdGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuQGltcG9ydCBcXFwiYmFzZS9taXhpbnNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8mZGlzcGxheT1zd2FwIC0g0LTQvtC00LDRgtC4INC/0YDQuCDQv9GW0LTQutC70Y7Rh9C10L3QvdGWINGH0LXRgNC10Lcg0L/Qu9Cw0LPRltC9XFxyXFxuQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo3MDAmZGlzcGxheT1zd2FwKTtcXHJcXG5AaW1wb3J0IHVybChcXFwiaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Hb2xvcytUZXh0OndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXBcXFwiKTtcXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C40YLQuCwg0Y/QutGJ0L4g0ZQg0LvQvtC60LDQu9GM0L3RliDRhNCw0LnQu9C4INGI0YDQuNGE0YLRltCyXFxyXFxuQGltcG9ydCBcXFwiZm9udHMvZm9udHNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0ZbQutC+0L3QutC+0LLQuNGFINGI0YDQuNGE0YLRltCyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDRhNCw0LnQuyDRltC60L7QvdC60L7QstC+0LPQviDRiNGA0LjRhNGC0YNcXHJcXG5AaW1wb3J0IFxcXCJmb250cy9pY29uc1xcXCI7XFxyXFxuXFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0YjQsNCx0LvQvtC90YMgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCX0LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0YjRgNC40YTRgiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4kZm9udEZhbWlseTogXFxcIkdvbG9zIFRleHRcXFwiLCBzYW5zLXNlcmlmO1xcclxcbiRmb250U2l6ZTogcmVtKDE2KTsgLy8g0LTQtSAxNChweCkgLSDRgNC+0LfQvNGW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0Lwg0Lcg0LzQsNC60LXRgtGDXFxyXFxuXFxyXFxuLy8g0J7RgdC90L7QstC90ZYg0LrQvtC70YzQvtGA0LhcXHJcXG4vL3RleHRcXHJcXG4kbWFpbkNvbG9yOiAjMTYxNjE2OyAvLyDQmtC+0LvRltGAINGI0YDQuNGE0YLRgyDQt9CwINC30LDQvNC+0LLRh9GD0LLQsNC90L3Rj9C8XFxyXFxuJGRhcmtHcmF5OiAjNzU3NTc1O1xcclxcbiRsaWdodEdyYXk6ICM5ZjlmOWY7XFxyXFxuXFxyXFxuLy9iZ1xcclxcbiRsaWdodEJsYWNrOiAjMjAyMjI2O1xcclxcbiRkYXJrV2hpdGU6ICNmNGY1Zjg7XFxyXFxuXFxyXFxuLy90YWdzXFxyXFxuJHJlZDogI2QyMTkyNDtcXHJcXG4kYmx1ZTogIzI5NDliNTtcXHJcXG4kZ3JlZW46ICMzMDhkNzc7XFxyXFxuXFxyXFxuLy8g0J3QsNC70LDRiNGC0YPQstCw0L3QvdGPINCw0LTQsNC/0YLQuNCy0L3QvtGXINGB0ZbRgtC60LggPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQnNGW0L3RltC80LDQu9GM0L3QsCDRiNC40YDQuNC90LAg0YHRgtC+0YDRltC90LrQuFxcclxcbiRtaW5XaWR0aDogMzIwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQv9C+0LvQvtGC0L3QsCAo0LzQsNC60LXRgtGDKVxcclxcbiRtYXhXaWR0aDogMTI4MDtcXHJcXG4vLyDQqNC40YDQuNC90LAg0L7QsdC80LXQttGD0Y7Rh9C+0LPQviDQutC+0L3RgtC10LnQvdC10YDQsCAoMCA9INC90LXQvNCw0ZQg0L7QsdC80LXQttC10L3QvdGPKVxcclxcbiRtYXhXaWR0aENvbnRhaW5lcjogMTIwMDtcXHJcXG4vLyDQl9Cw0LPQsNC70YzQvdC40Lkg0LLRltC00YHRgtGD0L8g0YMg0LrQvtC90YLQtdC50L3QtdGA0LBcXHJcXG4vLyAoMzAgPSDQv9C+IDE1cHgg0LvRltCy0L7RgNGD0Ycg0ZYg0L/RgNCw0LLQvtGA0YPRhywgMCA9INC90LXQvNCw0ZQg0LLRltC00YHRgtGD0L/RgylcXHJcXG4kY29udGFpbmVyUGFkZGluZzogMzA7XFxyXFxuXFxyXFxuLy8g0KjQuNGA0LjQvdCwINGB0L/RgNCw0YbRjNC+0LLRg9Cy0LDQvdC90Y8g0L/QtdGA0YjQvtCz0L4g0LHRgNC10LnQutC/0L7RltC90YLRg1xcclxcbiRjb250YWluZXJXaWR0aDogJG1heFdpZHRoQ29udGFpbmVyICsgJGNvbnRhaW5lclBhZGRpbmc7XFxyXFxuXFxyXFxuLy8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LhcXHJcXG4kcGM6IGVtKFxcclxcbiAgJGNvbnRhaW5lcldpZHRoXFxyXFxuKTsgLy8g0J/Qmiwg0L3QvtGD0YLQsdGD0LrQuCwg0LTQtdGP0LrRliDQv9C70LDQvdGI0LXRgtC4INGDINCz0L7RgNC40LfQvtC90YLQsNC70YzQvdC+0LzRgyDQv9C+0LvQvtC20LXQvdC90ZZcXHJcXG4kdGFibGV0OiBlbSg5OTEuOTgpOyAvLyDQn9C70LDQvdGI0LXRgtC4LCDQtNC10Y/QutGWINGC0LXQu9C10YTQvtC90Lgg0LIg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiRtb2JpbGU6IGVtKDc2Ny45OCk7IC8vINCi0LXQu9C10YTQvtC90LggTFxcclxcbiRtb2JpbGVTbWFsbDogZW0oNDc5Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBTXFxyXFxuXFxyXFxuLy8g0KLQuNC/INCw0LTQsNC/0YLQuNCy0LA6XFxyXFxuLy8gMSA9INGH0YPQudC90ZbRgdGC0YwgKNGDINC60L7QvdGC0LXQudC90LXRgNCwINC90LXQvNCw0ZQg0LHRgNC10LnQutC/0L7RltC90YLRltCyKSxcXHJcXG4vLyAyID0g0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIgKNC60L7QvdGC0LXQudC90LXRgCDQt9C80ZbQvdGO0ZQg0YHQstC+0Y4g0YjQuNGA0LjQvdGDINC/0L4g0LHRgNC10LnQui3Qv9C+0ZfQvdGCKVxcclxcbiRyZXNwb25zaXZlVHlwZTogMTtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0J7QsdC90YPQu9C10L3QvdGPID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT0gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL251bGxcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQtdCz0LAgQk9EWSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgLy8g0KHQutGA0L7Qu9C7INC30LDQsdC70L7QutC+0LLQsNC90L5cXHJcXG4gIC5sb2NrICYge1xcclxcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgICB0b3VjaC1hY3Rpb246IG5vbmU7XFxyXFxuICAgIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyDQodCw0LnRgiDQt9Cw0LLQsNC90YLQsNC20LXQvdC40LlcXHJcXG4gIC5sb2FkZWQgJiB7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vINCe0LHQvtC70L7QvdC60LAgd3JhcHBlciA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi53cmFwcGVyIHtcXHJcXG4gIG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFxyXFxuICBAc3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XFxyXFxuICAgIG92ZXJmbG93OiBjbGlwO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8g0J/RgNC40YLQuNGB0LrQsNGU0LzQviBmb290ZXJcXHJcXG4gID4gbWFpbiB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8g0KTRltC60YEg0LTQu9GPINGB0LvQsNC50LTQtdGA0ZbQslxcclxcbiAgPiAqIHtcXHJcXG4gICAgbWluLXdpZHRoOiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vL9CU0LvRjyDRgtC+0LPQviDRh9GC0L7QsdGLINC90LUg0LvQvtC80LDQu9GB0Y8g0YHQu9Cw0LnQtNC10YAg0L/RgNC4INGA0LXRgdCw0LnQt9C1XFxyXFxuaWZyYW1lI3dlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheSB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi8vINCe0LHQvNC10LbRg9GO0YfQuNC5INC60L7QvdGC0LXQudC90LXRgCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLypcXHJcXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cXHJcXG7QstGB0ZbRhSDQutC70LDRgdGW0LIsINGJ0L4g0LzRltGB0YLRj9GC0YwgKl9fY29udGFpbmVyXFxyXFxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXFxyXFxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcXHJcXG4qL1xcclxcbkBpZiAoJHJlc3BvbnNpdmVUeXBlPT0xKSB7XFxyXFxuICAvLyDQp9GD0LnQvdCwXFxyXFxuICBbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG4gICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuICAgICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQGlmICgkY29udGFpbmVyUGFkZGluZz4wKSB7XFxyXFxuICAgICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgICB9IEBlbHNlIHtcXHJcXG4gICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxyXFxuICAgICAgICAgIFxcXCJwYWRkaW5nLWxlZnRcXFwiLFxcclxcbiAgICAgICAgICBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksXFxyXFxuICAgICAgICAgIDE1XFxyXFxuICAgICAgICApO1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXHJcXG4gICAgICAgICAgXFxcInBhZGRpbmctcmlnaHRcXFwiLFxcclxcbiAgICAgICAgICBtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMiksXFxyXFxuICAgICAgICAgIDE1XFxyXFxuICAgICAgICApO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn0gQGVsc2Uge1xcclxcbiAgLy8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0LDQvNC4XFxyXFxuICBbY2xhc3MqPVxcXCJfX2NvbnRhaW5lclxcXCJdIHtcXHJcXG4gICAgbWFyZ2luOiAwIGF1dG87XFxyXFxuXFxyXFxuICAgIEBpZiAoJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSgkY29udGFpbmVyV2lkdGgpO1xcclxcbiAgICB9IEBlbHNlIHtcXHJcXG4gICAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkcGMpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSg5NzApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkdGFibGV0KSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oNzUwKTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIG1heC13aWR0aDogbm9uZTtcXHJcXG5cXHJcXG4gICAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjAgYW5kICRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINCx0LDQt9C+0LLQuNGFINGB0YLQuNC70ZbQsiwg0YjQsNCx0LvQvtC90ZbQsiAo0LfQsNCz0L7RgtGW0LLQtdC70YwpINGC0LAg0LTQvtC/0L7QvNGW0LbQvdC40YUg0LrQu9Cw0YHRltCyXFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLQuNC80LrQvdC10L3QvdGPINC60L7QvdC60YDQtdGC0L3QuNGFINGB0YLQuNC70ZbQsiDQtNC40LLQuNGB0YwgYmFzZS5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZVxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LfQsNCz0LDQu9GM0L3QuNGFINC10LvQtdC80LXQvdGC0ZbQsiDQv9GA0L7QtdC60YLRg1xcclxcbkBpbXBvcnQgXFxcImNvbW1vblxcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0LHQu9C+0LrRltCyXFxyXFxuQGltcG9ydCBcXFwiaGVhZGVyXFxcIjtcXHJcXG5AaW1wb3J0IFxcXCJmb290ZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImFkdmFudGFnZXNcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YHRgtC40LvRltCyINC+0LrRgNC10LzQuNGFINGB0YLQvtGA0ZbQvdC+0LpcXHJcXG5AaW1wb3J0IFxcXCJob21lXFxcIjtcXHJcXG5cIixcIkBmb250LWZhY2Uge1xcblxcdGZvbnQtZmFtaWx5OiBpY29ucztcXG5cXHRmb250LWRpc3BsYXk6IHN3YXA7XFxuXFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzL2ljb25zLndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzL2ljb25zLndvZmZcXFwiKSBmb3JtYXQoXFxcIndvZmZcXFwiKTtcXG5cXHRmb250LXdlaWdodDogNDAwO1xcblxcdGZvbnQtc3R5bGU6IG5vcm1hbDtcXG59XFxyXFxuXCIsXCIlaWMge1xcclxcbiAgZm9udC1mYW1pbHk6IFxcXCJpY29uc1xcXCI7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxuICBmb250LXdlaWdodDogbm9ybWFsO1xcclxcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XFxyXFxuICB0ZXh0LXRyYW5zZm9ybTogbm9uZTtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcclxcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuICAtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCJfaWNvbi1cXFwiXSB7XFxyXFxuICAmOmJlZm9yZSB7XFxyXFxuICAgIEBleHRlbmQgJWljO1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLl9pY29uLXNldHRpbmdzOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDBcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tY2FzZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTAxXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWRlbGl2ZXJ5OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDJcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tcmVudDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTAzXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLXlvdXR1YmU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwNFxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1pbnN0YWdyYW06YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwNVxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1ndWFyYW50ZWU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwNlxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1zYWxlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDdcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tYXJyb3ctZG93bjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA4XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWJ1cmdlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA5XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWZpbHRlcjpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTBhXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWNsb3NlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGJcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tYWxsOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGRcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tc2VhcmNoOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGVcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tY2FydDpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTBmXFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLXNlcnZpY2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkxMlxcXCI7XFxyXFxufVxcclxcblwiLFwiKiB7XFxyXFxuXFx0cGFkZGluZzogMHB4O1xcclxcblxcdG1hcmdpbjogMHB4O1xcclxcblxcdGJvcmRlcjogMHB4O1xcclxcbn1cXHJcXG4qLFxcclxcbio6YmVmb3JlLFxcclxcbio6YWZ0ZXIge1xcclxcblxcdGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcbjpmb2N1cyxcXHJcXG46YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5hOmZvY3VzLFxcclxcbmE6YWN0aXZlIHtcXHJcXG5cXHQvLyBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5odG1sLFxcclxcbmJvZHkge1xcclxcblxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHRtaW4td2lkdGg6ICRtaW5XaWR0aCArIHB4O1xcclxcbn1cXHJcXG5ib2R5IHtcXHJcXG5cXHRjb2xvcjogJG1haW5Db2xvcjtcXHJcXG5cXHRsaW5lLWhlaWdodDogMTtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiAkZm9udFNpemU7XFxyXFxuXFx0Ly90ZXh0LXJlbmRlcmluZzogb3B0aW1pemVMZWdpYmlsaXR5O1xcclxcblxcdC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XFxyXFxuXFx0LW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcXHJcXG59XFxyXFxuaW5wdXQsXFxyXFxuYnV0dG9uLFxcclxcbnRleHRhcmVhIHtcXHJcXG5cXHRmb250LWZhbWlseTogJGZvbnRGYW1pbHk7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5idXR0b24ge1xcclxcblxcdGN1cnNvcjogcG9pbnRlcjtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHRiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG59XFxyXFxuYSB7XFxyXFxuXFx0Y29sb3I6IGluaGVyaXQ7XFxyXFxuXFx0dGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG51bCBsaSB7XFxyXFxuXFx0bGlzdC1zdHlsZTogbm9uZTtcXHJcXG59XFxyXFxuaW1nIHtcXHJcXG5cXHR2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbn1cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5oNCxcXHJcXG5oNSxcXHJcXG5oNiB7XFxyXFxuXFx0Zm9udC13ZWlnaHQ6IGluaGVyaXQ7XFxyXFxuXFx0Zm9udC1zaXplOiBpbmhlcml0O1xcclxcbn1cXHJcXG5cIixcIi8vPEJVVFRPTlMgKGEuYnRuK3RhYik+XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBidG5cXHJcXG5cXHJcXG4uYnV0dG9uIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xcclxcbiAgcGFkZGluZzogMTJweCAyMHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogJGxpZ2h0QmxhY2s7XFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSwgI2ZmZik7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDMyO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmLl9mdyB7XFxyXFxuICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgfVxcclxcbiAgJl9ncmF5IHtcXHJcXG4gICAgY29sb3I6ICMxNjE2MTY7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6ICRkYXJrV2hpdGU7XFxyXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcbiAgICAgICY6aG92ZXIge1xcclxcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfd2hpdGUge1xcclxcbiAgICBjb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcXHJcXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8vPElOUFVUPlxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaW5wXFxyXFxuaW5wdXRbdHlwZT1cXFwidGV4dFxcXCJdLFxcclxcbmlucHV0W3R5cGU9XFxcImVtYWlsXFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwidGVsXFxcIl0sXFxyXFxudGV4dGFyZWEge1xcclxcbiAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgYXBwZWFyYW5jZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLmlucHV0IHtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDAgIWltcG9ydGFudDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAxNnB4IDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbiAgY29sb3I6ICNmZmY7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuXFxyXFxuICAmLl9mb3JtLWZvY3VzIHtcXHJcXG4gIH1cXHJcXG4gICYuX2Zvcm0tZXJyb3Ige1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaW5wdXRbdHlwZT1cXFwic2VhcmNoXFxcIl0ge1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XFxyXFxufVxcclxcbi5pbnB1dFtwbGFjZWhvbGRlcl06bm90KFtkYXRhLXBsYWNlaG9sZGVyLW5vaGlkZW5dKSB7XFxyXFxuICAmOjpwbGFjZWhvbGRlciB7XFxyXFxuICAgIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1kYXJrLWJnLCAjOWY5ZjlmKTtcXHJcXG4gIH1cXHJcXG4gICY6Zm9jdXM6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgb3BhY2l0eTogMDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxudGV4dGFyZWEuaW5wdXQge1xcclxcbiAgcmVzaXplOiBub25lO1xcclxcbiAgcGFkZGluZzogMHB4IDBweDtcXHJcXG59XFxyXFxuXCIsXCIvLyDQl9Cw0LPQsNC70YzQvdC40Lkg0YTQsNC50Lsg0LXQu9C10LzQtdC90YLRltCyINGE0L7RgNC8XFxyXFxuLy8g0JTQu9GPINC/0ZbQtNC60LvRjtGH0LXQvdC90Y8v0LLRltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0LrQvtC90LrRgNC10YLQvdC+0LPQviDQtdC70LXQvNC10L3RgtCwINGE0L7RgNC80Lgg0LTQuNCy0LjRgdGMIGJhc2UvZm9ybXMvZm9ybXMuc2Nzc1xcclxcbkBpbXBvcnQgXFxcImJhc2UvZm9ybXMvZm9ybXNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0L/QvtC/0LDQv9GW0LJcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3BvcHVwXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINGB0L/QvtC50LvQtdGA0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3BvbGxlcnNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YLQsNCx0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvdGFic1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQvNCw0L9cXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL21hcHNcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LHQu9C+0LrRgyBcXFwi0L/QvtC60LDQt9Cw0YLQuCDRidC1XFxcIlxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc2hvd21vcmVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC70LjQv9C60L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3N0aWNreVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0L/QvtCy0L3QvtC10LrRgNCw0L3QvdC+0LPQviDQsdC70L7QutGDXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9mdWxsc2NyZWVuXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LXQutGA0LDQvdC+0Zcg0L/RgNC+0LrRgNGD0YLQutC4XFxyXFxuLy8gU3R5bGVzIGZvciBmdWxscGFnZSBzY3JvbGxcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxwYWdlXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyByaXBwbGUg0LXRhNC10LrRgtGDXFxyXFxuLy8gU3R5bGVzIGZvciByaXBwbGUgZWZmZWN0XFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9yaXBwbGVcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC60LDRgdGC0L7QvNC90L7Qs9C+INC60YPRgNGB0L7RgNGDXFxyXFxuLy8gU3R5bGVzIGZvciBjdXN0b20gY3Vyc29yXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9jdXJzb3JcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINGH0YPQudC90LjRhSDQutCw0YDRgtC40L3QvtC6IChJQkcpXFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpYmcgKGRpdiDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZ2EgKGEg0Lcg0LrQsNGA0YLQuNC90LrQvtGOINGC0LAg0LrQu9Cw0YHQsNC80LgpXFxyXFxuW2NsYXNzKj1cXFwiLWliZ1xcXCJdIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdG9iamVjdC1maXQ6IGNvdmVyO1xcclxcblxcdH1cXHJcXG59XFxyXFxuW2NsYXNzKj1cXFwiLWliZ19jb250YWluXFxcIl0ge1xcclxcblxcdGltZyB7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY29udGFpbjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vINCo0LDQsdC70L7QvdC4ICjQt9Cw0LPQvtGC0ZbQstC70ZYpXFxyXFxuLy8gQGV4dGVuZCAl0ZbQvCfRjyDRiNCw0LHQu9C+0L3RgztcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoU0NTUyk6IGV4XFxyXFxuXFxyXFxuLy8g0JvRltGH0LjQu9GM0L3QuNC6INC00LvRjyDRgdC/0LjRgdC60YNcXHJcXG4lbGlzdENvdW50ZXIge1xcclxcblxcdGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG5cXHRjb3VudGVyLXJlc2V0OiBpdGVtO1xcclxcblxcdGxpIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0XFx0JjpiZWZvcmUge1xcclxcblxcdFxcdFxcdGNvdW50ZXItaW5jcmVtZW50OiBpdGVtO1xcclxcblxcdFxcdFxcdGNvbnRlbnQ6IGNvdW50ZXIoaXRlbSk7XFxyXFxuXFx0XFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QtSDQstGW0LTQtdC+XFxyXFxuJXJlc3BvbnNpdmVWaWRlbyB7XFxyXFxuXFx0cG9zaXRpb246IHJlbGF0aXZlO1xcclxcblxcdG92ZXJmbG93OiBoaWRkZW47XFxyXFxuXFx0aGVpZ2h0OiAwO1xcclxcblxcdHBhZGRpbmctYm90dG9tOiA1Ni4yNSU7XFxyXFxuXFx0dmlkZW8sXFxyXFxuXFx0aWZyYW1lLFxcclxcblxcdG9iamVjdCxcXHJcXG5cXHRlbWJlZCB7XFxyXFxuXFx0XFx0cG9zaXRpb246IGFic29sdXRlO1xcclxcblxcdFxcdHRvcDogMDtcXHJcXG5cXHRcXHRsZWZ0OiAwO1xcclxcblxcdFxcdHdpZHRoOiAxMDAlO1xcclxcblxcdFxcdGhlaWdodDogMTAwJTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCS0ZbQtNC10L4g0Y/QuiDRhNC+0L1cXHJcXG4ldmlkZW9CYWNrZ3JvdW5kIHtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogZml4ZWQ7XFxyXFxuXFx0XFx0dG9wOiA1MCU7XFxyXFxuXFx0XFx0bGVmdDogNTAlO1xcclxcblxcdFxcdG1pbi13aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRtaW4taGVpZ2h0OiAxMDAlO1xcclxcblxcdFxcdHdpZHRoOiBhdXRvO1xcclxcblxcdFxcdGhlaWdodDogYXV0bztcXHJcXG5cXHRcXHR6LWluZGV4OiAtMTAwO1xcclxcblxcdFxcdHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKSB0cmFuc2xhdGVZKC01MCUpO1xcclxcblxcdFxcdGJhY2tncm91bmQtc2l6ZTogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG4vLyDQodGW0YDQuNC5INGE0ZbQu9GM0YLRgFxcclxcbiVncmF5ZmlsdGVyIHtcXHJcXG5cXHR0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcblxcdGZpbHRlcjogZ3JheXNjYWxlKDEpO1xcclxcblxcdEBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xcclxcblxcdFxcdCY6aG92ZXIge1xcclxcblxcdFxcdFxcdGZpbHRlcjogZ3JheXNjYWxlKDApO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0LrQsNGB0YPQstCw0YLQuCDQstC40LTRltC70LXQvdC90Y9cXHJcXG4lbm9zZWxlY3Qge1xcclxcblxcdHVzZXItc2VsZWN0OiBub25lO1xcclxcbn1cXHJcXG4vLyDQlNC30LXRgNC60LDQu9GM0L3QtSDQstGW0LTQvtCx0YDQsNC20LXQvdC90Y9cXHJcXG4lbWlycm9yIHtcXHJcXG5cXHR0cmFuc2Zvcm06IHNjYWxlKC0xLCAxKTtcXHJcXG59XFxyXFxuLy8g0J/Qu9Cw0LLQvdC40Lkg0YHQutGA0L7Qu9C7XFxyXFxuJXNtb290aHNjcm9sbCB7XFxyXFxuXFx0LXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xcclxcbn1cXHJcXG4vLyDQodGF0L7QstCw0YLQuCDRgdC60YDQvtC70LtcXHJcXG4laGlkZXNjcm9sbCB7XFxyXFxuXFx0Jjo6LXdlYmtpdC1zY3JvbGxiYXIge1xcclxcblxcdFxcdGRpc3BsYXk6IG5vbmU7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cIixcIi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi5oZWFkZXIge1xcclxcbiAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICB0b3A6IDA7XFxyXFxuICBsZWZ0OiAwO1xcclxcbiAgei1pbmRleDogMTAwMDtcXHJcXG4gIC8vIC5oZWFkZXJfX3RvcFxcclxcblxcclxcbiAgJl9fdG9wIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5oZWFkZXJfX2JvZHlcXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgfVxcclxcbn1cXHJcXG4udG9wLWhlYWRlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xcclxcbiAgcGFkZGluZzogcmVtKDE4KSAwO1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI4LCA1KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcXHJcXG4gIC5tZW51LW9wZW4gJiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTEwMCUpO1xcclxcbiAgfVxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogcmVtKDE0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDE2LCAxNCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDgwLCAzMiwgMCwgMTI4MCwgMTAyNCk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWxlZnRcXFwiLCA5NCwgMjUsIDAsIDc2OCwgMzIwKTtcXHJcXG4gICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tcmlnaHRcXFwiLCA2OSwgMCwgMCwgNzY4LCAzMjApO1xcclxcbiAgICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIG1hcmdpbi1yaWdodDogYXV0bztcXHJcXG4gICAgICBtYXJnaW4tbGVmdDogYXV0bztcXHJcXG4gICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgICAgIHBhZGRpbmctbGVmdDogcmVtKDUpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19saW5rcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gICAgY29sdW1uLWdhcDogcmVtKDMyKTtcXHJcXG4gICAgcm93LWdhcDogcmVtKDUpO1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIH1cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAvLyAudG9wLWhlYWRlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC50b3AtaGVhZGVyX19sb2dvXFxyXFxuXFxyXFxuICAmX19sb2dvIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC50b3AtaGVhZGVyX19jb250YWN0c1xcclxcblxcclxcbiAgJl9fY29udGFjdHMge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX3JpZ2h0XFxyXFxuXFxyXFxuICAmX19yaWdodCB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5oZWFkZXIge1xcclxcbiAgLy8gLmhlYWRlcl9fYm90dG9tXFxyXFxuXFxyXFxuICAmX19ib3R0b20ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uYm90dG9tLWhlYWRlciB7XFxyXFxuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XFxyXFxuICAubWVudS1vcGVuICYge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xNzUlKTtcXHJcXG4gIH1cXHJcXG4gIC8vIC5ib3R0b20taGVhZGVyX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWhlYWRlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIH1cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGdhcDogcmVtKDgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uY29udGFjdHMtdG9wLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgY29sdW1uLWdhcDogcmVtKDMyKTtcXHJcXG4gIHJvdy1nYXA6IHJlbSg1KTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY29udGFjdHMtdG9wLWhlYWRlcl9fbGlua1xcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5yaWdodC10b3AtaGVhZGVyIHtcXHJcXG4gIC8vIC5yaWdodC10b3AtaGVhZGVyX19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICRtYWluQ29sb3I7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5yaWdodC10b3AtaGVhZGVyX19MaW5rXFxyXFxufVxcclxcbi5ib2R5LWhlYWRlciB7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogZW0oMTAyNCkpIHtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogcmVtKDgpO1xcclxcbiAgfVxcclxcbiAgLy8gLmJvZHktaGVhZGVyX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm9keS1oZWFkZXJfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvZHktaGVhZGVyX19tZW51XFxyXFxuXFxyXFxuICAmX19tZW51IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib2R5LWhlYWRlcl9fcmlnaHRcXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnRvcC1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcblxcclxcbiAgJl9fbG9nbyB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgbWFyZ2luLWJvdHRvbTogcmVtKDQ0KTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4ubWVudSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgLy8gLm1lbnVfX2ljb25cXHJcXG5cXHJcXG4gIC8vIC5tZW51X19ib2R5XFxyXFxuXFxyXFxuICAmX19ib2R5IHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBwYWRkaW5nOiByZW0oMjQpIHJlbSgxNik7XFxyXFxuICAgICAgcG9zaXRpb246IGZpeGVkO1xcclxcbiAgICAgIHdpZHRoOiAxMDAlO1xcclxcbiAgICAgIGhlaWdodDogMTAwJTtcXHJcXG4gICAgICB0b3A6IDA7XFxyXFxuICAgICAgbGVmdDogLTEwMCU7XFxyXFxuICAgICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtXaGl0ZTtcXHJcXG4gICAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICAgIHotaW5kZXg6IDE7XFxyXFxuXFxyXFxuICAgICAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWVudV9fbGlzdFxcclxcblxcclxcbiAgJl9fbGlzdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGdhcDogcmVtKDgpO1xcclxcbiAgICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gICAgICBmbGV4LXdyYXA6IG5vd3JhcDtcXHJcXG4gICAgICBvdmVyZmxvdzogYXV0bztcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiA2MCU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5tZW51X19pdGVtXFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgICAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgICBoZWlnaHQ6IDFweDtcXHJcXG4gICAgICAgIGJvdHRvbTogMDtcXHJcXG4gICAgICAgIGxlZnQ6IDA7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1lbnVfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLnJpZ2h0LWJvZHktaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogcmVtKDgpO1xcclxcbiAgLy8gLnJpZ2h0LWJvZHktaGVhZGVyX19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAmX19mb3JtIHtcXHJcXG4gIH1cXHJcXG4gIC8vIC5yaWdodC1ib2R5LWhlYWRlcl9fYnRuXFxyXFxuXFxyXFxuICAmX19idG4ge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogY2FsYygxMDAlIC0gMTVweCk7XFxyXFxuICAgICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICAgIGJvdHRvbTogMjRweDtcXHJcXG4gICAgICBsZWZ0OiA1MCU7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICAvLyAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIC8vICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIC8vICAmOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgLy8gICAgLXdlYmtpdC1hcHBlYXJhbmNlOiBub25lO1xcclxcbiAgICAvLyAgICBoZWlnaHQ6IDFlbTtcXHJcXG4gICAgLy8gICAgd2lkdGg6IDFlbTtcXHJcXG4gICAgLy8gICAgYm9yZGVyLXJhZGl1czogNTBlbTtcXHJcXG4gICAgLy8gICAgYmFja2dyb3VuZC1pbWFnZTogdXJsKGh0dHBzOi8vcHJvLmZvbnRhd2Vzb21lLmNvbS9yZWxlYXNlcy92NS4xMC4wL3N2Z3Mvc29saWQvdGltZXMtY2lyY2xlLnN2ZylcXHJcXG4gICAgLy8gICAgICBuby1yZXBlYXQgNTAlIDUwJTtcXHJcXG4gICAgLy8gICAgYmFja2dyb3VuZC1zaXplOiBjb250YWluO1xcclxcbiAgICAvLyAgICBvcGFjaXR5OiAwO1xcclxcbiAgICAvLyAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgLy8gIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvcm0tcmlnaHQtYm9keS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gICZfX2lucHV0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiAwO1xcclxcbiAgICBwYWRkaW5nOiAwO1xcclxcbiAgICBib3JkZXI6IG5vbmUgIWltcG9ydGFudDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBvdXRsaW5lOiBub25lO1xcclxcbiAgICAmOjotd2Via2l0LXNlYXJjaC1jYW5jZWwtYnV0dG9uIHtcXHJcXG4gICAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICB6LWluZGV4OiAxO1xcclxcbiAgfVxcclxcbiAgJl9fY2xvc2Uge1xcclxcbiAgICBkaXNwbGF5OiBub25lO1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiA4cHg7XFxyXFxuICB9XFxyXFxufVxcclxcbi8vPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vQnVyZ2VyXFxyXFxuXFxyXFxuLmljb24tbWVudSB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcblxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgcGFkZGluZzogMTNweCA3cHg7XFxyXFxuICAgIHdpZHRoOiByZW0oNDQpO1xcclxcbiAgICBoZWlnaHQ6IHJlbSg0NCk7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgIEBtZWRpYSAoYW55LWhvdmVyOiBub25lKSB7XFxyXFxuICAgICAgY3Vyc29yOiBkZWZhdWx0O1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4sXFxyXFxuICAgICY6OmJlZm9yZSxcXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGNvbnRlbnQ6IFxcXCJcXFwiO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgICAgcmlnaHQ6IDUwJTtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgd2lkdGg6IHBlcmNlbnQoMjAsIDQ0KTtcXHJcXG4gICAgICBoZWlnaHQ6IHJlbSgzKTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTYxNjE2O1xcclxcbiAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgMHB4KTtcXHJcXG4gICAgfVxcclxcbiAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgIHRvcDogcGVyY2VudCgxMiwgNDQpO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICBib3R0b206IHBlcmNlbnQoMTIsIDQ0KTtcXHJcXG4gICAgfVxcclxcbiAgICBzcGFuIHtcXHJcXG4gICAgICB0b3A6IGNhbGMoNTAlIC0gcmVtKDEuNSkpO1xcclxcbiAgICB9XFxyXFxuICAgIC5tZW51LW9wZW4gJiB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHJpZ2h0OiAxNnB4O1xcclxcbiAgICAgIHotaW5kZXg6IDM7XFxyXFxuICAgICAgc3BhbiB7XFxyXFxuICAgICAgICB3aWR0aDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YmVmb3JlLFxcclxcbiAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YmVmb3JlIHtcXHJcXG4gICAgICAgIHRvcDogY2FsYyg1MCUgLSByZW0oMS41KSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKC00NWRlZyk7XFxyXFxuICAgICAgfVxcclxcbiAgICAgICY6OmFmdGVyIHtcXHJcXG4gICAgICAgIGJvdHRvbTogY2FsYyg1MCUgLSByZW0oMS41KSk7XFxyXFxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsXCIvL9Cf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0YjRgNC40YTRgtGDXFxyXFxuQG1peGluIGZvbnQoJGZvbnRfbmFtZSwgJGZpbGVfbmFtZSwgJHdlaWdodCwgJHN0eWxlKSB7XFxyXFxuXFx0QGZvbnQtZmFjZSB7XFxyXFxuXFx0XFx0Zm9udC1mYW1pbHk6ICRmb250X25hbWU7XFxyXFxuXFx0XFx0Zm9udC1kaXNwbGF5OiBzd2FwO1xcclxcblxcdFxcdHNyYzogdXJsKFxcXCIuLi9mb250cy8jeyRmaWxlX25hbWV9LndvZmYyXFxcIikgZm9ybWF0KFxcXCJ3b2ZmMlxcXCIpLCB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcclxcblxcdFxcdGZvbnQtd2VpZ2h0OiAjeyR3ZWlnaHR9O1xcclxcblxcdFxcdGZvbnQtc3R5bGU6ICN7JHN0eWxlfTtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vUGVyY2VudFxcclxcbkBmdW5jdGlvbiBwZXJjZW50KCRweCwgJGZyb20pIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRmcm9tKSAqIDEwMCU7XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL1JFTVxcclxcbkBmdW5jdGlvbiByZW0oJHB4KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAxNikgKyByZW07XFxyXFxuXFx0QHJldHVybiAkcmVzdWx0O1xcclxcbn1cXHJcXG4vL0VNXFxyXFxuQGZ1bmN0aW9uIGVtKCRweCwgJGN1cnJlbnQ6IDE2KSB7XFxyXFxuXFx0JHJlc3VsdDogbWF0aC5kaXYoJHB4LCAkY3VycmVudCkgKyBlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcblxcclxcbi8vQ3VycmVuY3lcXHJcXG5AbWl4aW4gY3VycmVuY3koJHN5bSkge1xcclxcblxcdCY6OmFmdGVyIHtcXHJcXG5cXHRcXHRjb250ZW50OiBcXFwiI3skc3ltfVxcXCI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5cXHJcXG4vLyBHcmlkc1xcclxcbkBtaXhpbiBncmlkQ2FyZHMoJHR5cGU6IGZpdCwgJG1pbjogMjgwcHgsICRtYXg6IDFmciwgJGdhcDogMzBweCkge1xcclxcblxcdGRpc3BsYXk6IGdyaWQ7XFxyXFxuXFx0Z2FwOiAkZ2FwO1xcclxcblxcdGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tI3skdHlwZX0sIG1pbm1heCgkbWluLCAkbWF4KSk7XFxyXFxufVxcclxcblxcclxcbi8vINCQ0LTQsNC/0YLQuNCy0L3QsCDQstC70LDRgdGC0LjQstGW0YHRgtGMIChjbGFtcClcXHJcXG5AbWl4aW4gYWRhcHRpdmVWYWx1ZSgkcHJvcGVydHksICRzdGFydFNpemUsICRtaW5TaXplLCAka2VlcFNpemU6IDAsICR3aWR0aEZyb206ICRjb250YWluZXJXaWR0aCwgJHdpZHRoVG86ICRtaW5XaWR0aCkge1xcclxcblxcdEBpZiAoJHN0YXJ0U2l6ZT09MCkge1xcclxcblxcdFxcdCRzdGFydFNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHRAaWYgKCRtaW5TaXplPT0wKSB7XFxyXFxuXFx0XFx0JG1pblNpemU6IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQlNC70Y8gY2FsYygpO1xcclxcblxcdCRhZGRTaXplOiBtYXRoLmRpdigkc3RhcnRTaXplIC0gJG1pblNpemUsIDE2KTtcXHJcXG5cXHJcXG5cXHRAaWYgKCR3aWR0aEZyb20gPT0gJGNvbnRhaW5lcldpZHRoIGFuZCAkbWF4V2lkdGhDb250YWluZXIgPT0gMCkge1xcclxcblxcdFxcdCR3aWR0aEZyb206ICRtYXhXaWR0aDtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JHRgNC10LnQui3Qv9C+0ZfQvdGC0Lgg0LIgRU1cXHJcXG5cXHQkd2lkdGhGcm9tTWVkaWE6IGVtKCR3aWR0aEZyb20pO1xcclxcblxcdCR3aWR0aFRvTWVkaWE6IGVtKCR3aWR0aFRvKTtcXHJcXG5cXHJcXG5cXHQvLyDQpNC+0YDQvNGD0LvQsCDQv9C70LDQstCw0Y7Rh9C+0LPQviDQt9C90LDRh9C10L3QvdGPXFxyXFxuXFx0Ly8g0JjRgdGC0L7Rh9C90LjQujogaHR0cHM6Ly9jc3MtdHJpY2tzLmNvbS9saW5lYXJseS1zY2FsZS1mb250LXNpemUtd2l0aC1jc3MtY2xhbXAtYmFzZWQtb24tdGhlLXZpZXdwb3J0L1xcclxcblxcdCRzbG9wZTogbWF0aC5kaXYoKCRzdGFydFNpemUgLSAkbWluU2l6ZSksICgkd2lkdGhGcm9tIC0gJHdpZHRoVG8pKTtcXHJcXG5cXHQkeUludGVyc2VjdGlvbjogLSR3aWR0aFRvICogJHNsb3BlICsgJG1pblNpemU7XFxyXFxuXFx0QGlmICgkeUludGVyc2VjdGlvbj09MCkge1xcclxcblxcdFxcdCR5SW50ZXJzZWN0aW9uOiAwLjAwMDAwMTtcXHJcXG5cXHR9XFxyXFxuXFx0JGZseVZhbHVlOiAje3JlbSgkeUludGVyc2VjdGlvbil9XFxcIiArIFxcXCIgI3skc2xvcGUgKiAxMDB9dnc7XFxyXFxuXFxyXFxuXFx0Ly8g0J7RgtGA0LjQvNCw0L3QvdGPINC30L3QsNGH0LXQvdC90Y8g0LLQu9Cw0YHRgtC40LLQvtGB0YLRllxcclxcblxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIixcXFwiICRmbHlWYWx1ZSBcXFwiLFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0Ly8g0K/QutGJ0L4g0L3QtdCz0LDRgtC40LLQvdGWINC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHRAaWYgKCRtaW5TaXplID4gJHN0YXJ0U2l6ZSkge1xcclxcblxcdFxcdCRwcm9wZXJ0eVZhbHVlOiAje1xcXCJjbGFtcChcXFwiIHJlbSgkc3RhcnRTaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJG1pblNpemUpIFxcXCIpXFxcIn07XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCS0YHRgtCw0L3QvtCy0LvRjtGU0LzQviDQt9C90LDRh9C10L3QvdGPINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG5cXHRAaWYgJGtlZXBTaXplICE9IDEgYW5kICRrZWVwU2l6ZSAhPSAzIHtcXHJcXG5cXHRcXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJHN0YXJ0U2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG5cXHQvLyDQkNC00LDQv9GC0YPRlNC80L4g0YDQvtC30LzRltGAINGDINC/0YDQvtC80ZbQttC60YMg0LzRltC2INC30LDQt9C90LDRh9C10L3QuNC80Lgg0YjQuNGA0LjQvdCw0LzQuCDQsifRjtC/0L7RgNGC0YNcXHJcXG5cXHRAbWVkaWEgKG1pbi13aWR0aDogJHdpZHRoVG9NZWRpYSkgYW5kIChtYXgtd2lkdGg6ICR3aWR0aEZyb21NZWRpYSkge1xcclxcblxcdFxcdC8vINCv0LrRidC+INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzICgjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L3QtSDQv9GW0LTRgtGA0LjQvNGD0ZTRgtGM0YHRjyBjbGFtcCgpO1xcclxcblxcdFxcdEBzdXBwb3J0cyBub3QgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IGNhbGMoI3tyZW0oJG1pblNpemUpfSArICN7JGFkZFNpemV9ICogKDEwMHZ3IC0gI3tyZW0oJHdpZHRoVG8pfSkgLyAje21hdGguZGl2KCR3aWR0aEZyb20sIDE2KSAtIG1hdGguZGl2KCR3aWR0aFRvLCAxNil9KTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDIge1xcclxcblxcdFxcdEBtZWRpYSAobWF4LXdpZHRoOiAkd2lkdGhUb01lZGlhKSB7XFxyXFxuXFx0XFx0XFx0I3skcHJvcGVydHl9OiByZW0oJG1pblNpemUpO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmZvb3RlciB7XFxyXFxuICAvLyAuZm9vdGVyX19mb3JtXFxyXFxuXFxyXFxuICAmX19mb3JtIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5mb290ZXJfX2JvdHRvbVxcclxcblxcclxcbiAgJl9fYm90dG9tIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmZvcm0tZm9vdGVyIHtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctdG9wXFxcIiwgMTIwLCA2MCk7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDEyMCwgNjApO1xcclxcbiAgLy8gLmZvcm0tZm9vdGVyX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuZm9ybS1mb290ZXJfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgICBib3JkZXItcmFkaXVzOiAyMHB4O1xcclxcbiAgICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWJsYWNrLCAjMjAyMjI2KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCA2MCwgMTIsIDAsIDEwMjQsIDMyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgNjAsIDEyLCAwLCAxMDI0LCAzMjApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWxlZnRcXFwiLCA0MCwgMTIsIDAsIDEwMjQsIDMyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctcmlnaHRcXFwiLCA0MCwgMTIsIDAsIDEwMjQsIDMyMCk7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMTE2LCAxNik7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmZvcm0tZm9vdGVyX19sZWZ0XFxyXFxuXFxyXFxuICAmX19sZWZ0IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5mb3JtLWZvb3Rlcl9fcmlnaHRcXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmxlZnQtZm9ybS1mb290ZXIge1xcclxcbiAgZmxleDogMCAxIDQ1MXB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICB9XFxyXFxuICAvLyAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGVcXHJcXG5cXHJcXG4gICZfX3RpdGxlIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUsICNmZmYpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCA0MCwgMjQpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoNDgsIDQwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDIwLCAxMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1mb3JtLWZvb3Rlcl9fZGVzY1xcclxcblxcclxcbiAgJl9fZGVzYyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktZGFyay1iZywgIzlmOWY5Zik7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxNCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtZm9ybS1mb290ZXIge1xcclxcbiAgZmxleDogMCAxIDU1MnB4O1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICB9XFxyXFxuICAvLyAucmlnaHQtZm9ybS1mb290ZXJfX2Zvcm1cXHJcXG5cXHJcXG4gICZfX2Zvcm0ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dFxcclxcblxcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyMCwgOCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2J0biB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCA0NCwgMzIpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uYm90dG9tLWZvb3RlciB7XFxyXFxuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAyNCwgMTYpO1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAyNCwgMTYpO1xcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX190b3BcXHJcXG5cXHJcXG4gICZfX3RvcCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fbWlkXFxyXFxuXFxyXFxuICAmX19taWQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX3NvY2lhbHNcXHJcXG5cXHJcXG4gICZfX3NvY2lhbHMge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX2JvdHRvbVxcclxcblxcclxcbiAgJl9fYm90dG9tIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLnRvcC1ib3R0b20tZm9vdGVyIHtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMjgsIDIwKTtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTllOWU5O1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDQwLCA1Mik7XFxyXFxuICAvLyAudG9wLWJvdHRvbS1mb290ZXJfX2xvZ29cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubWlkLWJvdHRvbS1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImdhcFxcXCIsIDIzMywgMTYsIDAsIDEyMDAsIDk0NCk7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gICBkaXNwbGF5OiBncmlkO1xcclxcbiAgLy8gICBncmlkLXRlbXBsYXRlOiAxZnIgLyBtaW5tYXgoMjg4cHgsIDM4OXB4KSAxZnIgMjg4cHggMjg4cHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogZW0oMTAyNCkpIHtcXHJcXG4gICAgLy8gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyBtaW5tYXgoMjg4cHgsIDM4OXB4KSAxNnB4IDI4OHB4O1xcclxcbiAgICAvLyAgcm93LWdhcDogNDBweDtcXHJcXG4gIH1cXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIC8vICBncmlkLXRlbXBsYXRlOiAxZnIgMWZyIC8gMWZyIDFmcjtcXHJcXG4gICAgLy8gIGNvbHVtbi1nYXA6IDE2cHg7XFxyXFxuICAgIC8vICByb3ctZ2FwOiA2MnB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGVTbWFsbCkge1xcclxcbiAgICAvLyAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgLy8gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICAgIC8vICByb3ctZ2FwOiA1MnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1pZC1ib3R0b20tZm9vdGVyX19sZWZ0XFxyXFxuXFxyXFxuICAmX19sZWZ0IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5taWQtYm90dG9tLWZvb3Rlcl9fbWlkXFxyXFxuXFxyXFxuICAmX19taWQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1pZC1ib3R0b20tZm9vdGVyX19yaWdodFxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubGVmdC1taWQtZm9vdGVyIHtcXHJcXG4gIGZsZXg6IDAgMSAzODlweDtcXHJcXG4gIC8vICAgZ3JpZC1yb3c6IHNwYW4gMjtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXg6IDEgMSBhdXRvO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNjIsIDU4KTtcXHJcXG4gIH1cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX3RleHRcXHJcXG5cXHJcXG4gICZfX3RleHQge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuICAgIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXFxcImxpZ2FcXFwiIG9mZjtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjQsIDE4KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDI4LCAyNCk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19zdHJlZXRcXHJcXG5cXHJcXG4gICZfX3N0cmVldCB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjQsIDMyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX3Bob25lXFxyXFxuXFxyXFxuICAmX19waG9uZSB7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgOCwgMTYpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWxcXHJcXG5cXHJcXG4gICZfX2VtYWlsIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNCwgMzIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fYnRuc1xcclxcblxcclxcbiAgJl9fYnRucyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGdhcDogOHB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNjIsIDM4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX2J0blxcclxcblxcclxcbiAgJl9fYnRuIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX3NvY2lhbHNcXHJcXG5cXHJcXG4gICZfX3NvY2lhbHMge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uc29jaWFscy1sZWZ0LW1pZC1mb290ZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBnYXA6IDhweDtcXHJcXG4gIC8vIC5zb2NpYWxzLWxlZnQtbWlkLWZvb3Rlcl9faXRlbVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgIG1pbi13aWR0aDogNDRweDtcXHJcXG4gICAgbWluLWhlaWdodDogNDRweDtcXHJcXG4gICAgbWF4LXdpZHRoOiA0NHB4O1xcclxcbiAgICBtYXgtaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBwYWRkaW5nOiAxMHB4O1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1vci1kZXZpZGVyLWxpZ2h0LWJnLCAjZTllOWU5KTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuc29jaWFscy1sZWZ0LW1pZC1mb290ZXJfX2Rlc2NcXHJcXG5cXHJcXG4gICZfX2Rlc2Mge1xcclxcbiAgICBtYXJnaW4tbGVmdDogMTZweDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4vLyAubWlkLW1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4vLyAgIGdyaWQtY29sdW1uOiAzO1xcclxcbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4vLyAgICAgZ3JpZC1jb2x1bW46IDE7XFxyXFxuLy8gICAgIGdyaWQtcm93OiAyO1xcclxcbi8vICAgfVxcclxcbi8vICAgLy8gLm1pZC1taWQtYm90dG9tLWZvb3Rlcl9fdGl0bGVcXHJcXG5cXHJcXG4vLyAgICZfX3RpdGxlIHtcXHJcXG4vLyAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTYpO1xcclxcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbi8vICAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjQsIDIwKTtcXHJcXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDMyLCAyNCk7XFxyXFxuLy8gICB9XFxyXFxuXFxyXFxuLy8gICAvLyAubWlkLW1pZC1ib3R0b20tZm9vdGVyX19saXN0XFxyXFxuXFxyXFxuLy8gICAmX19saXN0IHtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuLy8gLmxpc3QtbWlkLWJvdHRvbS1mb290ZXIge1xcclxcbi8vICAgLy8gLmxpc3QtbWlkLWJvdHRvbS1mb290ZXJfX2l0ZW1cXHJcXG5cXHJcXG4vLyAgICZfX2l0ZW0ge1xcclxcbi8vICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbi8vICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxMiwgMjApO1xcclxcbi8vICAgICB9XFxyXFxuLy8gICB9XFxyXFxuXFxyXFxuLy8gICAvLyAubGlzdC1taWQtYm90dG9tLWZvb3Rlcl9fbGlua1xcclxcblxcclxcbi8vICAgJl9fbGluayB7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxNCk7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcbi8vIC5yaWdodC1taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuLy8gICBncmlkLWNvbHVtbjogNDtcXHJcXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbi8vICAgICBncmlkLWNvbHVtbjogMztcXHJcXG4vLyAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuLy8gICB9XFxyXFxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbi8vICAgICBncmlkLWNvbHVtbjogMjtcXHJcXG4vLyAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuLy8gICB9XFxyXFxuLy8gICAvLyAucmlnaHQtbWlkLWJvdHRvbS1mb290ZXJfX3RpdGxlXFxyXFxuXFxyXFxuLy8gICAmX190aXRsZSB7XFxyXFxuLy8gICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE2KTtcXHJcXG4vLyAgICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4vLyAgICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDI0LCAyMCk7XFxyXFxuLy8gICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAzMiwgMjQpO1xcclxcbi8vICAgfVxcclxcblxcclxcbi8vICAgLy8gLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyX19saXN0XFxyXFxuXFxyXFxuLy8gICAmX19saXN0IHtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuLy8gLmxpc3QtcmlnaHQtYm90dG9tLWZvb3RlciB7XFxyXFxuLy8gICAvLyAubGlzdC1yaWdodC1ib3R0b20tZm9vdGVyX19pdGVtXFxyXFxuXFxyXFxuLy8gICAmX19pdGVtIHtcXHJcXG4vLyAgICAgJjpub3QoOmxhc3QtY2hpbGQpIHtcXHJcXG4vLyAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMTIsIDIwKTtcXHJcXG4vLyAgICAgfVxcclxcbi8vICAgfVxcclxcblxcclxcbi8vICAgLy8gLmxpc3QtcmlnaHQtYm90dG9tLWZvb3Rlcl9fbGlua1xcclxcblxcclxcbi8vICAgJl9fbGluayB7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxNCk7XFxyXFxuLy8gICB9XFxyXFxuLy8gfVxcclxcbi5yaWdodC1taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcclxcbiAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gIHJvdy1nYXA6IDQwcHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogZW0oMTAyNCkpIHtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XFxyXFxuICB9XFxyXFxuICAvLyAucmlnaHQtbWlkLWJvdHRvbS1mb290ZXJfX2l0ZW1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uaXRlbS1yaWdodC1mb290ZXIge1xcclxcbiAgZmxleDogMCAxIDI4OHB4O1xcclxcbiAgLy8gLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZVxcclxcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTYpO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjQsIDIwKTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDMyLCAyNCk7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuaXRlbS1yaWdodC1mb290ZXJfX2xpc3RcXHJcXG5cXHJcXG4gICZfX2xpc3Qge1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTQpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmxpc3QtaXRlbS1yaWdodC1mb290ZXIge1xcclxcbiAgLy8gLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbiAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxMiwgMjApO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlua1xcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tYm90dG9tLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgcm93LWdhcDogOHB4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAyNCwgMTYpO1xcclxcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tdG9wXFxcIiwgNDIsIDUyKTtcXHJcXG4gIC8vIC5ib3R0b20tYm90dG9tLWZvb3Rlcl9fY29weXJpZ2h0XFxyXFxuXFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gICZfX2NvcHlyaWdodCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWJvdHRvbS1mb290ZXJfX3BvbGljeVxcclxcblxcclxcbiAgJl9fcG9saWN5IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXCIsXCIuYWR2YW50YWdlcyB7XFxyXFxuICAvLyAuYWR2YW50YWdlc19fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmFkdmFudGFnZXNfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmFkdmFudGFnZXNfX2NhcmRzXFxyXFxuXFxyXFxuICAmX19jYXJkcyB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNhcmQtYWR2YW50YWdlcyB7XFxyXFxuICBmbGV4OiAwIDEgMzMuMzMzJTtcXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX2JvZHlcXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmNhcmQtYWR2YW50YWdlc19faW1nLWliZ1xcclxcblxcclxcbiAgJl9faW1nLWliZyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlXFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX19kZXNjXFxyXFxuXFxyXFxuICAmX19kZXNjIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjFmNGQ2YjA1MzZmMzFlNWRjM2Q2XCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9