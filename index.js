// if display none then uncheck. 


// if !display: none; then make question required




// section 3
// remove all classes from the inputs and then add the class that corresponds to the aria-labelledby attribute to only the checked input
const checkedExecutorInput = document.querySelectorAll("#section-three-a input")

function checkExecutorInput() {
    console.log("function called")
    checkedExecutorInput.forEach((input) => {
        input.classList.remove("executor-checked")

        if (input.checked) {
            input.classList.add("executor-checked")

        } 
    })
}

//initial check
checkExecutorInput()

//check on changed input
checkedExecutorInput.forEach((input) => {
    input.addEventListener("click", checkExecutorInput)
})