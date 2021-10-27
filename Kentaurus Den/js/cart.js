function addToCart(element){
    var productElement = element.parentNode;
    var productName = productElement.childNodes.item(3).innerText;
    var productPrice = parseFloat(productElement.childNodes.item(7).innerText.replace("₱",""));
    var sub = document.getElementById('subtotal');
    var total = document.getElementById('total');
    var current = parseFloat(sub.innerText.replace("₱",""));
    sub.innerText = "₱"+(productPrice + current)+".00";
    var tempTotal = parseFloat(sub.innerText.replace("₱",""))+50;
    total.innerText = "₱"+tempTotal+".00";
}

function checkout(){
    var sub = document.getElementById('subtotal');
    var total = document.getElementById('total');
    sub.innerText = "₱0.00";
    total.innerText = "₱0.00";
    
}