function validateForm(){
    let x = document.forms["feedback"]["name"].value;
    let y = document.forms["feedback"]["email"].value;
    let z = document.forms["feedback"]["rate"].value;
    let e = document.forms["feedback"]["message"].value;

    if (x==""){
        alert("name must be filled out")
        return false;
    }
    else if (y==""){
        alert("email must be filled out")
        return false;
    }
    else if (z == ""){
        alert("Please rate before you submit")
        return false;
    }
    else {
        alert("Hello " + x + " Thank you very much for your feedback. you have rated our site as " + z +" and your comment was " + e)
        return false;
    }
}