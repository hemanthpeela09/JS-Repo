class Department{
    name: string;

    constructor(n: string){
        this.name=n;
    }

    describe(this: Department){
        console.log('Department :' + this.name);
    }

}

const accounting = new Department('Accounting');
console.log(accounting);

console.log(accounting.describe());

const accountCopy = {name: '' ,describe: accounting.describe};
console.log(accountCopy.describe());


//Inheritance
class ITDepartment extends Department {
    private report: string;

    constructor(r:string){
        super(r);
        this.report=r;
    }

    get getReportValue(){
        if(this.report){
            return this.report;
        }
        return 'No Report found' 
    }

}

const ITaccount = new ITDepartment('ITAccounting');
//console.log(ITaccount);

console.log(ITaccount.getReportValue);


//Interface
interface Manager{
    name: string;
    age: number;

    getRole(role: string): void;
}

let Hemanth: Manager;

Hemanth = {
    name: 'Software Arch',
    age: 10,

    getRole(role: string){
        console.log(this.name);
    }
}

console.log('Interface role - '+ Hemanth.name);