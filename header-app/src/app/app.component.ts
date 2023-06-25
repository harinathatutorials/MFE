import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';



@Component({
  selector: 'header-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent  implements OnInit{
  userName: string ='';
  title = 'headr app';

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  ngOnInit() {
    if(localStorage.getItem('loggedUser')){
      let userData: any= localStorage.getItem('loggedUser');
      this.userName = JSON.parse(userData).username
    }
    console.log(this.userName);
  }
}

