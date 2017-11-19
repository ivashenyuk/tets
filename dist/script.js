'use strict';

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