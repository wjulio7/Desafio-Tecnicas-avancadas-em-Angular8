import { Component, OnInit } from '@angular/core';

export interface PeriodicElement {
  name: string;
  position: number;
  cidade: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Ford',  cidade: 'Goiania'},
  {position: 2, name: 'Honda',  cidade: 'Jaboatão'},
  {position: 3, name: 'Nike',  cidade: 'Recife'},
  {position: 4, name: 'Sansung',  cidade: 'Recife'},
  {position: 5, name: 'Apple', cidade: 'Olinda'},
  {position: 6, name: 'Philips', cidade: 'Abreu e Lima'},
  {position: 7, name: 'Ubisoft',  cidade: 'Cavaleiro'},
  {position: 8, name: 'Pão de açucar',  cidade: 'Recife'},
  {position: 9, name: 'Grande Recife',  cidade: 'Recife'},
  {position: 10, name: 'Porto Digital',  cidade: 'Recife'},
];


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  displayedColumns: string[] = ['position', 'name', 'cidade'];
  dataSource = ELEMENT_DATA;

  ngOnInit(): void {
  }

}
