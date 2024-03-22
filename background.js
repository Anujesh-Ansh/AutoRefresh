let intervalId;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'start') {
        if (intervalId) clearInterval(intervalId); // Clear any existing interval
        intervalId = setInterval(function() {
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                const tab = tabs[0];
                chrome.tabs.update(tab.id, {url: message.url});
            });
        }, message.interval);
    } else if (message.action === 'stop') {
        clearInterval(intervalId);
    }
});
