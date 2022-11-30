import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { ProductsTypes } from '../../products/products.page';

@Component({
  selector: 'app-impto-create',
  templateUrl: './impto-create.page.html',
  styleUrls: ['./impto-create.page.scss'],
})
export class ImptoCreatePage implements OnInit {

  private url: string = 'https://localhost:7085/api/';
  public descripcion: string = '';
  public valorUnitario: number = 0;
  public products: ProductsTypes[] = [];

  constructor(
    private _http: HttpClient,
    private _alertController: AlertController,
    private _router: Router
  ) {}

  ngOnInit() {
    this.getProducts()
  }

  async presentAlert(header$: string, message$: string) {
    const alert = await this._alertController.create({
      header: header$,
      message: message$,
      buttons: ['OK'],
    });

    await alert.present();
  }

  getProducts() {
    this.products = [];
    this._http.get(this.url + 'products/').subscribe((res: any) => {
      res.forEach((element: any) => {
        this.products.push({
          idProducto: element.idProducto,
          descripcion: element.descripcion,
          valorUnitario: element.valorUnitario,
          estado: element.estado,
        });
      });
    });
  }

  setImpto() {
    const model = {
      idImpto: 0,
      idProducto: this.descripcion,
      porcentajeImpto: this.valorUnitario,
      estado: true,
      producto: ""
    };
    this._http.post(this.url + 'impto', model).subscribe((res: any) => {
      if (res) {
        this.presentAlert('Exito', 'El impuesto fue guardado correctamente');
        this._router.navigate(['/impuest']);
      } else
        this.presentAlert('Error', 'El impuesto no se pudo guardar');
    });
  }

}
