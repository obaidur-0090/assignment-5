
const copyButtons = document.querySelectorAll('.copy-btn');
const copyCountElement = document.getElementById("copy-count");


let totalCount = parseInt(copyCountElement.innerText);


for (let i = 0; i < copyButtons.length; i++) {
    copyButtons[i].addEventListener("click", function (e) {
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
        heartCount = heartCount + 1;
        heartIconCount.innerText = heartCount;
    });
}

// call and history function

const callBtn = document.querySelectorAll(".call-btn");
const clearBtn = document.getElementById("clear-btn");
const coinCount = document.getElementById("coin-count")
let cointCountElement = parseInt(coinCount.innerText);

const historyContainer = document.querySelector(".history-div")


for (const callBtns of callBtn) {
    callBtns.addEventListener("click", function (e) {
        e.preventDefault();

        const call = callBtns.closest('.bg-white');
        const callh1 = call.querySelector("p").innerText;
        const callh1Number = call.querySelector(".h1tag").innerText;
        
        
        if (cointCountElement >= 20) {
            alert(`📞calling ${callh1} ${callh1Number}....`);
            cointCountElement = cointCountElement-20;
            coinCount.innerText= cointCountElement;

            const historyDiv = document.createElement("div");
            historyDiv.classList.add("mt-2",  "bg-gray-300", "p-5", "rounded-2xl", "flex", "justify-between", "items-center");

            const time = new Date();
            const currentTime = time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

            historyDiv.innerHTML = `
            <div>
                <h1 class="font-bold ">${callh1}</h1>
                <p>${callh1Number}</p>
            </div>
            <div>
                <p>${currentTime}</p>
            </div>
        `;

            historyContainer.appendChild(historyDiv);
        } else alert("❌তোমার পর্যাপ্ত পরিমাণ Coin নাই 🥺")



    });
}

// history delete function 

clearBtn.addEventListener("click", function () {

    const histories = historyContainer.querySelectorAll(".mt-2");
    histories.forEach((item, index) => {
            for( const itemRemove of histories){
                itemRemove.remove();
            }
    });
});

// responsive menu button 

const showOption = document.getElementById("show-option")


document.getElementById("menu-btn").addEventListener("click", function(e){
    e.preventDefault();
 
    showOption.classList.toggle("hidden");

})