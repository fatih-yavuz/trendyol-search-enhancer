(function() {
  'use strict';

  chrome.webNavigation.onBeforeNavigate.addListener(function(details) {
    chrome.storage.local.get('disabled', (data) => {
      if (!data.disabled) {
        const url = new URL(details.url);
        if (!url.searchParams.has('eea') && details.url.indexOf('/sr') !==
            -1) {
          url.searchParams.append('eea', '1');
          if (!url.searchParams.has('sst')) {
            url.searchParams.append('sst', 'MOST_RATED');
          }
          if (!url.searchParams.has('pr')) {
            url.searchParams.append('pr', '4.3');
          }
          chrome.tabs.update(details.tabId, {url: url.toString()});
        }
      }
    },
    );
  });
})();

