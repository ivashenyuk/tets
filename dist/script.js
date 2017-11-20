'use strict';

$(document).ready(function () {

  /* Received data */
  $.ajax({
    url: 'php/content.php',
    type: 'POST',
    dataType: 'html',
    beforeSend: function beforeSend() {
      // if slow internet
      $('#js-content-id').html("<img id=\"img\"style=\"margin: auto; height: 15em;\" src=\"https://reservations.tsogosun.com/images/loading.gif\" alt=\"loading\">");
    },
    success: function success(data) {
      var obj = jQuery.parseJSON(data);
      for (var i = 0; i < obj.length; i++) {
        if (i === obj.length) break;
        $('#js-content-id').append('\n            <section class=\'flex-conteiner content items\'>\n              <div class=\'first-child\' id=\'title\'>' + obj[i]['NAME'] + '</div>\n              <button class=\'form last-child js-button-open\' id=\'' + obj[i]['ID'] + '\' onClick=\'myClick(' + obj[i]['ID'] + ')\'>Edit</button>\n            </section>');
      }
      $('#img').remove();
    }
  });
  /* Open window */
  $('.form').click(function () {
    $('#js-save').show();
    $('#js-update').hide();
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

  /* Update data */
  $(document).ready(function () {
    $('#js-update').bind("click", function () {
      $.ajax({
        url: 'php/dataUpdateDB.php',
        type: 'POST',
        data: { id: $('#form').attr('name'), name: $('#name-project').val(), description: $('#description-project').val() },
        dataType: 'html',
        beforeSend: function beforeSend() {
          $('#js-update').text('Wait...');
          $('#js-update').addClass('disabled');
        },
        success: function success(data) {
          console.log(data);
          $('#js-updateupdate').text('Done!');
          $('#js-update').removeClass('disabled');
        }
      });
    });
  });

  /* Submit form */
  $(document).ready(function () {
    $('#js-save').bind("click", function () {
      $.ajax({
        url: 'php/dataIntoDB.php',
        type: 'POST',
        data: { name: $('#name-project').val(), description: $('#description-project').val() },
        dataType: 'html',
        beforeSend: function beforeSend() {
          $('#js-save').text('Wait...');
          $('#js-save').addClass('disabled');
        },
        success: function success(data) {
          $('#js-save').text('Done!');
          $('#js-save').removeClass('disabled');
        }
      });
    });
  });
});