// let btns = document.querySelectorAll('.btn');
// btns.forEach(btn => {
//     btn.addEventListener('click', () => {
//         console.log(btn.innerHTML);
//     })
// })

let para=document.querySelector('p');
let data=[{
    id:1,
    name:'akshat'
},
{
    id:2,
    name:'aku'
},
{
    id:2,
    name:'akki'
},]

let ans=data.filter(x=>{
    if(x.id==1){
        return x
    }
})

console.log(ans);

let search=data.find((x)=>x.id==1)
para.innerHTML=(`the name of person is <strong><u>${search.name}</u></strong> is come from  the data`);