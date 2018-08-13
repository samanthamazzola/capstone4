var item = ["Milk", "Eggs", "Cheese", "Bread", "Soap", "Apples"];
var quantity = 1;
var price = [2.99 , 2.50, 4.99 , 3.25 , 5.99 , 4.00];

function addToList(i)
{
    console.log(item[i],quantity[i],price[i]); //passing index through
    var item = document.getElementById("item").value;
    var quantity = document.getElementById("quantity").value;
    var price = document.getElementById("price").value;
    
    var row = receipt.insertRow(1);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);

    // Add some text to the new cells:
    cell1.innerHTML = item;
    cell2.innerHTML = quantity;
    cell3.innerHTML = price;
}




 
   
