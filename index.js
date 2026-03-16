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


// i guess I'm doing all error messages custom
setRequiredAttribute()

requiredInputs.forEach(input => {
    input.addEventListener("invalid", (e) => {
        e.preventDefault(); 
    });
});

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
const receiverInput = document.getElementById("number-receivers")

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
        receiverInput.setAttribute("required", "")
    } else {
        receiverInputGroup.classList.add("hidden")
        receiverInput.setAttribute("required", "false")
    }
    


}

//initial check
checkExecutorInput()

//check again on changed input
checkedExecutorInput.forEach((input) => {
    input.addEventListener("click", checkExecutorInput)
})










// 11 proef BSN
const burgerServiceNummer = document.querySelectorAll(".bsn")
let burgerServiceNummerValue = burgerServiceNummer.value

burgerServiceNummer.forEach((bsn)=> {
    bsn.addEventListener("blur", () => elfProef(bsn))
})

burgerServiceNummer.forEach((bsn) => {
    bsn.addEventListener("invalid", function(event) {
        event.preventDefault();
    });
})


// check BSN
function elfProef (input) {
    if (input.offsetParent === null) return;

    // const input = event.target;
    let bsnValue = input.value.trim();
    let bsnValueSplit = bsnValue.split("");
    const error = input.closest(".input-wrapper").nextElementSibling;

    

    // if the bsn is 8, add a 0 in front
    if (bsnValueSplit.length === 8) {
        bsnValueSplit.unshift("0");
    }

    // if bsn is too short check report back
    if (bsnValueSplit.length < 9) {
        input.setCustomValidity("BSN is te kort");
        // check if the next sibling is an error message
        if (error) {
            error.classList.remove("hidden");
            input.classList.add("invalid")
            input.classList.remove("valid")
            input.setAttribute("aria-invalid", "true");
            error.textContent = input.validationMessage;

        }
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
            error.classList.add("hidden");
            input.classList.add("valid")
            input.classList.remove("invalid")
            error.textContent = "";
            input.setAttribute("aria-invalid", "false");
        } else {
            input.setCustomValidity("Voer een geldige BSN in"); // invalid
            error.classList.remove("hidden");
            input.classList.remove("valid");
            input.classList.add("invalid")
            error.textContent = input.validationMessage;
            input.setAttribute("aria-invalid", "true");
        }
    } 


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


//get the death-date input
const deathDateInput = document.querySelector("#death-date")
const marriageDateInput = document.querySelector("#marriage-date")
const willDateInput = document.querySelector("#date-will")


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

        validateDate({ target: marriageDateInput });
        validateDate({ target: willDateInput });
    }

}

// check if dates are in right order
function validateDate(event) {
    const date = event.target;
    const value = date.value;
    if (!value) return;

    const dateValue = new Date(value);
    const deathDateValue = deathDateInput.value ? new Date(deathDateInput.value) : null;

    

    let customValidationMessage = "";

    // check if the current day input is in the future
    if (dateValue > currentDay) {
        customValidationMessage = "Datum mag niet in de toekomst liggen";
    } 
    // check if the current input is not in the future but after the death date
    else if (deathDateValue && dateValue > deathDateValue) {
        customValidationMessage = "Huwelijksdatum mag niet na overlijdensdatum liggen";
    }

    date.setCustomValidity(customValidationMessage);

    const errorId = date.getAttribute("aria-errormessage");
    const errorMessage = errorId ? document.getElementById(errorId) : null;

    // update error message and classes
    if (errorMessage) {
        if (customValidationMessage) {
            errorMessage.textContent = customValidationMessage;
            errorMessage.classList.remove("hidden");

            date.classList.add("invalid");
            date.classList.remove("valid");
            date.setAttribute("aria-invalid", "true");
        } else {
            errorMessage.textContent = "";
            errorMessage.classList.add("hidden");

            date.classList.remove("invalid");
            date.classList.add("valid");
            date.setAttribute("aria-invalid", "false");
        }
    }
    

    

    

    
}





//custom error messages for empty fields for all input types
function emptyError(input) {
    const errorId = input.getAttribute("aria-errormessage");
    const errorMessage = errorId ? document.getElementById(errorId) : null;
    console.log(errorMessage, "errorMessage")

    // skip validation if the input is inside a hidden receiver
    const receiver = input.closest(".verkrijger");
    if (receiver && receiver.classList.contains("hidden")) {
        return;
    }
    
    

    let isEmpty = false;
    let customValidationMessage = "";

    if (input.type === "file") {
        isEmpty = input.files.length === 0;
        customValidationMessage = "Selecteer een bestand";
    } else if (input.type === "date") {
        isEmpty = !input.value;
        customValidationMessage = "Kies een datum";
    } else if (input.type === "number") {
        // has to be extra apparently
        isEmpty = input.value === "";
        customValidationMessage = "Veld is leeg";

        
        
    } else {
        isEmpty = input.value.trim() === "";
        customValidationMessage = "Veld is leeg";
    }

    if (isEmpty) {
        // invalid
        input.setCustomValidity(customValidationMessage);
        input.setAttribute("aria-invalid", "true");
        input.classList.add("invalid")
        input.classList.remove("valid")

        if (errorMessage) {
            errorMessage.classList.remove("hidden");
            errorMessage.textContent = input.validationMessage;
        }
    } else {
        // valid
        input.setCustomValidity("");
        input.setAttribute("aria-invalid", "false");
        input.classList.add("valid")
        input.classList.remove("invalid")

        if (errorMessage) {
            errorMessage.classList.add("hidden");
            errorMessage.textContent = "";
        }
    }
}

const notCustomInputs = Array.from(requiredInputs).filter(input => !input.classList.contains("custom-error"));

notCustomInputs.forEach(input => {
    input.addEventListener("blur", () => emptyError(input));
});

function emptyErrorCheck() {
    notCustomInputs.forEach(input => emptyError(input));
}


// add class valid to niet verplichte velden
// ik snap dat dit niet netjes is maar het lukt me even gewoon niet anders

const notRequiredInputs = document.querySelectorAll(".not-required")


notRequiredInputs.forEach(input => {
    input.addEventListener("blur", () => addValidClass(input));
});

function addValidClass(input) {
    input.classList.add("valid");
}




// check if there are empty radio buttons 

const radioFieldset = document.querySelectorAll("fieldset:has(>div>input[type='radio'])")

function radioEmpty() {
    radioFieldset.forEach((fieldset) => {
        const radios = fieldset.querySelectorAll("input[type='radio']");
        const error = fieldset.querySelector(".error-message");

        if (!error) return;

        // check if radios are checked
        const anyChecked = Array.from(radios).some(radio => radio.checked);
        
        if (anyChecked) {
            // valid
            radios.forEach(radio => radio.setCustomValidity(""));
            error.classList.add("hidden");
            error.textContent = "";
            fieldset.setAttribute("aria-invalid", "false");
        } else {
            // invalid
            const message = "Kies een optie";
            radios.forEach(radio => radio.setCustomValidity(message));
            error.classList.remove("hidden");
            error.textContent = message; 
            fieldset.setAttribute("aria-invalid", "true");
        }
    })
}


// set custom validity if the number input is 0 or lower 
const numberInputs = document.querySelectorAll("input[type=number]");

numberInputs.forEach(input => {
    input.addEventListener("blur", () => checkMinimumNumber(input));
});

function checkMinimumNumber(input) {
    const error = input.nextElementSibling; // assumes <p> immediately after input

    if(!error) return;

    // check if empty
    if (input.value === "") {
        input.setCustomValidity("Veld is leeg");
        error.classList.remove("hidden");
        error.textContent = input.validationMessage;
        input.setAttribute("aria-invalid", "true");
        input.classList.remove("valid");
        input.classList.add("invalid");
        return;
    }

    // check if less than 0
    if (Number(input.value) < 0) {
        input.setCustomValidity("Vul een getal van minimaal 0 in");
        error.classList.remove("hidden");
        error.textContent = input.validationMessage;
        input.setAttribute("aria-invalid", "true");
        input.classList.remove("valid");
        input.classList.add("invalid");
        return;
    }

    // valid input
    input.setCustomValidity("");
    error.classList.add("hidden");
    error.textContent = "";
    input.setAttribute("aria-invalid", "false");
    input.classList.add("valid");
    input.classList.remove("invalid");
}


function checkMinimumNumberEnd() {
    numberInputs.forEach(input => checkMinimumNumber(input));
}







// nieuwe verkrijgers toevoegen!!!
// mijn plan is om hier met javascript om elke button klik een nieuwe verkrijger toe te voegen en dan met css als het uitstaat krijg je gewoon 4 verkrijgers
const invisibleReceiver = document.querySelectorAll(".verkrijger:not(:first-of-type)")
const addReceiverButton = document.querySelector(".verkrijger-toevoegen")

invisibleReceiver.forEach(receiver => {
    receiver.classList.add("hidden")

    setRequiredAttribute();
})

addReceiverButton.classList.remove("hidden")

addReceiverButton.addEventListener("click", addReceiver)

function addReceiver() {
    const firstHiddenReceiver = document.querySelector(".verkrijger.hidden")

    if (firstHiddenReceiver) {
        firstHiddenReceiver.classList.remove("hidden");
        makeInputsRequired(firstHiddenReceiver); 
    }

    // when there is no more receivers left, add new receivers with js
    if (!document.querySelector(".verkrijger.hidden")) {
        addReceiverButton.classList.add("hidden")
    }

    getRemoveButton()
    updateReceiverNumbers()
    setRequiredAttribute();
    
    

}

function makeInputsRequired(receiver) {
    const inputs = receiver.querySelectorAll("input:not(.not-required)");

    inputs.forEach(input => {
        input.setAttribute("required", "");
    });
}



const removeReceiverButton = document.querySelectorAll(".verwijder-verkrijger")


removeReceiverButton.forEach(button => {
    button.addEventListener("click", removeReceiver);
});


    
function removeReceiver(event) {
     const button = event.currentTarget; // the clicked button
    const currentReceiver = button.closest(".verkrijger");

    const firstHiddenReceiver = document.querySelector(".verkrijger.hidden");

    if (firstHiddenReceiver) {
        addReceiverButton.classList.remove("hidden");
    }

    currentReceiver.classList.add("hidden");

    // reset fields after hiding
    setRequiredAttribute();
    uncheckInput();
    updateReceiverNumbers();
    resetReceiver(currentReceiver);
}



function resetReceiver(receiver) {

    const inputs = receiver.querySelectorAll("input");

    inputs.forEach(input => {
        input.value = "";
        input.checked = false;

        input.setCustomValidity("");
        input.setAttribute("aria-invalid", "false");

        input.classList.remove("invalid");
        input.classList.remove("valid");
        input.removeAttribute("required")
    });
}


// 
function updateReceiverNumbers() {
    console.log("called")
    const receivers = [...document.querySelectorAll(".verkrijger")].filter(receiver => !receiver.classList.contains("hidden"));

    receivers.forEach((receiver, index) => {
        const legend = receiver.querySelector("legend");
        legend.textContent = `Verkrijger ${index + 1}`;
    });
}



//check all validation again when pressing the sumbit button and open details with errors
function openDetails() {
    const allDetails = document.querySelectorAll("details")
    allDetails.forEach(details => {
        const error = details.querySelector(".error-message");
        const invalidInput = details.querySelector("input.invalid, input:invalid, select:invalid, textarea:invalid");

        if ((error && !error.classList.contains("hidden")) || invalidInput) {
            details.open = true;
        }
    });
}



// error overview
function errorOverview() {
    // get all displayed errors
    const allErrors = document.querySelectorAll(".error-message:not(.hidden)")
    const errorSection = document.querySelector(".error-overview")

    // get all inputs that the errors belong to 
   allErrors.forEach(error => {
        // skip errors inside hidden receivers
        const receiver = error.closest(".verkrijger");
        if (receiver && receiver.classList.contains("hidden")) {
            return;
        }
        // find inputs referencing this error
        const inputs = document.querySelectorAll(`[aria-errormessage="${error.id}"]`);


        // checken of input bestaat
        if (inputs.length === 0) {
            console.log("Geen input gevonden voor", error.id);
        } else {
            inputs.forEach(input => {
                if (!input.id) {
                    // input heeft geen id
                    console.log("Input heeft geen ID voor error", error.id);
                } else {
                    errorSection.classList.remove("hidden")
                    errorSection.focus();
                    
                    const label = document.querySelector(`label[for="${input.id}"]`);
                    const fieldset = input.closest("fieldset");
                    const legend = fieldset ? fieldset.querySelector("legend") : null;

                    let errorText = ""
                    // If both label and legend exist, use both
                    if (label && legend) {
                        errorText = `${legend.textContent} - ${label.textContent} - ${error.textContent}`;
                    } 
                    // If only label exists, use label
                    else if (label) {
                        errorText = `${label.textContent} - ${error.textContent}`;
                    } 
                    // If only legend exists, use legend (for radios/checkboxes)
                    else if (legend) {
                        errorText = `${legend.textContent} - ${error.textContent}`;
                    } 
                    // fallback
                    else {
                        errorText = `${input.id} - ${error.textContent}`;
                    }
                    
                    // wat gebeurd er als er een ID voor de error gevonden is
                    errorLinkHTML = `<li><a href="#${input.id}">${errorText}</a></li>`
                    
                    const errorUL = document.querySelector(".error-overview ul")
                    errorUL.insertAdjacentHTML("beforeend", errorLinkHTML)
                }
            });
        }
    });

}

const submitButton = document.querySelector("#submit-button")
submitButton.addEventListener("click", checkValidation)

//add all error messages and open the details with invalid fields on clicking the submit button
function checkValidation () {
    emptyErrorCheck();
    burgerServiceNummer.forEach((bsn) => elfProef(bsn));
    radioEmpty();
    openDetails();
    checkMinimumNumberEnd();

    errorOverview()
}