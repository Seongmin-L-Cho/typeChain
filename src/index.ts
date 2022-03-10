// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// } // only in ts. js 에서는 안됨

class Human {
  public name: string; // TS에서는 public private등 속성을 선언한다
  private age: number;
  public gender: string;
  constructor(name: string, age: number, gender: string) {
    // 클래스가 시작할때마다 불리는것 gender? 라고 하면 선택으로 선언
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
}

const seongmin = new Human("seongmin", 18, "male");
// const person = {
//   name: "seongmin",
//   gender: "male",
//   age: 24,
// };
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(person));
export {};
