import { Component } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public people = [];
  public months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  constructor(private peopleService: PeopleService){}
  ngOnInit(){
    let temp = this.peopleService.getPeople();
    for(let i=0;i<temp.length;i++){
      let joinedDate = new Date(temp[i].join_date);
      let joinedDateString = this.months[joinedDate.getMonth()]+" "+(joinedDate.getDate())+", "+joinedDate.getFullYear();
      temp[i]["joined_date"] = joinedDateString;
    }
    this.people = temp;
  }
}
