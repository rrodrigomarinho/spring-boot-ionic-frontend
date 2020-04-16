import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ProdudoDTO } from '../../models/produtos.dto';

@IonicPage()
@Component({
  selector: 'page-produtos',
  templateUrl: 'produtos.html',
})
export class ProdutosPage {

  items : ProdudoDTO[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.items = [
      {
        id: "1",
        nome: "Mouse",
        preco: 80.99
      },
      {
        id: "2",
        nome: "Teclado",
        preco: 100.00
      }      
    ]
  };
}