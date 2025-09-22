import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-users',
  imports: [],
  templateUrl: './users.html',
  styleUrl: './users.scss'
})
export class Users {
  public id: string | null = "";
  public name: string | null = "";

  constructor(private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = params['id']
      this.name = params['name']
    })
  }
}
