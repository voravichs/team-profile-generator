const inquirer = require('inquirer');
const fs = require('fs');
const { generateHTML } = require('./src/generateHTML');
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer.js");
const Intern = require("./lib/Intern.js");

const teamData = [];
let currentID = 1;

const employeeQuestions = [
    {
        type: 'input',
        message: 'Enter the name of your team member:',
        name: 'name'
    },
    {
        type: 'list',
        message: 'Select their position:',
        name: 'role',
        choices: ['Manager', 'Engineer', 'Intern']
    },
    {
        type: 'input',
        message: 'Enter the email of your team member:',
        name: 'email'
    },
];

const roleQuestions = [
    {
        type: 'input',
        message: 'Enter the office number of this manager:',
        name: 'officeNum'
    },
    {
        type: 'input',
        message: 'Enter the github username of this engineer:',
        name: 'github'
    },
    {
        type: 'input',
        message: 'Enter the school this intern is attending/graduated from:',
        name: 'school'
    },
];


// Write HTML File
function writeToFile(fileName, data) {
    fs.writeFile(fileName,
        generateHTML(data),
        (err) => err ? console.error(err)
            : console.log('HTML written! You may find it in dist/team-profiles.html.')
    )
}

// Create a function to initialize app
// https://www.reddit.com/r/node/comments/9q3chw/looping_inquirerjs_prompts/
//https://stackoverflow.com/questions/45060200/in-node-js-how-do-i-create-a-prompt-loop-using-inquirer
// https://stackoverflow.com/questions/67477093/accessing-non-existent-property-of-module-exports-inside-circular-dependency-nod
module.exports = { mainMenuPrompt };
function mainMenuPrompt() {
    return inquirer
        .prompt(
            {
                type: 'list',
                message: "Welcome to Team Profile Generator! What would you like to do?",
                name: 'menu',
                choices: ['Print Current Team Members', 'Add a Team Member', 'Remove a Team Member', 'Clear Team List', 'Write HTML File', 'EXIT']
            }
        )
        .then(response => {
            switch (response.menu) {
                case 'Print Current Team Members':
                    console.log('\n-------------\n');        
                    printTeam();
                    break;
                case 'Add a Team Member':
                    console.log('\n-------------\n');        
                    addTeam();
                    break;
                case 'Remove a Team Member':
                    console.log('\n-------------\n');        
                    removeTeam();
                    break;
                case 'Clear Team List':
                    console.log('\n-------------\n');        
                    clearTeam();;
                    break;
                case 'Write HTML File':
                    writeToFile('./dist/team-profiles.html', teamData)
                    break;
                case 'EXIT':
                    break;
            }
        });
}

function printTeam() {
    console.log('Current Team Members: \n');
    console.log(teamData);
    console.log('\n-------------\n');
    mainMenuPrompt();
}

function addTeam() {
    return inquirer
        .prompt(employeeQuestions)
        .then(response => {
            const currentTeamMember = [response.name, currentID, response.email]
            currentID++;
            switch (response.role) {
                case 'Manager':
                    addManager(currentTeamMember);
                    break;
                case 'Engineer':
                    addEngineer(currentTeamMember);
                    break;
                case 'Intern':
                    addIntern(currentTeamMember);
                    break;
            }
        });
}

function addManager(member) {
    return inquirer
        .prompt(roleQuestions[0])
        .then(response => {
            let name = member[0].trim();
            let id = member[1];
            let email = member[2].trim();
            let officeNum = response.officeNum;
            try {
                teamData.push(new Manager(name, id, email, parseInt(officeNum)));
                console.log('\x1b[32m', `Manager ${name} added, return to main menu!`);
                console.log('\n-------------\n');
                mainMenuPrompt();
            } catch (err) {
                console.error(err)
                console.log('\x1b[31m', 'Invalid input, returning to main menu!');
                console.log('\n-------------\n');
                mainMenuPrompt();
            }
        });
}

function addEngineer(member) {
    return inquirer
        .prompt(roleQuestions[1])
        .then(response => {
            let name = member[0].trim();
            let id = member[1];
            let email = member[2].trim();
            let github = response.github;
            try {
                teamData.push(new Engineer(name, id, email, github));
                console.log(teamData);
                console.log('\x1b[32m', `Engineer ${name} added, return to main menu!`);
                console.log('\n-------------\n');
                mainMenuPrompt();
            } catch (err) {
                console.error(err)
                console.log('\x1b[31m', 'Invalid input, returning to main menu!');
                console.log('\n-------------\n');
                mainMenuPrompt();
            }
        });
}

function addIntern(member) {
    return inquirer
        .prompt(roleQuestions[2])
        .then(response => {
            let name = member[0].trim();
            let id = member[1];
            let email = member[2].trim();
            let school = response.school;
            try {
                teamData.push(new Intern(name, id, email, school));
                console.log(teamData);
                console.log('\x1b[32m', `Intern ${name} added, return to main menu!`);
                console.log('\n-------------\n');
                mainMenuPrompt();
            } catch (err) {
                console.error(err)
                console.log('\x1b[31m', 'Invalid input, returning to main menu!');
                console.log('\n-------------\n');
                mainMenuPrompt();
            }
        });
}

function removeTeam() {
    return inquirer
        .prompt(
            {
                type: 'list',
                message: "Which team member would you like to remove?",
                name: 'remove',
                choices: [...teamData, 'Return']
            }
        )
        .then(response => {
            switch (response.remove) {
                case 'Return':
                    console.log('\n-------------\n');    
                    mainMenuPrompt();
                    break;
                default:
                    let selectedIndex = teamData.findIndex(employee => employee.name === response.remove)
                    console.log(selectedIndex);
                    teamData.splice(selectedIndex, 1);
                    console.log(`Removed ${response.remove} from team.`);
                    console.log('\n-------------\n');
                    mainMenuPrompt();
                    break;
            }
        });
}

// Function call to initialize app
mainMenuPrompt();

