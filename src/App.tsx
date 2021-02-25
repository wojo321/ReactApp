import React, { Component } from 'react';
import { Product, Order } from './data/entities';
import { ProductList } from './views/productList';
let testData: Product[] = [1, 2, 3, 4, 5].map(num =>
 ({ id: num, name: `Prod${num}`, category: `Kat${num % 2}`,
 description: `Produkt ${num}`, price: 100}))
interface Props {
 // Polecenia nie są wymagane.
}
interface State {
  order: Order
 }
 export default class App extends Component<Props, State> {
    constructor(props: Props) {
    super(props);
      this.state = {
        order: new Order()
      }
  }
  render = () =>
    <div className="App">
      <ProductList products={ testData }
        categories={this.categories }
        order={ this.state.order }
        addToOrder= { this.addToOrder } />
    </div>
   
      get categories(): string[] {
      return [...new Set(testData.map(p => p.category))]
      }
   
      addToOrder = (product: Product, quantity: number) => {
        this.setState(state => {
          state.order.addProduct(product, quantity);
        return state;
      })
    }
 }