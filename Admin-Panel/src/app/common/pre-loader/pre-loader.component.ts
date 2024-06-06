import { Component } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-pre-loader',
  standalone: true,
  imports: [ProgressSpinnerModule],
  templateUrl: './pre-loader.component.html',
  styleUrl: './pre-loader.component.css'
})
export class PreLoaderComponent {

}
