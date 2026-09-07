abstract class DeliveryStaff  {
    abstract function getSalary ;
    abstract function getRole ;
}

class DeliveryAgent extends DeliveryStaff {
    salary ;
    role ;
    constructor(salary : double , role : string){
        salary -> this.salary ;
        role -> this.role ;
    }
    function getSalary {
        console.log("Salary is ".${this.salary});
    }
}

class Manager extends DeliveryAgent {
    function getRole {
        console.log("Role is ".${this.role});
    }
}

DeliveryAgent da = new DeliveryAgent(15000,"Manager");
da.getSalary();
da.getRole();