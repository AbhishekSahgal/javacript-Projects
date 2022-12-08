const wrapper = document.querySelector(".wrapper")
const generateBtn = wrapper.querySelector(".form button")
const qrinput = wrapper.querySelector(".form input")
const qrImg = wrapper.querySelector(".qr-code img")

generateBtn.addEventListener("click",() => {
   let qrValue = qrinput.value;
   if(!qrValue) return;  // if the input is empy thern return
//    generateBtn.innerText = "Generating QR Code...";
   qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`; 
   qrImg.addEventListener("load",() => {
    wrapper.classList.add("active");
    // generateBtn.innerText = "Generating QR Code...";
   })

});

qrinput.addEventListener("keyup",() => {
    if(!qrinput.value){
    wrapper.classList.remove("active");
    }
})