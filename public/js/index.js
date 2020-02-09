
console.log("Hi from Index JS")

const form = $(".lead-form")
const submitBtn = $("#submit-button")
const joinBtn = $("#submit-btn")
const warningMsg = $("#reg-warning")
const warningModal = $("#demoModal")
// console.log(form)



submitBtn.prop("disabled", true)
joinBtn.prop("disabled", true)


const hideBtn = $("#hide")
const showBtn = $("#show")

hideBtn.click(function(event) {
    // $("#registration-warning").fadeOut(750)
    $("#warning").fadeOut(800)
    
})


showBtn.click(function(event) {
    $("#registration-warning").fadeIn(1000);
})


var input = ""

// console.log("log outside event" + input)

$(document).ready(function () {
    $("#main-form").submit(function(e) {

        // e.preventDefault()

        input = form.val()
        console.log(input)
    

        if (!input) {
            e.preventDefault()
            $("#demoModal").modal("show");
        } else {
            e.preventDefault()
            alert("Thank you!!")
        }

        // console.log("button pressed")
        // console.log(e)
        // console.log(input)
        
      
        // return false;
    })

})




// Quando pagina Error Carregar --> Abrir automaticamente um MODAL
$(window).on("load", function() {
    $("#errorModal").modal("show");
})



// $(document).ready(function() {
//     $("#submit-button").click(function (e) {
//         console.log("button pressed")
//         e.preventDefault()
//     })
// })




// $(".lead-form").click(function(e) {
//     e.preventDefault()

//     console.log(e.target.attributes.name.value)
//     console.log(inputVal)

// })


// $("#submit-button").click(function(e) {
     
//     e.preventDefault()
//     var input = form.val()
//     // console.log(input)
//     console.log(e.target.attributes)
// })




// function validate(form, regex) {
    
//     let input = parseInt($(event.target).val())
//     let selectForm = $(event.target)
//     // console.log(input)
//     console.log(selectForm)
//     console.log(typeof(input))
//     console.log(typeof(selectForm))

//     if(regex.test(input)) {
//         // console.log("valid")
//         selectForm.removeClass("invalid")
//         selectForm.addClass("valid")
//         console.log(selectForm.className)
//         console.log(form.className)

//     } else {
//         selectForm.removeClass("valid")
//         selectForm.addClass("invalid")
//         // console.log("invalid")
//         console.log(selectForm.className)
//         console.log(form.className)
//     }   
// }


// $("body").click(function(e) {
//     console.log(e.target)
// })


// REGEX

// var reg = /^\d{3}$/

// console.log(reg.test(123))

const regexPatterns = {
    email: /^[a-z]{3}$/i
}

const regexEmail = /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;


function validate(input, regex) {
    console.log(form)
    const result = regex.test(input)

    if(result) {
        console.log("good")
        form.removeClass("invalid")
        form.addClass("valid")
        console.log(form.attr("class"))
        submitBtn.prop("disabled", false)
        warningMsg.fadeOut(800)
        joinBtn.prop("disabled", false)
        
    } else {
        joinBtn.prop("disabled", true)
        console.log("not good")
        form.removeClass("valid")
        form.addClass("invalid")
        console.log(form.attr("class"))
        warningMsg.fadeIn(800)
    }
}


    form.keyup(function() {
        const inputValue = form.val()
        console.log(inputValue)
    
        validate(inputValue, regexEmail)
    })



    




// console.log(regexPatterns.telephone.test(1224))


// form.keyup(function(e) {
    
    
//     // var inp = form.val()
//     // console.log(inp)

//     // validate(inputValues, regexPatterns.telephone )
//     // console.log(e.target)
//     // console.log(inputValues)

    
//     console.log(e.target)
//     console.log(e.target.attributes.name)
//     // validate(form, regexPatterns.email)
//     validate(e.target.attributes.name, regexPatterns[e.target.attributes.name.value])
    

// })







// validate(number, regexPatterns.telephone)



// var number = 1200454878




// $(".lead-form").keyup(function (e) {
//     console.log(e.target.attributes.name.value)
//     console.log(inputVal)
// })


// function validate(field, regex) {
//     // console.log(regex.test(input))
//     if (regex.test(input.value)) {
//        input.className = "valid" 
//     } else  {
//         input.className = "invalid"
//     }
// }


// validate(regexPatterns.telephone)




// Disable Auto Complete From Browser
// It stops the browser saving field data for later autocompletion 
$(document).ready(function() {
    $(":input").attr("autocomplete","off");
});



if (typeof jQuery == "undefined") {
    console.log("JQuery is not installed")
} else {
    console.log("JQuery is here")
}