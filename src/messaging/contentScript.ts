// src/messaging/contentScript.ts
import { Message, MessageResponse } from './types';

export async function sendToServiceWorker(
    message: Message
): Promise<MessageResponse> {
    try {
        const response = await chrome.runtime.sendMessage(message);
        return response || { success: false, error: 'No response received' };
    } catch (error) {
        return {
            success: false,
            error: error instanceof Error ? error.message : 'Unknown error'
        };
    }
}

export function initializeContentScriptMessaging(): void {
    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
        console.log('Content script received message:', message);
        sendResponse({ success: true, data: 'Message received by content script' });
        return true;
    });
}
