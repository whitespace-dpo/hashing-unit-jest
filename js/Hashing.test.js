const Hashing = require('./Hashing')
const BruteForce = require('./BruteForce')
const generateRandomString = require('./GenerateRandomString')
test('properly adds two number', () =>{
    for(let i = 0; i < 10; i++){
    var stringA = generateRandomString(Math.floor(Math.random() * 1) + 1)
    var stringB = generateRandomString(Math.floor(Math.random() * 15) + 10)
    expect(Hashing(stringA, stringB)).toStrictEqual(BruteForce(stringA, stringB))}
    // console.log(Hashing(stringA, stringB) + " " + BruteForce(stringA, stringB))
    // console.log(stringA + " " + stringB)
})