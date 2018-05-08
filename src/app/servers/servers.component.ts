import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',
  template: `
    <h2>Serwery:</h2>
    <button 
      [disabled]="!allowNewServer"
      class="btn btn-primary">
      Add Server
    </button>
    <p>{{allowNewServer}}</p>
    <app-server></app-server>
    <app-server></app-server>
    
  `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  constructor() {
    setTimeout( ()=> {
        this.allowNewServer = true;
    },2000)
  }

  ngOnInit() {
  }

}
