// interface Human {
//   name: string;
//   age: number;
//   gender: string;
// } // only in ts. js 에서는 안됨

class Human {
  public name: string; // TS에서는 public private등 속성을 선언한다
  public age: number;
  public gender: string;

  // private로 선언하면  person.age 하는 식으로 외부에서 사용하는게 불가능 해진다. class 안에서만 쓸수 있게됨
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

// interface VS class -> class는 js 에서 구현이 되는데 ts는 구현되지 않음. ts적으로는 interface가 더 좋지만,
// react나 node같은 다른 라이브러리가 있다면 interface 인식이 안되서 class를 쓰게됨
const sayHi = (person: Human): string => {
  return `Hello ${person.name}, you are ${person.age}, you are a ${person.gender}`;
};

console.log(sayHi(seongmin));
export {};
