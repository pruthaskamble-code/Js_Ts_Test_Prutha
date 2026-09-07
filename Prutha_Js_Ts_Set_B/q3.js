class Order {
    orderId ;
    customerName ;
    orderAmount ;
    constructor(orderId : num , customerName : string , orderAmount : double) {
        orderId -> this.orderId ;
        customerName -> this.customerName ;
        orderAmount -> this.orderAmount ;
    }
}
Order ob = new Order(101,"Tom",12000);
console.log(ob);
