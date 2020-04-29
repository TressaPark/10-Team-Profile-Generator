// This is the Manager class. Testing passes.
class Manager {
    constructor(name, id, email, officePhone)
     {
        this.name = name;
        this.id = id; 
        this.email = email;
        this.officePhone = officePhone;
    }
    getName(){
        return this.name;
    }
    getId() {
        return this.id;
    }
    getEmail() {
        return this.email;
    }
    getOfficePhone() {  
        return this.officePhone;
    }
    getRole() {
        return "Manager";
    }
  }
  module.exports = Manager;