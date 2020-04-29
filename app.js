const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/main");

const employees = [];

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
            // //if engineer, call engineer fx
            // addEngineer(answer);
            // // if intern, call intern fx
            // addIntern(answer);
            // // if manager, call manager fx
            // addManager(answer);
    });
        }
        function addManager(){
        }
        function addManager(answer){
        return inquirer.prompt([       
        {
                type: "input",
                name: "officePhone",
                message: "Enter this employee's office phone."
        },
    ])
        .then(function(managerAnswer){
            console.log(answer);
            var myManager= new Manager(answer.name, answer.id, answer.email, managerAnswer.officePhone)
            console.log(myManager);
    });
        }
        function addIntern(){
        }
        function addIntern(answer){
        return inquirer.prompt([   
        {
            type: "input",
            name: "school",
            message: "Enter this employee's school."
        },
    ]).then(function(internAnswer){
        console.log(answer);
        var myIntern= new Intern(answer.name, answer.id, answer.email, internAnswer.school)
        console.log(myIntern);
    });
        }
        function addEngineer(){
        }
        function addEngineer(answer){
        return inquirer.prompt([
        {
            type: "input",
            name: "github",
            message: "Enter this employee's Github."
        }
    ]).then(function(engineerAnswer){
        console.log(answer);
        var myEngineer= new Engineer(answer.name, answer.id, answer.email, engineerAnswer.github)
        console.log(myEngineer);
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

// function addEmployee() {
//     inquirer.prompt([{
//     },
// {

// inquirer.prompt([

//     type: "input",
//     name: "name",
//     message: "Enter this employee's name."
//     },
//     {
//     type: "input",
//     name: "id",
//     message: "Enter this employee's id number."
//     }, 
//     {
//     type: "input",
//     name: "email",
//     message: "Enter this employee's email."
//     }, 
//     {
//     type: "list",
//     name: "role",
//     message: "Select this employee's role.",
//     choices: [
//         "Engineer", "Intern", "Manager"],
// }])
// //   If employee is an engineer, intern, or manager then this informaton will be added accordingly.
//             .then(function ({name, id, email, role}) {
//                 let roleInfo = "";
//                 if (role === "Engineer") {
//                     roleInfo = "Github User Name";
//                 } else if (role === "Intern") {
//                     roleInfo = "School";
//                 } else {
//                     roleInfo = "Office Number";
//                 }
//                 inquirer.prompt([{
//                     message: `Enter employee's ${roleInfo}`,
//                     name: "roleInfo"
//                 },    
//                 {
//                     type: "list",
//                     name: "moreEmployees",
//                     message: "Would you like to add another employee?",
//                     choices: ["yes", "no"],    
//             }])
//                 .then(function({roleInfo, moreEmployees}) {
//                     let newEmployee;
//                     if (role === "Engineer") { 
//                         newEmployee = new Engineer(name, id, email, roleInfo);
//                     } else if (role === "Intern") {
//                         newEmployee = new Intern(name, id, email, roleInfo);
//                     } else {
//                         newMember = new Manager(name, id, email, roleInfo);
//                     }
//                     employees.push(newEmployee);
//                     addHtml(newEmployee)
//                     .then(function() {
//                         if (moreEmployees === "yes") {
//                             addEmployee();
//                         } else {
//                             finishHtml();   
//                         }
//                     });
//             });
//         });
// }    
    //         if (response.role ==="Intern") {
    //             inquirer.prompt ( [
    //         {
//                     type: "list",
//                     name: "school",
//                     message: "Enter the employee's school."
//             },
//             {
//                     type: "list",
//                     name: "restart",
//                     message: "Would you like to add another employee?",
//                     choices: ["yes", "no"]    
//             },
//     ])
//                 .then(function (internRes) {
//                     let newIntern = new intern(response.name, response.id, response.email, internRes.school)
//                     team.push(newIntern)
//                 if (internRes.restart==="yes") {
//                     init()
//                 } else {
//                     writeHTML(render(team))
//                 }
//                 console.log(team)
//     })
//     }
//             if (response.role ==="Manager") {
//                 inquirer.prompt ( [
//             {
//                     type: "list",
//                     name: "officeNum",
//                     message: "Enter the employee's office number."
//             },
//             {
//                     type: "list",
//                     name: "restart",
//                     message: "Would you like to add another employee?",
//                     choices: ["yes", "no"]    
//     },
//     ])
//                 .then(function (engineerRes) {
//                     let newManager = new manager(response.name, response.id, response.email, managerRes.officeNum)
//                     team.push(newManager)
//                 if (managerRes.restart==="yes") {
//                     init()
//                 } else {
//                     writeHTML(render(team))
//                 }
//                 console.log(team)
//     })
//     }
// // })
// // }



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
