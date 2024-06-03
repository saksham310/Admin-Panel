import { Component,inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private authService:AuthenticationService=inject(AuthenticationService);
  logout(){
    this.authService.logOut();
  }
}
