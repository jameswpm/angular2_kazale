import {Component} from 'angular2/core';
import {Client} from './client';

@Component({
  selector: 'my-app',
  template: `<h1>Angular 2 - Third Class</h1>
  			<h2>{{txtList | uppercase}}</h2>
  			<p>Selected Client: {{client.name}}</p>
  			<ul>
  				<li *ngFor="#cli of clients; #i = index">
					<a href="#" (click)="select(i)">{{cli.id}} - {{cli.name}}</a>
  				</li>
  			</ul>`
})
export class AppComponent{
	private txtList : string;
	private clients : Client[] 
	private client : Client;

	constructor(){
		this.txtList =  'Clients List';
		this.clients = [
			new Client(1, 'Fulano'),
			new Client(2,'Ciclano')
		];
		this.client = this.clients[0];
	}

	select(index: number): void {
		if (index < this.clients.length) {
			this.client = this.clients[index];
		}
	}
}
