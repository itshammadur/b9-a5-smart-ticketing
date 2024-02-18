const seats = document.getElementsByClassName("seatNumber");
let seatPrice = 550;
let count = 0;
let seatDecrement = 40;
for (const seat of seats) {
    seat.addEventListener("click", function select(event) {
        event.target.classList.add('bg-green-500');
        count++;
        seatDecrement--;
        //    create element
        const ticketName = event.target.innerText;
        const ticketPrice = seatPrice;

        //    access display parent
        const showAmount = document.getElementById("showAmount")
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = ticketName;
        const p2 = document.createElement("p");
        p2.innerText = ticketPrice;
        // append
        div.appendChild(p);
        div.appendChild(p2);
        showAmount.appendChild(div);
        // access total price
        const totalPrice = setTextParseInt("totalPrice");
        const sum = totalPrice + ticketPrice;
        // access grand total
        const grandTotal = setTextParseInt("grandTotal");
        const sum2 = grandTotal + ticketPrice;



        textInner("totalPrice", sum);
        textInner("grandTotal", sum2);
        textInner("seatDecrement", seatDecrement);
        textInner("count", count)
    })
}

// access apply btn
const applyBtn = document.getElementById("applyBtn");
applyBtn.addEventListener("click", function () {
    //  coupon box access
    const couponBox = document.getElementById("couponBox").value;
    if (couponBox === "NEW15") {
        const seatTotalPrice = seatPrice * count;
        const discount = seatTotalPrice * .15;
        const showDiscount = document.getElementById("showDiscount")
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = "discount";
        const p2 = document.createElement("p");
        p2.innerText = discount;
        // append
        div.appendChild(p);
        div.appendChild(p2);
        showDiscount.appendChild(div);
        // grand total 
        const grand = seatPrice * count - discount;
        textInner("grandTotal", grand);

    }
    else if (couponBox === "Couple 20") {
        const seatTotalPrice = seatPrice * count;
        const discount = seatTotalPrice * .20;
        const showDiscount = document.getElementById("showDiscount")
        const div = document.createElement("div");
        const p = document.createElement("p");
        p.innerText = "discount";
        const p2 = document.createElement("p");
        p2.innerText = discount;
        // append
        div.appendChild(p);
        div.appendChild(p2);
        showDiscount.appendChild(div);
        // grand total
        const grand = seatPrice * count - discount;
        textInner("grandTotal", grand); 
    }

})