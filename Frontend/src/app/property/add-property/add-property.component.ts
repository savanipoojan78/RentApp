import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import {Router} from '@angular/router'
import { Iproperty } from '../Iproperty';
@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
   // Will come from masters
   propertyTypes: Array<string> = ['House', 'Apartment', 'Duplex']
   furnishTypes: Array<string> = ['Fully', 'Semi', 'Unfurnished']

   propertyView: Iproperty = {
     Id: null,
     Name: '',
     Price: null,
     SellRent: null,
     Type: null
   };

  selectTab(tabId: number) {
    this.formTabs.tabs[tabId].active = true;
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
  onBack(){
    this.router.navigate(['/']);
  }
  onSubmit(Form: NgForm){
    console.log(Form)
  }

}
