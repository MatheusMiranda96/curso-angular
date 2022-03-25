import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firtst-component',
  templateUrl: './firtst-component.component.html',
  styleUrls: ['./firtst-component.component.scss']
})
export class FirtstComponentComponent implements OnInit {
  name: string = 'Matheus';
  age: number = 26;
  job = 'Programador';
  hobbies = ['Correr', 'Jogar', 'Estudar'];
  car = {
    name: "Polo",
    year: 2022,
  }

  constructor() { }

  ngOnInit(): void {
  }

}
