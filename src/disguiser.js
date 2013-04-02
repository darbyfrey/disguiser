$(document).ready(function() {
  $('body').delegate('a.disguiser', 'click', function() {
    var href = $(this).attr('href');
    if(href.match(/^http/)){
      var destination = href;
    } else {
      var base = window.location.origin;
      var destination = base + href;
    }
    chrome.extension.sendRequest(destination);
    return false;
  });
});