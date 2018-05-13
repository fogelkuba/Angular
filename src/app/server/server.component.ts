import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    p{
      border: 1px solid gray;
      border-radius: 5px;
      padding: 5px;
    }
    .online{
      border: 1px solid green;
      border-radius: 5px;
    }
  `]
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
