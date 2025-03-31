
const inputs = [...document.querySelectorAll(".item_form input")]
/**
 * @param {HTMLInputElement} input
 */
function handleInput(input){
    if(input.value.length > 0){
        if(input.value === " ") {
            input.value = ""
            input.classList.remove("active")
        }
        input.classList.add("active")
    }
    else input.classList.remove("active")
}

/**
 * @param {Array<HTMLInputElement>} array
 */
function addEvent(array){
    array.forEach((input) => {
        input.addEventListener("input", (e) => {
            handleInput(e.target)
        })
        input.addEventListener("mouseleave", (e) => {
            handleInput(e.target)
        })
    })
}

addEvent(inputs)

