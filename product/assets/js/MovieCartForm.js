
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
    var avaquantity = document.getElementById("Avaquantity").value;//Takes the Quantity of Avatar Movies Value From The Form.
    var revquantity = document.getElementById("Revquantity").value;//Takes the Quantity of Revenent Movies Value From The Form.
    var tsrquantity = document.getElementById("Tsrquantity").value;//Takes the Quantity of The Shawshank Redemption Movies Value From The Form.
    var lorquantity = document.getElementById("Lorquantity").value;//Takes Lords of The Rings Value From The Form.
    var abtquantity = document.getElementById("Abtquantity").value;//Takes About time Value From The Form.
    var fquantity = document.getElementById("Fquantity").value;//Takes Fury Value From The Form.

     

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
const avatar = 1000;
const revenent =800;
const  shawshankredemption =750;
const lordOfTheRings = 1500; 
const aboutTime = 950; 
const fury =  450;

const movieList=[avaquantity,revquantity,tsrquantity,lorquantity,abtquantity,fquantity];

//Finding The Price For Each Movie According To The Quantity That User Entered
const avatarPrice = avatar * avaquantity;
const revenentPrice = revenent *revquantity;
const shRedemptionPrice =shawshankredemption * tsrquantity;
const lotPrice =lordOfTheRings*lorquantity;
const aTimePrice=aboutTime*abtquantity;
const furyPrice =fury *fquantity;

//Takes The FinalPrice of The Items
const finalPrice =(avatarPrice+revenentPrice+shRedemptionPrice+lotPrice+aTimePrice+furyPrice);

//Creating An Alert Message variable
const summary = `Dear ${firstName} ${lastName}, 
You have ordered ${avaquantity} Avatar Movie(s) at a cost of £${avatarPrice},
${revquantity} Revenant Movie(s) at a cost of £${revenentPrice},
${tsrquantity} Shawshank Redemption Movie(s) at a cost of £${shRedemptionPrice},
${lorquantity} Lord of the Rings Movie(s) at a cost of £${lotPrice},
${abtquantity} About Time Movie(s) at a cost of £${aTimePrice},
${fquantity} Fury Movie(s) at a cost of £${furyPrice}.
Your total bill is £${finalPrice}.
Thank You For Shooping With CINEMAHIVE`;

//Display The Summary After User Entered Submit
alert(summary);



}
