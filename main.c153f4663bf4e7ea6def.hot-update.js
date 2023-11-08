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
@media (min-width: 76.875em) {
  .advantages__cards {
    row-gap: 2.5rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (row-gap: clamp( 1.25rem , 0.8104395604rem  +  2.1978021978vw , 2.5rem )) {
    .advantages__cards {
      row-gap: clamp( 1.25rem , 0.8104395604rem  +  2.1978021978vw , 2.5rem );
    }
  }
  @supports not (row-gap: clamp( 1.25rem , 0.8104395604rem  +  2.1978021978vw , 2.5rem )) {
    .advantages__cards {
      row-gap: calc(1.25rem + 1.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .advantages__cards {
    row-gap: 1.25rem;
  }
}

.card-advantages {
  flex: 0 1 33.333%;
  padding: 0 0.5rem;
}
@media (max-width: 64em) {
  .card-advantages {
    flex: 0 1 50%;
  }
}
@media (max-width: 29.99875em) {
  .card-advantages {
    flex: 1 1 100%;
  }
}
.card-advantages__body {
  display: flex;
  align-items: flex-start;
}
.card-advantages__img {
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);
}
@media (min-width: 76.875em) {
  .card-advantages__img {
    max-width: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (max-width: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      max-width: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem );
    }
  }
  @supports not (max-width: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      max-width: calc(2.75rem + 1 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__img {
    max-width: 2.75rem;
  }
}
@media (min-width: 76.875em) {
  .card-advantages__img {
    max-height: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (max-height: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      max-height: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem );
    }
  }
  @supports not (max-height: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      max-height: calc(2.75rem + 1 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__img {
    max-height: 2.75rem;
  }
}
@media (min-width: 76.875em) {
  .card-advantages__img {
    min-width: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (min-width: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      min-width: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem );
    }
  }
  @supports not (min-width: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      min-width: calc(2.75rem + 1 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__img {
    min-width: 2.75rem;
  }
}
@media (min-width: 76.875em) {
  .card-advantages__img {
    max-height: 3.75rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (max-height: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      max-height: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem );
    }
  }
  @supports not (max-height: clamp( 2.75rem , 2.3983516484rem  +  1.7582417582vw , 3.75rem )) {
    .card-advantages__img {
      max-height: calc(2.75rem + 1 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__img {
    max-height: 2.75rem;
  }
}
@media (min-width: 76.875em) {
  .card-advantages__img {
    margin-right: 1rem;
  }
}
@media (min-width: 20em) and (max-width: 76.875em) {
  @supports (margin-right: clamp( 0.75rem , 0.6620879121rem  +  0.4395604396vw , 1rem )) {
    .card-advantages__img {
      margin-right: clamp( 0.75rem , 0.6620879121rem  +  0.4395604396vw , 1rem );
    }
  }
  @supports not (margin-right: clamp( 0.75rem , 0.6620879121rem  +  0.4395604396vw , 1rem )) {
    .card-advantages__img {
      margin-right: calc(0.75rem + 0.25 * (100vw - 20rem) / 56.875);
    }
  }
}
@media (max-width: 20em) {
  .card-advantages__img {
    margin-right: 0.75rem;
  }
}
.card-advantages__img img {
  max-width: 24px;
  max-height: 24px;
}
.card-advantages__title {
  color: var(--text-black, #161616);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -0.6px;
  margin-bottom: 0.5rem;
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
}`, "",{"version":3,"sources":["webpack://./src/scss/style.scss","webpack://./src/scss/fonts/fonts.scss","webpack://./src/scss/fonts/icons.scss","webpack://./src/scss/base/null.scss","webpack://./src/scss/base/forms/button.scss","webpack://./src/scss/base/forms/input.scss","webpack://./src/scss/base.scss","webpack://./src/scss/header.scss","webpack://./src/scss/base/mixins.scss","webpack://./src/scss/footer.scss","webpack://./src/scss/advantages.scss"],"names":[],"mappings":"AAAA,gBAAgB;ACAhB;EACC,kBAAA;EACA,kBAAA;EACA,2FAAA;EACA,gBAAA;EACA,kBAAA;ADID;AETA;EACE,oBAAA;EACA,kBAAA;EACA,mBAAA;EACA,oBAAA;EACA,oBAAA;EACA,cAAA;EACA,mCAAA;EACA,kCAAA;AFWF;;AERE;EAEE,cAAA;AFUJ;;AENA;EACE,gBAAA;AFSF;;AEPA;EACE,gBAAA;AFUF;;AERA;EACE,gBAAA;AFWF;;AETA;EACE,gBAAA;AFYF;;AEVA;EACE,gBAAA;AFaF;;AEXA;EACE,gBAAA;AFcF;;AEZA;EACE,gBAAA;AFeF;;AEbA;EACE,gBAAA;AFgBF;;AEdA;EACE,gBAAA;AFiBF;;AEfA;EACE,gBAAA;AFkBF;;AEhBA;EACE,gBAAA;AFmBF;;AEjBA;EACE,gBAAA;AFoBF;;AElBA;EACE,gBAAA;AFqBF;;AEnBA;EACE,gBAAA;AFsBF;;AEpBA;EACE,gBAAA;AFuBF;;AErBA;EACE,gBAAA;AFwBF;;AGvFA;EACC,YAAA;EACA,WAAA;EACA,WAAA;AH0FD;;AGxFA;;;EAGC,sBAAA;AH2FD;;AGjFA;;EAEC,YAAA;EACA,gBAAA;AHoFD;;AGlFA;EACC,cHEW;EGDX,cAAA;EACA,qCHLY;EGMZ,eHLU;EGOV,0BAAA;EACA,2BAAA;EACA,8BAAA;EACA,mCAAA;EACA,kCAAA;AHoFD;;AGlFA;;;EAGC,qCHjBY;EGkBZ,kBAAA;AHqFD;;AGnFA;EACC,eAAA;EACA,cAAA;EACA,6BAAA;AHsFD;;AGpFA;EACC,cAAA;EACA,qBAAA;AHuFD;;AGrFA;EACC,gBAAA;AHwFD;;AGtFA;EACC,mBAAA;AHyFD;;AGvFA;;;;;;EAMC,oBAAA;EACA,kBAAA;AH0FD;;AA5EE;EACE,gBAAA;EACA,kBAAA;EACA,yBAAA;AA+EJ;AAtEA;EACE,gBAAA;EACA,aAAA;EACA,sBAAA;EACA,gBAAA;AAwEF;AAtEE;EANF;IAOI,cAAA;EAyEF;AACF;AAtEE;EACE,cAAA;AAwEJ;AApEE;EACE,YAAA;AAsEJ;;AAjEA;EACE,wBAAA;AAoEF;;AA/DA;;;;;CAAA;AAQE;EAEI,oBAAA;EACA,cAAA;EAKE,oBAAA;AA2DR;;AI7LA;EACE,oBAAA;EACA,kBAAA;EACA,kBAAA;EACA,yBJwBW;EIvBX,8BAAA;EACA,gBAAA;EACA,iBAAA;EACA,4BAAA;EACA,mBAAA;AJgMF;AI/LE;EACE;IACE,yBAAA;EJiMJ;AACF;AI/LE;EACE,WAAA;AJiMJ;AI/LE;EACE,cAAA;EACA,yBJSQ;AAwLZ;AIhMI;EACE;IACE,yBAAA;EJkMN;AACF;AI/LE;EACE,cAAA;EACA,sBAAA;AJiMJ;AIhMI;EACE;IACE,yBAAA;EJkMN;AACF;;AKpOA;;;;EAIE,wBAAA;EACA,qBAAA;EACA,gBAAA;ALuOF;;AKpOA;EACE,2BAAA;EACA,WAAA;EACA,cAAA;EACA,iBAAA;EACA,6BAAA;EACA,6BAAA;EACA,aAAA;EACA,WAAA;EACA,gBAAA;EACA,iBAAA;ALuOF;AKhOA;EACE,YAAA;EACA,sBAAA;EACA,kBAAA;EACA,2CAAA;ALkOF;;AK/NE;EACE,wBAAA;EACA,wCAAA;ALkOJ;AKhOE;EACE,UAAA;ALkOJ;;AK9NA;EACE,YAAA;EACA,gBAAA;ALiOF;;AMvOA;EACC,kBAAA;AN0OD;AMzOC;EACC,kBAAA;EACA,WAAA;EACA,YAAA;EACA,MAAA;EACA,OAAA;EACA,iBAAA;AN2OF;;AMvOC;EACC,mBAAA;AN0OF;;AO9RA;EACE,eAAA;EACA,WAAA;EACA,MAAA;EACA,OAAA;EACA,aAAA;APiSF;AOtRA;EACE,2CAAA;EACA,mBAAA;EAEA,8BAAA;APuRF;AQ9NE;ED7DF;IC8DG,sBAAA;ERiOD;AACF;AQ9NC;EAEC;IDpEF;MCqEG,iFAhBc;IRgPb;EACF;EQ9NA;IDxEF;MCyEG,kEAAA;IRiOC;EACF;AACF;AQ/NE;ED7EF;IC8EG,wBAAA;ERkOD;AACF;AO5SE;EACE,4BAAA;EACA,gCAAA;AP8SJ;AOvSE;EACE,aAAA;EACA,yCAAA;EACA,mBAAA;EACA,gBAAA;EACA,yBAAA;APySJ;AQ/PE;ED/CA;ICgDC,SAAA;ERkQD;AACF;AQ/PC;EAEC;IDtDA;MCuDC,8CAhBc;IRiRb;EACF;EQ/PA;ID1DA;MC2DC,0CAAA;IRkQC;EACF;AACF;AQhQE;ED/DA;ICgEC,SAAA;ERmQD;AACF;AO7TI;EAPF;IAUI,cAAA;IACA,8BAAA;EP8TJ;AACF;AQ3RE;ED/CA;ICgDC,qBAAA;ER8RD;AACF;AQ3RC;EAEC;IDtDA;MCuDC,iFAhBc;IR6Sb;EACF;EQ3RA;ID1DA;MC2DC,4DAAA;IR8RC;EACF;AACF;AQ5RE;ED/DA;ICgEC,sBAAA;ER+RD;AACF;AQjTE;ED/CA;ICgDC,uBAAA;ERoTD;AACF;AQjTC;EAEC;IDtDA;MCuDC,yFAhBc;IRmUb;EACF;EQjTA;ID1DA;MC2DC,yEAAA;IRoTC;EACF;AACF;AQlTE;ED/DA;ICgEC,6BAAA;ERqTD;AACF;AOzWI;EAbF;IAcI,kBAAA;IACA,iBAAA;IACA,yBAAA;IACA,uBAAA;EP4WJ;AACF;AO1WE;EACE,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;AP4WJ;AO3WI;EALF;IAMI,sBAAA;EP8WJ;AACF;AO7WI;EARF;IASI,aAAA;EPgXJ;AACF;AO5WE;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AP8WJ;AOtVA;EACE,8BAAA;APwVF;AOvVE;EACE,4BAAA;EACA,gCAAA;APyVJ;AOhVE;EACE,aAAA;EACA,8BAAA;APkVJ;AOhVE;EACE,aAAA;EACA,8BAAA;EACA,WAAA;APkVJ;;AO9UA;EACE,aAAA;EACA,eAAA;EACA,gBAAA;EACA,kBAAA;APiVF;AOhVE;EALF;IAMI,sBAAA;EPmVF;AACF;AO/UE;EACE,4BAAA;APiVJ;AOhVI;EACE,cPxGM;AA0bZ;;AO3UE;EACE,4BAAA;AP8UJ;AO7UI;EACE,cPlHM;AAicZ;;AOxUE;EADF;IAEI,qBAAA;EP4UF;AACF;AOpUE;EACE,aAAA;EACA,8BAAA;EACA,uBAAA;APsUJ;AOzTA;EACE,aAAA;EACA,8BAAA;EACA,mBAAA;AP2TF;AOzTE;EACE,aAAA;AP2TJ;AO1TI;EAFF;IAGI,sBAAA;IACA,cAAA;EP6TJ;AACF;;AO1TA;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;AP6TF;AOvTI;EADF;IAEI,oBAAA;IACA,eAAA;IACA,WAAA;IACA,YAAA;IACA,MAAA;IACA,WAAA;IACA,yBP1KM;IO2KN,4BAAA;IACA,UAAA;EP0TJ;EOxTI;IACE,8BAAA;IACA,OAAA;EP0TN;AACF;AOpTE;EACE,aAAA;EACA,mBAAA;EACA,WAAA;EACA,eAAA;APsTJ;AOpTI;EANF;IAOI,sBAAA;IACA,uBAAA;IACA,iBAAA;IACA,cAAA;IACA,eAAA;EPuTJ;AACF;AOjTI;EADF;IAEI,cAAA;IACA,kBAAA;IACA,oBAAA;IACA,WAAA;EPoTJ;EOnTI;IACE,WAAA;IACA,kBAAA;IACA,WAAA;IACA,WAAA;IACA,SAAA;IACA,OAAA;IACA,yBAAA;EPqTN;AACF;AO9SI;EADF;IAEI,UAAA;EPiTJ;AACF;;AO7SA;EACE,aAAA;EACA,yBAAA;EACA,mBAAA;EACA,WAAA;APgTF;AO7SE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;AP+SJ;AOvSI;EADF;IAEI,kBAAA;IACA,wBAAA;IACA,cAAA;IACA,kBAAA;IACA,YAAA;IACA,SAAA;IACA,+BAAA;EP0SJ;AACF;AOxRA;EACE,aAAA;AP0RF;AOzRE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,QAAA;EACA,UAAA;EACA,uBAAA;EACA,kBAAA;EACA,aAAA;AP2RJ;AO1RI;EACE,wBAAA;EACA,oBAAA;AP4RN;AOzRE;EACE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;AP2RJ;AOzRE;EACE,aAAA;EACA,eAAA;EACA,uBAAA;EACA,mBAAA;EACA,WAAA;EACA,YAAA;EACA,kBAAA;EACA,UAAA;EACA,gBAAA;AP2RJ;;AOpRA;EACE,aAAA;APuRF;AOrRE;EAHF;IAII,cAAA;IACA,kBAAA;IACA,iBAAA;IACA,cAAA;IACA,eAAA;IACA,4BAAA;EPwRF;AACF;AOxRI;EAVJ;IAWM,eAAA;EP2RJ;AACF;AOpSE;EAUE;IAGE,WAAA;IACA,4BAAA;IACA,UAAA;IACA,kBAAA;IACA,qBAAA;IACA,iBAAA;IACA,yBAAA;IACA,8BAAA;EP2RJ;EOzRE;IACE,mBAAA;EP2RJ;EOzRE;IACE,sBAAA;EP2RJ;EOzRE;IACE,2BAAA;EP2RJ;EOzRE;IACE,kBAAA;IACA,WAAA;IACA,UAAA;EP2RJ;EO1RI;IACE,QAAA;EP4RN;EOvRI;IACE,2BAAA;IACA,6CAAA;EPyRN;EOvRI;IACE,8BAAA;IACA,4CAAA;EPyRN;AACF;;AQxlBE;EClEF;IDmEG,mBAAA;ER4lBD;AACF;AQzlBC;EAEC;ICzEF;MD0EG,2EAhBc;IR2mBb;EACF;EQzlBA;IC7EF;MD8EG,4DAAA;IR4lBC;EACF;AACF;AQ1lBE;EClFF;IDmFG,oBAAA;ER6lBD;AACF;AQ/mBE;EClEF;IDmEG,sBAAA;ERknBD;AACF;AQ/mBC;EAEC;ICzEF;MD0EG,8EAhBc;IRioBb;EACF;EQ/mBA;IC7EF;MD8EG,+DAAA;IRknBC;EACF;AACF;AQhnBE;EClFF;IDmFG,uBAAA;ERmnBD;AACF;AS7rBE;EACE,mBAAA;EACA,4CAAA;EAKA,aAAA;EACA,8BAAA;AT2rBJ;AQ3oBE;ECxDA;IDyDC,oBAAA;ER8oBD;AACF;AQ3oBC;EAEC;IC/DA;MDgEC,6EAhBc;IR6pBb;EACF;EQ3oBA;ICnEA;MDoEC,qDAAA;IR8oBC;EACF;AACF;AQ5oBE;ECxEA;IDyEC,oBAAA;ER+oBD;AACF;AQjqBE;ECxDA;IDyDC,uBAAA;ERoqBD;AACF;AQjqBC;EAEC;IC/DA;MDgEC,gFAhBc;IRmrBb;EACF;EQjqBA;ICnEA;MDoEC,wDAAA;IRoqBC;EACF;AACF;AQlqBE;ECxEA;IDyEC,uBAAA;ERqqBD;AACF;AQvrBE;ECxDA;IDyDC,oBAAA;ER0rBD;AACF;AQvrBC;EAEC;IC/DA;MDgEC,6EAhBc;IRysBb;EACF;EQvrBA;ICnEA;MDoEC,yDAAA;IR0rBC;EACF;AACF;AQxrBE;ECxEA;IDyEC,qBAAA;ER2rBD;AACF;AQ7sBE;ECxDA;IDyDC,qBAAA;ERgtBD;AACF;AQ7sBC;EAEC;IC/DA;MDgEC,8EAhBc;IR+tBb;EACF;EQ7sBA;ICnEA;MDoEC,0DAAA;IRgtBC;EACF;AACF;AQ9sBE;ECxEA;IDyEC,sBAAA;ERitBD;AACF;AQnuBE;ECxDA;IDyDC,YAAA;ERsuBD;AACF;AQnuBC;EAEC;IC/DA;MDgEC,kEAhBc;IRqvBb;EACF;EQnuBA;ICnEA;MDoEC,iDAAA;IRsuBC;EACF;AACF;AQpuBE;ECxEA;IDyEC,SAAA;ERuuBD;AACF;ASvyBI;EAVF;IAWI,sBAAA;ET0yBJ;AACF;AS7xBA;EACE,eAAA;AT+xBF;AS9xBE;EAFF;IAGI,cAAA;ETiyBF;AACF;AS9xBE;EACE,8BAAA;EAEA,gBAAA;EACA,gBAAA;AT+xBJ;AQ3wBE;ECxBA;IDyBC,iBAAA;ER8wBD;AACF;AQ3wBC;EAEC;IC/BA;MDgCC,wEAhBc;IR6xBb;EACF;EQ3wBA;ICnCA;MDoCC,sDAAA;IR8wBC;EACF;AACF;AQ5wBE;ECxCA;IDyCC,iBAAA;ER+wBD;AACF;AQjyBE;ECxBA;IDyBC,sBAAA;ERoyBD;AACF;AQjyBC;EAEC;IC/BA;MDgCC,8EAhBc;IRmzBb;EACF;EQjyBA;ICnCA;MDoCC,6DAAA;IRoyBC;EACF;AACF;AQlyBE;ECxCA;IDyCC,sBAAA;ERqyBD;AACF;ASr0BE;EACE,wCAAA;EAEA,gBAAA;EACA,iBAAA;ATs0BJ;AQ5zBE;ECdA;IDeC,eAAA;ER+zBD;AACF;AQ5zBC;EAEC;ICrBA;MDsBC,uEAhBc;IR80Bb;EACF;EQ5zBA;ICzBA;MD0BC,4DAAA;IR+zBC;EACF;AACF;AQ7zBE;EC9BA;ID+BC,mBAAA;ERg0BD;AACF;;ASx1BA;EACE,eAAA;AT21BF;AS11BE;EAFF;IAGI,cAAA;ET61BF;AACF;AQ31BE;ECOE;IDND,sBAAA;ER81BD;AACF;AQ31BC;EAEC;ICAE;MDCD,6EAhBc;IR62Bb;EACF;EQ31BA;ICJE;MDKD,6DAAA;IR81BC;EACF;AACF;AQ51BE;ECTE;IDUD,qBAAA;ER+1BD;AACF;AQj3BE;ECYA;IDXC,mBAAA;ERo3BD;AACF;AQj3BC;EAEC;ICKA;MDJC,wEAhBc;IRm4Bb;EACF;EQj3BA;ICCA;MDAC,wDAAA;IRo3BC;EACF;AACF;AQl3BE;ECJA;IDKC,gBAAA;ERq3BD;AACF;;ASt3BA;EACE,2CAAA;ATy3BF;AQ34BE;ECiBF;IDhBG,mBAAA;ER84BD;AACF;AQ34BC;EAEC;ICUF;MDTG,wEAhBc;IR65Bb;EACF;EQ34BA;ICMF;MDLG,wDAAA;IR84BC;EACF;AACF;AQ54BE;ECCF;IDAG,iBAAA;ER+4BD;AACF;AQj6BE;ECiBF;IDhBG,sBAAA;ERo6BD;AACF;AQj6BC;EAEC;ICUF;MDTG,2EAhBc;IRm7Bb;EACF;EQj6BA;ICMF;MDLG,2DAAA;IRo6BC;EACF;AACF;AQl6BE;ECCF;IDAG,oBAAA;ERq6BD;AACF;ASp4BA;EAEE,gCAAA;ATq4BF;AQ17BE;ECmDF;IDlDG,uBAAA;ER67BD;AACF;AQ17BC;EAEC;IC4CF;MD3CG,+EAhBc;IR48Bb;EACF;EQ17BA;ICwCF;MDvCG,8DAAA;IR67BC;EACF;AACF;AQ37BE;ECmCF;IDlCG,uBAAA;ER87BD;AACF;AQh9BE;ECmDF;IDlDG,qBAAA;ERm9BD;AACF;AQh9BC;EAEC;IC4CF;MD3CG,8EAbe;IR+9Bd;EACF;EQh9BA;ICwCF;MDvCG,+DAAA;IRm9BC;EACF;AACF;AQj9BE;ECmCF;IDlCG,sBAAA;ERo9BD;AACF;AS16BA;EACE,aAAA;AT46BF;AQz+BE;EC4DF;ID3DG,eAAA;ER4+BD;AACF;AQz+BC;EAEC;ICqDF;MDpDG,iEAhBc;IR2/Bb;EACF;EQz+BA;ICiDF;MDhDG,gDAAA;IR4+BC;EACF;AACF;AQ1+BE;EC4CF;ID3CG,SAAA;ER6+BD;AACF;ASh8BE;EAHF;IAII,sBAAA;ETm8BF;AACF;ASj6BA;EACE,eAAA;ATm6BF;ASj6BE;EAHF;IAII,cAAA;ETo6BF;AACF;AQ5gCE;ECmGF;IDlGG,uBAAA;ER+gCD;AACF;AQ5gCC;EAEC;IC4FF;MD3FG,gFAhBc;IR8hCb;EACF;EQ5gCA;ICwFF;MDvFG,+DAAA;IR+gCC;EACF;AACF;AQ7gCE;ECmFF;IDlFG,uBAAA;ERghCD;AACF;ASt7BE;EACE,iCAAA;EACA,iCAAA;EACA,gBAAA;EAEA,yBAAA;EACA,sBAAA;ATu7BJ;AQziCE;EC4GA;ID3GC,iBAAA;ER4iCD;AACF;AQziCC;EAEC;ICqGA;MDpGC,0EAhBc;IR2jCb;EACF;EQziCA;ICiGA;MDhGC,4DAAA;IR4iCC;EACF;AACF;AQ1iCE;EC4FA;ID3FC,mBAAA;ER6iCD;AACF;ASx8BE;EACE,cAAA;AT08BJ;AQlkCE;ECuHA;IDtHC,qBAAA;ERqkCD;AACF;AQlkCC;EAEC;ICgHA;MD/GC,2EAbe;IRilCd;EACF;EQlkCA;IC4GA;MD3GC,2DAAA;IRqkCC;EACF;AACF;AQnkCE;ECuGA;IDtGC,mBAAA;ERskCD;AACF;AS19BE;EACE,cAAA;AT49BJ;AQ3lCE;EC8HA;ID7HC,qBAAA;ER8lCD;AACF;AQ3lCC;EAEC;ICuHA;MDtHC,2EAbe;IR0mCd;EACF;EQ3lCA;ICmHA;MDlHC,2DAAA;IR8lCC;EACF;AACF;AQ5lCE;EC8GA;ID7GC,mBAAA;ER+lCD;AACF;AS5+BE;EACE,cAAA;AT8+BJ;AQpnCE;ECqIA;IDpIC,qBAAA;ERunCD;AACF;AQpnCC;EAEC;IC8HA;MD7HC,2EAbe;IRmoCd;EACF;EQpnCA;IC0HA;MDzHC,2DAAA;IRunCC;EACF;AACF;AQrnCE;ECqHA;IDpHC,mBAAA;ERwnCD;AACF;AS9/BE;EACE,aAAA;EACA,QAAA;ATggCJ;AQ9oCE;EC4IA;ID3IC,uBAAA;ERipCD;AACF;AQ9oCC;EAEC;ICqIA;MDpIC,gFAhBc;IRgqCb;EACF;EQ9oCA;ICiIA;MDhIC,8DAAA;IRipCC;EACF;AACF;AQ/oCE;EC4HA;ID3HC,uBAAA;ERkpCD;AACF;ASxgCA;EACE,aAAA;EACA,mBAAA;EACA,QAAA;AT0gCF;ASvgCE;EACE,eAAA;EACA,gBAAA;EACA,eAAA;EACA,gBAAA;EACA,aAAA;EACA,kBAAA;EACA,4DAAA;EACA,aAAA;EACA,uBAAA;EACA,mBAAA;ATygCJ;ASpgCE;EACE,iBAAA;EACA,yCAAA;EACA,iBAAA;ATsgCJ;;ASr7BA;EACE,aAAA;EACA,8BAAA;EACA,gBAAA;EACA,aAAA;ATw7BF;ASv7BE;EALF;IAMI,0BAAA;ET07BF;AACF;ASp7BA;EACE,eAAA;EAEA,iCAAA;ATq7BF;ASp7BE;EAEE,gBAAA;EACA,gBAAA;EACA,sBAAA;ATq7BJ;AQ/sCE;ECsRA;IDrRC,kBAAA;ERktCD;AACF;AQ/sCC;EAEC;IC+QA;MD9QC,uEAhBc;IRiuCb;EACF;EQ/sCA;IC2QA;MD1QC,uDAAA;IRktCC;EACF;AACF;AQhtCE;ECsQA;IDrQC,eAAA;ERmtCD;AACF;AQruCE;ECsRA;IDrRC,mBAAA;ERwuCD;AACF;AQruCC;EAEC;IC+QA;MD9QC,0EAhBc;IRuvCb;EACF;EQruCA;IC2QA;MD1QC,4DAAA;IRwuCC;EACF;AACF;AQtuCE;ECsQA;IDrQC,qBAAA;ERyuCD;AACF;AS39BE;EAEE,gBAAA;EACA,iBAAA;AT49BJ;AQ/vCE;ECgSA;ID/RC,eAAA;ERkwCD;AACF;AQ/vCC;EAEC;ICyRA;MDxRC,uEAhBc;IRixCb;EACF;EQ/vCA;ICqRA;MDpRC,4DAAA;IRkwCC;EACF;AACF;AQhwCE;ECgRA;ID/QC,mBAAA;ERmwCD;AACF;;AQrxCE;EC0SE;IDzSD,sBAAA;ERyxCD;AACF;AQtxCC;EAEC;ICmSE;MDlSD,+EAbe;IRqyCd;EACF;EQtxCA;IC+RE;MD9RD,8DAAA;IRyxCC;EACF;AACF;AQvxCE;EC0RE;IDzRD,sBAAA;ER0xCD;AACF;ASv/BA;EACE,aAAA;EACA,eAAA;EACA,YAAA;EACA,8BAAA;EAEA,6BAAA;EAIA,yCAAA;EACA,gBAAA;EACA,iBAAA;ATq/BF;AQtzCE;ECqTF;IDpTG,mBAAA;ERyzCD;AACF;AQtzCC;EAEC;IC8SF;MD7SG,wEAhBc;IRw0Cb;EACF;EQtzCA;IC0SF;MDzSG,wDAAA;IRyzCC;EACF;AACF;AQvzCE;ECqSF;IDpSG,iBAAA;ER0zCD;AACF;AQ50CE;ECqTF;IDpTG,oBAAA;ER+0CD;AACF;AQ50CC;EAEC;IC8SF;MD7SG,6EAbe;IR21Cd;EACF;EQ50CA;IC0SF;MDzSG,6DAAA;IR+0CC;EACF;AACF;AQ70CE;ECqSF;IDpSG,mBAAA;ERg1CD;AACF;AUn6CE;EACE,aAAA;EACA,eAAA;EACA,iBAAA;AVq6CJ;AQv2CE;EEjEA;IFkEC,eAAA;ER02CD;AACF;AQv2CC;EAEC;IExEA;MFyEC,uEAhBc;IRy3Cb;EACF;EQv2CA;IE5EA;MF6EC,wDAAA;IR02CC;EACF;AACF;AQx2CE;EEjFA;IFkFC,gBAAA;ER22CD;AACF;;AUv7CA;EACE,iBAAA;EACA,iBAAA;AV07CF;AUz7CE;EAHF;IAII,aAAA;EV47CF;AACF;AU37CE;EANF;IAOI,cAAA;EV87CF;AACF;AU37CE;EACE,aAAA;EACA,uBAAA;AV67CJ;AU17CE;EAOE,aAAA;EACA,uBAAA;EACA,mBAAA;EACA,kBAAA;EACA,4DAAA;AVs7CJ;AQv5CE;EE1CA;IF2CC,kBAAA;ER05CD;AACF;AQv5CC;EAEC;IEjDA;MFkDC,0EAhBc;IRy6Cb;EACF;EQv5CA;IErDA;MFsDC,uDAAA;IR05CC;EACF;AACF;AQx5CE;EE1DA;IF2DC,kBAAA;ER25CD;AACF;AQ76CE;EE1CA;IF2CC,mBAAA;ERg7CD;AACF;AQ76CC;EAEC;IEjDA;MFkDC,2EAhBc;IR+7Cb;EACF;EQ76CA;IErDA;MFsDC,wDAAA;IRg7CC;EACF;AACF;AQ96CE;EE1DA;IF2DC,mBAAA;ERi7CD;AACF;AQn8CE;EE1CA;IF2CC,kBAAA;ERs8CD;AACF;AQn8CC;EAEC;IEjDA;MFkDC,0EAhBc;IRq9Cb;EACF;EQn8CA;IErDA;MFsDC,uDAAA;IRs8CC;EACF;AACF;AQp8CE;EE1DA;IF2DC,kBAAA;ERu8CD;AACF;AQz9CE;EE1CA;IF2CC,mBAAA;ER49CD;AACF;AQz9CC;EAEC;IEjDA;MFkDC,2EAhBc;IR2+Cb;EACF;EQz9CA;IErDA;MFsDC,wDAAA;IR49CC;EACF;AACF;AQ19CE;EE1DA;IF2DC,mBAAA;ER69CD;AACF;AQ/+CE;EE1CA;IF2CC,kBAAA;ERk/CD;AACF;AQ/+CC;EAEC;IEjDA;MFkDC,0EAhBc;IRigDb;EACF;EQ/+CA;IErDA;MFsDC,6DAAA;IRk/CC;EACF;AACF;AQh/CE;EE1DA;IF2DC,qBAAA;ERm/CD;AACF;AUniDI;EACE,eAAA;EACA,gBAAA;AVqiDN;AU1hDE;EACE,iCAAA;EAEA,gBAAA;EACA,gBAAA;EACA,sBAAA;EACA,qBAAA;AV2hDJ;AQhhDE;EEjBA;IFkBC,kBAAA;ERmhDD;AACF;AQhhDC;EAEC;IExBA;MFyBC,uEAhBc;IRkiDb;EACF;EQhhDA;IE5BA;MF6BC,uDAAA;IRmhDC;EACF;AACF;AQjhDE;EEjCA;IFkCC,eAAA;ERohDD;AACF;AU5iDE;EACE,yCAAA;EAEA,gBAAA;EACA,iBAAA;AV6iDJ;AQ3iDE;EENA;IFOC,eAAA;ER8iDD;AACF;AQ3iDC;EAEC;IEbA;MFcC,uEAhBc;IR6jDb;EACF;EQ3iDA;IEjBA;MFkBC,4DAAA;IR8iDC;EACF;AACF;AQ5iDE;EEtBA;IFuBC,mBAAA;ER+iDD;AACF","sourcesContent":["@use \"sass:math\";\r\n\r\n// Підключення міксинів ===========================================================================================================================================================================================================================================================================\r\n@import \"base/mixins\";\r\n\r\n// Підключення шрифтів ===========================================================================================================================================================================================================================================================================\r\n//&display=swap - додати при підключенні через плагін\r\n@import url(https://fonts.googleapis.com/css?family=Roboto:700&display=swap);\r\n@import url(\"https://fonts.googleapis.com/css2?family=Golos+Text:wght@400;500&display=swap\");\r\n// Підключити, якщо є локальні файли шрифтів\r\n@import \"fonts/fonts\";\r\n\r\n// Підключення іконкових шрифтів ==============================================================================================================================================================================================================================================================================\r\n// Підключити, якщо є файл іконкового шрифту\r\n@import \"fonts/icons\";\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// Налаштування шаблону ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// За замовчуванням шрифт ==============================================================================================================================================================================================================================================================================\r\n$fontFamily: \"Golos Text\", sans-serif;\r\n$fontSize: rem(16); // де 14(px) - розмір шрифту за замовчуванням з макету\r\n\r\n// Основні кольори\r\n//text\r\n$mainColor: #161616; // Колір шрифту за замовчуванням\r\n$darkGray: #757575;\r\n$lightGray: #9f9f9f;\r\n\r\n//bg\r\n$lightBlack: #202226;\r\n$darkWhite: #f4f5f8;\r\n\r\n//tags\r\n$red: #d21924;\r\n$blue: #2949b5;\r\n$green: #308d77;\r\n\r\n// Налаштування адаптивної сітки ===============================================================================================================================================================================================================================================================================================\r\n\r\n// Мінімальна ширина сторінки\r\n$minWidth: 320;\r\n// Ширина полотна (макету)\r\n$maxWidth: 1280;\r\n// Ширина обмежуючого контейнера (0 = немає обмеження)\r\n$maxWidthContainer: 1200;\r\n// Загальний відступ у контейнера\r\n// (30 = по 15px ліворуч і праворуч, 0 = немає відступу)\r\n$containerPadding: 30;\r\n\r\n// Ширина спрацьовування першого брейкпоінту\r\n$containerWidth: $maxWidthContainer + $containerPadding;\r\n\r\n// Брейк-поїнти\r\n$pc: em(\r\n  $containerWidth\r\n); // ПК, ноутбуки, деякі планшети у горизонтальному положенні\r\n$tablet: em(991.98); // Планшети, деякі телефони в горизонтальному положенні\r\n$mobile: em(767.98); // Телефони L\r\n$mobileSmall: em(479.98); // Телефони S\r\n\r\n// Тип адаптива:\r\n// 1 = чуйність (у контейнера немає брейкпоінтів),\r\n// 2 = по брейк-поїнт (контейнер змінює свою ширину по брейк-поїнт)\r\n$responsiveType: 1;\r\n\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n// ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\n// Обнулення ============================================================================================================================================================================================== =============================================================================================== ===============================================================================================\r\n@import \"base/null\";\r\n\r\n// Стилі тега BODY ============================================================================================================================================================================================================================================================================================================================================================================================\r\n\r\nbody {\r\n  // Скролл заблоковано\r\n  .lock & {\r\n    overflow: hidden;\r\n    touch-action: none;\r\n    overscroll-behavior: none;\r\n  }\r\n\r\n  // Сайт завантажений\r\n  .loaded & {\r\n  }\r\n}\r\n\r\n// Оболонка wrapper ============================================================================================================================================================================================================================================================================================================================================================================================================================================\r\n.wrapper {\r\n  min-height: 100%;\r\n  display: flex;\r\n  flex-direction: column;\r\n  overflow: hidden;\r\n\r\n  @supports (overflow: clip) {\r\n    overflow: clip;\r\n  }\r\n\r\n  // Притискаємо footer\r\n  > main {\r\n    flex: 1 1 auto;\r\n  }\r\n\r\n  // Фікс для слайдерів\r\n  > * {\r\n    min-width: 0;\r\n  }\r\n}\r\n\r\n//Для того чтобы не ломался слайдер при ресайзе\r\niframe#webpack-dev-server-client-overlay {\r\n  display: none !important;\r\n}\r\n\r\n// Обмежуючий контейнер ======================================================================================================================================================================================================================\r\n\r\n/*\r\n(i) Стилі будуть застосовуватись до\r\nвсіх класів, що містять *__container\r\nНаприклад header__container, main__container і т.п.\r\nСніппет (HTML): cnt\r\n*/\r\n@if ($responsiveType==1) {\r\n  // Чуйна\r\n  [class*=\"__container\"] {\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n      margin: 0 auto;\r\n    }\r\n\r\n    @if ($containerPadding>0) {\r\n      @if ($maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      } @else {\r\n        @include adaptiveValue(\r\n          \"padding-left\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n        @include adaptiveValue(\r\n          \"padding-right\",\r\n          math.div($containerPadding, 2),\r\n          15\r\n        );\r\n      }\r\n    }\r\n  }\r\n} @else {\r\n  // Брейк-поїнтами\r\n  [class*=\"__container\"] {\r\n    margin: 0 auto;\r\n\r\n    @if ($maxWidthContainer>0) {\r\n      max-width: rem($containerWidth);\r\n    } @else {\r\n      @if ($containerPadding>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n\r\n    @media (max-width: $pc) {\r\n      max-width: rem(970);\r\n    }\r\n\r\n    @media (max-width: $tablet) {\r\n      max-width: rem(750);\r\n    }\r\n\r\n    @media (max-width: $mobile) {\r\n      max-width: none;\r\n\r\n      @if ($containerPadding>0 and $maxWidthContainer>0) {\r\n        padding: 0 rem(math.div($containerPadding, 2));\r\n      }\r\n    }\r\n  }\r\n}\r\n\r\n// Підключення базових стилів, шаблонів (заготівель) та допоміжних класів\r\n// Для підключення/вимкнення конкретних стилів дивись base.scss\r\n@import \"base\";\r\n\r\n// Підключення стилів загальних елементів проекту\r\n@import \"common\";\r\n\r\n// Підключення стилів окремих блоків\r\n@import \"header\";\r\n@import \"footer\";\r\n@import \"advantages\";\r\n\r\n// Підключення стилів окремих сторінок\r\n@import \"home\";\r\n","@font-face {\n\tfont-family: icons;\n\tfont-display: swap;\n\tsrc: url(\"../fonts/icons.woff2\") format(\"woff2\"), url(\"../fonts/icons.woff\") format(\"woff\");\n\tfont-weight: 400;\n\tfont-style: normal;\n}\r\n","%ic {\r\n  font-family: \"icons\";\r\n  font-style: normal;\r\n  font-weight: normal;\r\n  font-variant: normal;\r\n  text-transform: none;\r\n  line-height: 1;\r\n  -webkit-font-smoothing: antialiased;\r\n  -moz-osx-font-smoothing: grayscale;\r\n}\r\n[class*=\"_icon-\"] {\r\n  &:before {\r\n    @extend %ic;\r\n    display: block;\r\n  }\r\n}\r\n\r\n._icon-settings:before {\r\n  content: \"\\e900\";\r\n}\r\n._icon-case:before {\r\n  content: \"\\e901\";\r\n}\r\n._icon-delivery:before {\r\n  content: \"\\e902\";\r\n}\r\n._icon-rent:before {\r\n  content: \"\\e903\";\r\n}\r\n._icon-youtube:before {\r\n  content: \"\\e904\";\r\n}\r\n._icon-instagram:before {\r\n  content: \"\\e905\";\r\n}\r\n._icon-guarantee:before {\r\n  content: \"\\e906\";\r\n}\r\n._icon-sale:before {\r\n  content: \"\\e907\";\r\n}\r\n._icon-arrow-down:before {\r\n  content: \"\\e908\";\r\n}\r\n._icon-burger:before {\r\n  content: \"\\e909\";\r\n}\r\n._icon-filter:before {\r\n  content: \"\\e90a\";\r\n}\r\n._icon-close:before {\r\n  content: \"\\e90b\";\r\n}\r\n._icon-all:before {\r\n  content: \"\\e90d\";\r\n}\r\n._icon-search:before {\r\n  content: \"\\e90e\";\r\n}\r\n._icon-cart:before {\r\n  content: \"\\e90f\";\r\n}\r\n._icon-service:before {\r\n  content: \"\\e912\";\r\n}\r\n","* {\r\n\tpadding: 0px;\r\n\tmargin: 0px;\r\n\tborder: 0px;\r\n}\r\n*,\r\n*:before,\r\n*:after {\r\n\tbox-sizing: border-box;\r\n}\r\n:focus,\r\n:active {\r\n\t// outline: none;\r\n}\r\na:focus,\r\na:active {\r\n\t// outline: none;\r\n}\r\nhtml,\r\nbody {\r\n\theight: 100%;\r\n\tmin-width: $minWidth + px;\r\n}\r\nbody {\r\n\tcolor: $mainColor;\r\n\tline-height: 1;\r\n\tfont-family: $fontFamily;\r\n\tfont-size: $fontSize;\r\n\t//text-rendering: optimizeLegibility;\r\n\t-ms-text-size-adjust: 100%;\r\n\t-moz-text-size-adjust: 100%;\r\n\t-webkit-text-size-adjust: 100%;\r\n\t-webkit-font-smoothing: antialiased;\r\n\t-moz-osx-font-smoothing: grayscale;\r\n}\r\ninput,\r\nbutton,\r\ntextarea {\r\n\tfont-family: $fontFamily;\r\n\tfont-size: inherit;\r\n}\r\nbutton {\r\n\tcursor: pointer;\r\n\tcolor: inherit;\r\n\tbackground-color: transparent;\r\n}\r\na {\r\n\tcolor: inherit;\r\n\ttext-decoration: none;\r\n}\r\nul li {\r\n\tlist-style: none;\r\n}\r\nimg {\r\n\tvertical-align: top;\r\n}\r\nh1,\r\nh2,\r\nh3,\r\nh4,\r\nh5,\r\nh6 {\r\n\tfont-weight: inherit;\r\n\tfont-size: inherit;\r\n}\r\n","//<BUTTONS (a.btn+tab)>\r\n// Сніппет (HTML): btn\r\n\r\n.button {\r\n  display: inline-flex;\r\n  padding: 12px 20px;\r\n  border-radius: 8px;\r\n  background-color: $lightBlack;\r\n  color: var(--text-white, #fff);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  transition: all 0.3s ease 0s;\r\n  white-space: nowrap;\r\n  @media (any-hover: hover) {\r\n    &:hover {\r\n      background-color: #2b2d32;\r\n    }\r\n  }\r\n  &._fw {\r\n    width: 100%;\r\n  }\r\n  &_gray {\r\n    color: #161616;\r\n    background-color: $darkWhite;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n  &_white {\r\n    color: #161616;\r\n    background-color: #fff;\r\n    @media (any-hover: hover) {\r\n      &:hover {\r\n        background-color: #f4f5f8;\r\n      }\r\n    }\r\n  }\r\n}\r\n","//<INPUT>\r\n// Сніппет (HTML): inp\r\ninput[type=\"text\"],\r\ninput[type=\"email\"],\r\ninput[type=\"tel\"],\r\ntextarea {\r\n  -webkit-appearance: none;\r\n  -moz-appearance: none;\r\n  appearance: none;\r\n}\r\n\r\n.input {\r\n  border-radius: 0 !important;\r\n  width: 100%;\r\n  display: block;\r\n  padding: 16px 0px;\r\n  background-color: transparent;\r\n  border-bottom: 2px solid #fff;\r\n  outline: none;\r\n  color: #fff;\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n\r\n  &._form-focus {\r\n  }\r\n  &._form-error {\r\n  }\r\n}\r\n.input[type=\"search\"] {\r\n  padding: 0px;\r\n  border: 1px solid #eee;\r\n  border-radius: 8px;\r\n  background: var(--background-gray, #f4f5f8);\r\n}\r\n.input[placeholder]:not([data-placeholder-nohiden]) {\r\n  &::placeholder {\r\n    transition: opacity 0.3s;\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n  }\r\n  &:focus::placeholder {\r\n    opacity: 0;\r\n  }\r\n}\r\n\r\ntextarea.input {\r\n  resize: none;\r\n  padding: 0px 0px;\r\n}\r\n","// Загальний файл елементів форм\r\n// Для підключення/відключення стилів конкретного елемента форми дивись base/forms/forms.scss\r\n@import \"base/forms/forms\";\r\n\r\n// Стилі попапів\r\n// @import \"base/popup\";\r\n\r\n// Стилі спойлерів\r\n// @import \"base/spollers\";\r\n\r\n// Стилі табів\r\n// @import \"base/tabs\";\r\n\r\n// Стилі мап\r\n// @import \"base/maps\";\r\n\r\n// Стилі блоку \"показати ще\"\r\n// @import \"base/showmore\";\r\n\r\n// Стилі для липкого блоку\r\n// @import \"base/sticky\";\r\n\r\n// Стилі для повноекранного блоку\r\n// @import \"base/fullscreen\";\r\n\r\n// Стилі для поекраної прокрутки\r\n// Styles for fullpage scroll\r\n// @import \"base/fullpage\";\r\n\r\n// Стилі для ripple ефекту\r\n// Styles for ripple effect\r\n// @import \"base/ripple\";\r\n\r\n// Стилі для кастомного курсору\r\n// Styles for custom cursor\r\n// @import \"base/cursor\";\r\n\r\n// Стилі для чуйних картинок (IBG)\r\n// Сніппет (HTML): ibg (div з картинкою та класами)\r\n// Сніппет (HTML): ibga (a з картинкою та класами)\r\n[class*=\"-ibg\"] {\r\n\tposition: relative;\r\n\timg {\r\n\t\tposition: absolute;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\tobject-fit: cover;\r\n\t}\r\n}\r\n[class*=\"-ibg_contain\"] {\r\n\timg {\r\n\t\tobject-fit: contain;\r\n\t}\r\n}\r\n\r\n// Шаблони (заготівлі)\r\n// @extend %ім'я шаблону;\r\n// Сніппет (SCSS): ex\r\n\r\n// Лічильник для списку\r\n%listCounter {\r\n\tlist-style-type: none;\r\n\tcounter-reset: item;\r\n\tli {\r\n\t\tposition: relative;\r\n\t\t&:before {\r\n\t\t\tcounter-increment: item;\r\n\t\t\tcontent: counter(item);\r\n\t\t\tposition: absolute;\r\n\t\t\tleft: 0;\r\n\t\t\ttop: 0;\r\n\t\t}\r\n\t}\r\n}\r\n// Адаптивне відео\r\n%responsiveVideo {\r\n\tposition: relative;\r\n\toverflow: hidden;\r\n\theight: 0;\r\n\tpadding-bottom: 56.25%;\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: absolute;\r\n\t\ttop: 0;\r\n\t\tleft: 0;\r\n\t\twidth: 100%;\r\n\t\theight: 100%;\r\n\t}\r\n}\r\n// Відео як фон\r\n%videoBackground {\r\n\tvideo,\r\n\tiframe,\r\n\tobject,\r\n\tembed {\r\n\t\tposition: fixed;\r\n\t\ttop: 50%;\r\n\t\tleft: 50%;\r\n\t\tmin-width: 100%;\r\n\t\tmin-height: 100%;\r\n\t\twidth: auto;\r\n\t\theight: auto;\r\n\t\tz-index: -100;\r\n\t\ttransform: translateX(-50%) translateY(-50%);\r\n\t\tbackground-size: cover;\r\n\t}\r\n}\r\n// Сірий фільтр\r\n%grayfilter {\r\n\ttransition: all 0.3s ease 0s;\r\n\tfilter: grayscale(1);\r\n\t@media (any-hover: hover) {\r\n\t\t&:hover {\r\n\t\t\tfilter: grayscale(0);\r\n\t\t}\r\n\t}\r\n}\r\n// Скасувати виділення\r\n%noselect {\r\n\tuser-select: none;\r\n}\r\n// Дзеркальне відображення\r\n%mirror {\r\n\ttransform: scale(-1, 1);\r\n}\r\n// Плавний скролл\r\n%smoothscroll {\r\n\t-webkit-overflow-scrolling: touch;\r\n}\r\n// Сховати скролл\r\n%hidescroll {\r\n\t&::-webkit-scrollbar {\r\n\t\tdisplay: none;\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.header {\r\n  position: fixed;\r\n  width: 100%;\r\n  top: 0;\r\n  left: 0;\r\n  z-index: 1000;\r\n  // .header__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .header__body\r\n\r\n  &__body {\r\n  }\r\n}\r\n.top-header {\r\n  background: var(--background-gray, #f4f5f8);\r\n  padding: rem(18) 0;\r\n  @include adaptiveValue(\"margin-bottom\", 28, 5);\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -100%);\r\n  }\r\n  // .top-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  &__right {\r\n    display: flex;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    font-size: rem(14);\r\n    font-weight: 400;\r\n    line-height: math.div(16, 14);\r\n    @include adaptiveValue(\"gap\", 80, 32, 0, 1280, 1024);\r\n    @media (max-width: $mobile) {\r\n      @include adaptiveValue(\"margin-left\", 94, 25, 0, 768, 320);\r\n      @include adaptiveValue(\"margin-right\", 69, 0, 0, 768, 320);\r\n      flex: 1 1 auto;\r\n      justify-content: space-between;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      margin-right: auto;\r\n      margin-left: auto;\r\n      justify-content: flex-end;\r\n      padding-left: rem(5);\r\n    }\r\n  }\r\n  &__links {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    column-gap: rem(32);\r\n    row-gap: rem(5);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n    @media (max-width: em(610)) {\r\n      display: none;\r\n    }\r\n  }\r\n  // .top-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n  }\r\n\r\n  // .top-header__logo\r\n\r\n  &__logo {\r\n  }\r\n\r\n  // .top-header__contacts\r\n\r\n  &__contacts {\r\n  }\r\n\r\n  // .top-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.header {\r\n  // .header__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.bottom-header {\r\n  transition: all 0.3s ease 0.2s;\r\n  .menu-open & {\r\n    transition: all 0.3s ease 0s;\r\n    transform: translate(0px, -175%);\r\n  }\r\n  // .bottom-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n  }\r\n  &__left {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    gap: rem(8);\r\n  }\r\n}\r\n\r\n.contacts-top-header {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  column-gap: rem(32);\r\n  row-gap: rem(5);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  // .contacts-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n}\r\n.right-top-header {\r\n  // .right-top-header__link\r\n\r\n  &__link {\r\n    transition: all 0.3s ease 0s;\r\n    &:hover {\r\n      color: $mainColor;\r\n    }\r\n  }\r\n\r\n  // .right-top-header__Link\r\n}\r\n.body-header {\r\n  @media (max-width: em(1024)) {\r\n    margin-bottom: rem(8);\r\n  }\r\n  // .body-header__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .body-header__content\r\n\r\n  &__content {\r\n    display: flex;\r\n    justify-content: space-between;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  // .body-header__menu\r\n\r\n  &__menu {\r\n  }\r\n\r\n  // .body-header__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.top-menu {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: center;\r\n\r\n  &__logo {\r\n    display: none;\r\n    @media (max-width: em(610)) {\r\n      margin-bottom: rem(44);\r\n      display: block;\r\n    }\r\n  }\r\n}\r\n.menu {\r\n  display: flex;\r\n  justify-content: center;\r\n  align-items: center;\r\n  // .menu__icon\r\n\r\n  // .menu__body\r\n\r\n  &__body {\r\n    @media (max-width: em(610)) {\r\n      padding: rem(24) rem(16);\r\n      position: fixed;\r\n      width: 100%;\r\n      height: 100%;\r\n      top: 0;\r\n      left: -100%;\r\n      background-color: $darkWhite;\r\n      transition: all 0.3s ease 0s;\r\n      z-index: 1;\r\n\r\n      .menu-open & {\r\n        transition: all 0.3s ease 0.2s;\r\n        left: 0;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__list\r\n\r\n  &__list {\r\n    display: flex;\r\n    align-items: center;\r\n    gap: rem(8);\r\n    flex-wrap: wrap;\r\n\r\n    @media (max-width: em(610)) {\r\n      flex-direction: column;\r\n      align-items: flex-start;\r\n      flex-wrap: nowrap;\r\n      overflow: auto;\r\n      max-height: 60%;\r\n    }\r\n  }\r\n\r\n  // .menu__item\r\n\r\n  &__item {\r\n    @media (max-width: em(610)) {\r\n      display: block;\r\n      position: relative;\r\n      padding-bottom: 16px;\r\n      width: 100%;\r\n      &::before {\r\n        content: \"\";\r\n        position: absolute;\r\n        width: 100%;\r\n        height: 1px;\r\n        bottom: 0;\r\n        left: 0;\r\n        background-color: #e9e9e9;\r\n      }\r\n    }\r\n  }\r\n\r\n  // .menu__link\r\n\r\n  &__link {\r\n    @media (max-width: em(610)) {\r\n      padding: 0;\r\n    }\r\n  }\r\n}\r\n\r\n.right-body-header {\r\n  display: flex;\r\n  justify-content: flex-end;\r\n  align-items: center;\r\n  gap: rem(8);\r\n  // .right-body-header__link\r\n\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n  }\r\n\r\n  &__form {\r\n  }\r\n  // .right-body-header__btn\r\n\r\n  &__btn {\r\n    @media (max-width: em(610)) {\r\n      position: absolute;\r\n      width: calc(100% - 15px);\r\n      display: block;\r\n      text-align: center;\r\n      bottom: 24px;\r\n      left: 50%;\r\n      transform: translate(-50%, 0px);\r\n    }\r\n  }\r\n  &__input {\r\n    //  width: 44px;\r\n    //  height: 44px;\r\n    //  &::-webkit-search-cancel-button {\r\n    //    -webkit-appearance: none;\r\n    //    height: 1em;\r\n    //    width: 1em;\r\n    //    border-radius: 50em;\r\n    //    background-image: url(https://pro.fontawesome.com/releases/v5.10.0/svgs/solid/times-circle.svg)\r\n    //      no-repeat 50% 50%;\r\n    //    background-size: contain;\r\n    //    opacity: 0;\r\n    //    pointer-events: none;\r\n    //  }\r\n  }\r\n}\r\n.form-right-body-header {\r\n  display: flex;\r\n  &__input {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 0;\r\n    padding: 0;\r\n    border: none !important;\r\n    position: relative;\r\n    outline: none;\r\n    &::-webkit-search-cancel-button {\r\n      -webkit-appearance: none;\r\n      pointer-events: none;\r\n    }\r\n  }\r\n  &__link {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n  }\r\n  &__close {\r\n    display: none;\r\n    cursor: pointer;\r\n    justify-content: center;\r\n    align-items: center;\r\n    width: 44px;\r\n    height: 44px;\r\n    position: relative;\r\n    z-index: 1;\r\n    margin-left: 8px;\r\n  }\r\n}\r\n//====================================================================================================\r\n\r\n//Burger\r\n\r\n.icon-menu {\r\n  display: none;\r\n\r\n  @media (max-width: em(610)) {\r\n    display: block;\r\n    position: relative;\r\n    padding: 13px 7px;\r\n    width: rem(44);\r\n    height: rem(44);\r\n    transition: all 0.3s ease 0s;\r\n    @media (any-hover: none) {\r\n      cursor: default;\r\n    }\r\n    span,\r\n    &::before,\r\n    &::after {\r\n      content: \"\";\r\n      transition: all 0.3s ease 0s;\r\n      right: 50%;\r\n      position: absolute;\r\n      width: percent(20, 44);\r\n      height: rem(3);\r\n      background-color: #161616;\r\n      transform: translate(50%, 0px);\r\n    }\r\n    &::before {\r\n      top: percent(12, 44);\r\n    }\r\n    &::after {\r\n      bottom: percent(12, 44);\r\n    }\r\n    span {\r\n      top: calc(50% - rem(1.5));\r\n    }\r\n    .menu-open & {\r\n      position: absolute;\r\n      right: 16px;\r\n      z-index: 3;\r\n      span {\r\n        width: 0;\r\n      }\r\n      &::before,\r\n      &::after {\r\n      }\r\n      &::before {\r\n        top: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(-45deg);\r\n      }\r\n      &::after {\r\n        bottom: calc(50% - rem(1.5));\r\n        transform: translate(50%, 50%) rotate(45deg);\r\n      }\r\n    }\r\n  }\r\n}\r\n","//Підключення шрифту\r\n@mixin font($font_name, $file_name, $weight, $style) {\r\n\t@font-face {\r\n\t\tfont-family: $font_name;\r\n\t\tfont-display: swap;\r\n\t\tsrc: url(\"../fonts/#{$file_name}.woff2\") format(\"woff2\"), url(\"../fonts/#{$file_name}.woff\") format(\"woff\");\r\n\t\tfont-weight: #{$weight};\r\n\t\tfont-style: #{$style};\r\n\t}\r\n}\r\n//Percent\r\n@function percent($px, $from) {\r\n\t$result: math.div($px, $from) * 100%;\r\n\t@return $result;\r\n}\r\n//REM\r\n@function rem($px) {\r\n\t$result: math.div($px, 16) + rem;\r\n\t@return $result;\r\n}\r\n//EM\r\n@function em($px, $current: 16) {\r\n\t$result: math.div($px, $current) + em;\r\n\t@return $result;\r\n}\r\n\r\n//Currency\r\n@mixin currency($sym) {\r\n\t&::after {\r\n\t\tcontent: \"#{$sym}\";\r\n\t}\r\n}\r\n\r\n// Grids\r\n@mixin gridCards($type: fit, $min: 280px, $max: 1fr, $gap: 30px) {\r\n\tdisplay: grid;\r\n\tgap: $gap;\r\n\tgrid-template-columns: repeat(auto-#{$type}, minmax($min, $max));\r\n}\r\n\r\n// Адаптивна властивість (clamp)\r\n@mixin adaptiveValue($property, $startSize, $minSize, $keepSize: 0, $widthFrom: $containerWidth, $widthTo: $minWidth) {\r\n\t@if ($startSize==0) {\r\n\t\t$startSize: 0.000001;\r\n\t}\r\n\t@if ($minSize==0) {\r\n\t\t$minSize: 0.000001;\r\n\t}\r\n\r\n\t// Для calc();\r\n\t$addSize: math.div($startSize - $minSize, 16);\r\n\r\n\t@if ($widthFrom == $containerWidth and $maxWidthContainer == 0) {\r\n\t\t$widthFrom: $maxWidth;\r\n\t}\r\n\r\n\t// Брейк-поїнти в EM\r\n\t$widthFromMedia: em($widthFrom);\r\n\t$widthToMedia: em($widthTo);\r\n\r\n\t// Формула плаваючого значення\r\n\t// Источник: https://css-tricks.com/linearly-scale-font-size-with-css-clamp-based-on-the-viewport/\r\n\t$slope: math.div(($startSize - $minSize), ($widthFrom - $widthTo));\r\n\t$yIntersection: -$widthTo * $slope + $minSize;\r\n\t@if ($yIntersection==0) {\r\n\t\t$yIntersection: 0.000001;\r\n\t}\r\n\t$flyValue: #{rem($yIntersection)}\" + \" #{$slope * 100}vw;\r\n\r\n\t// Отримання значення властивості\r\n\t$propertyValue: #{\"clamp(\" rem($minSize) \",\" $flyValue \",\" rem($startSize) \")\"};\r\n\t// Якщо негативні значення\r\n\t@if ($minSize > $startSize) {\r\n\t\t$propertyValue: #{\"clamp(\" rem($startSize) \",\" $flyValue \",\" rem($minSize) \")\"};\r\n\t}\r\n\r\n\t// Встановлюємо значення за замовчуванням\r\n\t@if $keepSize != 1 and $keepSize != 3 {\r\n\t\t@media (min-width: $widthFromMedia) {\r\n\t\t\t#{$property}: rem($startSize);\r\n\t\t}\r\n\t}\r\n\t// Адаптуємо розмір у проміжку між зазначеними ширинами в'юпорту\r\n\t@media (min-width: $widthToMedia) and (max-width: $widthFromMedia) {\r\n\t\t// Якщо підтримується clamp();\r\n\t\t@supports (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: $propertyValue;\r\n\t\t}\r\n\t\t// Якщо не підтримується clamp();\r\n\t\t@supports not (#{$property}: $propertyValue) {\r\n\t\t\t#{$property}: calc(#{rem($minSize)} + #{$addSize} * (100vw - #{rem($widthTo)}) / #{math.div($widthFrom, 16) - math.div($widthTo, 16)});\r\n\t\t}\r\n\t}\r\n\t@if $keepSize != 1 and $keepSize != 2 {\r\n\t\t@media (max-width: $widthToMedia) {\r\n\t\t\t#{$property}: rem($minSize);\r\n\t\t}\r\n\t}\r\n}\r\n","//====================================================================================================\r\n.footer {\r\n  // .footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.form-footer {\r\n  @include adaptiveValue(\"padding-top\", 120, 60);\r\n  @include adaptiveValue(\"padding-bottom\", 120, 60);\r\n  // .form-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .form-footer__content\r\n\r\n  &__content {\r\n    border-radius: 20px;\r\n    background: var(--background-black, #202226);\r\n    @include adaptiveValue(\"padding-top\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-bottom\", 60, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-left\", 40, 12, 0, 1024, 320);\r\n    @include adaptiveValue(\"padding-right\", 40, 12, 0, 1024, 320);\r\n    display: flex;\r\n    justify-content: space-between;\r\n    @include adaptiveValue(\"gap\", 116, 16);\r\n    @media (max-width: $mobile) {\r\n      flex-direction: column;\r\n    }\r\n  }\r\n\r\n  // .form-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .form-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-form-footer {\r\n  flex: 0 1 451px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .left-form-footer__title\r\n\r\n  &__title {\r\n    color: var(--text-white, #fff);\r\n    @include adaptiveValue(\"font-size\", 40, 24);\r\n    font-weight: 400;\r\n    line-height: math.div(48, 40);\r\n    @include adaptiveValue(\"margin-bottom\", 20, 12);\r\n  }\r\n\r\n  // .left-form-footer__desc\r\n\r\n  &__desc {\r\n    color: var(--text-gray-dark-bg, #9f9f9f);\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n\r\n.right-form-footer {\r\n  flex: 0 1 552px;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n  }\r\n  // .right-form-footer__form\r\n\r\n  &__form {\r\n  }\r\n\r\n  // .right-form-footer__input\r\n\r\n  &__input {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 20, 8);\r\n    }\r\n  }\r\n\r\n  &__btn {\r\n    @include adaptiveValue(\"margin-top\", 44, 32);\r\n  }\r\n}\r\n\r\n.bottom-footer {\r\n  background: var(--background-gray, #f4f5f8);\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  @include adaptiveValue(\"padding-bottom\", 24, 16);\r\n  // .bottom-footer__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .bottom-footer__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .bottom-footer__top\r\n\r\n  &__top {\r\n  }\r\n\r\n  // .bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .bottom-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n\r\n  // .bottom-footer__bottom\r\n\r\n  &__bottom {\r\n  }\r\n}\r\n.top-bottom-footer {\r\n  @include adaptiveValue(\"padding-bottom\", 28, 20);\r\n  border-bottom: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-bottom\", 40, 52);\r\n  // .top-bottom-footer__logo\r\n\r\n  &__logo {\r\n  }\r\n}\r\n.mid-bottom-footer {\r\n  display: flex;\r\n  @include adaptiveValue(\"gap\", 233, 16, 0, 1200, 944);\r\n  @media (max-width: $mobile) {\r\n    flex-direction: column;\r\n  }\r\n\r\n  //   display: grid;\r\n  //   grid-template: 1fr / minmax(288px, 389px) 1fr 288px 288px;\r\n  @media (max-width: em(1024)) {\r\n    //  grid-template: 1fr 1fr / minmax(288px, 389px) 16px 288px;\r\n    //  row-gap: 40px;\r\n  }\r\n  @media (max-width: $mobile) {\r\n    //  grid-template: 1fr 1fr / 1fr 1fr;\r\n    //  column-gap: 16px;\r\n    //  row-gap: 62px;\r\n  }\r\n  @media (max-width: $mobileSmall) {\r\n    //  display: flex;\r\n    //  flex-direction: column;\r\n    //  row-gap: 52px;\r\n  }\r\n\r\n  // .mid-bottom-footer__left\r\n\r\n  &__left {\r\n  }\r\n\r\n  // .mid-bottom-footer__mid\r\n\r\n  &__mid {\r\n  }\r\n\r\n  // .mid-bottom-footer__right\r\n\r\n  &__right {\r\n  }\r\n}\r\n.left-mid-footer {\r\n  flex: 0 1 389px;\r\n  //   grid-row: span 2;\r\n  @media (max-width: $mobile) {\r\n    flex: 1 1 auto;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 58);\r\n  }\r\n  // .left-mid-footer__text\r\n\r\n  &__text {\r\n    color: var(--text-black, #161616);\r\n    font-feature-settings: \"liga\" off;\r\n    font-weight: 500;\r\n    @include adaptiveValue(\"font-size\", 24, 18);\r\n    line-height: math.div(28, 24);\r\n    letter-spacing: 0.24px;\r\n  }\r\n\r\n  // .left-mid-footer__street\r\n\r\n  &__street {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__phone\r\n\r\n  &__phone {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 8, 16);\r\n  }\r\n\r\n  // .left-mid-footer__email\r\n\r\n  &__email {\r\n    display: block;\r\n    @include adaptiveValue(\"margin-bottom\", 24, 32);\r\n  }\r\n\r\n  // .left-mid-footer__btns\r\n\r\n  &__btns {\r\n    display: flex;\r\n    gap: 8px;\r\n    @include adaptiveValue(\"margin-bottom\", 62, 38);\r\n  }\r\n\r\n  // .left-mid-footer__btn\r\n\r\n  &__btn {\r\n  }\r\n\r\n  // .left-mid-footer__socials\r\n\r\n  &__socials {\r\n  }\r\n}\r\n.socials-left-mid-footer {\r\n  display: flex;\r\n  align-items: center;\r\n  gap: 8px;\r\n  // .socials-left-mid-footer__item\r\n\r\n  &__item {\r\n    min-width: 44px;\r\n    min-height: 44px;\r\n    max-width: 44px;\r\n    max-height: 44px;\r\n    padding: 10px;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n  }\r\n\r\n  // .socials-left-mid-footer__desc\r\n\r\n  &__desc {\r\n    margin-left: 16px;\r\n    color: var(--text-gray-light-bg, #757575);\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n// .mid-mid-bottom-footer {\r\n//   grid-column: 3;\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 1;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .mid-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .mid-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-mid-bottom-footer {\r\n//   // .list-mid-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-mid-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n// .right-mid-bottom-footer {\r\n//   grid-column: 4;\r\n//   @media (max-width: em(1024)) {\r\n//     grid-column: 3;\r\n//     grid-row: 2;\r\n//   }\r\n//   @media (max-width: $mobile) {\r\n//     grid-column: 2;\r\n//     grid-row: 2;\r\n//   }\r\n//   // .right-mid-bottom-footer__title\r\n\r\n//   &__title {\r\n//     color: var(--text-black, #161616);\r\n//     @include adaptiveValue(\"font-size\", 20, 16);\r\n//     font-weight: 500;\r\n//     line-height: math.div(24, 20);\r\n//     letter-spacing: -0.6px;\r\n//     @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n//   }\r\n\r\n//   // .right-mid-bottom-footer__list\r\n\r\n//   &__list {\r\n//   }\r\n// }\r\n// .list-right-bottom-footer {\r\n//   // .list-right-bottom-footer__item\r\n\r\n//   &__item {\r\n//     &:not(:last-child) {\r\n//       @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n//     }\r\n//   }\r\n\r\n//   // .list-right-bottom-footer__link\r\n\r\n//   &__link {\r\n//     @include adaptiveValue(\"font-size\", 16, 14);\r\n//   }\r\n// }\r\n.right-mid-bottom-footer {\r\n  display: grid;\r\n  grid-template-columns: 1fr 1fr;\r\n  column-gap: 16px;\r\n  row-gap: 40px;\r\n  @media (max-width: em(1024)) {\r\n    grid-template-columns: 1fr;\r\n  }\r\n  // .right-mid-bottom-footer__item\r\n\r\n  &__item {\r\n  }\r\n}\r\n.item-right-footer {\r\n  flex: 0 1 288px;\r\n  // .item-right-footer__title\r\n  color: var(--text-black, #161616);\r\n  &__title {\r\n    @include adaptiveValue(\"font-size\", 20, 16);\r\n    font-weight: 500;\r\n    line-height: math.div(24, 20);\r\n    letter-spacing: -0.6px;\r\n    @include adaptiveValue(\"margin-bottom\", 32, 24);\r\n  }\r\n\r\n  // .item-right-footer__list\r\n\r\n  &__list {\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n.list-item-right-footer {\r\n  // .list-item-right-footer__item\r\n\r\n  &__item {\r\n    &:not(:last-child) {\r\n      @include adaptiveValue(\"margin-bottom\", 12, 20);\r\n    }\r\n  }\r\n\r\n  // .list-item-right-footer__link\r\n\r\n  &__link {\r\n  }\r\n}\r\n\r\n.bottom-bottom-footer {\r\n  display: flex;\r\n  flex-wrap: wrap;\r\n  row-gap: 8px;\r\n  justify-content: space-between;\r\n  @include adaptiveValue(\"padding-top\", 24, 16);\r\n  border-top: 1px solid #e9e9e9;\r\n  @include adaptiveValue(\"margin-top\", 42, 52);\r\n  // .bottom-bottom-footer__copyright\r\n\r\n  color: var(--text-gray-light-bg, #757575);\r\n  font-weight: 400;\r\n  line-height: math.div(20, 16);\r\n  &__copyright {\r\n  }\r\n\r\n  // .bottom-bottom-footer__policy\r\n\r\n  &__policy {\r\n  }\r\n}\r\n\r\n//====================================================================================================\r\n",".advantages {\r\n  // .advantages__container\r\n\r\n  &__container {\r\n  }\r\n\r\n  // .advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .advantages__cards\r\n\r\n  &__cards {\r\n    display: flex;\r\n    flex-wrap: wrap;\r\n    margin: 0 rem(-8);\r\n    @include adaptiveValue(\"row-gap\", 40, 20);\r\n  }\r\n}\r\n.card-advantages {\r\n  flex: 0 1 33.333%;\r\n  padding: 0 rem(8);\r\n  @media (max-width: em(1024)) {\r\n    flex: 0 1 50%;\r\n  }\r\n  @media (max-width: $mobileSmall) {\r\n    flex: 1 1 100%;\r\n  }\r\n  // .card-advantages__body\r\n\r\n  &__body {\r\n    display: flex;\r\n    align-items: flex-start;\r\n  }\r\n\r\n  &__img {\r\n    @include adaptiveValue(\"max-width\", 60, 44);\r\n    @include adaptiveValue(\"max-height\", 60, 44);\r\n    @include adaptiveValue(\"min-width\", 60, 44);\r\n    @include adaptiveValue(\"max-height\", 60, 44);\r\n\r\n    @include adaptiveValue(\"margin-right\", 16, 12);\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    border-radius: 8px;\r\n    border: 1px solid var(--border-or-devider-light-bg, #e9e9e9);\r\n    img {\r\n      max-width: 24px;\r\n      max-height: 24px;\r\n    }\r\n  }\r\n\r\n  // .card-advantages__content\r\n\r\n  &__content {\r\n  }\r\n\r\n  // .card-advantages__title\r\n\r\n  &__title {\r\n    color: var(--text-black, #161616);\r\n    @include adaptiveValue(\"font-size\", 20, 16);\r\n    font-weight: 500;\r\n    line-height: math.div(24, 20);\r\n    letter-spacing: -0.6px;\r\n    margin-bottom: rem(8);\r\n  }\r\n\r\n  // .card-advantages__desc\r\n\r\n  &__desc {\r\n    color: var(--text-gray-light-bg, #757575);\r\n    @include adaptiveValue(\"font-size\", 16, 14);\r\n    font-weight: 400;\r\n    line-height: math.div(20, 16);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("acf8e767b640744ff7eb")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5jMTUzZjQ2NjNiZjRlN2VhNmRlZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDNkc7QUFDakI7QUFDNUYsOEJBQThCLG1GQUEyQixDQUFDLDRGQUFxQztBQUMvRix1SEFBdUg7QUFDdkgsbUhBQW1ILGtCQUFrQjtBQUNySTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDLE9BQU8sb2VBQW9lLE1BQU0sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLEtBQUssS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxVQUFVLE9BQU8sUUFBUSxXQUFXLE9BQU8sT0FBTyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sUUFBUSxZQUFZLFlBQVksT0FBTyxNQUFNLFVBQVUsVUFBVSxXQUFXLE9BQU8sTUFBTSxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE1BQU0sV0FBVyxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssVUFBVSxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLE9BQU8sTUFBTSxXQUFXLE9BQU8sVUFBVSxLQUFLLEtBQUssV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxXQUFXLFlBQVksWUFBWSxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsTUFBTSxNQUFNLFNBQVMsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsT0FBTyxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxPQUFPLE1BQU0sVUFBVSxXQUFXLE9BQU8sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxVQUFVLFVBQVUsV0FBVyxPQUFPLE1BQU0sV0FBVyxPQUFPLE1BQU0sVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLE1BQU0sTUFBTSxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxNQUFNLE1BQU0sTUFBTSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssTUFBTSxhQUFhLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssS0FBSyxNQUFNLE1BQU0sV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxNQUFNLGFBQWEsTUFBTSxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxLQUFLLE1BQU0sTUFBTSxZQUFZLE1BQU0sS0FBSyxNQUFNLE1BQU0sWUFBWSxNQUFNLEtBQUssTUFBTSxLQUFLLE1BQU0sYUFBYSxNQUFNLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLEtBQUssTUFBTSxNQUFNLFlBQVksTUFBTSxLQUFLLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sS0FBSyxNQUFNLFVBQVUsVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxLQUFLLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxPQUFPLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sS0FBSyxXQUFXLE1BQU0sS0FBSyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLFdBQVcsTUFBTSxNQUFNLFdBQVcsT0FBTyxNQUFNLEtBQUssV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsTUFBTSxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxVQUFVLE1BQU0sTUFBTSxNQUFNLFVBQVUsV0FBVyxXQUFXLE1BQU0sTUFBTSxLQUFLLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksWUFBWSxVQUFVLE1BQU0sTUFBTSxXQUFXLFVBQVUsTUFBTSxLQUFLLE1BQU0sVUFBVSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sS0FBSyxXQUFXLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsVUFBVSxVQUFVLFVBQVUsVUFBVSxXQUFXLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsTUFBTSxNQUFNLEtBQUssV0FBVyxXQUFXLFVBQVUsV0FBVyxVQUFVLFVBQVUsV0FBVyxNQUFNLEtBQUssTUFBTSxVQUFVLE1BQU0sTUFBTSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxXQUFXLFVBQVUsTUFBTSxNQUFNLFdBQVcsV0FBVyxNQUFNLE1BQU0sVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsVUFBVSxNQUFNLE1BQU0sVUFBVSxVQUFVLFdBQVcsV0FBVyxVQUFVLFVBQVUsV0FBVyxVQUFVLFdBQVcsT0FBTyxNQUFNLFVBQVUsTUFBTSxNQUFNLEtBQUssVUFBVSxXQUFXLFdBQVcsVUFBVSxVQUFVLFdBQVcsTUFBTSxLQUFLLE1BQU0sS0FBSyxVQUFVLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxXQUFXLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLE1BQU0sTUFBTSxXQUFXLFVBQVUsVUFBVSxNQUFNLE1BQU0sVUFBVSxNQUFNLE1BQU0sV0FBVyxXQUFXLE1BQU0sTUFBTSxXQUFXLFdBQVcsTUFBTSxNQUFNLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxVQUFVLFdBQVcsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sV0FBVyxXQUFXLFdBQVcsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLE9BQU8sVUFBVSxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssS0FBSyxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLEtBQUssS0FBSyxPQUFPLEtBQUssV0FBVyxPQUFPLE1BQU0sT0FBTyxXQUFXLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxLQUFLLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLEtBQUssWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLEtBQUssT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxXQUFXLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLE9BQU8sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxVQUFVLFVBQVUsT0FBTyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLFVBQVUsT0FBTyxPQUFPLFVBQVUsV0FBVyxVQUFVLFdBQVcsVUFBVSxXQUFXLFdBQVcsVUFBVSxXQUFXLFdBQVcsT0FBTyxPQUFPLFdBQVcsV0FBVyxXQUFXLFFBQVEsT0FBTyxVQUFVLFdBQVcsV0FBVyxVQUFVLE9BQU8sT0FBTyxLQUFLLFdBQVcsT0FBTyxLQUFLLE9BQU8sVUFBVSxXQUFXLE9BQU8sT0FBTyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxXQUFXLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLE1BQU0sT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxVQUFVLFdBQVcsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsVUFBVSxXQUFXLE9BQU8sT0FBTyxNQUFNLFdBQVcsT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sTUFBTSxPQUFPLFdBQVcsV0FBVyxPQUFPLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssT0FBTyxVQUFVLFdBQVcsT0FBTyxPQUFPLFVBQVUsV0FBVyxXQUFXLFdBQVcsV0FBVyxPQUFPLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxLQUFLLE1BQU0sYUFBYSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLEtBQUssTUFBTSxhQUFhLE9BQU8sS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssS0FBSyxPQUFPLE1BQU0sWUFBWSxPQUFPLEtBQUssT0FBTyxNQUFNLFlBQVksT0FBTyxLQUFLLE9BQU8sS0FBSyxNQUFNLGFBQWEsT0FBTyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxLQUFLLE9BQU8sTUFBTSxZQUFZLE9BQU8sS0FBSyxPQUFPLFVBQVUsV0FBVyxPQUFPLE9BQU8sV0FBVyxXQUFXLFdBQVcsV0FBVyxXQUFXLE9BQU8sT0FBTyxNQUFN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eUIsc0NBQXNDLCtCQUErQiwwREFBMEQsT0FBTyx3REFBd0Qsc0RBQXNELHlCQUF5QixzQ0FBc0MsT0FBTyxLQUFLLDZCQUE2Qix5REFBeUQsNEJBQTRCLDREQUE0RCxTQUFTLE9BQU8sNkRBQTZELE9BQU8sS0FBSywrQkFBK0Isb0JBQW9CLHNCQUFzQixtQkFBbUIscUNBQXFDLHNEQUFzRCxvQ0FBb0MscURBQXFELDZGQUE2Rix1QkFBdUIsb0NBQW9DLG9CQUFvQixPQUFPLCtEQUErRCxPQUFPLEtBQUssa0lBQWtJLHVEQUF1RCxPQUFPLHVEQUF1RCxPQUFPLG1EQUFtRCxzQkFBc0Isd0JBQXdCLDBCQUEwQixvREFBb0QsT0FBTyxLQUFLLHNCQUFzQix3QkFBd0Isd0JBQXdCLG9DQUFvQyxzQkFBc0IsT0FBTyx3Q0FBd0MsdUJBQXVCLE9BQU8sa0RBQWtELHNCQUFzQixnQ0FBZ0MsT0FBTyxrQkFBa0Isc0RBQXNELHVEQUF1RCxzREFBc0QsdURBQXVELDZEQUE2RCxzQkFBc0IsZ0NBQWdDLDRCQUE0QiwyQkFBMkIscUVBQXFFLGFBQWEsMEJBQTBCLDJCQUEyQixTQUFTLE9BQU8sNERBQTRELE9BQU8sd0RBQXdELDBDQUEwQyxzREFBc0QseUJBQXlCLHNDQUFzQywrQkFBK0IsOEJBQThCLE9BQU8sc0RBQXNELGtEQUFrRCxzREFBc0QseUJBQXlCLHNDQUFzQyxPQUFPLEtBQUssdUJBQXVCO0FBQ2w1bUQ7QUFDQSxpRUFBZSx1QkFBdUIsRUFBQzs7Ozs7Ozs7O1VDdHBEdkMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mbHMtc3RhcnQvLi9zcmMvc2Nzcy9zdHlsZS5zY3NzIiwid2VicGFjazovL2Zscy1zdGFydC93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PVJvYm90bzo3MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9R29sb3MrVGV4dDp3Z2h0QDQwMDs1MDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIGBAY2hhcnNldCBcIlVURi04XCI7XG5AZm9udC1mYWNlIHtcbiAgZm9udC1mYW1pbHk6IGljb25zO1xuICBmb250LWRpc3BsYXk6IHN3YXA7XG4gIHNyYzogdXJsKFwiLi4vZm9udHMvaWNvbnMud29mZjJcIikgZm9ybWF0KFwid29mZjJcIiksIHVybChcIi4uL2ZvbnRzL2ljb25zLndvZmZcIikgZm9ybWF0KFwid29mZlwiKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xufVxuW2NsYXNzKj1faWNvbi1dOmJlZm9yZSB7XG4gIGZvbnQtZmFtaWx5OiBcImljb25zXCI7XG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDtcbiAgZm9udC12YXJpYW50OiBub3JtYWw7XG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xuICBsaW5lLWhlaWdodDogMTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbltjbGFzcyo9X2ljb24tXTpiZWZvcmUge1xuICBkaXNwbGF5OiBibG9jaztcbn1cblxuLl9pY29uLXNldHRpbmdzOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDBcIjtcbn1cblxuLl9pY29uLWNhc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwMVwiO1xufVxuXG4uX2ljb24tZGVsaXZlcnk6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwMlwiO1xufVxuXG4uX2ljb24tcmVudDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTAzXCI7XG59XG5cbi5faWNvbi15b3V0dWJlOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDRcIjtcbn1cblxuLl9pY29uLWluc3RhZ3JhbTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA1XCI7XG59XG5cbi5faWNvbi1ndWFyYW50ZWU6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwNlwiO1xufVxuXG4uX2ljb24tc2FsZTpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA3XCI7XG59XG5cbi5faWNvbi1hcnJvdy1kb3duOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MDhcIjtcbn1cblxuLl9pY29uLWJ1cmdlcjpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTA5XCI7XG59XG5cbi5faWNvbi1maWx0ZXI6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwYVwiO1xufVxuXG4uX2ljb24tY2xvc2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkwYlwiO1xufVxuXG4uX2ljb24tYWxsOmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MGRcIjtcbn1cblxuLl9pY29uLXNlYXJjaDpiZWZvcmUge1xuICBjb250ZW50OiBcIlxcXFxlOTBlXCI7XG59XG5cbi5faWNvbi1jYXJ0OmJlZm9yZSB7XG4gIGNvbnRlbnQ6IFwiXFxcXGU5MGZcIjtcbn1cblxuLl9pY29uLXNlcnZpY2U6YmVmb3JlIHtcbiAgY29udGVudDogXCJcXFxcZTkxMlwiO1xufVxuXG4qIHtcbiAgcGFkZGluZzogMHB4O1xuICBtYXJnaW46IDBweDtcbiAgYm9yZGVyOiAwcHg7XG59XG5cbiosXG4qOmJlZm9yZSxcbio6YWZ0ZXIge1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xufVxuXG5odG1sLFxuYm9keSB7XG4gIGhlaWdodDogMTAwJTtcbiAgbWluLXdpZHRoOiAzMjBweDtcbn1cblxuYm9keSB7XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBsaW5lLWhlaWdodDogMTtcbiAgZm9udC1mYW1pbHk6IFwiR29sb3MgVGV4dFwiLCBzYW5zLXNlcmlmO1xuICBmb250LXNpemU6IDFyZW07XG4gIC1tcy10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xuICAtbW96LXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XG4gIC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcbiAgLXdlYmtpdC1mb250LXNtb290aGluZzogYW50aWFsaWFzZWQ7XG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XG59XG5cbmlucHV0LFxuYnV0dG9uLFxudGV4dGFyZWEge1xuICBmb250LWZhbWlseTogXCJHb2xvcyBUZXh0XCIsIHNhbnMtc2VyaWY7XG4gIGZvbnQtc2l6ZTogaW5oZXJpdDtcbn1cblxuYnV0dG9uIHtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBjb2xvcjogaW5oZXJpdDtcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG59XG5cbmEge1xuICBjb2xvcjogaW5oZXJpdDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xufVxuXG51bCBsaSB7XG4gIGxpc3Qtc3R5bGU6IG5vbmU7XG59XG5cbmltZyB7XG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XG59XG5cbmgxLFxuaDIsXG5oMyxcbmg0LFxuaDUsXG5oNiB7XG4gIGZvbnQtd2VpZ2h0OiBpbmhlcml0O1xuICBmb250LXNpemU6IGluaGVyaXQ7XG59XG5cbi5sb2NrIGJvZHkge1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB0b3VjaC1hY3Rpb246IG5vbmU7XG4gIG92ZXJzY3JvbGwtYmVoYXZpb3I6IG5vbmU7XG59XG4ud3JhcHBlciB7XG4gIG1pbi1oZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIG92ZXJmbG93OiBoaWRkZW47XG59XG5Ac3VwcG9ydHMgKG92ZXJmbG93OiBjbGlwKSB7XG4gIC53cmFwcGVyIHtcbiAgICBvdmVyZmxvdzogY2xpcDtcbiAgfVxufVxuLndyYXBwZXIgPiBtYWluIHtcbiAgZmxleDogMSAxIGF1dG87XG59XG4ud3JhcHBlciA+ICoge1xuICBtaW4td2lkdGg6IDA7XG59XG5cbmlmcmFtZSN3ZWJwYWNrLWRldi1zZXJ2ZXItY2xpZW50LW92ZXJsYXkge1xuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XG59XG5cbi8qXG4oaSkg0KHRgtC40LvRliDQsdGD0LTRg9GC0Ywg0LfQsNGB0YLQvtGB0L7QstGD0LLQsNGC0LjRgdGMINC00L5cbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcbtCd0LDQv9GA0LjQutC70LDQtCBoZWFkZXJfX2NvbnRhaW5lciwgbWFpbl9fY29udGFpbmVyINGWINGCLtC/Llxu0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBjbnRcbiovXG5bY2xhc3MqPV9fY29udGFpbmVyXSB7XG4gIG1heC13aWR0aDogNzYuODc1cmVtO1xuICBtYXJnaW46IDAgYXV0bztcbiAgcGFkZGluZzogMCAwLjkzNzVyZW07XG59XG5cbi5idXR0b24ge1xuICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgcGFkZGluZzogMTJweCAyMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJhY2tncm91bmQtY29sb3I6ICMyMDIyMjY7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlLCAjZmZmKTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG59XG5AbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcbiAgLmJ1dHRvbjpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJiMmQzMjtcbiAgfVxufVxuLmJ1dHRvbi5fZncge1xuICB3aWR0aDogMTAwJTtcbn1cbi5idXR0b25fZ3JheSB7XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjRmNWY4O1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5idXR0b25fZ3JheTpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2U5ZTllOTtcbiAgfVxufVxuLmJ1dHRvbl93aGl0ZSB7XG4gIGNvbG9yOiAjMTYxNjE2O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xufVxuQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XG4gIC5idXR0b25fd2hpdGU6aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG4gIH1cbn1cblxuaW5wdXRbdHlwZT10ZXh0XSxcbmlucHV0W3R5cGU9ZW1haWxdLFxuaW5wdXRbdHlwZT10ZWxdLFxudGV4dGFyZWEge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIC1tb3otYXBwZWFyYW5jZTogbm9uZTtcbiAgYXBwZWFyYW5jZTogbm9uZTtcbn1cblxuLmlucHV0IHtcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogYmxvY2s7XG4gIHBhZGRpbmc6IDE2cHggMHB4O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmZmY7XG4gIG91dGxpbmU6IG5vbmU7XG4gIGNvbG9yOiAjZmZmO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbi5pbnB1dFt0eXBlPXNlYXJjaF0ge1xuICBwYWRkaW5nOiAwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkICNlZWU7XG4gIGJvcmRlci1yYWRpdXM6IDhweDtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcbn1cblxuLmlucHV0W3BsYWNlaG9sZGVyXTpub3QoW2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlbl0pOjpwbGFjZWhvbGRlciB7XG4gIHRyYW5zaXRpb246IG9wYWNpdHkgMC4zcztcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1kYXJrLWJnLCAjOWY5ZjlmKTtcbn1cbi5pbnB1dFtwbGFjZWhvbGRlcl06bm90KFtkYXRhLXBsYWNlaG9sZGVyLW5vaGlkZW5dKTpmb2N1czo6cGxhY2Vob2xkZXIge1xuICBvcGFjaXR5OiAwO1xufVxuXG50ZXh0YXJlYS5pbnB1dCB7XG4gIHJlc2l6ZTogbm9uZTtcbiAgcGFkZGluZzogMHB4IDBweDtcbn1cblxuW2NsYXNzKj0taWJnXSB7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbltjbGFzcyo9LWliZ10gaW1nIHtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxMDAlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIG9iamVjdC1maXQ6IGNvdmVyO1xufVxuXG5bY2xhc3MqPS1pYmdfY29udGFpbl0gaW1nIHtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmhlYWRlciB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgd2lkdGg6IDEwMCU7XG4gIHRvcDogMDtcbiAgbGVmdDogMDtcbiAgei1pbmRleDogMTAwMDtcbn1cbi50b3AtaGVhZGVyIHtcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcbiAgcGFkZGluZzogMS4xMjVyZW0gMDtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC50b3AtaGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMzEyNXJlbSAsIC0wLjE5Mjk5NDUwNTVyZW0gICsgIDIuNTI3NDcyNTI3NXZ3ICwgMS43NXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuMzEyNXJlbSAsIC0wLjE5Mjk5NDUwNTVyZW0gICsgIDIuNTI3NDcyNTI3NXZ3ICwgMS43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC4zMTI1cmVtICwgLTAuMTkyOTk0NTA1NXJlbSAgKyAgMi41Mjc0NzI1Mjc1dncgLCAxLjc1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuMzEyNXJlbSArIDEuNDM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudG9wLWhlYWRlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC4zMTI1cmVtO1xuICB9XG59XG4ubWVudS1vcGVuIC50b3AtaGVhZGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTAwJSk7XG59XG4udG9wLWhlYWRlcl9fcmlnaHQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcbiAgZm9udC1zaXplOiAwLjg3NXJlbTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMTQyODU3MTQyOTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA4MGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgZ2FwOiA1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkgYW5kIChtYXgtd2lkdGg6IDgwZW0pIHtcbiAgQHN1cHBvcnRzIChnYXA6IGNsYW1wKCAycmVtICwgLTEwcmVtICArICAxOC43NXZ3ICwgNXJlbSApKSB7XG4gICAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICAgIGdhcDogY2xhbXAoIDJyZW0gLCAtMTByZW0gICsgIDE4Ljc1dncgLCA1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDJyZW0gLCAtMTByZW0gICsgIDE4Ljc1dncgLCA1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgZ2FwOiBjYWxjKDJyZW0gKyAzICogKDEwMHZ3IC0gNjRyZW0pIC8gMTYpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBnYXA6IDJyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtaW4td2lkdGg6IDQ4ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tbGVmdDogNS44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIC0xLjUxNzg1NzE0MjlyZW0gICsgIDE1LjQwMTc4NTcxNDN2dyAsIDUuODc1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNsYW1wKCAxLjU2MjVyZW0gLCAtMS41MTc4NTcxNDI5cmVtICArICAxNS40MDE3ODU3MTQzdncgLCA1Ljg3NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tbGVmdDogY2xhbXAoIDEuNTYyNXJlbSAsIC0xLjUxNzg1NzE0MjlyZW0gICsgIDE1LjQwMTc4NTcxNDN2dyAsIDUuODc1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgbWFyZ2luLWxlZnQ6IGNhbGMoMS41NjI1cmVtICsgNC4zMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gMjgpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgbWFyZ2luLWxlZnQ6IDEuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA0OGVtKSB7XG4gIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgbWFyZ2luLXJpZ2h0OiA0LjMxMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDQ4ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4wODAzNTcwMzU3cmVtICArICAxNS40MDE3ODU0OTExdncgLCA0LjMxMjVyZW0gKSkge1xuICAgIC50b3AtaGVhZGVyX19yaWdodCB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjAwMDAwMDA2MjVyZW0gLCAtMy4wODAzNTcwMzU3cmVtICArICAxNS40MDE3ODU0OTExdncgLCA0LjMxMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXJpZ2h0OiBjbGFtcCggMC4wMDAwMDAwNjI1cmVtICwgLTMuMDgwMzU3MDM1N3JlbSAgKyAgMTUuNDAxNzg1NDkxMXZ3ICwgNC4zMTI1cmVtICkpIHtcbiAgICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgICAgbWFyZ2luLXJpZ2h0OiBjYWxjKDAuMDAwMDAwMDYyNXJlbSArIDQuMzEyNDk5OTM3NSAqICgxMDB2dyAtIDIwcmVtKSAvIDI4KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSBhbmQgKG1heC13aWR0aDogMjBlbSkge1xuICAudG9wLWhlYWRlcl9fcmlnaHQge1xuICAgIG1hcmdpbi1yaWdodDogMC4wMDAwMDAwNjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLnRvcC1oZWFkZXJfX3JpZ2h0IHtcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuMzEyNXJlbTtcbiAgfVxufVxuLnRvcC1oZWFkZXJfX2xpbmtzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBjb2x1bW4tZ2FwOiAycmVtO1xuICByb3ctZ2FwOiAwLjMxMjVyZW07XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAudG9wLWhlYWRlcl9fbGlua3Mge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAudG9wLWhlYWRlcl9fbGlua3Mge1xuICAgIGRpc3BsYXk6IG5vbmU7XG4gIH1cbn1cbi50b3AtaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuLmJvdHRvbS1oZWFkZXIge1xuICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDAuMnM7XG59XG4ubWVudS1vcGVuIC5ib3R0b20taGVhZGVyIHtcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTc1JSk7XG59XG4uYm90dG9tLWhlYWRlcl9fY29udGVudCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2Vlbjtcbn1cbi5ib3R0b20taGVhZGVyX19sZWZ0IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBnYXA6IDAuNXJlbTtcbn1cblxuLmNvbnRhY3RzLXRvcC1oZWFkZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LXdyYXA6IHdyYXA7XG4gIGNvbHVtbi1nYXA6IDJyZW07XG4gIHJvdy1nYXA6IDAuMzEyNXJlbTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5jb250YWN0cy10b3AtaGVhZGVyIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4uY29udGFjdHMtdG9wLWhlYWRlcl9fbGluayB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4uY29udGFjdHMtdG9wLWhlYWRlcl9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMTYxNjE2O1xufVxuXG4ucmlnaHQtdG9wLWhlYWRlcl9fbGluayB7XG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG59XG4ucmlnaHQtdG9wLWhlYWRlcl9fbGluazpob3ZlciB7XG4gIGNvbG9yOiAjMTYxNjE2O1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNjRlbSkge1xuICAuYm9keS1oZWFkZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuLmJvZHktaGVhZGVyX19jb250ZW50IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi50b3AtbWVudSB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbn1cbi50b3AtbWVudV9fbG9nbyB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLnRvcC1tZW51X19sb2dvIHtcbiAgICBtYXJnaW4tYm90dG9tOiAyLjc1cmVtO1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICB9XG59XG5cbi5tZW51IHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLm1lbnVfX2JvZHkge1xuICAgIHBhZGRpbmc6IDEuNXJlbSAxcmVtO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDEwMCU7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IC0xMDAlO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcbiAgICB6LWluZGV4OiAxO1xuICB9XG4gIC5tZW51LW9wZW4gLm1lbnVfX2JvZHkge1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcbiAgICBsZWZ0OiAwO1xuICB9XG59XG4ubWVudV9fbGlzdCB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGdhcDogMC41cmVtO1xuICBmbGV4LXdyYXA6IHdyYXA7XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLm1lbnVfX2xpc3Qge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG4gICAgZmxleC13cmFwOiBub3dyYXA7XG4gICAgb3ZlcmZsb3c6IGF1dG87XG4gICAgbWF4LWhlaWdodDogNjAlO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLm1lbnVfX2l0ZW0ge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuICAubWVudV9faXRlbTo6YmVmb3JlIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBoZWlnaHQ6IDFweDtcbiAgICBib3R0b206IDA7XG4gICAgbGVmdDogMDtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLm1lbnVfX2xpbmsge1xuICAgIHBhZGRpbmc6IDA7XG4gIH1cbn1cblxuLnJpZ2h0LWJvZHktaGVhZGVyIHtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZ2FwOiAwLjVyZW07XG59XG4ucmlnaHQtYm9keS1oZWFkZXJfX2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAucmlnaHQtYm9keS1oZWFkZXJfX2J0biB7XG4gICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgYm90dG9tOiAyNHB4O1xuICAgIGxlZnQ6IDUwJTtcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpO1xuICB9XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlcl9faW5wdXQge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDA7XG4gIHBhZGRpbmc6IDA7XG4gIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gIG91dGxpbmU6IG5vbmU7XG59XG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlcl9faW5wdXQ6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XG4gIHBvaW50ZXItZXZlbnRzOiBub25lO1xufVxuLmZvcm0tcmlnaHQtYm9keS1oZWFkZXJfX2xpbmsge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xufVxuLmZvcm0tcmlnaHQtYm9keS1oZWFkZXJfX2Nsb3NlIHtcbiAgZGlzcGxheTogbm9uZTtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgd2lkdGg6IDQ0cHg7XG4gIGhlaWdodDogNDRweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuICB6LWluZGV4OiAxO1xuICBtYXJnaW4tbGVmdDogOHB4O1xufVxuXG4uaWNvbi1tZW51IHtcbiAgZGlzcGxheTogbm9uZTtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkge1xuICAuaWNvbi1tZW51IHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgcGFkZGluZzogMTNweCA3cHg7XG4gICAgd2lkdGg6IDIuNzVyZW07XG4gICAgaGVpZ2h0OiAyLjc1cmVtO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAzOC4xMjVlbSkgYW5kIChhbnktaG92ZXI6IG5vbmUpIHtcbiAgLmljb24tbWVudSB7XG4gICAgY3Vyc29yOiBkZWZhdWx0O1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMzguMTI1ZW0pIHtcbiAgLmljb24tbWVudSBzcGFuLCAuaWNvbi1tZW51OjpiZWZvcmUsIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBjb250ZW50OiBcIlwiO1xuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XG4gICAgcmlnaHQ6IDUwJTtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgd2lkdGg6IDQ1LjQ1NDU0NTQ1NDUlO1xuICAgIGhlaWdodDogMC4xODc1cmVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwcHgpO1xuICB9XG4gIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiAyNy4yNzI3MjcyNzI3JTtcbiAgfVxuICAuaWNvbi1tZW51OjphZnRlciB7XG4gICAgYm90dG9tOiAyNy4yNzI3MjcyNzI3JTtcbiAgfVxuICAuaWNvbi1tZW51IHNwYW4ge1xuICAgIHRvcDogY2FsYyg1MCUgLSAwLjA5Mzc1cmVtKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnUge1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICByaWdodDogMTZweDtcbiAgICB6LWluZGV4OiAzO1xuICB9XG4gIC5tZW51LW9wZW4gLmljb24tbWVudSBzcGFuIHtcbiAgICB3aWR0aDogMDtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmJlZm9yZSB7XG4gICAgdG9wOiBjYWxjKDUwJSAtIDAuMDkzNzVyZW0pO1xuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoLTQ1ZGVnKTtcbiAgfVxuICAubWVudS1vcGVuIC5pY29uLW1lbnU6OmFmdGVyIHtcbiAgICBib3R0b206IGNhbGMoNTAlIC0gMC4wOTM3NXJlbSk7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCA1MCUpIHJvdGF0ZSg0NWRlZyk7XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5mb3JtLWZvb3RlciB7XG4gICAgcGFkZGluZy10b3A6IDcuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDMuNzVyZW0gLCAyLjQzMTMxODY4MTNyZW0gICsgIDYuNTkzNDA2NTkzNHZ3ICwgNy41cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKHBhZGRpbmctdG9wOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygzLjc1cmVtICsgMy43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXIge1xuICAgIHBhZGRpbmctdG9wOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmZvcm0tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogNy41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjbGFtcCggMy43NXJlbSAsIDIuNDMxMzE4NjgxM3JlbSAgKyAgNi41OTM0MDY1OTM0dncgLCA3LjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAzLjc1cmVtICwgMi40MzEzMTg2ODEzcmVtICArICA2LjU5MzQwNjU5MzR2dyAsIDcuNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctYm90dG9tOiBjYWxjKDMuNzVyZW0gKyAzLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDMuNzVyZW07XG4gIH1cbn1cbi5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmxhY2ssICMyMDIyMjYpO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXRvcDogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLXRvcDogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAwLjc1cmVtICwgLTAuNjEzNjM2MzYzNnJlbSAgKyAgNi44MTgxODE4MTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy10b3A6IGNhbGMoMC43NXJlbSArIDMgKiAoMTAwdncgLSAyMHJlbSkgLyA0NCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctdG9wOiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAzLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDAuNzVyZW0gLCAtMC42MTM2MzYzNjM2cmVtICArICA2LjgxODE4MTgxODJ2dyAsIDMuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgLTAuNjEzNjM2MzYzNnJlbSAgKyAgNi44MTgxODE4MTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNhbGMoMC43NXJlbSArIDMgKiAoMTAwdncgLSAyMHJlbSkgLyA0NCk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctYm90dG9tOiAwLjc1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNjRlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIHBhZGRpbmctbGVmdDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKSkge1xuICAgIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgICBwYWRkaW5nLWxlZnQ6IGNsYW1wKCAwLjc1cmVtICwgLTAuMDQ1NDU0NTQ1NXJlbSAgKyAgMy45NzcyNzI3MjczdncgLCAyLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1sZWZ0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1sZWZ0OiBjYWxjKDAuNzVyZW0gKyAxLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNDQpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBwYWRkaW5nLWxlZnQ6IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA2NGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogMi41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgQHN1cHBvcnRzIChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1yaWdodDogY2xhbXAoIDAuNzVyZW0gLCAtMC4wNDU0NTQ1NDU1cmVtICArICAzLjk3NzI3MjcyNzN2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXJpZ2h0OiBjbGFtcCggMC43NXJlbSAsIC0wLjA0NTQ1NDU0NTVyZW0gICsgIDMuOTc3MjcyNzI3M3Z3ICwgMi41cmVtICkpIHtcbiAgICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgICAgcGFkZGluZy1yaWdodDogY2FsYygwLjc1cmVtICsgMS43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDQ0KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgcGFkZGluZy1yaWdodDogMC43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5mb3JtLWZvb3Rlcl9fY29udGVudCB7XG4gICAgZ2FwOiA3LjI1cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMXJlbSAsIC0xLjE5NzgwMjE5NzhyZW0gICsgIDEwLjk4OTAxMDk4OXZ3ICwgNy4yNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIGdhcDogY2xhbXAoIDFyZW0gLCAtMS4xOTc4MDIxOTc4cmVtICArICAxMC45ODkwMTA5ODl2dyAsIDcuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZ2FwOiBjbGFtcCggMXJlbSAsIC0xLjE5NzgwMjE5NzhyZW0gICsgIDEwLjk4OTAxMDk4OXZ3ICwgNy4yNXJlbSApKSB7XG4gICAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICAgIGdhcDogY2FsYygxcmVtICsgNi4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuZm9ybS1mb290ZXJfX2NvbnRlbnQge1xuICAgIGdhcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIHtcbiAgLmZvcm0tZm9vdGVyX19jb250ZW50IHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICB9XG59XG4ubGVmdC1mb3JtLWZvb3RlciB7XG4gIGZsZXg6IDAgMSA0NTFweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgY29sb3I6IHZhcigtLXRleHQtd2hpdGUsICNmZmYpO1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAyLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjE0ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMi41cmVtICkpIHtcbiAgICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjbGFtcCggMS41cmVtICwgMS4xNDgzNTE2NDg0cmVtICArICAxLjc1ODI0MTc1ODJ2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjVyZW0gLCAxLjE0ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMi41cmVtICkpIHtcbiAgICAubGVmdC1mb3JtLWZvb3Rlcl9fdGl0bGUge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuNXJlbSArIDEgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMC41NzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIDAuNTc0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjc1cmVtICwgMC41NzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDAuNzVyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtZm9ybS1mb290ZXJfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAwLjc1cmVtO1xuICB9XG59XG4ubGVmdC1mb3JtLWZvb3Rlcl9fZGVzYyB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktZGFyay1iZywgIzlmOWY5Zik7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKSkge1xuICAgIC5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjg3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjIHtcbiAgICBmb250LXNpemU6IDAuODc1cmVtO1xuICB9XG59XG5cbi5yaWdodC1mb3JtLWZvb3RlciB7XG4gIGZsZXg6IDAgMSA1NTJweDtcbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA0Ny45OTg3NWVtKSB7XG4gIC5yaWdodC1mb3JtLWZvb3RlciB7XG4gICAgZmxleDogMSAxIGF1dG87XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAucmlnaHQtZm9ybS1mb290ZXJfX2lucHV0Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMC4yMzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC41cmVtICwgMC4yMzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDAuMjM2MjYzNzM2M3JlbSAgKyAgMS4zMTg2ODEzMTg3dncgLCAxLjI1cmVtICkpIHtcbiAgICAucmlnaHQtZm9ybS1mb290ZXJfX2lucHV0Om5vdCg6bGFzdC1jaGlsZCkge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygwLjVyZW0gKyAwLjc1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5yaWdodC1mb3JtLWZvb3Rlcl9faW5wdXQ6bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyX19idG4ge1xuICAgIG1hcmdpbi10b3A6IDIuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tdG9wOiBjbGFtcCggMnJlbSAsIDEuNzM2MjYzNzM2M3JlbSAgKyAgMS4zMTg2ODEzMTg3dncgLCAyLjc1cmVtICkpIHtcbiAgICAucmlnaHQtZm9ybS1mb290ZXJfX2J0biB7XG4gICAgICBtYXJnaW4tdG9wOiBjbGFtcCggMnJlbSAsIDEuNzM2MjYzNzM2M3JlbSAgKyAgMS4zMTg2ODEzMTg3dncgLCAyLjc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi10b3A6IGNsYW1wKCAycmVtICwgMS43MzYyNjM3MzYzcmVtICArICAxLjMxODY4MTMxODd2dyAsIDIuNzVyZW0gKSkge1xuICAgIC5yaWdodC1mb3JtLWZvb3Rlcl9fYnRuIHtcbiAgICAgIG1hcmdpbi10b3A6IGNhbGMoMnJlbSArIDAuNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLnJpZ2h0LWZvcm0tZm9vdGVyX19idG4ge1xuICAgIG1hcmdpbi10b3A6IDJyZW07XG4gIH1cbn1cblxuLmJvdHRvbS1mb290ZXIge1xuICBiYWNrZ3JvdW5kOiB2YXIoLS1iYWNrZ3JvdW5kLWdyYXksICNmNGY1ZjgpO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApKSB7XG4gICAgLmJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLXRvcDogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLXRvcDogY2FsYygxcmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApKSB7XG4gICAgLmJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChwYWRkaW5nLWJvdHRvbTogY2xhbXAoIDFyZW0gLCAwLjgyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMS41cmVtICkpIHtcbiAgICAuYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxcmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLnRvcC1ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLWJvdHRvbTogMS43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHBhZGRpbmctYm90dG9tOiBjbGFtcCggMS4yNXJlbSAsIDEuMDc0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjc1cmVtICkpIHtcbiAgICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgICAgcGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMS4wNzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNzVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy1ib3R0b206IGNsYW1wKCAxLjI1cmVtICwgMS4wNzQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNzVyZW0gKSkge1xuICAgIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgICBwYWRkaW5nLWJvdHRvbTogY2FsYygxLjI1cmVtICsgMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgcGFkZGluZy1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAzLjUxMzczNjI2MzdyZW0gICsgIC0xLjMxODY4MTMxODd2dyAsIDMuMjVyZW0gKSkge1xuICAgIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMi41cmVtICwgMy41MTM3MzYyNjM3cmVtICArICAtMS4zMTg2ODEzMTg3dncgLCAzLjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjVyZW0gLCAzLjUxMzczNjI2MzdyZW0gICsgIC0xLjMxODY4MTMxODd2dyAsIDMuMjVyZW0gKSkge1xuICAgIC50b3AtYm90dG9tLWZvb3RlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDMuMjVyZW0gKyAtMC43NSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAudG9wLWJvdHRvbS1mb290ZXIge1xuICAgIG1hcmdpbi1ib3R0b206IDMuMjVyZW07XG4gIH1cbn1cbi5taWQtYm90dG9tLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzVlbSkge1xuICAubWlkLWJvdHRvbS1mb290ZXIge1xuICAgIGdhcDogMTQuNTYyNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDU5ZW0pIGFuZCAobWF4LXdpZHRoOiA3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZ2FwOiBjbGFtcCggMXJlbSAsIC00OS4wMTE3MTg3NXJlbSAgKyAgODQuNzY1NjI1dncgLCAxNC41NjI1cmVtICkpIHtcbiAgICAubWlkLWJvdHRvbS1mb290ZXIge1xuICAgICAgZ2FwOiBjbGFtcCggMXJlbSAsIC00OS4wMTE3MTg3NXJlbSAgKyAgODQuNzY1NjI1dncgLCAxNC41NjI1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKGdhcDogY2xhbXAoIDFyZW0gLCAtNDkuMDExNzE4NzVyZW0gICsgIDg0Ljc2NTYyNXZ3ICwgMTQuNTYyNXJlbSApKSB7XG4gICAgLm1pZC1ib3R0b20tZm9vdGVyIHtcbiAgICAgIGdhcDogY2FsYygxcmVtICsgMTMuNTYyNSAqICgxMDB2dyAtIDU5cmVtKSAvIDE2KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiA1OWVtKSB7XG4gIC5taWQtYm90dG9tLWZvb3RlciB7XG4gICAgZ2FwOiAxcmVtO1xuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubWlkLWJvdHRvbS1mb290ZXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXIge1xuICBmbGV4OiAwIDEgMzg5cHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICBmbGV4OiAxIDEgYXV0bztcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAzLjg3NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDQ3Ljk5ODc1ZW0pIGFuZCAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMy42MjVyZW0gLCAzLjUzNzA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMy44NzVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXIge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDMuNjI1cmVtICwgMy41MzcwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDMuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAzLjYyNXJlbSAsIDMuNTM3MDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAzLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3RlciB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDMuNjI1cmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogNDcuOTk4NzVlbSkgYW5kIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3RlciB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy42MjVyZW07XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXJfX3RleHQge1xuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XG4gIGZvbnQtZmVhdHVyZS1zZXR0aW5nczogXCJsaWdhXCIgb2ZmO1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4xNjY2NjY2NjY3O1xuICBsZXR0ZXItc3BhY2luZzogMC4yNHB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX3RleHQge1xuICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAoZm9udC1zaXplOiBjbGFtcCggMS4xMjVyZW0gLCAwLjk5MzEzMTg2ODFyZW0gICsgIDAuNjU5MzQwNjU5M3Z3ICwgMS41cmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX190ZXh0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDEuMTI1cmVtICwgMC45OTMxMzE4NjgxcmVtICArICAwLjY1OTM0MDY1OTN2dyAsIDEuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxLjEyNXJlbSAsIDAuOTkzMTMxODY4MXJlbSAgKyAgMC42NTkzNDA2NTkzdncgLCAxLjVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3RleHQge1xuICAgICAgZm9udC1zaXplOiBjYWxjKDEuMTI1cmVtICsgMC4zNzUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dCB7XG4gICAgZm9udC1zaXplOiAxLjEyNXJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fc3RyZWV0IHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fc3RyZWV0IHtcbiAgICBtYXJnaW4tYm90dG9tOiAxLjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDIuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygycmVtICsgLTAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19zdHJlZXQge1xuICAgIG1hcmdpbi1ib3R0b206IDJyZW07XG4gIH1cbn1cbi5sZWZ0LW1pZC1mb290ZXJfX3Bob25lIHtcbiAgZGlzcGxheTogYmxvY2s7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAxLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDFyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX3Bob25lIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAwLjVyZW0gLCAxLjE3NTgyNDE3NThyZW0gICsgIC0wLjg3OTEyMDg3OTF2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDAuNXJlbSAsIDEuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxcmVtICsgLTAuNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19waG9uZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMXJlbTtcbiAgfVxufVxuLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWwge1xuICBkaXNwbGF5OiBibG9jaztcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDIuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMnJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fZW1haWwge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDIuMTc1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMi4xNzU4MjQxNzU4cmVtICArICAtMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAubGVmdC1taWQtZm9vdGVyX19lbWFpbCB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDJyZW0gKyAtMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX2VtYWlsIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG4ubGVmdC1taWQtZm9vdGVyX19idG5zIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZ2FwOiA4cHg7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gICAgbWFyZ2luLWJvdHRvbTogMy44NzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMi4zNzVyZW0gLCAxLjg0NzUyNzQ3MjVyZW0gICsgIDIuNjM3MzYyNjM3NHZ3ICwgMy44NzVyZW0gKSkge1xuICAgIC5sZWZ0LW1pZC1mb290ZXJfX2J0bnMge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2xhbXAoIDIuMzc1cmVtICwgMS44NDc1Mjc0NzI1cmVtICArICAyLjYzNzM2MjYzNzR2dyAsIDMuODc1cmVtICk7XG4gICAgfVxuICB9XG4gIEBzdXBwb3J0cyBub3QgKG1hcmdpbi1ib3R0b206IGNsYW1wKCAyLjM3NXJlbSAsIDEuODQ3NTI3NDcyNXJlbSAgKyAgMi42MzczNjI2Mzc0dncgLCAzLjg3NXJlbSApKSB7XG4gICAgLmxlZnQtbWlkLWZvb3Rlcl9fYnRucyB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDIuMzc1cmVtICsgMS41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5sZWZ0LW1pZC1mb290ZXJfX2J0bnMge1xuICAgIG1hcmdpbi1ib3R0b206IDIuMzc1cmVtO1xuICB9XG59XG4uc29jaWFscy1sZWZ0LW1pZC1mb290ZXIge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBnYXA6IDhweDtcbn1cbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3Rlcl9faXRlbSB7XG4gIG1pbi13aWR0aDogNDRweDtcbiAgbWluLWhlaWdodDogNDRweDtcbiAgbWF4LXdpZHRoOiA0NHB4O1xuICBtYXgtaGVpZ2h0OiA0NHB4O1xuICBwYWRkaW5nOiAxMHB4O1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1vci1kZXZpZGVyLWxpZ2h0LWJnLCAjZTllOWU5KTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4uc29jaWFscy1sZWZ0LW1pZC1mb290ZXJfX2Rlc2Mge1xuICBtYXJnaW4tbGVmdDogMTZweDtcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuXG4ucmlnaHQtbWlkLWJvdHRvbS1mb290ZXIge1xuICBkaXNwbGF5OiBncmlkO1xuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XG4gIGNvbHVtbi1nYXA6IDE2cHg7XG4gIHJvdy1nYXA6IDQwcHg7XG59XG5AbWVkaWEgKG1heC13aWR0aDogNjRlbSkge1xuICAucmlnaHQtbWlkLWJvdHRvbS1mb290ZXIge1xuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xuICB9XG59XG4uaXRlbS1yaWdodC1mb290ZXIge1xuICBmbGV4OiAwIDEgMjg4cHg7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcbn1cbi5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogMS4yO1xuICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgIGZvbnQtc2l6ZTogMS4yNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MTIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDEuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMXJlbSAsIDAuOTEyMDg3OTEyMXJlbSAgKyAgMC40Mzk1NjA0Mzk2dncgLCAxLjI1cmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDFyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICBtYXJnaW4tYm90dG9tOiAycmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAobWFyZ2luLWJvdHRvbTogY2xhbXAoIDEuNXJlbSAsIDEuMzI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAycmVtICkpIHtcbiAgICAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlIHtcbiAgICAgIG1hcmdpbi1ib3R0b206IGNsYW1wKCAxLjVyZW0gLCAxLjMyNDE3NTgyNDJyZW0gICsgIDAuODc5MTIwODc5MXZ3ICwgMnJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMS41cmVtICwgMS4zMjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDJyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fdGl0bGUge1xuICAgICAgbWFyZ2luLWJvdHRvbTogY2FsYygxLjVyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLml0ZW0tcmlnaHQtZm9vdGVyX190aXRsZSB7XG4gICAgbWFyZ2luLWJvdHRvbTogMS41cmVtO1xuICB9XG59XG4uaXRlbS1yaWdodC1mb290ZXJfX2xpc3Qge1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMS4yNTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX2xpc3Qge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLml0ZW0tcmlnaHQtZm9vdGVyX19saXN0IHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKSkge1xuICAgIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdCB7XG4gICAgICBmb250LXNpemU6IGNhbGMoMC44NzVyZW0gKyAwLjEyNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuaXRlbS1yaWdodC1mb290ZXJfX2xpc3Qge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1cblxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDAuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIDEuNDI1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIDEuNDI1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tYm90dG9tOiBjbGFtcCggMC43NXJlbSAsIDEuNDI1ODI0MTc1OHJlbSAgKyAgLTAuODc5MTIwODc5MXZ3ICwgMS4yNXJlbSApKSB7XG4gICAgLmxpc3QtaXRlbS1yaWdodC1mb290ZXJfX2l0ZW06bm90KDpsYXN0LWNoaWxkKSB7XG4gICAgICBtYXJnaW4tYm90dG9tOiBjYWxjKDEuMjVyZW0gKyAtMC41ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19pdGVtOm5vdCg6bGFzdC1jaGlsZCkge1xuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XG4gIH1cbn1cbi5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogd3JhcDtcbiAgcm93LWdhcDogOHB4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCAjZTllOWU5O1xuICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjU7XG59XG5AbWVkaWEgKG1pbi13aWR0aDogNzYuODc1ZW0pIHtcbiAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMS41cmVtO1xuICB9XG59XG5AbWVkaWEgKG1pbi13aWR0aDogMjBlbSkgYW5kIChtYXgtd2lkdGg6IDc2Ljg3NWVtKSB7XG4gIEBzdXBwb3J0cyAocGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApKSB7XG4gICAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjbGFtcCggMXJlbSAsIDAuODI0MTc1ODI0MnJlbSAgKyAgMC44NzkxMjA4NzkxdncgLCAxLjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAocGFkZGluZy10b3A6IGNsYW1wKCAxcmVtICwgMC44MjQxNzU4MjQycmVtICArICAwLjg3OTEyMDg3OTF2dyAsIDEuNXJlbSApKSB7XG4gICAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICAgIHBhZGRpbmctdG9wOiBjYWxjKDFyZW0gKyAwLjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcbiAgICBwYWRkaW5nLXRvcDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMi42MjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXJnaW4tdG9wOiBjbGFtcCggMi42MjVyZW0gLCAzLjQ2OTc4MDIxOThyZW0gICsgIC0xLjA5ODkwMTA5ODl2dyAsIDMuMjVyZW0gKSkge1xuICAgIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgICBtYXJnaW4tdG9wOiBjbGFtcCggMi42MjVyZW0gLCAzLjQ2OTc4MDIxOThyZW0gICsgIC0xLjA5ODkwMTA5ODl2dyAsIDMuMjVyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAobWFyZ2luLXRvcDogY2xhbXAoIDIuNjI1cmVtICwgMy40Njk3ODAyMTk4cmVtICArICAtMS4wOTg5MDEwOTg5dncgLCAzLjI1cmVtICkpIHtcbiAgICAuYm90dG9tLWJvdHRvbS1mb290ZXIge1xuICAgICAgbWFyZ2luLXRvcDogY2FsYygzLjI1cmVtICsgLTAuNjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5ib3R0b20tYm90dG9tLWZvb3RlciB7XG4gICAgbWFyZ2luLXRvcDogMy4yNXJlbTtcbiAgfVxufVxuLmFkdmFudGFnZXNfX2NhcmRzIHtcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuICBtYXJnaW46IDAgLTAuNXJlbTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuYWR2YW50YWdlc19fY2FyZHMge1xuICAgIHJvdy1nYXA6IDIuNXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKHJvdy1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC44MTA0Mzk1NjA0cmVtICArICAyLjE5NzgwMjE5Nzh2dyAsIDIuNXJlbSApKSB7XG4gICAgLmFkdmFudGFnZXNfX2NhcmRzIHtcbiAgICAgIHJvdy1nYXA6IGNsYW1wKCAxLjI1cmVtICwgMC44MTA0Mzk1NjA0cmVtICArICAyLjE5NzgwMjE5Nzh2dyAsIDIuNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChyb3ctZ2FwOiBjbGFtcCggMS4yNXJlbSAsIDAuODEwNDM5NTYwNHJlbSAgKyAgMi4xOTc4MDIxOTc4dncgLCAyLjVyZW0gKSkge1xuICAgIC5hZHZhbnRhZ2VzX19jYXJkcyB7XG4gICAgICByb3ctZ2FwOiBjYWxjKDEuMjVyZW0gKyAxLjI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5hZHZhbnRhZ2VzX19jYXJkcyB7XG4gICAgcm93LWdhcDogMS4yNXJlbTtcbiAgfVxufVxuXG4uY2FyZC1hZHZhbnRhZ2VzIHtcbiAgZmxleDogMCAxIDMzLjMzMyU7XG4gIHBhZGRpbmc6IDAgMC41cmVtO1xufVxuQG1lZGlhIChtYXgtd2lkdGg6IDY0ZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlcyB7XG4gICAgZmxleDogMCAxIDUwJTtcbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDI5Ljk5ODc1ZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlcyB7XG4gICAgZmxleDogMSAxIDEwMCU7XG4gIH1cbn1cbi5jYXJkLWFkdmFudGFnZXNfX2JvZHkge1xuICBkaXNwbGF5OiBmbGV4O1xuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcbn1cbi5jYXJkLWFkdmFudGFnZXNfX2ltZyB7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA4cHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1vci1kZXZpZGVyLWxpZ2h0LWJnLCAjZTllOWU5KTtcbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1heC13aWR0aDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1heC13aWR0aDogY2xhbXAoIDIuNzVyZW0gLCAyLjM5ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgICAgIG1heC13aWR0aDogY2xhbXAoIDIuNzVyZW0gLCAyLjM5ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXgtd2lkdGg6IGNsYW1wKCAyLjc1cmVtICwgMi4zOTgzNTE2NDg0cmVtICArICAxLjc1ODI0MTc1ODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5jYXJkLWFkdmFudGFnZXNfX2ltZyB7XG4gICAgICBtYXgtd2lkdGg6IGNhbGMoMi43NXJlbSArIDEgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgICBtYXgtd2lkdGg6IDIuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1heC1oZWlnaHQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXgtaGVpZ2h0OiBjbGFtcCggMi43NXJlbSAsIDIuMzk4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgICAgbWF4LWhlaWdodDogY2xhbXAoIDIuNzVyZW0gLCAyLjM5ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXgtaGVpZ2h0OiBjbGFtcCggMi43NXJlbSAsIDIuMzk4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgICAgbWF4LWhlaWdodDogY2FsYygyLjc1cmVtICsgMSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1heC1oZWlnaHQ6IDIuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1pbi13aWR0aDogMy43NXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1pbi13aWR0aDogY2xhbXAoIDIuNzVyZW0gLCAyLjM5ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMy43NXJlbSApKSB7XG4gICAgLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgICAgIG1pbi13aWR0aDogY2xhbXAoIDIuNzVyZW0gLCAyLjM5ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtaW4td2lkdGg6IGNsYW1wKCAyLjc1cmVtICwgMi4zOTgzNTE2NDg0cmVtICArICAxLjc1ODI0MTc1ODJ2dyAsIDMuNzVyZW0gKSkge1xuICAgIC5jYXJkLWFkdmFudGFnZXNfX2ltZyB7XG4gICAgICBtaW4td2lkdGg6IGNhbGMoMi43NXJlbSArIDEgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgICBtaW4td2lkdGg6IDIuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1heC1oZWlnaHQ6IDMuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChtYXgtaGVpZ2h0OiBjbGFtcCggMi43NXJlbSAsIDIuMzk4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgICAgbWF4LWhlaWdodDogY2xhbXAoIDIuNzVyZW0gLCAyLjM5ODM1MTY0ODRyZW0gICsgIDEuNzU4MjQxNzU4MnZ3ICwgMy43NXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXgtaGVpZ2h0OiBjbGFtcCggMi43NXJlbSAsIDIuMzk4MzUxNjQ4NHJlbSAgKyAgMS43NTgyNDE3NTgydncgLCAzLjc1cmVtICkpIHtcbiAgICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgICAgbWF4LWhlaWdodDogY2FsYygyLjc1cmVtICsgMSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1heC1oZWlnaHQ6IDIuNzVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiA3Ni44NzVlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX19pbWcge1xuICAgIG1hcmdpbi1yaWdodDogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKG1hcmdpbi1yaWdodDogY2xhbXAoIDAuNzVyZW0gLCAwLjY2MjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMXJlbSApKSB7XG4gICAgLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgICAgIG1hcmdpbi1yaWdodDogY2xhbXAoIDAuNzVyZW0gLCAwLjY2MjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChtYXJnaW4tcmlnaHQ6IGNsYW1wKCAwLjc1cmVtICwgMC42NjIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDFyZW0gKSkge1xuICAgIC5jYXJkLWFkdmFudGFnZXNfX2ltZyB7XG4gICAgICBtYXJnaW4tcmlnaHQ6IGNhbGMoMC43NXJlbSArIDAuMjUgKiAoMTAwdncgLSAyMHJlbSkgLyA1Ni44NzUpO1xuICAgIH1cbiAgfVxufVxuQG1lZGlhIChtYXgtd2lkdGg6IDIwZW0pIHtcbiAgLmNhcmQtYWR2YW50YWdlc19faW1nIHtcbiAgICBtYXJnaW4tcmlnaHQ6IDAuNzVyZW07XG4gIH1cbn1cbi5jYXJkLWFkdmFudGFnZXNfX2ltZyBpbWcge1xuICBtYXgtd2lkdGg6IDI0cHg7XG4gIG1heC1oZWlnaHQ6IDI0cHg7XG59XG4uY2FyZC1hZHZhbnRhZ2VzX190aXRsZSB7XG4gIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDEuMjtcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcbiAgbWFyZ2luLWJvdHRvbTogMC41cmVtO1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlIHtcbiAgICBmb250LXNpemU6IDEuMjVyZW07XG4gIH1cbn1cbkBtZWRpYSAobWluLXdpZHRoOiAyMGVtKSBhbmQgKG1heC13aWR0aDogNzYuODc1ZW0pIHtcbiAgQHN1cHBvcnRzIChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MTIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2xhbXAoIDFyZW0gLCAwLjkxMjA4NzkxMjFyZW0gICsgIDAuNDM5NTYwNDM5NnZ3ICwgMS4yNXJlbSApO1xuICAgIH1cbiAgfVxuICBAc3VwcG9ydHMgbm90IChmb250LXNpemU6IGNsYW1wKCAxcmVtICwgMC45MTIwODc5MTIxcmVtICArICAwLjQzOTU2MDQzOTZ2dyAsIDEuMjVyZW0gKSkge1xuICAgIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygxcmVtICsgMC4yNSAqICgxMDB2dyAtIDIwcmVtKSAvIDU2Ljg3NSk7XG4gICAgfVxuICB9XG59XG5AbWVkaWEgKG1heC13aWR0aDogMjBlbSkge1xuICAuY2FyZC1hZHZhbnRhZ2VzX190aXRsZSB7XG4gICAgZm9udC1zaXplOiAxcmVtO1xuICB9XG59XG4uY2FyZC1hZHZhbnRhZ2VzX19kZXNjIHtcbiAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1saWdodC1iZywgIzc1NzU3NSk7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAxLjI1O1xufVxuQG1lZGlhIChtaW4td2lkdGg6IDc2Ljg3NWVtKSB7XG4gIC5jYXJkLWFkdmFudGFnZXNfX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMXJlbTtcbiAgfVxufVxuQG1lZGlhIChtaW4td2lkdGg6IDIwZW0pIGFuZCAobWF4LXdpZHRoOiA3Ni44NzVlbSkge1xuICBAc3VwcG9ydHMgKGZvbnQtc2l6ZTogY2xhbXAoIDAuODc1cmVtICwgMC44MzEwNDM5NTZyZW0gICsgIDAuMjE5NzgwMjE5OHZ3ICwgMXJlbSApKSB7XG4gICAgLmNhcmQtYWR2YW50YWdlc19fZGVzYyB7XG4gICAgICBmb250LXNpemU6IGNsYW1wKCAwLjg3NXJlbSAsIDAuODMxMDQzOTU2cmVtICArICAwLjIxOTc4MDIxOTh2dyAsIDFyZW0gKTtcbiAgICB9XG4gIH1cbiAgQHN1cHBvcnRzIG5vdCAoZm9udC1zaXplOiBjbGFtcCggMC44NzVyZW0gLCAwLjgzMTA0Mzk1NnJlbSAgKyAgMC4yMTk3ODAyMTk4dncgLCAxcmVtICkpIHtcbiAgICAuY2FyZC1hZHZhbnRhZ2VzX19kZXNjIHtcbiAgICAgIGZvbnQtc2l6ZTogY2FsYygwLjg3NXJlbSArIDAuMTI1ICogKDEwMHZ3IC0gMjByZW0pIC8gNTYuODc1KTtcbiAgICB9XG4gIH1cbn1cbkBtZWRpYSAobWF4LXdpZHRoOiAyMGVtKSB7XG4gIC5jYXJkLWFkdmFudGFnZXNfX2Rlc2Mge1xuICAgIGZvbnQtc2l6ZTogMC44NzVyZW07XG4gIH1cbn1gLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL3N0eWxlLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzL2ZvbnRzLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2ZvbnRzL2ljb25zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbnVsbC5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL2Zvcm1zL2J1dHRvbi5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9iYXNlL2Zvcm1zL2lucHV0LnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2Uuc2Nzc1wiLFwid2VicGFjazovLy4vc3JjL3Njc3MvaGVhZGVyLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Jhc2UvbWl4aW5zLnNjc3NcIixcIndlYnBhY2s6Ly8uL3NyYy9zY3NzL2Zvb3Rlci5zY3NzXCIsXCJ3ZWJwYWNrOi8vLi9zcmMvc2Nzcy9hZHZhbnRhZ2VzLnNjc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsZ0JBQWdCO0FDQWhCO0VBQ0Msa0JBQUE7RUFDQSxrQkFBQTtFQUNBLDJGQUFBO0VBQ0EsZ0JBQUE7RUFDQSxrQkFBQTtBRElEO0FFVEE7RUFDRSxvQkFBQTtFQUNBLGtCQUFBO0VBQ0EsbUJBQUE7RUFDQSxvQkFBQTtFQUNBLG9CQUFBO0VBQ0EsY0FBQTtFQUNBLG1DQUFBO0VBQ0Esa0NBQUE7QUZXRjs7QUVSRTtFQUVFLGNBQUE7QUZVSjs7QUVOQTtFQUNFLGdCQUFBO0FGU0Y7O0FFUEE7RUFDRSxnQkFBQTtBRlVGOztBRVJBO0VBQ0UsZ0JBQUE7QUZXRjs7QUVUQTtFQUNFLGdCQUFBO0FGWUY7O0FFVkE7RUFDRSxnQkFBQTtBRmFGOztBRVhBO0VBQ0UsZ0JBQUE7QUZjRjs7QUVaQTtFQUNFLGdCQUFBO0FG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O0lBQ0EsOEJBQUE7RVAyUko7RU96UkU7SUFDRSxtQkFBQTtFUDJSSjtFT3pSRTtJQUNFLHNCQUFBO0VQMlJKO0VPelJFO0lBQ0UsMkJBQUE7RVAyUko7RU96UkU7SUFDRSxrQkFBQTtJQUNBLFdBQUE7SUFDQSxVQUFBO0VQMlJKO0VPMVJJO0lBQ0UsUUFBQTtFUDRSTjtFT3ZSSTtJQUNFLDJCQUFBO0lBQ0EsNkNBQUE7RVB5Uk47RU92Ukk7SUFDRSw4QkFBQTtJQUNBLDRDQUFBO0VQeVJOO0FBQ0Y7O0FReGxCRTtFQ2xFRjtJRG1FRyxtQkFBQTtFUjRsQkQ7QUFDRjtBUXpsQkM7RUFFQztJQ3pFRjtNRDBFRywyRUFoQmM7SVIybUJiO0VBQ0Y7RVF6bEJBO0lDN0VGO01EOEVHLDREQUFBO0lSNGxCQztFQUNGO0FBQ0Y7QVExbEJFO0VDbEZGO0lEbUZHLG9CQUFBO0VSNmxCRDtBQUNGO0FRL21CRTtFQ2xFRjtJRG1FRyxzQkFBQTtFUmtuQkQ7QUFDRjtBUS9tQkM7RUFFQztJQ3pFRjtNRDBFRyw4RUFoQmM7SVJpb0JiO0VBQ0Y7RVEvbUJBO0lDN0VGO01EOEVHLCtEQUFBO0lSa25CQztFQUNGO0FBQ0Y7QVFobkJFO0VDbEZGO0lEbUZHLHVCQUFBO0VSbW5CRDtBQUNGO0FTN3JCRTtFQUNFLG1CQUFBO0VBQ0EsNENBQUE7RUFLQSxhQUFBO0VBQ0EsOEJBQUE7QVQyckJKO0FRM29CRTtFQ3hEQTtJRHlEQyxvQkFBQTtFUjhvQkQ7QUFDRjtBUTNvQkM7RUFFQztJQy9EQTtNRGdFQyw2RUFoQmM7SVI2cEJiO0VBQ0Y7RVEzb0JBO0lDbkVBO01Eb0VDLHFEQUFBO0lSOG9CQztFQUNGO0FBQ0Y7QVE1b0JFO0VDeEVBO0lEeUVDLG9CQUFBO0VSK29CRDtBQUNGO0FRanFCRTtFQ3hEQTtJRHlEQyx1QkFBQTtFUm9xQkQ7QUFDRjtBUWpxQkM7RUFFQztJQy9EQTtNRGdFQyxnRkFoQmM7SVJtckJiO0VBQ0Y7RVFqcUJBO0lDbkVBO01Eb0VDLHdEQUFBO0lSb3FCQztFQUNGO0FBQ0Y7QVFscUJFO0VDeEVBO0lEeUVDLHVCQUFBO0VScXFCRDtBQUNGO0FRdnJCRTtFQ3hEQTtJRHlEQyxvQkFBQTtFUjByQkQ7QUFDRjtBUXZyQkM7RUFFQztJQy9EQTtNRGdFQyw2RUFoQmM7SVJ5c0JiO0VBQ0Y7RVF2ckJBO0lDbkVBO01Eb0VDLHlEQUFBO0lSMHJCQztFQUNGO0FBQ0Y7QVF4ckJFO0VDeEVBO0lEeUVDLHFCQUFBO0VSMnJCRDtBQUNGO0FRN3NCRTtFQ3hEQTtJRHlEQyxxQkFBQTtFUmd0QkQ7QUFDRjtBUTdzQkM7RUFFQztJQy9EQTtNRGdFQyw4RUFoQmM7SVIrdEJiO0VBQ0Y7RVE3c0JBO0lDbkVBO01Eb0VDLDBEQUFBO0lSZ3RCQztFQUNGO0FBQ0Y7QVE5c0JFO0VDeEVBO0lEeUVDLHNCQUFBO0VSaXRCRDtBQUNGO0FRbnVCRTtFQ3hEQTtJRHlEQyxZQUFBO0VSc3VCRDtBQUNGO0FRbnVCQztFQUVDO0lDL0RBO01EZ0VDLGtFQWhCYztJUnF2QmI7RUFDRjtFUW51QkE7SUNuRUE7TURvRUMsaURBQUE7SVJzdUJDO0VBQ0Y7QUFDRjtBUXB1QkU7RUN4RUE7SUR5RUMsU0FBQTtFUnV1QkQ7QUFDRjtBU3Z5Qkk7RUFWRjtJQVdJLHNCQUFBO0VUMHlCSjtBQUNGO0FTN3hCQTtFQUNFLGVBQUE7QVQreEJGO0FTOXhCRTtFQUZGO0lBR0ksY0FBQTtFVGl5QkY7QUFDRjtBUzl4QkU7RUFDRSw4QkFBQTtFQUVBLGdCQUFBO0VBQ0EsZ0JBQUE7QVQreEJKO0FRM3dCRTtFQ3hCQTtJRHlCQyxpQkFBQTtFUjh3QkQ7QUFDRjtBUTN3QkM7RUFFQztJQy9CQTtNRGdDQyx3RUFoQmM7SVI2eEJiO0VBQ0Y7RVEzd0JBO0lDbkNBO01Eb0NDLHNEQUFBO0lSOHdCQztFQUNGO0FBQ0Y7QVE1d0JFO0VDeENBO0lEeUNDLGlCQUFBO0VSK3dCRDtBQUNGO0FRanlCRTtFQ3hCQTtJRHlCQyxzQkFBQTtFUm95QkQ7QUFDRjtBUWp5QkM7RUFFQztJQy9CQTtNRGdDQyw4RUFoQmM7SVJtekJiO0VBQ0Y7RVFqeUJBO0lDbkNBO01Eb0NDLDZEQUFBO0lSb3lCQztFQUNGO0FBQ0Y7QVFseUJFO0VDeENBO0lEeUNDLHNCQUFBO0VScXlCRDtBQUNGO0FTcjBCRTtFQUNFLHdDQUFBO0VBRUEsZ0JBQUE7RUFDQSxpQkFBQTtBVHMwQko7QVE1ekJFO0VDZEE7SURlQyxlQUFBO0VSK3pCRDtBQUNGO0FRNXpCQztFQUVDO0lDckJBO01Ec0JDLHVFQWhCYztJUjgwQmI7RUFDRjtFUTV6QkE7SUN6QkE7TUQwQkMsNERBQUE7SVIrekJDO0VBQ0Y7QUFDRjtBUTd6QkU7RUM5QkE7SUQrQkMsbUJBQUE7RVJnMEJEO0FBQ0Y7O0FTeDFCQTtFQUNFLGVBQUE7QVQyMUJGO0FTMTFCRTtFQUZGO0lBR0ksY0FBQTtFVDYxQkY7QUFDRjtBUTMxQkU7RUNPRTtJRE5ELHNCQUFBO0VSODFCRDtBQUNGO0FRMzFCQztFQUVDO0lDQUU7TURDRCw2RUFoQmM7SVI2MkJiO0VBQ0Y7RVEzMUJBO0lDSkU7TURLRCw2REFBQTtJUjgxQkM7RUFDRjtBQUNGO0FRNTFCRTtFQ1RFO0lEVUQscUJBQUE7RVIrMUJEO0FBQ0Y7QVFqM0JFO0VDWUE7SURYQyxtQkFBQTtFUm8zQkQ7QUFDRjtBUWozQkM7RUFFQztJQ0tBO01ESkMsd0VBaEJjO0lSbTRCYjtFQUNGO0VRajNCQTtJQ0NBO01EQUMsd0RBQUE7SVJvM0JDO0VBQ0Y7QUFDRjtBUWwzQkU7RUNKQTtJREtDLGdCQUFBO0VScTNCRDtBQUNGOztBU3QzQkE7RUFDRSwyQ0FBQTtBVHkzQkY7QVEzNEJFO0VDaUJGO0lEaEJHLG1CQUFBO0VSODRCRDtBQUNGO0FRMzRCQztFQUVDO0lDVUY7TURURyx3RUFoQmM7SVI2NUJiO0VBQ0Y7RVEzNEJBO0lDTUY7TURMRyx3REFBQTtJUjg0QkM7RUFDRjtBQUNGO0FRNTRCRTtFQ0NGO0lEQUcsaUJBQUE7RVIrNEJEO0FBQ0Y7QVFqNkJFO0VDaUJGO0lEaEJHLHNCQUFBO0VSbzZCRDtBQUNGO0FRajZCQztFQUVDO0lDVUY7TURURywyRUFoQmM7SVJtN0JiO0VBQ0Y7RVFqNkJBO0lDTUY7TURMRywyREFBQTtJUm82QkM7RUFDRjtBQUNGO0FRbDZCRTtFQ0NGO0lEQUcsb0JBQUE7RVJxNkJEO0FBQ0Y7QVNwNEJBO0VBRUUsZ0NBQUE7QVRxNEJGO0FRMTdCRTtFQ21ERjtJRGxERyx1QkFBQTtFUjY3QkQ7QUFDRjtBUTE3QkM7RUFFQztJQzRDRjtNRDNDRywrRUFoQmM7SVI0OEJiO0VBQ0Y7RVExN0JBO0lDd0NGO01EdkNHLDhEQUFBO0lSNjdCQztFQUNGO0FBQ0Y7QVEzN0JFO0VDbUNGO0lEbENHLHVCQUFBO0VSODdCRDtBQUNGO0FRaDlCRTtFQ21ERjtJRGxERyxxQkFBQTtFUm05QkQ7QUFDRjtBUWg5QkM7RUFFQztJQzRDRjtNRDNDRyw4RUFiZTtJUis5QmQ7RUFDRjtFUWg5QkE7SUN3Q0Y7TUR2Q0csK0RBQUE7SVJtOUJDO0VBQ0Y7QUFDRjtBUWo5QkU7RUNtQ0Y7SURsQ0csc0JBQUE7RVJvOUJEO0FBQ0Y7QVMxNkJBO0VBQ0UsYUFBQTtBVDQ2QkY7QVF6K0JFO0VDNERGO0lEM0RHLGVBQUE7RVI0K0JEO0FBQ0Y7QVF6K0JDO0VBRUM7SUNxREY7TURwREcsaUVBaEJjO0lSMi9CYjtFQUNGO0VReitCQTtJQ2lERjtNRGhERyxnREFBQTtJUjQrQkM7RUFDRjtBQUNGO0FRMStCRTtFQzRDRjtJRDNDRyxTQUFBO0VSNitCRDtBQUNGO0FTaDhCRTtFQUhGO0lBSUksc0JBQUE7RVRtOEJGO0FBQ0Y7QVNqNkJBO0VBQ0UsZUFBQTtBVG02QkY7QVNqNkJFO0VBSEY7SUFJSSxjQUFBO0VUbzZCRjtBQUNGO0FRNWdDRTtFQ21HRjtJRGxHRyx1QkFBQTtFUitnQ0Q7QUFDRjtBUTVnQ0M7RUFFQztJQzRGRjtNRDNGRyxnRkFoQmM7SVI4aENiO0VBQ0Y7RVE1Z0NBO0lDd0ZGO01EdkZHLCtEQUFBO0lSK2dDQztFQUNGO0FBQ0Y7QVE3Z0NFO0VDbUZGO0lEbEZHLHVCQUFBO0VSZ2hDRDtBQUNGO0FTdDdCRTtFQUNFLGlDQUFBO0VBQ0EsaUNBQUE7RUFDQSxnQkFBQTtFQUVBLHlCQUFBO0VBQ0Esc0JBQUE7QVR1N0JKO0FRemlDRTtFQzRHQTtJRDNHQyxpQkFBQTtFUjRpQ0Q7QUFDRjtBUXppQ0M7RUFFQztJQ3FHQTtNRHBHQywwRUFoQmM7SVIyakNiO0VBQ0Y7RVF6aUNBO0lDaUdBO01EaEdDLDREQUFBO0lSNGlDQztFQUNGO0FBQ0Y7QVExaUNFO0VDNEZBO0lEM0ZDLG1CQUFBO0VSNmlDRDtBQUNGO0FTeDhCRTtFQUNFLGNBQUE7QVQwOEJKO0FRbGtDRTtFQ3VIQTtJRHRIQyxxQkFBQTtFUnFrQ0Q7QUFDRjtBUWxrQ0M7RUFFQztJQ2dIQTtNRC9HQywyRUFiZTtJUmlsQ2Q7RUFDRjtFUWxrQ0E7SUM0R0E7TUQzR0MsMkRBQUE7SVJxa0NDO0VBQ0Y7QUFDRjtBUW5rQ0U7RUN1R0E7SUR0R0MsbUJBQUE7RVJza0NEO0FBQ0Y7QVMxOUJFO0VBQ0UsY0FBQTtBVDQ5Qko7QVEzbENFO0VDOEhBO0lEN0hDLHFCQUFBO0VSOGxDRDtBQUNGO0FRM2xDQztFQUVDO0lDdUhBO01EdEhDLDJFQWJlO0lSMG1DZDtFQUNGO0VRM2xDQTtJQ21IQTtNRGxIQywyREFBQTtJUjhsQ0M7RUFDRjtBQUNGO0FRNWxDRTtFQzhHQTtJRDdHQyxtQkFBQTtFUitsQ0Q7QUFDRjtBUzUrQkU7RUFDRSxjQUFBO0FUOCtCSjtBUXBuQ0U7RUNxSUE7SURwSUMscUJBQUE7RVJ1bkNEO0FBQ0Y7QVFwbkNDO0VBRUM7SUM4SEE7TUQ3SEMsMkVBYmU7SVJtb0NkO0VBQ0Y7RVFwbkNBO0lDMEhBO01EekhDLDJEQUFBO0lSdW5DQztFQUNGO0FBQ0Y7QVFybkNFO0VDcUhBO0lEcEhDLG1CQUFBO0VSd25DRDtBQUNGO0FTOS9CRTtFQUNFLGFBQUE7RUFDQSxRQUFBO0FUZ2dDSjtBUTlvQ0U7RUM0SUE7SUQzSUMsdUJBQUE7RVJpcENEO0FBQ0Y7QVE5b0NDO0VBRUM7SUNxSUE7TURwSUMsZ0ZBaEJjO0lSZ3FDYjtFQUNGO0VROW9DQTtJQ2lJQTtNRGhJQyw4REFBQTtJUmlwQ0M7RUFDRjtBQUNGO0FRL29DRTtFQzRIQTtJRDNIQyx1QkFBQTtFUmtwQ0Q7QUFDRjtBU3hnQ0E7RUFD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NjdDSjtBVTE3Q0U7RUFPRSxhQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBQ0EsNERBQUE7QVZzN0NKO0FRdjVDRTtFRTFDQTtJRjJDQyxrQkFBQTtFUjA1Q0Q7QUFDRjtBUXY1Q0M7RUFFQztJRWpEQTtNRmtEQywwRUFoQmM7SVJ5NkNiO0VBQ0Y7RVF2NUNBO0lFckRBO01Gc0RDLHVEQUFBO0lSMDVDQztFQUNGO0FBQ0Y7QVF4NUNFO0VFMURBO0lGMkRDLGtCQUFBO0VSMjVDRDtBQUNGO0FRNzZDRTtFRTFDQTtJRjJDQyxtQkFBQTtFUmc3Q0Q7QUFDRjtBUTc2Q0M7RUFFQztJRWpEQTtNRmtEQywyRUFoQmM7SVIrN0NiO0VBQ0Y7RVE3NkNBO0lFckRBO01Gc0RDLHdEQUFBO0lSZzdDQztFQUNGO0FBQ0Y7QVE5NkNFO0VFMURBO0lGMkRDLG1CQUFBO0VSaTdDRDtBQUNGO0FRbjhDRTtFRTFDQTtJRjJDQyxrQkFBQTtFUnM4Q0Q7QUFDRjtBUW44Q0M7RUFFQztJRWpEQTtNRmtEQywwRUFoQmM7SVJxOUNiO0VBQ0Y7RVFuOENBO0lFckRBO01Gc0RDLHVEQUFBO0lSczhDQztFQUNGO0FBQ0Y7QVFwOENFO0VFMURBO0lGMkRDLGtCQUFBO0VSdThDRDtBQUNGO0FRejlDRTtFRTFDQTtJRjJDQyxtQkFBQTtFUjQ5Q0Q7QUFDRjtBUXo5Q0M7RUFFQztJRWpEQTtNRmtEQywyRUFoQmM7SVIyK0NiO0VBQ0Y7RVF6OUNBO0lFckRBO01Gc0RDLHdEQUFBO0lSNDlDQztFQUNGO0FBQ0Y7QVExOUNFO0VFMURBO0lGMkRDLG1CQUFBO0VSNjlDRDtBQUNGO0FRLytDRTtFRTFDQTtJRjJDQyxrQkFBQTtFUmsvQ0Q7QUFDRjtBUS8rQ0M7RUFFQztJRWpEQTtNRmtEQywwRUFoQmM7SVJpZ0RiO0VBQ0Y7RVEvK0NBO0lFckRBO01Gc0RDLDZEQUFBO0lSay9DQztFQUNGO0FBQ0Y7QVFoL0NFO0VFMURBO0lGMkRDLHFCQUFBO0VSbS9DRDtBQUNGO0FVbmlESTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtBVnFpRE47QVUxaERFO0VBQ0UsaUNBQUE7RUFFQSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQkFBQTtBVjJoREo7QVFoaERFO0VFakJBO0lGa0JDLGtCQUFBO0VSbWhERDtBQUNGO0FRaGhEQztFQUVDO0lFeEJBO01GeUJDLHVFQWhCYztJUmtpRGI7RUFDRjtFUWhoREE7SUU1QkE7TUY2QkMsdURBQUE7SVJtaERDO0VBQ0Y7QUFDRjtBUWpoREU7RUVqQ0E7SUZrQ0MsZUFBQTtFUm9oREQ7QUFDRjtBVTVpREU7RUFDRSx5Q0FBQTtFQUVBLGdCQUFBO0VBQ0EsaUJBQUE7QVY2aURKO0FRM2lERTtFRU5BO0lGT0MsZUFBQTtFUjhpREQ7QUFDRjtBUTNpREM7RUFFQztJRWJBO01GY0MsdUVBaEJjO0lSNmpEYjtFQUNGO0VRM2lEQTtJRWpCQTtNRmtCQyw0REFBQTtJUjhpREM7RUFDRjtBQUNGO0FRNWlERTtFRXRCQTtJRnVCQyxtQkFBQTtFUitpREQ7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJAdXNlIFxcXCJzYXNzOm1hdGhcXFwiO1xcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LzRltC60YHQuNC90ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5AaW1wb3J0IFxcXCJiYXNlL21peGluc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0ZbQsiA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4vLyZkaXNwbGF5PXN3YXAgLSDQtNC+0LTQsNGC0Lgg0L/RgNC4INC/0ZbQtNC60LvRjtGH0LXQvdC90ZYg0YfQtdGA0LXQtyDQv9C70LDQs9GW0L1cXHJcXG5AaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9Um9ib3RvOjcwMCZkaXNwbGF5PXN3YXApO1xcclxcbkBpbXBvcnQgdXJsKFxcXCJodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUdvbG9zK1RleHQ6d2dodEA0MDA7NTAwJmRpc3BsYXk9c3dhcFxcXCIpO1xcclxcbi8vINCf0ZbQtNC60LvRjtGH0LjRgtC4LCDRj9C60YnQviDRlCDQu9C+0LrQsNC70YzQvdGWINGE0LDQudC70Lgg0YjRgNC40YTRgtGW0LJcXHJcXG5AaW1wb3J0IFxcXCJmb250cy9mb250c1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRltC60L7QvdC60L7QstC40YUg0YjRgNC40YTRgtGW0LIgPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8g0J/RltC00LrQu9GO0YfQuNGC0LgsINGP0LrRidC+INGUINGE0LDQudC7INGW0LrQvtC90LrQvtCy0L7Qs9C+INGI0YDQuNGE0YLRg1xcclxcbkBpbXBvcnQgXFxcImZvbnRzL2ljb25zXFxcIjtcXHJcXG5cXHJcXG4vLyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vINCd0LDQu9Cw0YjRgtGD0LLQsNC90L3RjyDRiNCw0LHQu9C+0L3RgyA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy8g0JfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDRiNGA0LjRhNGCID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbiRmb250RmFtaWx5OiBcXFwiR29sb3MgVGV4dFxcXCIsIHNhbnMtc2VyaWY7XFxyXFxuJGZvbnRTaXplOiByZW0oMTYpOyAvLyDQtNC1IDE0KHB4KSAtINGA0L7Qt9C80ZbRgCDRiNGA0LjRhNGC0YMg0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvCDQtyDQvNCw0LrQtdGC0YNcXHJcXG5cXHJcXG4vLyDQntGB0L3QvtCy0L3RliDQutC+0LvRjNC+0YDQuFxcclxcbi8vdGV4dFxcclxcbiRtYWluQ29sb3I6ICMxNjE2MTY7IC8vINCa0L7Qu9GW0YAg0YjRgNC40YTRgtGDINC30LAg0LfQsNC80L7QstGH0YPQstCw0L3QvdGP0LxcXHJcXG4kZGFya0dyYXk6ICM3NTc1NzU7XFxyXFxuJGxpZ2h0R3JheTogIzlmOWY5ZjtcXHJcXG5cXHJcXG4vL2JnXFxyXFxuJGxpZ2h0QmxhY2s6ICMyMDIyMjY7XFxyXFxuJGRhcmtXaGl0ZTogI2Y0ZjVmODtcXHJcXG5cXHJcXG4vL3RhZ3NcXHJcXG4kcmVkOiAjZDIxOTI0O1xcclxcbiRibHVlOiAjMjk0OWI1O1xcclxcbiRncmVlbjogIzMwOGQ3NztcXHJcXG5cXHJcXG4vLyDQndCw0LvQsNGI0YLRg9Cy0LDQvdC90Y8g0LDQtNCw0L/RgtC40LLQvdC+0Zcg0YHRltGC0LrQuCA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcblxcclxcbi8vINCc0ZbQvdGW0LzQsNC70YzQvdCwINGI0LjRgNC40L3QsCDRgdGC0L7RgNGW0L3QutC4XFxyXFxuJG1pbldpZHRoOiAzMjA7XFxyXFxuLy8g0KjQuNGA0LjQvdCwINC/0L7Qu9C+0YLQvdCwICjQvNCw0LrQtdGC0YMpXFxyXFxuJG1heFdpZHRoOiAxMjgwO1xcclxcbi8vINCo0LjRgNC40L3QsCDQvtCx0LzQtdC20YPRjtGH0L7Qs9C+INC60L7QvdGC0LXQudC90LXRgNCwICgwID0g0L3QtdC80LDRlCDQvtCx0LzQtdC20LXQvdC90Y8pXFxyXFxuJG1heFdpZHRoQ29udGFpbmVyOiAxMjAwO1xcclxcbi8vINCX0LDQs9Cw0LvRjNC90LjQuSDQstGW0LTRgdGC0YPQvyDRgyDQutC+0L3RgtC10LnQvdC10YDQsFxcclxcbi8vICgzMCA9INC/0L4gMTVweCDQu9GW0LLQvtGA0YPRhyDRliDQv9GA0LDQstC+0YDRg9GHLCAwID0g0L3QtdC80LDRlCDQstGW0LTRgdGC0YPQv9GDKVxcclxcbiRjb250YWluZXJQYWRkaW5nOiAzMDtcXHJcXG5cXHJcXG4vLyDQqNC40YDQuNC90LAg0YHQv9GA0LDRhtGM0L7QstGD0LLQsNC90L3RjyDQv9C10YDRiNC+0LPQviDQsdGA0LXQudC60L/QvtGW0L3RgtGDXFxyXFxuJGNvbnRhaW5lcldpZHRoOiAkbWF4V2lkdGhDb250YWluZXIgKyAkY29udGFpbmVyUGFkZGluZztcXHJcXG5cXHJcXG4vLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuFxcclxcbiRwYzogZW0oXFxyXFxuICAkY29udGFpbmVyV2lkdGhcXHJcXG4pOyAvLyDQn9CaLCDQvdC+0YPRgtCx0YPQutC4LCDQtNC10Y/QutGWINC/0LvQsNC90YjQtdGC0Lgg0YMg0LPQvtGA0LjQt9C+0L3RgtCw0LvRjNC90L7QvNGDINC/0L7Qu9C+0LbQtdC90L3RllxcclxcbiR0YWJsZXQ6IGVtKDk5MS45OCk7IC8vINCf0LvQsNC90YjQtdGC0LgsINC00LXRj9C60ZYg0YLQtdC70LXRhNC+0L3QuCDQsiDQs9C+0YDQuNC30L7QvdGC0LDQu9GM0L3QvtC80YMg0L/QvtC70L7QttC10L3QvdGWXFxyXFxuJG1vYmlsZTogZW0oNzY3Ljk4KTsgLy8g0KLQtdC70LXRhNC+0L3QuCBMXFxyXFxuJG1vYmlsZVNtYWxsOiBlbSg0NzkuOTgpOyAvLyDQotC10LvQtdGE0L7QvdC4IFNcXHJcXG5cXHJcXG4vLyDQotC40L8g0LDQtNCw0L/RgtC40LLQsDpcXHJcXG4vLyAxID0g0YfRg9C50L3RltGB0YLRjCAo0YMg0LrQvtC90YLQtdC50L3QtdGA0LAg0L3QtdC80LDRlCDQsdGA0LXQudC60L/QvtGW0L3RgtGW0LIpLFxcclxcbi8vIDIgPSDQv9C+INCx0YDQtdC50Lot0L/QvtGX0L3RgiAo0LrQvtC90YLQtdC50L3QtdGAINC30LzRltC90Y7RlCDRgdCy0L7RjiDRiNC40YDQuNC90YMg0L/QviDQsdGA0LXQudC6LdC/0L7Rl9C90YIpXFxyXFxuJHJlc3BvbnNpdmVUeXBlOiAxO1xcclxcblxcclxcbi8vID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLy8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vLyDQntCx0L3Rg9C70LXQvdC90Y8gPT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PSA9PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxcclxcbkBpbXBvcnQgXFxcImJhc2UvbnVsbFxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtC10LPQsCBCT0RZID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuYm9keSB7XFxyXFxuICAvLyDQodC60YDQvtC70Lsg0LfQsNCx0LvQvtC60L7QstCw0L3QvlxcclxcbiAgLmxvY2sgJiB7XFxyXFxuICAgIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICAgIHRvdWNoLWFjdGlvbjogbm9uZTtcXHJcXG4gICAgb3ZlcnNjcm9sbC1iZWhhdmlvcjogbm9uZTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vINCh0LDQudGCINC30LDQstCw0L3RgtCw0LbQtdC90LjQuVxcclxcbiAgLmxvYWRlZCAmIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC+0LvQvtC90LrQsCB3cmFwcGVyID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLndyYXBwZXIge1xcclxcbiAgbWluLWhlaWdodDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHJcXG4gIEBzdXBwb3J0cyAob3ZlcmZsb3c6IGNsaXApIHtcXHJcXG4gICAgb3ZlcmZsb3c6IGNsaXA7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyDQn9GA0LjRgtC40YHQutCw0ZTQvNC+IGZvb3RlclxcclxcbiAgPiBtYWluIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyDQpNGW0LrRgSDQtNC70Y8g0YHQu9Cw0LnQtNC10YDRltCyXFxyXFxuICA+ICoge1xcclxcbiAgICBtaW4td2lkdGg6IDA7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8v0JTQu9GPINGC0L7Qs9C+INGH0YLQvtCx0Ysg0L3QtSDQu9C+0LzQsNC70YHRjyDRgdC70LDQudC00LXRgCDQv9GA0Lgg0YDQtdGB0LDQudC30LVcXHJcXG5pZnJhbWUjd2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmUgIWltcG9ydGFudDtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0J7QsdC80LXQttGD0Y7Rh9C40Lkg0LrQvtC90YLQtdC50L3QtdGAID09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cXHJcXG4vKlxcclxcbihpKSDQodGC0LjQu9GWINCx0YPQtNGD0YLRjCDQt9Cw0YHRgtC+0YHQvtCy0YPQstCw0YLQuNGB0Ywg0LTQvlxcclxcbtCy0YHRltGFINC60LvQsNGB0ZbQsiwg0YnQviDQvNGW0YHRgtGP0YLRjCAqX19jb250YWluZXJcXHJcXG7QndCw0L/RgNC40LrQu9Cw0LQgaGVhZGVyX19jb250YWluZXIsIG1haW5fX2NvbnRhaW5lciDRliDRgi7Qvy5cXHJcXG7QodC90ZbQv9C/0LXRgiAoSFRNTCk6IGNudFxcclxcbiovXFxyXFxuQGlmICgkcmVzcG9uc2l2ZVR5cGU9PTEpIHtcXHJcXG4gIC8vINCn0YPQudC90LBcXHJcXG4gIFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcbiAgICBAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiByZW0oJGNvbnRhaW5lcldpZHRoKTtcXHJcXG4gICAgICBtYXJnaW46IDAgYXV0bztcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBAaWYgKCRjb250YWluZXJQYWRkaW5nPjApIHtcXHJcXG4gICAgICBAaWYgKCRtYXhXaWR0aENvbnRhaW5lcj4wKSB7XFxyXFxuICAgICAgICBwYWRkaW5nOiAwIHJlbShtYXRoLmRpdigkY29udGFpbmVyUGFkZGluZywgMikpO1xcclxcbiAgICAgIH0gQGVsc2Uge1xcclxcbiAgICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXHJcXG4gICAgICAgICAgXFxcInBhZGRpbmctbGVmdFxcXCIsXFxyXFxuICAgICAgICAgIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSxcXHJcXG4gICAgICAgICAgMTVcXHJcXG4gICAgICAgICk7XFxyXFxuICAgICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcclxcbiAgICAgICAgICBcXFwicGFkZGluZy1yaWdodFxcXCIsXFxyXFxuICAgICAgICAgIG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSxcXHJcXG4gICAgICAgICAgMTVcXHJcXG4gICAgICAgICk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufSBAZWxzZSB7XFxyXFxuICAvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQsNC80LhcXHJcXG4gIFtjbGFzcyo9XFxcIl9fY29udGFpbmVyXFxcIl0ge1xcclxcbiAgICBtYXJnaW46IDAgYXV0bztcXHJcXG5cXHJcXG4gICAgQGlmICgkbWF4V2lkdGhDb250YWluZXI+MCkge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKCRjb250YWluZXJXaWR0aCk7XFxyXFxuICAgIH0gQGVsc2Uge1xcclxcbiAgICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCkge1xcclxcbiAgICAgICAgcGFkZGluZzogMCByZW0obWF0aC5kaXYoJGNvbnRhaW5lclBhZGRpbmcsIDIpKTtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRwYykge1xcclxcbiAgICAgIG1heC13aWR0aDogcmVtKDk3MCk7XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICR0YWJsZXQpIHtcXHJcXG4gICAgICBtYXgtd2lkdGg6IHJlbSg3NTApO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgbWF4LXdpZHRoOiBub25lO1xcclxcblxcclxcbiAgICAgIEBpZiAoJGNvbnRhaW5lclBhZGRpbmc+MCBhbmQgJG1heFdpZHRoQ29udGFpbmVyPjApIHtcXHJcXG4gICAgICAgIHBhZGRpbmc6IDAgcmVtKG1hdGguZGl2KCRjb250YWluZXJQYWRkaW5nLCAyKSk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi8vINCf0ZbQtNC60LvRjtGH0LXQvdC90Y8g0LHQsNC30L7QstC40YUg0YHRgtC40LvRltCyLCDRiNCw0LHQu9C+0L3RltCyICjQt9Cw0LPQvtGC0ZbQstC10LvRjCkg0YLQsCDQtNC+0L/QvtC80ZbQttC90LjRhSDQutC70LDRgdGW0LJcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstC40LzQutC90LXQvdC90Y8g0LrQvtC90LrRgNC10YLQvdC40YUg0YHRgtC40LvRltCyINC00LjQstC40YHRjCBiYXNlLnNjc3NcXHJcXG5AaW1wb3J0IFxcXCJiYXNlXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQt9Cw0LPQsNC70YzQvdC40YUg0LXQu9C10LzQtdC90YLRltCyINC/0YDQvtC10LrRgtGDXFxyXFxuQGltcG9ydCBcXFwiY29tbW9uXFxcIjtcXHJcXG5cXHJcXG4vLyDQn9GW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQvtC60YDQtdC80LjRhSDQsdC70L7QutGW0LJcXHJcXG5AaW1wb3J0IFxcXCJoZWFkZXJcXFwiO1xcclxcbkBpbXBvcnQgXFxcImZvb3RlclxcXCI7XFxyXFxuQGltcG9ydCBcXFwiYWR2YW50YWdlc1xcXCI7XFxyXFxuXFxyXFxuLy8g0J/RltC00LrQu9GO0YfQtdC90L3RjyDRgdGC0LjQu9GW0LIg0L7QutGA0LXQvNC40YUg0YHRgtC+0YDRltC90L7QulxcclxcbkBpbXBvcnQgXFxcImhvbWVcXFwiO1xcclxcblwiLFwiQGZvbnQtZmFjZSB7XFxuXFx0Zm9udC1mYW1pbHk6IGljb25zO1xcblxcdGZvbnQtZGlzcGxheTogc3dhcDtcXG5cXHRzcmM6IHVybChcXFwiLi4vZm9udHMvaWNvbnMud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvaWNvbnMud29mZlxcXCIpIGZvcm1hdChcXFwid29mZlxcXCIpO1xcblxcdGZvbnQtd2VpZ2h0OiA0MDA7XFxuXFx0Zm9udC1zdHlsZTogbm9ybWFsO1xcbn1cXHJcXG5cIixcIiVpYyB7XFxyXFxuICBmb250LWZhbWlseTogXFxcImljb25zXFxcIjtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7XFxyXFxuICBmb250LXZhcmlhbnQ6IG5vcm1hbDtcXHJcXG4gIHRleHQtdHJhbnNmb3JtOiBub25lO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE7XFxyXFxuICAtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG4gIC1tb3otb3N4LWZvbnQtc21vb3RoaW5nOiBncmF5c2NhbGU7XFxyXFxufVxcclxcbltjbGFzcyo9XFxcIl9pY29uLVxcXCJdIHtcXHJcXG4gICY6YmVmb3JlIHtcXHJcXG4gICAgQGV4dGVuZCAlaWM7XFxyXFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4uX2ljb24tc2V0dGluZ3M6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMFxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1jYXNlOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDFcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tZGVsaXZlcnk6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwMlxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1yZW50OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDNcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24teW91dHViZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA0XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWluc3RhZ3JhbTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA1XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLWd1YXJhbnRlZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTA2XFxcIjtcXHJcXG59XFxyXFxuLl9pY29uLXNhbGU6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwN1xcXCI7XFxyXFxufVxcclxcbi5faWNvbi1hcnJvdy1kb3duOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDhcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tYnVyZ2VyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MDlcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tZmlsdGVyOmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGFcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tY2xvc2U6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwYlxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1hbGw6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZFxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1zZWFyY2g6YmVmb3JlIHtcXHJcXG4gIGNvbnRlbnQ6IFxcXCJcXFxcZTkwZVxcXCI7XFxyXFxufVxcclxcbi5faWNvbi1jYXJ0OmJlZm9yZSB7XFxyXFxuICBjb250ZW50OiBcXFwiXFxcXGU5MGZcXFwiO1xcclxcbn1cXHJcXG4uX2ljb24tc2VydmljZTpiZWZvcmUge1xcclxcbiAgY29udGVudDogXFxcIlxcXFxlOTEyXFxcIjtcXHJcXG59XFxyXFxuXCIsXCIqIHtcXHJcXG5cXHRwYWRkaW5nOiAwcHg7XFxyXFxuXFx0bWFyZ2luOiAwcHg7XFxyXFxuXFx0Ym9yZGVyOiAwcHg7XFxyXFxufVxcclxcbiosXFxyXFxuKjpiZWZvcmUsXFxyXFxuKjphZnRlciB7XFxyXFxuXFx0Ym94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG59XFxyXFxuOmZvY3VzLFxcclxcbjphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmE6Zm9jdXMsXFxyXFxuYTphY3RpdmUge1xcclxcblxcdC8vIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcbmh0bWwsXFxyXFxuYm9keSB7XFxyXFxuXFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdG1pbi13aWR0aDogJG1pbldpZHRoICsgcHg7XFxyXFxufVxcclxcbmJvZHkge1xcclxcblxcdGNvbG9yOiAkbWFpbkNvbG9yO1xcclxcblxcdGxpbmUtaGVpZ2h0OiAxO1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6ICRmb250U2l6ZTtcXHJcXG5cXHQvL3RleHQtcmVuZGVyaW5nOiBvcHRpbWl6ZUxlZ2liaWxpdHk7XFxyXFxuXFx0LW1zLXRleHQtc2l6ZS1hZGp1c3Q6IDEwMCU7XFxyXFxuXFx0LW1vei10ZXh0LXNpemUtYWRqdXN0OiAxMDAlO1xcclxcblxcdC13ZWJraXQtdGV4dC1zaXplLWFkanVzdDogMTAwJTtcXHJcXG5cXHQtd2Via2l0LWZvbnQtc21vb3RoaW5nOiBhbnRpYWxpYXNlZDtcXHJcXG5cXHQtbW96LW9zeC1mb250LXNtb290aGluZzogZ3JheXNjYWxlO1xcclxcbn1cXHJcXG5pbnB1dCxcXHJcXG5idXR0b24sXFxyXFxudGV4dGFyZWEge1xcclxcblxcdGZvbnQtZmFtaWx5OiAkZm9udEZhbWlseTtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcbmJ1dHRvbiB7XFxyXFxuXFx0Y3Vyc29yOiBwb2ludGVyO1xcclxcblxcdGNvbG9yOiBpbmhlcml0O1xcclxcblxcdGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbn1cXHJcXG5hIHtcXHJcXG5cXHRjb2xvcjogaW5oZXJpdDtcXHJcXG5cXHR0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcbnVsIGxpIHtcXHJcXG5cXHRsaXN0LXN0eWxlOiBub25lO1xcclxcbn1cXHJcXG5pbWcge1xcclxcblxcdHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxufVxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmg0LFxcclxcbmg1LFxcclxcbmg2IHtcXHJcXG5cXHRmb250LXdlaWdodDogaW5oZXJpdDtcXHJcXG5cXHRmb250LXNpemU6IGluaGVyaXQ7XFxyXFxufVxcclxcblwiLFwiLy88QlVUVE9OUyAoYS5idG4rdGFiKT5cXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGJ0blxcclxcblxcclxcbi5idXR0b24ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWZsZXg7XFxyXFxuICBwYWRkaW5nOiAxMnB4IDIwcHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA4cHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAkbGlnaHRCbGFjaztcXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LXdoaXRlLCAjZmZmKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICY6aG92ZXIge1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMyYjJkMzI7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICYuX2Z3IHtcXHJcXG4gICAgd2lkdGg6IDEwMCU7XFxyXFxuICB9XFxyXFxuICAmX2dyYXkge1xcclxcbiAgICBjb2xvcjogIzE2MTYxNjtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogJGRhcmtXaGl0ZTtcXHJcXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuICAgICAgJjpob3ZlciB7XFxyXFxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTllOWU5O1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl93aGl0ZSB7XFxyXFxuICAgIGNvbG9yOiAjMTYxNjE2O1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgICBAbWVkaWEgKGFueS1ob3ZlcjogaG92ZXIpIHtcXHJcXG4gICAgICAmOmhvdmVyIHtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmNGY1Zjg7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcblwiLFwiLy88SU5QVVQ+XFxyXFxuLy8g0KHQvdGW0L/Qv9C10YIgKEhUTUwpOiBpbnBcXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZXh0XFxcIl0sXFxyXFxuaW5wdXRbdHlwZT1cXFwiZW1haWxcXFwiXSxcXHJcXG5pbnB1dFt0eXBlPVxcXCJ0ZWxcXFwiXSxcXHJcXG50ZXh0YXJlYSB7XFxyXFxuICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAtbW96LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICBhcHBlYXJhbmNlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5wdXQge1xcclxcbiAgYm9yZGVyLXJhZGl1czogMCAhaW1wb3J0YW50O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBhZGRpbmc6IDE2cHggMHB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2ZmZjtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxuICBjb2xvcjogI2ZmZjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjAsIDE2KTtcXHJcXG5cXHJcXG4gICYuX2Zvcm0tZm9jdXMge1xcclxcbiAgfVxcclxcbiAgJi5fZm9ybS1lcnJvciB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pbnB1dFt0eXBlPVxcXCJzZWFyY2hcXFwiXSB7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBib3JkZXI6IDFweCBzb2xpZCAjZWVlO1xcclxcbiAgYm9yZGVyLXJhZGl1czogOHB4O1xcclxcbiAgYmFja2dyb3VuZDogdmFyKC0tYmFja2dyb3VuZC1ncmF5LCAjZjRmNWY4KTtcXHJcXG59XFxyXFxuLmlucHV0W3BsYWNlaG9sZGVyXTpub3QoW2RhdGEtcGxhY2Vob2xkZXItbm9oaWRlbl0pIHtcXHJcXG4gICY6OnBsYWNlaG9sZGVyIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogb3BhY2l0eSAwLjNzO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWRhcmstYmcsICM5ZjlmOWYpO1xcclxcbiAgfVxcclxcbiAgJjpmb2N1czo6cGxhY2Vob2xkZXIge1xcclxcbiAgICBvcGFjaXR5OiAwO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYS5pbnB1dCB7XFxyXFxuICByZXNpemU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHggMHB4O1xcclxcbn1cXHJcXG5cIixcIi8vINCX0LDQs9Cw0LvRjNC90LjQuSDRhNCw0LnQuyDQtdC70LXQvNC10L3RgtGW0LIg0YTQvtGA0LxcXHJcXG4vLyDQlNC70Y8g0L/RltC00LrQu9GO0YfQtdC90L3Rjy/QstGW0LTQutC70Y7Rh9C10L3QvdGPINGB0YLQuNC70ZbQsiDQutC+0L3QutGA0LXRgtC90L7Qs9C+INC10LvQtdC80LXQvdGC0LAg0YTQvtGA0LzQuCDQtNC40LLQuNGB0YwgYmFzZS9mb3Jtcy9mb3Jtcy5zY3NzXFxyXFxuQGltcG9ydCBcXFwiYmFzZS9mb3Jtcy9mb3Jtc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQv9C+0L/QsNC/0ZbQslxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvcG9wdXBcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0YHQv9C+0LnQu9C10YDRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zcG9sbGVyc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDRgtCw0LHRltCyXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS90YWJzXFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC80LDQv1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvbWFwc1xcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQsdC70L7QutGDIFxcXCLQv9C+0LrQsNC30LDRgtC4INGJ0LVcXFwiXFxyXFxuLy8gQGltcG9ydCBcXFwiYmFzZS9zaG93bW9yZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LvQuNC/0LrQvtCz0L4g0LHQu9C+0LrRg1xcclxcbi8vIEBpbXBvcnQgXFxcImJhc2Uvc3RpY2t5XFxcIjtcXHJcXG5cXHJcXG4vLyDQodGC0LjQu9GWINC00LvRjyDQv9C+0LLQvdC+0LXQutGA0LDQvdC90L7Qs9C+INCx0LvQvtC60YNcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2Z1bGxzY3JlZW5cXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPINC/0L7QtdC60YDQsNC90L7RlyDQv9GA0L7QutGA0YPRgtC60LhcXHJcXG4vLyBTdHlsZXMgZm9yIGZ1bGxwYWdlIHNjcm9sbFxcclxcbi8vIEBpbXBvcnQgXFxcImJhc2UvZnVsbHBhZ2VcXFwiO1xcclxcblxcclxcbi8vINCh0YLQuNC70ZYg0LTQu9GPIHJpcHBsZSDQtdGE0LXQutGC0YNcXHJcXG4vLyBTdHlsZXMgZm9yIHJpcHBsZSBlZmZlY3RcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL3JpcHBsZVxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0LrQsNGB0YLQvtC80L3QvtCz0L4g0LrRg9GA0YHQvtGA0YNcXHJcXG4vLyBTdHlsZXMgZm9yIGN1c3RvbSBjdXJzb3JcXHJcXG4vLyBAaW1wb3J0IFxcXCJiYXNlL2N1cnNvclxcXCI7XFxyXFxuXFxyXFxuLy8g0KHRgtC40LvRliDQtNC70Y8g0YfRg9C50L3QuNGFINC60LDRgNGC0LjQvdC+0LogKElCRylcXHJcXG4vLyDQodC90ZbQv9C/0LXRgiAoSFRNTCk6IGliZyAoZGl2INC3INC60LDRgNGC0LjQvdC60L7RjiDRgtCwINC60LvQsNGB0LDQvNC4KVxcclxcbi8vINCh0L3RltC/0L/QtdGCIChIVE1MKTogaWJnYSAoYSDQtyDQutCw0YDRgtC40L3QutC+0Y4g0YLQsCDQutC70LDRgdCw0LzQuClcXHJcXG5bY2xhc3MqPVxcXCItaWJnXFxcIl0ge1xcclxcblxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRpbWcge1xcclxcblxcdFxcdHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG5cXHRcXHR3aWR0aDogMTAwJTtcXHJcXG5cXHRcXHRoZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0b2JqZWN0LWZpdDogY292ZXI7XFxyXFxuXFx0fVxcclxcbn1cXHJcXG5bY2xhc3MqPVxcXCItaWJnX2NvbnRhaW5cXFwiXSB7XFxyXFxuXFx0aW1nIHtcXHJcXG5cXHRcXHRvYmplY3QtZml0OiBjb250YWluO1xcclxcblxcdH1cXHJcXG59XFxyXFxuXFxyXFxuLy8g0KjQsNCx0LvQvtC90LggKNC30LDQs9C+0YLRltCy0LvRlilcXHJcXG4vLyBAZXh0ZW5kICXRltC8J9GPINGI0LDQsdC70L7QvdGDO1xcclxcbi8vINCh0L3RltC/0L/QtdGCIChTQ1NTKTogZXhcXHJcXG5cXHJcXG4vLyDQm9GW0YfQuNC70YzQvdC40Log0LTQu9GPINGB0L/QuNGB0LrRg1xcclxcbiVsaXN0Q291bnRlciB7XFxyXFxuXFx0bGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcblxcdGNvdW50ZXItcmVzZXQ6IGl0ZW07XFxyXFxuXFx0bGkge1xcclxcblxcdFxcdHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG5cXHRcXHQmOmJlZm9yZSB7XFxyXFxuXFx0XFx0XFx0Y291bnRlci1pbmNyZW1lbnQ6IGl0ZW07XFxyXFxuXFx0XFx0XFx0Y29udGVudDogY291bnRlcihpdGVtKTtcXHJcXG5cXHRcXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0XFx0bGVmdDogMDtcXHJcXG5cXHRcXHRcXHR0b3A6IDA7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdC1INCy0ZbQtNC10L5cXHJcXG4lcmVzcG9uc2l2ZVZpZGVvIHtcXHJcXG5cXHRwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuXFx0b3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG5cXHRoZWlnaHQ6IDA7XFxyXFxuXFx0cGFkZGluZy1ib3R0b206IDU2LjI1JTtcXHJcXG5cXHR2aWRlbyxcXHJcXG5cXHRpZnJhbWUsXFxyXFxuXFx0b2JqZWN0LFxcclxcblxcdGVtYmVkIHtcXHJcXG5cXHRcXHRwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuXFx0XFx0dG9wOiAwO1xcclxcblxcdFxcdGxlZnQ6IDA7XFxyXFxuXFx0XFx0d2lkdGg6IDEwMCU7XFxyXFxuXFx0XFx0aGVpZ2h0OiAxMDAlO1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0JLRltC00LXQviDRj9C6INGE0L7QvVxcclxcbiV2aWRlb0JhY2tncm91bmQge1xcclxcblxcdHZpZGVvLFxcclxcblxcdGlmcmFtZSxcXHJcXG5cXHRvYmplY3QsXFxyXFxuXFx0ZW1iZWQge1xcclxcblxcdFxcdHBvc2l0aW9uOiBmaXhlZDtcXHJcXG5cXHRcXHR0b3A6IDUwJTtcXHJcXG5cXHRcXHRsZWZ0OiA1MCU7XFxyXFxuXFx0XFx0bWluLXdpZHRoOiAxMDAlO1xcclxcblxcdFxcdG1pbi1oZWlnaHQ6IDEwMCU7XFxyXFxuXFx0XFx0d2lkdGg6IGF1dG87XFxyXFxuXFx0XFx0aGVpZ2h0OiBhdXRvO1xcclxcblxcdFxcdHotaW5kZXg6IC0xMDA7XFxyXFxuXFx0XFx0dHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpIHRyYW5zbGF0ZVkoLTUwJSk7XFxyXFxuXFx0XFx0YmFja2dyb3VuZC1zaXplOiBjb3ZlcjtcXHJcXG5cXHR9XFxyXFxufVxcclxcbi8vINCh0ZbRgNC40Lkg0YTRltC70YzRgtGAXFxyXFxuJWdyYXlmaWx0ZXIge1xcclxcblxcdHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuXFx0ZmlsdGVyOiBncmF5c2NhbGUoMSk7XFxyXFxuXFx0QG1lZGlhIChhbnktaG92ZXI6IGhvdmVyKSB7XFxyXFxuXFx0XFx0Jjpob3ZlciB7XFxyXFxuXFx0XFx0XFx0ZmlsdGVyOiBncmF5c2NhbGUoMCk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuLy8g0KHQutCw0YHRg9Cy0LDRgtC4INCy0LjQtNGW0LvQtdC90L3Rj1xcclxcbiVub3NlbGVjdCB7XFxyXFxuXFx0dXNlci1zZWxlY3Q6IG5vbmU7XFxyXFxufVxcclxcbi8vINCU0LfQtdGA0LrQsNC70YzQvdC1INCy0ZbQtNC+0LHRgNCw0LbQtdC90L3Rj1xcclxcbiVtaXJyb3Ige1xcclxcblxcdHRyYW5zZm9ybTogc2NhbGUoLTEsIDEpO1xcclxcbn1cXHJcXG4vLyDQn9C70LDQstC90LjQuSDRgdC60YDQvtC70LtcXHJcXG4lc21vb3Roc2Nyb2xsIHtcXHJcXG5cXHQtd2Via2l0LW92ZXJmbG93LXNjcm9sbGluZzogdG91Y2g7XFxyXFxufVxcclxcbi8vINCh0YXQvtCy0LDRgtC4INGB0LrRgNC+0LvQu1xcclxcbiVoaWRlc2Nyb2xsIHtcXHJcXG5cXHQmOjotd2Via2l0LXNjcm9sbGJhciB7XFxyXFxuXFx0XFx0ZGlzcGxheTogbm9uZTtcXHJcXG5cXHR9XFxyXFxufVxcclxcblwiLFwiLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuLmhlYWRlciB7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIGxlZnQ6IDA7XFxyXFxuICB6LWluZGV4OiAxMDAwO1xcclxcbiAgLy8gLmhlYWRlcl9fdG9wXFxyXFxuXFxyXFxuICAmX190b3Age1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmhlYWRlcl9fYm9keVxcclxcblxcclxcbiAgJl9fYm9keSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi50b3AtaGVhZGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XFxyXFxuICBwYWRkaW5nOiByZW0oMTgpIDA7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjgsIDUpO1xcclxcbiAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xcclxcbiAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoMHB4LCAtMTAwJSk7XFxyXFxuICB9XFxyXFxuICAvLyAudG9wLWhlYWRlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcXHJcXG4gICAgZm9udC1zaXplOiByZW0oMTQpO1xcclxcbiAgICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMTYsIDE0KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgODAsIDMyLCAwLCAxMjgwLCAxMDI0KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tbGVmdFxcXCIsIDk0LCAyNSwgMCwgNzY4LCAzMjApO1xcclxcbiAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1yaWdodFxcXCIsIDY5LCAwLCAwLCA3NjgsIDMyMCk7XFxyXFxuICAgICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICB9XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xcclxcbiAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xcclxcbiAgICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICAgICAgcGFkZGluZy1sZWZ0OiByZW0oNSk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gICZfX2xpbmtzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBjb2x1bW4tZ2FwOiByZW0oMzIpO1xcclxcbiAgICByb3ctZ2FwOiByZW0oNSk7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgfVxcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG4gIC8vIC50b3AtaGVhZGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX2xvZ29cXHJcXG5cXHJcXG4gICZfX2xvZ28ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnRvcC1oZWFkZXJfX2NvbnRhY3RzXFxyXFxuXFxyXFxuICAmX19jb250YWN0cyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAudG9wLWhlYWRlcl9fcmlnaHRcXHJcXG5cXHJcXG4gICZfX3JpZ2h0IHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLmhlYWRlciB7XFxyXFxuICAvLyAuaGVhZGVyX19ib3R0b21cXHJcXG5cXHJcXG4gICZfX2JvdHRvbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5ib3R0b20taGVhZGVyIHtcXHJcXG4gIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMC4ycztcXHJcXG4gIC5tZW51LW9wZW4gJiB7XFxyXFxuICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDBweCwgLTE3NSUpO1xcclxcbiAgfVxcclxcbiAgLy8gLmJvdHRvbS1oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20taGVhZGVyX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgfVxcclxcbiAgJl9fbGVmdCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgZ2FwOiByZW0oOCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5jb250YWN0cy10b3AtaGVhZGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICBjb2x1bW4tZ2FwOiByZW0oMzIpO1xcclxcbiAgcm93LWdhcDogcmVtKDUpO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5jb250YWN0cy10b3AtaGVhZGVyX19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgJjpob3ZlciB7XFxyXFxuICAgICAgY29sb3I6ICRtYWluQ29sb3I7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG59XFxyXFxuLnJpZ2h0LXRvcC1oZWFkZXIge1xcclxcbiAgLy8gLnJpZ2h0LXRvcC1oZWFkZXJfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4zcyBlYXNlIDBzO1xcclxcbiAgICAmOmhvdmVyIHtcXHJcXG4gICAgICBjb2xvcjogJG1haW5Db2xvcjtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLnJpZ2h0LXRvcC1oZWFkZXJfX0xpbmtcXHJcXG59XFxyXFxuLmJvZHktaGVhZGVyIHtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiByZW0oOCk7XFxyXFxuICB9XFxyXFxuICAvLyAuYm9keS1oZWFkZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib2R5LWhlYWRlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm9keS1oZWFkZXJfX21lbnVcXHJcXG5cXHJcXG4gICZfX21lbnUge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvZHktaGVhZGVyX19yaWdodFxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgfVxcclxcbn1cXHJcXG4udG9wLW1lbnUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuXFxyXFxuICAmX19sb2dvIHtcXHJcXG4gICAgZGlzcGxheTogbm9uZTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBtYXJnaW4tYm90dG9tOiByZW0oNDQpO1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxufVxcclxcbi5tZW51IHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAvLyAubWVudV9faWNvblxcclxcblxcclxcbiAgLy8gLm1lbnVfX2JvZHlcXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIHBhZGRpbmc6IHJlbSgyNCkgcmVtKDE2KTtcXHJcXG4gICAgICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICAgICAgd2lkdGg6IDEwMCU7XFxyXFxuICAgICAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgICAgIHRvcDogMDtcXHJcXG4gICAgICBsZWZ0OiAtMTAwJTtcXHJcXG4gICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAkZGFya1doaXRlO1xcclxcbiAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UgMHM7XFxyXFxuICAgICAgei1pbmRleDogMTtcXHJcXG5cXHJcXG4gICAgICAubWVudS1vcGVuICYge1xcclxcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwLjJzO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICB9XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5tZW51X19saXN0XFxyXFxuXFxyXFxuICAmX19saXN0IHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgZ2FwOiByZW0oOCk7XFxyXFxuICAgIGZsZXgtd3JhcDogd3JhcDtcXHJcXG5cXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDYxMCkpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcclxcbiAgICAgIGZsZXgtd3JhcDogbm93cmFwO1xcclxcbiAgICAgIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgICAgIG1heC1oZWlnaHQ6IDYwJTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1lbnVfX2l0ZW1cXHJcXG5cXHJcXG4gICZfX2l0ZW0ge1xcclxcbiAgICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgICBwYWRkaW5nLWJvdHRvbTogMTZweDtcXHJcXG4gICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgICB3aWR0aDogMTAwJTtcXHJcXG4gICAgICAgIGhlaWdodDogMXB4O1xcclxcbiAgICAgICAgYm90dG9tOiAwO1xcclxcbiAgICAgICAgbGVmdDogMDtcXHJcXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNlOWU5ZTk7XFxyXFxuICAgICAgfVxcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWVudV9fbGlua1xcclxcblxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgcGFkZGluZzogMDtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4ucmlnaHQtYm9keS1oZWFkZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgZ2FwOiByZW0oOCk7XFxyXFxuICAvLyAucmlnaHQtYm9keS1oZWFkZXJfX2xpbmtcXHJcXG5cXHJcXG4gICZfX2xpbmsge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDQ0cHg7XFxyXFxuICAgIGhlaWdodDogNDRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2Zvcm0ge1xcclxcbiAgfVxcclxcbiAgLy8gLnJpZ2h0LWJvZHktaGVhZGVyX19idG5cXHJcXG5cXHJcXG4gICZfX2J0biB7XFxyXFxuICAgIEBtZWRpYSAobWF4LXdpZHRoOiBlbSg2MTApKSB7XFxyXFxuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxNXB4KTtcXHJcXG4gICAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgICAgYm90dG9tOiAyNHB4O1xcclxcbiAgICAgIGxlZnQ6IDUwJTtcXHJcXG4gICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgIC8vICB3aWR0aDogNDRweDtcXHJcXG4gICAgLy8gIGhlaWdodDogNDRweDtcXHJcXG4gICAgLy8gICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICAvLyAgICAtd2Via2l0LWFwcGVhcmFuY2U6IG5vbmU7XFxyXFxuICAgIC8vICAgIGhlaWdodDogMWVtO1xcclxcbiAgICAvLyAgICB3aWR0aDogMWVtO1xcclxcbiAgICAvLyAgICBib3JkZXItcmFkaXVzOiA1MGVtO1xcclxcbiAgICAvLyAgICBiYWNrZ3JvdW5kLWltYWdlOiB1cmwoaHR0cHM6Ly9wcm8uZm9udGF3ZXNvbWUuY29tL3JlbGVhc2VzL3Y1LjEwLjAvc3Zncy9zb2xpZC90aW1lcy1jaXJjbGUuc3ZnKVxcclxcbiAgICAvLyAgICAgIG5vLXJlcGVhdCA1MCUgNTAlO1xcclxcbiAgICAvLyAgICBiYWNrZ3JvdW5kLXNpemU6IGNvbnRhaW47XFxyXFxuICAgIC8vICAgIG9wYWNpdHk6IDA7XFxyXFxuICAgIC8vICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xcclxcbiAgICAvLyAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG4uZm9ybS1yaWdodC1ib2R5LWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgJl9faW5wdXQge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gICAgd2lkdGg6IDA7XFxyXFxuICAgIHBhZGRpbmc6IDA7XFxyXFxuICAgIGJvcmRlcjogbm9uZSAhaW1wb3J0YW50O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIG91dGxpbmU6IG5vbmU7XFxyXFxuICAgICY6Oi13ZWJraXQtc2VhcmNoLWNhbmNlbC1idXR0b24ge1xcclxcbiAgICAgIC13ZWJraXQtYXBwZWFyYW5jZTogbm9uZTtcXHJcXG4gICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbiAgJl9fbGluayB7XFxyXFxuICAgIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgICB3aWR0aDogNDRweDtcXHJcXG4gICAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICAgIHotaW5kZXg6IDE7XFxyXFxuICB9XFxyXFxuICAmX19jbG9zZSB7XFxyXFxuICAgIGRpc3BsYXk6IG5vbmU7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIHdpZHRoOiA0NHB4O1xcclxcbiAgICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gICAgei1pbmRleDogMTtcXHJcXG4gICAgbWFyZ2luLWxlZnQ6IDhweDtcXHJcXG4gIH1cXHJcXG59XFxyXFxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09XFxyXFxuXFxyXFxuLy9CdXJnZXJcXHJcXG5cXHJcXG4uaWNvbi1tZW51IHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxuXFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogZW0oNjEwKSkge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgICBwYWRkaW5nOiAxM3B4IDdweDtcXHJcXG4gICAgd2lkdGg6IHJlbSg0NCk7XFxyXFxuICAgIGhlaWdodDogcmVtKDQ0KTtcXHJcXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgQG1lZGlhIChhbnktaG92ZXI6IG5vbmUpIHtcXHJcXG4gICAgICBjdXJzb3I6IGRlZmF1bHQ7XFxyXFxuICAgIH1cXHJcXG4gICAgc3BhbixcXHJcXG4gICAgJjo6YmVmb3JlLFxcclxcbiAgICAmOjphZnRlciB7XFxyXFxuICAgICAgY29udGVudDogXFxcIlxcXCI7XFxyXFxuICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZSAwcztcXHJcXG4gICAgICByaWdodDogNTAlO1xcclxcbiAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gICAgICB3aWR0aDogcGVyY2VudCgyMCwgNDQpO1xcclxcbiAgICAgIGhlaWdodDogcmVtKDMpO1xcclxcbiAgICAgIGJhY2tncm91bmQtY29sb3I6ICMxNjE2MTY7XFxyXFxuICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoNTAlLCAwcHgpO1xcclxcbiAgICB9XFxyXFxuICAgICY6OmJlZm9yZSB7XFxyXFxuICAgICAgdG9wOiBwZXJjZW50KDEyLCA0NCk7XFxyXFxuICAgIH1cXHJcXG4gICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIGJvdHRvbTogcGVyY2VudCgxMiwgNDQpO1xcclxcbiAgICB9XFxyXFxuICAgIHNwYW4ge1xcclxcbiAgICAgIHRvcDogY2FsYyg1MCUgLSByZW0oMS41KSk7XFxyXFxuICAgIH1cXHJcXG4gICAgLm1lbnUtb3BlbiAmIHtcXHJcXG4gICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICAgICAgcmlnaHQ6IDE2cHg7XFxyXFxuICAgICAgei1pbmRleDogMztcXHJcXG4gICAgICBzcGFuIHtcXHJcXG4gICAgICAgIHdpZHRoOiAwO1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjpiZWZvcmUsXFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgIH1cXHJcXG4gICAgICAmOjpiZWZvcmUge1xcclxcbiAgICAgICAgdG9wOiBjYWxjKDUwJSAtIHJlbSgxLjUpKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoLTQ1ZGVnKTtcXHJcXG4gICAgICB9XFxyXFxuICAgICAgJjo6YWZ0ZXIge1xcclxcbiAgICAgICAgYm90dG9tOiBjYWxjKDUwJSAtIHJlbSgxLjUpKTtcXHJcXG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKDUwJSwgNTAlKSByb3RhdGUoNDVkZWcpO1xcclxcbiAgICAgIH1cXHJcXG4gICAgfVxcclxcbiAgfVxcclxcbn1cXHJcXG5cIixcIi8v0J/RltC00LrQu9GO0YfQtdC90L3RjyDRiNGA0LjRhNGC0YNcXHJcXG5AbWl4aW4gZm9udCgkZm9udF9uYW1lLCAkZmlsZV9uYW1lLCAkd2VpZ2h0LCAkc3R5bGUpIHtcXHJcXG5cXHRAZm9udC1mYWNlIHtcXHJcXG5cXHRcXHRmb250LWZhbWlseTogJGZvbnRfbmFtZTtcXHJcXG5cXHRcXHRmb250LWRpc3BsYXk6IHN3YXA7XFxyXFxuXFx0XFx0c3JjOiB1cmwoXFxcIi4uL2ZvbnRzLyN7JGZpbGVfbmFtZX0ud29mZjJcXFwiKSBmb3JtYXQoXFxcIndvZmYyXFxcIiksIHVybChcXFwiLi4vZm9udHMvI3skZmlsZV9uYW1lfS53b2ZmXFxcIikgZm9ybWF0KFxcXCJ3b2ZmXFxcIik7XFxyXFxuXFx0XFx0Zm9udC13ZWlnaHQ6ICN7JHdlaWdodH07XFxyXFxuXFx0XFx0Zm9udC1zdHlsZTogI3skc3R5bGV9O1xcclxcblxcdH1cXHJcXG59XFxyXFxuLy9QZXJjZW50XFxyXFxuQGZ1bmN0aW9uIHBlcmNlbnQoJHB4LCAkZnJvbSkge1xcclxcblxcdCRyZXN1bHQ6IG1hdGguZGl2KCRweCwgJGZyb20pICogMTAwJTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vUkVNXFxyXFxuQGZ1bmN0aW9uIHJlbSgkcHgpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsIDE2KSArIHJlbTtcXHJcXG5cXHRAcmV0dXJuICRyZXN1bHQ7XFxyXFxufVxcclxcbi8vRU1cXHJcXG5AZnVuY3Rpb24gZW0oJHB4LCAkY3VycmVudDogMTYpIHtcXHJcXG5cXHQkcmVzdWx0OiBtYXRoLmRpdigkcHgsICRjdXJyZW50KSArIGVtO1xcclxcblxcdEByZXR1cm4gJHJlc3VsdDtcXHJcXG59XFxyXFxuXFxyXFxuLy9DdXJyZW5jeVxcclxcbkBtaXhpbiBjdXJyZW5jeSgkc3ltKSB7XFxyXFxuXFx0Jjo6YWZ0ZXIge1xcclxcblxcdFxcdGNvbnRlbnQ6IFxcXCIjeyRzeW19XFxcIjtcXHJcXG5cXHR9XFxyXFxufVxcclxcblxcclxcbi8vIEdyaWRzXFxyXFxuQG1peGluIGdyaWRDYXJkcygkdHlwZTogZml0LCAkbWluOiAyODBweCwgJG1heDogMWZyLCAkZ2FwOiAzMHB4KSB7XFxyXFxuXFx0ZGlzcGxheTogZ3JpZDtcXHJcXG5cXHRnYXA6ICRnYXA7XFxyXFxuXFx0Z3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoYXV0by0jeyR0eXBlfSwgbWlubWF4KCRtaW4sICRtYXgpKTtcXHJcXG59XFxyXFxuXFxyXFxuLy8g0JDQtNCw0L/RgtC40LLQvdCwINCy0LvQsNGB0YLQuNCy0ZbRgdGC0YwgKGNsYW1wKVxcclxcbkBtaXhpbiBhZGFwdGl2ZVZhbHVlKCRwcm9wZXJ0eSwgJHN0YXJ0U2l6ZSwgJG1pblNpemUsICRrZWVwU2l6ZTogMCwgJHdpZHRoRnJvbTogJGNvbnRhaW5lcldpZHRoLCAkd2lkdGhUbzogJG1pbldpZHRoKSB7XFxyXFxuXFx0QGlmICgkc3RhcnRTaXplPT0wKSB7XFxyXFxuXFx0XFx0JHN0YXJ0U2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcdEBpZiAoJG1pblNpemU9PTApIHtcXHJcXG5cXHRcXHQkbWluU2l6ZTogMC4wMDAwMDE7XFxyXFxuXFx0fVxcclxcblxcclxcblxcdC8vINCU0LvRjyBjYWxjKCk7XFxyXFxuXFx0JGFkZFNpemU6IG1hdGguZGl2KCRzdGFydFNpemUgLSAkbWluU2l6ZSwgMTYpO1xcclxcblxcclxcblxcdEBpZiAoJHdpZHRoRnJvbSA9PSAkY29udGFpbmVyV2lkdGggYW5kICRtYXhXaWR0aENvbnRhaW5lciA9PSAwKSB7XFxyXFxuXFx0XFx0JHdpZHRoRnJvbTogJG1heFdpZHRoO1xcclxcblxcdH1cXHJcXG5cXHJcXG5cXHQvLyDQkdGA0LXQudC6LdC/0L7Rl9C90YLQuCDQsiBFTVxcclxcblxcdCR3aWR0aEZyb21NZWRpYTogZW0oJHdpZHRoRnJvbSk7XFxyXFxuXFx0JHdpZHRoVG9NZWRpYTogZW0oJHdpZHRoVG8pO1xcclxcblxcclxcblxcdC8vINCk0L7RgNC80YPQu9CwINC/0LvQsNCy0LDRjtGH0L7Qs9C+INC30L3QsNGH0LXQvdC90Y9cXHJcXG5cXHQvLyDQmNGB0YLQvtGH0L3QuNC6OiBodHRwczovL2Nzcy10cmlja3MuY29tL2xpbmVhcmx5LXNjYWxlLWZvbnQtc2l6ZS13aXRoLWNzcy1jbGFtcC1iYXNlZC1vbi10aGUtdmlld3BvcnQvXFxyXFxuXFx0JHNsb3BlOiBtYXRoLmRpdigoJHN0YXJ0U2l6ZSAtICRtaW5TaXplKSwgKCR3aWR0aEZyb20gLSAkd2lkdGhUbykpO1xcclxcblxcdCR5SW50ZXJzZWN0aW9uOiAtJHdpZHRoVG8gKiAkc2xvcGUgKyAkbWluU2l6ZTtcXHJcXG5cXHRAaWYgKCR5SW50ZXJzZWN0aW9uPT0wKSB7XFxyXFxuXFx0XFx0JHlJbnRlcnNlY3Rpb246IDAuMDAwMDAxO1xcclxcblxcdH1cXHJcXG5cXHQkZmx5VmFsdWU6ICN7cmVtKCR5SW50ZXJzZWN0aW9uKX1cXFwiICsgXFxcIiAjeyRzbG9wZSAqIDEwMH12dztcXHJcXG5cXHJcXG5cXHQvLyDQntGC0YDQuNC80LDQvdC90Y8g0LfQvdCw0YfQtdC90L3RjyDQstC70LDRgdGC0LjQstC+0YHRgtGWXFxyXFxuXFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRtaW5TaXplKSBcXFwiLFxcXCIgJGZseVZhbHVlIFxcXCIsXFxcIiByZW0oJHN0YXJ0U2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHQvLyDQr9C60YnQviDQvdC10LPQsNGC0LjQstC90ZYg0LfQvdCw0YfQtdC90L3Rj1xcclxcblxcdEBpZiAoJG1pblNpemUgPiAkc3RhcnRTaXplKSB7XFxyXFxuXFx0XFx0JHByb3BlcnR5VmFsdWU6ICN7XFxcImNsYW1wKFxcXCIgcmVtKCRzdGFydFNpemUpIFxcXCIsXFxcIiAkZmx5VmFsdWUgXFxcIixcXFwiIHJlbSgkbWluU2l6ZSkgXFxcIilcXFwifTtcXHJcXG5cXHR9XFxyXFxuXFxyXFxuXFx0Ly8g0JLRgdGC0LDQvdC+0LLQu9GO0ZTQvNC+INC30L3QsNGH0LXQvdC90Y8g0LfQsCDQt9Cw0LzQvtCy0YfRg9Cy0LDQvdC90Y/QvFxcclxcblxcdEBpZiAka2VlcFNpemUgIT0gMSBhbmQgJGtlZXBTaXplICE9IDMge1xcclxcblxcdFxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhGcm9tTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHJlbSgkc3RhcnRTaXplKTtcXHJcXG5cXHRcXHR9XFxyXFxuXFx0fVxcclxcblxcdC8vINCQ0LTQsNC/0YLRg9GU0LzQviDRgNC+0LfQvNGW0YAg0YMg0L/RgNC+0LzRltC20LrRgyDQvNGW0LYg0LfQsNC30L3QsNGH0LXQvdC40LzQuCDRiNC40YDQuNC90LDQvNC4INCyJ9GO0L/QvtGA0YLRg1xcclxcblxcdEBtZWRpYSAobWluLXdpZHRoOiAkd2lkdGhUb01lZGlhKSBhbmQgKG1heC13aWR0aDogJHdpZHRoRnJvbU1lZGlhKSB7XFxyXFxuXFx0XFx0Ly8g0K/QutGJ0L4g0L/RltC00YLRgNC40LzRg9GU0YLRjNGB0Y8gY2xhbXAoKTtcXHJcXG5cXHRcXHRAc3VwcG9ydHMgKCN7JHByb3BlcnR5fTogJHByb3BlcnR5VmFsdWUpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06ICRwcm9wZXJ0eVZhbHVlO1xcclxcblxcdFxcdH1cXHJcXG5cXHRcXHQvLyDQr9C60YnQviDQvdC1INC/0ZbQtNGC0YDQuNC80YPRlNGC0YzRgdGPIGNsYW1wKCk7XFxyXFxuXFx0XFx0QHN1cHBvcnRzIG5vdCAoI3skcHJvcGVydHl9OiAkcHJvcGVydHlWYWx1ZSkge1xcclxcblxcdFxcdFxcdCN7JHByb3BlcnR5fTogY2FsYygje3JlbSgkbWluU2l6ZSl9ICsgI3skYWRkU2l6ZX0gKiAoMTAwdncgLSAje3JlbSgkd2lkdGhUbyl9KSAvICN7bWF0aC5kaXYoJHdpZHRoRnJvbSwgMTYpIC0gbWF0aC5kaXYoJHdpZHRoVG8sIDE2KX0pO1xcclxcblxcdFxcdH1cXHJcXG5cXHR9XFxyXFxuXFx0QGlmICRrZWVwU2l6ZSAhPSAxIGFuZCAka2VlcFNpemUgIT0gMiB7XFxyXFxuXFx0XFx0QG1lZGlhIChtYXgtd2lkdGg6ICR3aWR0aFRvTWVkaWEpIHtcXHJcXG5cXHRcXHRcXHQjeyRwcm9wZXJ0eX06IHJlbSgkbWluU2l6ZSk7XFxyXFxuXFx0XFx0fVxcclxcblxcdH1cXHJcXG59XFxyXFxuXCIsXCIvLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG4uZm9vdGVyIHtcXHJcXG4gIC8vIC5mb290ZXJfX2Zvcm1cXHJcXG5cXHJcXG4gICZfX2Zvcm0ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmZvb3Rlcl9fYm90dG9tXFxyXFxuXFxyXFxuICAmX19ib3R0b20ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4uZm9ybS1mb290ZXIge1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy10b3BcXFwiLCAxMjAsIDYwKTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctYm90dG9tXFxcIiwgMTIwLCA2MCk7XFxyXFxuICAvLyAuZm9ybS1mb290ZXJfX2NvbnRhaW5lclxcclxcblxcclxcbiAgJl9fY29udGFpbmVyIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5mb3JtLWZvb3Rlcl9fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxyXFxuICAgIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtYmxhY2ssICMyMDIyMjYpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDYwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCA2MCwgMTIsIDAsIDEwMjQsIDMyMCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcInBhZGRpbmctbGVmdFxcXCIsIDQwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1yaWdodFxcXCIsIDQwLCAxMiwgMCwgMTAyNCwgMzIwKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJnYXBcXFwiLCAxMTYsIDE2KTtcXHJcXG4gICAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuZm9ybS1mb290ZXJfX2xlZnRcXHJcXG5cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmZvcm0tZm9vdGVyX19yaWdodFxcclxcblxcclxcbiAgJl9fcmlnaHQge1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubGVmdC1mb3JtLWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgNDUxcHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG4gIC8vIC5sZWZ0LWZvcm0tZm9vdGVyX190aXRsZVxcclxcblxcclxcbiAgJl9fdGl0bGUge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC13aGl0ZSwgI2ZmZik7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDQwLCAyNCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdig0OCwgNDApO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMjAsIDEyKTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LWZvcm0tZm9vdGVyX19kZXNjXFxyXFxuXFxyXFxuICAmX19kZXNjIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQtZ3JheS1kYXJrLWJnLCAjOWY5ZjlmKTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5yaWdodC1mb3JtLWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgNTUycHg7XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbiAgICBmbGV4OiAxIDEgYXV0bztcXHJcXG4gIH1cXHJcXG4gIC8vIC5yaWdodC1mb3JtLWZvb3Rlcl9fZm9ybVxcclxcblxcclxcbiAgJl9fZm9ybSB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAucmlnaHQtZm9ybS1mb290ZXJfX2lucHV0XFxyXFxuXFxyXFxuICAmX19pbnB1dCB7XFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDIwLCA4KTtcXHJcXG4gICAgfVxcclxcbiAgfVxcclxcblxcclxcbiAgJl9fYnRuIHtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXRvcFxcXCIsIDQ0LCAzMik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbi5ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGJhY2tncm91bmQ6IHZhcigtLWJhY2tncm91bmQtZ3JheSwgI2Y0ZjVmOCk7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDI0LCAxNik7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLWJvdHRvbVxcXCIsIDI0LCAxNik7XFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fY29udGFpbmVyXFxyXFxuXFxyXFxuICAmX19jb250YWluZXIge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX2NvbnRlbnRcXHJcXG5cXHJcXG4gICZfX2NvbnRlbnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmJvdHRvbS1mb290ZXJfX3RvcFxcclxcblxcclxcbiAgJl9fdG9wIHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tZm9vdGVyX19taWRcXHJcXG5cXHJcXG4gICZfX21pZCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fc29jaWFsc1xcclxcblxcclxcbiAgJl9fc29jaWFscyB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYm90dG9tLWZvb3Rlcl9fYm90dG9tXFxyXFxuXFxyXFxuICAmX19ib3R0b20ge1xcclxcbiAgfVxcclxcbn1cXHJcXG4udG9wLWJvdHRvbS1mb290ZXIge1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicGFkZGluZy1ib3R0b21cXFwiLCAyOCwgMjApO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlOWU5ZTk7XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgNDAsIDUyKTtcXHJcXG4gIC8vIC50b3AtYm90dG9tLWZvb3Rlcl9fbG9nb1xcclxcblxcclxcbiAgJl9fbG9nbyB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZ2FwXFxcIiwgMjMzLCAxNiwgMCwgMTIwMCwgOTQ0KTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAvLyAgIGdyaWQtdGVtcGxhdGU6IDFmciAvIG1pbm1heCgyODhweCwgMzg5cHgpIDFmciAyODhweCAyODhweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICAvLyAgZ3JpZC10ZW1wbGF0ZTogMWZyIDFmciAvIG1pbm1heCgyODhweCwgMzg5cHgpIDE2cHggMjg4cHg7XFxyXFxuICAgIC8vICByb3ctZ2FwOiA0MHB4O1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgLy8gIGdyaWQtdGVtcGxhdGU6IDFmciAxZnIgLyAxZnIgMWZyO1xcclxcbiAgICAvLyAgY29sdW1uLWdhcDogMTZweDtcXHJcXG4gICAgLy8gIHJvdy1nYXA6IDYycHg7XFxyXFxuICB9XFxyXFxuICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZVNtYWxsKSB7XFxyXFxuICAgIC8vICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICAvLyAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXHJcXG4gICAgLy8gIHJvdy1nYXA6IDUycHg7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWlkLWJvdHRvbS1mb290ZXJfX2xlZnRcXHJcXG5cXHJcXG4gICZfX2xlZnQge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLm1pZC1ib3R0b20tZm9vdGVyX19taWRcXHJcXG5cXHJcXG4gICZfX21pZCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubWlkLWJvdHRvbS1mb290ZXJfX3JpZ2h0XFxyXFxuXFxyXFxuICAmX19yaWdodCB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5sZWZ0LW1pZC1mb290ZXIge1xcclxcbiAgZmxleDogMCAxIDM4OXB4O1xcclxcbiAgLy8gICBncmlkLXJvdzogc3BhbiAyO1xcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGUpIHtcXHJcXG4gICAgZmxleDogMSAxIGF1dG87XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA2MiwgNTgpO1xcclxcbiAgfVxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fdGV4dFxcclxcblxcclxcbiAgJl9fdGV4dCB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcXHJcXG4gICAgZm9udC1mZWF0dXJlLXNldHRpbmdzOiBcXFwibGlnYVxcXCIgb2ZmO1xcclxcbiAgICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyNCwgMTgpO1xcclxcbiAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjgsIDI0KTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuMjRweDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5sZWZ0LW1pZC1mb290ZXJfX3N0cmVldFxcclxcblxcclxcbiAgJl9fc3RyZWV0IHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAyNCwgMzIpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fcGhvbmVcXHJcXG5cXHJcXG4gICZfX3Bob25lIHtcXHJcXG4gICAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA4LCAxNik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19lbWFpbFxcclxcblxcclxcbiAgJl9fZW1haWwge1xcclxcbiAgICBkaXNwbGF5OiBibG9jaztcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDI0LCAzMik7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAubGVmdC1taWQtZm9vdGVyX19idG5zXFxyXFxuXFxyXFxuICAmX19idG5zIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZ2FwOiA4cHg7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCA2MiwgMzgpO1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fYnRuXFxyXFxuXFxyXFxuICAmX19idG4ge1xcclxcbiAgfVxcclxcblxcclxcbiAgLy8gLmxlZnQtbWlkLWZvb3Rlcl9fc29jaWFsc1xcclxcblxcclxcbiAgJl9fc29jaWFscyB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5zb2NpYWxzLWxlZnQtbWlkLWZvb3RlciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGdhcDogOHB4O1xcclxcbiAgLy8gLnNvY2lhbHMtbGVmdC1taWQtZm9vdGVyX19pdGVtXFxyXFxuXFxyXFxuICAmX19pdGVtIHtcXHJcXG4gICAgbWluLXdpZHRoOiA0NHB4O1xcclxcbiAgICBtaW4taGVpZ2h0OiA0NHB4O1xcclxcbiAgICBtYXgtd2lkdGg6IDQ0cHg7XFxyXFxuICAgIG1heC1oZWlnaHQ6IDQ0cHg7XFxyXFxuICAgIHBhZGRpbmc6IDEwcHg7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW9yLWRldmlkZXItbGlnaHQtYmcsICNlOWU5ZTkpO1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5zb2NpYWxzLWxlZnQtbWlkLWZvb3Rlcl9fZGVzY1xcclxcblxcclxcbiAgJl9fZGVzYyB7XFxyXFxuICAgIG1hcmdpbi1sZWZ0OiAxNnB4O1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB9XFxyXFxufVxcclxcbi8vIC5taWQtbWlkLWJvdHRvbS1mb290ZXIge1xcclxcbi8vICAgZ3JpZC1jb2x1bW46IDM7XFxyXFxuLy8gICBAbWVkaWEgKG1heC13aWR0aDogJG1vYmlsZSkge1xcclxcbi8vICAgICBncmlkLWNvbHVtbjogMTtcXHJcXG4vLyAgICAgZ3JpZC1yb3c6IDI7XFxyXFxuLy8gICB9XFxyXFxuLy8gICAvLyAubWlkLW1pZC1ib3R0b20tZm9vdGVyX190aXRsZVxcclxcblxcclxcbi8vICAgJl9fdGl0bGUge1xcclxcbi8vICAgICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuLy8gICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuLy8gICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuLy8gICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNCwgMjApO1xcclxcbi8vICAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzIsIDI0KTtcXHJcXG4vLyAgIH1cXHJcXG5cXHJcXG4vLyAgIC8vIC5taWQtbWlkLWJvdHRvbS1mb290ZXJfX2xpc3RcXHJcXG5cXHJcXG4vLyAgICZfX2xpc3Qge1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG4vLyAubGlzdC1taWQtYm90dG9tLWZvb3RlciB7XFxyXFxuLy8gICAvLyAubGlzdC1taWQtYm90dG9tLWZvb3Rlcl9faXRlbVxcclxcblxcclxcbi8vICAgJl9faXRlbSB7XFxyXFxuLy8gICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuLy8gICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDEyLCAyMCk7XFxyXFxuLy8gICAgIH1cXHJcXG4vLyAgIH1cXHJcXG5cXHJcXG4vLyAgIC8vIC5saXN0LW1pZC1ib3R0b20tZm9vdGVyX19saW5rXFxyXFxuXFxyXFxuLy8gICAmX19saW5rIHtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuLy8gLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4vLyAgIGdyaWQtY29sdW1uOiA0O1xcclxcbi8vICAgQG1lZGlhIChtYXgtd2lkdGg6IGVtKDEwMjQpKSB7XFxyXFxuLy8gICAgIGdyaWQtY29sdW1uOiAzO1xcclxcbi8vICAgICBncmlkLXJvdzogMjtcXHJcXG4vLyAgIH1cXHJcXG4vLyAgIEBtZWRpYSAobWF4LXdpZHRoOiAkbW9iaWxlKSB7XFxyXFxuLy8gICAgIGdyaWQtY29sdW1uOiAyO1xcclxcbi8vICAgICBncmlkLXJvdzogMjtcXHJcXG4vLyAgIH1cXHJcXG4vLyAgIC8vIC5yaWdodC1taWQtYm90dG9tLWZvb3Rlcl9fdGl0bGVcXHJcXG5cXHJcXG4vLyAgICZfX3RpdGxlIHtcXHJcXG4vLyAgICAgY29sb3I6IHZhcigtLXRleHQtYmxhY2ssICMxNjE2MTYpO1xcclxcbi8vICAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJmb250LXNpemVcXFwiLCAyMCwgMTYpO1xcclxcbi8vICAgICBmb250LXdlaWdodDogNTAwO1xcclxcbi8vICAgICBsaW5lLWhlaWdodDogbWF0aC5kaXYoMjQsIDIwKTtcXHJcXG4vLyAgICAgbGV0dGVyLXNwYWNpbmc6IC0wLjZweDtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDMyLCAyNCk7XFxyXFxuLy8gICB9XFxyXFxuXFxyXFxuLy8gICAvLyAucmlnaHQtbWlkLWJvdHRvbS1mb290ZXJfX2xpc3RcXHJcXG5cXHJcXG4vLyAgICZfX2xpc3Qge1xcclxcbi8vICAgfVxcclxcbi8vIH1cXHJcXG4vLyAubGlzdC1yaWdodC1ib3R0b20tZm9vdGVyIHtcXHJcXG4vLyAgIC8vIC5saXN0LXJpZ2h0LWJvdHRvbS1mb290ZXJfX2l0ZW1cXHJcXG5cXHJcXG4vLyAgICZfX2l0ZW0ge1xcclxcbi8vICAgICAmOm5vdCg6bGFzdC1jaGlsZCkge1xcclxcbi8vICAgICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi1ib3R0b21cXFwiLCAxMiwgMjApO1xcclxcbi8vICAgICB9XFxyXFxuLy8gICB9XFxyXFxuXFxyXFxuLy8gICAvLyAubGlzdC1yaWdodC1ib3R0b20tZm9vdGVyX19saW5rXFxyXFxuXFxyXFxuLy8gICAmX19saW5rIHtcXHJcXG4vLyAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4vLyAgIH1cXHJcXG4vLyB9XFxyXFxuLnJpZ2h0LW1pZC1ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxyXFxuICBjb2x1bW4tZ2FwOiAxNnB4O1xcclxcbiAgcm93LWdhcDogNDBweDtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXHJcXG4gIH1cXHJcXG4gIC8vIC5yaWdodC1taWQtYm90dG9tLWZvb3Rlcl9faXRlbVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICB9XFxyXFxufVxcclxcbi5pdGVtLXJpZ2h0LWZvb3RlciB7XFxyXFxuICBmbGV4OiAwIDEgMjg4cHg7XFxyXFxuICAvLyAuaXRlbS1yaWdodC1mb290ZXJfX3RpdGxlXFxyXFxuICBjb2xvcjogdmFyKC0tdGV4dC1ibGFjaywgIzE2MTYxNik7XFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDIwLCAxNik7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyNCwgMjApO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuNnB4O1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXJnaW4tYm90dG9tXFxcIiwgMzIsIDI0KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5pdGVtLXJpZ2h0LWZvb3Rlcl9fbGlzdFxcclxcblxcclxcbiAgJl9fbGlzdCB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcImZvbnQtc2l6ZVxcXCIsIDE2LCAxNCk7XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgfVxcclxcbn1cXHJcXG4ubGlzdC1pdGVtLXJpZ2h0LWZvb3RlciB7XFxyXFxuICAvLyAubGlzdC1pdGVtLXJpZ2h0LWZvb3Rlcl9faXRlbVxcclxcblxcclxcbiAgJl9faXRlbSB7XFxyXFxuICAgICY6bm90KDpsYXN0LWNoaWxkKSB7XFxyXFxuICAgICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLWJvdHRvbVxcXCIsIDEyLCAyMCk7XFxyXFxuICAgIH1cXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5saXN0LWl0ZW0tcmlnaHQtZm9vdGVyX19saW5rXFxyXFxuXFxyXFxuICAmX19saW5rIHtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuLmJvdHRvbS1ib3R0b20tZm9vdGVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxuICByb3ctZ2FwOiA4cHg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxyXFxuICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJwYWRkaW5nLXRvcFxcXCIsIDI0LCAxNik7XFxyXFxuICBib3JkZXItdG9wOiAxcHggc29saWQgI2U5ZTllOTtcXHJcXG4gIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1hcmdpbi10b3BcXFwiLCA0MiwgNTIpO1xcclxcbiAgLy8gLmJvdHRvbS1ib3R0b20tZm9vdGVyX19jb3B5cmlnaHRcXHJcXG5cXHJcXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWdyYXktbGlnaHQtYmcsICM3NTc1NzUpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiBtYXRoLmRpdigyMCwgMTYpO1xcclxcbiAgJl9fY29weXJpZ2h0IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5ib3R0b20tYm90dG9tLWZvb3Rlcl9fcG9saWN5XFxyXFxuXFxyXFxuICAmX19wb2xpY3kge1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG4vLz09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT1cXHJcXG5cIixcIi5hZHZhbnRhZ2VzIHtcXHJcXG4gIC8vIC5hZHZhbnRhZ2VzX19jb250YWluZXJcXHJcXG5cXHJcXG4gICZfX2NvbnRhaW5lciB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYWR2YW50YWdlc19fY29udGVudFxcclxcblxcclxcbiAgJl9fY29udGVudCB7XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuYWR2YW50YWdlc19fY2FyZHNcXHJcXG5cXHJcXG4gICZfX2NhcmRzIHtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAgZmxleC13cmFwOiB3cmFwO1xcclxcbiAgICBtYXJnaW46IDAgcmVtKC04KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwicm93LWdhcFxcXCIsIDQwLCAyMCk7XFxyXFxuICB9XFxyXFxufVxcclxcbi5jYXJkLWFkdmFudGFnZXMge1xcclxcbiAgZmxleDogMCAxIDMzLjMzMyU7XFxyXFxuICBwYWRkaW5nOiAwIHJlbSg4KTtcXHJcXG4gIEBtZWRpYSAobWF4LXdpZHRoOiBlbSgxMDI0KSkge1xcclxcbiAgICBmbGV4OiAwIDEgNTAlO1xcclxcbiAgfVxcclxcbiAgQG1lZGlhIChtYXgtd2lkdGg6ICRtb2JpbGVTbWFsbCkge1xcclxcbiAgICBmbGV4OiAxIDEgMTAwJTtcXHJcXG4gIH1cXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX2JvZHlcXHJcXG5cXHJcXG4gICZfX2JvZHkge1xcclxcbiAgICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gICZfX2ltZyB7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1heC13aWR0aFxcXCIsIDYwLCA0NCk7XFxyXFxuICAgIEBpbmNsdWRlIGFkYXB0aXZlVmFsdWUoXFxcIm1heC1oZWlnaHRcXFwiLCA2MCwgNDQpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtaW4td2lkdGhcXFwiLCA2MCwgNDQpO1xcclxcbiAgICBAaW5jbHVkZSBhZGFwdGl2ZVZhbHVlKFxcXCJtYXgtaGVpZ2h0XFxcIiwgNjAsIDQ0KTtcXHJcXG5cXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwibWFyZ2luLXJpZ2h0XFxcIiwgMTYsIDEyKTtcXHJcXG4gICAgZGlzcGxheTogZmxleDtcXHJcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICAgIGJvcmRlci1yYWRpdXM6IDhweDtcXHJcXG4gICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYm9yZGVyLW9yLWRldmlkZXItbGlnaHQtYmcsICNlOWU5ZTkpO1xcclxcbiAgICBpbWcge1xcclxcbiAgICAgIG1heC13aWR0aDogMjRweDtcXHJcXG4gICAgICBtYXgtaGVpZ2h0OiAyNHB4O1xcclxcbiAgICB9XFxyXFxuICB9XFxyXFxuXFxyXFxuICAvLyAuY2FyZC1hZHZhbnRhZ2VzX19jb250ZW50XFxyXFxuXFxyXFxuICAmX19jb250ZW50IHtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX3RpdGxlXFxyXFxuXFxyXFxuICAmX190aXRsZSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWJsYWNrLCAjMTYxNjE2KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMjAsIDE2KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDI0LCAyMCk7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IHJlbSg4KTtcXHJcXG4gIH1cXHJcXG5cXHJcXG4gIC8vIC5jYXJkLWFkdmFudGFnZXNfX2Rlc2NcXHJcXG5cXHJcXG4gICZfX2Rlc2Mge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dC1ncmF5LWxpZ2h0LWJnLCAjNzU3NTc1KTtcXHJcXG4gICAgQGluY2x1ZGUgYWRhcHRpdmVWYWx1ZShcXFwiZm9udC1zaXplXFxcIiwgMTYsIDE0KTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IG1hdGguZGl2KDIwLCAxNik7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJhY2Y4ZTc2N2I2NDA3NDRmZjdlYlwiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==