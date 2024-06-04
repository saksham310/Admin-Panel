import { Component,inject } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css'
})
export class DashboardComponent {
  private authService:AuthenticationService=inject(AuthenticationService);
  logout(){
    this.authService.logOut();
  }
}
