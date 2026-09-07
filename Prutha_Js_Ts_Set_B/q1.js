// CRUD
const c_orders = [
    {"Tom",1,101},
    {"Jerry",2,102},
    {"Tim",3,103},
];

console.log(c_orders);

c_orders.textcontent("Harry",4,104);

console.log(c_orders);

c_orders.delete("Tim",3,103);

console.log(c_orders);
