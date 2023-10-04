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
//  store variables
let sliderimg = document.querySelectorAll('.sliderimg');

let sectionofcard = document.querySelector('.sectionofcard');

let basket = JSON.parse(localStorage.getItem("data")) || [];


let counter = 0;

sliderimg.forEach((slide, index) => {
    slide.style.left = `${index * 100}%`

})

// to transform image 
function slidenow() {
    sliderimg.forEach((slide) => {
        slide.style.transform = `translateX(-${counter * 100}%)`;
    })
}

//  to start slider
function startslide() {
    counter++;
    if (counter == sliderimg.length) {
        counter = 0;
    }
    slidenow()

}

//  Used for Slide Images as a set time
setInterval(() => {
    startslide();
}, 3000);

//  to load content when dom is loaded

window.addEventListener("DOMContentLoaded", (e) => {
    e.preventDefault();
    ourproducts(product);
    buttons();
    calclation();
})

// using map to add all product data to web

function ourproducts(items) {
    let ourdata = items.map(x => {
        let { id, desc, name, price } = x
        let search = basket.find((x) => x.id == id)
        return `<div class="card" id=product-id-${id}>
        <div class="img">
            <img src="/Add-To-Cart/images/car.jpg" alt="" class="productimg">
        </div>
        
        <h2 style="text-align: center;color:white">${name}</h2>
        <h3>${desc}</h3>
        <div class="cardspecs">
        <h5 style="font-weight:500;font-size:16px">&#8377 ${price}</h5>
        <div class="productselectionbtn" style="display:flex;gap:8px">
          <span onclick="incriment(${id})"><i class="bi bi-patch-plus icon"></i></span>
          <span id=${id}>${search == undefined ? 0 : search.item}</span>
          <span onclick="decrement(${id})" ><i class="bi bi-patch-minus icon" class="icon"></i></span>
        </div>
        </div>
    </div>`
    }).join(' ')
    sectionofcard.innerHTML = ourdata;

}

// to remove duplicate category name using reduce and create a button and apply filter method to  show data by button name
function buttons() {
    let btns = product.reduce((values, items) => {
        if (!values.includes(items.category)) {
            values.push(items.category)

        }
        return values
    }, ['all'])

    let categorybtn = document.querySelector('.categorybtn');
    const buttons = btns.map(x => {
        return `<button data-name="${x}" class="btn">${x}</button>`
    }).join(' ')
    categorybtn.innerHTML = buttons;


    let buttonsname = document.querySelectorAll('.btn');
    buttonsname.forEach(btn => {
        btn.addEventListener('click', () => {

            let buttondata = btn.dataset.name;
            if (buttondata == "all") {
                ourproducts(product)
            }
            else {
                let toseechoise = product.filter(x => (x.category === buttondata))
                ourproducts(toseechoise);
            }

        })
    }


    )
}



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
    calclation();
}


function update(id) {
    let search = basket.find(x => x.id === id);
    let data = search.item;

    let innerdata = document.getElementById(id);

    innerdata.innerHTML = data;
    calclation();
}

let productcalc = document.querySelector('#totalproduct');


function calclation() {
    let coterofitems = document.querySelector('#innercount')
    coterofitems.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);

}
