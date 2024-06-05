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
  private subscribtion: Subscription = new Subscription();
  totalData: (ProductsInterface | OrdersInterface)[][] = [];
  totalProdcuts: ProductsInterface[] = [];
  totalOrders: OrdersInterface[] = [];
  private dataService: DataService = inject(DataService);
  constructor() {
    this.dataService.getData('products').subscribe((res: any) => {
      console.log(res as Array<ProductsInterface>);
  this.totalProdcuts = res as ProductsInterface[];
  console.log(this.totalProdcuts.length);
      // this.totalProdcuts = res as ProductsInterface[];
    });
    this.dataService.getData('orders').subscribe((res: any) => {
      this.totalOrders = res as OrdersInterface[];
    });
  }
}
