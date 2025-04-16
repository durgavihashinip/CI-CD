const fs = require('fs');
const path = require('path');

// Test 1: Check if index.html exists
fs.access(path.join(__dirname, 'src', 'index.html'), fs.constants.F_OK, (err) => {
    if (err) {
        console.error("Test Failed: index.html is missing");
    } else {
        console.log("Test Passed: index.html exists");
    }
});

// Test 2: Check if style.css exists
fs.access(path.join(__dirname, 'src', 'style.css'), fs.constants.F_OK, (err) => {
    if (err) {
        console.error("Test Failed: style.css is missing");
    } else {
        console.log("Test Passed: style.css exists");
    }
});

// Test 3: Check if script.js exists
fs.access(path.join(__dirname, 'src', 'script.js'), fs.constants.F_OK, (err) => {
    if (err) {
        console.error("Test Failed: script.js is missing");
    } else {
        console.log("Test Passed: script.js exists");
    }
});

// Test 4: Basic test to check if HTML structure is valid (without using DOM)
fs.readFile(path.join(__dirname, 'src', 'index.html'), 'utf8', (err, data) => {
    if (err) {
        console.error("Test Failed: Couldn't read index.html");
    } else {
        if (data.includes('<html>') && data.includes('</html>') && data.includes('<head>') && data.includes('<body>')) {
            console.log("Test Passed: Basic HTML structure is present");
        } else {
            console.error("Test Failed: HTML structure seems invalid");
        }
    }
});

// Test 5: Basic JS function test
