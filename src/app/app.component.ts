import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements DoCheck {
  constructor(private route: Router) {
  }
  title = 'authCurd';
  isMenuVisible = true;
  ngDoCheck(): void {
    const currentUrl = this.route.url;
    console.log(currentUrl);
    if(currentUrl=='/login'){
      this.isMenuVisible=false;
    }else{
      this.isMenuVisible=true;
    }
  }
}
