import { Component, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'rp-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  
  constructor(
    private route: Router
  ){}

  public ngOnInit(): void {

  }

  public register(): void {
    this.route.navigate(['/registration']);
  }
}