import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  prod1 = {
    id_prod: 1,
    name: 'Chuteira Nike',
    valor: '450,00',
    tamanho_prod: '(40 - 41) | (31 - 32)',
    desc_prod: 'Chuteira Nike Tiempo 2022'
  };
  prod2 = {
    id_prod: 2,
    name: 'Chuteira Adidas',
    valor: '450,00',
    tamanho_prod: '(40 - 41) | (31 - 32)',
    desc_prod: 'Chuteira Adidas Predator 2022'
  };

  title = 'curso-angular';
}
