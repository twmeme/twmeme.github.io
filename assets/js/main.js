AOS.init();

document.querySelector(".menu-btn").addEventListener("click", function () {
    document.querySelector(".header_area").classList.toggle("active");
}); // Toggle Menu

document.querySelector("#cpyBtn").onclick = () => {
    const inputField = document.querySelector(".cpy-text").value;
    navigator.clipboard.writeText(inputField);
    document.querySelector(".address").classList.add("active");
    document.querySelector(".cpy-status").innerHTML = "Copied!:" + " ";
}; // Text copy 

document.querySelectorAll('.nav-link').forEach(navLink => {
    navLink.onclick = () => {
        document.querySelector(".header_area").classList.remove("active");
    }
}); // remove active class from Header if user click on navLink 


// # ============ FUll screen video Toggle ===========

document.querySelector(".full-scrn-ext-btn").onclick = () => {
    document.querySelector("#about").classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
}; // Exit full screen
document.querySelector(".vid-ply-btn").onclick = () => {
    document.querySelector("#about").classList.add("active");
    document.querySelector('.body').classList.add("unactive");
}; // Enter full screen

const fullScreenVideo = document.querySelector(".full-scrn-vid");
const fullScreenVideoWrap = document.querySelector(".full-scrn-vid-wrap");

fullScreenVideoWrap.addEventListener("click", function (event) {
    document.querySelector("#about").classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
    event.stopPropagation();
}); // Exit full screen if user click outside 
fullScreenVideo.addEventListener("click", function (event) {
    event.stopPropagation();
});  // Stay exploring if user click inside


let CTRP = document.querySelector('.CTRP-wrap');
let CTRP_contents = document.querySelector('.CTRP-contents-wrap');

document.querySelector(".CTRP-btn").onclick = () => {
    document.querySelector(".CTRP-wrap").classList.add("active");
    document.querySelector('.body').classList.add("unactive");
}; // Enter full screen

document.querySelector("#checkmark").onclick = () => {
    document.querySelector(".CTRP-wrap").classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
}; // Exit full screen

CTRP.addEventListener("click", function (event) {
    CTRP.classList.remove("active");
    document.querySelector('.body').classList.remove("unactive");
    event.stopPropagation();
}); //  Exit if click outside

CTRP_contents.addEventListener("click", function (event) {
    event.stopPropagation();
});



const prcsNav = document.querySelector('.prcs-nav');
const prcsStpIdx = document.querySelector('.prcs-stp-idx');
const prcsTitle = document.querySelector('.prcs-title');
const prcsDescription = document.querySelector('.description.prcs');
const prcsNext2 = document.querySelector('.prcsNext');

const stepsData = [
    {
        title: "Choose a Crypto-Currency Exchange:",
        description: "Select a reputable exchange known for its security measures, user-friendly interface, and support for your specific cryptocurrency. Consider factors such as trading fees, available trading pairs, and customer support options to ensure the exchange meets your needs."
    },
    {
        title: "SIGN UP AND VERIFY:",
        description: "Register for an account on the chosen exchange by providing basic information such as your name, email address, and password. Complete any required verification steps, which may include providing identification documents and proof of address. This verification process helps ensure compliance with regulations and enhances account security."
    },
    {
        title: "DEPOSIT FUNDS:",
        description: "Once your account is set up, deposit funds into it using one of the supported payment methods. This can include bank transfers, credit/debit cards, or other payment options offered by the exchange. Follow the instructions provided by the exchange to complete the deposit process, and be aware of any associated fees or processing times."
    },
    {
        title: "PLACE YOUR ORDER:",
        description: "Navigate to the exchange's trading section and locate the trading pair for your cryptocurrency and dollars (e.g., MEME/USD). Choose whether to place a market order, which executes immediately at the current market price, or a limit order, where you specify the price at which you want to buy. Enter the amount of cryptocurrency you wish to purchase and review the order details before confirming."
    },
    {
        title: "WAIT AND CHECK YOUR WALLET:",
        description: "After placing your buy order, wait for it to be executed by the exchange. This process may happen quickly for market orders or take longer for limit orders, depending on market conditions. Once your order is filled, verify that the purchased cryptocurrency appears in your exchange wallet."
    }
]; // How to Buy Process 

let currentStepIndex = 0; // Initialize current step index

function updateStepContent(index) {
    prcsStpIdx.textContent = index + 1;
    prcsTitle.innerHTML = stepsData[index].title;
    prcsDescription.innerHTML = stepsData[index].description;
}

// Initialize steps
for (let i = 0; i < stepsData.length; i++) {
    let prcsLi = document.createElement("li");
    prcsLi.classList.add("prcs-step");
    prcsNav.appendChild(prcsLi);

    prcsLi.addEventListener("click", function () {
        document.querySelectorAll(".prcs-step").forEach(item => {
            item.classList.remove("active");
        });
        prcsLi.classList.add("active");
        currentStepIndex = i; // Update current step index
        updateStepContent(i);
    });
}

// Initial content setup
updateStepContent(0);
prcsNav.children[0].classList.add("active");

// Button click handler
if (prcsNext2) {
    prcsNext2.addEventListener("click", function () {
        currentStepIndex = (currentStepIndex + 1) % stepsData.length;

        // Update active step in navigation
        document.querySelectorAll(".prcs-step").forEach(item => {
            item.classList.remove("active");
        });
        prcsNav.children[currentStepIndex].classList.add("active");
        updateStepContent(currentStepIndex);
    });

}



document.querySelectorAll('.faq').forEach(faq => {
    faq.addEventListener('click', (event) => {
        event.currentTarget.classList.toggle('active');
    });
}); //  FAQ Q & A Toggler



// # Chart Control

Chart.register(ChartDataLabels);

const ctx = document.getElementById('myPieChart').getContext('2d');
const data = {
    datasets: [{
        data: [50, 25, 16, 10],
        backgroundColor: [
            'rgba(121, 204, 158, 1)',
            'rgba(255, 135, 23, 1)',
            'rgba(226, 254, 165, 1)',
            'rgba(248, 255, 232, 1)'
        ],
        borderColor: 'rgba(0, 0, 0, 1)',
        borderWidth: 4
    }]
};

const options = {
    plugins: {
        legend: {
            display: false
        },
        tooltip: {
            enabled: true // Set to true to enable tooltips on hover
        },
        datalabels: {
            display: false
        }
    },
    cutout: '32%',
    responsive: true,
    maintainAspectRatio: false,
};

Chart.register(ChartDataLabels);

const myPieChart = new Chart(ctx, {
    type: 'doughnut',
    data: data,
    options: options
});








