
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { TitleService } from 'src/app/Controller/title.service';
import { AuthService } from 'src/app/Controller/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  radio: string = '0';
  usuario: string = '';
  password: string = '';

  constructor(private router: Router, private titleService: TitleService, private authService: AuthService) { }
 
  radioButton(mode: string) {
    if (mode == 'Docente') {
      this.radio = '2';
    } else if (mode == 'Acudiente') {
      this.radio = '3';
    }
  }

  ngOnInit() {
    this.titleService.init();
  }

  iniciarSesion() {
    if (this.radio === '0') {
      alert('Seleccione un rol antes de iniciar sesión.');
      return;
    }
    let rol: number;
    switch (this.radio) {
      case '2':
        rol = 2;
        break;
      case '3':
        rol = 3;
        break;
      default:
        alert('Rol de usuario desconocido.');
        return;
    }
  
    const usr = this.usuario;
    const password = this.password;

  
    this.authService.iniciarSesion(rol, usr, password)
      .subscribe(
        response => {
          if (response === 'No') {
            alert('Usuario no encontrado');
          } else {
            switch (response) {
              case 'Administrador':
                this.router.navigate(['/dashboard-admin']);
                break;
              case 'Docente':
                this.router.navigate(['/dashboard-docente']);
                break;
              case 'Acudiente':
                this.router.navigate(['/acudiente']);
                break;
              default:
                alert('Rol de usuario desconocido.');
                break;
            }
          }
        },
        error => {
          console.log(error);
          alert('Ocurrió un error durante el inicio de sesión.');
        }
      );
  }
  
  handleRadioChange(value: string) {
    this.radio = value;
  }
  
}
