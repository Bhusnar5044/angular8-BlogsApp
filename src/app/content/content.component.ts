import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  constructor() { }
  public change="mystyle";

  ngOnInit() {
  }

  myFunction(x) {
    x.change="mystyle";
  }

}
