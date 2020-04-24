// This is the Manager class. Testing passes.
class Manager {
    constructor(name, id, email, officeNumber, role)
     {
        this.name = name;
        this.id = id; 
        this.email = email;
        this.officeNumber = officeNumber;
        this.role = "Manager";
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
    getofficeNumber() {  
        return this.officeNumber;
    }
    getRole() {
        return "Manager";
    }
  }
  module.exports = Manager;