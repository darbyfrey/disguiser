chrome.extension.onRequest.addListener(function(thisUrl, sender, sendResponse) {
  chrome.windows.create({ url: thisUrl, incognito: true});
  sendResponse();
});