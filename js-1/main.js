// 


// ============ Card 1
document.getElementById('nuakhali-donate-btn')
    .addEventListener('click', function () {
        const nuakhaliinput = getInputValueById('nuakhali-input');
        const nuakhaliDonate = getTextValueById('nuakhali-donate')

        if (!isNaN(nuakhaliinput) && nuakhaliinput > 0) {
            const balance = getTextValueById('balance');

            if(nuakhaliinput > balance){
                alert('invalid');
                return ;
            }

            const nuakhaliDonateAmount = nuakhaliinput + nuakhaliDonate;
            const newBalance = balance - nuakhaliinput;

            document.getElementById('nuakhali-donate').innerText = nuakhaliDonateAmount;
            document.getElementById('balance').innerText = newBalance;

            
        } else {
            alert('invaid input')
        }

    });


// ============ Card 2
document.getElementById('feni-donate-btn')
    .addEventListener('click', function () {
        const feniinput = getInputValueById('feni-input');
        const feniDonate = getTextValueById('feni-donate')

        if (!isNaN(feniinput) && feniinput > 0) {
            const balance = getTextValueById('balance');

            if(feniinput > balance){
                alert('invalid');
                return ;
            }

            const feniDonateAmount = feniinput + feniDonate;
            const newFeniDonaetAmout = balance - feniinput;
            console.log(newFeniDonaetAmout)

            document.getElementById('feni-donate').innerText = feniDonateAmount;
            document.getElementById('balance').innerText = newFeniDonaetAmout;


        } else {
            alert('invalid')
        }

    });



// ============Card 3

document.getElementById('quata-donate-btn')
    .addEventListener('click', function () {
        const quatainput = getInputValueById('quata-input');
        const quataDonate = getTextValueById('quata-donate')

        if (!isNaN(quatainput) && quatainput > 0) {
            const balance = getTextValueById('balance');

            if(quatainput > balance){
                alert('invalid');
                return ;
            }

            const quataDonateAmount = quatainput + quataDonate;
            const newquataDonaetAmout = balance - quatainput;
            console.log(newquataDonaetAmout)

            document.getElementById('quata-donate').innerText = quataDonateAmount;
            document.getElementById('balance').innerText = newquataDonaetAmout;


        } else {
            alert('invalid')
        }

    });