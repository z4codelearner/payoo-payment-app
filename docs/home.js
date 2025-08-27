
    const validPin = 0;

document.getElementById("add-money").addEventListener ('click', function(e){
    e.preventDefault()

    const bankName = document.getElementById('bank-name').value
    const bankAccountNumber = document.getElementById('bank-account-number').value
    const addAmount = parseInt(document.getElementById('add-amount').value)
    const pinNumber = document.getElementById('pin-number').value
    const availableBalance = parseInt(document.getElementById('available-balance').innerText)

    console.log(addAmount, availableBalance);

    if (bankAccountNumber.lenght < 11){
        alert('Please Provide Valid Account Number')
        return;
    }

    if (pinNumber !== validPin){
        alert('Please Provide Valid Pin Number')
        return;
    }



    const totalNewAvailableBalance = addAmount + availableBalance

    document.getElementById('available-balance').innerText = totalNewAvailableBalance
    
})