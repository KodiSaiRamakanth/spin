import { Component, ViewChild } from '@angular/core';
import Swal from 'sweetalert2';
import { NgxWheelComponent } from 'ngx-wheel';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit  {

  @ViewChild(NgxWheelComponent, { static: false }) wheel;

  title = 'spin';
  idToLandOn=1;
  list:any=[];
  str:any;
  str1 =new String("You have won: ");
  items = [
    {id:1, text:'Prize 1'},
    {id:2, text:'Prize 2'},
    {id:3, text:'Prize 3'},
    {id:4, text:'Prize 4'},
   
  ];
  readonly baseURL = 'https://localhost:44358/api/EmployeeDetails'


  constructor(private http:HttpClient) {}
  ngOnInit(): void {

    this.http.get("https://prize.azurewebsites.net/api/EmployeeDetails").subscribe(res =>{
      this.list=res;
    }
    
   );
  

}
  before(){
    console.log('before');
    console.log(this.list);

  }
  after(){
    console.log(this.idToLandOn);
    this.str=this.idToLandOn;
    var str3 = this.str1.concat(this.list[0].employeeName.toString());


    if(this.idToLandOn == 1){

      Swal.fire({
        title: 'Congrats',
        text: str3,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Play Again',
      }).then((result) => {
  
        if (result.isConfirmed) {
  
          console.log('Clicked Yes, File deleted!');
          this.myreset();
          this.wheel.reset();
  
  
        }
      })

    }else if(this.idToLandOn == 2){
      var str3 = this.str1.concat(this.list[0].employeeAge.toString());
      Swal.fire({
        title: 'Congrats',
        text: str3,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Play Again',
      }).then((result) => {
  
        if (result.isConfirmed) {
  
          this.myreset();
          this.wheel.reset();
  
  
        }
      })

    }else if(this.idToLandOn == 3){

      var str3 = this.str1.concat(this.list[0].employeeDeparment.toString());
      Swal.fire({
        title: 'Congrats',
        text: str3,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Play Again',
      }).then((result) => {
  
        if (result.isConfirmed) {
  
          this.myreset();
          this.wheel.reset();
  
  
        }
      })

    }else if(this.idToLandOn == 4){
      var str3 = this.str1.concat(this.list[0].employeeRole.toString());
Swal.fire({
        title: 'Congrats',
        text: str3,
        icon: 'success',
        showCancelButton: false,
        confirmButtonText: 'Play Again',
      }).then((result) => {
  
        if (result.isConfirmed) {
  
          this.myreset();
          this.wheel.reset();
  
  
        }
      })

    }


    
  
    // alert(`You got Prize ${this.idToLandOn}`);
  }
  myreset(){
    console.log('myreset');
    this.idToLandOn = this.items[Math.floor(Math.random() * this.items.length)].id;
    console.log('this.idToLandOn--', this.idToLandOn);
  }
}