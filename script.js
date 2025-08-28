
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountElement = document.getElementById("copy-count");


let totalCount = parseInt(copyCountElement.innerText);


for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function(e){
        e.preventDefault();

        const card = copyButtons[i].closest('div.bg-white');

        const cardHeader = card.querySelector('h1').innerText;

        alert(` ${cardHeader}`);
        totalCount += 1;
        copyCountElement.innerText = totalCount;
    });
}

const heartIcons = document.querySelectorAll(".heart-icon");

const heartIconCount = document.getElementById("heart-icon-count");

let heartCount = parseInt(heartIconCount.innerText);

for (let i = 0; i < heartIcons.length; i++) {
    heartIcons[i].addEventListener("click", function (e) {
        e.preventDefault();
        heartCount=heartCount+1;
        heartIconCount.innerText = heartCount;
    });
}

