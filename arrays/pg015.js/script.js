let str = "Programming is fun and"
// let i = 0;
// let pos = 0;
// let start = 0;
// let word = ' '
// while(i < str.length ){
//     if(str[i] == " " || i == (str.length -1) ){
//         start = pos
//         pos = i
//     while(pos >= start){
//         word = word+str[pos]
//         pos--
//     }
//     pos = i
//     word +=" "
//   }
//     i++

// }
// console.log(word);

let word = ""
let i = 0;
let reverseStr = ""
while(i < str.length){
    word =  str[i] + word
    if(str[i] == " " ||i == str.length -1){
        reverseStr+= " "
        reverseStr += word 
        word =""
    }
    i++
}
console.log(reverseStr);


