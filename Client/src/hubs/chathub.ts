import { from, Observable, Subject } from 'rxjs';
import * as signalR from '@microsoft/signalr';
import { environment } from '../environment';
import { ChatMessage } from '../models';

class ChatHub {
  private readonly connection: signalR.HubConnection;
  private readonly messageReceivedSubject = new Subject<ChatMessage>();
  messageReceived$: Observable<ChatMessage>;

  constructor() {
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(environment.chatHubUrl)
      .build();
    this.connection
      .start()
      .catch(error => console.error(error));

    this.initializeHubListeners();
    this.initializeObservables();
  }

  sendMessage(message: string): Observable<void> {
    return from(this.connection.send('sendMessage', 'alexander', message));
  }

  private initializeHubListeners(): void {
    this.connection.on('messageReceived', (username: string, message: string) => {
      this.messageReceivedSubject.next({ user: username, message });
    });
  }
  private initializeObservables(): void {
    this.messageReceived$ = this.messageReceivedSubject.asObservable();
  }
}

export const chatHub = new ChatHub();