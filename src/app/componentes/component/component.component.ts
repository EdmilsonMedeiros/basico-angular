import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit{

  minhaLista = [
    'Edmilson',
    'Alzilene',
    'Thanos'
  ];

  name: string = 'Edmilson';
  idade: number = 29;
  job: string = 'Programador';
  hobbies = ['Correr', "jogar", "Estudar"];
  car = {
    name: "Polo",
    year: "2019"
  };

  constructor(){

  }
  ngOnInit(): void {
    
  }

}
