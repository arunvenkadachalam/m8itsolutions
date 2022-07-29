import { Component, OnInit,Input } from '@angular/core';
import{SharedService}from"../shared/shared.service"

@Component({
  selector: 'app-database',
  templateUrl: './database.component.html',
  styleUrls: ['./database.component.css']
})
export class DatabaseComponent implements OnInit {
message:string | undefined
  constructor(private shared:SharedService) { }

  ngOnInit(): void {
     this.message=this.shared.getmessage()
  }

}
