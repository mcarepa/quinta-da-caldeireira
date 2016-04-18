$(function() {
  var $grid = $('.gallery-photos-wrapper').isotope({
    itemSelector: '.gallery-photo',
    layoutMode: 'fitRows'
  });

  $('.filters-button-group').on( 'click', '.button', function() {
    var filterValue = $( this ).attr('data-filter');
    // use filterFn if matches value
    if($(this).hasClass('is-checked')) {
      $grid.isotope({ filter: '*' });
    } else {
      $grid.isotope({ filter: filterValue });
    }
    
  });

  $('.button-group').each( function( i, buttonGroup ) {
    var $buttonGroup = $( buttonGroup );
    $buttonGroup.on( 'click', '.button', function() {
      if ($(this).hasClass('is-checked')) {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
      } else {
        $buttonGroup.find('.is-checked').removeClass('is-checked');
        $( this ).addClass('is-checked');
      }
    });
  });
});
