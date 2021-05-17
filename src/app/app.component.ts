import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'spin';
  idToLandOn = 3;
  items = [
    {id:1, text:'Prize 1'},
    {id:2, text:'Prize 2'},
    {id:3, text:'Prize 3'},
    {id:4, text:'Prize 4'},
    {id:5, text:'Prize 5'},
    {id:6, text:'Prize 6'},
    {id:7, text:'Prize 7'},
    {id:8, text:'Prize 8'},
  ];
  before(){
    console.log('before');
  }
  after(){
    console.log('after');
    alert(`You got Prize ${this.idToLandOn}`);
  }
  myreset(){
    console.log('myreset');
    this.idToLandOn = this.items[Math.floor(Math.random() * this.items.length)].id;
    console.log('this.idToLandOn--', this.idToLandOn);
  }
}