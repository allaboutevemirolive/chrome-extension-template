// src/messaging/handlers.ts
import { Message, MessageResponse, MessageHandler } from './types';

export const handlers: Record<string, MessageHandler> = {
    getData: async (message: Message): Promise<MessageResponse> => {
        try {
            // Implement your data fetching logic
            const data = { example: 'data' };
            return { success: true, data };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    },

    updateState: async (message: Message): Promise<MessageResponse> => {
        try {
            // Implement your state update logic
            return { success: true };
        } catch (error) {
            return {
                success: false,
                error: error instanceof Error ? error.message : 'Unknown error'
            };
        }
    }
};
