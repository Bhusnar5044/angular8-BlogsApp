import { Component, OnInit } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  async ngOnInit() {
    axios.get("http://127.0.0.1:8085" + '/blogs')
    .then(response => {
      console.log(response.data);
    });
    console.log('callig');
    // fetch("http://127.0.0.1:8085" + '/blogs')
    // .then(response => () => {
    //   console.log(response);
    // })
    
  }

}
