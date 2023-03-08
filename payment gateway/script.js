const body = document.querySelector(".container");
const selectOpt = document.querySelector("#select");
const sendSellectOpt = document.querySelector("#send-select")
const accountDisplay = document.querySelector(".banks");
const payGateways = document.querySelector(".deposits");
const bankButton = document.querySelector(".form-btn");
const buttonHide = document.querySelector("#buttons");
const addBtn = document.querySelector("#add-btn");
const sendBtn = document.querySelector("#send-btn");
const sendMoneyModal = document.querySelector("#send-money-modal");
const bankTransferBtn = document.querySelector(".bank-transfer");
const sendModalClose = document.querySelector(".send-close-btn");
const closeBtn = document.querySelector(".close-btn");
const modalBox = document.querySelector("#add-money-modal");
const pairToPairbtn = document.querySelector("#pair-to-pair");
const CurNameFundWallet = document.querySelector(".fund-wallet h2 span");
const walletToBank = document.querySelector("#bank-deposit");
const walletToBankBtn = document.querySelector(".wallet-to-bank");

const walletTowalletBtn = document.querySelector(".wallet-to-wallet");
const walletTowallet = document.querySelector("#wallet");

walletToBank.classList.add("none");
walletTowallet.classList.add("none");
walletTowalletBtn.addEventListener("click", (e)=>{
    console.log(e.target)
    walletTowallet.classList.toggle("none");
    walletToBank.setAttribute("class","none");
    walletToBankBtn.classList.toggle("none");
})

walletToBankBtn.addEventListener("click",()=>{
    walletTowallet.classList.add("none");
    walletToBank.classList.toggle("none");
    walletTowalletBtn.classList.toggle("none");
})
//By default the modal boxes should not be displayed should 
sendMoneyModal.classList.add("none")
modalBox.setAttribute("class","none");

//opening the modal box for adding money
addBtn.addEventListener("click", (e)=>{
    e.preventDefault()
    modalBox.classList.toggle("add-money-modal");
    console.log(modalBox.classList);
    sendMoneyModal.setAttribute("class","none");
});

//closing the modal for adding money
closeBtn.addEventListener("click", (e)=>{
    console.log(e.target.classList)
    modalBox.setAttribute("class", "none")
})


//closing the send money modal box
sendModalClose.addEventListener("click",()=>{
    sendMoneyModal.setAttribute("class","none");
});
sendBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    console.log(sendMoneyModal.classList)
    sendMoneyModal.classList.toggle("send-money-modal");
    modalBox.setAttribute("class", "none")
})


pairToPairbtn.addEventListener("click",(e)=>{
    e.preventDefault()
    if(e.defaultPrevented){
        console.log("well behaved button")
    }
})



bankTransferBtn.addEventListener("click",()=>{
    accountDisplay.classList.remove("none");
    bankTransferBtn.classList.add("none");
})

// when body is clicked the modal box should disappear

// body.addEventListener("click",(e)=>{
//     if(e.target==e.target.parentElement){
//         modalBox.setAttribute("class", "none");
//         sendMoneyModal.setAttribute("class","none");
//     }
//     console.log(e.target.parentElement)
// })





/*_____________________________________________*/
//The select option for the send modal box.
selectOpt.addEventListener("click",(e)=>{
    console.log(e.target.value)

    switch (e.target.value) {
      case "Naira":
        accountDisplay.classList.remove("none");
        payGateways.classList.add("none");
        CurNameFundWallet.innerHTML = e.target.value;
        bankTransferBtn.classList.add("none");

        //the rest of the logic the value should perform will be written here.
        break;
      case "Cedi":
        payGateways.classList.remove("none");
        accountDisplay.classList.add("none");
        CurNameFundWallet.innerHTML = e.target.value;
        buttonHide.setAttribute("class", "none");
        break;
    case "Dollar":
        payGateways.classList.remove("none");
        accountDisplay.classList.add("none");
        buttonHide.setAttribute("class", "none");
        CurNameFundWallet.innerHTML = e.target.value;
        break;
    case "Yuen":
        payGateways.classList.remove("none");
        accountDisplay.classList.add("none");
        buttonHide.setAttribute("class", "none");
        CurNameFundWallet.innerHTML = e.target.value;
        break;
    case "select-wallet":
        payGateways.classList.add("none");
        accountDisplay.classList.add("none");
        buttonHide.setAttribute("class","buttons");
        CurNameFundWallet.innerHTML = "";
        break;
    }
})



// the select option for the fund wallet.
const walletAvailable = document.querySelector(".fund-wallet p span");
sendSellectOpt.addEventListener("click",(e)=>{
    switch (e.target.value) {
        case "Naira":
            walletAvailable.innerHTML = e.target.value;
            break;
        case "Cedi":
            walletAvailable.innerHTML = e.target.value;
            break;
        case "Dollar":
            walletAvailable.innerHTML = e.target.value;
            break;
        case "Yuen":
            walletAvailable.innerHTML = e.target.value;
            break;
        default:
            walletAvailable.innerHTML = "";
            break;
    }
})

console.log("all good at the moment")