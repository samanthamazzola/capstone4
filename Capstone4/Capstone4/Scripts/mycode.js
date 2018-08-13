
function printMessage()
{
    var x = 10; 

    for (var i = 1; i <= x; i++) {
        console.log(i); 
    }


    //console.log("Hello");// this will print a message to the console 

}

function add()
{
// read the data from the text boxes
    var num1 = parseInt(document.getElementById("num1").value);
    var num2 = parseInt(document.getElementById("num2").value);
// add the numbers
      var result = num1 + num2;
// show the result 
    alert(result);

}

function addToList()
{
    var itemName = document.getElementById("itemName").value;
    var quantity = document.getElementById("quantity").value;
    var shoppingList = document.getElementById("shoppingList");
    
    var row = shoppingList.insertRow(1);
    // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    // Add some text to the new cells:
    cell1.innerHTML = itemName;
    cell2.innerHTML = quantity;
}