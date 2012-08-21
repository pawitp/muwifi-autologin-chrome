$('#user').val(localStorage["user"]);
$('#password').val(localStorage["password"]);

var delay = new Date().getTime() - localStorage["last_login"];

$('#regform').submit(function(e) {
  // Save password
  localStorage["user"] = $('#user').val();
  localStorage["password"] = $('#password').val();
  
  // Save last login
  localStorage["last_login"] = new Date().getTime();
})

if (localStorage["user"] != undefined && (isNaN(delay) || delay > 1 * 60 * 1000)) {
  $('#regform').submit();
}
else {
  console.log('Last login failed: ' + delay);
}

// Override page's funky system
$('#password').keypress(function(myfield, e) {
  var keycode;
  if (window.event) keycode = window.event.keyCode;
  else if (e) keycode = e.which;
    else return true;
  if (keycode == 13) {
    $('#regform').submit();
    return false;
  } else return true;
});

$('area').click(function(e) {
  e.preventDefault();
  $('#regform').submit();
})

