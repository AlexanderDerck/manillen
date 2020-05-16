import { ChatMessage } from '../../models';

export interface ChatState {
  messages: ChatMessage[];
};

export const initialChatState: ChatState = {
  messages: []
};