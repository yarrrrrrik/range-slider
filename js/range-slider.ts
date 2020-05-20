
class Scale{
  className:string;
  activeSegmentStart:number;
  activeSegmentEnd:number;
  type:string;
  constructor(className:string,activeSegmentStart:number,activeSegmentEnd:number,type:string,){
    this.className = className;
    this.activeSegmentStart = activeSegmentStart;
    this.activeSegmentEnd = activeSegmentEnd;
    this.type = type;
  }
}

class Runner{
  className:string;
  position:number;
  side:string;
  constructor(className:string,position:number,side:string){
    this.className = className;
    this.position = position;
    this.side = side;
  }
}

class Segment{
  className:string;
  width:number;
  constructor(className:string,width:number){
    this.className = className;
    this.width = width;
  }
}


let greenRunnerLeft = new Runner('segment-start',100,'left')
let greenRunnerRight = new Runner('segment-end',200,'right')
let greenScale = new Scale('green-scale',greenRunnerLeft.position,greenRunnerRight.position,'segment')
let greenSegment = new Segment('range_line',100)

let d = document

let greenRunnerLeftNode = d.querySelector(`.${greenRunnerLeft.className}`)
let greenRunnerRightNode = d.querySelector(`.${greenRunnerRight.className}`)
let greenScaleNode = d.querySelector(`.${greenScale.className}`)
let greenSegmentNode = d.querySelector(`.${greenSegment.className}`)

greenRunnerLeftNode.style.background = 'red';

console.log(greenScale);


// class Student {
//     fullName: string;
//     constructor(
//       public firstName: string,
//       public middleInitial: string,
//       public lastName: string
//     ) {
//         this.fullName = firstName + " " + middleInitial + " " + lastName;
//     }
// }
//
// interface Person {
//     firstName: string;
//     lastName: string;
// }
//
// function greeter(person: Person) {
//     return "Hello, " + person.firstName + " " + person.lastName;
// }
//
// let user = new Student("Jane", "M.", "User");
//
// document.body.textContent = greeter(user);
