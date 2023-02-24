const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
   // Get all the prices from the HTML table
  const prices = document.querySelectorAll('.price');

  // Initialize a variable to hold the total price
  let totalPrice = 0;

  // Loop through the prices and add them to the total price
  for (let i = 0; i < prices.length; i++) {
	totalPrice += parseFloat(prices[i].textContent);
  }

  // Create a new row for the total price
  const totalRow = document.createElement('tr');
  const totalCell = document.createElement('td');
	totalCell.setAttribute('id','ans');
  // Set the text content of the total cell to the total price
  totalCell.textContent = `Total Price : ${totalPrice}`;

  // Add the total cell to the total row and add the total row to the table
  totalRow.appendChild(totalCell);
  document.querySelector('table').appendChild(totalRow);
};

getSumBtn.addEventListener("click", getSum);

