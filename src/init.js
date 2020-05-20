$(document).ready(function() {
  window.dancers = [];

  $('.addSpongeBobRockStar').on('click', function(event) {

    //debugger;
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];
    // make a dancer with a random position
    var spongebob = new dancerMakerFunction(
      $("body").height() * Math.min(.8, Math.random()),
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
      $("body").height() * Math.min(.8, Math.random()),
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
      $("body").height() * Math.min(.8, Math.random()),
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

  // $( ".freeze" ).on('click', function(event) {
  //   debugger;
  //   $('.flamenco').stop();
  //   $('.gangnam').stop();
  //   $('.spongebob').stop();
  // });


  function assignPartners(dancers) {
    //iterate through the dancers by 2
    for (var i = 0; i < dancers.length; i += 2) {
      if (dancers[i + 1] === undefined) {
        break;
      }

      var top = $("body").height() * Math.min(.8, Math.random());
      var left = $("body").width() * Math.random();
      //change location of i and i + 1
      dancers[i].setPosition(top, left);
      dancers[i + 1].setPosition(top + 20, left + 5);
      //debugger;

    }
  }


  $( ".partners" ).on('click', function(event) {
    //debugger;
     assignPartners(window.dancers)
  });

});

