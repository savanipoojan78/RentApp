import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import { Iproperty } from '../property/Iproperty';
@Injectable({
  providedIn: 'root'
})
export class HousingService {

constructor(private http:HttpClient) { }
  getAllHousing():Observable<Iproperty[]>{
    return this.http.get('/data/properties.json').pipe(
      map(data=>{
        const propertiesArray:Array<Iproperty>=[];
        for(const id in data){
          propertiesArray.push(data[id])
        }
        return propertiesArray;
      })
    )
  }

}
