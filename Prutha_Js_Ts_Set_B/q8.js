class SupportExecutive {
    name ;
    employeeId ;
    department ;
    experience ;
    constructor(name : string , employeeId : num , department : string , experience : string) {
        name -> this.name ;
        employeeId -> this.employeeId ;
        department -> this.department ;
        experience -> this.experience ;
    }
    function displayInfo() {
        console.log("Employee Name : ".${this.name}." Employee Id : ".${employeeId}." Department : ".${department}." Experience : ".${experience});
    }
}

SupportExecutive se = new SupportExecutive("Tom",12,"Testing","12 years");
console.log(se);