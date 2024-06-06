import { CommonModule } from '@angular/common';
import { Component, Input, inject } from '@angular/core';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { MultiSelectModule } from 'primeng/multiselect';
import { DropdownModule } from 'primeng/dropdown';
import {ProgressBarModule} from 'primeng/progressbar';
import { SliderModule } from 'primeng/slider';
import { TagModule } from 'primeng/tag';
import { ProductsInterface } from '../../interface/products.interface';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { PreLoaderComponent } from '../../common/pre-loader/pre-loader.component';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,TableModule,ButtonModule,
    MultiSelectModule,TagModule,SliderModule,
    DropdownModule,ProgressBarModule,
    PreLoaderComponent
  ],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {
  private subscritption:Subscription=new Subscription();
products:ProductsInterface[]=[];
private dataService:DataService=inject(DataService); 
isLoading:boolean=true
ngOnInit(): void {
  // this.isLoading=true
  this.dataService.getProducts().subscribe({
    next:(data:ProductsInterface[])=>{
      this.products=data;
      this.isLoading=false
    },
    complete:()=>{
      this.isLoading=false
    }
  })
}
ngOnDestroy(){
  this.subscritption.unsubscribe();
}
}
