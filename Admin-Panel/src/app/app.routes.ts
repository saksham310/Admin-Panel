import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CanAccess } from './guards/auth-guard';
import { PanelComponent } from './dashboard-components/panel/panel.component';
import { ProductsComponent } from './dashboard-components/products/products.component';
import { CategoryComponent } from './dashboard-components/category/category.component';
import { OrdersComponent } from './dashboard-components/orders/orders.component';
import { ProductFormComponent } from './form/product-form/product-form.component';
import { RegistrationFormComponent } from './form/registration-form/registration-form.component';


export const routes: Routes = [
    {path:'',component:LoginComponent,title:"test"},
    {path:'dashboard',component:DashboardComponent,title:"Dashboard",canActivate:[CanAccess],children:[
        {path:'',redirectTo:"panel",pathMatch:"full"},
        {path:'panel',component:PanelComponent,title:"Dashboard"} , {path:'products',component:ProductsComponent,title:"Dashboard"},
        {path:'category',component:CategoryComponent,title:"Dashboard"} , {path:'order',component:OrdersComponent,title:"Dashboard"},
    ]
},
{path:'form',component:ProductFormComponent,title:"Form"},
{path:"register",component:RegistrationFormComponent,title:"Register"}
];
