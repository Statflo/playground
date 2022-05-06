import { Combobox, Transition, Listbox } from '@headlessui/react';
import React__default, { createElement, useState, useEffect, Fragment, useRef } from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Rings } from 'react-loader-spinner';

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = "/*! tailwindcss v3.0.23 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:\"\"}html{-webkit-text-size-adjust:100%;font-family:BrandonText,ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;line-height:1.5;-moz-tab-size:4;-o-tab-size:4;tab-size:4}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-size:1em}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-size:100%;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}[type=button],[type=reset],[type=submit],button{-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,fieldset,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input:-ms-input-placeholder,textarea:-ms-input-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: }.react-datepicker__input-container input{background-color:transparent!important;font-size:.875rem!important;height:2.5rem!important;line-height:1.25rem!important;width:100%!important}.react-datepicker__input-container input::-moz-placeholder{font-size:.875rem!important;line-height:1.25rem!important}.react-datepicker__input-container input:-ms-input-placeholder{font-size:.875rem!important;line-height:1.25rem!important}.react-datepicker__input-container input::placeholder{font-size:.875rem!important;line-height:1.25rem!important}.react-datepicker__input-container input:focus{outline:2px solid transparent!important;outline-offset:2px!important}.react-datepicker__triangle{display:none}.react-datepicker-popper{transform:translate3d(0,32px,0)!important}.react-datepicker-popper [data-placement^=bottom],.react-datepicker-popper [data-placement^=top]{padding:0;width:345px}.react-datepicker{--tw-border-opacity:1!important;--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05)!important;--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color)!important;border-color:hsl(0 0% 90%/var(--tw-border-opacity))!important;border-width:1px!important;box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)!important}.react-datepicker__header{--tw-bg-opacity:1!important;background-color:rgb(255 255 255/var(--tw-bg-opacity))!important;border-bottom-width:0!important;font-size:.875rem!important;font-weight:500!important;line-height:1rem!important}.react-datepicker__navigation-icon--next:before,.react-datepicker__navigation-icon--previous:before{--tw-text-opacity:1!important;color:hsl(0 0% 47.6%/var(--tw-text-opacity))!important;margin-top:.5rem!important}.react-datepicker__navigation--next--with-time:not(.react-datepicker__navigation--next--with-today-button){right:102px}.react-datepicker__month-container{border-color:rgba(31,31,31,.15)!important;border-right-width:1px!important;padding:.25rem!important}.react-datepicker__current-month{--tw-text-opacity:1!important;color:hsl(0 0% 17.6%/var(--tw-text-opacity))!important;font-size:.875rem!important;font-weight:500!important;line-height:1.25rem!important}.react-datepicker__day-names{padding-top:.5rem}.react-datepicker__day-name{--tw-text-opacity:1!important;color:hsl(0 0% 47.6%/var(--tw-text-opacity))!important;font-size:.875rem!important;font-weight:500!important;line-height:1.25rem!important}.react-datepicker__time-list-item{align-items:center;display:flex;justify-content:center}.react-datepicker__time-container{width:6rem}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected{--tw-bg-opacity:1!important;background-color:hsl(229.3 63.6% 56.9%/var(--tw-bg-opacity))!important}.react-datepicker__time-container .react-datepicker__time .react-datepicker__time-box ul.react-datepicker__time-list li.react-datepicker__time-list-item--selected:hover{--tw-bg-opacity:1!important;background-color:hsl(229.3 63.6% 46.9%/var(--tw-bg-opacity))!important}.react-datepicker__week{font-size:.875rem;line-height:1.25rem}.react-datepicker__day--outside-month{--tw-text-opacity:1;color:hsl(0 0% 62.6%/var(--tw-text-opacity))}.react-datepicker__day--keyboard-selected,.react-datepicker__day--selected{--tw-bg-opacity:1!important;background-color:hsl(229.3 63.6% 56.9%/var(--tw-bg-opacity))!important;border-radius:9999px!important}.react-datepicker__day--keyboard-selected:hover,.react-datepicker__day--selected:hover{--tw-bg-opacity:1!important;background-color:hsl(229.3 63.6% 46.9%/var(--tw-bg-opacity))!important;border-radius:9999px!important}.react-datepicker__day{-webkit-user-select:none!important;-moz-user-select:none!important;-ms-user-select:none!important;user-select:none!important}.react-datepicker__day,.react-datepicker__day:hover{border-radius:9999px!important}.react-datepicker__time-container{border-style:none!important}.react-datepicker-time__header{--tw-text-opacity:1!important;color:hsl(0 0% 17.6%/var(--tw-text-opacity))!important;font-size:.875rem!important;font-weight:500!important;line-height:1.25rem!important}.pointer-events-none{pointer-events:none}.absolute{position:absolute}.relative{position:relative}.right-3{right:.75rem}.top-\\[10px\\]{top:10px}.bottom-11{bottom:2.75rem}.z-10{z-index:10}.mt-1{margin-top:.25rem}.ml-1{margin-left:.25rem}.mt-80{margin-top:20rem}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.h-6{height:1.5rem}.h-10{height:2.5rem}.h-8{height:2rem}.h-4{height:1rem}.h-2{height:.5rem}.max-h-60{max-height:15rem}.w-full{width:100%}.w-4{width:1rem}.w-2{width:.5rem}.w-5{width:1.25rem}.w-8{width:2rem}.w-96{width:24rem}.flex-1{flex:1 1 0%}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.cursor-pointer{cursor:pointer}.cursor-default{cursor:default}.select-none{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.appearance-none{-webkit-appearance:none;-moz-appearance:none;appearance:none}.flex-row{flex-direction:row}.flex-col{flex-direction:column}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-y-1>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.25rem*var(--tw-space-y-reverse));margin-top:calc(.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-4>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1rem*var(--tw-space-y-reverse));margin-top:calc(1rem*(1 - var(--tw-space-y-reverse)))}.space-x-1>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.25rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.25rem*var(--tw-space-x-reverse))}.space-y-7>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.75rem*var(--tw-space-y-reverse));margin-top:calc(1.75rem*(1 - var(--tw-space-y-reverse)))}.space-y-2>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.5rem*var(--tw-space-y-reverse));margin-top:calc(.5rem*(1 - var(--tw-space-y-reverse)))}.divide-y>:not([hidden])~:not([hidden]){--tw-divide-y-reverse:0;border-bottom-width:calc(1px*var(--tw-divide-y-reverse));border-top-width:calc(1px*(1 - var(--tw-divide-y-reverse)))}.overflow-auto{overflow:auto}.overflow-hidden,.truncate{overflow:hidden}.truncate{text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.rounded{border-radius:.25rem}.rounded-sm{border-radius:.125rem}.rounded-md{border-radius:.375rem}.border{border-width:1px}.border-b{border-bottom-width:1px}.border-none{border-style:none}.border-transparent{border-color:transparent}.border-primary-default{--tw-border-opacity:1;border-color:hsl(229.3 63.6% 56.9%/var(--tw-border-opacity))}.border-gray-spacer{--tw-border-opacity:1;border-color:hsl(0 0% 90%/var(--tw-border-opacity))}.border-error-default{--tw-border-opacity:1;border-color:rgb(201 47 36/var(--tw-border-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-primary-default{--tw-bg-opacity:1;background-color:hsl(229.3 63.6% 56.9%/var(--tw-bg-opacity))}.bg-gray-hover{--tw-bg-opacity:1;background-color:hsl(229.3 63.6% 96%/var(--tw-bg-opacity))}.bg-gray-secondary{--tw-bg-opacity:1;background-color:hsl(0 0% 93%/var(--tw-bg-opacity))}.bg-success-default{--tw-bg-opacity:1;background-color:rgb(52 127 77/var(--tw-bg-opacity))}.bg-warning-l1{--tw-bg-opacity:1;background-color:rgb(255 143 57/var(--tw-bg-opacity))}.bg-gray-spacer{--tw-bg-opacity:1;background-color:hsl(0 0% 90%/var(--tw-bg-opacity))}.bg-success-l2{--tw-bg-opacity:1;background-color:rgb(237 249 240/var(--tw-bg-opacity))}.bg-warning-l2{--tw-bg-opacity:1;background-color:rgb(255 244 236/var(--tw-bg-opacity))}.bg-error-l2{--tw-bg-opacity:1;background-color:rgb(252 234 232/var(--tw-bg-opacity))}.bg-info-l2{--tw-bg-opacity:1;background-color:rgb(235 241 255/var(--tw-bg-opacity))}.p-\\[2px\\]{padding:2px}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.px-2{padding-left:.5rem;padding-right:.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-20{padding-bottom:5rem;padding-top:5rem}.px-px{padding-left:1px;padding-right:1px}.py-1{padding-bottom:.25rem;padding-top:.25rem}.px-1{padding-left:.25rem;padding-right:.25rem}.pt-3{padding-top:.75rem}.pb-2{padding-bottom:.5rem}.text-left{text-align:left}.text-center{text-align:center}.text-base{font-size:1rem;line-height:1.5rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xs{font-size:.75rem;line-height:1rem}.font-medium{font-weight:500}.font-bold{font-weight:700}.uppercase{text-transform:uppercase}.leading-6{line-height:1.5rem}.leading-4{line-height:1rem}.leading-5{line-height:1.25rem}.text-primary-default{--tw-text-opacity:1;color:hsl(229.3 63.6% 56.9%/var(--tw-text-opacity))}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.text-main-default{--tw-text-opacity:1;color:hsl(0 0% 17.6%/var(--tw-text-opacity))}.text-main-l2{--tw-text-opacity:1;color:hsl(0 0% 47.6%/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-error-default{--tw-text-opacity:1;color:rgb(201 47 36/var(--tw-text-opacity))}.text-success-default{--tw-text-opacity:1;color:rgb(52 127 77/var(--tw-text-opacity))}.text-warning-default{--tw-text-opacity:1;color:rgb(185 80 0/var(--tw-text-opacity))}.text-info-default{--tw-text-opacity:1;color:rgb(46 90 172/var(--tw-text-opacity))}.text-warning-l1{--tw-text-opacity:1;color:rgb(255 143 57/var(--tw-text-opacity))}.opacity-100{opacity:1}.opacity-0{opacity:0}.shadow{--tw-shadow:0 1px 3px 0 rgba(0,0,0,.1),0 1px 2px -1px rgba(0,0,0,.1);--tw-shadow-colored:0 1px 3px 0 var(--tw-shadow-color),0 1px 2px -1px var(--tw-shadow-color)}.shadow,.shadow-md{box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.shadow-md{--tw-shadow:0 4px 6px -1px rgba(0,0,0,.1),0 2px 4px -2px rgba(0,0,0,.1);--tw-shadow-colored:0 4px 6px -1px var(--tw-shadow-color),0 2px 4px -2px var(--tw-shadow-color)}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-text-decoration-color,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-100{transition-duration:.1s}.ease-in{transition-timing-function:cubic-bezier(.4,0,1,1)}.placeholder\\:text-main-l2::-moz-placeholder{--tw-text-opacity:1;color:hsl(0 0% 47.6%/var(--tw-text-opacity))}.placeholder\\:text-main-l2:-ms-input-placeholder{--tw-text-opacity:1;color:hsl(0 0% 47.6%/var(--tw-text-opacity))}.placeholder\\:text-main-l2::placeholder{--tw-text-opacity:1;color:hsl(0 0% 47.6%/var(--tw-text-opacity))}.checked\\:border-primary-default:checked{--tw-border-opacity:1;border-color:hsl(229.3 63.6% 56.9%/var(--tw-border-opacity))}.checked\\:bg-primary-default:checked{--tw-bg-opacity:1;background-color:hsl(229.3 63.6% 56.9%/var(--tw-bg-opacity))}.checked\\:text-white:checked{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.checked\\:after\\:relative:checked:after{content:var(--tw-content);position:relative}.checked\\:after\\:top-\\[-6px\\]:checked:after{content:var(--tw-content);top:-6px}.checked\\:after\\:left-\\[1px\\]:checked:after{content:var(--tw-content);left:1px}.checked\\:after\\:text-xs:checked:after{content:var(--tw-content);font-size:.75rem;line-height:1rem}.checked\\:after\\:font-bold:checked:after{content:var(--tw-content);font-weight:700}.checked\\:after\\:content-\\[\\\"\\2713\\\"\\]:checked:after{--tw-content:\"✓\";content:var(--tw-content)}.focus-within\\:border-primary-default:focus-within{--tw-border-opacity:1;border-color:hsl(229.3 63.6% 56.9%/var(--tw-border-opacity))}.hover\\:bg-gray-hover:hover{--tw-bg-opacity:1;background-color:hsl(229.3 63.6% 96%/var(--tw-bg-opacity))}.hover\\:bg-primary-active:hover{--tw-bg-opacity:1;background-color:hsl(229.3 63.6% 46.9%/var(--tw-bg-opacity))}.hover\\:bg-primary-hover:hover{--tw-bg-opacity:1;background-color:hsl(229.3 63.6% 51.9%/var(--tw-bg-opacity))}.hover\\:bg-opacity-20:hover{--tw-bg-opacity:0.2}.hover\\:text-primary-hover:hover{--tw-text-opacity:1;color:hsl(229.3 63.6% 51.9%/var(--tw-text-opacity))}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-2:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-0:focus,.focus\\:ring-2:focus{box-shadow:var(--tw-ring-offset-shadow),var(--tw-ring-shadow),var(--tw-shadow,0 0 #0000)}.focus\\:ring-0:focus{--tw-ring-offset-shadow:var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);--tw-ring-shadow:var(--tw-ring-inset) 0 0 0 calc(var(--tw-ring-offset-width)) var(--tw-ring-color)}.focus\\:ring-primary-default:focus{--tw-ring-opacity:1;--tw-ring-color:hsl(229.3 63.6% 56.9%/var(--tw-ring-opacity))}.focus\\:ring-offset-2:focus{--tw-ring-offset-width:2px}.disabled\\:bg-gray-spacer:disabled{--tw-bg-opacity:1;background-color:hsl(0 0% 90%/var(--tw-bg-opacity))}.disabled\\:opacity-50:disabled{opacity:.5}";
styleInject(css_248z);

// eslint-disable-next-line functional/functional-parameters
function classNames() {
  for (var _len = arguments.length, classes = new Array(_len), _key = 0; _key < _len; _key++) {
    classes[_key] = arguments[_key];
  }

  return classes.filter(Boolean).join(' ');
}

function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

function ChevronDown(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      className = _ref.className;
  return createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, createElement("path", {
    d: "M.17 1.536L3.59 5.101a.568.568 0 00.822 0L7.83 1.536C8.194 1.154 7.934.5 7.418.5H.582c-.515.004-.775.654-.41 1.036z",
    fill: "currentColor"
  }));
}

function ChevronUp(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      className = _ref.className;
  return createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 8 6",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, createElement("path", {
    d: "M7.83 4.464L4.41.899a.568.568 0 00-.822 0L.17 4.464C-.194 4.846.066 5.5.581 5.5H7.42c.515-.004.775-.654.41-1.036z",
    fill: "currentColor"
  }));
}

function Search(_ref) {
  var className = _ref.className,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height;
  return createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 14 15",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, createElement("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M10.122 9.643l3.673 3.66a.701.701 0 01-.499 1.196.703.703 0 01-.497-.204L9.12 10.63a5.648 5.648 0 01-3.45 1.177C2.543 11.806 0 9.27 0 6.153 0 3.036 2.544.5 5.67.5c3.127 0 5.67 2.536 5.67 5.653a5.61 5.61 0 01-1.218 3.49zm-4.45-7.74c-2.352 0-4.265 1.906-4.265 4.25 0 2.343 1.913 4.25 4.264 4.25s4.264-1.907 4.264-4.25c0-2.344-1.913-4.25-4.264-4.25z",
    fill: "currentColor"
  }));
}

function GroupedOptions(_ref) {
  var group = _ref.group,
      selectedOption = _ref.selectedOption;
  return React__default.createElement("div", null, React__default.createElement("div", {
    className: "px-4 pt-3 pb-2 uppercase text-main-l2 text-xs font-medium"
  }, group.label), group.options && group.options.map(function (option) {
    return React__default.createElement(Combobox.Option, {
      key: option.id,
      className: function className(_ref2) {
        var active = _ref2.active;
        return classNames('cursor-pointer select-none relative py-2 px-4', active ? 'bg-gray-hover text-main-default' : '', selectedOption && selectedOption.id === option.id ? 'bg-primary-default text-white' : 'text-main-default');
      },
      value: option
    }, React__default.createElement("span", {
      className: "block truncate font-medium"
    }, option.label));
  }));
}

function AutoComplete(_ref) {
  var _ref$openTop = _ref.openTop,
      openTop = _ref$openTop === void 0 ? false : _ref$openTop,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select' : _ref$placeholder,
      selected = _ref.selected,
      onChange = _ref.onChange;

  var _useState = useState(selected),
      selectedOption = _useState[0],
      setSelectedOption = _useState[1];

  var _useState2 = useState(false),
      grouped = _useState2[0],
      setGrouped = _useState2[1];

  var _useState3 = useState(''),
      query = _useState3[0],
      setQuery = _useState3[1];

  useEffect(function () {
    if (options.length > 0 && options[0].options && options[0].options.length > 0) {
      setGrouped(true);
    }
  }, [options]);

  var handleOnChange = function handleOnChange(option) {
    setSelectedOption(option);
    onChange(option);
  };

  var filteredOptions = function filteredOptions() {
    if (query === '') {
      return options;
    }

    var list = [];
    options.forEach(function (opt) {
      if (opt.options && opt.options.length > 0) {
        var filteredOpts = opt.options.filter(function (option) {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

        if (filteredOpts.length > 0) {
          list.push(_extends({}, opt, {
            options: filteredOpts
          }));
        }
      }

      if (!opt.options || opt.options.length === 0) {
        if (opt.label.toLowerCase().includes(query.toLowerCase())) {
          list.push(opt);
        }
      }
    });
    return list;
  };

  return React__default.createElement(Combobox, {
    value: selectedOption,
    onChange: handleOnChange
  }, function (_ref2) {
    var open = _ref2.open;
    return React__default.createElement("div", {
      className: "relative block"
    }, React__default.createElement(Combobox.Button, {
      tabIndex: 1,
      className: "group w-full border rounded-md border-gray-spacer bg-white text-left h-10 focus:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-primary-default"
    }, React__default.createElement(Combobox.Label, {
      tabIndex: 1,
      className: "px-4 select-none flex items-center justify-between text-main-default cursor-pointer space-x-2 h-8 rounded-sm focus:outline-none"
    }, React__default.createElement("span", {
      className: "text-sm font-medium text-main-default flex-1 truncate"
    }, selectedOption ? selectedOption.label : placeholder), open ? React__default.createElement(ChevronUp, {
      className: "w-2 h-2 text-main-l2"
    }) : React__default.createElement(ChevronDown, {
      className: "w-2 h-2 text-main-l2"
    }))), React__default.createElement(Transition, {
      as: Fragment,
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      afterLeave: function afterLeave() {
        return setQuery('');
      }
    }, React__default.createElement("div", {
      className: classNames('absolute w-full text-base bg-white rounded-md shadow-md focus:outline-none border border-gray-spacer overflow-hidden', openTop ? 'bottom-11' : 'mt-1')
    }, React__default.createElement("div", {
      className: classNames('w-full flex items-center border-b border-gray-spacer px-2 space-x-2 py-2')
    }, React__default.createElement(Search, {
      className: "w-4 h-4 text-main-l2"
    }), React__default.createElement(Combobox.Input, {
      className: "border-none text-sm text-main-default focus:outline-none focus:ring-0 h-8 placeholder:text-main-l2 w-full",
      placeholder: "Search",
      onChange: function onChange(event) {
        return setQuery(event.target.value);
      }
    })), React__default.createElement(Combobox.Options, {
      className: "w-full overflow-auto max-h-60 text-sm"
    }, filteredOptions().length === 0 ? React__default.createElement("div", {
      className: "cursor-default select-none relative py-2 px-4 text-gray-700"
    }, "Nothing found.") : React__default.createElement("div", {
      className: grouped ? 'divide-y divide-gray-space' : ''
    }, filteredOptions().map(function (option) {
      if (option.options && option.options.length > 0) {
        return React__default.createElement(GroupedOptions, {
          key: option.id,
          group: option,
          selectedOption: selectedOption
        });
      } else {
        return React__default.createElement(Combobox.Option, {
          key: option.id,
          className: function className(_ref3) {
            var active = _ref3.active;
            return classNames('cursor-default select-none relative py-2 px-4', active ? 'bg-gray-hover text-main-default' : '', selectedOption && selectedOption.id === option.id ? 'bg-primary-default text-white' : 'text-main-default');
          },
          value: option
        }, React__default.createElement("span", {
          className: "block truncate font-medium"
        }, option.label));
      }
    }))))));
  });
}

var _excluded = ["children", "fullWidth", "large", "reversed", "secondary", "small", "className"];

var Button = function Button(_ref) {
  var children = _ref.children,
      _ref$fullWidth = _ref.fullWidth,
      fullWidth = _ref$fullWidth === void 0 ? false : _ref$fullWidth,
      _ref$large = _ref.large,
      large = _ref$large === void 0 ? false : _ref$large,
      _ref$reversed = _ref.reversed,
      reversed = _ref$reversed === void 0 ? false : _ref$reversed,
      _ref$secondary = _ref.secondary,
      secondary = _ref$secondary === void 0 ? false : _ref$secondary,
      _ref$small = _ref.small,
      small = _ref$small === void 0 ? false : _ref$small,
      className = _ref.className,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded);

  return React__default.createElement("button", Object.assign({
    className: classNames('px-3 font-medium rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-default select-none disabled:opacity-50', large ? 'text-base leading-6' : 'text-sm leading-4', small ? 'h-6' : large ? 'h-10' : 'h-8', reversed ? 'bg-white border border-transparent text-primary-default hover:text-primary-hover hover:bg-gray-hover' : secondary ? 'bg-white border border-primary-default text-primary-default hover:bg-primary-active hover:bg-opacity-20' : 'text-white border border-transparent bg-primary-default hover:bg-primary-hover', fullWidth ? 'w-full' : '', className != null ? className : '')
  }, otherProps), children);
};

var _excluded$1 = ["children", "className"];
function Checkbox(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$1);

  return React__default.createElement("div", {
    className: "flex items-start flex-col"
  }, React__default.createElement("div", {
    className: "flex items-start flex-row"
  }, React__default.createElement("label", {
    htmlFor: otherProps.id,
    className: "flex items-center text-left cursor-pointer space-x-2"
  }, React__default.createElement("input", Object.assign({
    id: otherProps.id,
    type: "checkbox",
    className: classNames('w-4 h-4 rounded-sm border border-gray-spacer appearance-none', 'checked:bg-primary-default checked:border-primary-default checked:text-white', 'checked:after:content-["✓"] checked:after:font-bold checked:after:relative checked:after:text-xs', 'checked:after:text-xs checked:after:top-[-6px] checked:after:left-[1px]', 'disabled:opacity-50 disabled:bg-gray-spacer', className != null ? className : '')
  }, otherProps)), React__default.createElement("span", {
    className: "inline-block text-sm font-medium text-main-default"
  }, children))));
}

function CheckboxGroup(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "w-full space-y-1"
  }, children);
}

function Calendar(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      className = _ref.className;
  return createElement("svg", {
    width: width,
    height: height,
    viewBox: "0 0 16 16",
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, createElement("path", {
    d: "M4.99935 7H4.33268C4.15587 7 3.9863 7.07024 3.86128 7.19526C3.73625 7.32029 3.66602 7.48986 3.66602 7.66667C3.66602 7.84348 3.73625 8.01305 3.86128 8.13807C3.9863 8.2631 4.15587 8.33333 4.33268 8.33333H4.99935C5.17616 8.33333 5.34573 8.2631 5.47075 8.13807C5.59578 8.01305 5.66602 7.84348 5.66602 7.66667C5.66602 7.48986 5.59578 7.32029 5.47075 7.19526C5.34573 7.07024 5.17616 7 4.99935 7Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M8.33333 7H7.66667C7.48986 7 7.32029 7.07024 7.19526 7.19526C7.07024 7.32029 7 7.48986 7 7.66667C7 7.84348 7.07024 8.01305 7.19526 8.13807C7.32029 8.2631 7.48986 8.33333 7.66667 8.33333H8.33333C8.51014 8.33333 8.67971 8.2631 8.80474 8.13807C8.92976 8.01305 9 7.84348 9 7.66667C9 7.48986 8.92976 7.32029 8.80474 7.19526C8.67971 7.07024 8.51014 7 8.33333 7Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M11.6673 7H11.0007C10.8238 7 10.6543 7.07024 10.5292 7.19526C10.4042 7.32029 10.334 7.48986 10.334 7.66667C10.334 7.84348 10.4042 8.01305 10.5292 8.13807C10.6543 8.2631 10.8238 8.33333 11.0007 8.33333H11.6673C11.8441 8.33333 12.0137 8.2631 12.1387 8.13807C12.2637 8.01305 12.334 7.84348 12.334 7.66667C12.334 7.48986 12.2637 7.32029 12.1387 7.19526C12.0137 7.07024 11.8441 7 11.6673 7Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M4.99935 9.66675H4.33268C4.15587 9.66675 3.9863 9.73699 3.86128 9.86201C3.73625 9.98703 3.66602 10.1566 3.66602 10.3334C3.66602 10.5102 3.73625 10.6798 3.86128 10.8048C3.9863 10.9298 4.15587 11.0001 4.33268 11.0001H4.99935C5.17616 11.0001 5.34573 10.9298 5.47075 10.8048C5.59578 10.6798 5.66602 10.5102 5.66602 10.3334C5.66602 10.1566 5.59578 9.98703 5.47075 9.86201C5.34573 9.73699 5.17616 9.66675 4.99935 9.66675Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M8.33333 9.66675H7.66667C7.48986 9.66675 7.32029 9.73699 7.19526 9.86201C7.07024 9.98703 7 10.1566 7 10.3334C7 10.5102 7.07024 10.6798 7.19526 10.8048C7.32029 10.9298 7.48986 11.0001 7.66667 11.0001H8.33333C8.51014 11.0001 8.67971 10.9298 8.80474 10.8048C8.92976 10.6798 9 10.5102 9 10.3334C9 10.1566 8.92976 9.98703 8.80474 9.86201C8.67971 9.73699 8.51014 9.66675 8.33333 9.66675Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M11.6673 9.66675H11.0007C10.8238 9.66675 10.6543 9.73699 10.5292 9.86201C10.4042 9.98703 10.334 10.1566 10.334 10.3334C10.334 10.5102 10.4042 10.6798 10.5292 10.8048C10.6543 10.9298 10.8238 11.0001 11.0007 11.0001H11.6673C11.8441 11.0001 12.0137 10.9298 12.1387 10.8048C12.2637 10.6798 12.334 10.5102 12.334 10.3334C12.334 10.1566 12.2637 9.98703 12.1387 9.86201C12.0137 9.73699 11.8441 9.66675 11.6673 9.66675Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M4.99935 12.3333H4.33268C4.15587 12.3333 3.9863 12.4035 3.86128 12.5285C3.73625 12.6535 3.66602 12.8231 3.66602 12.9999C3.66602 13.1767 3.73625 13.3463 3.86128 13.4713C3.9863 13.5963 4.15587 13.6666 4.33268 13.6666H4.99935C5.17616 13.6666 5.34573 13.5963 5.47075 13.4713C5.59578 13.3463 5.66602 13.1767 5.66602 12.9999C5.66602 12.8231 5.59578 12.6535 5.47075 12.5285C5.34573 12.4035 5.17616 12.3333 4.99935 12.3333Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M8.33333 12.3333H7.66667C7.48986 12.3333 7.32029 12.4035 7.19526 12.5285C7.07024 12.6535 7 12.8231 7 12.9999C7 13.1767 7.07024 13.3463 7.19526 13.4713C7.32029 13.5963 7.48986 13.6666 7.66667 13.6666H8.33333C8.51014 13.6666 8.67971 13.5963 8.80474 13.4713C8.92976 13.3463 9 13.1767 9 12.9999C9 12.8231 8.92976 12.6535 8.80474 12.5285C8.67971 12.4035 8.51014 12.3333 8.33333 12.3333Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M11.6673 12.3333H11.0007C10.8238 12.3333 10.6543 12.4035 10.5292 12.5285C10.4042 12.6535 10.334 12.8231 10.334 12.9999C10.334 13.1767 10.4042 13.3463 10.5292 13.4713C10.6543 13.5963 10.8238 13.6666 11.0007 13.6666H11.6673C11.8441 13.6666 12.0137 13.5963 12.1387 13.4713C12.2637 13.3463 12.334 13.1767 12.334 12.9999C12.334 12.8231 12.2637 12.6535 12.1387 12.5285C12.0137 12.4035 11.8441 12.3333 11.6673 12.3333Z",
    fill: "currentColor"
  }), createElement("path", {
    d: "M14.334 2H12.5007C12.4564 2 12.4141 1.98244 12.3828 1.95118C12.3515 1.91993 12.334 1.87754 12.334 1.83333V0.666667C12.334 0.489856 12.2637 0.320286 12.1387 0.195262C12.0137 0.0702379 11.8441 0 11.6673 0C11.4905 0 11.3209 0.0702379 11.1959 0.195262C11.0709 0.320286 11.0007 0.489856 11.0007 0.666667V3.83333C11.0007 3.96594 10.948 4.09312 10.8542 4.18689C10.7604 4.28065 10.6333 4.33333 10.5007 4.33333C10.368 4.33333 10.2409 4.28065 10.1471 4.18689C10.0533 4.09312 10.0007 3.96594 10.0007 3.83333V2.33333C10.0007 2.24493 9.96553 2.16014 9.90302 2.09763C9.84051 2.03512 9.75572 2 9.66732 2H5.50065C5.45656 2 5.41427 1.98253 5.38303 1.95142C5.3518 1.92031 5.33416 1.87809 5.33398 1.834V0.666667C5.33398 0.489856 5.26375 0.320286 5.13872 0.195262C5.0137 0.0702379 4.84413 0 4.66732 0C4.49051 0 4.32094 0.0702379 4.19591 0.195262C4.07089 0.320286 4.00065 0.489856 4.00065 0.666667V3.83333C4.00065 3.96594 3.94797 4.09312 3.8542 4.18689C3.76044 4.28065 3.63326 4.33333 3.50065 4.33333C3.36804 4.33333 3.24087 4.28065 3.1471 4.18689C3.05333 4.09312 3.00065 3.96594 3.00065 3.83333V2.33333C3.00065 2.24493 2.96553 2.16014 2.90302 2.09763C2.84051 2.03512 2.75572 2 2.66732 2H1.66732C1.3137 2 0.974557 2.14048 0.724509 2.39052C0.47446 2.64057 0.333984 2.97971 0.333984 3.33333V14.6667C0.333984 15.0203 0.47446 15.3594 0.724509 15.6095C0.974557 15.8595 1.3137 16 1.66732 16H14.334C14.6876 16 15.0267 15.8595 15.2768 15.6095C15.5268 15.3594 15.6673 15.0203 15.6673 14.6667V3.33333C15.6673 2.97971 15.5268 2.64057 15.2768 2.39052C15.0267 2.14048 14.6876 2 14.334 2ZM14.334 14.3333C14.334 14.4217 14.2989 14.5065 14.2364 14.569C14.1738 14.6315 14.0891 14.6667 14.0007 14.6667H2.00065C1.91225 14.6667 1.82746 14.6315 1.76495 14.569C1.70244 14.5065 1.66732 14.4217 1.66732 14.3333V6.33333C1.66732 6.24493 1.70244 6.16014 1.76495 6.09763C1.82746 6.03512 1.91225 6 2.00065 6H14.0007C14.0891 6 14.1738 6.03512 14.2364 6.09763C14.2989 6.16014 14.334 6.24493 14.334 6.33333V14.3333Z",
    fill: "currentColor"
  }));
}

function DatePicker(_ref) {
  var _ref$format = _ref.format,
      format = _ref$format === void 0 ? 'yyyy-MM-dd h:mm aa' : _ref$format,
      id = _ref.id,
      label = _ref.label,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'YYYY-MM-DD 00:00' : _ref$placeholder,
      selectedDate = _ref.selectedDate,
      _ref$shortDays = _ref.shortDays,
      shortDays = _ref$shortDays === void 0 ? false : _ref$shortDays,
      _ref$showTimeSelect = _ref.showTimeSelect,
      showTimeSelect = _ref$showTimeSelect === void 0 ? true : _ref$showTimeSelect,
      onDateChange = _ref.onDateChange;

  var _useState = useState(null),
      date = _useState[0],
      setDate = _useState[1];

  var pickerInput = useRef(null);
  useEffect(function () {
    if (onDateChange) {
      onDateChange(date);
    }
  }, [date, onDateChange]);
  return React__default.createElement("div", {
    className: "relative w-full border border-gray-spacer rounded-md flex items-center px-3 h-10 focus-within:border-primary-default"
  }, React__default.createElement(ReactDatePicker, {
    ref: pickerInput,
    id: id,
    className: "w-full",
    "aria-label": label,
    showTimeSelect: showTimeSelect,
    useWeekdaysShort: shortDays,
    onChange: function onChange(date) {
      return setDate(date);
    },
    selected: selectedDate || date,
    autoComplete: "off",
    placeholderText: placeholder ? placeholder : 'YYYY-MM-DD --:--',
    dateFormat: format ? format : 'yyyy-MM-dd h:mm aa'
  }), React__default.createElement("div", {
    className: "absolute cursor-pointer right-3 top-[10px] z-10 w-4 h-4 pointer-events-none"
  }, React__default.createElement(Calendar, {
    className: "text-main-l2"
  })));
}

function GroupedOptions$1(_ref) {
  var group = _ref.group,
      selectedOption = _ref.selectedOption;
  return React__default.createElement("div", null, React__default.createElement("div", {
    className: "px-4 pt-3 pb-2 uppercase text-main-l2 text-xs font-medium"
  }, group.label), group.options && group.options.map(function (option) {
    return React__default.createElement(Listbox.Option, {
      key: option.id,
      className: function className(_ref2) {
        var active = _ref2.active;
        return classNames('cursor-pointer select-none relative py-2 px-4', active ? 'bg-gray-hover text-main-default' : '', selectedOption && selectedOption.id === option.id ? 'bg-primary-default text-white' : 'text-main-default');
      },
      value: option
    }, React__default.createElement("span", {
      className: "block truncate font-medium"
    }, option.label));
  }));
}

function Dropdown(_ref) {
  var _ref$openTop = _ref.openTop,
      openTop = _ref$openTop === void 0 ? false : _ref$openTop,
      _ref$options = _ref.options,
      options = _ref$options === void 0 ? [] : _ref$options,
      _ref$placeholder = _ref.placeholder,
      placeholder = _ref$placeholder === void 0 ? 'Select' : _ref$placeholder,
      selected = _ref.selected,
      onChange = _ref.onChange;

  var _useState = useState(selected),
      selectedOption = _useState[0],
      setSelectedOption = _useState[1];

  var _useState2 = useState(false),
      grouped = _useState2[0],
      setGrouped = _useState2[1];

  var _useState3 = useState(''),
      query = _useState3[0],
      setQuery = _useState3[1];

  useEffect(function () {
    if (options.length > 0 && options[0].options && options[0].options.length > 0) {
      setGrouped(true);
    }
  }, [options]);

  var handleOnChange = function handleOnChange(option) {
    setSelectedOption(option);
    onChange(option);
  };

  var filteredOptions = function filteredOptions() {
    if (query === '') {
      return options;
    }

    var list = [];
    options.forEach(function (opt) {
      if (opt.options && opt.options.length > 0) {
        var filteredOpts = opt.options.filter(function (option) {
          return option.label.toLowerCase().includes(query.toLowerCase());
        });

        if (filteredOpts.length > 0) {
          list.push(_extends({}, opt, {
            options: filteredOpts
          }));
        }
      }

      if (!opt.options || opt.options.length === 0) {
        if (opt.label.toLowerCase().includes(query.toLowerCase())) {
          list.push(opt);
        }
      }
    });
    return list;
  };

  return React__default.createElement(Listbox, {
    value: selectedOption,
    onChange: handleOnChange
  }, function (_ref2) {
    var open = _ref2.open;
    return React__default.createElement("div", {
      className: "relative block"
    }, React__default.createElement(Listbox.Button, {
      className: "w-full border rounded-md border-gray-spacer bg-white text-left h-10 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-default"
    }, React__default.createElement(Listbox.Label, {
      className: "px-4 select-none flex items-center justify-between text-main-default cursor-pointer space-x-2 h-8 rounded-sm"
    }, React__default.createElement("span", {
      className: "text-sm font-medium text-main-default flex-1 truncate"
    }, selectedOption ? selectedOption.label : placeholder), open ? React__default.createElement(ChevronUp, {
      className: "w-2 h-2 text-main-l2"
    }) : React__default.createElement(ChevronDown, {
      className: "w-2 h-2 text-main-l2"
    }))), React__default.createElement(Transition, {
      as: Fragment,
      leave: "transition ease-in duration-100",
      leaveFrom: "opacity-100",
      leaveTo: "opacity-0",
      afterLeave: function afterLeave() {
        return setQuery('');
      }
    }, React__default.createElement("div", {
      className: classNames('absolute w-full text-base bg-white rounded-md shadow-md focus:outline-none border border-gray-spacer overflow-hidden', openTop ? 'bottom-11' : 'mt-1')
    }, React__default.createElement(Listbox.Options, {
      className: "w-full overflow-auto max-h-60 text-sm focus:outline-none"
    }, filteredOptions().length === 0 ? React__default.createElement("div", {
      className: "cursor-default select-none relative py-2 px-4 text-gray-700"
    }, "Nothing found.") : React__default.createElement("div", {
      className: grouped ? 'divide-y divide-gray-space' : ''
    }, filteredOptions().map(function (option) {
      if (option.options && option.options.length > 0) {
        return React__default.createElement(GroupedOptions$1, {
          key: option.id,
          group: option,
          selectedOption: selectedOption
        });
      } else {
        return React__default.createElement(Listbox.Option, {
          key: option.id,
          className: function className(_ref3) {
            var active = _ref3.active;
            return classNames('cursor-default select-none relative py-2 px-4', active ? 'bg-gray-hover text-main-default' : '', selectedOption && selectedOption.id === option.id ? 'bg-primary-default text-white' : 'text-main-default');
          },
          value: option
        }, React__default.createElement("span", {
          className: "block truncate font-medium"
        }, option.label));
      }
    }))))));
  });
}

var _excluded$2 = ["children", "className"];
function InputError(_ref) {
  var children = _ref.children,
      className = _ref.className,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$2);

  return React__default.createElement("span", Object.assign({
    className: classNames('block text-sm text-error-default text-left font-medium', className != null ? className : '')
  }, otherProps), children);
}

var _excluded$3 = ["children", "className", "required"];
function Label(_ref) {
  var children = _ref.children,
      className = _ref.className,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$3);

  return React__default.createElement("label", Object.assign({
    className: classNames('block text-sm text-main-default text-left font-medium', className != null ? className : '')
  }, otherProps), children, required && React__default.createElement("span", {
    className: "ml-1 text-xs text-error-default"
  }, "*"));
}

function FormGroup(_ref) {
  var children = _ref.children,
      error = _ref.error,
      label = _ref.label,
      _ref$required = _ref.required,
      required = _ref$required === void 0 ? false : _ref$required;
  return React__default.createElement("div", {
    className: "w-full space-y-1"
  }, React__default.createElement(Label, {
    required: required
  }, label), children, error && React__default.createElement(InputError, null, error));
}

function Loader(_ref) {
  var children = _ref.children;
  return React__default.createElement("div", {
    className: "flex flex-1 items-center justify-center flex-col py-20 space-y-4"
  }, React__default.createElement(Rings, {
    color: "hsl(229.3, 63.6%, 56.9%)",
    height: 75,
    width: 75
  }), React__default.createElement("p", {
    className: "text-sm font-medium text-main-l2"
  }, children));
}

function Segment(_ref) {
  var _ref$activeIndex = _ref.activeIndex,
      activeIndex = _ref$activeIndex === void 0 ? 0 : _ref$activeIndex,
      items = _ref.items,
      onChange = _ref.onChange;

  var _useState = useState(activeIndex),
      selected = _useState[0],
      setSelected = _useState[1];

  useEffect(function () {
    setSelected(activeIndex);
  }, [activeIndex]);

  var handleSwitchItem = function handleSwitchItem(index, name) {
    setSelected(index);
    onChange(name, index);
  };

  return React__default.createElement("div", {
    className: "flex w-full h-8 p-[2px] rounded-md cursor-pointer bg-gray-secondary"
  }, items.map(function (item, index) {
    return React__default.createElement("button", {
      type: "button",
      key: item,
      className: classNames('flex items-center justify-center flex-1 px-px py-1 text-main-default rounded-md', selected === index ? 'bg-white shadow-sm font-bold' : ''),
      onClick: function onClick() {
        return handleSwitchItem(index, item);
      }
    }, item);
  }));
}

function Stages(_ref) {
  var _ref$completed = _ref.completed,
      completed = _ref$completed === void 0 ? 0 : _ref$completed,
      _ref$stages = _ref.stages,
      stages = _ref$stages === void 0 ? 5 : _ref$stages;
  return React__default.createElement("div", {
    className: "flex items-center space-x-1"
  }, Array.from(Array(stages).keys()).map(function (index) {
    return React__default.createElement("div", {
      key: index,
      className: classNames('inline-block w-5 h-2 rounded-sm text-sm', completed >= stages ? 'bg-success-default' : index <= completed ? 'bg-warning-l1' : 'bg-gray-spacer')
    });
  }));
}

function Segment$1(_ref) {
  var children = _ref.children,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'default' : _ref$type;
  return React__default.createElement("div", {
    className: classNames('inline-block text-xs font-medium leading-4 px-1 h-4 rounded whitespace-nowrap overflow-hidden select-none', type === 'default' ? 'bg-gray-spacer text-main-default' : '', type === 'success' ? 'bg-success-l2 text-success-default' : '', type === 'warning' ? 'bg-warning-l2 text-warning-default' : '', type === 'danger' ? 'bg-error-l2 text-error-default' : '', type === 'info' ? 'bg-info-l2 text-info-default' : '')
  }, children);
}

var _excluded$4 = ["error", "className"];
function TextAreaInput(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      className = _ref.className,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$4);

  return React__default.createElement("textarea", Object.assign({
    rows: 2,
    className: classNames('w-full border text-sm font-medium rounded-md px-3 py-2 placeholder:text-main-l2 bg-white', error ? 'bg-error-l2 border-error-default text-main-default' : 'text-main-default border-gray-spacer', className != null ? className : '')
  }, otherProps));
}

var _excluded$5 = ["error", "className"];
function TextInput(_ref) {
  var _ref$error = _ref.error,
      error = _ref$error === void 0 ? false : _ref$error,
      className = _ref.className,
      otherProps = _objectWithoutPropertiesLoose(_ref, _excluded$5);

  return React__default.createElement("input", Object.assign({
    className: classNames('w-full border text-sm font-medium rounded-md px-3 h-10 placeholder:text-main-l2 bg-white', error ? 'bg-error-l2 border-error-default text-main-default' : 'text-main-default border-gray-spacer', className != null ? className : '')
  }, otherProps));
}

function Refresh(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      className = _ref.className;
  return createElement("svg", {
    width: width,
    height: height,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, createElement("path", {
    d: "M7.109 13.382a.833.833 0 10-.338 1.631 7.159 7.159 0 10-5.172-4.28.167.167 0 01-.056.2l-.666.484a.667.667 0 00.251 1.192l2.63.566a.667.667 0 00.792-.512l.63-2.934a.667.667 0 00-1.043-.68l-.907.66a.167.167 0 01-.257-.086 5.503 5.503 0 114.136 3.762v-.003z",
    fill: "currentColor"
  }));
}

function Warning(_ref) {
  var _ref$width = _ref.width,
      width = _ref$width === void 0 ? 16 : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 16 : _ref$height,
      className = _ref.className;
  return createElement("svg", {
    width: width,
    height: height,
    fill: "none",
    xmlns: "http://www.w3.org/2000/svg",
    className: className
  }, createElement("path", {
    d: "M30.825 25.667l-12.462-23.8a2.666 2.666 0 00-4.724 0l-12.464 23.8a2.666 2.666 0 002.362 3.904h24.926a2.667 2.667 0 002.362-3.904zM14.667 10.23a1.334 1.334 0 012.666 0v8a1.334 1.334 0 01-2.666 0v-8zm1.4 15.346h-.038A2.037 2.037 0 0114 23.617a1.966 1.966 0 011.93-2.04h.038A2.036 2.036 0 0118 23.533a1.968 1.968 0 01-1.933 2.044z",
    fill: "currentColor"
  }));
}

function WidgetError(_ref) {
  var children = _ref.children,
      _ref$refreshLabel = _ref.refreshLabel,
      refreshLabel = _ref$refreshLabel === void 0 ? 'Reload Widget' : _ref$refreshLabel,
      onRefresh = _ref.onRefresh;
  return React__default.createElement("div", {
    className: "flex items-center justify-center flex-col py-20 space-y-7"
  }, React__default.createElement("div", {
    className: "flex items-center justify-center flex-col text-warning-l1 space-y-2"
  }, React__default.createElement(Warning, {
    className: "h-8 w-8"
  }), React__default.createElement("div", {
    className: "font-medium text-main-default leading-5 text-center"
  }, children)), onRefresh && React__default.createElement("button", {
    className: "text-primary-default flex items-center justify-center text-sm space-x-1"
  }, React__default.createElement(Refresh, {
    className: "w-4 h-4"
  }), React__default.createElement("span", null, refreshLabel)));
}

export { AutoComplete, Button, Checkbox, CheckboxGroup, DatePicker, Dropdown, FormGroup, InputError, Label, Loader, Segment, Stages, Segment$1 as Tag, TextAreaInput, TextInput, WidgetError, classNames };
//# sourceMappingURL=textkit-ui-library.esm.js.map
