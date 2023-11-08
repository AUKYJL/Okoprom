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
  margin: 0 -0.5rem;
}

.card-advantages {
  flex: 0 1 33.333%;
  padding: 0 0.5rem;
}
.card-advantages__body {
  display: flex;
  align-items: flex-start;
}
.card-advantages__img {
  min-height: 60px;
  min-width: 60px;
  max-width: 60px;
  min-height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);
}
.card-advantages__img-ibg {
  width: 24px;
  height: 24px;
}
.card-advantages__title {
  color: var(--text-black, #161616);
  font-weight: 400;
  line-height: 1.2;
  letter-spacing: -0.6px;
}
@media (min-width: 76.875em) {
  .card-advantages__title {
    font-size: 1.25rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem )) {
    .card-advantages__title {
      font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem );
    }
  }
  @supports not (font-size: clamp( 1rem , 0.9120879121rem  +  0.4395604396vw , 1.25rem )) {
    .card-advantages__title {
      font-size: calc(1rem + 0.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__title {
    font-size: 1rem;
  }
}
.card-advantages__desc {
  color: var(--text-gray-light-bg, #757575);
  font-weight: 400;
  line-height: 1.25;
}
@media (min-width: 76.875em) {
  .card-advantages__desc {
    font-size: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .card-advantages__desc {
      font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem );
    }
  }
  @supports not (font-size: clamp( 0.875rem , 0.831043956rem  +  0.2197802198vw , 1rem )) {
    .card-advantages__desc {
      font-size: calc(0.875rem + 0.125 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__desc {
    font-size: 0.875rem;
  }
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/button.scss","webpack://./src/scss/base/forms/input.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/advantages.scss"],"names":[],"mappings":"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AAA;IACA,kBAAA;IACA,qBAAA;IACA,iBAAA;IACA,yBAAA;IACA,8BAAA;EP2RJ;EOzRE;IACE,mBAAA;EP2RJ;EOzRE;IACE,sBAAA;EP2RJ;EOzRE;IACE,2BAAA;EP2RJ;EOzRE;IACE,kBAAA;IACA,WAAA;IACA,UAAA;EP2RJ;EO1RI;IACE,QAAA;EP4RN;EOvRI;IACE,2BAAA;IACA,6CAAA;EPyRN;EOvRI;IACE,8BAAA;IACA,4CAAA;EPyRN;AACF;;AQxlBE;EClEF;IDmEG,mBAAA;ER4lBD;AACF;AQzlBC;EAEC;ICzEF;MD0EG,2EAhBc;IR2mBb;EACF;EQzlBA;IC7EF;MD8EG,4DAAA;IR4lBC;EACF;AACF;AQ1lBE;EClFF;IDmFG,oBAAA;ER6lBD;AACF;AQ/mBE;EClEF;IDmEG,sBAAA;ERknBD;AACF;AQ/mBC;EAEC;ICzEF;MD0EG,8EAhBc;IRioBb;EACF;EQ/mBA;IC7EF;MD8EG,+DAAA;IRknBC;EACF;AACF;AQhnBE;EClFF;IDmFG,uBAAA;ERmnBD;AACF;AS7rBE;EACE,mBAAA;EACA,4CAAA;EAKA,aAAA;EACA,8BAAA;AT2rBJ;AQ3oBE;ECxDA;IDyDC,oBAAA;ER8oBD;AACF;AQ3oBC;EAEC;IC/DA;MDgEC,6EAhBc;IR6pBb;EACF;EQ3oBA;ICnEA;MDoEC,qDAAA;IR8oBC;EACF;AACF;AQ5oBE;ECxEA;IDyEC,oBAAA;ER+oBD;AACF;AQjqBE;ECxDA;IDyDC,uBAAA;ERoqBD;AACF;AQjqBC;EAEC;IC/DA;MDgEC,gFAhBc;IRmrBb;EACF;EQjqBA;ICnEA;MDoEC,wDAAA;IRoqBC;EACF;AACF;AQlqBE;ECxEA;IDyEC,uBAAA;ERqqBD;AACF;AQvrBE;ECxDA;IDyDC,oBAAA;ER0rBD;AACF;AQvrBC;EAEC;IC/DA;MDgEC,6EAhBc;IRysBb;EACF;EQvrBA;ICnEA;MDoEC,yDAAA;IR0rBC;EACF;AACF;AQxrBE;ECxEA;IDyEC,qBAAA;ER2rBD;AACF;AQ7sBE;ECxDA;IDyDC,qBAAA;ERgtBD;AACF;AQ7sBC;EAEC;IC/DA;MDgEC,8EAhBc;IR+tBb;EACF;EQ7sBA;ICnEA;MDoEC,0DAAA;IRgtBC;EACF;AACF;AQ9sBE;ECxEA;IDyEC,sBAAA;ERitBD;AACF;AQnuBE;ECxDA;IDyDC,YAAA;ERsuBD;AACF;AQnuBC;EAEC;IC/DA;MDgEC,kEAhBc;IRqvBb;EACF;EQnuBA;ICnEA;MDoEC,iDAAA;IRsuBC;EACF;AACF;AQpuBE;ECxEA;IDyEC,SAAA;ERuuBD;AACF;ASvyBI;EAVF;IAWI,sBAAA;ET0yBJ;AACF;AS7xBA;EACE,eAAA;AT+xBF;AS9xBE;EAFF;IAGI,cAAA;ETiyBF;AACF;AS9xBE;EACE,8BAAA;EAEA,gBAAA;EACA,gBAAA;AT+xBJ;AQ3wBE;ECxBA;IDyBC,iBAAA;ER8wBD;AACF;AQ3wBC;EAEC;IC/BA;MDgCC,wEAhBc;IR6xBb;EACF;EQ3wBA;ICnCA;MDoCC,sDAAA;IR8wBC;EACF;AACF;AQ5wBE;ECxCA;IDyCC,iBAAA;ER+wBD;AACF;AQjyBE;ECxBA;IDyBC,sBAAA;ERoyBD;AACF;AQjyBC;EAEC;IC/BA;MDgCC,8EAhBc;IRmzBb;EACF;EQjyBA;ICnCA;MDoCC,6DAAA;IRoyBC;EACF;AACF;AQlyBE;ECxCA;IDyCC,sBAAA;ERqyBD;AACF;ASr0BE;EACE,wCAAA;EAEA,gBAAA;EACA,iBAAA;ATs0BJ;AQ5zBE;ECdA;IDeC,eAAA;ER+zBD;AACF;AQ5zBC;EAEC;ICrBA;MDsBC,uEAhBc;IR80Bb;EACF;EQ5zBA;ICzBA;MD0BC,4DAAA;IR+zBC;EACF;AACF;AQ7zBE;EC9BA;ID+BC,mBAAA;ERg0BD;AACF;;ASx1BA;EACE,eAAA;AT21BF;AS11BE;EAFF;IAGI,cAAA;ET61BF;AACF;AQ31BE;ECOE;IDND,sBAAA;ER81BD;AACF;AQ31BC;EAEC;ICAE;MDCD,6EAhBc;IR62Bb;EACF;EQ31BA;ICJE;MDKD,6DAAA;IR81BC;EACF;AACF;AQ51BE;ECTE;IDUD,qBAAA;ER+1BD;AACF;AQj3BE;ECYA;IDXC,mBAAA;ERo3BD;AACF;AQj3BC;EAEC;ICKA;MDJC,wEAhBc;IRm4Bb;EACF;EQj3BA;ICCA;MDAC,wDAAA;IRo3BC;EACF;AACF;AQl3BE;ECJA;IDKC,gBAAA;ERq3BD;AACF;;ASt3BA;EACE,2CAAA;ATy3BF;AQ34BE;ECiBF;IDhBG,mBAAA;ER84BD;AACF;AQ34BC;EAEC;ICUF;MDTG,wEAhBc;IR65Bb;EACF;EQ34BA;ICMF;MDLG,wDAAA;IR84BC;EACF;AACF;AQ54BE;ECCF;IDAG,iBAAA;ER+4BD;AACF;AQj6BE;ECiBF;IDhBG,sBAAA;ERo6BD;AACF;AQj6BC;EAEC;ICUF;MDTG,2EAhBc;IRm7Bb;EACF;EQj6BA;ICMF;MDLG,2DAAA;IRo6BC;EACF;AACF;AQl6BE;ECCF;IDAG,oBAAA;ERq6BD;AACF;ASp4BA;EAEE,gCAAA;ATq4BF;AQ17BE;ECmDF;IDlDG,uBAAA;ER67BD;AACF;AQ17BC;EAEC;IC4CF;MD3CG,+EAhBc;IR48Bb;EACF;EQ17BA;ICwCF;MDvCG,8DAAA;IR67BC;EACF;AACF;AQ37BE;ECmCF;IDlCG,uBAAA;ER87BD;AACF;AQh9BE;ECmDF;IDlDG,qBAAA;ERm9BD;AACF;AQh9BC;EAEC;IC4CF;MD3CG,8EAbe;IR+9Bd;EACF;EQh9BA;ICwCF;MDvCG,+DAAA;IRm9BC;EACF;AACF;AQj9BE;ECmCF;IDlCG,sBAAA;ERo9BD;AACF;AS16BA;EACE,aAAA;AT46BF;AQz+BE;EC4DF;ID3DG,eAAA;ER4+BD;AACF;AQz+BC;EAEC;ICqDF;MDpDG,iEAhBc;IR2/Bb;EACF;EQz+BA;ICiDF;MDhDG,gDAAA;IR4+BC;EACF;AACF;AQ1+BE;EC4CF;ID3CG,SAAA;ER6+BD;AACF;ASh8BE;EAHF;IAII,sBAAA;ETm8BF;AACF;ASj6BA;EACE,eAAA;ATm6BF;ASj6BE;EAHF;IAII,cAAA;ETo6BF;AACF;AQ5gCE;ECmGF;IDlGG,uBAAA;ER+gCD;AACF;AQ5gCC;EAEC;IC4FF;MD3FG,gFAhBc;IR8hCb;EACF;EQ5gCA;ICwFF;MDvFG,+DAAA;IR+gCC;EACF;AACF;AQ7gCE;ECmFF;IDlFG,uBAAA;ERghCD;AACF;ASt7BE;EACE,iCAAA;EACA,iCAAA;EACA,gBAAA;EAEA,yBAAA;EACA,sBAAA;ATu7BJ;AQziCE;EC4GA;ID3GC,iBAAA;ER4iCD;AACF;AQziCC;EAEC;ICqGA;MDpGC,0EAhBc;IR2jCb;EACF;EQziCA;ICiGA;MDhGC,4DAAA;IR4iCC;EACF;AACF;AQ1iCE;EC4FA;ID3FC,mBAAA;ER6iCD;AACF;ASx8BE;EACE,cAAA;AT08BJ;AQlkCE;ECuHA;IDtHC,qBAAA;ERqkCD;AACF;AQlkCC;EAEC;ICgHA;MD/GC,2EAbe;IRilCd;EACF;EQlkCA;IC4GA;MD3GC,2DAAA;IRqkCC;EACF;AACF;AQnkCE;ECuGA;IDtGC,mBAAA;ERskCD;AACF;AS19BE;EACE,cAAA;AT49BJ;AQ3lCE;EC8HA;ID7HC,qBAAA;ER8lCD;AACF;AQ3lCC;EAEC;ICuHA;MDtHC,2EAbe;IR0mCd;EACF;EQ3lCA;ICmHA;MDlHC,2DAAA;IR8lCC;EACF;AACF;AQ5lCE;EC8GA;ID7GC,mBAAA;ER+lCD;AACF;AS5+BE;EACE,cAAA;AT8+BJ;AQpnCE;ECqIA;IDpIC,qBAAA;ERunCD;AACF;AQpnCC;EAEC;IC8HA;MD7HC,2EAbe;IRmoCd;EACF;EQpnCA;IC0HA;MDzHC,2DAAA;IRunCC;EACF;AACF;AQrnCE;ECqHA;IDpHC,mBAAA;ERwnCD;AACF;AS9/BE;EACE,aAAA;EACA,QAAA;ATggCJ;AQ9oCE;EC4IA;ID3IC,uBAAA;ERipCD;AACF;AQ9oCC;EAEC;ICqIA;MDpIC,gFAhBc;IRgqCb;EACF;EQ9oCA;ICiIA;MDhIC,8DAAA;IRipCC;EACF;AACF;AQ/oCE;EC4HA;ID3HC,uBAAA;ERkpCD;AACF;ASxgCA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AT0gCF;ASvgCE;EACE,eAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,4DAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ATygCJ;ASpgCE;EACE,iBAAA;EACA,yCAAA;EACA,iBAAA;ATsgCJ;;ASr7BA;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,aAAA;ATw7BF;ASv7BE;EALF;IAMI,0BAAA;ET07BF;AACF;ASp7BA;EACE,eAAA;EAEA,iCAAA;ATq7BF;ASp7BE;EAEE,gBAAA;EACA,gBAAA;EACA,sBAAA;ATq7BJ;AQ/sCE;ECsRA;IDrRC,kBAAA;ERktCD;AACF;AQ/sCC;EAEC;IC+QA;MD9QC,uEAhBc;IRiuCb;EACF;EQ/sCA;IC2QA;MD1QC,uDAAA;IRktCC;EACF;AACF;AQhtCE;ECsQA;IDrQC,eAAA;ERmtCD;AACF;AQruCE;ECsRA;IDrRC,mBAAA;ERwuCD;AACF;AQruCC;EAEC;IC+QA;MD9QC,0EAhBc;IRuvCb;EACF;EQruCA;IC2QA;MD1QC,4DAAA;IRwuCC;EACF;AACF;AQtuCE;ECsQA;IDrQC,qBAAA;ERyuCD;AACF;AS39BE;EAEE,gBAAA;EACA,iBAAA;AT49BJ;AQ/vCE;ECgSA;ID/RC,eAAA;ERkwCD;AACF;AQ/vCC;EAEC;ICyRA;MDxRC,uEAhBc;IRixCb;EACF;EQ/vCA;ICqRA;MDpRC,4DAAA;IRkwCC;EACF;AACF;AQhwCE;ECgRA;ID/QC,mBAAA;ERmwCD;AACF;;AQrxCE;EC0SE;IDzSD,sBAAA;ERyxCD;AACF;AQtxCC;EAEC;ICmSE;MDlSD,+EAbe;IRqyCd;EACF;EQtxCA;IC+RE;MD9RD,8DAAA;IRyxCC;EACF;AACF;AQvxCE;EC0RE;IDzRD,sBAAA;ER0xCD;AACF;ASv/BA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;EAEA,6BAAA;EAIA,yCAAA;EACA,gBAAA;EACA,iBAAA;ATq/BF;AQtzCE;ECqTF;IDpTG,mBAAA;ERyzCD;AACF;AQtzCC;EAEC;IC8SF;MD7SG,wEAhBc;IRw0Cb;EACF;EQtzCA;IC0SF;MDzSG,wDAAA;IRyzCC;EACF;AACF;AQvzCE;ECqSF;IDpSG,iBAAA;ER0zCD;AACF;AQ50CE;ECqTF;IDpTG,oBAAA;ER+0CD;AACF;AQ50CC;EAEC;IC8SF;MD7SG,6EAbe;IR21Cd;EACF;EQ50CA;IC0SF;MDzSG,6DAAA;IR+0CC;EACF;AACF;AQ70CE;ECqSF;IDpSG,mBAAA;ERg1CD;AACF;AUn6CE;EACE,aAAA;EACA,eAAA;EAEA,iBAAA;AVo6CJ;;AUj6CA;EACE,iBAAA;EACA,iBAAA;AVo6CF;AUj6CE;EACE,aAAA;EACA,uBAAA;AVm6CJ;AUh6CE;EACE,gBAAA;EACA,eAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,4DAAA;AVk6CJ;AU95CE;EACE,WAAA;EACA,YAAA;AVg6CJ;AUt5CE;EACE,iCAAA;EAEA,gBAAA;EACA,gBAAA;EACA,sBAAA;AVu5CJ;AQr4CE;EEvBA;IFwBC,kBAAA;ERw4CD;AACF;AQr4CC;EAEC;IE9BA;MF+BC,uEAhBc;IRu5Cb;EACF;EQr4CA;IElCA;MFmCC,uDAAA;IRw4CC;EACF;AACF;AQt4CE;EEvCA;IFwCC,eAAA;ERy4CD;AACF;AUx6CE;EACE,yCAAA;EAEA,gBAAA;EACA,iBAAA;AVy6CJ;AQh6CE;EEbA;IFcC,eAAA;ERm6CD;AACF;AQh6CC;EAEC;IEpBA;MFqBC,uEAhBc;IRk7Cb;EACF;EQh6CA;IExBA;MFyBC,4DAAA;IRm6CC;EACF;AACF;AQj6CE;EE7BA;IF8BC,mBAAA;ERo6CD;AACF","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:700&display=swap);\r\n@import url(\"https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500&display=swap\");\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Golos Text\", sans-serif;\r\n$fontSize: rem(16); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n//text\r\n$mainColor: #161616; // Колір шрифту за замовчуванням\r\n$darkGray: #757575;\r\n$lightGray: #9f9f9f;\r\n\r\n//bg\r\n$lightBlack: #202226;\r\n$darkWhite: #f4f5f8;\r\n\r\n//tags\r\n$red: #d21924;\r\n$blue: #2949b5;\r\n$green: #308d77;\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1280;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1200;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n  // Скролл заблоковано\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n    overscroll-behavior: none;\r\n  }\r\n\r\n  // Сайт завантажений\r\n  .loaded & {\r\n  }\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n\r\n  @supports (overflow: clip) {\r\n    overflow: clip;\r\n  }\r\n\r\n  // Притискаємо footer\r\n  > main {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  // Фікс для слайдерів\r\n  > * {\r\n    min-width: 0;\r\n  }\r\n}\r\n\r\n//Для того чтобы не ломался слайдер при ресайзе\r\niframe#webpack-dev-server-client-overlay {\r\n  display: none !important;\r\n}\r\n\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Чуйна\r\n  [class*=\"__container\"] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n      margin: 0 auto;\r\n    }\r\n\r\n    @if ($containerPadding>0) {\r\n      @if ($maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      } @else {\r\n        @include adaptiveValue(\r\n          \"padding-left\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n        @include adaptiveValue(\r\n          \"padding-right\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n      }\r\n    }\r\n  }\r\n} @else {\r\n  // Брейк-поїнтами\r\n  [class*=\"__container\"] {\r\n    margin: 0 auto;\r\n\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n@import \"advantages\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","@font-face {\n\tfont-family: icons;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/icons.woff2\") format(\"woff2\"), url(\"../fonts/icons.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\r\n","%ic {\r\n  font-family: \"icons\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*=\"_icon-\"] {\r\n  &:before {\r\n    @extend %ic;\r\n    display: block;\r\n  }\r\n}\r\n\r\n._icon-settings:before {\r\n  content: \"\\e900\";\r\n}\r\n._icon-case:before {\r\n  content: \"\\e901\";\r\n}\r\n._icon-delivery:before {\r\n  content: \"\\e902\";\r\n}\r\n._icon-rent:before {\r\n  content: \"\\e903\";\r\n}\r\n._icon-youtube:before {\r\n  content: \"\\e904\";\r\n}\r\n._icon-instagram:before {\r\n  content: \"\\e905\";\r\n}\r\n._icon-guarantee:before {\r\n  content: \"\\e906\";\r\n}\r\n._icon-sale:before {\r\n  content: \"\\e907\";\r\n}\r\n._icon-arrow-down:before {\r\n  content: \"\\e908\";\r\n}\r\n._icon-burger:before {\r\n  content: \"\\e909\";\r\n}\r\n._icon-filter:before {\r\n  content: \"\\e90a\";\r\n}\r\n._icon-close:before {\r\n  content: \"\\e90b\";\r\n}\r\n._icon-all:before {\r\n  content: \"\\e90d\";\r\n}\r\n._icon-search:before {\r\n  content: \"\\e90e\";\r\n}\r\n._icon-cart:before {\r\n  content: \"\\e90f\";\r\n}\r\n._icon-service:before {\r\n  content: \"\\e912\";\r\n}\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","//<BUTTONS (a.btn+tab)>\r\n// Сніппет (HTML): btn\r\n\r\n.button {\r\n  display: inline-flex;\r\n  padding: 12px 20px;\r\n  border-radius: 8px;\r\n  background-color: $lightBlack;\r\n  color: var(--text-white, #fff);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  transition: all 0.3s ease 0s;\r\n  white-space: nowrap;\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      background-color: #2b2d32;\r\n    }\r\n  }\r\n  &._fw {\r\n    width: 100%;\r\n  }\r\n  &_gray {\r\n    color: #161616;\r\n    background-color: $darkWhite;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n  &_white {\r\n    color: #161616;\r\n    background-color: #fff;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #f4f5f8;\r\n      }\r\n    }\r\n  }\r\n}\r\n","//<INPUT>\r\n// Сніппет (HTML): inp\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.input {\r\n  border-radius: 0 !important;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 16px 0px;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid #fff;\r\n  outline: none;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n\r\n  &._form-focus {\r\n  }\r\n  &._form-error {\r\n  }\r\n}\r\n.input[type=\"search\"] {\r\n  padding: 0px;\r\n  border: 1px solid #eee;\r\n  border-radius: 8px;\r\n  background: var(--background-gray, #f4f5f8);\r\n}\r\n.input[placeholder]:not([data-placeholder-nohiden]) {\r\n  &::placeholder {\r\n    transition: opacity 0.3s;\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n  }\r\n  &:focus::placeholder {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\ntextarea.input {\r\n  resize: none;\r\n  padding: 0px 0px;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  // .header__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .header__body\r\n\r\n  &__body {\r\n  }\r\n}\r\n.top-header {\r\n  background: var(--background-gray, #f4f5f8);\r\n  padding: rem(18) 0;\r\n  @include adaptiveValue(\"margin-bottom\", 28, 5);\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -100%);\r\n  }\r\n  // .top-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  &__right {\r\n    display: flex;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    font-size: rem(14);\r\n    font-weight: 400;\r\n    line-height: math.div(16, 14);\r\n    @include adaptiveValue(\"gap\", 80, 32, 0, 1280, 1024);\r\n    @media (max-width: $mobile) {\r\n      @include adaptiveValue(\"margin-left\", 94, 25, 0, 768, 320);\r\n      @include adaptiveValue(\"margin-right\", 69, 0, 0, 768, 320);\r\n      flex: 1 1 auto;\r\n      justify-content: space-between;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      justify-content: flex-end;\r\n      padding-left: rem(5);\r\n    }\r\n  }\r\n  &__links {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    column-gap: rem(32);\r\n    row-gap: rem(5);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      display: none;\r\n    }\r\n  }\r\n  // .top-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  // .top-header__logo\r\n\r\n  &__logo {\r\n  }\r\n\r\n  // .top-header__contacts\r\n\r\n  &__contacts {\r\n  }\r\n\r\n  // .top-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.header {\r\n  // .header__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.bottom-header {\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -175%);\r\n  }\r\n  // .bottom-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__left {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: rem(8);\r\n  }\r\n}\r\n\r\n.contacts-top-header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  column-gap: rem(32);\r\n  row-gap: rem(5);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  // .contacts-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n}\r\n.right-top-header {\r\n  // .right-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n\r\n  // .right-top-header__Link\r\n}\r\n.body-header {\r\n  @media (max-width: em(1024)) {\r\n    margin-bottom: rem(8);\r\n  }\r\n  // .body-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .body-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  // .body-header__menu\r\n\r\n  &__menu {\r\n  }\r\n\r\n  // .body-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.top-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  &__logo {\r\n    display: none;\r\n    @media (max-width: em(610)) {\r\n      margin-bottom: rem(44);\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n.menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  // .menu__icon\r\n\r\n  // .menu__body\r\n\r\n  &__body {\r\n    @media (max-width: em(610)) {\r\n      padding: rem(24) rem(16);\r\n      position: fixed;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: -100%;\r\n      background-color: $darkWhite;\r\n      transition: all 0.3s ease 0s;\r\n      z-index: 1;\r\n\r\n      .menu-open & {\r\n        transition: all 0.3s ease 0.2s;\r\n        left: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__list\r\n\r\n  &__list {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(8);\r\n    flex-wrap: wrap;\r\n\r\n    @media (max-width: em(610)) {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      flex-wrap: nowrap;\r\n      overflow: auto;\r\n      max-height: 60%;\r\n    }\r\n  }\r\n\r\n  // .menu__item\r\n\r\n  &__item {\r\n    @media (max-width: em(610)) {\r\n      display: block;\r\n      position: relative;\r\n      padding-bottom: 16px;\r\n      width: 100%;\r\n      &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 1px;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__link\r\n\r\n  &__link {\r\n    @media (max-width: em(610)) {\r\n      padding: 0;\r\n    }\r\n  }\r\n}\r\n\r\n.right-body-header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  gap: rem(8);\r\n  // .right-body-header__link\r\n\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n\r\n  &__form {\r\n  }\r\n  // .right-body-header__btn\r\n\r\n  &__btn {\r\n    @media (max-width: em(610)) {\r\n      position: absolute;\r\n      width: calc(100% - 15px);\r\n      display: block;\r\n      text-align: center;\r\n      bottom: 24px;\r\n      left: 50%;\r\n      transform: translate(-50%, 0px);\r\n    }\r\n  }\r\n  &__input {\r\n    //  width: 44px;\r\n    //  height: 44px;\r\n    //  &::-webkit-search-cancel-button {\r\n    //    -webkit-appearance: none;\r\n    //    height: 1em;\r\n    //    width: 1em;\r\n    //    border-radius: 50em;\r\n    //    background-image: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)\r\n    //      no-repeat 50% 50%;\r\n    //    background-size: contain;\r\n    //    opacity: 0;\r\n    //    pointer-events: none;\r\n    //  }\r\n  }\r\n}\r\n.form-right-body-header {\r\n  display: flex;\r\n  &__input {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 0;\r\n    padding: 0;\r\n    border: none !important;\r\n    position: relative;\r\n    outline: none;\r\n    &::-webkit-search-cancel-button {\r\n      -webkit-appearance: none;\r\n      pointer-events: none;\r\n    }\r\n  }\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  &__close {\r\n    display: none;\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-left: 8px;\r\n  }\r\n}\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n  display: none;\r\n\r\n  @media (max-width: em(610)) {\r\n    display: block;\r\n    position: relative;\r\n    padding: 13px 7px;\r\n    width: rem(44);\r\n    height: rem(44);\r\n    transition: all 0.3s ease 0s;\r\n    @media (any-hover: none) {\r\n      cursor: default;\r\n    }\r\n    span,\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      transition: all 0.3s ease 0s;\r\n      right: 50%;\r\n      position: absolute;\r\n      width: percent(20, 44);\r\n      height: rem(3);\r\n      background-color: #161616;\r\n      transform: translate(50%, 0px);\r\n    }\r\n    &::before {\r\n      top: percent(12, 44);\r\n    }\r\n    &::after {\r\n      bottom: percent(12, 44);\r\n    }\r\n    span {\r\n      top: calc(50% - rem(1.5));\r\n    }\r\n    .menu-open & {\r\n      position: absolute;\r\n      right: 16px;\r\n      z-index: 3;\r\n      span {\r\n        width: 0;\r\n      }\r\n      &::before,\r\n      &::after {\r\n      }\r\n      &::before {\r\n        top: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(-45deg);\r\n      }\r\n      &::after {\r\n        bottom: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n  // .footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.form-footer {\r\n  @include adaptiveValue(\"padding-top\", 120, 60);\r\n  @include adaptiveValue(\"padding-bottom\", 120, 60);\r\n  // .form-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .form-footer__content\r\n\r\n  &__content {\r\n    border-radius: 20px;\r\n    background: var(--background-black, #202226);\r\n    @include adaptiveValue(\"padding-top\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-bottom\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-left\", 40, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-right\", 40, 12, 0, 1024, 320);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    @include adaptiveValue(\"gap\", 116, 16);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  // .form-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .form-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-form-footer {\r\n  flex: 0 1 451px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .left-form-footer__title\r\n\r\n  &__title {\r\n    color: var(--text-white, #fff);\r\n    @include adaptiveValue(\"font-size\", 40, 24);\r\n    font-weight: 400;\r\n    line-height: math.div(48, 40);\r\n    @include adaptiveValue(\"margin-bottom\", 20, 12);\r\n  }\r\n\r\n  // .left-form-footer__desc\r\n\r\n  &__desc {\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n\r\n.right-form-footer {\r\n  flex: 0 1 552px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .right-form-footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .right-form-footer__input\r\n\r\n  &__input {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 20, 8);\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    @include adaptiveValue(\"margin-top\", 44, 32);\r\n  }\r\n}\r\n\r\n.bottom-footer {\r\n  background: var(--background-gray, #f4f5f8);\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  @include adaptiveValue(\"padding-bottom\", 24, 16);\r\n  // .bottom-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-footer__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .bottom-footer__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .bottom-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n\r\n  // .bottom-footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.top-bottom-footer {\r\n  @include adaptiveValue(\"padding-bottom\", 28, 20);\r\n  border-bottom: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-bottom\", 40, 52);\r\n  // .top-bottom-footer__logo\r\n\r\n  &__logo {\r\n  }\r\n}\r\n.mid-bottom-footer {\r\n  display: flex;\r\n  @include adaptiveValue(\"gap\", 233, 16, 0, 1200, 944);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  //   display: grid;\r\n  //   grid-template: 1fr / minmax(288px, 389px) 1fr 288px 288px;\r\n  @media (max-width: em(1024)) {\r\n    //  grid-template: 1fr 1fr / minmax(288px, 389px) 16px 288px;\r\n    //  row-gap: 40px;\r\n  }\r\n  @media (max-width: $mobile) {\r\n    //  grid-template: 1fr 1fr / 1fr 1fr;\r\n    //  column-gap: 16px;\r\n    //  row-gap: 62px;\r\n  }\r\n  @media (max-width: $mobileSmall) {\r\n    //  display: flex;\r\n    //  flex-direction: column;\r\n    //  row-gap: 52px;\r\n  }\r\n\r\n  // .mid-bottom-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .mid-bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .mid-bottom-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-mid-footer {\r\n  flex: 0 1 389px;\r\n  //   grid-row: span 2;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 58);\r\n  }\r\n  // .left-mid-footer__text\r\n\r\n  &__text {\r\n    color: var(--text-black, #161616);\r\n    font-feature-settings: \"liga\" off;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"font-size\", 24, 18);\r\n    line-height: math.div(28, 24);\r\n    letter-spacing: 0.24px;\r\n  }\r\n\r\n  // .left-mid-footer__street\r\n\r\n  &__street {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__phone\r\n\r\n  &__phone {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 8, 16);\r\n  }\r\n\r\n  // .left-mid-footer__email\r\n\r\n  &__email {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__btns\r\n\r\n  &__btns {\r\n    display: flex;\r\n    gap: 8px;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 38);\r\n  }\r\n\r\n  // .left-mid-footer__btn\r\n\r\n  &__btn {\r\n  }\r\n\r\n  // .left-mid-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n}\r\n.socials-left-mid-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  // .socials-left-mid-footer__item\r\n\r\n  &__item {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    max-width: 44px;\r\n    max-height: 44px;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  // .socials-left-mid-footer__desc\r\n\r\n  &__desc {\r\n    margin-left: 16px;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n// .mid-mid-bottom-footer {\r\n//   grid-column: 3;\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 1;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .mid-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .mid-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-mid-bottom-footer {\r\n//   // .list-mid-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-mid-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n// .right-mid-bottom-footer {\r\n//   grid-column: 4;\r\n//   @media (max-width: em(1024)) {\r\n//     grid-column: 3;\r\n//     grid-row: 2;\r\n//   }\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 2;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .right-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .right-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-right-bottom-footer {\r\n//   // .list-right-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-right-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n.right-mid-bottom-footer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 16px;\r\n  row-gap: 40px;\r\n  @media (max-width: em(1024)) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  // .right-mid-bottom-footer__item\r\n\r\n  &__item {\r\n  }\r\n}\r\n.item-right-footer {\r\n  flex: 0 1 288px;\r\n  // .item-right-footer__title\r\n  color: var(--text-black, #161616);\r\n  &__title {\r\n    @include adaptiveValue(\"font-size\", 20, 16);\r\n    font-weight: 500;\r\n    line-height: math.div(24, 20);\r\n    letter-spacing: -0.6px;\r\n    @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n  }\r\n\r\n  // .item-right-footer__list\r\n\r\n  &__list {\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n.list-item-right-footer {\r\n  // .list-item-right-footer__item\r\n\r\n  &__item {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n    }\r\n  }\r\n\r\n  // .list-item-right-footer__link\r\n\r\n  &__link {\r\n  }\r\n}\r\n\r\n.bottom-bottom-footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  row-gap: 8px;\r\n  justify-content: space-between;\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  border-top: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-top\", 42, 52);\r\n  // .bottom-bottom-footer__copyright\r\n\r\n  color: var(--text-gray-light-bg, #757575);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  &__copyright {\r\n  }\r\n\r\n  // .bottom-bottom-footer__policy\r\n\r\n  &__policy {\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n",".advantages {\r\n  // .advantages__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .advantages__cards\r\n\r\n  &__cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n\r\n    margin: 0 rem(-8);\r\n  }\r\n}\r\n.card-advantages {\r\n  flex: 0 1 33.333%;\r\n  padding: 0 rem(8);\r\n  // .card-advantages__body\r\n\r\n  &__body {\r\n    display: flex;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  &__img {\r\n    min-height: 60px;\r\n    min-width: 60px;\r\n    max-width: 60px;\r\n    min-height: 60px;\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);\r\n  }\r\n  // .card-advantages__img-ibg\r\n\r\n  &__img-ibg {\r\n    width: 24px;\r\n    height: 24px;\r\n  }\r\n\r\n  // .card-advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .card-advantages__title\r\n\r\n  &__title {\r\n    color: var(--text-black, #161616);\r\n    @include adaptiveValue(\"font-size\", 20, 16);\r\n    font-weight: 400;\r\n    line-height: math.div(24, 20);\r\n    letter-spacing: -0.6px;\r\n  }\r\n\r\n  // .card-advantages__desc\r\n\r\n  &__desc {\r\n    color: var(--text-gray-light-bg, #757575);\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("bbfbbbeeb38eee5f7dda")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45MzMyMDJhYmUyZjYwNzNhMjNiNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUg7QUFDdkgsbUhBQW1ILGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQyxPQUFPLG9lQUFvZSxNQUFNLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxLQUFLLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsVUFBVSxPQUFPLFFBQVEsV0FBVyxPQUFPLE9BQU8sVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLFFBQVEsWUFBWSxZQUFZLE9BQU8sTUFBTSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sV0FBVyxPQUFPLFVBQVUsS0FBSyxLQUFLLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsV0FBVyxZQUFZLFlBQVksV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sTUFBTSxTQUFTLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLE9BQU8sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsT0FBTyxNQUFNLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE9BQU8sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLFlBQVksVUFBVSxNQUFNLE1BQU0sV0FBVyxVQUFVLE1BQU0sS0FBSyxNQUFNLFVBQVUsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLE1BQU0sTUFBTSxLQUFLLFdBQVcsV0FBVyxVQUFVLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFVBQVUsTUFBTSxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLE1BQU0sTUFBTSxLQUFLLFVBQVUsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxNQUFNLE1BQU0sV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxLQUFLLFVBQVUsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxVQUFVLE9BQU8sT0FBTyxVQUFVLFdBQVcsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFVBQVUsV0FBVyxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxRQUFRLE9BQU8sVUFBVSxXQUFXLFdBQVcsVUFBVSxPQUFPLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxXQUFXLFdBQVcsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsVUFBVSxXQUFXLFdBQVcsV0FBVyxXQUFX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QywrQkFBK0IsT0FBTyxzREFBc0Qsa0RBQWtELHNEQUFzRCx5QkFBeUIsc0NBQXNDLE9BQU8sS0FBSyx1QkFBdUI7QUFDeGtrRDtBQUNBLGlFQUFlLHVCQUF1QixFQUFDOzs7Ozs7Ozs7VUMzZ0R2QyIsInNvdXJjZXMiOlsid2VicGFjazovL2Zscy1zdGFydC8uL3NyYy9zY3NzL3N0eWxlLnNjc3MiLCJ3ZWJwYWNrOi8vZmxzLXN0YXJ0L3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Hb2xvcytUZXh0OndnaHRANDAwOzUwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYEBjaGFyc2V0IFwiVVRGLThcIjtcbkBmb250LWZhY2Uge1xuICBmb250LWZhbWlseTogaWNvbnM7XG4gIGZvbnQtZGlzcGxheTogc3dhcDtcbiAgc3JjOiB1cmwoXCIuLi9mb250cy9pY29ucy53b2ZmMlwiKSBmb3JtYXQoXCJ3b2ZmMlwiKSwgdXJsKFwiLi4vZm9udHMvaWNvbnMud29mZlwiKSBmb3JtYXQoXCJ3b2ZmXCIpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXN0eWxlOiBub3JtYWw7XG59XG5bY2xhc3MqPV9pY29uLV06YmVmb3JlIHtcbiAgZm9udC1mYW1pbHk6IFwiaWNvbnNcIjtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xuICBmb250LXdlaWdodDogbm9ybWFsO1xuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcbiAgdGV4dC10cmFuc2Zvcm06IG5vbmU7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuW2NsYXNzKj1faWNvbi1dOmJlZm9yZSB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuXG4uX2ljb24tc2V0dGluZ3M6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwMFwiO1xufVxuXG4uX2ljb24tY2FzZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTAxXCI7XG59XG5cbi5faWNvbi1kZWxpdmVyeTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTAyXCI7XG59XG5cbi5faWNvbi1yZW50OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDNcIjtcbn1cblxuLl9pY29uLXlvdXR1YmU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwNFwiO1xufVxuXG4uX2ljb24taW5zdGFncmFtOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDVcIjtcbn1cblxuLl9pY29uLWd1YXJhbnRlZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA2XCI7XG59XG5cbi5faWNvbi1zYWxlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDdcIjtcbn1cblxuLl9pY29uLWFycm93LWRvd246YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwOFwiO1xufVxuXG4uX2ljb24tYnVyZ2VyOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDlcIjtcbn1cblxuLl9pY29uLWZpbHRlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBhXCI7XG59XG5cbi5faWNvbi1jbG9zZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBiXCI7XG59XG5cbi5faWNvbi1hbGw6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwZFwiO1xufVxuXG4uX2ljb24tc2VhcmNoOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MGVcIjtcbn1cblxuLl9pY29uLWNhcnQ6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwZlwiO1xufVxuXG4uX2ljb24tc2VydmljZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTEyXCI7XG59XG5cbioge1xuICBwYWRkaW5nOiAwcHg7XG4gIG1hcmdpbjogMHB4O1xuICBib3JkZXI6IDBweDtcbn1cblxuKixcbio6YmVmb3JlLFxuKjphZnRlciB7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG59XG5cbmh0bWwsXG5ib2R5IHtcbiAgaGVpZ2h0OiAxMDAlO1xuICBtaW4td2lkdGg6IDMyMHB4O1xufVxuXG5ib2R5IHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGxpbmUtaGVpZ2h0OiAxO1xuICBmb250LWZhbWlseTogXCJHb2xvcyBUZXh0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgLW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC1tb3otdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcbiAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcbn1cblxuaW5wdXQsXG5idXR0b24sXG50ZXh0YXJlYSB7XG4gIGZvbnQtZmFtaWx5OiBcIkdvbG9zIFRleHRcIiwgc2Fucy1zZXJpZjtcbiAgZm9udC1zaXplOiBpbmhlcml0O1xufVxuXG5idXR0b24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGNvbG9yOiBpbmhlcml0O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbn1cblxuYSB7XG4gIGNvbG9yOiBpbmhlcml0O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbnVsIGxpIHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbn1cblxuaW1nIHtcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcbn1cblxuaDEsXG5oMixcbmgzLFxuaDQsXG5oNSxcbmg2IHtcbiAgZm9udC13ZWlnaHQ6IGluaGVyaXQ7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuLmxvY2sgYm9keSB7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHRvdWNoLWFjdGlvbjogbm9uZTtcbiAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcbn1cbi53cmFwcGVyIHtcbiAgbWluLWhlaWdodDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbn1cbkBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcbiAgLndyYXBwZXIge1xuICAgIG92ZXJmbG93OiBjbGlwO1xuICB9XG59XG4ud3JhcHBlciA+IG1haW4ge1xuICBmbGV4OiAxIDEgYXV0bztcbn1cbi53cmFwcGVyID4gKiB7XG4gIG1pbi13aWR0aDogMDtcbn1cblxuaWZyYW1lI3dlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheSB7XG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcbn1cblxuLypcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxu0LLRgdGW0YUg0LrQu9Cw0YHRltCyLCDRidC+INC80ZbRgdGC0Y/RgtGMICpfX2NvbnRhaW5lclxu0J3QsNC/0YDQuNC60LvQsNC0IGhlYWRlcl9fY29udGFpbmVyLCBtYWluX19jb250YWluZXIg0ZYg0YIu0L8uXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxuKi9cbltjbGFzcyo9X19jb250YWluZXJdIHtcbiAgbWF4LXdpZHRoOiA3Ni44NzVyZW07XG4gIG1hcmdpbjogMCBhdXRvO1xuICBwYWRkaW5nOiAwIDAuOTM3NXJlbTtcbn1cblxuLmJ1dHRvbiB7XG4gIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICBwYWRkaW5nOiAxMnB4IDIwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZC1jb2xvcjogIzIwMjIyNjtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUsICNmZmYpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbn1cbkBtZWRpYSAoYW55LWhvdmVyOiBob3Zlcikge1xuICAuYnV0dG9uOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMmIyZDMyO1xuICB9XG59XG4uYnV0dG9uLl9mdyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuLmJ1dHRvbl9ncmF5IHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmJ1dHRvbl9ncmF5OmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICB9XG59XG4uYnV0dG9uX3doaXRlIHtcbiAgY29sb3I6ICMxNjE2MTY7XG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmJ1dHRvbl93aGl0ZTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgfVxufVxuXG5pbnB1dFt0eXBlPXRleHRdLFxuaW5wdXRbdHlwZT1lbWFpbF0sXG5pbnB1dFt0eXBlPXRlbF0sXG50ZXh0YXJlYSB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgLW1vei1hcHBlYXJhbmNlOiBub25lO1xuICBhcHBlYXJhbmNlOiBub25lO1xufVxuXG4uaW5wdXQge1xuICBib3JkZXItcmFkaXVzOiAwICFpbXBvcnRhbnQ7XG4gIHdpZHRoOiAxMDAlO1xuICBkaXNwbGF5OiBibG9jaztcbiAgcGFkZGluZzogMTZweCAwcHg7XG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcbiAgb3V0bGluZTogbm9uZTtcbiAgY29sb3I6ICNmZmY7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuLmlucHV0W3R5cGU9c2VhcmNoXSB7XG4gIHBhZGRpbmc6IDBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgI2VlZTtcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xufVxuXG4uaW5wdXRbcGxhY2Vob2xkZXJdOm5vdChbZGF0YS1wbGFjZWhvbGRlci1ub2hpZGVuXSk6OnBsYWNlaG9sZGVyIHtcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWRhcmstYmcsICM5ZjlmOWYpO1xufVxuLmlucHV0W3BsYWNlaG9sZGVyXTpub3QoW2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlbl0pOmZvY3VzOjpwbGFjZWhvbGRlciB7XG4gIG9wYWNpdHk6IDA7XG59XG5cbnRleHRhcmVhLmlucHV0IHtcbiAgcmVzaXplOiBub25lO1xuICBwYWRkaW5nOiAwcHggMHB4O1xufVxuXG5bY2xhc3MqPS1pYmddIHtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xufVxuW2NsYXNzKj0taWJnXSBpbWcge1xuICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gIHdpZHRoOiAxMDAlO1xuICBoZWlnaHQ6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgb2JqZWN0LWZpdDogY292ZXI7XG59XG5cbltjbGFzcyo9LWliZ19jb250YWluXSBpbWcge1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uaGVhZGVyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB3aWR0aDogMTAwJTtcbiAgdG9wOiAwO1xuICBsZWZ0OiAwO1xuICB6LWluZGV4OiAxMDAwO1xufVxuLnRvcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xuICBwYWRkaW5nOiAxLjEyNXJlbSAwO1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLnRvcC1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4zMTI1cmVtICwgLTAuMTkyOTk0NTA1NXJlbSAgKyAgMi41Mjc0NzI1Mjc1dncgLCAxLjc1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4zMTI1cmVtICwgLTAuMTkyOTk0NTA1NXJlbSAgKyAgMi41Mjc0NzI1Mjc1dncgLCAxLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjMxMjVyZW0gLCAtMC4xOTI5OTQ1MDU1cmVtICArICAyLjUyNzQ3MjUyNzV2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC4zMTI1cmVtICsgMS40Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjMxMjVyZW07XG4gIH1cbn1cbi5tZW51LW9wZW4gLnRvcC1oZWFkZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xMDAlKTtcbn1cbi50b3AtaGVhZGVyX19yaWdodCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xuICBmb250LXNpemU6IDAuODc1cmVtO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4xNDI4NTcxNDI5O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDgwZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBnYXA6IDVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSBhbmQgKG1heC13aWR0aDogODBlbSkge1xuICBAc3VwcG9ydHMgKGdhcDogY2xhbXAoIDJyZW0gLCAtMTByZW0gICsgIDE4Ljc1dncgLCA1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgZ2FwOiBjbGFtcCggMnJlbSAsIC0xMHJlbSAgKyAgMTguNzV2dyAsIDVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMnJlbSAsIC0xMHJlbSAgKyAgMTguNzV2dyAsIDVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBnYXA6IGNhbGMoMnJlbSArIDMgKiAoMTAwdncgLSA2NHJlbSkgLyAxNik7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjRlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIGdhcDogMnJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogNDhlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1sZWZ0OiA1Ljg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgLTEuNTE3ODU3MTQyOXJlbSAgKyAgMTUuNDAxNzg1NzE0M3Z3ICwgNS44NzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIC0xLjUxNzg1NzE0MjlyZW0gICsgIDE1LjQwMTc4NTcxNDN2dyAsIDUuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1sZWZ0OiBjbGFtcCggMS41NjI1cmVtICwgLTEuNTE3ODU3MTQyOXJlbSAgKyAgMTUuNDAxNzg1NzE0M3Z3ICwgNS44NzVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tbGVmdDogY2FsYygxLjU2MjVyZW0gKyA0LjMxMjUgKiAoMTAwdncgLSAyMHJlbSkgLyAyOCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogMS41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IDQuMzEyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNDhlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjA4MDM1NzAzNTdyZW0gICsgIDE1LjQwMTc4NTQ5MTF2dyAsIDQuMzEyNXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuMDAwMDAwMDYyNXJlbSAsIC0zLjA4MDM1NzAzNTdyZW0gICsgIDE1LjQwMTc4NTQ5MTF2dyAsIDQuMzEyNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4wODAzNTcwMzU3cmVtICArICAxNS40MDE3ODU0OTExdncgLCA0LjMxMjVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC4wMDAwMDAwNjI1cmVtICsgNC4zMTI0OTk5Mzc1ICogKDEwMHZ3IC0gMjByZW0pIC8gMjgpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiAwLjAwMDAwMDA2MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogYXV0bztcbiAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICAgIHBhZGRpbmctbGVmdDogMC4zMTI1cmVtO1xuICB9XG59XG4udG9wLWhlYWRlcl9fbGlua3Mge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIHJvdy1nYXA6IDAuMzEyNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC50b3AtaGVhZGVyX19saW5rcyB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC50b3AtaGVhZGVyX19saW5rcyB7XG4gICAgZGlzcGxheTogbm9uZTtcbiAgfVxufVxuLnRvcC1oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uYm90dG9tLWhlYWRlciB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcbn1cbi5tZW51LW9wZW4gLmJvdHRvbS1oZWFkZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgwcHgsIC0xNzUlKTtcbn1cbi5ib3R0b20taGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLmJvdHRvbS1oZWFkZXJfX2xlZnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGdhcDogMC41cmVtO1xufVxuXG4uY29udGFjdHMtdG9wLWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgY29sdW1uLWdhcDogMnJlbTtcbiAgcm93LWdhcDogMC4zMTI1cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmNvbnRhY3RzLXRvcC1oZWFkZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5jb250YWN0cy10b3AtaGVhZGVyX19saW5rIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5jb250YWN0cy10b3AtaGVhZGVyX19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMxNjE2MTY7XG59XG5cbi5yaWdodC10b3AtaGVhZGVyX19saW5rIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbn1cbi5yaWdodC10b3AtaGVhZGVyX19saW5rOmhvdmVyIHtcbiAgY29sb3I6ICMxNjE2MTY7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIC5ib2R5LWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG4uYm9keS1oZWFkZXJfX2NvbnRlbnQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLnRvcC1tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLnRvcC1tZW51X19sb2dvIHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAudG9wLW1lbnVfX2xvZ28ge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNzVyZW07XG4gICAgZGlzcGxheTogYmxvY2s7XG4gIH1cbn1cblxuLm1lbnUge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9fYm9keSB7XG4gICAgcGFkZGluZzogMS41cmVtIDFyZW07XG4gICAgcG9zaXRpb246IGZpeGVkO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogLTEwMCU7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2Y0ZjVmODtcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xuICAgIHotaW5kZXg6IDE7XG4gIH1cbiAgLm1lbnUtb3BlbiAubWVudV9fYm9keSB7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xuICAgIGxlZnQ6IDA7XG4gIH1cbn1cbi5tZW51X19saXN0IHtcbiAgZGlzcGxheTogZmxleDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG4gIGZsZXgtd3JhcDogd3JhcDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9fbGlzdCB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcbiAgICBvdmVyZmxvdzogYXV0bztcbiAgICBtYXgtaGVpZ2h0OiA2MCU7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9faXRlbSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHBhZGRpbmctYm90dG9tOiAxNnB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG4gIC5tZW51X19pdGVtOjpiZWZvcmUge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMXB4O1xuICAgIGJvdHRvbTogMDtcbiAgICBsZWZ0OiAwO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAubWVudV9fbGluayB7XG4gICAgcGFkZGluZzogMDtcbiAgfVxufVxuXG4ucmlnaHQtYm9keS1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDAuNXJlbTtcbn1cbi5yaWdodC1ib2R5LWhlYWRlcl9fbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5yaWdodC1ib2R5LWhlYWRlcl9fYnRuIHtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDE1cHgpO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICBib3R0b206IDI0cHg7XG4gICAgbGVmdDogNTAlO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsIDBweCk7XG4gIH1cbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyX19pbnB1dCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogMDtcbiAgcGFkZGluZzogMDtcbiAgYm9yZGVyOiBub25lICFpbXBvcnRhbnQ7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgb3V0bGluZTogbm9uZTtcbn1cbi5mb3JtLXJpZ2h0LWJvZHktaGVhZGVyX19pbnB1dDo6LXdlYmtpdC1zZWFyY2gtY2FuY2VsLWJ1dHRvbiB7XG4gIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcbiAgcG9pbnRlci1ldmVudHM6IG5vbmU7XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlcl9fbGluayB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlcl9fY2xvc2Uge1xuICBkaXNwbGF5OiBub25lO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB3aWR0aDogNDRweDtcbiAgaGVpZ2h0OiA0NHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIHotaW5kZXg6IDE7XG4gIG1hcmdpbi1sZWZ0OiA4cHg7XG59XG5cbi5pY29uLW1lbnUge1xuICBkaXNwbGF5OiBub25lO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSB7XG4gIC5pY29uLW1lbnUge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nOiAxM3B4IDdweDtcbiAgICB3aWR0aDogMi43NXJlbTtcbiAgICBoZWlnaHQ6IDIuNzVyZW07XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDM4LjEyNWVtKSBhbmQgKGFueS1ob3Zlcjogbm9uZSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBjdXJzb3I6IGRlZmF1bHQ7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAuaWNvbi1tZW51IHNwYW4sIC5pY29uLW1lbnU6OmJlZm9yZSwgLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICByaWdodDogNTAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNDUuNDU0NTQ1NDU0NSU7XG4gICAgaGVpZ2h0OiAwLjE4NzVyZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE2MTYxNjtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDBweCk7XG4gIH1cbiAgLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IDI3LjI3MjcyNzI3MjclO1xuICB9XG4gIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IDI3LjI3MjcyNzI3MjclO1xuICB9XG4gIC5pY29uLW1lbnUgc3BhbiB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDkzNzVyZW0pO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHJpZ2h0OiAxNnB4O1xuICAgIHotaW5kZXg6IDM7XG4gIH1cbiAgLm1lbnUtb3BlbiAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHdpZHRoOiAwO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YmVmb3JlIHtcbiAgICB0b3A6IGNhbGMoNTAlIC0gMC4wOTM3NXJlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSgtNDVkZWcpO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudTo6YWZ0ZXIge1xuICAgIGJvdHRvbTogY2FsYyg1MCUgLSAwLjA5Mzc1cmVtKTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSg1MCUsIDUwJSkgcm90YXRlKDQ1ZGVnKTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDMuNzVyZW0gKyAzLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiA3LjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMy43NXJlbSArIDMuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMy43NXJlbTtcbiAgfVxufVxuLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ibGFjaywgIzIwMjIyNik7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygwLjc1cmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDQ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy10b3A6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIC0wLjYxMzYzNjM2MzZyZW0gICsgIDYuODE4MTgxODE4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygwLjc1cmVtICsgMyAqICgxMDB2dyAtIDIwcmVtKSAvIDQ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1sZWZ0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctbGVmdDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIHBhZGRpbmctbGVmdDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNhbGMoMC43NXJlbSArIDEuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA0NCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDY0ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNjRlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctcmlnaHQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXJpZ2h0OiBjYWxjKDAuNzVyZW0gKyAxLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNDQpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLXJpZ2h0OiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBnYXA6IDcuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxcmVtICwgLTEuMTk3ODAyMTk3OHJlbSAgKyAgMTAuOTg5MDEwOTg5dncgLCA3LjI1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgZ2FwOiBjbGFtcCggMXJlbSAsIC0xLjE5NzgwMjE5NzhyZW0gICsgIDEwLjk4OTAxMDk4OXZ3ICwgNy4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChnYXA6IGNsYW1wKCAxcmVtICwgLTEuMTk3ODAyMTk3OHJlbSAgKyAgMTAuOTg5MDEwOTg5dncgLCA3LjI1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgZ2FwOiBjYWxjKDFyZW0gKyA2LjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5sZWZ0LWZvcm0tZm9vdGVyIHtcbiAgZmxleDogMCAxIDQ1MXB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG4ubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSwgI2ZmZik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMTQ4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAyLjVyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjE0ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMi41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuNXJlbSAsIDEuMTQ4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAyLjVyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS41cmVtICsgMSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAwLjU3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMC41NzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAwLjU3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMC43NXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbi5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1kYXJrLWJnLCAjOWY5ZjlmKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cblxuLnJpZ2h0LWZvcm0tZm9vdGVyIHtcbiAgZmxleDogMCAxIDU1MnB4O1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAwLjIzNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMS4yNXJlbSApKSB7XG4gICAgLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAwLjIzNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMC4yMzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNXJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyX19pbnB1dDpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXJfX2J0biB7XG4gICAgbWFyZ2luLXRvcDogMi43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAycmVtICwgMS43MzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDIuNzVyZW0gKSkge1xuICAgIC5yaWdodC1mb3JtLWZvb3Rlcl9fYnRuIHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAycmVtICwgMS43MzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDIuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXRvcDogY2xhbXAoIDJyZW0gLCAxLjczNjI2MzczNjNyZW0gICsgIDEuMzE4NjgxMzE4N3Z3ICwgMi43NXJlbSApKSB7XG4gICAgLnJpZ2h0LWZvcm0tZm9vdGVyX19idG4ge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygycmVtICsgMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXJfX2J0biB7XG4gICAgbWFyZ2luLXRvcDogMnJlbTtcbiAgfVxufVxuXG4uYm90dG9tLWZvb3RlciB7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDFyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKSkge1xuICAgIC5ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDFyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xuICB9XG59XG4udG9wLWJvdHRvbS1mb290ZXIge1xuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2U5ZTllOTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctYm90dG9tOiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMS4wNzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjA3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDEuMjVyZW0gLCAxLjA3NDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDMuNTEzNzM2MjYzN3JlbSAgKyAgLTEuMzE4NjgxMzE4N3Z3ICwgMy4yNXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAzLjUxMzczNjI2MzdyZW0gICsgIC0xLjMxODY4MTMxODd2dyAsIDMuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuNXJlbSAsIDMuNTEzNzM2MjYzN3JlbSAgKyAgLTEuMzE4NjgxMzE4N3Z3ICwgMy4yNXJlbSApKSB7XG4gICAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy4yNXJlbSArIC0wLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy4yNXJlbTtcbiAgfVxufVxuLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3NWVtKSB7XG4gIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZ2FwOiAxNC41NjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNTllbSkgYW5kIChtYXgtd2lkdGg6IDc1ZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAxcmVtICwgLTQ5LjAxMTcxODc1cmVtICArICA4NC43NjU2MjV2dyAsIDE0LjU2MjVyZW0gKSkge1xuICAgIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgICBnYXA6IGNsYW1wKCAxcmVtICwgLTQ5LjAxMTcxODc1cmVtICArICA4NC43NjU2MjV2dyAsIDE0LjU2MjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMXJlbSAsIC00OS4wMTE3MTg3NXJlbSAgKyAgODQuNzY1NjI1dncgLCAxNC41NjI1cmVtICkpIHtcbiAgICAubWlkLWJvdHRvbS1mb290ZXIge1xuICAgICAgZ2FwOiBjYWxjKDFyZW0gKyAxMy41NjI1ICogKDEwMHZ3IC0gNTlyZW0pIC8gMTYpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDU5ZW0pIHtcbiAgLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICBnYXA6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3RlciB7XG4gIGZsZXg6IDAgMSAzODlweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgIGZsZXg6IDEgMSBhdXRvO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMuODc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjYyNXJlbSAsIDMuNTM3MDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAzLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3RlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMy42MjVyZW0gLCAzLjUzNzA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMy44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNjI1cmVtICwgMy41MzcwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDMuODc1cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMy42MjVyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjYyNXJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcbiAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcImxpZ2FcIiBvZmY7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjE2NjY2NjY2Njc7XG4gIGxldHRlci1zcGFjaW5nOiAwLjI0cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTkzMTMxODY4MXJlbSAgKyAgMC42NTkzNDA2NTkzdncgLCAxLjVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk5MzEzMTg2ODFyZW0gICsgIDAuNjU5MzQwNjU5M3Z3ICwgMS41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45OTMxMzE4NjgxcmVtICArICAwLjY1OTM0MDY1OTN2dyAsIDEuNXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMS4xMjVyZW0gKyAwLjM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX190ZXh0IHtcbiAgICBmb250LXNpemU6IDEuMTI1cmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDJyZW0gKyAtMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMnJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDEuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDEuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMS4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxcmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDFyZW0gKyAtMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3Bob25lIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxcmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAyLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMnJlbSArIC0wLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWwge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXJfX2J0bnMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBnYXA6IDhweDtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjM3NXJlbSAsIDEuODQ3NTI3NDcyNXJlbSAgKyAgMi42MzczNjI2Mzc0dncgLCAzLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4zNzVyZW0gLCAxLjg0NzUyNzQ3MjVyZW0gICsgIDIuNjM3MzYyNjM3NHZ3ICwgMy44NzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMzc1cmVtICwgMS44NDc1Mjc0NzI1cmVtICArICAyLjYzNzM2MjYzNzR2dyAsIDMuODc1cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMi4zNzVyZW0gKyAxLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMi4zNzVyZW07XG4gIH1cbn1cbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogOHB4O1xufVxuLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyX19pdGVtIHtcbiAgbWluLXdpZHRoOiA0NHB4O1xuICBtaW4taGVpZ2h0OiA0NHB4O1xuICBtYXgtd2lkdGg6IDQ0cHg7XG4gIG1heC1oZWlnaHQ6IDQ0cHg7XG4gIHBhZGRpbmc6IDEwcHg7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW9yLWRldmlkZXItbGlnaHQtYmcsICNlOWU5ZTkpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3Rlcl9fZGVzYyB7XG4gIG1hcmdpbi1sZWZ0OiAxNnB4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5cbi5yaWdodC1taWQtYm90dG9tLWZvb3RlciB7XG4gIGRpc3BsYXk6IGdyaWQ7XG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcbiAgY29sdW1uLWdhcDogMTZweDtcbiAgcm93LWdhcDogNDBweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA2NGVtKSB7XG4gIC5yaWdodC1taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnI7XG4gIH1cbn1cbi5pdGVtLXJpZ2h0LWZvb3RlciB7XG4gIGZsZXg6IDAgMSAyODhweDtcbiAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xufVxuLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTEyMDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAxLjI1cmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MTIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMS4zMjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDEuMzI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAycmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAxLjMyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuNXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbi5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX2xpc3Qge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjg3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufVxuXG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMS40MjU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICkpIHtcbiAgICAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMS40MjU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMS40MjU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICkpIHtcbiAgICAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbTpub3QoOmxhc3QtY2hpbGQpIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNhbGMoMS4yNXJlbSArIC0wLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICByb3ctZ2FwOiA4cHg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYm9yZGVyLXRvcDogMXB4IHNvbGlkICNlOWU5ZTk7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMXJlbSArIDAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAyLjYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi10b3A6IGNsYW1wKCAyLjYyNXJlbSAsIDMuNDY5NzgwMjE5OHJlbSAgKyAgLTEuMDk4OTAxMDk4OXZ3ICwgMy4yNXJlbSApKSB7XG4gICAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICAgIG1hcmdpbi10b3A6IGNsYW1wKCAyLjYyNXJlbSAsIDMuNDY5NzgwMjE5OHJlbSAgKyAgLTEuMDk4OTAxMDk4OXZ3ICwgMy4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tdG9wOiBjbGFtcCggMi42MjVyZW0gLCAzLjQ2OTc4MDIxOThyZW0gICsgIC0xLjA5ODkwMTA5ODl2dyAsIDMuMjVyZW0gKSkge1xuICAgIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgICBtYXJnaW4tdG9wOiBjYWxjKDMuMjVyZW0gKyAtMC42MjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICBtYXJnaW4tdG9wOiAzLjI1cmVtO1xuICB9XG59XG4uYWR2YW50YWdlc19fY2FyZHMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIG1hcmdpbjogMCAtMC41cmVtO1xufVxuXG4uY2FyZC1hZHZhbnRhZ2VzIHtcbiAgZmxleDogMCAxIDMzLjMzMyU7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuLmNhcmQtYWR2YW50YWdlc19fYm9keSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xufVxuLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgbWluLWhlaWdodDogNjBweDtcbiAgbWluLXdpZHRoOiA2MHB4O1xuICBtYXgtd2lkdGg6IDYwcHg7XG4gIG1pbi1oZWlnaHQ6IDYwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1vci1kZXZpZGVyLWxpZ2h0LWJnLCAjZTllOWU5KTtcbn1cbi5jYXJkLWFkdmFudGFnZXNfX2ltZy1pYmcge1xuICB3aWR0aDogMjRweDtcbiAgaGVpZ2h0OiAyNHB4O1xufVxuLmNhcmQtYWR2YW50YWdlc19fdGl0bGUge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI7XG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlc19fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmNhcmQtYWR2YW50YWdlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTEyMDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmNhcmQtYWR2YW50YWdlc19fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDFyZW0gKyAwLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbi5jYXJkLWFkdmFudGFnZXNfX2Rlc2Mge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlc19fZGVzYyB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAuY2FyZC1hZHZhbnRhZ2VzX19kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKSkge1xuICAgIC5jYXJkLWFkdmFudGFnZXNfX2Rlc2Mge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDAuODc1cmVtICsgMC4xMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlc19fZGVzYyB7XG4gICAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgfVxufWAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3Njc3Mvc3R5bGUuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMvZm9udHMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9udHMvaWNvbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9udWxsLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvYnV0dG9uLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvZm9ybXMvaW5wdXQuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9oZWFkZXIuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvYmFzZS9taXhpbnMuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvZm9vdGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2FkdmFudGFnZXMuc2Nzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDQyxrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsMkZBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0FESUQ7QUVUQTtFQUNFLG9CQUFBO0VBQ0Esa0JBQUE7RUFDQSxtQkFBQTtFQUNBLG9CQUFBO0VBQ0Esb0JBQUE7RUFDQSxjQUFBO0VBQ0EsbUNBQUE7RUFDQSxrQ0FBQTtBRldGOztBRVJFO0VBRUUsY0FBQTtBRlVKOztBRU5BO0VBQ0UsZ0JBQUE7QUZTRjs7QUVQQTtFQUNFLGdCQUFBO0FGVUY7O0FFUkE7RUFDRSxnQkFBQTtBRldGOztBRVRBO0VBQ0UsZ0JBQUE7QUZZRjs7QUVWQTtFQUNFLGdCQUFBO0FGYUY7O0FFWEE7RUFDRSxnQkFBQTtBRmNGOztBRVpBO0VBQ0UsZ0JBQUE7QUZlRjs7QUViQTtFQUNFLGdCQUFBO0FGZ0JGOztBRWRBO0VBQ0UsZ0JBQUE7QUZpQkY7O0FFZkE7RUFDRSxnQkFBQTtBRmtCRjs7QUVoQkE7RUFD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UDJSSjtFT3pSRTtJQUNFLGtCQUFBO0lBQ0EsV0FBQTtJQUNBLFVBQUE7RVAyUko7RU8xUkk7SUFDRSxRQUFBO0VQNFJOO0VPdlJJO0lBQ0UsMkJBQUE7SUFDQSw2Q0FBQTtFUHlSTjtFT3ZSSTtJQUNFLDhCQUFBO0lBQ0EsNENBQUE7RVB5Uk47QUFDRjs7QVF4bEJFO0VDbEVGO0lEbUVHLG1CQUFBO0VSNGxCRDtBQUNGO0FRemxCQztFQUVDO0lDekVGO01EMEVHLDJFQWhCYztJUjJtQmI7RUFDRjtFUXpsQkE7SUM3RUY7TUQ4RUcsNERBQUE7SVI0bEJDO0VBQ0Y7QUFDRjtBUTFsQkU7RUNsRkY7SURtRkcsb0JBQUE7RVI2bEJEO0FBQ0Y7QVEvbUJFO0VDbEVGO0lEbUVHLHNCQUFBO0VSa25CRDtBQUNGO0FRL21CQztFQUVDO0lDekVGO01EMEVHLDhFQWhCYztJUmlvQmI7RUFDRjtFUS9tQkE7SUM3RUY7TUQ4RUcsK0RBQUE7SVJrbkJDO0VBQ0Y7QUFDRjtBUWhuQkU7RUNsRkY7SURtRkcsdUJBQUE7RVJtbkJEO0FBQ0Y7QVM3ckJFO0VBQ0UsbUJBQUE7RUFDQSw0Q0FBQTtFQUtBLGFBQUE7RUFDQSw4QkFBQTtBVDJyQko7QVEzb0JFO0VDeERBO0lEeURDLG9CQUFBO0VSOG9CRDtBQUNGO0FRM29CQztFQUVDO0lDL0RBO01EZ0VDLDZFQWhCYztJUjZwQmI7RUFDRjtFUTNvQkE7SUNuRUE7TURvRUMscURBQUE7SVI4b0JDO0VBQ0Y7QUFDRjtBUTVvQkU7RUN4RUE7SUR5RUMsb0JBQUE7RVIrb0JEO0FBQ0Y7QVFqcUJFO0VDeERBO0lEeURDLHVCQUFBO0VSb3FCRDtBQUNGO0FRanFCQztFQUVDO0lDL0RBO01EZ0VDLGdGQWhCYztJUm1yQmI7RUFDRjtFUWpxQkE7SUNuRUE7TURvRUMsd0RBQUE7SVJvcUJDO0VBQ0Y7QUFDRjtBUWxxQkU7RUN4RUE7SUR5RUMsdUJBQUE7RVJxcUJEO0FBQ0Y7QVF2ckJFO0VDeERBO0lEeURDLG9CQUFBO0VSMHJCRDtBQUNGO0FRdnJCQztFQUVDO0lDL0RBO01EZ0VDLDZFQWhCYztJUnlzQmI7RUFDRjtFUXZyQkE7SUNuRUE7TURvRUMseURBQUE7SVIwckJDO0VBQ0Y7QUFDRjtBUXhyQkU7RUN4RUE7SUR5RUMscUJBQUE7RVIyckJEO0FBQ0Y7QVE3c0JFO0VDeERBO0lEeURDLHFCQUFBO0VSZ3RCRDtBQUNGO0FRN3NCQztFQUVDO0lDL0RBO01EZ0VDLDhFQWhCYztJUit0QmI7RUFDRjtFUTdzQkE7SUNuRUE7TURvRUMsMERBQUE7SVJndEJDO0VBQ0Y7QUFDRjtBUTlzQkU7RUN4RUE7SUR5RUMsc0JBQUE7RVJpdEJEO0FBQ0Y7QVFudUJFO0VDeERBO0lEeURDLFlBQUE7RVJzdUJEO0FBQ0Y7QVFudUJDO0VBRUM7SUMvREE7TURnRUMsa0VBaEJjO0lScXZCYjtFQUNGO0VRbnVCQTtJQ25FQTtNRG9FQyxpREFBQTtJUnN1QkM7RUFDRjtBQUNGO0FRcHVCRTtFQ3hFQTtJRHlFQyxTQUFBO0VSdXVCRDtBQUNGO0FTdnlCSTtFQVZGO0lBV0ksc0JBQUE7RVQweUJKO0FBQ0Y7QVM3eEJBO0VBQ0UsZUFBQTtBVCt4QkY7QVM5eEJFO0VBRkY7SUFHSSxjQUFBO0VUaXlCRjtBQUNGO0FTOXhCRTtFQUNFLDhCQUFBO0VBRUEsZ0JBQUE7RUFDQSxnQkFBQTtBVCt4Qko7QVEzd0JFO0VDeEJBO0lEeUJDLGlCQUFBO0VSOHdCRDtBQUNGO0FRM3dCQztFQUVDO0lDL0JBO01EZ0NDLHdFQWhCYztJUjZ4QmI7RUFDRjtFUTN3QkE7SUNuQ0E7TURvQ0Msc0RBQUE7SVI4d0JDO0VBQ0Y7QUFDRjtBUTV3QkU7RUN4Q0E7SUR5Q0MsaUJBQUE7RVIrd0JEO0FBQ0Y7QVFqeUJFO0VDeEJBO0lEeUJDLHNCQUFBO0VSb3lCRDtBQUNGO0FRanlCQztFQUVDO0lDL0JBO01EZ0NDLDhFQWhCYztJUm16QmI7RUFDRjtFUWp5QkE7SUNuQ0E7TURvQ0MsNkRBQUE7SVJveUJDO0VBQ0Y7QUFDRjtBUWx5QkU7RUN4Q0E7SUR5Q0Msc0JBQUE7RVJxeUJEO0FBQ0Y7QVNyMEJFO0VBQ0Usd0NBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FUczBCSjtBUTV6QkU7RUNkQTtJRGVDLGVBQUE7RVIrekJEO0FBQ0Y7QVE1ekJDO0VBRUM7SUNyQkE7TURzQkMsdUVBaEJjO0lSODBCYjtFQUNGO0VRNXpCQTtJQ3pCQTtNRDBCQyw0REFBQTtJUit6QkM7RUFDRjtBQUNGO0FRN3pCRTtFQzlCQTtJRCtCQyxtQkFBQTtFUmcwQkQ7QUFDRjs7QVN4MUJBO0VBQ0UsZUFBQTtBVDIxQkY7QVMxMUJFO0VBRkY7SUFHSSxjQUFBO0VUNjFCRjtBQUNGO0FRMzFCRTtFQ09FO0lETkQsc0JBQUE7RVI4MUJEO0FBQ0Y7QVEzMUJDO0VBRUM7SUNBRTtNRENELDZFQWhCYztJUjYyQmI7RUFDRjtFUTMxQkE7SUNKRTtNREtELDZEQUFBO0lSODFCQztFQUNGO0FBQ0Y7QVE1MUJFO0VDVEU7SURVRCxxQkFBQTtFUisxQkQ7QUFDRjtBUWozQkU7RUNZQTtJRFhDLG1CQUFBO0VSbzNCRDtBQUNGO0FRajNCQztFQUVDO0lDS0E7TURKQyx3RUFoQmM7SVJtNEJiO0VBQ0Y7RVFqM0JBO0lDQ0E7TURBQyx3REFBQTtJUm8zQkM7RUFDRjtBQUNGO0FRbDNCRTtFQ0pBO0lES0MsZ0JBQUE7RVJxM0JEO0FBQ0Y7O0FTdDNCQTtFQUNFLDJDQUFBO0FUeTNCRjtBUTM0QkU7RUNpQkY7SURoQkcsbUJBQUE7RVI4NEJEO0FBQ0Y7QVEzNEJDO0VBRUM7SUNVRjtNRFRHLHdFQWhCYztJUjY1QmI7RUFDRjtFUTM0QkE7SUNNRjtNRExHLHdEQUFBO0lSODRCQztFQUNGO0FBQ0Y7QVE1NEJFO0VDQ0Y7SURBRyxpQkFBQTtFUis0QkQ7QUFDRjtBUWo2QkU7RUNpQkY7SURoQkcsc0JBQUE7RVJvNkJEO0FBQ0Y7QVFqNkJDO0VBRUM7SUNVRjtNRFRHLDJFQWhCYztJUm03QmI7RUFDRjtFUWo2QkE7SUNNRjtNRExHLDJEQUFBO0lSbzZCQztFQUNGO0FBQ0Y7QVFsNkJFO0VDQ0Y7SURBRyxvQkFBQTtFUnE2QkQ7QUFDRjtBU3A0QkE7RUFFRSxnQ0FBQTtBVHE0QkY7QVExN0JFO0VDbURGO0lEbERHLHVCQUFBO0VSNjdCRDtBQUNGO0FRMTdCQztFQUVDO0lDNENGO01EM0NHLCtFQWhCYztJUjQ4QmI7RUFDRjtFUTE3QkE7SUN3Q0Y7TUR2Q0csOERBQUE7SVI2N0JDO0VBQ0Y7QUFDRjtBUTM3QkU7RUNtQ0Y7SURsQ0csdUJBQUE7RVI4N0JEO0FBQ0Y7QVFoOUJFO0VDbURGO0lEbERHLHFCQUFBO0VSbTlCRDtBQUNGO0FRaDlCQztFQUVDO0lDNENGO01EM0NHLDhFQWJlO0lSKzlCZDtFQUNGO0VRaDlCQTtJQ3dDRjtNRHZDRywrREFBQTtJUm05QkM7RUFDRjtBQUNGO0FRajlCRTtFQ21DRjtJRGxDRyxzQkFBQTtFUm85QkQ7QUFDRjtBUzE2QkE7RUFDRSxhQUFBO0FUNDZCRjtBUXorQkU7RUM0REY7SUQzREcsZUFBQTtFUjQrQkQ7QUFDRjtBUXorQkM7RUFFQztJQ3FERjtNRHBERyxpRUFoQmM7SVIyL0JiO0VBQ0Y7RVF6K0JBO0lDaURGO01EaERHLGdEQUFBO0lSNCtCQztFQUNGO0FBQ0Y7QVExK0JFO0VDNENGO0lEM0NHLFNBQUE7RVI2K0JEO0FBQ0Y7QVNoOEJFO0VBSEY7SUFJSSxzQkFBQTtFVG04QkY7QUFDRjtBU2o2QkE7RUFDRSxlQUFBO0FUbTZCRjtBU2o2QkU7RUFIRjtJQUlJLGNBQUE7RVRvNkJGO0FBQ0Y7QVE1Z0NFO0VDbUdGO0lEbEdHLHVCQUFBO0VSK2dDRDtBQUNGO0FRNWdDQztFQUVDO0lDNEZGO01EM0ZHLGdGQWhCYztJUjhoQ2I7RUFDRjtFUTVnQ0E7SUN3RkY7TUR2RkcsK0RBQUE7SVIrZ0NDO0VBQ0Y7QUFDRjtBUTdnQ0U7RUNtRkY7SURsRkcsdUJBQUE7RVJnaENEO0FBQ0Y7QVN0N0JFO0VBQ0UsaUNBQUE7RUFDQSxpQ0FBQTtFQUNBLGdCQUFBO0VBRUEseUJBQUE7RUFDQSxzQkFBQTtBVHU3Qko7QVF6aUNFO0VDNEdBO0lEM0dDLGlCQUFBO0VSNGlDRDtBQUNGO0FRemlDQztFQUVDO0lDcUdBO01EcEdDLDBFQWhCYztJUjJqQ2I7RUFDRjtFUXppQ0E7SUNpR0E7TURoR0MsNERBQUE7SVI0aUNDO0VBQ0Y7QUFDRjtBUTFpQ0U7RUM0RkE7SUQzRkMsbUJBQUE7RVI2aUNEO0FBQ0Y7QVN4OEJFO0VBQ0UsY0FBQTtBVDA4Qko7QVFsa0NFO0VDdUhBO0lEdEhDLHFCQUFBO0VScWtDRDtBQUNGO0FRbGtDQztFQUVDO0lDZ0hBO01EL0dDLDJFQWJlO0lSaWxDZDtFQUNGO0VRbGtDQTtJQzRHQTtNRDNHQywyREFBQTtJUnFrQ0M7RUFDRjtBQUNGO0FRbmtDRTtFQ3VHQTtJRHRHQyxtQkFBQTtFUnNrQ0Q7QUFDRjtBUzE5QkU7RUFDRSxjQUFBO0FUNDlCSjtBUTNsQ0U7RUM4SEE7SUQ3SEMscUJBQUE7RVI4bENEO0FBQ0Y7QVEzbENDO0VBRUM7SUN1SEE7TUR0SEMsMkVBYmU7SVIwbUNkO0VBQ0Y7RVEzbENBO0lDbUhBO01EbEhDLDJEQUFBO0lSOGxDQztFQUNGO0FBQ0Y7QVE1bENFO0VDOEdBO0lEN0dDLG1CQUFBO0VSK2xDRDtBQUNGO0FTNStCRTtFQUNFLGNBQUE7QVQ4K0JKO0FRcG5DRTtFQ3FJQTtJRHBJQyxxQkFBQTtFUnVuQ0Q7QUFDRjtBUXBuQ0M7RUFFQztJQzhIQTtNRDdIQywyRUFiZTtJUm1vQ2Q7RUFDRjtFUXBuQ0E7SUMwSEE7TUR6SEMsMkRBQUE7SVJ1bkNDO0VBQ0Y7QUFDRjtBUXJuQ0U7RUNxSEE7SURwSEMsbUJBQUE7RVJ3bkNEO0FBQ0Y7QVM5L0JFO0VBQ0UsYUFBQTtFQUNBLFFBQUE7QVRnZ0NKO0FROW9DRTtFQzRJQTtJRDNJQyx1QkFBQTtFUmlwQ0Q7QUFDRjtBUTlvQ0M7RUFFQztJQ3FJQTtNRHBJQyxnRkFoQmM7SVJncUNiO0VBQ0Y7RVE5b0NBO0lDaUlBO01EaElDLDhEQUFBO0lSaXBDQztFQUNGO0FBQ0Y7QVEvb0NFO0VDNEhBO0lEM0hDLHVCQUFBO0VSa3BDRDtBQUNGO0FTeGdDQTtFQUNFLGFBQUE7RUFDQSxtQkFBQTtFQUNBLFFBQUE7QVQwZ0NGO0FTdmdDRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7QVR5Z0NKO0FTcGdDRTtFQUNFLGlCQUFBO0VBQ0EseUNBQUE7RUFDQSxpQkFBQTtBVHNnQ0o7O0FTcjdCQTtFQUNFLGFBQUE7RUFDQSw4QkFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtBVHc3QkY7QVN2N0JFO0VBTEY7SUFNSSwwQkFBQTtFVDA3QkY7QUFDRjtBU3A3QkE7RUFDRSxlQUFBO0VBRUEsaUNBQUE7QVRxN0JGO0FTcDdCRTtFQUVFLGdCQUFBO0VBQ0EsZ0JBQUE7RUFDQSxzQkFBQTtBVHE3Qko7QVEvc0NFO0VDc1JBO0lEclJDLGtCQUFBO0VSa3RDRDtBQUNGO0FRL3NDQztFQUVDO0lDK1FBO01EOVFDLHVFQWhCYztJUml1Q2I7RUFDRjtFUS9zQ0E7SUMyUUE7TUQxUUMsdURBQUE7SVJrdENDO0VBQ0Y7QUFDRjtBUWh0Q0U7RUNzUUE7SURyUUMsZUFBQTtFUm10Q0Q7QUFDRjtBUXJ1Q0U7RUNzUkE7SURyUkMsbUJBQUE7RVJ3dUNEO0FBQ0Y7QVFydUNDO0VBRUM7SUMrUUE7TUQ5UUMsMEVBaEJjO0lSdXZDYjtFQUNGO0VRcnVDQTtJQzJRQTtNRDFRQyw0REFBQTtJUnd1Q0M7RUFDRjtBQUNGO0FRdHVDRTtFQ3NRQTtJRHJRQyxxQkFBQTtFUnl1Q0Q7QUFDRjtBUzM5QkU7RUFFRSxnQkFBQTtFQUNBLGlCQUFBO0FUNDlCSjtBUS92Q0U7RUNnU0E7SUQvUkMsZUFBQTtFUmt3Q0Q7QUFDRjtBUS92Q0M7RUFFQztJQ3lSQTtNRHhSQyx1RUFoQmM7SVJpeENiO0VBQ0Y7RVEvdkNBO0lDcVJBO01EcFJDLDREQUFBO0lSa3dDQztFQUNGO0FBQ0Y7QVFod0NFO0VDZ1JBO0lEL1FDLG1CQUFBO0VSbXdDRDtBQUNGOztBUXJ4Q0U7RUMwU0U7SUR6U0Qsc0JBQUE7RVJ5eENEO0FBQ0Y7QVF0eENDO0VBRUM7SUNtU0U7TURsU0QsK0VBYmU7SVJxeUNkO0VBQ0Y7RVF0eENBO0lDK1JFO01EOVJELDhEQUFBO0lSeXhDQztFQUNGO0FBQ0Y7QVF2eENFO0VDMFJFO0lEelJELHNCQUFBO0VSMHhDRDtBQUNGO0FTdi9CQTtFQUNFLGFBQUE7RUFDQSxlQUFBO0VBQ0EsWUFBQTtFQUNBLDhCQUFBO0VBRUEsNkJBQUE7RUFJQSx5Q0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7QVRxL0JGO0FRdHpDRTtFQ3FURjtJRHBURyxtQkFBQTtFUnl6Q0Q7QUFDRjtBUXR6Q0M7RUFFQztJQzhTRjtNRDdTRyx3RUFoQmM7SVJ3MENiO0VBQ0Y7RVF0ekNBO0lDMFNGO01EelNHLHdEQUFBO0lSeXpDQztFQUNGO0FBQ0Y7QVF2ekNFO0VDcVNGO0lEcFNHLGlCQUFBO0VSMHpDRDtBQUNGO0FRNTBDRTtFQ3FURjtJRHBURyxvQkFBQTtFUiswQ0Q7QUFDRjtBUTUwQ0M7RUFFQztJQzhTRjtNRDdTRyw2RUFiZTtJUjIxQ2Q7RUFDRjtFUTUwQ0E7SUMwU0Y7TUR6U0csNkRBQUE7SVIrMENDO0VBQ0Y7QUFDRjtBUTcwQ0U7RUNxU0Y7SURwU0csbUJBQUE7RVJnMUNEO0FBQ0Y7QVVuNkNFO0VBQ0UsYUFBQTtFQUNBLGVBQUE7RUFFQSxpQkFBQTtBVm82Q0o7O0FVajZDQTtFQUNFLGlCQUFBO0VBQ0EsaUJBQUE7QVZvNkNGO0FVajZDRTtFQUNFLGFBQUE7RUFDQSx1QkFBQTtBVm02Q0o7QVVoNkNFO0VBQ0UsZ0JBQUE7RUFDQSxlQUFBO0VBQ0EsZUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLHVCQUFBO0VBQ0EsbUJBQUE7RUFDQSxrQkFBQTtFQUNBLDREQUFBO0FWazZDSjtBVTk1Q0U7RUFDRSxXQUFBO0VBQ0EsWUFBQTtBVmc2Q0o7QVV0NUNFO0VBQ0UsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7QVZ1NUNKO0FRcjRDRTtFRXZCQTtJRndCQyxrQkFBQTtFUnc0Q0Q7QUFDRjtBUXI0Q0M7RUFFQztJRTlCQTtNRitCQyx1RUFoQmM7SVJ1NUNiO0VBQ0Y7RVFyNENBO0lFbENBO01GbUNDLHVEQUFBO0lSdzRDQztFQUNGO0FBQ0Y7QVF0NENFO0VFdkNBO0lGd0NDLGVBQUE7RVJ5NENEO0FBQ0Y7QVV4NkNFO0VBQ0UseUNBQUE7RUFFQSxnQkFBQTtFQUNBLGlCQUFBO0FWeTZDSjtBUWg2Q0U7RUViQTtJRmNDLGVBQUE7RVJtNkNEO0FBQ0Y7QVFoNkNDO0VBRUM7SUVwQkE7TUZxQkMsdUVBaEJjO0lSazdDYjtFQUNGO0VRaDZDQTtJRXhCQTtNRnlCQyw0REFBQTtJUm02Q0M7RUFDRjtBQUNGO0FRajZDRTtFRTdCQTtJRjhCQyxtQkFBQTtFUm82Q0Q7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCZkaXNwbGF5PXN3YXApO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdvbG9zK1RleHQ6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG5AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbkBpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRiNCw0LHQu9C+0L3RgyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDRiNGA0LjRhNGCID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiR29sb3MgVGV4dFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnRTaXplOiByZW0oMTYpOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3RliDQutC+0LvRjNC+0YDQuFxcclxcbi8vdGV4dFxcclxcbiRtYWluQ29sb3I6ICMxNjE2MTY7IC8vINCa0L7Qu9GW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG4kZGFya0dyYXk6ICM3NTc1NzU7XFxyXFxuJGxpZ2h0R3JheTogIzlmOWY5ZjtcXHJcXG5cXHJcXG4vL2JnXFxyXFxuJGxpZ2h0QmxhY2s6ICMyMDIyMjY7XFxyXFxuJGRhcmtXaGl0ZTogI2Y0ZjVmODtcXHJcXG5cXHJcXG4vL3RhZ3NcXHJcXG4kcmVkOiAjZDIxOTI0O1xcclxcbiRibHVlOiAjMjk0OWI1O1xcclxcbiRncmVlbjogIzMwOGQ3NztcXHJcXG5cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LDQtNCw0L/RgtC40LLQvdC+0Zcg0YHRltGC0LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdGC0L7RgNGW0L3QutC4XFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0YMpXFxyXFxuJG1heFdpZHRoOiAxMjgwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxMjAwO1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oXFxyXFxuICAkY29udGFpbmVyV2lkdGhcXHJcXG4pOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60L7QstCw0L3QvlxcclxcbiAgLmxvY2sgJiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vINCh0LDQudGCINC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxcclxcbiAgLmxvYWRlZCAmIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gIEBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcbiAgPiBtYWluIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyDQpNGW0LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxyXFxuICA+ICoge1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8v0JTQu9GPINGC0L7Qs9C+INGH0YLQvtCx0Ysg0L3QtSDQu9C+0LzQsNC70YHRjyDRgdC70LDQudC00LXRgCDQv9GA0Lgg0YDQtdGB0LDQudC30LVcXHJcXG5pZnJhbWUjd2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG4gIC8vINCn0YPQudC90LBcXHJcXG4gIFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcbiAgICBAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG4gICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG4gICAgICBAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICAgIH0gQGVsc2Uge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXHJcXG4gICAgICAgICAgXFxcInBhZGRpbmctbGVmdFxcXCIsXFxyXFxuICAgICAgICAgIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSxcXHJcXG4gICAgICAgICAgMTVcXHJcXG4gICAgICAgICk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcclxcbiAgICAgICAgICBcXFwicGFkZGluZy1yaWdodFxcXCIsXFxyXFxuICAgICAgICAgIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSxcXHJcXG4gICAgICAgICAgMTVcXHJcXG4gICAgICAgICk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufSBAZWxzZSB7XFxyXFxuICAvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG4gIFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG5cXHJcXG4gICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuICAgIH0gQGVsc2Uge1xcclxcbiAgICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSg3NTApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiBub25lO1xcclxcblxcclxcbiAgICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiYWR2YW50YWdlc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IGljb25zO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvaWNvbnMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvaWNvbnMud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXHJcXG5cIixcIiVpYyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImljb25zXFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIl9pY29uLVxcXCJdIHtcXHJcXG4gICY6YmVmb3JlIHtcXHJcXG4gICAgQGV4dGVuZCAlaWM7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uX2ljb24tc2V0dGluZ3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMFxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1jYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDFcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tZGVsaXZlcnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMlxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1yZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDNcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24teW91dHViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA0XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWluc3RhZ3JhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA1XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWd1YXJhbnRlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA2XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLXNhbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwN1xcXCI7XFxyXFxufVxcclxcbi5faWNvbi1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDhcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tYnVyZ2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDlcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tZmlsdGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGFcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tY2xvc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwYlxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1hbGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZFxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1zZWFyY2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZVxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1jYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGZcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tc2VydmljZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTEyXFxcIjtcXHJcXG59XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy88QlVUVE9OUyAoYS5idG4rdGFiKT5cXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGJ0blxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbGFjaztcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlLCAjZmZmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJkMzI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYuX2Z3IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAmX2dyYXkge1xcclxcbiAgICBjb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtXaGl0ZTtcXHJcXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl93aGl0ZSB7XFxyXFxuICAgIGNvbG9yOiAjMTYxNjE2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy88SU5QVVQ+XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpbnBcXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDE2cHggMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG5cXHJcXG4gICYuX2Zvcm0tZm9jdXMge1xcclxcbiAgfVxcclxcbiAgJi5fZm9ybS1lcnJvciB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcXHJcXG59XFxyXFxuLmlucHV0W3BsYWNlaG9sZGVyXTpub3QoW2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlbl0pIHtcXHJcXG4gICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWRhcmstYmcsICM5ZjlmOWYpO1xcclxcbiAgfVxcclxcbiAgJjpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5pbnB1dCB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHggMHB4O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgLy8gLmhlYWRlcl9fdG9wXFxyXFxuXFxyXFxuICAmX190b3Age1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmhlYWRlcl9fYm9keVxcclxcblxcclxcbiAgJl9fYm9keSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi50b3AtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XFxyXFxuICBwYWRkaW5nOiByZW0oMTgpIDA7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjgsIDUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xcclxcbiAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTAwJSk7XFxyXFxuICB9XFxyXFxuICAvLyAudG9wLWhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMTQpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMTYsIDE0KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgODAsIDMyLCAwLCAxMjgwLCAxMDI0KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDk0LCAyNSwgMCwgNzY4LCAzMjApO1xcclxcbiAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDY5LCAwLCAwLCA3NjgsIDMyMCk7XFxyXFxuICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiByZW0oNSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2xpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBjb2x1bW4tZ2FwOiByZW0oMzIpO1xcclxcbiAgICByb3ctZ2FwOiByZW0oNSk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC8vIC50b3AtaGVhZGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX2xvZ29cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX2NvbnRhY3RzXFxyXFxuXFxyXFxuICAmX19jb250YWN0cyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAudG9wLWhlYWRlcl9fcmlnaHRcXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAvLyAuaGVhZGVyX19ib3R0b21cXHJcXG5cXHJcXG4gICZfX2JvdHRvbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ib3R0b20taGVhZGVyIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcXHJcXG4gIC5tZW51LW9wZW4gJiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTE3NSUpO1xcclxcbiAgfVxcclxcbiAgLy8gLmJvdHRvbS1oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20taGVhZGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcbiAgJl9fbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiByZW0oOCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cy10b3AtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBjb2x1bW4tZ2FwOiByZW0oMzIpO1xcclxcbiAgcm93LWdhcDogcmVtKDUpO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5jb250YWN0cy10b3AtaGVhZGVyX19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICRtYWluQ29sb3I7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLnJpZ2h0LXRvcC1oZWFkZXIge1xcclxcbiAgLy8gLnJpZ2h0LXRvcC1oZWFkZXJfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogJG1haW5Db2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnJpZ2h0LXRvcC1oZWFkZXJfX0xpbmtcXHJcXG59XFxyXFxuLmJvZHktaGVhZGVyIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiByZW0oOCk7XFxyXFxuICB9XFxyXFxuICAvLyAuYm9keS1oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib2R5LWhlYWRlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm9keS1oZWFkZXJfX21lbnVcXHJcXG5cXHJcXG4gICZfX21lbnUge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvZHktaGVhZGVyX19yaWdodFxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgfVxcclxcbn1cXHJcXG4udG9wLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAmX19sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiByZW0oNDQpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvLyAubWVudV9faWNvblxcclxcblxcclxcbiAgLy8gLm1lbnVfX2JvZHlcXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIHBhZGRpbmc6IHJlbSgyNCkgcmVtKDE2KTtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya1doaXRlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAubWVudS1vcGVuICYge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5tZW51X19saXN0XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiByZW0oOCk7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDYwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1lbnVfX2l0ZW1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWVudV9fbGlua1xcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtYm9keS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiByZW0oOCk7XFxyXFxuICAvLyAucmlnaHQtYm9keS1oZWFkZXJfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Zvcm0ge1xcclxcbiAgfVxcclxcbiAgLy8gLnJpZ2h0LWJvZHktaGVhZGVyX19idG5cXHJcXG5cXHJcXG4gICZfX2J0biB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYm90dG9tOiAyNHB4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIC8vICB3aWR0aDogNDRweDtcXHJcXG4gICAgLy8gIGhlaWdodDogNDRweDtcXHJcXG4gICAgLy8gICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICAvLyAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC8vICAgIGhlaWdodDogMWVtO1xcclxcbiAgICAvLyAgICB3aWR0aDogMWVtO1xcclxcbiAgICAvLyAgICBib3JkZXItcmFkaXVzOiA1MGVtO1xcclxcbiAgICAvLyAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcm8uZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEwLjAvc3Zncy9zb2xpZC90aW1lcy1jaXJjbGUuc3ZnKVxcclxcbiAgICAvLyAgICAgIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbiAgICAvLyAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIC8vICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC8vICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAvLyAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICAmX19jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxM3B4IDdweDtcXHJcXG4gICAgd2lkdGg6IHJlbSg0NCk7XFxyXFxuICAgIGhlaWdodDogcmVtKDQ0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbixcXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgICByaWdodDogNTAlO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogcGVyY2VudCgyMCwgNDQpO1xcclxcbiAgICAgIGhlaWdodDogcmVtKDMpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgdG9wOiBwZXJjZW50KDEyLCA0NCk7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJvdHRvbTogcGVyY2VudCgxMiwgNDQpO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIHRvcDogY2FsYyg1MCUgLSByZW0oMS41KSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDE2cHg7XFxyXFxuICAgICAgei1pbmRleDogMztcXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjpiZWZvcmUsXFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIHJlbSgxLjUpKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgYm90dG9tOiBjYWxjKDUwJSAtIHJlbSgxLjUpKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8v0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0YNcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICN7JHdlaWdodH07XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogI3skc3R5bGV9O1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy9QZXJjZW50XFxyXFxuQGZ1bmN0aW9uIHBlcmNlbnQoJHB4LCAkZnJvbSkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHJlbSgkcHgpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsIDE2KSArIHJlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vRU1cXHJcXG5AZnVuY3Rpb24gZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIGVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuXFxyXFxuLy9DdXJyZW5jeVxcclxcbkBtaXhpbiBjdXJyZW5jeSgkc3ltKSB7XFxyXFxuXFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCIjeyRzeW19XFxcIjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIEdyaWRzXFxyXFxuQG1peGluIGdyaWRDYXJkcygkdHlwZTogZml0LCAkbWluOiAyODBweCwgJG1heDogMWZyLCAkZ2FwOiAzMHB4KSB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRnYXA6ICRnYXA7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by0jeyR0eXBlfSwgbWlubWF4KCRtaW4sICRtYXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdCwINCy0LvQsNGB0YLQuNCy0ZbRgdGC0YwgKGNsYW1wKVxcclxcbkBtaXhpbiBhZGFwdGl2ZVZhbHVlKCRwcm9wZXJ0eSwgJHN0YXJ0U2l6ZSwgJG1pblNpemUsICRrZWVwU2l6ZTogMCwgJHdpZHRoRnJvbTogJGNvbnRhaW5lcldpZHRoLCAkd2lkdGhUbzogJG1pbldpZHRoKSB7XFxyXFxuXFx0QGlmICgkc3RhcnRTaXplPT0wKSB7XFxyXFxuXFx0XFx0JHN0YXJ0U2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdEBpZiAoJG1pblNpemU9PTApIHtcXHJcXG5cXHRcXHQkbWluU2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCU0LvRjyBjYWxjKCk7XFxyXFxuXFx0JGFkZFNpemU6IG1hdGguZGl2KCRzdGFydFNpemUgLSAkbWluU2l6ZSwgMTYpO1xcclxcblxcclxcblxcdEBpZiAoJHdpZHRoRnJvbSA9PSAkY29udGFpbmVyV2lkdGggYW5kICRtYXhXaWR0aENvbnRhaW5lciA9PSAwKSB7XFxyXFxuXFx0XFx0JHdpZHRoRnJvbTogJG1heFdpZHRoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuCDQsiBFTVxcclxcblxcdCR3aWR0aEZyb21NZWRpYTogZW0oJHdpZHRoRnJvbSk7XFxyXFxuXFx0JHdpZHRoVG9NZWRpYTogZW0oJHdpZHRoVG8pO1xcclxcblxcclxcblxcdC8vINCk0L7RgNC80YPQu9CwINC/0LvQsNCy0LDRjtGH0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHQvLyDQmNGB0YLQvtGH0L3QuNC6OiBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmVhcmx5LXNjYWxlLWZvbnQtc2l6ZS13aXRoLWNzcy1jbGFtcC1iYXNlZC1vbi10aGUtdmlld3BvcnQvXFxyXFxuXFx0JHNsb3BlOiBtYXRoLmRpdigoJHN0YXJ0U2l6ZSAtICRtaW5TaXplKSwgKCR3aWR0aEZyb20gLSAkd2lkdGhUbykpO1xcclxcblxcdCR5SW50ZXJzZWN0aW9uOiAtJHdpZHRoVG8gKiAkc2xvcGUgKyAkbWluU2l6ZTtcXHJcXG5cXHRAaWYgKCR5SW50ZXJzZWN0aW9uPT0wKSB7XFxyXFxuXFx0XFx0JHlJbnRlcnNlY3Rpb246IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHQkZmx5VmFsdWU6ICN7cmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQntGC0YDQuNC80LDQvdC90Y8g0LfQvdCw0YfQtdC90L3RjyDQstC70LDRgdGC0LjQstC+0YHRgtGWXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHQvLyDQr9C60YnQviDQvdC10LPQsNGC0LjQstC90ZYg0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdEBpZiAoJG1pblNpemUgPiAkc3RhcnRTaXplKSB7XFxyXFxuXFx0XFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC30L3QsNGH0LXQvdC90Y8g0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHJlbSgkc3RhcnRTaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdC8vINCQ0LTQsNC/0YLRg9GU0LzQviDRgNC+0LfQvNGW0YAg0YMg0L/RgNC+0LzRltC20LrRgyDQvNGW0LYg0LfQsNC30L3QsNGH0LXQvdC40LzQuCDRiNC40YDQuNC90LDQvNC4INCyJ9GO0L/QvtGA0YLRg1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhUb01lZGlhKSBhbmQgKG1heC13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQvdC1INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzIG5vdCAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogY2FsYygje3JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR3aWR0aFRvTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHJlbSgkbWluU2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIC8vIC5mb290ZXJfX2Zvcm1cXHJcXG5cXHJcXG4gICZfX2Zvcm0ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmZvb3Rlcl9fYm90dG9tXFxyXFxuXFxyXFxuICAmX19ib3R0b20ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZm9ybS1mb290ZXIge1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxMjAsIDYwKTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTIwLCA2MCk7XFxyXFxuICAvLyAuZm9ybS1mb290ZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5mb3JtLWZvb3Rlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmxhY2ssICMyMDIyMjYpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDYwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCA2MCwgMTIsIDAsIDEwMjQsIDMyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDQwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxMTYsIDE2KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuZm9ybS1mb290ZXJfX2xlZnRcXHJcXG5cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmZvcm0tZm9vdGVyX19yaWdodFxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubGVmdC1mb3JtLWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgNDUxcHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG4gIC8vIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZVxcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSwgI2ZmZik7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDQwLCAyNCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdig0OCwgNDApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjAsIDEyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjXFxyXFxuXFxyXFxuICAmX19kZXNjIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1kYXJrLWJnLCAjOWY5ZjlmKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1mb3JtLWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgNTUycHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG4gIC8vIC5yaWdodC1mb3JtLWZvb3Rlcl9fZm9ybVxcclxcblxcclxcbiAgJl9fZm9ybSB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAucmlnaHQtZm9ybS1mb290ZXJfX2lucHV0XFxyXFxuXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDIwLCA4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXRvcFxcXCIsIDQ0LCAzMik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDI0LCAxNik7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDI0LCAxNik7XFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX3RvcFxcclxcblxcclxcbiAgJl9fdG9wIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX19taWRcXHJcXG5cXHJcXG4gICZfX21pZCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fc29jaWFsc1xcclxcblxcclxcbiAgJl9fc29jaWFscyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fYm90dG9tXFxyXFxuXFxyXFxuICAmX19ib3R0b20ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4udG9wLWJvdHRvbS1mb290ZXIge1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAyOCwgMjApO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDAsIDUyKTtcXHJcXG4gIC8vIC50b3AtYm90dG9tLWZvb3Rlcl9fbG9nb1xcclxcblxcclxcbiAgJl9fbG9nbyB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMjMzLCAxNiwgMCwgMTIwMCwgOTQ0KTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAvLyAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIG1pbm1heCgyODhweCwgMzg5cHgpIDFmciAyODhweCAyODhweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICAvLyAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIG1pbm1heCgyODhweCwgMzg5cHgpIDE2cHggMjg4cHg7XFxyXFxuICAgIC8vICByb3ctZ2FwOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgLy8gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICAvLyAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gICAgLy8gIHJvdy1nYXA6IDYycHg7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZVNtYWxsKSB7XFxyXFxuICAgIC8vICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvLyAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLy8gIHJvdy1nYXA6IDUycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWlkLWJvdHRvbS1mb290ZXJfX2xlZnRcXHJcXG5cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1pZC1ib3R0b20tZm9vdGVyX19taWRcXHJcXG5cXHJcXG4gICZfX21pZCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWlkLWJvdHRvbS1mb290ZXJfX3JpZ2h0XFxyXFxuXFxyXFxuICAmX19yaWdodCB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5sZWZ0LW1pZC1mb290ZXIge1xcclxcbiAgZmxleDogMCAxIDM4OXB4O1xcclxcbiAgLy8gICBncmlkLXJvdzogc3BhbiAyO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA2MiwgNTgpO1xcclxcbiAgfVxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dFxcclxcblxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcXHJcXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcXFwibGlnYVxcXCIgb2ZmO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMTgpO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjgsIDI0KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldFxcclxcblxcclxcbiAgJl9fc3RyZWV0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNCwgMzIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmVcXHJcXG5cXHJcXG4gICZfX3Bob25lIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4LCAxNik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19lbWFpbFxcclxcblxcclxcbiAgJl9fZW1haWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI0LCAzMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19idG5zXFxyXFxuXFxyXFxuICAmX19idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA2MiwgMzgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fYnRuXFxyXFxuXFxyXFxuICAmX19idG4ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fc29jaWFsc1xcclxcblxcclxcbiAgJl9fc29jaWFscyB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgLy8gLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyX19pdGVtXFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgbWluLXdpZHRoOiA0NHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ0cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW9yLWRldmlkZXItbGlnaHQtYmcsICNlOWU5ZTkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5zb2NpYWxzLWxlZnQtbWlkLWZvb3Rlcl9fZGVzY1xcclxcblxcclxcbiAgJl9fZGVzYyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB9XFxyXFxufVxcclxcbi8vIC5taWQtbWlkLWJvdHRvbS1mb290ZXIge1xcclxcbi8vICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbi8vICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4vLyAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuLy8gICB9XFxyXFxuLy8gICAvLyAubWlkLW1pZC1ib3R0b20tZm9vdGVyX190aXRsZVxcclxcblxcclxcbi8vICAgJl9fdGl0bGUge1xcclxcbi8vICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuLy8gICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNCwgMjApO1xcclxcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzIsIDI0KTtcXHJcXG4vLyAgIH1cXHJcXG5cXHJcXG4vLyAgIC8vIC5taWQtbWlkLWJvdHRvbS1mb290ZXJfX2xpc3RcXHJcXG5cXHJcXG4vLyAgICZfX2xpc3Qge1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG4vLyAubGlzdC1taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuLy8gICAvLyAubGlzdC1taWQtYm90dG9tLWZvb3Rlcl9faXRlbVxcclxcblxcclxcbi8vICAgJl9faXRlbSB7XFxyXFxuLy8gICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuLy8gICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDEyLCAyMCk7XFxyXFxuLy8gICAgIH1cXHJcXG4vLyAgIH1cXHJcXG5cXHJcXG4vLyAgIC8vIC5saXN0LW1pZC1ib3R0b20tZm9vdGVyX19saW5rXFxyXFxuXFxyXFxuLy8gICAmX19saW5rIHtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuLy8gLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4vLyAgIGdyaWQtY29sdW1uOiA0O1xcclxcbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDEwMjQpKSB7XFxyXFxuLy8gICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbi8vICAgICBncmlkLXJvdzogMjtcXHJcXG4vLyAgIH1cXHJcXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuLy8gICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbi8vICAgICBncmlkLXJvdzogMjtcXHJcXG4vLyAgIH1cXHJcXG4vLyAgIC8vIC5yaWdodC1taWQtYm90dG9tLWZvb3Rlcl9fdGl0bGVcXHJcXG5cXHJcXG4vLyAgICZfX3RpdGxlIHtcXHJcXG4vLyAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTYpO1xcclxcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbi8vICAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjQsIDIwKTtcXHJcXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDMyLCAyNCk7XFxyXFxuLy8gICB9XFxyXFxuXFxyXFxuLy8gICAvLyAucmlnaHQtbWlkLWJvdHRvbS1mb290ZXJfX2xpc3RcXHJcXG5cXHJcXG4vLyAgICZfX2xpc3Qge1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG4vLyAubGlzdC1yaWdodC1ib3R0b20tZm9vdGVyIHtcXHJcXG4vLyAgIC8vIC5saXN0LXJpZ2h0LWJvdHRvbS1mb290ZXJfX2l0ZW1cXHJcXG5cXHJcXG4vLyAgICZfX2l0ZW0ge1xcclxcbi8vICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbi8vICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxMiwgMjApO1xcclxcbi8vICAgICB9XFxyXFxuLy8gICB9XFxyXFxuXFxyXFxuLy8gICAvLyAubGlzdC1yaWdodC1ib3R0b20tZm9vdGVyX19saW5rXFxyXFxuXFxyXFxuLy8gICAmX19saW5rIHtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcclxcbiAgcm93LWdhcDogNDBweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG4gIC8vIC5yaWdodC1taWQtYm90dG9tLWZvb3Rlcl9faXRlbVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pdGVtLXJpZ2h0LWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgMjg4cHg7XFxyXFxuICAvLyAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlXFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNCwgMjApO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzIsIDI0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdFxcclxcblxcclxcbiAgJl9fbGlzdCB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxNCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubGlzdC1pdGVtLXJpZ2h0LWZvb3RlciB7XFxyXFxuICAvLyAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDEyLCAyMCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICByb3ctZ2FwOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDI0LCAxNik7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCA0MiwgNTIpO1xcclxcbiAgLy8gLmJvdHRvbS1ib3R0b20tZm9vdGVyX19jb3B5cmlnaHRcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgJl9fY29weXJpZ2h0IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tYm90dG9tLWZvb3Rlcl9fcG9saWN5XFxyXFxuXFxyXFxuICAmX19wb2xpY3kge1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cIixcIi5hZHZhbnRhZ2VzIHtcXHJcXG4gIC8vIC5hZHZhbnRhZ2VzX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYWR2YW50YWdlc19fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYWR2YW50YWdlc19fY2FyZHNcXHJcXG5cXHJcXG4gICZfX2NhcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcblxcclxcbiAgICBtYXJnaW46IDAgcmVtKC04KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmNhcmQtYWR2YW50YWdlcyB7XFxyXFxuICBmbGV4OiAwIDEgMzMuMzMzJTtcXHJcXG4gIHBhZGRpbmc6IDAgcmVtKDgpO1xcclxcbiAgLy8gLmNhcmQtYWR2YW50YWdlc19fYm9keVxcclxcblxcclxcbiAgJl9fYm9keSB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9faW1nIHtcXHJcXG4gICAgbWluLWhlaWdodDogNjBweDtcXHJcXG4gICAgbWluLXdpZHRoOiA2MHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDYwcHg7XFxyXFxuICAgIG1pbi1oZWlnaHQ6IDYwcHg7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1vci1kZXZpZGVyLWxpZ2h0LWJnLCAjZTllOWU5KTtcXHJcXG4gIH1cXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX2ltZy1pYmdcXHJcXG5cXHJcXG4gICZfX2ltZy1pYmcge1xcclxcbiAgICB3aWR0aDogMjRweDtcXHJcXG4gICAgaGVpZ2h0OiAyNHB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmNhcmQtYWR2YW50YWdlc19fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX190aXRsZVxcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNCwgMjApO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmNhcmQtYWR2YW50YWdlc19fZGVzY1xcclxcblxcclxcbiAgJl9fZGVzYyB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAxNiwgMTQpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImJiZmJiYmVlYjM4ZWVlNWY3ZGRhXCIpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9