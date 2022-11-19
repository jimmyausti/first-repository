console.log(`working`);
// ! Beginner questions
// challenge 1
function add(num1, num2) {
    return num1 + num2
}
console.log(add(5, 3));
// challenge 2
function hoursintoseconds(hour) {
    return hour * 3600
}
console.log(hoursintoseconds(2));
// challenge 3
function perimeterOfRectangle(length, side) {
    return (2 * length) + (2 * side)
}
console.log(perimeterOfRectangle(4,8))
// challenge 4
function calcTriangleArea(base, height) {
    return 0.5 * base * height
}
console.log(calcTriangleArea(3, 2))
// challenge 5
function appendSucks(string) {
    return string + " SUCKS!!!!!!"
}
console.log(appendSucks("University"))
// challenge 6
function sumGreaterThanHundred(num1, num2) {
    return num1 + num2 > 100
}
console.log(sumGreaterThanHundred(100, 10));
// challenge 7
function lessThanOrEqualToZero(num) {
    return num <= 0
}
console.log(lessThanOrEqualToZero(5))
// challenge 8
function oppositeBoolean(bool) {
    return !bool
}
console.log(oppositeBoolean(true))
// challenge 9
function isNotZero(num) {
    return num !== 0
}
console.log(isNotZero(10))
// challenge 10
function calcRemainder(num1, num2) {
    return num1 % num2
}
console.log(calcRemainder(7, 8))
// challenge 11
function isOdd(num) {
    return (num % 2) !== 0 
}
console.log(isOdd(4))
// challenge 12
function booleanInteger(num) {
   return num % 2 === 0 ? 1: -1;
}
console.log(booleanInteger(5))
// challenge 13
function isLoggedInAndSubscribed(log, sub) {
    return (log === `LOGGED-IN`) && (sub === `SUBSCRIBED`)
}
console.log(isLoggedInAndSubscribed(log, sub))

