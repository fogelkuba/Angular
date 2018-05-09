import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  template: `
    <h2>Serwery:</h2>
    <button 
      [disabled]="!allowNewServer"
      class="btn btn-primary"
      (click)="onCreateServer()" 
    >
      Add Server
    </button>
    <p>{{allowNewServer}}</p>
    <app-server></app-server>
    <app-server></app-server>
    <span>{{serverCreationStatus}}</span>
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
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
}
