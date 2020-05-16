import { createAction } from '@reduxjs/toolkit';
import { ChatMessage } from '../../models';
import { actionTypes, props } from '../utils';

export const receivedMessage = createAction('[Chat] Received message', props<{ message: ChatMessage }>());
export const sendMessage = createAction('[Chat] Send message', props<{ message: ChatMessage }>());
export const sendMessageSuccess = createAction('[Chat] Send message success');

export const chatActionCreatorMap = {
  receivedMessage,
  sendMessage,
  sendMessageSuccess
};
const all = actionTypes(chatActionCreatorMap);
export type ChatAction = typeof all;