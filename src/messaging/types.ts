// src/messaging/types.ts
export interface Message {
    action: string;
    payload?: any;
}

export interface MessageResponse {
    success: boolean;
    data?: any;
    error?: string;
}

export type MessageHandler = (
    message: Message,
    sender: chrome.runtime.MessageSender
) => Promise<MessageResponse>;
