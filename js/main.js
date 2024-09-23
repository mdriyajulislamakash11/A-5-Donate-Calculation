
// Another html file linked
document.getElementById('Blog-btn').addEventListener('click', function(){
    console.log('clicked');
    window.location.href = './question.html';
})

// Donate Calculate

const totalDonateCalculateButton = document.getElementById('donate-btn1');
totalDonateCalculateButton.addEventListener('click', function(){

    const donateNuakhali = parseFloat( document.getElementById('nuakhali-input-amount').value);
    const donateNuakhaliAmount = parseFloat( document.getElementById('nuakhali-donate-amount').innerText);
    const balance = parseFloat(document.getElementById('balance').innerText);

    if(!isNaN(donateNuakhali) && donateNuakhali > 0){

        if(donateNuakhali > balance){
            alert('Invalid Donation amount')
            return
        }

        const totalAmount = donateNuakhali + donateNuakhaliAmount;
        const balanceCalculate = balance -donateNuakhali;
    
        document.getElementById('balance').innerText = balanceCalculate
        const totalDonateAmount = document.getElementById('nuakhali-donate-amount').innerText = totalAmount
        return totalDonateAmount;
    }else(
        alert('Invalid Donation amount')
        
    )

    

});

