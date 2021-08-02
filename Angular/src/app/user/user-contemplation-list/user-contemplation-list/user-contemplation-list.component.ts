import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'user-contemplation-list',
  templateUrl: './user-contemplation-list.component.html',
  styleUrls: ['./user-contemplation-list.component.css'],
  animations: [
    trigger('animacionCuadro', [
      state('estado1', style({
        backgroundColor: 'red',
        width: '100px',
        height: '100px'
      })),
      state('estado2', style({
        backgroundColor: 'blue',
        width: '100px',
        height: '100px'
      })),
      transition('estado1 => estado2', [
        animate('1s', style({backgroundColor: 'blue'})),
        //animate(500, style({width: '150px'})),
        //animate(1500, style({height: '150px'}))
      ]
      ), 
      transition('estado2 => estado1', [
        animate('1s', style({backgroundColor: 'red'})),
        //animate(500, style({width: '100px'})),
        //animate(1500, style({height: '100px'}))
      ])
    ])
  ]
})
export class UserContemplationListComponent implements OnInit {
  estadoCuadro = 'estado1';
  constructor() { }

  ngOnInit(): void {
  }

  animar(){
    this.estadoCuadro = this.estadoCuadro === 'estado1'? 'estado2' : 'estado1';
  }

}
