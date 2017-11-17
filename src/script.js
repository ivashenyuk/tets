$(document).ready(function() {

  /* Open window */
    $('#form').click(function() {
      $('.js-hidden').fadeIn();
      $('.js-hidden').addClass('disabled');
    });

  /* Clouse window */
     $('#js-close').click(function() {
      $('.js-hidden').fadeOut();
     });

  (function($) {
  $(function() {

    $('ul.tabs__caption').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    });

  });
  })(jQuery);

/* Multi select */
  $('#custom-headers').onclick(function() {
    let selectedOption = $('#custom-headers option:selected');
    if(selectedOption.lenght > 0) {
      let resultString = '';
        selectedOption.each(function() {
          $('#result').val = $(this).val();
          console.log($(this).val());
        });
    }
  });


});


