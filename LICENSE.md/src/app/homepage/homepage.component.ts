import { Component, OnInit } from '@angular/core';

import {DataService} from '../data.service';
import { map } from "rxjs/operators";

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  providers: [DataService]
})
export class HomepageComponent implements OnInit {

  comments=[];
  constructor(private dataService : DataService) { }

  getCommentsHome(){
    this.dataService.getComments().subscribe( comments => {
      this.comments= comments;
    })
  }

  ngOnInit() {
    this.getCommentsHome();
  }

}
