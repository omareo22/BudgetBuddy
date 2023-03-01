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
let bills = 0;
let food = 0;
let clothing = 0;
let entertainment = 0;
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
    category += parseInt(money);
    totalSpent += parseInt(money);
    totalBudget -= parseInt(money);
    updateBudget(totalBudget);
    updateSpent(totalSpent);
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


})();