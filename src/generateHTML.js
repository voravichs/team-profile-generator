const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer.js");
const Intern = require("../lib/Intern.js");

function generateHTML(data) {
    // Initial variables and html literals
    const startingTags = `<!DOCTYPE html>
<html lang="en-us">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title> Team Profiles </title>

    <!-- Link to Tailwind CSS-->
    <script src="https://cdn.tailwindcss.com"></script>

    <!--Links to External CSS files-->
    <link rel="stylesheet" href="./assets/css/style.css" />
</head>

<body>
    <header class="mx-auto">
        <h1 class="text-7xl text-center text-slate-50 p-8 m-4 mb-8 bg-sky-500"> My Team </h1>
    </header>

    <main class="container mx-auto">

        `
    const endingTags =`
        </div>
    </main>
</body>
</html>`
    const managerHeading = `<p class="text-4xl mb-4 mx-12"> Managers </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid cols-4 gap-4 mb-8 mx-12">`
    const engineerHeading = `
    </div>

        <p class="text-4xl mb-4 mx-12"> Engineers </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid cols-4 gap-4 mb-8 mx-12">`
    const internHeading = `
    </div>

        <p class="text-4xl mb-4 mx-12"> Interns </p>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid cols-4 gap-4 mb-8 mx-12">`
    let employeeCards = ''

    // generating card blocks
    data.forEach(role => {
        if (role.length) {
            employeeCards += eval(`${role[0].getRole().toLowerCase()}Heading`)
        }
        role.forEach(employee => {
            let name = employee.getName();
            let id = employee.getId();
            let email = employee.getEmail();
            switch (employee.getRole()) {
                case 'Manager':
                    let office = employee.getOffice();
                    employeeCards += `
            <div class="border border-slate-300 rounded-lg">
                <div class="bg-purple-500 rounded-t-lg p-4">
                    <h2 class="text-4xl text-slate-50 font-bold mb-4 ml-4"> ${name} </h2>
                    <h2 class="text-3xl text-slate-50 font-semibold ml-4"> ☕ Manager </h2>
                </div>    
                <div class="m-6">
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Id: <span class="font-semibold">${id}</span></h2>
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Email: <span class="font-semibold">${email}</span></h2>
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Office Number: <span class="font-semibold">${office}</span></h2>
                </div>    
            </div>
                `
                    break;
                case 'Engineer':
                    let github = employee.getGithub();
                    employeeCards += `            
            <div class="border border-slate-300 rounded-lg">
                <div class="bg-purple-500 rounded-t-lg p-4">
                    <h2 class="text-4xl text-slate-50 font-bold mb-4 ml-4"> <span>${name}</span> </h2>
                    <h2 class="text-3xl text-slate-50 font-semibold ml-4"> 🛠️ Engineer </h2>
                </div>    
                <div class="m-6">
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Id: <span class="font-semibold">${id}</span></h2>
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Email: <span class="font-semibold">${email}</span></h2>
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Github: <span class="font-semibold">https://github.com/${github}</span></h2>
                </div>    
            </div>
                `
                    break;
                case 'Intern':
                    let school = employee.getSchool();
                    employeeCards += `            
            <div class="border border-slate-300 rounded-lg">
                <div class="bg-purple-500 rounded-t-lg p-4">
                    <h2 class="text-4xl text-slate-50 font-bold mb-4 ml-4"> <span>${name}</span> </h2>
                    <h2 class="text-3xl text-slate-50 font-semibold ml-4"> 🎓 Intern </h2>
                </div>    
                <div class="m-6">
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Id: <span class="font-semibold">${id}</span></h2>
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> Email: <span class="font-semibold">${email}</span></h2>
                    <h2 class="border border-slate-300 text-lg p-2 pl-6"> School: <span class="font-semibold">${school}</span></h2>
                </div>    
            </div>
                `
                    break;
                default:
                    break;
            } 
        })
    });

    const fullHTML = startingTags + employeeCards + endingTags;
    return fullHTML
}

module.exports = {
    generateHTML
};
  
  