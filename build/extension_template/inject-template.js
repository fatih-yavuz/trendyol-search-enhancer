chrome.extension.sendMessage({}, function(response) {
  var readyStateCheckInterval = setInterval(function() {
    if (document.readyState === 'complete') {
      clearInterval(readyStateCheckInterval);
      chrome.storage.local.get('disabled', data => {
        if (data.disabled) {
          ${replace-me}
        }
      });
    }
  }, 10);
});
