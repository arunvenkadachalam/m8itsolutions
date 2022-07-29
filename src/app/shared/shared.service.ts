import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
message:string | undefined
  getdata: any;
  constructor() { }
  setmessage(data: string | null){
this.getdata=data
  }
getmessage(){
  return this.message

}
}
