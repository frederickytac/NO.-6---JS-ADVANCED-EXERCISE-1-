let numbers = [];

function insertNumber() {
    let input = document.getElementById("numberInput");
    let number = Number(input.value);

    if (number <= 0 || input.value === "") {
        alert("Please enter a positive number.");
        return;
    }

    numbers.push(number);

    input.value = "";

    displayNumbers();
}

function displayNumbers() {
    let list = document.getElementById("numberList");

    list.innerHTML = "";

    numbers.forEach(function(number, index) {

        let type = number % 2 === 0 ? "EVEN" : "ODD";

        let color = number % 2 === 0 ? "green" : "blue";

        list.innerHTML += `
            <div style="margin-bottom: 5px;">
                <span style="display:inline-block; width:60px;">
                    ${number}
                </span>

                <span style="
                    display:inline-block;
                    width:60px;
                    color:${color};
                    font-weight:bold;
                ">
                    ${type}
                </span>

                <button onclick="removeNumber(${index})">
                    Remove
                </button>

                <button onclick="editNumber(${index})">
                    Edit
                </button>
            </div>
        `;
    });
}

function removeNumber(index) {
    numbers.splice(index, 1);

    displayNumbers();
}

function editNumber(index) {
    let newNumber = prompt(
        "Enter the new positive number:",
        numbers[index]
    );

    if (newNumber === null) {
        return;
    }

    newNumber = Number(newNumber);

    if (newNumber <= 0 || isNaN(newNumber)) {
        alert("Please enter a valid positive number.");
        return;
    }

    numbers[index] = newNumber;

    displayNumbers();
}

function clearEntry() {
    document.getElementById("numberInput").value = "";
}

function clearItems() {
    numbers = [];

    displayNumbers();

    document.getElementById("result").innerHTML = "";
}

function getTotal() {
    if (numbers.length === 0) {
        alert("There are no numbers.");
        return;
    }

    let total = 0;

    for (let i = 0; i < numbers.length; i++) {
        total += numbers[i];
    }

    document.getElementById("result").innerHTML =
        "Total: " + total;
}

function getHighestLowest() {
    if (numbers.length === 0) {
        alert("There are no numbers.");
        return;
    }

    let highest = Math.max(...numbers);
    let lowest = Math.min(...numbers);

    document.getElementById("result").innerHTML =
        "Highest Number: " + highest +
        "<br>Lowest Number: " + lowest;
}

function sortNumbers() {
    let sortType = document.getElementById("sortSelect").value;

    if (sortType === "ascending") {
        numbers.sort(function(a, b) {
            return a - b;
        });
    }

    if (sortType === "descending") {
        numbers.sort(function(a, b) {
            return b - a;
        });
    }

    displayNumbers();
}