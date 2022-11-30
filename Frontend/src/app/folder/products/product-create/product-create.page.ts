import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.page.html',
  styleUrls: ['./product-create.page.scss'],
})
export class ProductCreatePage implements OnInit {
  private url: string = 'https://localhost:7085/api/products/';
  public descripcion: string = '';
  public valorUnitario: number = 0;

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

  setProduct() {
    const model = {
      idProducto: 0,
      descripcion: this.descripcion,
      valorUnitario: this.valorUnitario,
      estado: true
    };
    this._http.post(this.url, model).subscribe((res: any) => {
      if (res) {
        this.presentAlert('Exito', 'El producto fue guardado correctamente');
        this._router.navigate(['/products']);
      } else
        this.presentAlert('Error', 'El producto no se pudo guardar');
    });
  }
}
