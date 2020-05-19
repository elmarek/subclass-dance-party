$(document).ready(function() {
  window.dancers = [];

  $('.addSpongeBobRockStar').on('click', function(event) {

    //debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var spongebob = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random () * 1000
    );
    $('body').append(spongebob.$node);
    window.dancers.push(spongebob);
  });

  $('.addFlamencoDancer').on('click', function(event) {

    //debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var flamenco = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random () * 1000
    );
    $('body').append(flamenco.$node);
    window.dancers.push(flamenco);
  });

  $('.addGangnamStyle').on('click', function(event) {

    //debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var gangnam = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random () * 1000
    );
    $('body').append(gangnam.$node);
    window.dancers.push(gangnam);
  });

  $( ".lineDanceButton" ).on('click', function(event) {
    //debugger;
    $.each(window.dancers, function(index, dancer) {
    //debugger;
      dancer.lineDance()
    });

  });

  // $( ".hammerTime" ).on('click', function(event) {
  //   //debugger;
  //   $.each(window.dancers, function(index, dancer) {

  //     dancer.fx.off = true;
  //   });
  // });


});

