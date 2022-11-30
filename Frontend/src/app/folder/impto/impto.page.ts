import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

interface ImtosTypes {
  idImpto: number,
  idProducto: number,
  porcentajeImpto: number,
  estado: boolean,
  producto: string
}

@Component({
  selector: 'app-impto',
  templateUrl: './impto.page.html',
  styleUrls: ['./impto.page.scss'],
})
export class ImptoPage implements OnInit {

  private url: string = 'https://localhost:7085/api/impto/';
  public imptos: ImtosTypes[] = [];

  constructor(private _http: HttpClient) {}

  ngOnInit() {
    this.getImptos();
  }

  getImptos() {
    this.imptos = [];
    this._http.get(this.url).subscribe((res: any) => {
      res.forEach((element: ImtosTypes) => {
        this.imptos.push({
          idImpto: element.idImpto,
          idProducto: element.idProducto,
          porcentajeImpto: element.porcentajeImpto,
          estado: element.estado,
          producto: element.producto,
        });
      });
    });
  }

}
