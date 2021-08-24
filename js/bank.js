function getInput(field){
const inputField = document.getElementById(field);
const inputValue = inputField.value;
const inputPrice = parseFloat(inputValue);
inputField.value = '';
return inputPrice;
}

function updatePrice (field, amount){
 const getPriceID= document.getElementById(field);
 const previousprice = getPriceID.innerText;
 const previousAmount = parseFloat(previousprice);
 const totalPrice = previousAmount + amount;
 getPriceID.innerText= totalPrice;
}

function balanceCheck(fields){
    const getTotalBalance = document.getElementById(fields);
    const totalPriceValue = getTotalBalance.innerText;
    const totalPriceAmount = parseFloat(totalPriceValue);
    return totalPriceAmount;
}
function totalBalanceUpdate(amounts,isAdding){
    const getTotalBalance = document.getElementById('balance-total');
    const totalPriceValue = getTotalBalance.innerText;
    const totalPriceAmount = parseFloat(totalPriceValue);
    let totTalpriceis;
    if(isAdding==true){
        totTalpriceis= totalPriceAmount + amounts;
    } else{
        totTalpriceis= totalPriceAmount - amounts;
    }
    
    getTotalBalance.innerText = totTalpriceis;
}




document.getElementById('deposit-button').addEventListener('click',function(){
  const putInput = getInput('deposit-input');
  const balacne = balanceCheck('balance-total');
  if(putInput>0){
  updatePrice('deposit-total', putInput);
  totalBalanceUpdate(putInput,true);
  }
})

document.getElementById('withdraw-button').addEventListener('click', function(){
 const withDrawinput = getInput('withdraw-input');
 const balacne = balanceCheck('balance-total');
 if(withDrawinput>0 && withDrawinput<=balacne){
  updatePrice('withdraw-total', withDrawinput);
  totalBalanceUpdate(withDrawinput,false);
 }

})