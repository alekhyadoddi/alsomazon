# alsomazon

## Project title and Deployed Link
Bamazon is amazon-like storefront . It accepts commands from the command line and outputs the result which fits the command
 The app will take in orders from customers and deplete stock from the store's inventory. 
## Motivation
It is an intersting way to learn and practice  Node js , though it is a part of assignment

## Technologies used and why
Ex. -



<<b>table JS</b>
-  [cli-table](https://www.npmjs.com/package/cli-table)
<b>is used to arrange content in a table<b>

<<b>mssql npm package</b>
- [mssql](https://www.npmjs.com/package/mssql)
<b>is used to open a connection with a database to run CRUD commands</b>


 



## Features
The functional aspect,handling defaults

## Screenshots
Please find the demo in the below link:
https://drive.google.com/file/d/1Ds4jOuRnSzkMM5sP9uesHF36DjJdCneW/view

## Code Example
when the user types in command thgen it will output result based on the command entered.It is also built to handle defaults .

## Installation
git clone the package from the location:
git pull the code
 run npm install to install all the required node modules
 start running the program by typing  the below commands:
 
node bamazonCustomer.js 


## How to use?
 In order to run this app you should first install the node paclkages listed in package.json 
 On running  will first display all of the items available for sale. Include the ids, names, and prices of products for sale.
 We used table npm package to display the details in a table.

The app  then prompts users with two messages.

   * The first to ask them  the product they would like to buy.
   * The second message asks how many units of the product they would like to buy.

Once the customer has placed the order, the application  checks if the store has enough of the product to meet the customer's request.

   * If not, the app  logs a phrase like `Insufficient quantity!`, and then prevent the order from going through.

However, if  store _does_ have enough of the product, it will fulfill the customer's order.
   * This means updating the SQL database to reflect the remaining quantity.
   * Once the update goes through,it will show the customer the total cost of their purchase.



`node bamazonCustomer.js 

 It will display all the available products along with the prices in a table.
 It will promt the user with questions : What product the user want to buy and the quanity of the product
 
 It takes in the user input , processes the order and will return the total price to the user




## Credits
My CLI class room task

#### Anything else that seems useful

## License
A short snippet describing the license (MIT, Apache etc)

MIT © [Alekhya]()
