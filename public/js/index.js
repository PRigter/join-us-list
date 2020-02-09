
console.log("Hi from Index JS")

const form = $(".lead-form")
const submitBtn = $("#submit-button")
const joinBtn = $("#submit-btn")
const warningMsg = $("#reg-warning")
const warningModal = $("#demoModal")

submitBtn.prop("disabled", true)

// OQuando pagina Error Carregar --> Abrir automaticamente um MODAL
$(window).on("load", function() {
    $("#errorModal").modal("show");
})


// REGEX
const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

// Validation Function - Regex + Add Classes to Element + Waring Msg + Inactive/Active Button
function validate(input, regex) {
    const result = regex.test(input)

    if(result) {
        form.removeClass("invalid")
        form.addClass("valid")
        submitBtn.prop("disabled", false)
        warningMsg.fadeOut(800)
        joinBtn.prop("disabled", false)
        
    } else {
        joinBtn.prop("disabled", true)
        form.removeClass("valid")
        form.addClass("invalid")
        warningMsg.fadeIn(800)
    }
}


// For every pressed key -> Checks the input and call's the Validation Function
    form.keyup(function() {
        const inputValue = form.val()    
        validate(inputValue, regexEmail)
    })


// Disable Auto Complete From Browser
// It stops the browser saving field data for later autocompletion 
$(document).ready(function() {
    $(":input").attr("autocomplete","off");
});


// Checks for JQuery
if (typeof jQuery == "undefined") {
    console.log("JQuery is not installed")
} else {
    console.log("JQuery is here")
}