const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/main");

const employeesArray = [];

function initApp() {
    //startHTML();
    addEmployee();
}

function addEmployee()
{
    return inquirer.prompt([
        {
            type: "input",
            name: "name",
            message: "Enter this employee's name."
        },
        {
            type: "input",
            name: "id",
            message: "Enter this employee's id number."
        },
        {
            type: "input",
            name: "email",
            message: "Enter this employee's email."
        },
        {
            type: "list",
            name: "role",
            message: "Select this employee's role.",
            choices: ["Engineer", "Intern", "Manager"],
        }
    ])
        .then(function(answer){
        console.log(answer);
        console.log(answer.role);
        if (answer.role == "Engineer"){
            addEngineer(answer);
        }
        if (answer.role == "Intern"){
            addIntern(answer);
        }
        if (answer.role == "Manager"){
            addManager(answer);
        }

        //if user picks anwer.role
            // //if engineer, call engineer fx
            // addEngineer(answer);
            // // if intern, call intern fx
            // addIntern(answer);
            // // if manager, call manager fx
            // addManager(answer);
    });
        }

        function addManager(answer){
        return inquirer.prompt([       
        {
                type: "input",
                name: "officePhone",
                message: "Enter this employee's office phone."
        },
        {
            type: "list",
            name: "moreEmployees",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"], 
        }
    ])  .then(function(managerAnswer){
            // console.log(answer);
            //use answer and manager answer to build manager class
            var myManager= new Manager(answer.name, answer.id, answer.email, managerAnswer.officePhone)
            // console.log(myManager);
            //push the manager into the employee array
            employeesArray.push(myManager);
            console.log(employeesArray);
            managerAnswer.moreEmployees
            if(managerAnswer.moreEmployees == "yes"){
                addEmployee();
            } 
            else {
                console.log("finished");
            }
            //if yes, then addEmployee
            //if no, stop the questions and create the readable card file
    });
        }
        function addIntern(answer){
        return inquirer.prompt([   
        {
            type: "input",
            name: "school",
            message: "Enter this employee's school."
        },
        {
            type: "list",
            name: "moreEmployees",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"], 
        }
    ])  .then(function(internAnswer){
            // console.log(answer);
            //add intern then add to employee array
            var myIntern= new Intern(answer.name, answer.id, answer.email, internAnswer.school)
            // console.log(myIntern);
            // push intern into the employee array
            employeesArray.push(myIntern);
            console.log(employeesArray)
            internAnswer.moreEmployees
            if(internAnswer.moreEmployees == "yes"){
                addEmployee();
            }
            else {
                console.log("finished");
            }
            //if yes, then addEmployee
            //if no, stop the questions and create the readable card file
    });
        }
        function addEngineer(answer){
        return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter this employee's Github."
        },
        {
            type: "list",
            name: "moreEmployees",
            message: "Would you like to add another employee?",
            choices: ["yes", "no"],    
         }
    ])  .then(function(engineerAnswer){
            // console.log(answer);
            var myEngineer= new Engineer(answer.name, answer.id, answer.email, engineerAnswer.github)
            // console.log(myEngineer);
            employeesArray.push(myEngineer);
            console.log(employeesArray)
            engineerAnswer.moreEmployees
            if(engineerAnswer.moreEmployees == "yes"){
            addEmployee();
        }
        else {
            console.log("finished");
    }       //if they say yes what do we do?
            //add another employee
            //addEmployee();

            //if they say no what do we do?
            //stop the questions send the employee array to make cards
            //turn into a readable file
    });
        }
        const writeHTML = HTML => {
            fs.writeFileSync (output_path, HTML, err => {
                if (err) {
                    return console.log(err)
        }
    })
        }
        initApp();