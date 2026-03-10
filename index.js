const requiredInputs = document.querySelectorAll("input:not(.not-required)")
const allInputs = document.querySelectorAll("input")
const skipQuestionInput = document.querySelectorAll(".skip")
const showQuestionInput = document.querySelectorAll(".show")

// set required attribute for all inputs
function setRequiredAttribute () {
    requiredInputs.forEach((input) => {
        // offset parten gets clostest ancestor element that positioned and visible
        // if the element or any of it's ancestors has display:none; it returns null
        if (input.offsetParent !== null) {
            // add required attribute
            input.setAttribute("required", "")
        } else {
            // remove required attribute
            input.removeAttribute("required")
        }
    })
}

setRequiredAttribute()

// if display none OR parent had display none then uncheck. 
function uncheckInput() {
    allInputs.forEach((input) => {
        if (input.offsetParent === null) {
            // Clear value or uncheck depending on type
            if (input.type == "checkbox" || input.type == "radio") {
                input.checked = false
            } else if (input.type == "text" || input.type == "number" || input.type == "email" || input.type == "password" || input.type == "tel" || input.type == "date") {
                input.value = ""
            }
        } 
    })
}

uncheckInput()

// when skip questions are activated, then check again for required attributes and display:none;
skipQuestionInput.forEach((input) => {
    input.addEventListener("click", () => {
        setRequiredAttribute();
        uncheckInput();
        setMaxDate();
    });
});

showQuestionInput.forEach((input) => {
    input.addEventListener("click", () => {
        setRequiredAttribute();
        uncheckInput();
        setMaxDate();
    });
});

















// section 3
// remove all classes from the inputs and then add the class that corresponds to the aria-labelledby attribute to only the checked input
const checkedExecutorInput = document.querySelectorAll("#section-three-a input")
const executorLabel = document.querySelectorAll("#section-three-a label")
const receiversInputLabel = document.querySelector("#receiver-label")
const receiverInputGroup = document.querySelector("#receiver-input-group")

//hide all spans with the extra information
function hideSpans() {
    executorLabel.forEach((label) => {
        if (label.querySelector("span") !== null) {
            labelSpan = label.querySelector("span")
            labelSpan.classList.add("hidden")
        } 
    })
}
hideSpans()


//get the span in the label of the checked input and use that to replace the label of the number input
function checkExecutorInput() {
    spanExists = document.querySelector(".input-container:has(input:checked) label span")
    if (spanExists !== null) {
        receiverInputGroup.classList.remove("hidden")
        const checkedLabel = document.querySelector(".input-container:has(input:checked) label span")
        receiversInputLabel.textContent = checkedLabel.textContent 
    } else {
        receiverInputGroup.classList.add("hidden")
    }
    


}

//initial check
checkExecutorInput()

//check again on changed input
checkedExecutorInput.forEach((input) => {
    input.addEventListener("click", checkExecutorInput)
})










// 11 proef BSN
const burgerServiceNummer = document.querySelector(".bsn")
let burgerServiceNummerValue = burgerServiceNummer.value

burgerServiceNummer.addEventListener("blur", elfProef)

burgerServiceNummer.addEventListener("invalid", function(event) {
    event.preventDefault();
});

// check BSN
function elfProef (event) {
    const input = event.target;
    let bsnValue = input.value.trim();
    let bsnValueSplit = bsnValue.split("");
    

    // if the bsn is 8, add a 0 in front
    if (bsnValueSplit.length === 8) {
        bsnValueSplit.unshift("0");
    }

    // if bsn is too short check report back
    if (bsnValueSplit.length < 9) {
        input.setCustomValidity("BSN is te kort");
    } else {
        // 11-proef
        const sum =
            9 * bsnValueSplit[0] +
            8 * bsnValueSplit[1] +
            7 * bsnValueSplit[2] +
            6 * bsnValueSplit[3] +
            5 * bsnValueSplit[4] +
            4 * bsnValueSplit[5] +
            3 * bsnValueSplit[6] +
            2 * bsnValueSplit[7] +
            -1 * bsnValueSplit[8];

        if (sum % 11 === 0) {
            input.setCustomValidity(""); // valid
            console.log("if")
        } else {
            input.setCustomValidity("Voer een geldige BSN in"); // invalid
           
            console.log("else")
        }

        console.dir(input)
    }

    
    // force CSS update
    input.classList.remove("trigger-reflow");
    void input.offsetWidth; // trigger reflow
    input.checkValidity();


}








// get current date and insert that into the datepicker
let currentDay = new Date();

// day, month, year
//make a string and add a 0 in front of a day that is not 10 or above. padStart says that the returning string has to be two digits long
let day = String(currentDay.getDate()).padStart(2, '0');         
let month = String(currentDay.getMonth() + 1).padStart(2, '0');   
let year = currentDay.getFullYear();    


// Format date as DD/MM/YYYY
let formattedDate = `${year}-${month}-${day}`;
console.log(`Current Date: ${formattedDate}`);


//get the death-date input
const deathDateInput = document.querySelector("#death-date")
const marriageDateInput = document.querySelector("#marriage-date")
const willDateInput = document.querySelector("#date-will")
console.log(deathDateInput)

function insertCurrentDay() {
    // set the value to current day
    deathDateInput.value = formattedDate
    // set max attribute to current day
    deathDateInput.setAttribute("max", `${formattedDate}`)
    marriageDateInput.setAttribute("max", `${formattedDate}`)
    willDateInput.setAttribute("max", `${formattedDate}`)
}

insertCurrentDay();



// wedding date and testament change can't be after death date 

deathDateInput.addEventListener("change", setMaxDate)

function setMaxDate() {
    const deathDate = deathDateInput.value; // make sure it's captured correctly

    if (deathDate) { // only set max if deathDate has a value
        marriageDateInput.setAttribute("max", deathDate);
        willDateInput.setAttribute("max", deathDate);
    }

}



//custom error messages
requiredInputs.forEach((input) => {
    const wrapper = input.parentElement; 
    const error = wrapper.nextElementSibling; 

    // check if the next sibling is an error message
    if (!error || !error.classList.contains("error-message")) return;

    input.addEventListener("blur", () => {
        const value = input.value.trim();

        if (value === "") {
        input.setCustomValidity("Veld is leeg");
        error.classList.remove("hidden");
        error.textContent = input.validationMessage;
        } else {
        input.setCustomValidity("");
        error.classList.add("hidden");
        error.textContent = "";
        }
    });
});




