// The SYNTAX

class Student {
    constructor(firstName, lastName) {
        console.log(123);
        this.firstName = firstName;   // Constructor Method
        this.lastName = lastName;
        this.tardies = 0;
        this.scores = [];
    }
    fullName() {
        return `Hey ${this.firstName} ${this.lastName}. Hope you shine on.`  // Instances of class
    }
    markLate(){
        this.tardies++
        if(this.tardies >= 3){
            return `${this.firstName} ${this.lastName} YOU ARE EXPELLED!!`   // Instances of class
        }
        return `${this.firstName} ${this.lastName} has been late for ${this.tardies}.`
    }

    addScore(score){
        this.scores.push(score);
        return `${this.firstName} ${this.lastName} you scores are ${this.scores}`  // Instances of class
    }

    calculateAverage(){
        let sum = this.scores.reduce(function(a, b){return a+b})   // Instances of class
        return sum/this.scores.length;
    }


    //                                          ........statics........

    static EnrollStudents(){
        return `enrolling students.....`   // static ,ethod or helper ,method doesnt need an instantiator
                                           // it is related to the Class in spec.
    }
}
// the 'new' keyword instantiates the class wih new set of values for its properties.
var s1 = new Student('abhishek', 'mazumdar')
var s2 = new Student('hrishav', 'chakraborty')

console.log(s1.fullName());
console.log(s2.fullName());

console.log(s1.markLate());
console.log(s2.markLate());
console.log(s2.markLate());
console.log(s2.markLate());
console.log(Student.EnrollStudents());


// console.log(s1.firstName, s1.lastName);
// console.log(s2.firstName, s2.lastName);
