chrome.browserAction.onClicked.addListener(function(tab) {
    chrome.tabs.create({
      url: "https://studygolang.com/resources/new?url=" + encodeURIComponent(tab.url) + "&title=" + encodeURIComponent(tab.title) + "&platform=chrome_extension"
    });
  });