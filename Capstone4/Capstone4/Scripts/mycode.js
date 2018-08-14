var item = ["Milk", "Eggs", "Cheese", "Bread", "Soap", "Apples"];
var quantity = [1,1,1,1,1,1];
var price = [2.99 , 2.50, 4.99 , 3.25 , 5.99 , 4.10];
var itemPrice = 0;
var total = 1;


function addToList(index)
{
    console.log(item[index],quantity[index],price[index]); //passing index through
    addItem = document.getElementById("item").value;
    addQuantity = document.getElementById("quantity").value;
    addPrice = document.getElementById("price").value;
    
    var row = receipt.insertRow(1);

    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerText = item[index];
    cell2.innerText = quantity[index];
    cell3.innerText = price[index];

}

var total = 

function printOrderTotal(index)
{
    var orderItem = document.getElementById("item").value;
    var orderQuantity = document.getElementById("quantity").value;
    var orderPrice = document.getElementById("price").value;

    var total = document.getElementById("item").innerHTML = price * quantity;


    for(var i = 1; i <= receipt.length; i++){
        if (quantity[i] > 0)
        {
          console.log(receipt[i]);
        }
          console.log(itemPrice.toFixed(2));

    }   
    
}






 
   
