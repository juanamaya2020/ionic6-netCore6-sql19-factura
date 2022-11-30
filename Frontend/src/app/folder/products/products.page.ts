import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

export interface ProductsTypes {
  idProducto: number;
  descripcion: string;
  valorUnitario: number;
  estado: boolean;
}

@Component({
  selector: 'app-products',
  templateUrl: './products.page.html',
  styleUrls: ['./products.page.scss'],
})
export class ProductsPage implements OnInit {
  private url: string = 'https://localhost:7085/api/products/';
  public products: ProductsTypes[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    this.products = [];
    this._http.get(this.url).subscribe((res: any) => {
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
}
