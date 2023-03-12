'use strict';

// let nika = document.querySelectorAll('.items');
// let nikz = document.querySelectorAll('.ingredients');
// let i = 1;
// let j;

// function describe(){
//     for(j = 0; j < nikz.length; j++){
//     nikz[j].classList.toggle('hidden');
//     }
//     console.log("zd");
// }

// for (i = 0; i < nika.length; i++){
//     nika[i].addEventListener('click', describe);
// }

let item1El = document.querySelector('.item--1');
let item2El = document.querySelector('.item--2');
let item3El = document.querySelector('.item--3');
let item4El = document.querySelector('.item--4');
let item5El = document.querySelector('.item--5');
let item6El = document.querySelector('.item--6');
let item7El = document.querySelector('.item--7');
let item8El = document.querySelector('.item--8');

let desc1El = document.querySelector('.desc--1');
let desc2El = document.querySelector('.desc--2');
let desc3El = document.querySelector('.desc--3');
let desc4El = document.querySelector('.desc--4');
let desc5El = document.querySelector('.desc--5');
let desc6El = document.querySelector('.desc--6');
let desc7El = document.querySelector('.desc--7');
let desc8El = document.querySelector('.desc--8');


item1El.addEventListener('mouseenter', () =>{
    desc1El.classList.remove('hidden');
})
item2El.addEventListener('mouseenter', () =>{
    desc2El.classList.remove('hidden');
})
item3El.addEventListener('mouseenter', () =>{
    desc3El.classList.remove('hidden');
})
item4El.addEventListener('mouseenter', () =>{
    desc4El.classList.remove('hidden');
})
item5El.addEventListener('mouseenter', () =>{
    desc5El.classList.remove('hidden');
})
item6El.addEventListener('mouseenter', () =>{
    desc6El.classList.remove('hidden');
})
item7El.addEventListener('mouseenter', () =>{
    desc7El.classList.remove('hidden');
})
item8El.addEventListener('mouseenter', () =>{
    desc8El.classList.remove('hidden');
})


item1El.addEventListener('mouseleave', () =>{
    desc1El.classList.add('hidden');
})
item2El.addEventListener('mouseleave', () =>{
    desc2El.classList.add('hidden');
})
item3El.addEventListener('mouseleave', () =>{
    desc3El.classList.add('hidden');
})
item4El.addEventListener('mouseleave', () =>{
    desc4El.classList.add('hidden');
})
item5El.addEventListener('mouseleave', () =>{
    desc5El.classList.add('hidden');
})
item6El.addEventListener('mouseleave', () =>{
    desc6El.classList.add('hidden');
})
item7El.addEventListener('mouseleave', () =>{
    desc7El.classList.add('hidden');
})
item8El.addEventListener('mouseleave', () =>{
    desc8El.classList.add('hidden');
})
