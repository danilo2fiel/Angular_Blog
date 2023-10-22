import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  descricao: string =""
  texto:string ="vista aérea da cidade de belem englobando os mais diversos bairros do centro que tem vista para a bahia"
  @Input()
  imagem:string =""

  ngOnInit(): void {

  }

}

