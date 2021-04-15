class student {
  constructor(sId, sName) {
    this.Id = sId;
    this.Name = sName;
    this.School = "Als";
  }
}

const student1 = new student(05, "Efty");
const student2 = new student(09, "Ollu");

console.log(student1.Name, student2.Name);
