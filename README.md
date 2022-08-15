# Team Profile Generator [![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 

## Description

This project is a command line interface application that takes user input to generate team profiles in an HTML file. Using npm inquirer, it prompts users for information about people's profiles and roles and writes them to an HTML file that displays the information on a webpage.

## Packages and Installation

This project uses npm inquirer 8.2.4 and npm jest to run tests. Running 'npm install' with the current package.json in the file will install both dependencies. 

The program can be called from the main working directory using 'node index.js'.

## Usage Instructions & Walkthrough Video

When starting the program, the user is prompted to choose an option from the main menu. 

'Print Current Team Members' will show the currently added team members, with empty [] brackets for empty roles.

'Add a Team Member' will prompt the user for more information about the person, such as name, email, role, and role-specific questions about either office number, github username, or school. This is then recorded to the teamData, which can be seen when 'Print Current Team Members' is selected. Any errors will exit back to the main menu.

'Remove a Team Member' prompts the user for what role they would like to remove from, then a list of the names of the team members of that chosen role. After selecting a name, that entry in the teamData will be removed.

'Clear Team List' will clear the entire teamData array.

'Write HTML File' will take the teamData array and output an HTML file in /dist/team-profiles.html.

Walkthrough Video: https://drive.google.com/file/d/1UCYrDKzyrFrQuMZq41bzWV1QmlEL2Rhu/view?usp=sharing

## License 

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0) 

"Permissions of this strong copyleft license are conditioned on making available complete source code of licensed works and modifications, which include larger works using a licensed work, under the same license. Copyright and license notices must be preserved. Contributors provide an express grant of patent rights."

Read more about this license at: https://choosealicense.com/licenses/gpl-3.0/

## Tests

The tests for this project test the 4 classes: Employee, Manager, Engineer, and Intern.

### Employee

* checks for initialization of an object with all valid arguments, then checks for invalid or empty arguments.
* checks the getter methods for name, id, and email.
* checks that the role getter method outputs 'Employee.

### Manager, Engineer, and Intern
These are subclasses that extend Employee. They inherit the name, id, and email of Employee.

* checks for initialization of an object with all valid arguments, then checks for invalid or empty arguments.
* checks that the role getter method overwrites 'Employee' with the specific role.
* checks the getter methods for the specific properties of each role, such as officeNumber, github, and school.

## Credits

Credit to both:

https://www.reddit.com/r/node/comments/9q3chw/looping_inquirerjs_prompts/

and

https://stackoverflow.com/questions/45060200/in-node-js-how-do-i-create-a-prompt-loop-using-inquirer

for implementation of prompt chains and loops in inquirer.

## Github Repository Link & Walkthrough Video

GitHub Repository: https://github.com/voravichs/team-profile-generator


