import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-status',
  template: `
    <h1>404</h1>
    <h3>Page not found</h3>
  `,
  styles: [`
    h1{color: red;font-size: 3rem;text-align:center;}
    h3{color: #ddd;font-size:2rem;text-align:center;}
  `]
})
export class StatusComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
