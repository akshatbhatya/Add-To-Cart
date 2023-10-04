let product = [{
    id: 1,
    name: 'iphone',
    img: "",
    desc: "",
    category: "Phone",
    price: 100
},
{
    id: 2,
    name: 'galaxy',
    img: "",
    desc: "",
    category: "Phone",
    price: 100
}, {
    id: 3,
    name: 'acer',
    img: "",
    desc: "",
    category: "laptop",
    price: 100
},
{
    id: 4,
    name: 'jbl',
    img: "",
    desc: "",
    category: "speaker",
    price: 100
},
{
    id: 5,
    name: 'oneplus',
    img: "",
    desc: "",
    category: "phone",
    price: 100,
},
{
    id: 6,
    name: 't-shirt',
    img: "",
    desc: "",
    category: "cloth",
    price: 100,
},
{
    id: 7,
    name: 'jean',
    img: "",
    desc: "",
    category: "cloth",
    price: 100,
},
{
    id: 8,
    name: 'asus',
    img: "",
    desc: "",
    category: "laptop",
    price: 100,
},
{
    id: 9,
    name: 'dell',
    img: "",
    desc: "",
    category: "laptop",
    price: 100,
},
{
    id: 10,
    name: 'addidas',
    img: "",
    desc: "",
    category: "shoes",
    price: 100,
},
{
    id: 11,
    name: 'asian',
    img: "",
    desc: "",
    category: "shoes",
    price: 100,
},
{
    id: 12,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 13,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 14,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 15,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 16,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 17,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 18,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 19,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 20,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},
{
    id: 21,
    name: 'iphone',
    img: "",
    desc: "",
    category: "",
    price: 100,
},]

// varibles 

let label = document.querySelector('#label');
let shopingcart = document.querySelector('#shoping-cart')

let basket = JSON.parse(localStorage.getItem("data")) || [];

function calclation() {
    let coterofitems = document.querySelector('#innercount')
    coterofitems.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);

}
calclation()

let generatecarditems = () => {
    if (basket.length !== 0) {
        let data = basket.map((x) => {
            let { id, item } = x;

            let checkBasket = product.find(x => (x.id == id));
            let { category, desc, name, img, price } = checkBasket
            return `<div class="cardofcart">
                <div class="imgofproduct">
                    <img src="/Add-To-Cart/images/car.jpg" class="imagesize" alt="" srcset="">
                </div>
                <div class="details">
                    <div class="title-price-x">
                        <h4 class="title-price">
                        <p>${name}</p>
                        <p class="priceofproduct">&#8377 ${price}</p>
                        </h4>
                        <i onclick="removeItem(${id})" class="bi bi-x-lg cross"></i>
                    </div>
                    <div class="cart-buttons">
                        <div class="productselectionbtn" style="display:flex;gap:8px">
                            <span onclick="incriment(${id})"><i class="bi bi-patch-plus icon"></i></span>
                            <span id=${id}>${item}</span>
                            <span onclick="decrement(${id})" ><i class="bi bi-patch-minus icon" class="icon"></i></span>
                        </div>
                    
                    </div>
                    <h3>&#8377 ${price * item}</h3>
                </div>
        </div>`
        }).join(' ');
        shopingcart.innerHTML = data;
    }
    else {
        shopingcart.innerHTML = " "
        label.innerHTML = `
        <h2 class="para">Card Is Empty</h2>
        <div class="buttonsofcart">
            <a href="index.html">
                <button>go back to home</button>
            </a>
        </div>
        `
    }
}
generatecarditems();



function incriment(id) {
    let search = basket.find(x => x.id === id)
    if (search == undefined) {
        basket.push({
            id: id,
            item: 1
        })
    }
    else {
        search.item += 1;
    }
    generatecarditems();
    localStorage.setItem("data", JSON.stringify(basket));
    update(id)
}


function decrement(id) {
    let search = basket.find(x => x.id === id)
    if (search == undefined) return
    else {
        if (search.item === 0) return
        search.item -= 1;
    }

    update(id)
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
    generatecarditems();
    calclation();
}


function update(id) {
    let search = basket.find(x => x.id === id);
    let data = search.item;

    let innerdata = document.getElementById(id);

    innerdata.innerHTML = data;
    calclation();
    totalAmount();
}

let removeItem = (id) => {
    let newresponse = basket.find((x) => x.id === id)
    newresponse.item = 0;
    basket = basket.filter((x) => x.item !== 0);
    localStorage.setItem("data", JSON.stringify(basket));
    generatecarditems();
    totalAmount();
    calclation();
}

let totalAmount = () => {
    if (basket !== 0) {
        let totalProductPrice = basket.map((x) => {
            let { id, item } = x;
            let search = product.find(x => x.id == id);
            let { price, name } = search;
            return item * price;

        }).reduce((x, y) => x + y, 0);
        label.innerHTML = `<h2>Total Amount Is :&#8377 ${totalProductPrice}</h2>
        <div class=btns>
        <a href="index.html">
        <button  class="checkout" >Checkout</button>
        </a>
           <button onclick="clearbasket()" class="clearcart">Clear Cart</button>
        </div>
        `;
        generatecarditems();
    }
    else return
}
totalAmount();

let clearbasket = () => {
    basket = [];
    generatecarditems();
    calclation();
    localStorage.setItem("data", JSON.stringify(basket));
}