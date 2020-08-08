const pages = ["login", "activatePoll.html", "deactivate"]
const page = 0

chrome.runtime.onInstalled.addListener(function() {
    chrome.storage.sync.set({activate: 'Deactivated'}, function() {
      console.log("Deactivated");
    });
});
