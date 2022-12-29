function test() { console.log("Test"); }

const words = [
    "adorable",
    "amazing",
    "awesome",

    "beautiful",

    "calming",
    "comfy",
    "cool",
    "courageous",
    "cute",

    "delightful",
    "different",

    "helpful",

    "impeccable",
    "interesting",

    "joyful",

    "kind",

    "lovable",
    "loved",
    "lovely",
    "loving",
    "loyal",

    "magnificent",

    "nice",

    "perfect",
    "precious",
    "pretty",
    "pure",

    "smart",
    "sweet",
    "strong",
    "stylish",
    "stunning",

    "valuable",

    "warm",

    "unique",
];
var usedWords = [];
function changeWord() {
    while (true) {
        if (usedWords.length === words.length) usedWords = [];
        const word = words[Math.floor(Math.random() * words.length)];
        if (usedWords.every(w => w !== word)) {
            usedWords.push(word);
            document.querySelector("span").innerHTML = word;
            break;
        }
    }
}