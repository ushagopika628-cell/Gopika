//let
let studentcount = 10;
studentcount = 11;
console.log("Student count:",studentcount);

//const
const collegeName = "VETIAS";
console.log("College Name:",collegeName);

//Template literals
let studentName = "Arun";
console.log('Welcome ${studentName} to ${collegeName}');

//object
const student = {
      name: "Arun",
      age: 20,
      department: "IT"
};
console.log(student);

//destructuring
const { name, age, department} = student;
console.log("Name",name);
console.log("Age",age);
console.log("Department",department);

//Arrow Function 
const displaystudent = () =>{
    console.log('Student Name: ${name}');
};
displaystudent();

//Arrays 
const students = [
    "Arun",
    "Priya",
    "Devadharshini"
];
console.log(students);

//spread operators 
const updatedstudents = [
    ...students,
    "Rahul"
];
console.log(updatedstudents);

// //Rest operator
function maximumMarks(...marks){
    let max = Math.max(...marks);

    return max;
}

console.log("Maximum Marks:",maximumMarks(80,90,70));
