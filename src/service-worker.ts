import {
    initializeServiceWorkerMessaging, sendToContentScript
} from "./messaging/serviceWorker";

async function runServiceWorker(): Promise<void> {
    console.log("Run Service Worker");

    initializeServiceWorkerMessaging();
}

runServiceWorker();
