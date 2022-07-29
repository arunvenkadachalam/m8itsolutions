import { Component, OnInit,Input, Output } from '@angular/core';
import{SharedService}from"../shared/shared.service"
@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  constructor(private shared:SharedService) { }

  ngOnInit(): void {
    this.shared.setmessage(this.message)
  }

     message= prompt("Enter your Email id!");


  

}
