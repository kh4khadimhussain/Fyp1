import { Component, OnInit } from '@angular/core';
import {Http} from "@angular/http"

@Component({
  selector: 'app-singup',
  templateUrl: './singup.component.html',
  styleUrls: ['./singup.component.css']
})
export class SingupComponent implements OnInit {

  constructor(
    private http:Http
  ) { 
    http.get("http://localhost:4000/api/user/signup",{}).subscribe(response=>{
      var res=response
    })
  }
  ngOnInit() {
  }

}
