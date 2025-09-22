import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pass-data-between-pages',
  imports: [NgIf],
  templateUrl: './pass-data-between-pages.html',
  styleUrl: './pass-data-between-pages.scss'
})
export class PassDataBetweenPages {
  public userName: string | null = '';
  public companyName: string | null = '';
  public employeeName: string | null = '';
  public ageInYears: number = 0;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    //Passing Data between the Pages using RouterLink
    this.userName = this.route.snapshot.paramMap.get('name');

    //Passing Data between the Pages using Button Click
    this.route.queryParams.subscribe((params)=> {
      this.companyName = params['company'];
    })

    //Passing Data between the Pages using Router
    this.route.data.subscribe((params) => {
      this.employeeName = params['name'];
      this.ageInYears = params['age'];
    })
  }
}
