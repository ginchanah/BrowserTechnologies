// console.log("script works")

// const steps = document.querySelectorAll('.step')
// let inputs = document.querySelectorAll('.listen')

// // add hidden to all elements that should be hidden 
// steps.forEach((step, index) => {
//     //first step should be visible
//     if (index !== 0) {        
//         step.classList.add("hidden");
//     }
// });


// // remove the hidden class from the next step in the form
// inputs.forEach(radio => {
//     //listen for change in all radio buttons
//     radio.addEventListener("change", function () {
//         //get the closest parent element with the class step
//         const stepParent = this.closest(".step");

//         //get the closest parent element with the class question, so it only fires for specific questions
//         const questionParent = this.closest(".question");
//         const nextStep = stepParent.nextElementSibling;
//         if (!nextStep) return;


//         // jump to 1c
//         const goTo1c = document.querySelectorAll(".goTo1c")
//         const question1c = document.querySelector(".question1c")
//         const question1cParent = question1c.closest(".step");

//         // Check if the radio button that changes has the class .goToNextStep. If so, remove the class hidden
//         const goNextRadio = questionParent.querySelector(".goToNextStep");
//         if (goNextRadio.checked) {
//             nextStep.classList.remove("hidden");
//             console.log("remove Class");
//         } else {
//             goTo1c.forEach(question1cradio => {
//                 if (question1cradio.checked) {
//                     question1cParent.classList.remove("hidden");
//                     console.log("remove Class");
//                 } else if(!goNextRadio.checked) {
//                     nextStep.classList.remove("hidden");
//                     console.log("add Class");
//                 }

//             })
//         }

//     });
// });

        














// // // if nee checked dan check de class, skip to 1c etc


// // // alle inputs hebben attribuut required

// // // if display none then input unchecked 

