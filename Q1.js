// strings.txt containing a set of strings, one per line.
// Run the program with Node.js: node Q1.js.

const fs = require('fs');
const readline = require('readline');


function searchString(str1, str2) {
    const m = str1.length;
    const n = str2.length;

    const dp = [];

    for (let i = 0; i <= m; i++) {
        dp[i] = [];
        for (let j = 0; j <= n; j++) {
            if (i === 0) {
                dp[i][j] = j;
            } else if (j === 0) {
                dp[i][j] = i;
            } else if (str1[i - 1] === str2[j - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else {
                dp[i][j] = 1 + Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]);
            }
        }
    }

    return dp[m][n];
}


function findTopKSimilarStrings(input, strings, k) {
    const distances = strings.map(str => ({
        string: str,
        distance: searchString(input, str)
    }));

    distances.sort((a, b) => a.distance - b.distance);

    return distances.slice(0, k).map(item => item.string);
}


function readAndParseFile(filePath) {
    try {
        const data = fs.readFileSync(filePath, 'utf8');
        return data.split('\n').filter(Boolean); 
    } catch (err) {
        console.error("Error reading file:", err);
        return [];
    }
}


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


const inputFile = 'strings.txt'; 
const stringSet = readAndParseFile(inputFile);


function getSuggestions() {
    rl.question("Enter a word: ", input => {
        const k = 3; 
        const suggestions = findTopKSimilarStrings(input, stringSet, k);
        console.log("Suggestions:", suggestions);
        getSuggestions(); 
    });
}


getSuggestions();