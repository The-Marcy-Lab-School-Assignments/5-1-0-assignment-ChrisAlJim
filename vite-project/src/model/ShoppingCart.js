import { getRunningMode } from "vitest";
import getId from "../utils/getId";
import CartItem from "./CartItem";

class ShoppingCart {
  id = getId()
  #cartItems = []
  static #allCarts = []

  constructor() {
    ShoppingCart.#allCarts.push(this)
  }


  createItem(name, price) {
    const newItem = new CartItem(name, price)
    this.#cartItems.push(newItem)
    return newItem
  }

  getItems() {
    return [...this.#cartItems]
  }

  removeItem(id) {
    for (let i = 0; i < this.#cartItems.length; i++) {
      const item = this.#cartItems[i]
      if (item.id === id) {
        this.#cartItems.splice(i, 1)
      }
    }
  }

  getTotal() {
    return this.#cartItems.reduce((total, {price}) => total + price, 0)
  }

  static listAll() {
    return [...ShoppingCart.#allCarts]
  }

  static findBy(id) {
    for (let i = 0; i < ShoppingCart.#allCarts.length; i++){
      const cart = ShoppingCart.#allCarts[i]
      if (cart.id === id) {
        return cart
      }
    }
  }
}

export default ShoppingCart;