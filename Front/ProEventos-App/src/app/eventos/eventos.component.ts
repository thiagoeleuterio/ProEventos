import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent implements OnInit {

  public eventos: any = [
    {
      Tema: "Angular",
      Local: "Maringá"
    },
    {
      Tema: "Angular 11",
      Local: "Maringá City"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
