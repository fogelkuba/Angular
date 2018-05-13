import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

export class ServerComponent{
  constructor() {
    this.serverStatus = Math.random() > .5 ? 'online' : 'offline';
  }

  serverId: number = 131411240;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }

  getColor(){
    if (this.serverStatus === 'online'){
      return 'green';
    } else {
      return 'red';
    }
  }
}
