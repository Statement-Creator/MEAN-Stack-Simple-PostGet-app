import { Component, OnInit } from '@angular/core';
import {DataService} from '../data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  constructor(private dataService:DataService) { }

  ngOnInit() {
  }
  postComment(commentFrm){
    this.dataService.postComment(commentFrm).subscribe(data => {alert(data.commentText);
    }
  )
  }

}
