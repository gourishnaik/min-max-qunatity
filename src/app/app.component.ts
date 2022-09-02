import { Component } from '@angular/core';

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
  constructor() { }

  
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
  }

}

decrease(){
this.count = this.count -1;
this.maximum =false;

if(this.count<3){

  this.minimum = true;
  this.count = this.count =0;
}

}


}
