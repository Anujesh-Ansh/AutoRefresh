document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');
    const intervalInput = document.getElementById('interval');
    const intervalValueSpan = document.getElementById('intervalValue');

    // Display initial value of the range input
    intervalValueSpan.textContent = intervalInput.value;

    // Update value when range input changes
    intervalInput.addEventListener('input', function() {
        intervalValueSpan.textContent = intervalInput.value;
    });

    startButton.addEventListener('click', function() {
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const tab = tabs[0];
            const url = tab.url;
            const interval = parseInt(intervalInput.value) * 1000; // Convert to milliseconds
            chrome.runtime.sendMessage({action: 'start', url: url, interval: interval});
        });
    });

    stopButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({action: 'stop'});
    });
});
