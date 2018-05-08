import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  template: '<h2>Serwery:</h2><app-server></app-server><app-server></app-server>',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
