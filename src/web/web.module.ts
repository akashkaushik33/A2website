import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {NavbarComponent} from './components/navbar/navbar.component';
import {JumbotronComponent} from './components/jumbotron/jumbotron.component';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';
import { webcomponent }  from './web.component';
import {routing} from './web.routes';

@NgModule({
  imports:      [ BrowserModule , routing],
  declarations: [ webcomponent , NavbarComponent , JumbotronComponent , AboutComponent , HomeComponent],
  bootstrap:    [ webcomponent ]
})
export class webmodule { }
