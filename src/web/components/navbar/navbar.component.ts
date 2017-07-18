import {Component} from '@angular/core';

@Component({
    
    moduleId: module.id,
	selector: 'navbar',
	templateUrl: 'navbar.component.html'
})
export class NavbarComponent{
 private ProjectName: string;
 constructor (){
 this.ProjectName = 'A2Website';
 }    
}