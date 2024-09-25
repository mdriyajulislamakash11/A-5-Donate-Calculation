// donate card 


// ============ Card 1
document.getElementById('nuakhali-donate-btn')
    .addEventListener('click', function () {
        const nuakhaliInput = getInputValueById('nuakhali-input');
        const nuakhaliDonate = getTextValueById('nuakhali-donate');
        


        if (!isNaN(nuakhaliInput) && nuakhaliInput > 0) {
            const balance = getTextValueById('balance');

            if (nuakhaliInput > balance) {
                alert('Please insure that your Valid input amount and available balance.');
                return;
            }

            const nuakhaliDonateAmount = nuakhaliInput + nuakhaliDonate;
            const newBalance = balance - nuakhaliInput;

            document.getElementById('nuakhali-donate').innerText = parseFloat(nuakhaliDonateAmount.toFixed(2));
            document.getElementById('balance').innerText = parseFloat(newBalance.toFixed(2));



            document.getElementById('on-a').classList.remove('hidden')


            // donation history 
            const historyList = document.getElementById("history-list");
            
            const card = document.createElement('div')
            card.classList.add("p-8", "border-2", "w-full", "rounded")
            card.innerHTML =`
            <p class="text-[20px] font-bold mb-3"> 
                ${nuakhaliInput} Taka is Donated for Flood Relief in Nuakhali,Bangladesh
            </p>
            <p>
                ${new Date()}
            </p>

            `
            historyList.prepend(card)
            console.log(historyList)

        } else {
            alert('Please insure that your Valid input amount and available balance.');
        }

    });

    
    document.getElementById('off-a').addEventListener('click',function(){
        document.getElementById('on-a').classList.add('hidden')
    })


// ============ Card 2
document.getElementById('feni-donate-btn')
    .addEventListener('click', function () {
        const feniInput = getInputValueById('feni-input');
        const feniDonate = getTextValueById('feni-donate')

        if (!isNaN(feniInput) && feniInput > 0) {
            const balance = getTextValueById('balance');

            if (feniInput > balance) {
                alert('Please insure that your Valid input amount and available balance.');
                return;
            }

            const feniDonateAmount = feniInput + feniDonate;
            const newFeniDonaetAmout = balance - feniInput;
            console.log(newFeniDonaetAmout)

            document.getElementById('feni-donate').innerText = parseFloat(feniDonateAmount.toFixed(2));
            document.getElementById('balance').innerText = parseFloat(newFeniDonaetAmout.toFixed(2));

            document.getElementById('on-b').classList.remove('hidden')


           
            // donation history 
            const historyList = document.getElementById("history-list");
            
            const card = document.createElement('div')
            card.classList.add("p-8", "border-2", "w-full", "rounded")
            card.innerHTML =`
            <p class="text-[20px] font-bold mb-3"> 
                ${feniInput} Taka is Donated for Flood Relief in Nuakhali,Bangladesh
            </p>
            <p>
                ${new Date()}
            </p>

            `
            historyList.prepend(card)

        } else {
            alert('Please insure that your Valid input amount and available balance.');
        }

    });

    document.getElementById('off-b').addEventListener('click',function(){
        document.getElementById('on-b').classList.add('hidden')
    })



// ============Card 3

document.getElementById('quata-donate-btn')
    .addEventListener('click', function () {
        const quataInput = getInputValueById('quata-input');
        const quataDonate = getTextValueById('quata-donate')

        if (!isNaN(quataInput) && quataInput > 0) {
            const balance = getTextValueById('balance');

            if (quataInput > balance) {
                alert('Please insure that your Valid input amount and available balance.');
                return;
            }

            const quataDonateAmount = quataInput + quataDonate;
            const newquataDonaetAmout = balance - quataInput;
            console.log(newquataDonaetAmout)

            document.getElementById('quata-donate').innerText = parseFloat(quataDonateAmount.toFixed(2));
            document.getElementById('balance').innerText = parseFloat(newquataDonaetAmout.toFixed(2));

            document.getElementById('on-c').classList.remove('hidden')

            
            // donation history 
            const historyList = document.getElementById("history-list");
            
            const card = document.createElement('div')
            card.classList.add("p-8", "border-2", "w-full", "rounded")
            card.innerHTML =`
            <p class="text-[20px] font-bold mb-3"> 
                ${quataInput} Taka is Donated for Flood Relief in Nuakhali,Bangladesh
            </p>
            <p>
                ${new Date()}
            </p>

            `
            historyList.prepend(card)

        } else {
            alert('Please insure that your Valid input amount and available balance.');
        }

    });

    document.getElementById('off-c').addEventListener('click',function(){
        document.getElementById('on-c').classList.add('hidden')
    })


// ====================== =  Switch Button = =================================//


document.getElementById('history-switch-btn')
    .addEventListener('click', function () {
        document.getElementById('history-switch-btn').classList.add('bg-lime-400');
        document.getElementById('donate-switch-btn').classList.remove('bg-lime-400');
        document.getElementById('donate-btn-container').classList.add('hidden');
        document.getElementById('history-list').classList.remove('hidden')
    });


    document.getElementById('donate-switch-btn')
    .addEventListener('click', function () {
        document.getElementById('history-switch-btn').classList.remove('bg-lime-400');
        document.getElementById('donate-switch-btn').classList.add('bg-lime-400');
        document.getElementById('donate-btn-container').classList.remove('hidden');
        document.getElementById('history-list').classList.add('hidden')
    });
