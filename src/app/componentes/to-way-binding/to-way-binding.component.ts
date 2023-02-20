import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-way-binding',
  templateUrl: './to-way-binding.component.html',
  styleUrls: ['./to-way-binding.component.css']
})
export class ToWayBindingComponent implements OnInit{
  outraCoisa!: string;
  name! : string;

  alertCoisa(outraCoisa: string){
    alert(this.outraCoisa);
  }

  constructor(){

  }
  ngOnInit(): void {
    
  }
}
