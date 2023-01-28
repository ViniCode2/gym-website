import { LoadingComponent } from './loading/loading.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent implements OnInit {

  user: any;

  constructor() { }

  ngOnInit(): void {
    let usr: any = localStorage.getItem("usuario");
    this.user = JSON.parse(usr);
  }

  goToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

}
