import { Component, OnInit } from '@angular/core';
import {logging} from "selenium-webdriver";

@Component({
  selector: '[app-servers]',
  template: `
    <h2>Serwery:</h2>
    <label>Server Name </label>
    <!--<input -->
      <!--type="text" -->
      <!--class="form-control"-->
      <!--(input)="onUpdateServerName($event)"-->
    <!--&gt;-->
    <input
      type="text"
      class="form-control"
      placeholder="type server name here"
      [(ngModel)]="serverName">
    <!--<p>{{ serverName }}</p>-->
    <button 
      [disabled]="!allowNewServer"
      class="btn btn-primary"
      (click)="onCreateServer()">
      Add Server
    </button>
    <!--<p>{{ allowNewServer }}</p>-->
    <!--<p>{{serverCreationStatus}}</p>-->
    <p *ngIf="serverCreationStatus; else noServer"> SERVER was created. NAME: {{serverName}} </p>
    <ng-template #noServer>
      <p> No sever was created</p>
    </ng-template>
    <app-server *ngFor="let server of servers"></app-server>
  `,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  servers = ['server1', 'server2'];
  // serverCreationStatus = '';
  serverCreationStatus = false;
  constructor() {
    setTimeout( ()=> {
        this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    // this.serverCreationStatus = `NEW server was created. Name is: ${this.serverName}`
    this.serverCreationStatus = true;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
