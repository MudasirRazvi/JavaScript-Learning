const account_id = 1122334455; // This constant variable can't be changed
let account_email = "mudasirrazvi16@gmail.com"; // This let variable can be changed
var account_password = "1122233"; // This var variable can be changed
var account_city = "lahore"; // This var variable can be changed
let account_state; // Declaring a let variable without assigning a value

// account_id = 5; // Not allowed, will cause an error

account_email = "mudasir@gmail.com"; // Changing the let variable
account_password = "11"; // Changing the var variable
account_city = "islamabad"; // Changing the var variable

console.log("account_id"); // Logging the constant variable name

// Logging the values of the variables in a table format
console.table([account_email, account_password, account_city, account_state]);
