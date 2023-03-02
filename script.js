(function () {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  })
);

let totalBudget = 0;
let billsValue = 0;
let foodValue = 0;
let clothingValue = 0;
let entertainmentValue = 0;
let totalSpent = 0;

document.getElementById("budget-submit").addEventListener("click", (e) => {
  const budgetValue = document.getElementById("budgetValue").value
  updateBudget(budgetValue);
});

document.getElementById("debit-submit").addEventListener("click", (e) => {
  const categoryValue = document.getElementById("category").value;
  const amountValue = document.getElementById("total-amount").value;
  e.preventDefault();
  updateCategory(categoryValue, amountValue);
  
});

function updateCategory(category, money) {
  if (parseInt(money) > totalBudget) {
    window.alert("You don't have enough money for this");
  } else {
    totalSpent += parseInt(money);
    totalBudget -= parseInt(money);
    updateBudget(totalBudget);
    updateSpent(totalSpent);
    switch (category) {
      case "bills":
        billsValue += parseInt(money);
        updateTotal("bills", billsValue);
        break;
      case "entertainment":
        entertainmentValue += parseInt(money);
        updateTotal("entertainment", entertainmentValue);
        break;
      case "food":
        foodValue += parseInt(money);
        updateTotal("food", foodValue);
        break;
      case "clothing":
        clothingValue += parseInt(money);
        updateTotal("clothing", clothingValue);
        break;
    }
  }
}

function updateBudget(budget) {
  const budgetExists = document.getElementById("Budget");
  const budgetNumber = document.createElement('h3');
  const budgetNode = document.createTextNode(budget);
  if (budgetExists === null) { 
    budgetNumber.appendChild(budgetNode)
    budgetNumber.setAttribute("id", "Budget");
    document.getElementById("remaining-container").appendChild(budgetNumber);
    totalBudget = parseInt(budget);
  } else {
    const newBudget = document.getElementById("Budget");
    newBudget.innerText = budget;
    budgetNumber.setAttribute("id", "Budget");
    totalBudget = parseInt(budget);
  }
}

function updateSpent(spent) {
  const spentExists = document.getElementById("Spent");
  const spentNumber = document.createElement('h3');
  const spentNode = document.createTextNode(spent);
  if (spentExists === null) { 
    spentNumber.appendChild(spentNode)
    spentNumber.setAttribute("id", "Spent");
    document.getElementById("spent-container").appendChild(spentNumber);
    totalSpent = parseInt(spent);
  } else {
    const newSpent = document.getElementById("Spent");
    newSpent.innerText = spent;
    spentNumber.setAttribute("id", "Budget");
    totalSpent = parseInt(spent);
  }
}

function updateTotal(category, values) {
  const nameLI = `${category}Name`;
  const nameExist = document.getElementById(nameLI);
  const nameList = document.createElement('li');
  const nameNode = document.createTextNode(`${category}`);
  
  if (nameExist === null) { 
    nameList.appendChild(nameNode);
    nameList.setAttribute("id", nameLI);
    document.getElementById("name-list").appendChild(nameList);
   }

  const updateExists = document.getElementById(category);
  const updateNumber = document.createElement('li');
  const updateNode = document.createTextNode(`${values}`);
  if (updateExists === null) { 
    updateNumber.appendChild(updateNode);
    updateNumber.setAttribute("id", category);
    document.getElementById("number-list").appendChild(updateNumber);
  } else {
    const newUpdate = document.getElementById(category);
    newUpdate.innerText = `${values}` ;
    updateNumber.setAttribute("id", category);
  }
}

})();