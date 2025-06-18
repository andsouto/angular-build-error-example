import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { client, Client, xml } from '@xmpp/client';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'test';

  private client: Client;

  constructor() {
    this.client = client({
      service: 'wss://example.com',
      domain: 'example.com',
      resource: `randomresource`,
      username: 'username',
      password: 'token',
    });
  }
}
