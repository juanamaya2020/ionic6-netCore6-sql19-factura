import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['../login/login.page.scss'],
})
export class SignupPage implements OnInit {
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

  signup(): void {
    const model = {
      correo: this.email,
      clave: this.password,
    };
    this._http.post(this.url + 'signup', model).subscribe((res) => {
      if (res) {
        this.email = '';
        this.password = '';
        this.presentAlert('¡Correcto!', 'Cuenta creada, ahora inicia sesión');
        this._router.navigate(['/login']);
      } else this.presentAlert('Error', 'Intentelo más tarde');
    });
  }
}
