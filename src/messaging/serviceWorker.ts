// src/messaging/serviceWorker.ts
import { Message, MessageResponse } from './types';
import { handlers } from './handlers';

export async function sendToContentScript(
    tabId: number,
    message: Message
): Promise<MessageResponse> {
    try {
        const response = await chrome.tabs.sendMessage(tabId, message);
        return response || { success: false, error: 'No response received' };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

// To add a new type of message, you would simply add a new handler to the
// handlers object in handlers.ts. The type system will ensure that all
// necessary components are properly implemented.
export function initializeServiceWorkerMessaging(): void {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log('Service worker received message:', message);

        const handler = handlers[message.action];
        if (!handler) {
            sendResponse({ success: false, error: 'Unknown action' });
            return true;
        }

        handler(message, sender)
            .then(sendResponse)
            .catch(error => {
                sendResponse({
                    success: false,
                    error: error instanceof Error ? error.message : 'Unknown error'
                });
            });

        return true;
    });
}
