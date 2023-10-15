let iconCart=document.querySelector('.iconcart');
let close = document.querySelector('.close');
let list = document.querySelector ('.list');
let card = document.querySelector('.card');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');
let containerCart =document.querySelector('.containerCart')

iconCart.addEventListener('click', ()=>{
    if(card.style.right =='-100%'){
        card.style.right='0';
        containerCart.style.transform ='translateX(-400px)';
    } else{
        card.style.right ='-100%';
        containerCart.style.transform ='translateX(0)';
    }
})
close.addEventListener('click', ()=>{
    card.style.right ='-100%';
    containerCart.style.transform ='translateX(0)';
})


let products = [
    {
        id: 20,
        name: 'Cars movie collection',
        image: '20.jpg',
        price:1000
    },
    {
        id: 21,
        name: 'Deadpool Figure',
        image: '21.jpg',
        price:800
    },
    {
        id: 22,
        name: 'Batman Figure',
        image: '22.jpg',
        price:750
    },
    {
        id: 23,
        name: 'Hermoine Figure',
        image: '23.jpg',
        price:900
    },
    {
        id: 24,
        name: 'Horror Movie Box',
        image: '24.jpg',
        price:950
    },
];
let listCards =[];
function initApp(){
    products.forEach((value, key)=>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Cart</button>`;
        list.appendChild(newDiv);
    }) 
}

initApp();
function addToCard(key){
    if (listCards[key] == null){
        listCards[key] ={
            ...products[key],
            quantity: 1,
            price: products[key].price
        };
    } else {
        listCards[key].quantity++;
    }
    reloadCard();
}


function reloadCard(){
    listCard.innerHTML ='';  
    let count = 0;
    let totalPrice = 0;

    listCards.forEach((value, key)=>{
        
        if (value != null){
            totalPrice = totalPrice + value.price;
            count = count +value.quantity;

            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
              <div><img src="image/${value.image}"/></div>
              <div>${value.name}</div>
              <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
            
            listCard.appendChild(newDiv);
        }
          
    });
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
} 

function changeQuantity(key, quantity){
    if (quantity == 0){

        const itemPrice = listCards[key].price;

        delete listCards[key];

        total.innerText = (parseInt(total.innerText.replace(/,/g, "")) - itemPrice).toLocaleString();
    } else {
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}

// Get references to the buttons and the page elements to modify
const increaseButton = document.getElementById("increaseFontButton");
const decreaseButton = document.getElementById("decreaseFontButton");
const bodyElement = document.body;
const headings = document.getElementsByTagName("h1");
list = document.querySelector(".list");
const cardList = document.querySelector(".listCard"); // Renamed to cardList

// Define the font size change amount
const fontSizeChange = 2;
const minfontsize = 8;

// Handle the increase font size button click
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
  cardList.style.fontSize = parseInt(getComputedStyle(cardList).fontSize) + fontSizeChange + "px"; // Updated to cardList
});



// Handle the decrease font size button click
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

