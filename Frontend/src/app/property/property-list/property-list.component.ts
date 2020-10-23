import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';
import { Iproperty } from '../Iproperty';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  properties :Array<Iproperty>;
  constructor(private housingService:HousingService) { }

  ngOnInit(): void {
    this.housingService.getAllHousing().subscribe(data=>{
    this.properties=data
    },error=>{
      console.log(error);
    })
  }

}
