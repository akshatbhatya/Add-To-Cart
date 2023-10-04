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

let label=document.querySelector('#label');
let shopingcart=document.querySelector('#shoping-cart')

let basket = JSON.parse(localStorage.getItem("data")) || [];

function calclation() {
    let coterofitems = document.querySelector('#innercount')
    coterofitems.innerHTML = basket.map(x => x.item).reduce((x, y) => x + y, 0);

}
calclation()

let generatecarditems=()=>{
    if(basket.length !==0){
        let data=basket.map((x)=>{
            let {id,item}=x;

            let checkBasket=product.find(x=>(x.id==id));
            let {category,desc,name,img,price}=checkBasket
            return `<div class="cardofcart">
            <div class="imgofproduct">
                <img src="/Add-To-Cart/images/car.jpg" alt="" srcset="">
            </div>
            
            <div class="contentdisc">
                <h3>${name}</h3>
                <price>${price}</price>
            </div>
            </div>`
        }).join(' ');
        shopingcart.innerHTML=data;
        label.innerHTML=`card is not empty`
          }
    else{
        shopingcart.innerHTML=" "
        label.innerHTML=`
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