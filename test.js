

let studentsData = [['Jack', 24], ['Sara', 23],];

// looping outer array elements
for(let i = 0; i < studentsData.length; i++){

    // get the length of the inner array elements
    let innerArrayLength = studentsData[i].length;

    // looping inner array elements
    for(let j = 0; j < innerArrayLength; j++) {
        console.log(studentsData[i][j]);
    }
}























// const num = [2,6,8,10];

// let result =(num.map(num => num*10));
// console.log(result)
// // result.forEach(i => {
// //     console.log(i)
    
// // });
// result.forEach(i => console.log(i))

// let studentsData = [['Jack', 24], ['Sara', 23],];

// // // iterating over the studentsData
// // studentsData.forEach((student) => {
// //     student.forEach((data) => {
// //         console.log(data);
// //     });
// // });
// studentsData.forEach(i=> i.forEach(j => console.log(j)))