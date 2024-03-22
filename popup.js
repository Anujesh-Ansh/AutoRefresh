document.addEventListener('DOMContentLoaded', function() {
    const startButton = document.getElementById('startButton');
    const stopButton = document.getElementById('stopButton');

    startButton.addEventListener('click', function() {
        const url = document.getElementById('url').value;
        const interval = parseInt(document.getElementById('interval').value) * 1000; // Convert to milliseconds
        chrome.runtime.sendMessage({action: 'start', url: url, interval: interval});
    });

    stopButton.addEventListener('click', function() {
        chrome.runtime.sendMessage({action: 'stop'});
    });
});
