
function ValidateMessage() {
    alert("Thank you for submitting the form!");
}

function ValidateMessage() {
    var firstName = document.getElementById("firstname").value; //Takes First Name Value From The Form.
    var lastName = document.getElementById("lastname").value;//Takes Last Name Value From The Form.
    var email = document.getElementById("email").value;//Takes Email Value From The Form.
    var telNo = document.getElementById("Telno").value;//Takes Telephone Number Value From The Form.
    var address= document.getElementById("address").value;//Takes Address Value From The Form.
    var cardName = document.getElementById("cardname").value;//Takes Card Name Value From The Form.
    var cardNumber = document.getElementById("cardnumber").value;//Takes Card Number Value From The Form.
    var expYear = document.getElementById("expyear").value;//Takes Exp Year Value From The Form.
    var demquantity = document.getElementById("pro1quantity").value;//Takes the Quantity of Demon Slayers Comics Value From The Form.
    var alpquantity = document.getElementById("pro2quantity").value;//Takes the Quantity of Alpha Flight Comics Value From The Form.
    var avenquantity = document.getElementById("pro3quantity").value;//Takes the Quantity of The Avengers Comics Value From The Form.
    var wolquantity = document.getElementById("pro4quantity").value;//Takes Wolverine Value From The Form.
    var marquantity = document.getElementById("pro5quantity").value;//Takes Marvel Secret Wars Value From The Form.
    var jlquantity = document.getElementById("pro6quantity").value;//Takes Justice league Value From The Form.

     

     // Validate required fields 
    if (firstName === "" || lastName === "" || email === "" || cardName === "") {
        alert("Please fill in all required fields.");
        return ;
    }

    if (firstName == "" || !/^[a-zA-Z]+$/.test(firstName)) {
        alert("Please enter a valid first name");
        return false;
    }

    if (lastName == "" || !/^[a-zA-Z]+$/.test(lastName)) {
        alert("Please enter a valid last name");
        return false;
    }

    if (email == "" || !/^\S+@\S+\.\S+$/.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }
    //Tpno must contains 10 digits
    if (telNo== "" || !/^\d{10}$/.test(telNo)) {
        alert("Please enter a valid telephone number");
        return false;
    }

    if (address == "") {
        alert("Please enter a valid delivery address");
        return false;
    }
    
    if (cardName == "" || !/^[a-zA-Z\s]+$/.test(cardName)) {
        alert("Please enter a valid name on card");
        return false;
    }
    // Card number must contains of 16 digits
    if (cardNumber == "" || !/^\d{16}$/.test(cardNumber)) {
        alert("Please enter a valid card number");
        return false;
    }
    // The respevtive month should be shown in two digits and year in four digits
    if (expYear == "" || !/^(0[1-9]|1[0-2])\/\d{4}$/.test(expYear)) {
        alert("Please enter a valid expiry date (mm/yyyy)");
        return false;
    }
//Creating the prices for Each Movie    
const demonSlayer = 1000;
const alphaFlight =800;
const  Avengers =750;
const wolverine = 900; 
const secretWars = 950; 
const jl =  1350;



//Finding The Price For Each Movie According To The Quantity That User Entered
const demonPrice = demonSlayer * demquantity;
const alphaPrice = alphaFlight *alpquantity;
const avgPrice =Avengers * avenquantity;
const wolPrice =wolverine*wolquantity;
const marvelPrice=secretWars*marquantity;
const jlPrice =jl *jlquantity;

//Takes The FinalPrice of The Items
const finalPrice =(demonPrice+alphaPrice+avgPrice+wolPrice+marvelPrice+jlPrice);

//Creating An Alert Message variable
const summary = `Dear ${firstName} ${lastName}, 
You have ordered ${demquantity} Demon Slayer Comics at a cost of £${demonPrice},
${alpquantity} Alpha Flight Comics at a cost of £${alphaPrice},
${avenquantity}The Avengers Comics at a cost of £${avgPrice},
${wolquantity} The Wolverine at a cost of £${wolPrice},
${marvelPrice} Marvel Secret Wars  at a cost of £${marvelPrice},
${jlquantity} Justice League America Comics at a cost of £${jlPrice}.
Your total bill is £${finalPrice}.
Thank You For Shooping With CINEMAHIVE`;

//Display The Summary After User Entered Submit
alert(summary);



}
