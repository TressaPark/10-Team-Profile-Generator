// inquirer set up
const inquirer = require("inquirer");

const Employee= require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

const fs = require("fs");

const employees = [];

function initApp() {
    startHTML();
    addMember();
}

function addEmployee() {
    inquirer.prompt([{

    },
    {

// const path = require("path");
// const output_dir = path.resolve(_dirname,"output");
// const output_path = path.join(output_dir,"team.html");
// let team = [];
// function initApp() {
//     startHtml();
//     addMember();
// const writeFileAsync = util.promisify(fs.writeFile);
// function addMember();
// inquirer.prompt([

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
    choices: [
        "Engineer",
        "Intern",
        "Manager"
    ],
    }, 
])
//   If employee is an engineer, intern, or manager then this informaton will be added.
            .then(function ({name, id, email, role}) {
                let roleInfo = "";
                if (role === "Engineer") {
                    roleInfo = "Githab User Name";
                } else if (role === "Intern") {
                    roleInfo = "School";
                } else if (role === "Manager") {
                    roleInfo = "Office Number";
                }    
                {
                    type: "list",
                    name: "moreEmployees",
                    message: "Would you like to add another employee?",
                    choices: ["yes", "no"],    
            
                .then(function({roleInfo, moreEmployees}) {
                    let newEmployee;
                    if (role === "Engineer") { 
                        newEmployee = new Engineer(name, id, email, roleInfo);
                    } else if (role === "Intern") {
                        newEmployee = new Intern(name, id, email, roleInfo);
                    } else {
                        newMember = new Manager(name, id, email, roleInfo);

                    employees.push(newEmployee);
                    addHtml(newEmployee)
                    .then(function() {
                        if (moreEmployees === "yes") {
                            addEmployee();
                        } else {
                            finishHtml();   
            }
    // });
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
// const writeHTML = HTML => {
//     fs.writeFileSync (output_path, HTML, err => {
//         if (err) {
//             return console.log(err)
//         }
//     })
// }

init();
