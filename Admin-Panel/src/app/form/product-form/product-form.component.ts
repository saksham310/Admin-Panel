import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { DataService } from '../../services/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-product-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './product-form.component.html',
  styleUrl: './product-form.component.css'
})
export class ProductFormComponent {
  private subscritption:Subscription=new Subscription();
private _fb:FormBuilder=inject(FormBuilder);
form!:FormGroup;
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

