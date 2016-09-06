import {Component} from 'angular2/core';

@Component ({
	selector: 'my-app',
	template: `
	<h1>Angular 2- Second Class</h1>
	<h2>Todo List</h2>
	<ul>
		<li *ngFor="#task of tasks; #i = index">
			{{task}} <a href="#" (click)="remove(i)">[ X ]</a>
		</li>
	</ul>
	<input type="text" name="task" placeholder="Enter your task..."
		[(ngModel)]="txtTask">
	<button (click)="add()">Adicionar</button>
	`
})
export class AppComponent {
	public tasks: string[] = [];

	public txtTask: string;


	add() {
		if (this.txtTask != '') {
			this.tasks.push(this.txtTask);
			this.txtTask = '';
		}
	}

	remove(index:number) {
		this.tasks.splice(index, 1);
	}
}