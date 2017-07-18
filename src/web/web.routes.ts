import {Routes , RouterModule} from '@angular/router';
import {HomeComponent} from './components/pages/home/home.component';
import {AboutComponent} from './components/pages/about/about.component';

const routes : Routes = [
   {
   path:'', 
   component: HomeComponent
   },
   {path:'About', 
   component: AboutComponent,
    },
]; 

export const routing = 
    RouterModule.forRoot(routes);