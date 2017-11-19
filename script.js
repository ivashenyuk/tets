var index =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


$(document).ready(function () {

  /* Open window */
  $('.form').click(function () {
    $('.js-hidden').fadeIn();
    $('.js-hidden').addClass('disabled');
  });

  /* Clouse window */
  $('#js-close').click(function () {
    $('.js-hidden').fadeOut();
  });

  /* Tabs */
  (function ($) {
    $(function () {

      $('ul.tabs__caption').on('click', 'li:not(.active)', function () {
        $(this).addClass('active').siblings().removeClass('active').closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
      });
    });
  })(jQuery);

  /* Multi select */
  /*$('#custom-headers').onclick(function() {
    let selectedOption = $('#custom-headers option:selected');
    if(selectedOption.lenght > 0) {
      let resultString = '';
        selectedOption.each(function() {
          $('#result').val = $(this).val();
          console.log($(this).val());
        });
    }
  });*/

  /* Submit form */
  $(document).ready(function () {
    $('#js-save').bind("click", function () {
      $.ajax({
        url: 'dataIntoDB.php',
        type: 'POST',
        data: { name: $('#name-project').val(), description: $('#description-project').val() },
        dataType: 'html',
        beforeSend: function beforeSend() {
          $('#js-save').text('Wait...');
          $('.js-save').addClass('disabled');
        },
        success: function success(data) {
          $('#js-save').text('Done!');
          $('.js-save').removeClass('disabled');
        }
      });
    });
  });

  /* Received data */
  $.ajax({
    url: 'content.php',
    type: 'POST',
    dataType: 'html',
    beforeSend: function beforeSend() {
      // if slow internet
      $('#js-content-id').html("<img style=\"margin: auto; height: 15em;\" src=\"https://reservations.tsogosun.com/images/loading.gif\" alt=\"loading\">");
    },
    success: function success(data) {
      $('#js-content-id').html(data);
    }
  });
});

/***/ })
/******/ ]);