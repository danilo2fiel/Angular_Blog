import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  descricao: string =""
  @Input()
  texto:string =""
  @Input()
  imagem:string =""
  @Input()
  id:string="0"

  ngOnInit(): void {

  }

}

