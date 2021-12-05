const billamount= document.querySelector("#bill-amount");
const cashgiven=document.querySelector("#cash-given");
const chackbutton=document.querySelector("#chack-button");
const message=document.querySelector("#error-message");
const noOfNotes=document.querySelectorAll(".no-of-notes");

const availabeleNotes=[2000,500,100,20,10,5,1]
chackbutton.addEventListener("click",function validateBillAndChasAmount(){
    hideMessage();
    if(billamount.value>0){
        if(cashgiven.value >billamount.value){
            const amountToBeReturned=cashgiven.value-billamount.value;
            calculateChange(amountToBeReturned);
        }else{
            showResult("Do you wanna wash plates?")
        }
    }else{
        showResult("invailed billamount");
        
    }
});
function calculateChange(amountToBeReturned){
    for(let i=0;i< availabeleNotes.length;i++){
        const numberOfNotes=Math.trunc(
            amountToBeReturned/availabeleNotes[i]
        )
        amountToBeReturned%=availabeleNotes[i];
        noOfNotes[i].innerText=numberOfNotes
    }

}
function hideMessage(){
    message.style.display="none";
}
function showResult(msg){
    message.style.display="block";
    message.innerText=msg
}