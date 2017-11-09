import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './services/data.service';
import { User } from './model/user';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'demo-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular 5 HttpClient';
  data$: Observable<Array<User>>;
  selectedUser:User;
  viewingDetails:boolean = false;

  constructor(private _dataSvc: DataService) { }
  
  fetchData() {
    this.data$ = this._dataSvc.getUsers();
  }

  viewUserDetails(user: User) {
    this.selectedUser = user;
    this.viewingDetails = true;
  }

  hideUserDetails() {
    this.selectedUser = undefined;
    this.viewingDetails = false;
  }
}
