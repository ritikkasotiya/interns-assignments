// write an expression in input.txt File
// result will be print on the output file output.txt




const fs = require('fs');
const math = require('mathjs');


function evaluateExpression(expression) {
    try {
       
        return math.evaluate(expression);
    } catch (error) {
       
        console.error("Error evaluating expression:");
        return null;
    }
}


function solveArithmeticExpressions(inputFilePath, outputFilePath) {
    fs.readFile(inputFilePath, 'utf8', (err, data) => {
        if (err) {
            console.error("Error reading input file:", err);
            return;
        }

        
        const expressions = data.split('\n');

       
        const results = expressions.map(expression => evaluateExpression(expression));

        
        fs.writeFile(outputFilePath, results.join('\n'), 'utf8', err => {
            if (err) {
                console.error("Error writing output file:", err);
                return;
            }
            console.log("Results have been written to", outputFilePath);
        });
    });
}


const inputFilePath = process.argv[2];
const outputFilePath = process.argv[3];

if (!inputFilePath || !outputFilePath) {
    console.error("Usage: node arithmetic_solver.js <input_file_path> <output_file_path>");
} else {
    solveArithmeticExpressions(inputFilePath, outputFilePath);
}