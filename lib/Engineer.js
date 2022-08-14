const Employee = require("./Employee");

class Engineer extends Employee {
    constructor(name,id,email,github) {
        if (typeof github !== "string" || !github.trim().length ) {
            throw new Error("Expected parameter 'github' to be a non-empty string");
        }

        super(name,id,email);
        this.github = github;
    }

    getRole() {
        return 'Engineer';
    }

    getGithub() {
        return this.github
    }
}

module.exports = Engineer;