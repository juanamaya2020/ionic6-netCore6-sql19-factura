import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  private url: string = 'https://localhost:7085/api/auth/';
  public email: string = '';
  public password: string = '';

  constructor(
    private _http: HttpClient,
    private _alertController: AlertController,
    private _router: Router
  ) {}

  ngOnInit() {}

  async presentAlert(header$: string, message$: string) {
    const alert = await this._alertController.create({
      header: header$,
      message: message$,
      buttons: ['OK'],
    });

    await alert.present();
  }

  login(): void {
    const model = {
      correo: this.email,
      clave: this.password,
    };
    this._http.post(this.url + 'login', model).subscribe((res) => {
      if (res) {
        this.email = '';
        this.password = '';
        this.presentAlert('Bienvenido', 'Sesión iniciada correctamente');
        this._router.navigate(['/folder/Inbox']);
      } else this.presentAlert('Error', 'Usuario o contraseña incorrecto');
    });
  }
}
