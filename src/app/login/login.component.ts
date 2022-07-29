import { Component, OnInit } from '@angular/core';
import{SharedService}from"../shared/shared.service"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
getdata:string | undefined
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.getmessage
  }
 
 

}
