import { Routes } from '@angular/router';
import { NavbarComponent } from './common-components/navbar/navbar.component';
import { LoginComponent } from './login/login.component';

export const routes: Routes = [
    {path:'',component:LoginComponent,title:"test"}
];
