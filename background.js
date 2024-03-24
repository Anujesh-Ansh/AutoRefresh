let intervalId;

chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action === 'start') {
        if (intervalId) clearInterval(intervalId); // Clear any existing interval
        intervalId = setInterval(function() {
            // Find the active tab and refresh it
            chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
                const tab = tabs[0];
                chrome.tabs.reload(tab.id);
            });
        }, message.interval);
    } else if (message.action === 'stop') {
        clearInterval(intervalId);
    }
});
