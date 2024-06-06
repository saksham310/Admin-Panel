import { Component, inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { ProductsInterface } from '../interface/products.interface';
import { CategoryComponent } from '../dashboard-components/category/category.component';
import { DataService } from '../services/data.service';
import {  Subscription } from 'rxjs';
import { TagModule } from 'primeng/tag';
import { PreLoaderComponent } from '../common/pre-loader/pre-loader.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive,TagModule,PreLoaderComponent],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  private subscritption:Subscription=new Subscription();
  public products: ProductsInterface[] = [];
  public category: CategoryComponent[] = [];
  private authService: AuthenticationService = inject(AuthenticationService);
  private dataService: DataService = inject(DataService);

  logout() {
    this.authService.logOut();
  }

  ngOnInit() {
    const products=this.dataService.getProducts().subscribe((data: ProductsInterface[]) => {
      this.products = data;
      console.log(this.products);
  
    });
    this.subscritption.add(products);
  }

ngOnDestroy(){
  this.subscritption.unsubscribe();
}}