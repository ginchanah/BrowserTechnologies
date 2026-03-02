// if display none OR parent had display none then uncheck. 


// if display: none; = false then make question required



console.log("works")
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

console.log("works also")


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