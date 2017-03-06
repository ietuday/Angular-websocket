import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../services/web-socket.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
    this.click();
  WebSocketService.getInstance().DemoBehaviorSubject.subscribe(data => this.DemoBehaviorSubjectSubscribe(data));
   }

  ngOnInit() {
  }

  click() {
    console.log("In HomeComponent: UserName :",);
     WebSocketService.getInstance().sendMessage({
       'action': 'buttonClick'
     });
   }

   DemoBehaviorSubjectSubscribe(data){
     console.log("Inside DemoBehaviorSubjectSubscribe",data);
   }

}
