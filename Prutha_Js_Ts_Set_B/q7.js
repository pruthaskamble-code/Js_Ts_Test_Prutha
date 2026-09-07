class Restaurant {
    restaurantName ;
    location ;
    rating ;
    constructor(restaurantName : string , location : string , rating : num) {
        restaurantName -> this.restaurantName ;
        location -> this.location ;
        rating -> this.rating ;
    }
}

Restaurant r = new Restaurant("Abc","Borivali",5);
console.log(r);
