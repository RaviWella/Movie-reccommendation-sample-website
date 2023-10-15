
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
    var ggquantity = document.getElementById("pro1quantity").value;//Takes the Quantity of Great Gatsby Books Value From The Form.
    var clubquantity = document.getElementById("pro2quantity").value;//Takes the Quantity of Fight Club Books Value From The Form.
    var fathertsrquantity = document.getElementById("pro3quantity").value;//Takes the Quantity of The Godfather Books Value From The Form.
    var tsslorquantity = document.getElementById("pro4quantity").value;//Takes Shawshank Redemption Books Value From The Form.
    var narabtquantity = document.getElementById("pro5quantity").value;//Takes Narnia Books Value From The Form.
    var harryquantity = document.getElementById("pro6quantity").value;//Takes Harry Potter Books Value From The Form.
    var gonequantity = document.getElementById("pro6quantity").value;//TakesGone Girl Books Value From The Form.
     

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
const greatGatsby = 1750;
const fightClub =1200;
const  godfather =1800;
const shawshankredemption = 2000; 
const narnia = 5000; 
const harrypotter =  7500;
const goneGirl =1500;


//Finding The Price For Each Movie According To The Quantity That User Entered
const ggPrice = greatGatsby *ggquantity ;
const fcPrice = fightClub *clubquantity;
const tgfPrice =godfather * fathertsrquantity;
const tssrPrice =shawshankredemption*tsslorquantity;
const narniaPrice=narnia*narabtquantity;
const harrypotterPrice =harrypotter *harryquantity;
const goneGirlPrice = goneGirl *gonequantity;

//Takes The FinalPrice of The Items
const finalPrice =(ggPrice+fcPrice+tgfPrice+tssrPrice+narniaPrice+harrypotterPrice+goneGirlPrice);

//Creating An Alert Message variable
const summary = `Dear ${firstName} ${lastName}, 
You have ordered ${ggquantity} Avatar Movie(s) at a cost of £${ggPrice},
${clubquantity} Revenant Movie(s) at a cost of £${fcPrice},
${fathertsrquantity} Shawshank Redemption Movie(s) at a cost of £${tgfPrice},
${tsslorquantity} Lord of the Rings Movie(s) at a cost of £${tssrPrice},
${narabtquantity} About Time Movie(s) at a cost of £${narniaPrice},
${harryquantity} Fury Movie(s) at a cost of £${harrypotterPrice},
${gonequantity} Gone Girl Books at a cost of £${goneGirlPrice}.
Your total bill is £${finalPrice}.
Thank You For Shooping With CINEMAHIVE`;

//Display The Summary After User Entered Submit
alert(summary);



}
