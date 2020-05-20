var Scale = /** @class */ (function () {
    function Scale(className, activeSegmentStart, activeSegmentEnd, type) {
        this.className = className;
        this.activeSegmentStart = activeSegmentStart;
        this.activeSegmentEnd = activeSegmentEnd;
        this.type = type;
    }
    return Scale;
}());
var Runner = /** @class */ (function () {
    function Runner(className, position, side) {
        this.className = className;
        this.position = position;
        this.side = side;
    }
    return Runner;
}());
var Segment = /** @class */ (function () {
    function Segment(className, width) {
        this.className = className;
        this.width = width;
    }
    return Segment;
}());
var greenRunnerLeft = new Runner('segment-start', 100, 'left');
var greenRunnerRight = new Runner('segment-end', 200, 'right');
var greenScale = new Scale('green-scale', greenRunnerLeft.position, greenRunnerRight.position, 'segment');
var greenSegment = new Segment('range_line', 100);
var d = document;
var greenRunnerLeftNode = d.querySelector("." + greenRunnerLeft.className);
var greenRunnerRightNode = d.querySelector("." + greenRunnerRight.className);
var greenScaleNode = d.querySelector("." + greenScale.className);
var greenSegmentNode = d.querySelector("." + greenSegment.className);
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
