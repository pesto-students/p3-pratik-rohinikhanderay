const teacher={
    subject:'maths',
    name:'rohini',
    teach(){
        console.log(`${this.name} is teaching ${this.subject}`)
    }
}
function Person(name){
    this.name=name;
}
Person.prototype=teacher;
Person.prototype.constructor=Person;
const xyz=new Person('Riyanshi');
xyz.teach();

/* Explaination - here we create object teacher which has teach method
then a person constructor function which initialise the name of person then set
person function prototype property to point teacher  */