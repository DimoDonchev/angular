import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  serverCreationStatus = 'No server was created!'; 
  allowNewServer = false;
  serverName = 'test Server';
  serverCreated = false;
  servers = ['Testserver','Testserver2'];

  constructor() { 
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = this.serverName + ' was created!';
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event){
    //console.log(event);
    this.serverName = event.target.value;
  }

}
