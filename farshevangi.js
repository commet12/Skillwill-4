
//  I

// const damteni = (string, valueToReplace, valueToReplaceWith) => {

//     let axaliStringi = ""

//     for(let i = 0; i < string.length; i++) {
//         if(string[i] === valueToReplace) {
//             axaliStringi += valueToReplaceWith
//         }
//         else {
//             axaliStringi += string[i]
//         }
//     }
//     return axaliStringi

// }


// let rameTexti = "hello world"
// let gamosataniTexti = damteni(rameTexti, "h", "W")
// console.log(gamosataniTexti)




// II



const Diski = (laptop) => {

    const masala = gamyofizoli.split(' ');

    for (let n = 0; n < masala.length; n++) {

        const masala2 = masala[n];
        masala[n] = masala2[0].toUpperCase() + masala2.slice(1);
    }
    return masala.join(' ');




}

const gamyofizoli = 'the comeback in Madrid is real';
const gamotana = Diski(gamyofizoli);

console.log(gamotana)




// III


// const sadguri = [{
//     name: 'Lasha',
//     age: 30
// },   {
//     name: 'Saba',
//     age: 20
// }]

// sadguri.sort(
//     function(a, b) {
//        return a.age - b.age
//     }
// );
// console.log(sadguri)