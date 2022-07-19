const fs = require('fs');
const input = fs.readFileSync(0, 'utf8').trim().split('\n');
function splitIntoChunk(arr, chunk) {
    const r = []

    for (i=0; i < arr.length; i += chunk) {

        let tempArray;
        tempArray = arr.slice(i, i + chunk);
        r.push(tempArray);
    }
    return r;

}
function addUp(candies){
    const j = candies.split(' ');
    return j.reduce((a, b) => parseInt(a) + parseInt(b), 0);
}

const numberOfSamples = input[0];
input.shift();

const data = splitIntoChunk(input, 2);


data.forEach((cases, index)=> {
    const candies = addUp(cases[1]);
    const kidsBags =  cases[0].split(' ');
    const kids = kidsBags[1];
     console.log(`Case #${index+1}: ${candies%kids}`);
})




