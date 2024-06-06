import { Component, inject } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ProductsInterface } from '../../interface/products.interface';
import { OrdersInterface } from '../../interface/orders.interface';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'],
})
export class PanelComponent {
  products:ProductsInterface[]=[];
  data:ProductsInterface[][]=[];
  private dataService:DataService=inject(DataService); 
  ngOnInit(): void {
    this.dataService.getProducts().subscribe({
      next:(data:ProductsInterface[])=>{
        this.products=data;
      this.data.push(this.products)}})}
}
