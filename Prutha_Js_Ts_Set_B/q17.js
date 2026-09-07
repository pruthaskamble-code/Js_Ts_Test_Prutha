class RestaurantUnavailable extends Exception {
    availability ;
    constructor(availability : string) {
        availability -> this.availability ;
    }
    if (RestaurantUnavailable) {
        try {
            console.log("Sorry currently Restaurant is Unavailable !");
        } catch (error) {
            console.log(error.text+" "+error.message);
        }
    } else {
       console.log("Restaurent Available");
    }
}