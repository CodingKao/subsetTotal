// app.js

function findCombination(numbers, target, currentCombination = [], index = 0) {
    if (currentCombination === null) {
        currentCombination = [];
    }

    if (target === 0) {
        return [currentCombination]; // Found a combination that adds up to the total
    }

    if (target < 0 || index === numbers.length) {
        return []; // No combination found
    }

    // Explore two possibilities: include the current number or skip it
    const includeCurrent = findCombination(numbers, target - numbers[index], [...currentCombination, numbers[index]], index + 1);
    const skipCurrent = findCombination(numbers, target, currentCombination, index + 1);

    return includeCurrent.concat(skipCurrent);
}

function getUserInput() {
    const userInput = document.getElementById("numberInput").value;
    const targetSum = parseInt(document.getElementById("totalInput").value);
    return { userInput, targetSum };
}

function displayResult(result) {
    const resultBoxes = document.getElementById("resultBoxes");
    resultBoxes.innerHTML = ""; // Clear previous results

    if (result.length > 0) {
        for (const combination of result) {
            const resultBox = document.createElement("div");
            resultBox.className = "result-box";
            resultBox.innerHTML = combination.join(', '); // Convert array to string
            resultBoxes.appendChild(resultBox);
        }
    } else {
        // Display a message to the user on the webpage
        const noResultBox = document.createElement("div");
        noResultBox.className = "result-box";
        noResultBox.innerHTML = "No subset found.";
        resultBoxes.appendChild(noResultBox);
    }

    // Display the result container
    document.getElementById("resultContainer").style.display = "block";
}

function findAndDisplayCombination() {
    const { userInput, targetSum } = getUserInput();
    const numbers = userInput.split(',').map(num => parseInt(num.trim()));
    const result = findCombination(numbers, targetSum);

    if (result.length > 0) {
        console.log(`A subset of numbers that adds up to ${targetSum}: ${JSON.stringify(result)}`);
        displayResult(result);
    } else {
        console.log("No subset found.");
        // Display a message to the user on the webpage
        document.getElementById("resultBoxes").innerHTML = "No subset found.";
        document.getElementById("resultContainer").style.display = "block";
    }
}
