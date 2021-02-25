export type Product = {
    id: number,
    name: string,
    description: string,
    category: string,
    price: number,
}
export class OrderLine {
    constructor(public product: Product, public quantity: number) {
        
    }
    public getTotalPrice(): number {
        return this.product.price * this.quantity;
    }
}
export class Order {
    private lines: Map<number, OrderLine> = new Map<number, OrderLine>();

    constructor(initiallines?: OrderLine[]) {
        if (initiallines) {
            initiallines.forEach(p => this.lines.set(p.product.id, p));
        }
    }

    public addProduct(product: Product, quantity: number): void {
        if (this.lines.has(product.id)) {
            this.lines.get(product.id)!.quantity += quantity;
        }
        else {
            this.lines.set(product.id, new OrderLine(product, quantity));
        }
    }

    public removeProduct(productId: number): void {
        this.lines.delete(productId);
    }

    public getOrderLines(): OrderLine[] {
        return [...this.lines.values()];
    }

    public getProductCount(): number {
        return [...this.lines.values()]
            .reduce((total, ol) => total += ol.quantity, 0);
    }

    get getTotalOrderPrice(): number {
        return [...this.lines.values()].reduce((total, ol) => total += ol.getTotalPrice(), 0);
        }
}