import { Login } from '../../Services/login';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-firstpage',
  templateUrl: './firstpage.component.html'
})
export class FirstpageComponent implements OnInit {

  public login: Login = new Login();

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  fazerLogin() {
    this.authService.fazerLogin(this.login);
  }

}
