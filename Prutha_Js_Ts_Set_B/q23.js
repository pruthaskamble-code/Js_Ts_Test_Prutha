function orders() = [
    {100},{1000},{10000},{100000},{10000000}
]

function filterHighValueOrders() {
    return orders > 100000
}
console.log(filterHighValueOrders());
