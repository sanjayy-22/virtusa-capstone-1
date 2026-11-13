
let words = ["apple", "banana", "apricot", "blueberry", "avocado"];

let map = new Map();

for (let i = 0; i < words.length; i++) {
    let firstChar = words[i][0];

    if (map.has(firstChar)) {
        map.get(firstChar).push(words[i]);
    } else {
        map.set(firstChar, [words[i]]);
    }
}

console.log(map);
