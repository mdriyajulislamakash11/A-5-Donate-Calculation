
// Donate Calculate

const totalDonateCalculateButton = document.getElementById('donate-btn1');
totalDonateCalculateButton.addEventListener('click', function(){

    const donateNuakhali = parseFloat( document.getElementById('nuakhali-input-amount').value);
    const donateNuakhaliAmount = parseFloat( document.getElementById('nuakhali-donate-amount').innerText);
    const balance = parseFloat(document.getElementById('balance').innerText);

    if(!isNaN(donateNuakhali) && donateNuakhali > 0){

        if(donateNuakhali > balance){
            alert('Invalid donation amount');
            return
        }

        const totalAmount = donateNuakhali + donateNuakhaliAmount;
        const balanceCalculate = balance -donateNuakhali;
    
        document.getElementById('balance').innerText = balanceCalculate
        document.getElementById('nuakhali-donate-amount').innerText = totalAmount
        
    }else{
        
        alert('Invalid Donation amount')
        
    }
});




document.getElementById('donate-btn').addEventListener('click', function(){
    document.getElementById('donate-btn-container').classList.add('hidden');
    document.getElementById('donate-history-btn-container').classList.add('hidden');

    document.getElementById().classList.remove('hidden')
})
