window.onload = function() {
  alert( "welcome" );
};

$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#temperature').text(thermostat._temperature);
})
