let about = document.querySelector(".about");
let home = document.querySelector(".home");
let contact = document.querySelector(".contact");

let para1 = document.querySelector(".para1");
let para2 = document.querySelector(".para2");
let para3 = document.querySelector(".para3");

let tabs = document.querySelectorAll(".tab");

tabs.forEach(function (val) {
  val.addEventListener("click", function (elem) {
    para1.style.display = "none";
    para2.style.display = "none";
    para3.style.display = "none";

    if (val.classList.contains("home")) {
      para1.style.display = "block";
    } else if (val.classList.contains("about")) {
      para2.style.display = "block";
    } else if (val.classList.contains("contact")) {
      para3.style.display = "block";
    } else {
      para1.style.display = "none";
    }
  });
});

// let array=[1,2,3,4,5,6,7,8,9,10];

// let array2=array.map(function(val){

// return val;
// })

// console.log(array2);

// Filter:

// let array=[1,2,3,4,5,6,7,8,9,10];

// let array2=array.filter(function(val){

//     return val >3;

// })

// console.log(array2);

// let array=[80,70,50,90,92,80];

// let newArray=array.filter(function(val){

//     return val >=90;

// })

// console.log('You are a toppper as you got the '+newArray+'Marks');

// let h1=document.querySelector('h1');

// console.log(h1.setAttribute('name','TitleTag'));

// let container=document.querySelector('.Container')

// let newBtn=document.createElement('button');

// newBtn.innerText='Submit';

// container.after(newBtn);

// let newBtn=document.createElement('h1');
// newBtn.innerText='Im a heading'

// // container.append(newBtn);

// // container.prepend(newBtn);

// // container.before(newBtn);

// container.after(newBtn)

// let h1=document.querySelector('h1').remove();

//Q1:

// let para=document.querySelector('#content');

// para.classList.add('newClass');

// para.classList.remove('newClass');

// para.style.color='white'

// para.setAttribute('class','newClass')

// let newBtn=document.createElement('button');
// newBtn.innerText='Click Me'
// newBtn.style.backgroundColor='red'
// newBtn.style.color='white'

// document.querySelector('body').append(newBtn)
