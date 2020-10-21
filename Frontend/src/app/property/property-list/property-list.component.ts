import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties :Array<any>=[
    {
    "Id":1,
    "Name":"Birla House",
    "Type":"House",
    "Price":"23000"
    },
    {
      "Id":2,
      "Name":"Amazon",
      "Type":"House",
      "Price":"3343000"
    },
    {
      "Id":3,
      "Name":"Scam 1992",
      "Type":"House",
      "Price":"3423000"
    },
    {
      "Id":4,
      "Name":"Antala",
      "Type":"House",
      "Price":"1223000"
    },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
