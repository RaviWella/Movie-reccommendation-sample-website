let iconCart=document.querySelector('.iconcart');// Selects and puts in the variable "iconCart" the DOM element with the "iconcart" class.
let close = document.querySelector('.close');//Selects and puts in the variable "close" the DOM element with the "close" class
let list = document.querySelector ('.list');//Selects and puts in the variable "list" the DOM element with the "list" class
let card = document.querySelector('.card');//Selects and puts in the variable "card" the DOM element with the "card" class
let listCard = document.querySelector('.listCard');//Selects and puts in the variable "listCard" the DOM element with the "listCard" class
let body = document.querySelector('body');//Selects and puts in the variable "body" the DOM element with the "body" .
let total = document.querySelector('.total');//Selects and puts in the variable "total" the DOM element with the "total" class
let quantity = document.querySelector('.quantity');//Selects and puts in the variable "quantity" the DOM element with the "quantity" class
let containerCart =document.querySelector('.containerCart')//Selects and puts in the variable "containerCart" the DOM element with the "containerCart" class

iconCart.addEventListener('click', ()=>{ // Adds a click event listener to the "iconCart" element
    if(card.style.right =='-100%'){ // Checks if the "card" is currently hidden (right: -100%)
        card.style.right='0';
        containerCart.style.transform ='translateX(-400px)';//If hidden, shows the "card" by setting right: 0 and slides the "containerCart" to the left
    } else{
        card.style.right ='-100%';
        containerCart.style.transform ='translateX(0)';// If already shown, hides the "card" by setting right: -100% and slides the "containerCart" back to the right
    }
})
close.addEventListener('click', ()=>{
    card.style.right ='-100%';
    containerCart.style.transform ='translateX(0)';//// Hides the "card" by setting right: -100% and slides the "containerCart" back to the right
})


let products = [ //Creating a products Array
    {
        id: 1,
        name: 'Avatar: The Way of Water',
        image: '1.jpg',
        price:1000
    },
    {
        id: 2,
        name: 'The Revenant',
        image: '2.jpg',
        price:800
    },
    {
        id: 3,
        name: 'The Shawshank Redemption',
        image: '3.jpg',
        price:750
    },
    {
        id: 4,
        name: 'The Lord of the Rings',
        image: '4.jpg',
        price:1500
    },
    {
        id: 5,
        name: 'About Time',
        image: '5.jpg',
        price:950
    },
    {
        id: 6,
        name: 'Fury',
        image: '6.jpg',
        price:650
    }

];
let listCards =[];// An empty array to store the list of cards
function initApp(){
    products.forEach((value, key)=>{// Loop through each product in the "products" array
        let newDiv = document.createElement('div'); // Add the "item" class to the newly created div
        newDiv.classList.add('item');
        // // Populate the new div with product information using template literals
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);//Append new div to the list
    }) 
}

initApp();
function addToCard(key){ // Function to add a product to the shopping cart based on its key/index
    if (listCards[key] == null){ //In the listCards array, determine whether the item with the specified key or index already exists.

        listCards[key] ={// If the product does not exist in the cart, add it as a new entry in the listCards array
            ...products[key],// copy all the properties from the products array
            quantity: 1, //set the initial quantity of the product in the cart to 1
            price: products[key].price // Set the price of the product in the cart to the original product price
        };
    } else {
        listCards[key].quantity++;// If the product already exists in the cart, increment its quantity by 1
    }
    reloadCard();
}


function reloadCard(){ 
    // Function to reload the shopping cart and update its content
    listCard.innerHTML =''; 
    // Variables to keep track of the total quantity and total price in the shopping cart 
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key)=>{
        // Loop through each item in the listCards array
        
        if (value != null){ // Check if the item is not null (exists in the cart)
            totalPrice = totalPrice + value.price; // Update the total price by adding the product price multiplied by its quantity
            count = count +value.quantity;// // Update the total quantity by adding the product quantity

            let newDiv = document.createElement('li'); // Create a new list item (li) to represent the product in the cart
            newDiv.innerHTML = `
                <div><img src="image/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                
            listCard.appendChild(newDiv);// Append the new list item to the listCard element
        }
          
    });
    total.innerText = totalPrice.toLocaleString();//update the total and quantity displayed in cart
    quantity.innerText = count;
} 

function changeQuantity(key, quantity){//// Function to change the quantity of a product in the shopping cart
    if (quantity == 0){//// Check if the desired quantity is 0

        const itemPrice = listCards[key].price;// Retrieve the price of the product at the specified key/index in the cart

        delete listCards[key];// Remove the product from the cart by deleting its entry in the listCards array

        total.innerText = (parseInt(total.innerText.replace(/,/g, "")) - itemPrice).toLocaleString(); // Update the total price in the cart by subtracting the price of the removed item
    } else {
        listCards[key].quantity = quantity;//// If the desired quantity is greater than 0, update the product's quantity and price in the cart
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();// Call the reloadCard function to update the shopping cart's display
}


const increaseButton = document.getElementById("increaseFontButton");// Select the button element with the id "increaseFontButton" and store it in the variable "increaseButton"
const decreaseButton = document.getElementById("decreaseFontButton");// Select the button element with the id "decreaseFontButton" and store it in the variable "decreaseButton"
const bodyElement = document.body;
// Select the <body> element and store it in the variable "bodyElement"
const headings = document.getElementsByTagName("h1");// Select all elements with the tag name "h1" and store them in the variable "headings"
list = document.querySelector(".list");// Select the element with the class "list" and store it in the variable "list"
const cardList = document.querySelector(".listCard"); // Select the element with the class "listCard" and store it in the variable "cardList"

// Define the font size change amount
const fontSizeChange = 2;
const minfontsize = 8; //Creating minimum font Size


increaseButton.addEventListener("click", () => {
  // Increase the body font size
  bodyElement.style.fontSize = parseInt(getComputedStyle(bodyElement).fontSize) + fontSizeChange + "px";
  // Increase the heading font size
  for (let i = 0; i < headings.length; i++) {
    headings[i].style.fontSize = parseInt(getComputedStyle(headings[i]).fontSize) + fontSizeChange + "px";
  }
  // Increase the list font size
  list.style.fontSize = parseInt(getComputedStyle(list).fontSize) + fontSizeChange + "px";
  // Increase the listCard font size
  cardList.style.fontSize = parseInt(getComputedStyle(cardList).fontSize) + fontSizeChange + "px"; 
});




decreaseButton.addEventListener("click", () => {
  // Calculate the new body font size
  const newBodyFontSize = parseInt(getComputedStyle(bodyElement).fontSize) - fontSizeChange;
  // Prevent decreasing font size below the minimum allowed size
  if (newBodyFontSize >= minfontsize) {
    // Decrease the body font size
    bodyElement.style.fontSize = newBodyFontSize + "px";
    // Decrease the heading font size
    for (let i = 0; i < headings.length; i++) {
      const newHeadingFontSize = parseInt(getComputedStyle(headings[i]).fontSize) - fontSizeChange;
      // Prevent decreasing heading font size below the minimum allowed size
      if (newHeadingFontSize >= minfontsize) {
        headings[i].style.fontSize = newHeadingFontSize + "px";
      }
    }
    // Decrease the list font size
    const newListFontSize = parseInt(getComputedStyle(list).fontSize) - fontSizeChange;
    // Prevent decreasing list font size below the minimum allowed size
    if (newListFontSize >= minfontsize) {
      list.style.fontSize = newListFontSize + "px";
    }
    // Decrease the listCard font size
    const newCardListFontSize = parseInt(getComputedStyle(cardList).fontSize) - fontSizeChange;
    // Prevent decreasing listCard font size below the minimum allowed size
    if (newCardListFontSize >= minfontsize) {
      cardList.style.fontSize = newCardListFontSize + "px";
    }
  }
});

