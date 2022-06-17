var bcart = document.querySelector('#bcart');
var btotal = document.querySelector('#btotal');
// agregar pizza
function addBurguer(bid){
    burguerId = '#bur' + bid;
    var name = document.querySelector(burguerId).innerHTML;
    var radio = 'burguer' + bid;
    var pri = document.getElementsByName(radio);
    var size, price;
    if (pri[0].checked){
        price = pri[0].value;
        size = 'M';
    }
    else{
       price = pri[1].value;
       size = 'G';
    }
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    orders[cartSize] = [name, size, price];
    localStorage.setItem('orders',JSON.stringify(orders));
    total = Number(total) + Number(price);
    total = Math.round((total + Number.EPSILON)*100)/100;
    localStorage.setItem('total', total);
    
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;
    butto = '<button class="del" onclick="removeBurguer(' + cartSize + ')">x<button/>';
    btotal.innerHTML = 'Total: $ '+ total;
    bcart.innerHTML += '<li>' + name +' '+ size +': '+price+'$' + butto + '</li>';
}

function bshoppingCart() {
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    var cartSize = orders.length;
    bcart.innerHTML = '';
    for (let i = 0; i < cartSize; i++){
        butto = '<button class="del" onclick="removeBurguer(' + i + ')">x<button/>';
        bcart.innerHTML += '<li>' + orders[i][0] +' '+ orders[i][1] +': '+ orders[i][2]+'$' + butto + '</li>';
    }
    btotal.innerHTML = 'Total: $ '+ total;
}

bshoppingCart();

function removeBurguer(n){
    var orders = JSON.parse(localStorage.getItem('orders'));
    var total = localStorage.getItem('total');
    total = Number(total) - Number(orders[n][2]);
    orders.splice(n,1);
    var cart = document.querySelector("#cart");
    cart.innerHTML = orders.length;
    localStorage.setItem('orders',JSON.stringify(orders));
    localStorage.setItem('total',total);
    bshoppingCart();
}