import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.scss']
})
export class ParentDataComponent implements OnInit {
@Input () prod1!:{
  id_prod: number 
  name: string 
  valor: string 
  desc_prod: string
  tamanho_prod: string
};

@Input () prod2!:{
  id_prod: number 
  name: string 
  valor: string 
  desc_prod: string
  tamanho_prod: string
};

  constructor() { }

  ngOnInit(): void {
  }

}
