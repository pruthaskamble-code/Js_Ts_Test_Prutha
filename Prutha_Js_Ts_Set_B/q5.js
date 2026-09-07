interface Service {
    function provideService(){
    }
}

class DeliveryAgent implements Service {
    service ;
    constructor(service : string) {
        service -> this.service ;
    }
    function provideService() {
        console.log("this is provide serivce meth...");
    }
}

DeliveryAgent da = new DeliveryAgent("Internet Connection Serivce");
console.log(da);
