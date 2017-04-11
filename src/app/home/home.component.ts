import { Component, OnInit } from '@angular/core';
import {WebSocketService} from '../services/web-socket.service';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/forkJoin';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  loadedCharacter: {};

  constructor(private http:Http) {
    // this.click();
  WebSocketService.getInstance().DemoBehaviorSubject.subscribe(data => this.DemoBehaviorSubjectSubscribe(data));
   }

  ngOnInit() {
    // let character = this.http.get('http://swapi.co/api/people/1').map(res => res.json());
    //    let characterHomeworld = this.http.get('http://swapi.co/api/planets/1').map(res => res.json());
    //
    //    Observable.forkJoin([character, characterHomeworld]).subscribe(results => {
    //      // results[0] is our character
    //      // results[1] is our character homeworld
    //      results[0].homeworld = results[1];
    //      this.loadedCharacter = results[0];
    //    });
  }

  // click() {
  //   console.log("In HomeComponent: UserName :",);
  //    WebSocketService.getInstance().sendMessage({
  //      'action': 'buttonClick'
  //    });
  //  }

   DemoBehaviorSubjectSubscribe(data){
     console.log("Inside DemoBehaviorSubjectSubscribe",data);
   }
}
