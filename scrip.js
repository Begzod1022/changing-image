// //selectors, atributes, events, innertext, innnerHTML, claasList, style

// // ========= Selectror ========

// // const headings = document.getElementsByTagName('h1'); 
// // const headings = document.getElementsByClassName('text');
// // console.log(headings);
// // const heading = document.getElementById('text-one');
// // console.log(heading);

// // const heading = document.querySelector('h1');
// // const headings = document.querySelectorAll('h1');
// // const text = document.querySelector('.text');
// // const texts = document.querySelectorAll('.text');

// // console.log(heading);
// // console.log(headings);
// // console.log(text);
// // console.log(texts);

// // innerHTML, innerText
// const text = document.querySelector('h1')

// console.log(text.innerHTML);

// text.innerHTML = 'Hello <i>World</i>';
// text.innerHTML = 'Hello <a href="">World</a>';

// console.log(text.innerText);

// text.innerText = 'Hello <i>World</i>';
// text.innerText = 'Hello <a href="">World</a>';

// // classList, style

// //attributes and events

// const input = document.querySelector('input');
// const button = document.querySelector('button');

// console.log(input.getAttribute('type'));
// input.setAttribute('type', 'text')
// input.setAttribute('type', 'number')
// input.setAttribute('type', 'password')

// button.onclick = () => {
//     if (button.innerHTML === 'show') {
//         input.setAttribute('type', 'text')
//         button.innerHTML = 'hide'
//     }
//     else {
//         input.setAttribute('type', 'password')
//         button.innerHTML = 'show'
//     }
// }

const img = document.querySelector('image')
const button = document.querySelector('button')

function changeImage() {
    const img = document.getElementById('image') 
    img.src = "/images/2.jpg"
}

function changeImage2() {
    const img = document.getElementById('image') 
    img.src = "/image/3.jpg"
}

function changeImage3() {
    const img = document.getElementById('image') 
    img.src = "/images/4.jpg"
}

function changeImage4() {
    const img = document.getElementById('image') 
    img.src = "/images/5.jpg"
}