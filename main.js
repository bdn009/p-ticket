function seat(eventId) {
    const event = document.getElementById(eventId);
    const seatList = document.getElementById('seatList');
    const classList = document.getElementById('classList');
    const priceList = document.getElementById('priceList');
    const seatQuantity=document.getElementById('seatQuantity')

    if (event.classList.contains('bg-[#1Dd100]')) {
        event.classList.toggle('bg-[#1Dd100]');
        const seatItems = seatList.querySelectorAll('li');
        const classItems = classList.querySelectorAll('li');
        const priceItems = priceList.querySelectorAll('li');
        seatItems.forEach((item, index) => {
            if (item.innerText === event.innerText) {
                seatList.removeChild(item);
                classList.removeChild(classItems[index]);
                priceList.removeChild(priceItems[index]);
                seatList.children.length=seatQuantity.innerText;
                const price=total.innerText-550
                total.innerText=price
                if(seatList.children.length==0){
                    purchaseBtn.setAttribute('disabled', 'true');
                }
                if(seatList.children.length!=4){
                    applyCupponBtn.setAttribute('disabled', 'ture');
                }
            }
        });
    } else {
        if (seatList.children.length >= 4) {
            alert('You have selected the maximum number of seats.');
        } else {
            event.classList.toggle('bg-[#1Dd100]');
            const selectedSeat = document.createElement('li');
            const selectedClass = document.createElement('li');
            const selectedPrice = document.createElement('li');
            selectedSeat.innerText = event.innerText;
            seatList.appendChild(selectedSeat);
            selectedClass.innerText = "Economy";
            classList.appendChild(selectedClass);
            selectedPrice.innerText = "550";
            priceList.appendChild(selectedPrice);
            const total=document.getElementById('total');
            const price=seatList.children.length*550
            total.innerText=price
            const purchaseBtn=document.getElementById('purchaseBtn');
            if (seatList.children.length > 0) {
                document.getElementById('pName').addEventListener('keyup', function(event){
                if (event.target.value !='') {
                    document.getElementById('pNumber').addEventListener('keyup', function(event1){
                        if (event1.target.value!='') {
                            purchaseBtn.removeAttribute('disabled');
                        }
                    })
                    
                } 
            });
            } 
            if(seatList.children.length==4){
                const applyCupponBtn=document.getElementById('applyCupponBtn');
                applyCupponBtn.removeAttribute('disabled');
                // document.getElementById('cupponCode').addEventListener('keyup', function(element){
                //     if (element.target.value=='NEW15') {
                //         const grandTotal=document.getElementById('grandTotal')
                //         const grandTotalPrice =price*0.15;
                //         grandTotal.innerText=grandTotalPrice
                //     }
                // })
                document.getElementById('applyCupponBtn').addEventListener('click', function(){
                    const couponCode = document.getElementById('cupponCode').value;
                    if (couponCode == 'NEW15') {
                        const grandTotal=document.getElementById('grandTotal')
                        const discount=document.getElementById('discount')
                        const totalDiscount =price*0.15;
                        discount.innerText=totalDiscount
                        const totalWithDiscount=total.innerText-totalDiscount;
                        grandTotal.innerText=totalWithDiscount
                        const cupponSection=document.getElementById('cupponSection')
                        cupponSection.classList.add('hidden')
                    }
                    if (couponCode == 'Couple20') {
                        const grandTotal=document.getElementById('grandTotal')
                        const discount=document.getElementById('discount')
                        const totalDiscount =price*0.2;
                        discount.innerText=totalDiscount
                        const totalWithDiscount=total.innerText-totalDiscount;
                        grandTotal.innerText=totalWithDiscount
                        const cupponSection=document.getElementById('cupponSection')
                        cupponSection.classList.add('hidden')
                    }
                })
            }
        }
    }
    seatQuantity.innerText=seatList.children.length
}
const boxs=document.querySelectorAll('.box')
boxs.forEach(box => {
    box.addEventListener('click', function(){
        seat(box.innerText);
    })
})

