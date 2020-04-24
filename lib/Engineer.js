// This is the Engineer class. Testing passes.
class Engineer {
    constructor(name, id, email, role)
     {
        this.name = name;
        this.id = id; 
        this.email = email;
        this.role = "Engineer";
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
    getRole() {  
        return "Engineer";
    }
  }
  module.exports = Engineer;