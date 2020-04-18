import { Injectable } from "@angular/core";
import { StorageService } from '../storage.service';
import { Cart } from '../../models/cart';
import { ProdutoDTO } from '../../models/produtos.dto';


@Injectable()
export class CartService {

  constructor(public storage: StorageService) {
  }

  createOrClearCart() {
    let cart: Cart = {items:[]};
    this.storage.setCart(cart);
    return cart;
  }

  getCart() {
    let cart: Cart = this.storage.getCart();
    if (cart == null) {
      cart = this.createOrClearCart();
    } else {
      return cart;
    }
  }

  addProduto(produto : ProdutoDTO) {
    let cart = this.getCart();
    let position = cart.items.findIndex(x => x.produto.id == produto.id);
    if (position == -1) {
      cart.items.push({quantidade: 1, produto: produto});
    }
    this.storage.setCart(cart);
    return cart;
  }
}