import { Component, OnInit } from '@angular/core';
import { Fruit } from 'src/app/services/fruit.model';
import { FruitService } from 'src/app/services/fruit.service';

@Component({
  selector: 'lista-frutas',
  templateUrl: './lista-frutas.component.html',
  styleUrls: ['./lista-frutas.component.scss']
})
export class ListaFrutasComponent implements OnInit {

  fruit: Fruit[] | undefined;

  constructor(private fruitService: FruitService) { }

  ngOnInit(): void {
    this.fruitService.getFruit()
      .subscribe(res => this.fruit = res);
  }
}
