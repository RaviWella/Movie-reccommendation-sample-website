
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
    var carsquantity = document.getElementById("pro1quantity").value;//Takes the Quantity of Cars Movie Collection Value From The Form.
    var dequantity = document.getElementById("pro2quantity").value;//Takes the Quantity of Deadpool Figure Value From The Form.
    var batrquantity = document.getElementById("pro3quantity").value;//Takes the Quantity of The Batman Value From The Form.
    var herquantity = document.getElementById("por4quantity").value;//Takes Hermione Figure Value From The Form.
    var hboxquantity = document.getElementById("por5quantity").value;//Takes Horror box Value From The Form.
    
     

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
const cars = 1000;
const deadpoolFigure =800;
const  batman =750;
const hermione = 900; 
const moviebox = 950; 


//Finding The Price For Each Movie According To The Quantity That User Entered
const carsPrice = cars * carsquantity;
const deadpoolPrice = deadpoolFigure*dequantity;
const batmanPrice =batman * batrquantity;
const hermionePrice =hermione*herquantity;
const horrormoviePrice=moviebox*hboxquantity;


//Takes The FinalPrice of The Items
const finalPrice =(carsPrice+deadpoolPrice+batmanPrice+hermionePrice+horrormoviePrice);

//Creating An Alert Message variable
const summary = `Dear ${firstName} ${lastName}, 
You have ordered ${carsquantity} Cars Movie Collection(s) at a cost of £${carsPrice},
${dequantity} Deadpool Figure(s) at a cost of £${deadpoolPrice},
${batrquantity} Batman Figure(s) at a cost of £${batmanPrice},
${herquantity} Hermoine Figure(s) at a cost of £${hermionePrice},
${hboxquantity} Horror Movie Box(s) at a cost of £${horrormoviePrice},
Your total bill is £${finalPrice}.
Thank You For Shooping With CINEMAHIVE`;

//Display The Summary After User Entered Submit
alert(summary);



}
