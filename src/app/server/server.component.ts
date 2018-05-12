import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
})

export class ServerComponent{
  serverId: number = 131411240;
  serverStatus: string = 'offline';

  getServerStatus(){
    return this.serverStatus;
  }
}
