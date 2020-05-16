import { Epic, ofType } from 'redux-observable';
import { map, switchMap, tap } from 'rxjs/operators';
import { chatHub } from '../../hubs/chathub';
import { ChatAction, receivedMessage, sendMessage, sendMessageSuccess } from '../actions';

export const receivedMessageEpic: Epic<ChatAction> = () => chatHub.messageReceived$.pipe(
  map(chatMessage => receivedMessage({ message: chatMessage })),
  tap(chatMessage => console.log(chatMessage))
);

export const sendMessageEpic: Epic<ChatAction> = (actions$) => actions$.pipe(
  ofType(sendMessage.type),
  switchMap(action => chatHub.sendMessage(action.payload.message.message).pipe(
    map(_ => sendMessageSuccess())
  ))
);