// I am not too sure about this 

const path = require("path")
const fs = require("fs")
const templates = path.resolve(__dirname,"../templates")

const render = employees => {
    console.log("render running");
    const HTML = []
    HTML.push(employees.filter
        (employee => employee.getRole()=== "Employee")
        .map(employee => renderEmployee(employee)).join("")
        )
    HTML.push(employees.filter
        (employee => employee.getRole()=== "Engineer")
        .map(engineer => renderEngineer(engineer)).join("")
        )
        HTML.push(employees.filter
            (employee => employee.getRole()=== "Intern")
            .map(intern => renderIntern(intern)).join("")
        )
        HTML.push(employees.filter
            (employee => employee.getRole()=== "Manager")
            .map(manager => renderManager(manager)).join("")
            )
        return renderMain(HTML.join(""))
}
//render employee
const renderEmployee = employee => {
    let template = fs.readFileSync(path.resolve(templates,"Employee.html"),"utf8")
    template = replacePlaceholders(template,"name",employee.getName())
    template = replacePlaceholders(template,"id",employee.getId())
    template = replacePlaceholders(template,"email",employee.getEmail())
    return template;
}
//render engineer
const renderEngineer = engineer => {
    let template = fs.readFileSync(path.resolve(templates,"Engineer.html"),"utf8")
    template = replacePlaceholders(template,"name",engineer.getName())
    template = replacePlaceholders(template,"id",engineer.getId())
    template = replacePlaceholders(template,"email",engineer.getEmail())
    template = replacePlaceholders(template,"github",engineer.getGithub())
    return template;
}
//render intern
const renderIntern = intern => {
    let template = fs.readFileSync(path.resolve(templates,"Intern.html"),"utf8")
    template = replacePlaceholders(template,"name",intern.getName())
    template = replacePlaceholders(template,"id",intern.getId())
    template = replacePlaceholders(template,"email",intern.getEmail())
    template = replacePlaceholders(template,"school",intern.getSchool())
    return template;
}
//render manager
const renderManager = manager => {
    let template = fs.readFileSync(path.resolve(templates,"Manager.html"),"utf8")
    template = replacePlaceholders(template,"name",manager.getName())
    template = replacePlaceholders(template,"id",manager.getId())
    template = replacePlaceholders(template,"email",manager.getEmail())
    template = replacePlaceholders(template,"officePhone",manager.getOfficePhone())
    return template;
}
//render html
const renderMain = HTML => {
    const template = fs.readFileSync (path.resolve(templates, "Index.html"),"utf8")
    return replacePlaceholders(template, "team", HTML)
}
const replacePlaceholders = (template,placeholder,value) => {
    const placeholderPattern = new RegExp ("{{ "+ placeholder +" }}", "gm") 
    return template.replace(placeholderPattern, value)
}
module.exports=render