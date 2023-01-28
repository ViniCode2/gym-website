import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loginAutentico: boolean = false;

  constructor(private router: Router) {}

  fazerLogin(login: Login) {
    const users = [
      {
        nome: 'Vinicius Gomes',
        email: 'usuario@gmail.com',
        senha: '123456',
        perfil: 'ADMINISTRADOR',
      },
      {
        nome: 'Larissa Manuela',
        email: 'larissa@gmail.com',
        senha: '123456',
        perfil: 'ALUNO',
      },
    ];

    for (let user of users) {
      if (login.email === user.email && login.senha === user.senha) {
        localStorage.setItem('usuario', JSON.stringify(user));
        this.loginAutentico = true;
        this.router.navigate(['home']);
      } else {
        this.loginAutentico = false;
      }
    }
  }

}
