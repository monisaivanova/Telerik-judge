const text = "I am hungry! Hungry I am and I am hungry!";
const words = text.split(/[! ,]/);
console.log(words);

const wordsOccurance = {};
for (const word of words) {
    if (word === "") {
        continue;
    }

    const wordToLower = word.toLowerCase();

    if (wordsOccurance[wordToLower] === undefined) {
        wordsOccurance[wordToLower] = [];
    }

    if (wordsOccurance[wordToLower].includes(word)) {
        continue;
    }
    wordsOccurance[wordToLower].push(word);
}

console.log(wordsOccurance);