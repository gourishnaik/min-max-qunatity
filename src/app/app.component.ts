import { Component } from '@angular/core';
import { NgToastService } from 'ng-angular-popup';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'minmax';
 count:number = 0;
 maximum= false;
 minimum = false;
  constructor(private toast: NgToastService) { }

  
  ngOnInit(): void {
  }

increase(){
  this.minimum = false;
  if(this.count<3){
    this.count = this.count +3;
     
  }
  else{
    this.count = this.count +1;
  
  }


  if(this.count>10){
    this.maximum =true;
    this.count = this.count =10;
    this.toast.warning({detail:"Alert",summary:'maximum 10 quantity you can buy',duration:2000})  
  }

}

decrease(){
this.count = this.count -1;
this.maximum =false;

if(this.count<3){
 
 this.toast.warning({detail:"Alert",summary:'minimum you must buy 3 quantity',duration:2000})  
  this.minimum = true;
  this.count = this.count =0;
}

}


}
