class Employee {
    constructor(name,id,email) {
        if (typeof name !== "string" || !name.trim().length) {
            throw new Error("Expected parameter 'name' to be a non-empty string");
        }

        if (typeof id !== "number" || isNaN(id)) {
            throw new Error("Expected parameter 'id' to be a number");
        }

        if (typeof email !== "string" || !email.trim().length || !(email.includes('@') && (email.includes('.')))) {
            throw new Error("Expected parameter 'email' to be a non-empty string with proper email formatting");
        }

        this.name = name;
        this.id = id;
        this.email = email; 
    }

    getName() {
        return this.name;
    }

    getId() {
        return this.id;
    }

    getEmail() {
        return this.email;
    }

    getRole() {
        return 'Employee';
    }
}

module.exports = Employee;