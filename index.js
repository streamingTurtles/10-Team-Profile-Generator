


const inquirer = require("inquirer");
var fs = require("fs");
const Employee = require("./lib/Employee-Class");
const Manager = require("./lib/Manager-Class");
const Engineer = require("./lib/Engineer-Class");
const Intern = require("./lib/Intern-Class");
const employee_array = [];
const team_member_array = [];
const manager_array = [];
const engineer_array = [];
const intern_array = [];
const html_output = require("./src/html-helper.js");  // html front end helper code




// ***********************************************************************************



function getManager(){
    return[
        {
            type: "input",
            message: "enter your name",
            name: "name"
            },
            {
            type: "input",
            message: "Please enter your employee ID:",
            name: "id"
            },
            {
            type: "input",
            message: "Please enter your eMail:",
            name: "eMail"
            },
            {
            type: "input",
            message: "Enter your office number:",
            name: "officeNumber"
            },
    ]  
}; 

function getTeamMember(){
    return[
        {
            type: "list",
            message: "Please select a team member",
            choices: ["Engineer", "Intern"],
            name: "addTeamMember"
            },
            {
            type: "input",
            message: "Please enter your team members name",
            name: "name"
            },
            {
            type: "input",
            message: "Please enter your team members employee ID:",
            name: "id"
            },
            {
            type: "input",
            message: "Please enter your team members eMail:",
            name: "eMail"
            }
    ]  
};


var opening_question = [
    {
        type: 'confirm',
        name: 'managerStart',
        message: 'Would you like to build out your team?',
        when: function(answer){
            return answer;
        }, 
    },   
];




function initAgain(){
        inquirer.prompt(getTeamMember()).then(function({addTeamMember, name, id, eMail}){
            let setNewEmployee = new Employee(name, id, eMail); 
            employee_array.push(setNewEmployee);
            // console.log("added to employee_array now has: ", setNewEmployee) ---  // for testing
            let getMoreInfo = "";
            if (addTeamMember === "Engineer"){
                getMoreInfo = "gitHub_UserName";
                // setNewEmployee = new Engineer(name, id, eMail, getMoreInfo);    // duplicate testing code - commit out
                // team_member_array.push(setNewEmployee);   // duplicate testing code - commit out                
                // engineer_array.push(setNewEmployee);  // duplicate testing code - commit out
            }
            else { (addTeamMember === "Intern")
                getMoreInfo = "schoolAttended";
                // setNewEmployee = new Intern(name, id, eMail, getMoreInfo);    // duplicate testing code - commit out
                // team_member_array.push(setNewEmployee);  // duplicate testing code - commit out                    
                // intern_array.push(setNewEmployee);  // duplicate testing code - commit out
            }
            inquirer.prompt([{
                message: `Enter team members ${getMoreInfo}`,
                name: "getMoreInfo"
            },
            {
                type: "list",
                message: "Do you want to add more team members?",
                choices:["yes","no"],
                name: "addAnother"
            }]).then(function({getMoreInfo, addAnother}){
                let addedMember;
                let addedMemberEngineer;//
                let addedMemberIntern;//
                added = addAnother;
                // console.log("1st: did you select to add another team member? ", added);
                if (addTeamMember === "Engineer"){
                    addedMember = new Engineer(name, id, eMail, getMoreInfo); // don't uncomment, throws geRole of undefined at line 64 in html-helper.js file 
                    // addedMemberEngineer = new Engineer(name, id,eMail, getMoreInfo); // testing
                    team_member_array.push(addedMember);                    
                    engineer_array.push(addedMemberEngineer);//
                    // console.log("added to team_member_array & engineer_array now has: ", addedMember) ---  // for testing                    
                }
                if (addTeamMember === "Intern"){
                    addedMember = new Intern(name, id, eMail, getMoreInfo);  // don't uncomment, throws geRole of undefined at line 64 in html-helper.js file
                    // addedMemberIntern = new Intern(name, id,eMail, getMoreInfo); // testing
                    team_member_array.push(addedMember);
                    intern_array.push(addedMemberIntern);//
                    // console.log("added to team_member_array & intern_array now has: ", addedMember) ---  // for testing 
                }
                employee_array.push(addedMember);
                // call html render function creation here
                // console.log("call html render function creation here") ---
            }).then(() => {
                if (added === "yes"){                                 
                    // call again
                    // console.log("YES, add_another_member ", added) ---
                    initAgain();                             
                } 
                if (added === "no"){
                    // call html render function to close
                    // console.log("NO, add_another_member - from initAgain ", added) ---
                    // let makeHTML = generateTeam(team_member_array);
                    let data = html_output(team_member_array);
                    // console.log("test at here"); ---
                    fs.writeFile("./dist/index2-team.html", data, function(err){
                        if (err){
                            console.log(err); 
                        }
                        
                    } )
                }
                // console.log("2nd: did you select to add another team member? ", added);
            })
        });   
}

var added; // global
function init(){
    // console.log("Begin the Team Profile Generator App\n");
    inquirer.prompt(opening_question).then((answer) => { 
        // console.log("you answered ", answer);
        // console.log("you answered ", JSON.stringify(answer, null, '  '));
        if(answer.managerStart === true){
            // console.log("you said ", answer.managerStart);
            console.log("begin building your team\n")
            inquirer.prompt(getManager()).then(function({name, id, eMail, officeNumber}){
                let setNewEmployee = new Employee(name, id, eMail); 
                let setNewManager  = new Manager(name, id, eMail, officeNumber);  
                employee_array.push(setNewEmployee);
                team_member_array.push(setNewManager);
                manager_array.push(setNewManager);
                // console.log("added to employee_array now has: ", setNewEmployee) ---  // for testing
                // console.log("added to team_member_array now has: ", setNewManager) ---  // for testing
                // console.log("added to manager_array now has: ", setNewManager) ---  // for testing
                // console.log("employee_array has: ", setNewEmployee.name)  // for testing
                // console.log("employee_array has: ", setNewEmployee.id) // for testing
                // console.log("employee_array has: ", setNewManager.officeNumber) // for testing
                // console.log("team_member_array is: ", team_member_array[0]); // for testing
                inquirer.prompt(getTeamMember()).then(function({addTeamMember, name, id, eMail}){
                    let setNewEmployee = new Employee(name, id, eMail); 
                    employee_array.push(setNewEmployee);
                    // console.log("added to employee_array now has: ", setNewEmployee) ---  // for testing
                    let getMoreInfo = "";
                    if (addTeamMember === "Engineer"){
                        getMoreInfo = "gitHub_UserName";
                    }
                    else { (addTeamMember === "Intern")
                        getMoreInfo = "schoolAttended";
                    }
                    inquirer.prompt([{
                        message: `Enter team members ${getMoreInfo}`,
                        name: "getMoreInfo"
                    },
                    {
                        type: "list",
                        message: "Do you want to add more team members?",
                        choices:["yes","no"],
                        name: "addAnother"
                    }]).then(function({getMoreInfo, addAnother}){
                        let addedMember;
                        let addedMemberEngineer;//
                        let addedMemberIntern;//
                        added = addAnother;
                        // console.log("1st: did you select to add another team member? ", added);
                        if (addTeamMember === "Engineer"){
                            addedMember = new Engineer(name, id, eMail, getMoreInfo);
                            addedMemberEngineer = new Engineer(name, id, eMail, getMoreInfo);
                            team_member_array.push(addedMember);
                            engineer_array.push(addedMemberEngineer);
                            // console.log("added to engineer_array & engineer_array now has: ", addedMember) ---  // for testing  
                        }
                        if (addTeamMember === "Intern"){
                            addedMember = new Intern(name, id, eMail, getMoreInfo);
                            addedMemberIntern = new Intern(name, id, eMail, getMoreInfo);
                            team_member_array.push(addedMember);
                            intern_array.push(addedMember);
                            // console.log("added to intern_array & engineer_array now has: ", addedMember) ---  // for testing                             
                        }
                        employee_array.push(addedMember);
                        // call html render function creation here
                        // console.log("call html render function creation here") ---
                    }).then(() => {
                        if (added === "yes"){                                 
                            // call again
                            console.log("YES, add_another_member ", added)
                            initAgain();                             
                        } 
                        if (added === "no"){
                            console.log("NO, add_another_member - from 1st init", added)                          
                         }
                        //  console.log("2nd: did you select to add another team member? ", added);
                    })
                    

                });   
            })
        } 
            else { (answer.managerStart === false) 
                // console.log("not interested", answer.managerStart) 
                console.log("Thank you. You can always build out your team at another time :)")
                return;
            }
        // if ("different team member"){} 
    })          
}









// Initialize & Start the app!
init();
