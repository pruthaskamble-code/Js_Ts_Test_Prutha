class OrderPlacement {
    deliveryAddress ;
    constructor(deliveryAddress : string) {
        deliveryAddress -> this.deliveryAddress ;
    }
    if (deliveryAddress=="") {
        try {
            console.log("Address not mentioned...");
        } catch (error) {
            console.log(error.text+" "+error.message);
        }
    }
}
