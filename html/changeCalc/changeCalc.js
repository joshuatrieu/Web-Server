console.log("Hello World!");

//Enter key activates button
document.addEventListener("keydown" , keyDownHandler , false);
function keyDownHandler(e) {
  if (e.keyCode == 13) {
    document.getElementById('myBtn').click();
  }
};

function calculator() {
  let output = document.getElementById('output');
  let changeLeftover = document.getElementById('inputChange').value;
  let quarters;
  let modQuarters;
  let dimes;
  let modDimes;
  let nickels;
  let modNickels;
  let pennies;

  if (changeLeftover < 100 && changeLeftover > 0) {
    quarters = changeLeftover / 25;
    quarters = String(quarters).charAt(0); //This is used to make the division done above into a whole number
    modQuarters = changeLeftover % 25; //what is leftover after dividing by 25 is how many dimes left to calculate

    dimes = modQuarters / 10;
    dimes = String(dimes).charAt(0);
    modDimes = modQuarters % 10;

    nickels = modDimes / 5;
    nickels = String(nickels).charAt(0);
    modNickels = modDimes % 5;

    pennies = modNickels.toFixed(0); //to fixed in case user inputs a decimal place at the end. it rounds the number
    output.innerText =  changeLeftover + ' = ' + quarters + ' quarter(s) ' + dimes + ' dime(s) ' + nickels + ' nickel(s) ' + pennies + ' pennie(s)';
  } else {
    output.innerText = 'Please input a number between 1 and 99.';
  }
};
