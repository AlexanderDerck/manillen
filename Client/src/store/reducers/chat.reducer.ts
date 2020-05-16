import { ChatAction, receivedMessage } from '../actions';
import { ChatState, initialChatState } from '../state/chat.state';

export function chatReducer(state = initialChatState, action: ChatAction): ChatState {
  switch(action.type) {
    case receivedMessage.type: 
      return {
        ...state,
        messages: [...state.messages, action.payload.message]
      }
    default:
      return state;
  }
}