// Login Button Functionality
document.getElementById('loginBtn').addEventListener("click", function(e){
    e.preventDefault()
    const mobileNumber = 12345678910;
    const pinNumber = 1234;

    const mobileNumberValue = document.getElementById("mobile-number").value
    const mobileNumberValueConverted = parseInt (mobileNumberValue);

    const pinNumberValue = document.getElementById("pin-number").value
    const pinNumberConverted = parseInt (pinNumberValue);

    console.log(mobileNumberValueConverted, pinNumberConverted);

    if(mobileNumberValueConverted === mobileNumber && pinNumberConverted === pinNumber){
        window.location.href='./home.html'
    } else{
        alert('Invalid Creadentials')
    }
})