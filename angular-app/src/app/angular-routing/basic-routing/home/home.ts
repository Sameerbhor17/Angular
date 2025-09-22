import { Component } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {
  constructor(private route: Router) {};

  goToPaexskinProfile() {
    this.route.navigate(['profile'],{queryParams:{company: 'Paexskin Solutions Pvt. Ltd.'}});
  }

  goToMNCs() {
    this.route.navigate(['profile'],{queryParams:{company: 'Wipro'}});
  }
}
