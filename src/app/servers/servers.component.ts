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
      [(ngModel)]="serverName"
    >
    <p>{{ serverName }}</p>
    <button 
      [disabled]="!allowNewServer"
      class="btn btn-primary"
      (click)="onCreateServer()" 
    >
      Add Server
    </button>
    <p>{{ allowNewServer }}</p>
    <app-server></app-server>
    <app-server></app-server>
    <span>{{serverCreationStatus}}</span>
  `,
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverName = '';
  serverCreationStatus = 'NO server created';
  constructor() {
    setTimeout( ()=> {
        this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreationStatus = 'NEW server created recently'
  }
  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
