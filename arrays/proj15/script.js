const array =  ["cat", "dog", "elephant", "tiger"]

let newArray = []
let i = 0;
let demo = ""
while (i < array.length){
    j= i+1;
    while(j < array.length){
        if(array[i].length > array[j].length){
           demo = array[i]
           array[i] = array[j]
           array[j] = demo

        }
        j++
    }
    i++
    
}
console.log(array);
