// when the extension is first installed
chrome.runtime.onInstalled.addListener(function(details) {
    chrome.storage.sync.set({"muted_list": null});
    chrome.storage.sync.set({ "status_pref": true});
    chrome.storage.sync.set({ "transparency": "medium"});
});

 // listen for any changes to the URL of any tab.
chrome.tabs.onUpdated.addListener(function(id, info, tab){

    if (tab.url.toLowerCase().indexOf("facebook.com") > -1){
        chrome.pageAction.show(tab.id);
    }

});