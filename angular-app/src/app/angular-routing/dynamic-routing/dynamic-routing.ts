import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-dynamic-routing',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './dynamic-routing.html',
  styleUrl: './dynamic-routing.scss'
})
export class DynamicRouting {
  public usersList = [
    {
      id: 1,
      name: 'Sameer',
      Age: 23
    },
    {
      id: 2,
      name: 'Pritesh',
      Age: 22
    },
    {
      id: 3,
      name: 'Amit',
      Age: 24
    },
    {
      id: 4,
      name: 'Ashutosh',
      Age: 24
    },
    {
      id: 5,
      name: 'Ritesh',
      Age: 28
    }
  ]
}
