
let item_no = document.querySelector('#item')



let addBtn = document.querySelector('#add');
let subBtn = document.querySelector('#sub');
let qty = document.querySelector('#qtyBox');

addBtn.addEventListener('click', () => {
	qty.value = parseInt(qty.value) + 1;
});

subBtn.addEventListener('click', () => {
	if (qty.value <= 0) {
		qty.value = 0;
	}
	else {
		qty.value = parseInt(qty.value) - 1;
	}
});




let orderbtn = document.querySelector('#total')

orderbtn.addEventListener('click', ()=>{
	price = [ 400, 300, 200 ,300]
	t = qty.value * price[item_no.value-1]

	var res = document.querySelector('#result');
	res.innerHTML = "Your order's total:  " + '<span>&#8377;</span>' + t + "<br>" + "Thank you and have a good day!!"


	console.log(t)
	
})