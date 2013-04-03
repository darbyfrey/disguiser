document.body.addEventListener('click', function(e) {
  var target = e.target;

  targetClasses = Array.prototype.slice.apply(target.classList);

  var shouldDisguise = target.nodeName.toLowerCase() === 'a' && (
                         targetClasses.indexOf('disguiser') >= 0 ||
                         target.dataset.hasOwnProperty('disguiser'));

  if (shouldDisguise) { 
    e.preventDefault();
    e.stopPropagation();
    var destination, href = target.href;
    if(href.match(/^http/)){
      destination = href;
    } else {
      var base = window.location.origin;
      destination = base + href;
    }
    chrome.extension.sendRequest(destination);
    return false;
  };
}, false);
