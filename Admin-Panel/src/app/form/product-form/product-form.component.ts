import { Component, ViewEncapsulation, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { FloatLabelModule } from 'primeng/floatlabel';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule,CardModule,
    DropdownModule, ButtonModule,FloatLabelModule,InputTextModule,InputGroupModule,InputGroupAddonModule], 
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css',
  encapsulation:ViewEncapsulation.None
})
export class ProductFormComponent {
  private subscritption:Subscription=new Subscription();
private _fb:FormBuilder=inject(FormBuilder);
form!:FormGroup;
options:string[]=['In Stock','Out of Stock'];
constructor(private dataService:DataService){
  this.form=this._fb.group({
    name:[''],
    price:[1],
    category:[''],
    status:[false],
  })
}
onSubmit(){
  console.log(this.form.getRawValue());
  const status=this.form.get("status")?.value;
  if(status==="In Stock"){
    this.form.get("status")?.setValue(true);
  }else{
    this.form.get("status")?.setValue(false);
  }
  const add=this.dataService.addProduct(this.form.getRawValue()).subscribe((res)=>{
    console.log(res);
    this.form.reset();
  });
  this.subscritption.add(add);
  
}
ngOnDestroy(){
  this.subscritption.unsubscribe();
}

}

