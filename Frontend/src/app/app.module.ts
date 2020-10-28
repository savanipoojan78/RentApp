import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from '@angular/common/http'
import { AppComponent } from './app.component';
import { PropertyCardComponent } from './property/property-card/property-card.component';
import { PropertyListComponent } from './property/property-list/property-list.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HousingService } from './services/housing.service';
import { AddPropertyComponent } from './property/add-property/add-property.component';
import {Router,RouterModule, Routes} from '@angular/router'
import { PropertyDetailComponent } from './property/property-detail/property-detail.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms'
import { UserLoginComponent } from './user/user-login/user-login.component';
import { UserRegisterComponent } from './user/user-register/user-register.component';
import { UserService } from './services/User.service';

const appRouters:Routes=[{
    path:'',
    component:PropertyListComponent
  },{
    path:'add-property',
    component:AddPropertyComponent
  },{
    path:'rent-property',
    component:PropertyListComponent
  },{
    path:'property-detail/:id',
    component:PropertyDetailComponent
  },{
    path:'user/login',
    component:UserLoginComponent
  },{
    path:'user/register',
    component:UserRegisterComponent
  },{
    path:'**',
    component:PropertyListComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PropertyCardComponent,
    PropertyListComponent,
    NavBarComponent,
    AddPropertyComponent,
    PropertyDetailComponent,
    UserLoginComponent,
    UserRegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CommonModule,
    RouterModule.forRoot(appRouters),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    HousingService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
