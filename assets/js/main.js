const numberInput = document.getElementById("numberInput");
const button = document.getElementById("submitButton");
const numberOutput = document.getElementById("numberOutput");


button.addEventListener('click', () =>{
    let input = numberInput.value;
    numberOutput.innerHTML = input * 2 ;
})
