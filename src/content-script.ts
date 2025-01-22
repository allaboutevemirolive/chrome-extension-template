import {
    initializeContentScriptMessaging, sendToServiceWorker
} from "./messaging/contentScript";

async function runContentScript(): Promise<void> {
    console.log("Run Content Script");

    initializeContentScriptMessaging()
    // Example usage
    sendToServiceWorker({ action: 'getData' })
        .then(response => console.log('Response:', response));
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', runContentScript);
} else {
    runContentScript();
}
