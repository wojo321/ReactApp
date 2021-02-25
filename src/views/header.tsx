import React, { Component } from 'react';
import { Order } from '../data/entities';

interface Props {
    order: Order,
}

export class Header extends Component<Props> {

    render() {
        let count: number = this.props.order.getProductCount();
        return <div className="p-1 bg-secondary text-white text-right">
            {count === 0 ? "(brak produktów)" : `${count}, ${this.props.order.getTotalOrderPrice.toFixed(2)} zł`}
            <button className="btn btn-sm btn-primary m-1">
                Złóż zamówienie
            </button>
        </div>
    }
}