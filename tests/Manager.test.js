const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");

describe('Manager Class Init', () => {
    it('should create an object with a name, id, and email, and officeNumber given valid arguments', () => {
        const manager = new Manager('Steve',3,'example@email.gov',6);

        expect(manager.name).toEqual('Steve');
        expect(manager.id).toEqual(3);
        expect(manager.email).toEqual('example@email.gov');
        expect(manager.officeNumber).toEqual(6);
    })

    it('should create an object that is an instance of Employee', () => {
        const manager = new Manager('Steve',3,'example@email.gov',6);

        expect(manager).toBeInstanceOf(Employee);
    })
})

describe('getRole Method', () => {
    it("should return 'Manager' when called",  () => {
        const manager = new Manager('Steve',3,'example@email.gov',6);

        expect(manager.getRole()).toEqual('Manager');
    })
})