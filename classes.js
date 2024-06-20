'use strict'

class Student {
      constructor(name,age) {
        this.n = name;
        this.a = age;
      }

      stu() {
        console.log(" The Student Name is " +  this.n);
        console.log("The Student Age is " + this.a)
      }
}

let stobj = new Student("Ajjayya G V" , 22)
stobj.stu();