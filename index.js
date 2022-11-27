const reviews = [
    {
        id: 1,
        name:"1Prabhat lodhi",
        job:"web Developers",
        img: '11.webp',
        text: "444444Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsam est commodi possimus ipsa quam non nisi voluptates dolor. Non.",
    },
    {
        id: 2,
        name:"2Prabhat lodhi",
        job:"web Developers",
        img: '22.webp',
        text: "1111111Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsam est commodi possimus ipsa quam non nisi voluptates dolor. Non.",
    },
    {
        id: 3,
        name:"3Prabhat lodhi",
        job:"web Developers",
        img: '33.webp',
        text: "222222222Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsam est commodi possimus ipsa quam non nisi voluptates dolor. Non.",
    },
    {
        id: 4,
        name:"4Prabhat lodhi",
        job:"web Developers",
        img: '44.webp',
        text: "33333333Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum ipsam est commodi possimus ipsa quam non nisi voluptates dolor. Non.",
    },
];

const img = document.getElementById('person_img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev_btn');
const nextBtn = document.querySelector('.next_btn');
const randomBtn = document.querySelector('.random_btn');
const Btnall = document.querySelectorAll('.btn');
// const button_container = document.querySelector('.button_container');
// console.log(button_container)


//Set starting item
let currentItem = 0;


//load initial item
window.addEventListener('DOMContentLoaded', function(){
    showPerson(currentItem);
});

//function based on item

function showPerson (person){
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
};

nextBtn.addEventListener('click', function(){
    currentItem++
    if(currentItem > reviews.length -1){
        currentItem = 0;
    }
    showPerson(currentItem);
})

prevBtn.addEventListener('click', function(){
    currentItem--
  
    if(currentItem < 0){
        currentItem = reviews.length -1;
    }
    showPerson(currentItem);
})

randomBtn.addEventListener('click', function(){ 
    let currentItem = 0;
    currentItem = Math.floor(Math.random() * reviews.length);
    showPerson(currentItem);
})