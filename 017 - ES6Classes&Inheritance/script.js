// creating class. Class is a just a templte or blue print in simple word. 
class Employee {

    // Creating a constructor
    constructor(name, age, role, experiencedYear, salary) {

        this.name = name
        this.age = age
        this.role = role
        this.experiencedYear = experiencedYear
        this.salary = salary

    }

    // Function to get all the details of the employee
    getDetails() {
        console.log(`The name of the employee is ${this.name}. Age is ${this.age} and the Role of this employee is ${this.role}. And it is ${this.experiencedYear} year experienced employee in our company. Salary is ${this.salary}`)
    }

    // Function to get joining year of the employee
    joiningYear() {
        return 2022 - this.experiencedYear;
    }

    // Function to cut the salary of the employee
    cutSalary(CutSalaryValue) {
        return `Your salary of this month is ${this.salary - CutSalaryValue}. ${CutSalaryValue} cut because you absent at that day!`
    }

    // Static method
    static addNum(a, b) {
        return a + b;
    }
}

obj = new Employee("Unknown", 17, "Web Developer", 5, 100000);
obj.getDetails()
console.log(obj.cutSalary(10000))
console.log(Employee.addNum(5, 5))


// Apply inheritance concept
class Programmer extends Employee {

    constructor(name, age, role, experiencedYear, salary, favoriteLanguage, githubUsername) {

        super(name, age, role, experiencedYear, salary);
        this.favoriteLanguage = favoriteLanguage;
        this.githubUsername = githubUsername;

    }

    // Function to get details of the prpogrammer
    getProgrammerDetails() {
        console.log(`The name of the employee is ${this.name}. Age is ${this.age} and the Role of this employee is ${this.role}. And it is ${this.experiencedYear} year experienced employee in our company. Salary is ${this.salary}. The favorite prgramming language of this employee is ${this.favoriteLanguage} and his/her GitHub profile username is ${this.githubUsername}`)
    }

    // Another static method
    static multiplyNum(x, y) {
        return x * y;
    }

}

programmerObj = new Programmer('Datt', 17, 'Junior Web Developer', 1, 500000, 'Python and JavaScript', 'dattpanchal04');
console.log(programmerObj)
programmerObj.getProgrammerDetails();
console.log(Programmer.multiplyNum(5, 5))
