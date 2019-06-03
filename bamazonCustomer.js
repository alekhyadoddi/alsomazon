// In `bamazonCustomer.js`.
 
var Table =require('cli-table');
var mysql=require("mysql");// requiring mysql node package so that we can connect to mysql  and run CRUD commands
 var inquirer=require("inquirer"); //reuiring inquirer node package. Inquirer is used to prompt questions during the run time and accept responses
var divider="================================================================";
var nextline="\n";

//  Running this application will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
// connect();
// function connect(){
    // console.log("inside connect");
var connection = mysql.createConnection({
    host: "localhost",
  
    // Your port; if not 3306
    port: 3306,
  
    // Your username
    user: "root",
  
    // Your password
    password: "password",
    database: "bamazon"
  });

  connection.connect(function(err) {
    if (err) throw err;
    run();
  });
// }
  function run() {
    connection.query("select item_id, product_name,price from products",function(err,allproducts){
    if(err) throw err;
// console.log(allproducts);

console.log(nextline+divider+nextline+"The below are all the available products"+nextline+divider);
const table = new Table({
    chars: { 'top': '═' , 'top-mid': '╤' , 'top-left': '╔' , 'top-right': '╗'
           , 'bottom': '═' , 'bottom-mid': '╧' , 'bottom-left': '╚' , 'bottom-right': '╝'
           , 'left': '║' , 'left-mid': '╟' , 'mid': '─' , 'mid-mid': '┼'
           , 'right': '║' , 'right-mid': '╢' , 'middle': '│' }
  });
  
  table.push(
      ['Item ID', 'Product Name', 'Price']
    
  );
  


// console.log("Item ID      "+"Product Name   "+ "Price     "+nextline+divider);
for(var i=0;i<allproducts.length;i++){
// console.log(allproducts[i].item_id+"                  "+allproducts[i].product_name+"                "+allproducts[i].price+nextline);
table.push(
    [allproducts[i].item_id, allproducts[i].product_name, allproducts[i].price]
  
);
}
console.log(table.toString());
askuser();
});
 
  }


  // 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.


function askuser()
 {
// 6. The app should then prompt users with two messages.

//    * The first should ask them the ID of the product they would like to buy.
//    * The second message should ask how many units of the product they would like to buy.
  inquirer.prompt([
    {
      type: "Input",
      name: "productname",
      message: "what product would you like to buy today?"
    },
{
    type: "Input",
    name: "quantity",
    message: "How many units would you like to buy today?"  
}])
        .then (function (userresponse) {
        // 7. Once the customer has placed the order, your application should check if your store has enough of the product to meet the customer's request.

//    * If not, the app should log a phrase like `Insufficient quantity!`, and then prevent the order from going through.

// 8. However, if your store _does_ have enough of the product, you should fulfill the customer's order.
//    * This means updating the SQL database to reflect the remaining quantity.
//    * Once the update goes through, show the customer the total cost of their purchase.

// - - -
// console.log(userresponse);
connection.query("select * from products where ?",[{product_name:userresponse.productname}],function(err,productinfo){
    if(err) throw err;
//  console.log(productinfo);
if(productinfo=== undefined || productinfo.length == 0)
{
  
    console.log("Invalid product ! Please select a valid product from the list above")
 
}

else
{
var orderquantity=parseInt(userresponse.quantity) ;
// console.log(orderquantity);

var quantity=parseInt(productinfo[0].stock_quantity);
console.log(nextline+"Currently Available : "+quantity);
var price=productinfo[0].price;
console.log(nextline+"Price per unit : $"+price);
var remaining=quantity-orderquantity;
console.log(nextline+"No. of units remaining : "+remaining);
var totalcost=orderquantity*price;
console.log("Total Cost : $"+totalcost);
            if (orderquantity > quantity) {
                console.log(nextline+"Sorry your order has been cancelled.Insufficient quantity!");
        
            }
            else  {
             console.log(nextline+"Your order is being processesed .................."+ nextline);
             connection.query(
                "UPDATE products SET ? WHERE ?",
                [
                  {
                    stock_quantity: remaining
                  },
                  {
                    product_name: userresponse.productname
                  }
                ],
                function(error) {
                  if (error) throw err;
                  console.log(nextline+"*************************Order placed successfully!************************"
                  +nextline +"Your total cost is $"
                  +totalcost+nextline);
                 
                }
              );
              connection.end();
            }
          }
          
        })
})
 }
 


