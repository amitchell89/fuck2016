$( document ).ready(function(e) {
    $( ".store__menu__item" ).click(function() {
      var selectedStore = $(this).data('store')
      $(this).addClass('active')
      $('.store__gallery').each(function() {
        var thisClass = 'store__gallery--' + selectedStore;
        if ($(this).hasClass(thisClass)) {
          $(this).css('display', 'block')
        } else {
          $(this).css('display', 'none')
        }
      });
    });
});